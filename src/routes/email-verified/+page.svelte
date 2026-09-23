<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { env } from '$env/dynamic/public';

	const { PUBLIC_APP_STORE_URL, PUBLIC_GOOGLE_PLAY_URL, PUBLIC_IOS_APP_ID } = env;
</script>

<svelte:head>
	<title>Verification Successful - BookDiary</title>
	<meta name="description" content="Email verified successfully" />

	{#if PUBLIC_IOS_APP_ID}
		<meta name="apple-itunes-app" content="app-id={PUBLIC_IOS_APP_ID}" />
	{/if}
</svelte:head>

<div class="container">
	<div class="card">
		<p class="icon">✅</p>
		<h2>Email Verified!</h2>

		<p>
			Your email address has been successfully verified.
		</p>
		<p>
			Thank you for registering with BookDiary.
		</p>
		<p>
			If you have the BookDiary app installed, it should have opened automatically. Otherwise,
			get the app to log in and start exploring your personal book diary!
		</p>

		<div class="store-links">
			{#if PUBLIC_APP_STORE_URL}
				<a href={PUBLIC_APP_STORE_URL} class="store-link">Download on the App Store</a>
			{/if}
			{#if PUBLIC_GOOGLE_PLAY_URL}
				<a href={PUBLIC_GOOGLE_PLAY_URL} class="store-link">Get it on Google Play</a>
			{/if}
		</div>
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

	h2 {
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

	.store-links {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		margin-top: var(--spacing-lg);
	}

	.store-link {
		display: inline-block;
		padding: var(--spacing-sm) var(--spacing-lg);
		border-radius: var(--radius-md);
		background-color: var(--color-primary);
		color: #fff;
		text-decoration: none;
		font-weight: 600;
		transition: background-color var(--timing-fast) ease;
	}

	.store-link:hover {
		background-color: var(--color-primary-dark);
	}
</style>

