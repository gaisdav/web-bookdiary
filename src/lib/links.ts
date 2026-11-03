/**
 * Every link the site code points at lives here. Change a URL, an email or a
 * store listing in this file only; components and routes import from it.
 *
 * Not covered (they are not TypeScript, so they cannot import from here):
 * static/sitemap.xml, static/robots.txt, static/site.webmanifest, the og:image
 * URL in src/app.html and the links written inside the markdown in src/lib/legal.
 */

// ── Site ────────────────────────────────────────────────────────────────────

export const SITE_HOST = 'readimus.com';
export const SITE_ORIGIN = `https://${SITE_HOST}`;

/** Pages of this site. Paths only; the origin is added where one is needed. */
export const ROUTES = {
	home: '/',
	features: '/#features',
	support: '/support',
	deleteAccount: '/delete-account',
	copyright: '/copyright',
	privacy: '/privacy',
	terms: '/terms',
	communityGuidelines: '/community-guidelines'
} as const;

// ── Email ───────────────────────────────────────────────────────────────────

export const SUPPORT_EMAIL = 'support@readimus.com';

/** `mailto:` link to support, with an optional pre-filled subject. */
export function mailtoSupport(subject?: string): string {
	const base = `mailto:${SUPPORT_EMAIL}`;
	return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}

// ── Social profiles ─────────────────────────────────────────────────────────

export type SocialId = 'youtube' | 'instagram' | 'tiktok';

/** Shown in the footer, in this order. `id` picks the icon in SocialIcon.svelte. */
export const SOCIAL_LINKS: ReadonlyArray<{ id: SocialId; label: string; url: string }> = [
	{ id: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@readimus_app' },
	{ id: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/readimus.app' },
	{ id: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@readimus.app' }
];

// ── App stores ──────────────────────────────────────────────────────────────

const GOOGLE_PLAY_LISTING = 'https://play.google.com/store/apps/details?id=com.appbookdiary';

/** Numeric App Store ID, also used by the iOS Smart App Banner. */
export const APP_STORE_ID = '6770324194';

/** No storefront in the path, so Apple sends each visitor to their own country's store. */
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;

/**
 * Google Play listing URL tagged with an install referrer, so Play Console
 * attributes installs to the site and to the button that sent them.
 * `placement` is where the link sits, e.g. "hero", "header", "book".
 */
export function googlePlayUrl(placement: string): string {
	const referrer = new URLSearchParams({
		utm_source: SITE_HOST,
		utm_medium: 'web',
		utm_content: placement
	});
	return `${GOOGLE_PLAY_LISTING}&referrer=${encodeURIComponent(referrer.toString())}`;
}

// ── Opening the app ─────────────────────────────────────────────────────────

/**
 * Opens the Readimus app on whatever screen it was left on: the custom URL
 * scheme the app registers (iOS Info.plist CFBundleURLSchemes, Android
 * intent-filter). A universal link would not do here — iOS keeps a link to the
 * domain the page is already on inside Safari, so `https://readimus.com/...`
 * from a readimus.com page never reaches the app.
 */
export const APP_OPEN_URL = 'bookdiary://';

/**
 * Opens the app on its sign-in screen, for the pages that leave the user
 * nothing else to do: a password just reset, a signup confirmed here instead
 * of in the app. The app moves a signed-out user to Login on it
 * (appbookdiary, src/hooks/common/useLoginDeepLink.ts) and just opens for
 * anyone signed in. A build from before that handler ignores the path and
 * opens as it does for APP_OPEN_URL.
 */
export const APP_LOGIN_URL = `${APP_OPEN_URL}login`;

/**
 * The screen a readimus.com link stands for, through the same scheme:
 * `/user/7/list/3` becomes `bookdiary://user/7/list/3`, query included (a
 * book link carries `?origin=`). The app's linking config takes both
 * prefixes, so a path means the same screen under either.
 */
export function appUrlFor(url: URL): string {
	return APP_OPEN_URL + url.pathname.replace(/^\/+/, '') + url.search;
}
