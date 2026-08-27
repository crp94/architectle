import Link from 'next/link';
import { LOCALES, type Locale } from '@/lib/i18n';
import { theme } from '@/lib/theme';

const LABELS: Record<Locale, string> = { en: 'EN', es: 'ES', it: 'IT' };

export type LocaleSwitcherProps = {
  locale: Locale;
};

/**
 * The real, reachable locale switch (design spec §9): three links to `/`
 * with a different `?lang=` query value. Task 11 wired `GameBoard`'s
 * `locale` prop and every translated string, but nothing in the running
 * app let a player actually reach a non-English locale — `page.tsx` read a
 * hardcoded `LOCALE = 'en'`. This is the smallest fix that makes that
 * infrastructure reachable: a plain server-rendered link per locale, read
 * back out of `searchParams` in `page.tsx`. No client JS, no cookie, no
 * route segment rewrite.
 */
export function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  return (
    <nav aria-label="Language" className="flex gap-2">
      {LOCALES.map((l) => (
        <Link
          key={l}
          href={`/?lang=${l}`}
          data-testid={`locale-link-${l}`}
          aria-current={l === locale ? 'true' : undefined}
          className={`border-2 border-ink px-2 py-1 text-xs uppercase tracking-wide ${
            l === locale ? 'bg-ink text-paper' : 'bg-paper text-ink'
          }`}
          style={{ fontFamily: theme.type.mono }}
        >
          {LABELS[l]}
        </Link>
      ))}
    </nav>
  );
}
