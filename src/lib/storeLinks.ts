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
		utm_source: 'readimus.com',
		utm_medium: 'web',
		utm_content: placement
	});
	return `${GOOGLE_PLAY_LISTING}&referrer=${encodeURIComponent(referrer.toString())}`;
}
