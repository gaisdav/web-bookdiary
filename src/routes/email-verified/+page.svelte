<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { env } from '$env/dynamic/public';
	import type { EmailOtpType } from '@supabase/supabase-js';
	import { supabase } from '$lib/supabase';
	import { APP_OPEN_URL } from '$lib/appScheme';
	import { googlePlayUrl } from '$lib/storeLinks';
	import Footer from '$lib/components/Footer.svelte';

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

	const { PUBLIC_APP_STORE_URL } = env;

	// 'retry': Supabase never refused the link, so its token is most likely
	// unspent and trying again can still work.
	let status: 'verifying' | 'verified' | 'failed' | 'retry' = 'verifying';
	let errorMessage = '';

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
			// Neither a token nor an outcome: the page was opened by hand, or a
			// mail client cut the link short. Nothing was confirmed.
			if (!fragment.get('access_token')) {
				fail(
					'This link is incomplete. Open the confirmation link from the email again, and if you copied it by hand, make sure you copied all of it.'
				);
				return;
			}
			// supabase-js has already stored the session that fragment carried.
			await supabase.auth.signOut({ scope: 'local' });
			status = 'verified';
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
</script>

<svelte:head>
	<title>Confirm Your Email - Readimus</title>
	<meta name="robots" content="noindex" />
	<meta name="description" content="Confirm the email address of your Readimus account" />
</svelte:head>

<div class="container">
	<div class="card">
		{#if status === 'verifying'}
			<p class="icon">⏳</p>
			<h1>Confirming your email…</h1>
			<p>One moment while we check your link.</p>
		{:else if status === 'retry'}
			<p class="icon">⚠️</p>
			<h1>Couldn't confirm right now</h1>
			<p>
				We couldn't get an answer from the server. Your link should still work, so give it
				another go in a moment.
			</p>
			<button type="button" class="app-link" on:click={confirm}>Try again</button>
		{:else if status === 'failed'}
			<p class="icon">⚠️</p>
			<h1>Confirmation failed</h1>
			<p>{errorMessage}</p>
			<p>
				Already confirmed it? Just sign in to the Readimus app. Otherwise, request a new
				confirmation email from the app and try again.
			</p>
		{:else}
			<p class="icon">✅</p>
			<h1>Email Verified!</h1>
			<p>Your email address has been successfully verified.</p>
			<p>Thank you for registering with Readimus.</p>
			<p>Open the app and sign in to start exploring your personal book diary.</p>

			<div class="app-links">
				<a href={APP_OPEN_URL} class="app-link">Open Readimus</a>
				{#if PUBLIC_APP_STORE_URL}
					<a href={PUBLIC_APP_STORE_URL} class="store-link">Download on the App Store</a>
				{/if}
				<a href={googlePlayUrl('email-verified')} class="store-link">Get it on Google Play</a>
			</div>
		{/if}
	</div>

	<Footer />
</div>

<style>
	.container {
		max-width: 600px;
		margin: 0 auto;
		padding: var(--spacing-xxl) var(--spacing-md);
		text-align: center;
	}

	.card {
		background-color: var(--color-tab-bar);
		padding: var(--spacing-xxl);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-medium);
	}

	.icon {
		font-size: var(--font-size-xxxl);
		margin-bottom: var(--spacing-md);
	}

	h1 {
		color: var(--color-primary);
		border-bottom: 2px solid var(--color-border-light);
		padding-bottom: var(--spacing-md);
		margin-bottom: var(--spacing-md);
		font-size: var(--font-size-xxl);
	}

	p {
		margin-bottom: var(--spacing-md);
		line-height: var(--line-height-lg);
	}

	.app-links {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		margin-top: var(--spacing-lg);
	}

	.app-link,
	.store-link {
		padding: var(--spacing-sm) var(--spacing-lg);
		border-radius: var(--radius-md);
		text-decoration: none;
		font-weight: 600;
		transition: background-color var(--timing-fast) ease;
	}

	.app-link {
		background-color: var(--color-primary-dark);
		color: var(--color-text-inverse);
	}

	button.app-link {
		border: none;
		font: inherit;
		font-weight: 600;
		cursor: pointer;
	}

	.store-link {
		background-color: var(--color-primary-soft);
		color: var(--color-primary-dark);
	}

	.store-link:hover {
		background-color: var(--color-border);
	}
</style>
