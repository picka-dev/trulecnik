import { ui, defaultLocale, locales, type Locale, type UIKey } from './ui';

/** Extract the active locale from a URL pathname (e.g. "/en/rules" -> "en"). */
export function getLocaleFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  if (locales.includes(maybeLocale as Locale)) {
    return maybeLocale as Locale;
  }
  return defaultLocale;
}

/** Returns a translator function bound to a locale, with fallback to default. */
export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui[defaultLocale][key];
  };
}

/**
 * Build an in-site path for a given locale. The default locale has no prefix
 * (served at "/"), non-default locales are prefixed with their code ("/en/...").
 */
export function localizedPath(path: string, locale: Locale): string {
  const clean = path.replace(/^\/+/, '');
  if (locale === defaultLocale) {
    return '/' + clean;
  }
  return `/${locale}/` + clean;
}

/** Given the current URL, return the equivalent path in the other locale. */
export function alternateLocalePath(url: URL, target: Locale): string {
  const segments = url.pathname.split('/').filter(Boolean);
  // Drop a leading locale segment if present.
  if (locales.includes(segments[0] as Locale)) {
    segments.shift();
  }
  return localizedPath(segments.join('/'), target);
}

export { locales, defaultLocale, type Locale };
