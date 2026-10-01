import type { Handle } from '@sveltejs/kit';

const DEFAULTS = /[ \t]*<!-- seo-defaults:[\s\S]*?<!-- \/seo-defaults -->\n?/;

// app.html carries fallback title/description/og tags for pages that render
// client-side only (the SPA fallback shell). Pages that set their own title
// would otherwise end up with duplicates, and crawlers read the first one.
export const handle: Handle = ({ event, resolve }) =>
	resolve(event, {
		transformPageChunk: ({ html }) => {
			const own = html.replace(DEFAULTS, '');
			return /<title[\s>]/.test(own) ? own : html.replace(/<!-- \/?seo-defaults[^>]*-->\n?/g, '');
		}
	});
