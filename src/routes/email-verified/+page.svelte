<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Verification Successful - BookDiary</title>
	<meta name="description" content="Email verified successfully" />
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
			You can now log in and start exploring your personal book diary!
		</p>
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
</style>

