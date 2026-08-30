import Link from 'next/link';
import { LOCALES, t, type Locale } from '@/lib/i18n';
import { localeSearchHref, type LocaleSearchParams } from '@/lib/locale';
import { theme } from '@/lib/theme';

const LABEL_KEYS: Record<Locale, 'languageEnglish' | 'languageSpanish' | 'languageItalian'> = {
  en: 'languageEnglish', es: 'languageSpanish', it: 'languageItalian',
};

export type LocaleSwitcherProps = {
  locale: Locale;
  pathname?: string;
  /**
   * The current URL's search params (as `page.tsx` gets them from Next's
   * `searchParams`), so a link built here can preserve every OTHER param
   * on the current URL — most importantly the e2e suite's `?e2eBuilding=`
   * override, which must survive a locale switch so a pinned building
   * stays pinned across the assertions that follow.
   */
  searchParams: LocaleSearchParams;
};

/**
 * The visible locale control. It retains the current route and every other
 * query parameter while replacing only `lang`, so a reader never loses
 * their place when changing language.
 */
export function LocaleSwitcher({ locale, pathname = '/', searchParams }: LocaleSwitcherProps) {
  return (
    <nav aria-label={t(locale, 'languageLabel')} className="flex flex-wrap items-center justify-center gap-2">
      <span className="text-[10px] uppercase tracking-[0.2em] text-ink/70" style={{ fontFamily: theme.type.ui }}>
        {t(locale, 'languageLabel')}
      </span>
      {LOCALES.map((l) => (
        <Link
          key={l}
          href={localeSearchHref(pathname, searchParams, l)}
          data-testid={`locale-link-${l}`}
          aria-current={l === locale ? 'true' : undefined}
          className={`border-2 border-ink px-2 py-1 text-xs uppercase tracking-wide ${
            l === locale ? 'bg-ink text-paper' : 'bg-paper text-ink'
          }`}
          style={{ fontFamily: theme.type.mono }}
        >
          {t(locale, LABEL_KEYS[l])}
        </Link>
      ))}
    </nav>
  );
}
