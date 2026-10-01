<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	const ORIGIN = 'https://www.readimus.com';

	$: path = $page.url.pathname === '/' ? '/' : $page.url.pathname.replace(/\/$/, '');
	$: canonical = ORIGIN + path;
</script>

<svelte:head>
	<link rel="canonical" href={canonical} />
	<meta property="og:url" content={canonical} />
</svelte:head>

<slot />
