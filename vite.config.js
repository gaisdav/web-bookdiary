import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		cssMinify: true,
		minify: 'esbuild'
	},
	esbuild: {
		drop: ['console', 'debugger']
	}
});

