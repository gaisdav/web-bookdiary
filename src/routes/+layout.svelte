<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { dev } from '$app/environment';
	// TODO: remove @vercel/analytics (package + this import + injectAnalytics call)
	// if we move away from Vercel.
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	const ORIGIN = 'https://readimus.com';

	$: path = $page.url.pathname === '/' ? '/' : $page.url.pathname.replace(/\/$/, '');
	$: canonical = ORIGIN + path;
</script>

<svelte:head>
	<link rel="canonical" href={canonical} />
	<meta property="og:url" content={canonical} />
</svelte:head>

<slot />
