import type { Metadata } from 'next';
import { BUILDINGS } from '@/lib/pool';
import { SITE_URL } from '@/lib/site';
import { t } from '@/lib/i18n';
import { OG_LOCALE, resolveLocale, type LocaleSearchParams } from '@/lib/locale';
import { theme } from '@/lib/theme';
import { ArchiveNav } from '@/components/archive/ArchiveNav';
import { BuildingCard } from '@/components/archive/BuildingCard';

export async function generateMetadata({ searchParams }: { searchParams: Promise<LocaleSearchParams> }): Promise<Metadata> {
  const locale = resolveLocale((await searchParams).lang);
  const title = t(locale, 'metaArchiveTitle', { name: t(locale, 'navBuildingsLink') });
  const description = t(locale, 'metaBuildingsIndexDescription', { count: BUILDINGS.length });
  const url = `${SITE_URL}/buildings`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website', siteName: 'Architectle', locale: OG_LOCALE[locale] },
    twitter: { card: 'summary_large_image', title, description },
  };
}

// The full catalogue (design spec §8) — every building in the pool,
// canon and deep tier alike; the daily game only ever draws its target
// from `canonBuildings()`, but the archive is comprehensive by design.
export default async function BuildingsIndexPage({ searchParams }: { searchParams: Promise<LocaleSearchParams> }) {
  const params = await searchParams;
  const locale = resolveLocale(params.lang);
  const buildings = [...BUILDINGS].sort((a, b) => a.name.en.localeCompare(b.name.en));

  return (
    <main className="flex flex-1 flex-col bg-paper">
      <ArchiveNav locale={locale} pathname="/buildings" searchParams={params} />
      <div className="flex flex-col gap-1 p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl" style={{ fontFamily: theme.type.display }}>
          {t(locale, 'navBuildingsLink')}
        </h1>
        <p className="text-xs uppercase tracking-wide opacity-70" style={{ fontFamily: theme.type.ui }}>
          {t(locale, 'archiveBuildingsCount', { count: buildings.length })}
        </p>
      </div>
      <ul className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 md:grid-cols-4 md:p-8">
        {buildings.map((b) => (
          <BuildingCard key={b.id} building={b} locale={locale} />
        ))}
      </ul>
    </main>
  );
}
