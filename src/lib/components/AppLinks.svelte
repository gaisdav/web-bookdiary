<script lang="ts">
	import { page } from '$app/stores';
	import { env } from '$env/dynamic/public';

	/**
	 * Path the app should open, e.g. `/book/42`. Defaults to the current page,
	 * which is what every deep-link fallback page wants.
	 */
	export let path: string | null = null;

	const { PUBLIC_GOOGLE_PLAY_URL, PUBLIC_IOS_APP_ID, PUBLIC_APP_SCHEME, PUBLIC_SITE_URL } = env;

	// Single source of truth for the App Store: the numeric id.
	const appStoreUrl = PUBLIC_IOS_APP_ID ? `https://apps.apple.com/app/id${PUBLIC_IOS_APP_ID}` : '';
	const siteUrl = PUBLIC_SITE_URL?.replace(/\/$/, '') ?? '';

	$: targetPath = path ?? $page.url.pathname;
	// Smart App Banner: tell the app which page the user came from. Built from
	// PUBLIC_SITE_URL because $page.url.origin is a placeholder while prerendering.
	$: appArgument = siteUrl ? `${siteUrl}${targetPath}` : '';
	$: bannerContent = appArgument
		? `app-id=${PUBLIC_IOS_APP_ID}, app-argument=${appArgument}`
		: `app-id=${PUBLIC_IOS_APP_ID}`;
	$: schemeUrl = PUBLIC_APP_SCHEME ? `${PUBLIC_APP_SCHEME}:/${targetPath}` : '';
	$: hasStoreLinks = Boolean(appStoreUrl || PUBLIC_GOOGLE_PLAY_URL);
</script>

<svelte:head>
	{#if PUBLIC_IOS_APP_ID}
		<meta name="apple-itunes-app" content={bannerContent} />
	{/if}
</svelte:head>

{#if schemeUrl || hasStoreLinks}
	<div class="app-links">
		{#if schemeUrl}
			<a href={schemeUrl} class="app-link">Open in the BookDiary app</a>
		{/if}
		{#if appStoreUrl}
			<a href={appStoreUrl} class="app-link">Download on the App Store</a>
		{/if}
		{#if PUBLIC_GOOGLE_PLAY_URL}
			<a href={PUBLIC_GOOGLE_PLAY_URL} class="app-link">Get it on Google Play</a>
		{/if}
	</div>
{/if}

<style>
	.app-links {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		margin-top: var(--spacing-lg);
	}

	.app-link {
		padding: var(--spacing-sm) var(--spacing-lg);
		border-radius: var(--radius-md);
		background-color: var(--color-primary-dark);
		color: #fff;
		text-decoration: none;
		font-weight: 600;
		transition: background-color var(--timing-fast) ease;
	}

	.app-link:hover {
		background-color: var(--color-primary-darker);
	}
</style>
