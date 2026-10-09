const GOOGLE_PLAY_LISTING = 'https://play.google.com/store/apps/details?id=com.appbookdiary';

/**
 * Google Play listing URL tagged with an install referrer, so Play Console
 * attributes installs to the site and to the button that sent them.
 * `placement` is where the link sits, e.g. "hero", "header", "book".
 */
export function googlePlayUrl(placement: string): string {
	const referrer = new URLSearchParams({
		utm_source: 'readimus.com',
		utm_medium: 'web',
		utm_content: placement
	});
	return `${GOOGLE_PLAY_LISTING}&referrer=${encodeURIComponent(referrer.toString())}`;
}
