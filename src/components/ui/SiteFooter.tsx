'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { t } from '@/lib/i18n';
import { localeHref, resolveLocale } from '@/lib/locale';
import { theme } from '@/lib/theme';

/**
 * Site-wide quiet footer (design spec §7: "internal linking pass ... game
 * -> archive -> movements circulation, footer"). Rendered once from the
 * root layout so it appears on every route — game, every archive page, and
 * about — circulating a reader from wherever they land back to the other
 * three surfaces.
 *
 * The query-param locale is read client-side here because this component is
 * owned by the root layout; every footer link retains that language.
 */
export function SiteFooter() {
  const searchParams = useSearchParams();
  const locale = resolveLocale(searchParams.get('lang'));
  const links: { href: string; label: string; testId: string }[] = [
    { href: localeHref('/', locale), label: t(locale, 'appTitle'), testId: 'footer-link-home' },
    { href: localeHref('/buildings', locale), label: t(locale, 'navBuildingsLink'), testId: 'footer-link-buildings' },
    { href: localeHref('/architects', locale), label: t(locale, 'navArchitectsLink'), testId: 'footer-link-architects' },
    { href: localeHref('/movements', locale), label: t(locale, 'navMovementsLink'), testId: 'footer-link-movements' },
    { href: localeHref('/about', locale), label: t(locale, 'navAbout'), testId: 'footer-link-about' },
  ];

  return (
    <footer
      data-testid="site-footer"
      className="mt-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t-2 border-ink bg-paper px-4 py-6 text-xs uppercase tracking-wide text-ink"
      style={{ fontFamily: theme.type.mono }}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          data-testid={link.testId}
          href={link.href}
          className={link.href === '/' ? 'flex items-center gap-1 underline' : 'underline'}
        >
          {link.href === '/' && (
            // A static local brand SVG with no responsive/loader benefit
            // from next/image; see CropStage.tsx/ClueStrip.tsx for the same
            // already-established exception.
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/brand/architectle-mark.svg" alt="" width={14} height={14} />
          )}
          {link.label}
        </Link>
      ))}
      {/* External: the author's site — a plain anchor, not next/link. */}
      <a
        data-testid="footer-link-author"
        href="https://carlosrodriguezpardo.es"
        rel="author"
        className="underline"
      >
        carlosrodriguezpardo.es
      </a>
    </footer>
  );
}
