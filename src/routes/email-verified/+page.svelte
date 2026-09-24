<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { EmailOtpType } from '@supabase/supabase-js';
	import { supabase } from '$lib/supabase';
	import AppLinks from '$lib/components/AppLinks.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Password recovery is deliberately absent: it belongs to /reset-password, and
	// verifying it here would burn the one-time token before that page sees it.
	const SUPPORTED_TYPES = ['signup', 'email', 'email_change'] as const;

	let status: 'verifying' | 'verified' | 'error' = 'verifying';
	let errorMessage = '';

	onMount(async () => {
		const tokenHash = $page.url.searchParams.get('token_hash');

		// Links from the old email template are verified by Supabase itself before
		// it redirects here, so there is no token left to exchange.
		if (!tokenHash) {
			status = 'verified';
			return;
		}

		if (!supabase) {
			errorMessage =
				'Supabase is not configured. Please set PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY in your .env file.';
			status = 'error';
			return;
		}

		const typeParam = $page.url.searchParams.get('type') ?? 'signup';
		if (!SUPPORTED_TYPES.includes(typeParam as (typeof SUPPORTED_TYPES)[number])) {
			errorMessage = 'This link is not an email confirmation link.';
			status = 'error';
			return;
		}

		const { error } = await supabase.auth.verifyOtp({
			token_hash: tokenHash,
			type: typeParam as EmailOtpType
		});

		if (error) {
			errorMessage = 'This confirmation link is invalid, expired, or was already used.';
			status = 'error';
			return;
		}

		// The web app has no signed-in UI; don't leave a session behind in a browser
		// that may not belong to the user.
		await supabase.auth.signOut();
		status = 'verified';
	});
</script>

<svelte:head>
	<title>Verification Successful - BookDiary</title>
	<meta name="description" content="Email verified successfully" />
</svelte:head>

<div class="container">
	<div class="card">
		{#if status === 'verifying'}
			<p class="icon">⏳</p>
			<h1>Confirming your email…</h1>
			<p>One moment while we verify your link.</p>
		{:else if status === 'error'}
			<p class="icon">⚠️</p>
			<h1>Confirmation failed</h1>
			<p>{errorMessage}</p>
			<p>Request a new confirmation email from the BookDiary app and try again.</p>
		{:else}
			<p class="icon">✅</p>
			<h1>Email Verified!</h1>

			<p>
				Your email address has been successfully verified.
			</p>
			<p>
				Thank you for registering with BookDiary.
			</p>
			<p>
				Open the BookDiary app to log in and start exploring your personal book diary.
			</p>
		{/if}

		<!-- Outside the {#if} so the Smart App Banner ships in the prerendered HTML,
		     where Safari can still act on it. -->
		<AppLinks />
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
</style>
