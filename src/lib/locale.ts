import { LOCALES, type Locale } from '@/lib/i18n';

export type LocaleSearchParams = Record<string, string | string[] | undefined>;

export function resolveLocale(raw: string | string[] | null | undefined): Locale {
  const value = Array.isArray(raw) ? raw[0] : raw;
  return (LOCALES as readonly string[]).includes(value ?? '') ? value as Locale : 'en';
}

/** Keep the selected language explicit while a reader moves through the site. */
export function localeHref(pathname: string, locale: Locale): string {
  const separator = pathname.includes('?') ? '&' : '?';
  return `${pathname}${separator}lang=${locale}`;
}

export function localeSearchHref(
  pathname: string,
  searchParams: LocaleSearchParams,
  locale: Locale,
): string {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(searchParams)) {
    if (value === undefined || key === 'lang') continue;
    if (Array.isArray(value)) value.forEach((entry) => query.append(key, entry));
    else query.set(key, value);
  }
  query.set('lang', locale);
  return `${pathname}?${query.toString()}`;
}

export const OG_LOCALE: Record<Locale, string> = { en: 'en_US', es: 'es_ES', it: 'it_IT' };
