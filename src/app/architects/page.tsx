import type { Metadata } from 'next';
import { roster } from '@/lib/pool';
import { SITE_URL } from '@/lib/site';
import { t } from '@/lib/i18n';
import { OG_LOCALE, resolveLocale, type LocaleSearchParams } from '@/lib/locale';
import { theme } from '@/lib/theme';
import { architectMovementLabel, architectSpan } from '@/lib/facts';
import { ArchiveNav } from '@/components/archive/ArchiveNav';
import { LinkList } from '@/components/archive/LinkList';

export async function generateMetadata({ searchParams }: { searchParams: Promise<LocaleSearchParams> }): Promise<Metadata> {
  const locale = resolveLocale((await searchParams).lang);
  const title = t(locale, 'metaArchiveTitle', { name: t(locale, 'navArchitectsLink') });
  const description = t(locale, 'metaArchitectsIndexDescription', { count: roster().length });
  const url = `${SITE_URL}/architects`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website', siteName: 'Architectle', locale: OG_LOCALE[locale] },
    twitter: { card: 'summary_large_image', title, description },
  };
}

// This is the roster GuessField's rejection message links to (design spec
// §4.3: "the roster is browsable at /architects") — deliberately
// `roster()`, the exact set of names the game accepts as a guess, not the
// full `ARCHITECTS` pool (which also holds co-credited-only architects who
// still get their own `/architect/[slug]` page, just not a listing here).
export default async function ArchitectsIndexPage({ searchParams }: { searchParams: Promise<LocaleSearchParams> }) {
  const params = await searchParams;
  const locale = resolveLocale(params.lang);
  const architects = [...roster()].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="flex flex-1 flex-col bg-paper">
      <ArchiveNav locale={locale} pathname="/architects" searchParams={params} />
      <div className="flex flex-col gap-1 p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl" style={{ fontFamily: theme.type.display }}>
          {t(locale, 'navArchitectsLink')}
        </h1>
        <p className="text-xs uppercase tracking-wide opacity-70" style={{ fontFamily: theme.type.ui }}>
          {t(locale, 'archiveArchitectsCount', { count: architects.length })}
        </p>
      </div>
      <div className="p-4 md:p-8">
        <LinkList
          testId="archive-architects-list"
          locale={locale}
          items={architects.map((a) => ({
            href: `/architect/${a.id}`,
            label: a.name,
            sub: `${architectSpan(a)} · ${architectMovementLabel(a, locale)}`,
          }))}
        />
      </div>
    </main>
  );
}
