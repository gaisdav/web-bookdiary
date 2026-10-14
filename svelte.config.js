import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Inlines the header and footer stylesheets, which sit just under 2 KB,
		// removing two render-blocking requests from every page load.
		inlineStyleThreshold: 2048,
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '200.html',
			precompress: false,
			strict: false
		})
	}
};

export default config;

