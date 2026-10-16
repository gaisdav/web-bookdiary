<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { EmailOtpType } from '@supabase/supabase-js';
	import { supabase } from '$lib/supabase';
	import { APP_OPEN_URL } from '$lib/appScheme';
	import { APP_STORE_URL, googlePlayUrl } from '$lib/storeLinks';
	import InfoLayout from '$lib/components/InfoLayout.svelte';
	import StatusMark from '$lib/components/StatusMark.svelte';

	// The signup confirmation email links here with a `token_hash`. Where the
	// Readimus app is installed it claims this path (AASA / Android
	// intent-filter) and confirms the address itself, so this page is what
	// everyone else gets: no app on this device, or a browser that keeps links
	// to itself.
	//
	// The same two types the app accepts. `recovery` is absent on purpose: it
	// belongs to /reset-password, and verifying it here would burn the one-time
	// token before that page ever sees it.
	const SUPPORTED_TYPES: EmailOtpType[] = ['signup', 'email'];
	const INVALID_LINK = 'This confirmation link is invalid, expired, or was already used.';

	// 'retry': Supabase never refused the link, so its token is most likely
	// unspent and trying again can still work. 'halfway': the first of the two
	// links an email change sends was accepted (see confirm()).
	type TStatus = 'verifying' | 'verified' | 'halfway' | 'failed' | 'retry';
	let status: TStatus = 'verifying';
	let errorMessage = '';
	// The app's email change from Settings lands here as well, through the
	// Site URL; its success should not thank the user for registering.
	let isEmailChange = false;

	// Supabase refusing the link outright: `otp_expired` (expired, already used
	// or never issued — it reports all three that way) or any other 4xx but a
	// rate limit. No answer, a 5xx or a 429 says nothing about the link itself.
	// The app draws the same line (isEmailLinkRejectedError).
	function isLinkRejected(error: { code?: string; status?: number }): boolean {
		return (
			error.code === 'otp_expired' ||
			(error.status !== undefined &&
				error.status >= 400 &&
				error.status < 500 &&
				error.status !== 429)
		);
	}

	function fail(message: string) {
		errorMessage = message;
		status = 'failed';
	}

	async function confirm() {
		status = 'verifying';

		if (!supabase) {
			fail(
				'Supabase is not configured. Please set PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY in your .env file.'
			);
			return;
		}

		const tokenHash = $page.url.searchParams.get('token_hash');

		if (!tokenHash) {
			// An email sent under the old template went through Supabase's own
			// verify endpoint first, which put the outcome in the fragment. Read
			// from $page.url, captured on load: supabase-js clears the live hash
			// once it has taken the session out of it.
			const fragment = new URLSearchParams($page.url.hash.slice(1));
			if (fragment.get('error') || fragment.get('error_code')) {
				fail(INVALID_LINK);
				return;
			}
			if (fragment.get('access_token')) {
				// supabase-js has already stored the session that fragment carried.
				await supabase.auth.signOut({ scope: 'local' });
				isEmailChange = fragment.get('type') === 'email_change';
				status = 'verified';
				return;
			}
			// With Secure Email Change on, an email change sends two links, and
			// the first one comes back with no session, only
			// `#message=Confirmation link accepted…`. Only its presence is read:
			// a link can carry any text there, so it is never shown.
			if (fragment.get('message')) {
				status = 'halfway';
				return;
			}
			// Neither a token nor an outcome: the page was opened by hand, or a
			// mail client cut the link short. Nothing was confirmed.
			fail(
				'This link is incomplete. Open the confirmation link from the email again, and if you copied it by hand, make sure you copied all of it.'
			);
			return;
		}

		const type = ($page.url.searchParams.get('type') ?? 'signup') as EmailOtpType;
		if (!SUPPORTED_TYPES.includes(type)) {
			fail('This link is not an email confirmation link.');
			return;
		}

		let error: { code?: string; status?: number } | null;
		try {
			({ error } = await supabase.auth.verifyOtp({ token_hash: tokenHash, type }));
		} catch {
			// supabase-js returns its own errors; what it throws never reached
			// Supabase at all.
			status = 'retry';
			return;
		}

		if (error) {
			if (isLinkRejected(error)) {
				fail(INVALID_LINK);
			} else {
				status = 'retry';
			}
			return;
		}

		// The site has no signed-in UI, so don't leave a session behind in a
		// browser that may not belong to the user. 'local' ends only this one:
		// the default would sign the account out everywhere, the app included.
		await supabase.auth.signOut({ scope: 'local' });
		status = 'verified';
	}

	onMount(confirm);

	type THeader = { eyebrow: string; title: string; intro: string };

	function headerFor(current: TStatus, emailChange: boolean, message: string): THeader {
		switch (current) {
			case 'verifying':
				return {
					eyebrow: 'Email confirmation',
					title: 'Checking your link…',
					intro: 'This only takes a moment.'
				};
			case 'verified':
				return emailChange
					? {
							eyebrow: 'Email confirmed',
							title: 'New email confirmed.',
							intro: 'From now on, sign in to Readimus with your new address.'
						}
					: {
							eyebrow: 'Email confirmed',
							title: 'You’re all set.',
							intro: 'Your email is confirmed and your Readimus account is ready.'
						};
			case 'halfway':
				return {
					eyebrow: 'Email change',
					title: 'One more link to go.',
					intro:
						'We’ve accepted this confirmation. To finish changing your email, open the link we sent to your other address.'
				};
			case 'retry':
				return {
					eyebrow: 'Email confirmation',
					title: 'We couldn’t check your link.',
					intro: 'The server didn’t answer. Your link is most likely still valid.'
				};
			case 'failed':
				return { eyebrow: 'Email confirmation', title: 'This link didn’t work.', intro: message };
		}
	}

	$: header = headerFor(status, isEmailChange, errorMessage);
	const ICONS = {
		verifying: 'spinner',
		verified: 'check',
		halfway: 'mail',
		retry: 'retry',
		failed: 'alert'
	} as const;
	// The mark's colour follows the outcome: brand for progress and success,
	// amber for "try again", red for a link that will not work.
	let tone: 'brand' | 'warning' | 'error';
	$: tone = status === 'failed' ? 'error' : status === 'retry' ? 'warning' : 'brand';
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<InfoLayout
	pageTitle="Email confirmation"
	description="Confirm the email address of your Readimus account."
	eyebrow={header.eyebrow}
	title={header.title}
	intro={header.intro}
	live
>
	<svelte:fragment slot="mark">
		<StatusMark icon={ICONS[status]} {tone} />
	</svelte:fragment>

	{#if status === 'verified'}
		<section class="card card-accent">
			<h2>Continue in the app</h2>
			<p>
				{isEmailChange
					? 'Open Readimus: you stay signed in, and your account now uses the new address.'
					: 'Open Readimus and sign in with the email and password you signed up with.'}
			</p>
			<a class="button button-primary" href={APP_OPEN_URL}>Open Readimus</a>
		</section>
		<p class="aside">
			On a computer? Open Readimus on your phone instead. Don’t have it there yet?
			<a href={APP_STORE_URL}>Get it on the App Store</a> or
			<a href={googlePlayUrl('email-verified')}>Google Play</a>.
		</p>
	{:else if status === 'halfway'}
		<section class="card">
			<h2>Check your other inbox</h2>
			<p>
				The change is complete once you open the second link. Until then, keep signing in with your
				current email.
			</p>
		</section>
	{:else if status === 'retry'}
		<section class="card card-accent">
			<h2>Try again in a moment</h2>
			<p>Check your internet connection, then run the check again.</p>
			<button type="button" class="button button-primary" on:click={confirm}>Try again</button>
		</section>
	{:else if status === 'failed'}
		<section class="card">
			<h2>What to do next</h2>
			<ul>
				<li>Already confirmed your email? Then you’re done: sign in to Readimus.</li>
				<li>Otherwise, request a new confirmation email in the Readimus app and open the newest link.</li>
			</ul>
			<p class="help">Still stuck? <a href="/support">Get help</a></p>
		</section>
	{/if}
</InfoLayout>

<style>
	.card .button {
		margin-top: 22px;
	}

	.aside {
		padding: 0 clamp(24px, 5vw, 42px);
		font-size: 0.95rem;
	}

	.help {
		margin-top: 14px;
	}
</style>
