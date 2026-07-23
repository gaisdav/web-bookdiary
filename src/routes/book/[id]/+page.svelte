<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { env } from '$env/dynamic/public';

	const { PUBLIC_APP_STORE_URL, PUBLIC_GOOGLE_PLAY_URL, PUBLIC_IOS_APP_ID } = env;
</script>

<svelte:head>
	<title>Open in BookDiary</title>
	<meta name="description" content="Continue in the BookDiary app to view this book." />

	{#if PUBLIC_IOS_APP_ID}
		<meta name="apple-itunes-app" content="app-id={PUBLIC_IOS_APP_ID}" />
	{/if}
</svelte:head>

<div class="container">
	<div class="card">
		<h1>Open in BookDiary</h1>
		<p class="subtitle">This link opens a book in the BookDiary app 📚</p>

		<p>
			Get the app to view this book, track your reading progress, and keep your personal
			reading diary.
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
		max-width: 700px;
		margin: 0 auto;
		padding: var(--spacing-xxl) var(--spacing-md);
		text-align: center;
	}

	.card {
		background-color: var(--color-tab-bar);
		padding: var(--spacing-xxl);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-medium);
		margin-bottom: var(--spacing-lg);
	}

	h1 {
		color: var(--color-primary);
		font-size: var(--font-size-xxxl);
		margin-bottom: var(--spacing-sm);
	}

	.subtitle {
		color: var(--color-text-secondary);
		font-size: var(--font-size-xl);
		margin-bottom: var(--spacing-lg);
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
