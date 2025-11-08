<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>BookDiary - Your Reading Companion</title>
	<meta name="description" content="Track your reading journey with BookDiary" />
</svelte:head>

<div class="container">
	<div class="card">
		<h1>BookDiary</h1>
		<p class="subtitle">Your Personal Reading Companion 📚</p>

		<p>
			Welcome to BookDiary, your essential tool for tracking your reading journey. Our app allows you to <strong>log books you've read</strong>, monitor your reading progress, and maintain a thoughtful diary of your literary adventures.
		</p>
		
		<p>
			Whether you're a casual reader or a dedicated bookworm, BookDiary helps you visualize your achievements and stay motivated to reach your reading goals.
		</p>
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

