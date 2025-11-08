<script lang="ts">
	import { onMount } from 'svelte';
	import { locale } from 'svelte-i18n';
	import { browser } from '$app/environment';

	let showMenu = false;
	let menuElement: HTMLDivElement | null = null;
	let buttonElement: HTMLButtonElement | null = null;

	function switchLanguage(lang: string) {
		locale.set(lang);
		showMenu = false;
		// Save to localStorage
		if (browser) {
			localStorage.setItem('locale', lang);
		}
	}

	function handleClickOutside(event: MouseEvent) {
		if (
			showMenu &&
			menuElement &&
			buttonElement &&
			!menuElement.contains(event.target as Node) &&
			!buttonElement.contains(event.target as Node)
		) {
			showMenu = false;
		}
	}

	onMount(() => {
		if (browser) {
			document.addEventListener('click', handleClickOutside);
			return () => {
				document.removeEventListener('click', handleClickOutside);
			};
		}
	});
</script>

<div class="language-switcher">
	<button
		bind:this={buttonElement}
		class="switcher-button"
		on:click={() => (showMenu = !showMenu)}
	>
		🌐 {$locale === 'en' ? 'EN' : 'RU'}
	</button>
	{#if showMenu}
		<div bind:this={menuElement} class="menu">
			<button
				class="menu-item"
				class:active={$locale === 'en'}
				on:click={() => switchLanguage('en')}
			>
				English
			</button>
			<button
				class="menu-item"
				class:active={$locale === 'ru'}
				on:click={() => switchLanguage('ru')}
			>
				Русский
			</button>
		</div>
	{/if}
</div>

<style>
	.language-switcher {
		position: relative;
		display: inline-block;
	}

	.switcher-button {
		background: transparent;
		border: 1px solid var(--color-border-light);
		border-radius: var(--radius-sm);
		padding: var(--spacing-xs) var(--spacing-sm);
		cursor: pointer;
		font-size: var(--font-size-sm);
		color: var(--color-text);
		transition: all var(--timing-fast) ease;
	}

	.switcher-button:hover {
		background-color: var(--color-tab-bar);
		border-color: var(--color-primary);
	}

	.menu {
		position: absolute;
		top: 100%;
		right: 0;
		margin-top: var(--spacing-xs);
		background-color: var(--color-tab-bar);
		border: 1px solid var(--color-border-light);
		border-radius: var(--radius-sm);
		box-shadow: var(--shadow-medium);
		min-width: 120px;
		z-index: 1000;
	}

	.menu-item {
		display: block;
		width: 100%;
		padding: var(--spacing-sm) var(--spacing-md);
		background: transparent;
		border: none;
		text-align: left;
		cursor: pointer;
		color: var(--color-text);
		font-size: var(--font-size-sm);
		transition: background-color var(--timing-fast) ease;
	}

	.menu-item:first-child {
		border-top-left-radius: var(--radius-sm);
		border-top-right-radius: var(--radius-sm);
	}

	.menu-item:last-child {
		border-bottom-left-radius: var(--radius-sm);
		border-bottom-right-radius: var(--radius-sm);
	}

	.menu-item:hover {
		background-color: var(--color-primary-light);
	}

	.menu-item.active {
		background-color: var(--color-primary);
		color: var(--color-text-inverse);
		font-weight: 600;
	}
</style>

