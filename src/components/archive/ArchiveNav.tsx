import Link from 'next/link';
import { t, type Locale } from '@/lib/i18n';
import { theme } from '@/lib/theme';

/** Thin top bar every archive page shares: back to the game, and across to
 * the three catalogue indexes. Keeps `/buildings`, `/architects` and
 * `/movements` reachable from anywhere in the archive, not just from
 * whichever cross-link happened to lead here. */
export function ArchiveNav({ locale }: { locale: Locale }) {
  return (
    <nav
      data-testid="archive-nav"
      className="flex flex-wrap gap-4 border-b-[3px] border-ink bg-accent px-4 py-3 text-xs uppercase tracking-wide text-ink"
      style={{ fontFamily: theme.type.mono }}
    >
      <Link href="/" className="underline">
        {t(locale, 'appTitle')}
      </Link>
      <Link href="/buildings" className="underline">
        {t(locale, 'navBuildingsLink')}
      </Link>
      <Link href="/architects" className="underline">
        {t(locale, 'navArchitectsLink')}
      </Link>
      <Link href="/movements" className="underline">
        {t(locale, 'navMovementsLink')}
      </Link>
    </nav>
  );
}
