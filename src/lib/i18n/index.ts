import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('ru', () => import('./locales/ru.json'));

// Get initial locale from localStorage or browser
function getInitialLocale(): string {
	if (typeof window !== 'undefined') {
		const savedLocale = localStorage.getItem('locale');
		if (savedLocale === 'en' || savedLocale === 'ru') {
			return savedLocale;
		}
	}
	const navigatorLocale = getLocaleFromNavigator();
	if (navigatorLocale && (navigatorLocale.startsWith('en') || navigatorLocale.startsWith('ru'))) {
		return navigatorLocale.startsWith('ru') ? 'ru' : 'en';
	}
	return 'en';
}

// Initialize i18n and return the promise
export const i18nInit = init({
	fallbackLocale: 'en',
	initialLocale: getInitialLocale()
});

