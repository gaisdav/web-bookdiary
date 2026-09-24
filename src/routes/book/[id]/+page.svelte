<script lang="ts">
	import AppLinks from '$lib/components/AppLinks.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Open in BookDiary</title>
	<meta name="description" content="Continue in the BookDiary app to view this book." />
</svelte:head>

<div class="container">
	<div class="card">
		<h1>Open in BookDiary</h1>
		<p class="subtitle">This link opens a book in the BookDiary app 📚</p>

		<p>
			Get the app to view this book, track your reading progress, and keep your personal
			reading diary.
		</p>

		<AppLinks />
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
</style>
