<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { _ } from 'svelte-i18n';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
</script>

<svelte:head>
	<title>{$_('home.title')}</title>
	<meta name="description" content={$_('home.description')} />
</svelte:head>

<div class="container">
	<div class="language-switcher-container">
		<LanguageSwitcher />
	</div>
	<div class="card">
		<h1>{$_('home.heading')}</h1>
		<p class="subtitle">{$_('home.subtitle')}</p>

		<p>
			{@html $_('home.welcome1')}
		</p>
		
		<p>
			{$_('home.welcome2')}
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

