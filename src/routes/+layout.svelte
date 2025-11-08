<script lang="ts">
	import '../app.css';
	import { i18nInit } from '../lib/i18n';
	import { onMount } from 'svelte';
	import { locale, waitLocale } from 'svelte-i18n';
	import { browser } from '$app/environment';

	let initialized = false;

	onMount(async () => {
		// Wait for i18n to initialize
		await i18nInit;
		
		if (browser) {
			const savedLocale = localStorage.getItem('locale');
			if (savedLocale && (savedLocale === 'en' || savedLocale === 'ru')) {
				locale.set(savedLocale);
				// Wait for the new locale to load
				await waitLocale(savedLocale);
			} else {
				// Wait for the initial locale to load
				await waitLocale();
			}
		} else {
			// Wait for the initial locale to load (SSR)
			await waitLocale();
		}
		
		initialized = true;
	});
</script>

{#if initialized}
	<slot />
{:else}
	<!-- Loading state while i18n initializes -->
	<div style="min-height: 100vh;"></div>
{/if}

