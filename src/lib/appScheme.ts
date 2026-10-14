/**
 * Opens the Readimus app on whatever screen it was left on: the custom URL
 * scheme the app registers (iOS Info.plist CFBundleURLSchemes, Android
 * intent-filter). A universal link would not do here — iOS keeps a link to the
 * domain the page is already on inside Safari, so `https://readimus.com/...`
 * from a readimus.com page never reaches the app.
 */
export const APP_OPEN_URL = 'bookdiary://';
