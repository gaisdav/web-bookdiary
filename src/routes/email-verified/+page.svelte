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

	let status: 'verifying' | 'verified' | 'error' = 'verifying';
	let errorMessage = '';

	onMount(async () => {
		if (!supabase) {
			errorMessage =
				'Supabase is not configured. Please set PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY in your .env file.';
			status = 'error';
			return;
		}

		const tokenHash = $page.url.searchParams.get('token_hash');

		if (!tokenHash) {
			// An email sent under the old template went through Supabase's own
			// verify endpoint first, which put the outcome in the fragment.
			const fragment = new URLSearchParams($page.url.hash.slice(1));
			if (fragment.get('error') || fragment.get('error_code')) {
				errorMessage = INVALID_LINK;
				status = 'error';
				return;
			}
			// supabase-js has already stored the session that fragment carried.
			await supabase.auth.signOut({ scope: 'local' });
			status = 'verified';
			return;
		}

		const type = ($page.url.searchParams.get('type') ?? 'signup') as EmailOtpType;
		if (!SUPPORTED_TYPES.includes(type)) {
			errorMessage = 'This link is not an email confirmation link.';
			status = 'error';
			return;
		}

		const { error } = await supabase.auth.verifyOtp({ token_hash: tokenHash, type });

		if (error) {
			errorMessage = INVALID_LINK;
			status = 'error';
			return;
		}

		// The site has no signed-in UI, so don't leave a session behind in a
		// browser that may not belong to the user. 'local' ends only this one:
		// the default would sign the account out everywhere, the app included.
		await supabase.auth.signOut({ scope: 'local' });
		status = 'verified';
	});
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
		{:else if status === 'error'}
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

	.store-link {
		background-color: var(--color-primary-soft);
		color: var(--color-primary-dark);
	}

	.store-link:hover {
		background-color: var(--color-border);
	}
</style>
