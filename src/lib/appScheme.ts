/**
 * Opens the Readimus app on whatever screen it was left on: the custom URL
 * scheme the app registers (iOS Info.plist CFBundleURLSchemes, Android
 * intent-filter). A universal link would not do here — iOS keeps a link to the
 * domain the page is already on inside Safari, so `https://readimus.com/...`
 * from a readimus.com page never reaches the app.
 */
export const APP_OPEN_URL = 'bookdiary://';

/**
 * The screen a readimus.com link stands for, through the same scheme:
 * `/user/7/list/3` becomes `bookdiary://user/7/list/3`, query included (a
 * book link carries `?origin=`). The app's linking config takes both
 * prefixes, so a path means the same screen under either.
 */
export function appUrlFor(url: URL): string {
	return APP_OPEN_URL + url.pathname.replace(/^\/+/, '') + url.search;
}
