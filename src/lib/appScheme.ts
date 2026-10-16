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
