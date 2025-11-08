<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { _ } from 'svelte-i18n';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
</script>

<svelte:head>
	<title>{$_('emailVerified.title')}</title>
	<meta name="description" content={$_('emailVerified.description')} />
</svelte:head>

<div class="container">
	<div class="language-switcher-container">
		<LanguageSwitcher />
	</div>
	<div class="card">
		<p class="icon">✅</p>
		<h2>{$_('emailVerified.heading')}</h2>

		<p>
			{$_('emailVerified.text1')}
		</p>
		<p>
			{$_('emailVerified.text2')}
		</p>
		<p>
			{$_('emailVerified.text3')}
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

	.language-switcher-container {
		display: flex;
		justify-content: flex-end;
		margin-bottom: var(--spacing-md);
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

