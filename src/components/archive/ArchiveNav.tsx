import Link from 'next/link';
import { t, type Locale } from '@/lib/i18n';
import { localeHref, type LocaleSearchParams } from '@/lib/locale';
import { theme } from '@/lib/theme';
import { LocaleSwitcher } from '@/components/game/LocaleSwitcher';

/** Thin top bar every archive page shares: back to the game, and across to
 * the three catalogue indexes. Keeps `/buildings`, `/architects` and
 * `/movements` reachable from anywhere in the archive, not just from
 * whichever cross-link happened to lead here. A quiet hairline replaces
 * v1's heavy filled `bg-accent` banner — that pairing put `text-ink`
 * directly on a filled `accent` background, clearing only ~1.7:1 contrast
 * (see t2b-report.md §1) — so this bar carries no accent fill at all. */
export function ArchiveNav({
  locale, pathname, searchParams,
}: { locale: Locale; pathname: string; searchParams: LocaleSearchParams }) {
  return (
    <nav
      data-testid="archive-nav"
      className="flex flex-wrap gap-4 bg-paper px-4 py-3 text-xs uppercase tracking-[0.15em] text-ink"
      style={{
        fontFamily: theme.type.ui,
        borderBottomWidth: theme.rule.hairline,
        borderBottomStyle: 'solid',
        borderBottomColor: theme.color.frameLine,
      }}
    >
      <Link href={localeHref('/', locale)} className="flex items-center gap-1.5 underline">
        {/* eslint-disable-next-line @next/next/no-img-element -- a static
            local brand SVG with no responsive/loader benefit from
            next/image; see CropStage.tsx/ClueStrip.tsx for the same
            already-established exception. */}
        <img src="/brand/architectle-mark.svg" alt="" width={18} height={18} />
        {t(locale, 'appTitle')}
      </Link>
      <Link href={localeHref('/buildings', locale)} className="underline">
        {t(locale, 'navBuildingsLink')}
      </Link>
      <Link href={localeHref('/architects', locale)} className="underline">
        {t(locale, 'navArchitectsLink')}
      </Link>
      <Link href={localeHref('/movements', locale)} className="underline">
        {t(locale, 'navMovementsLink')}
      </Link>
      <span className="ml-auto">
        <LocaleSwitcher locale={locale} pathname={pathname} searchParams={searchParams} />
      </span>
    </nav>
  );
}
