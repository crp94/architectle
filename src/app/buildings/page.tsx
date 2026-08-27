import type { Metadata } from 'next';
import { BUILDINGS } from '@/lib/pool';
import { SITE_URL } from '@/lib/site';
import { t } from '@/lib/i18n';
import { theme } from '@/lib/theme';
import { ArchiveNav } from '@/components/archive/ArchiveNav';
import { BuildingCard } from '@/components/archive/BuildingCard';

const LOCALE = 'en' as const;

export function generateMetadata(): Metadata {
  const title = t(LOCALE, 'metaArchiveTitle', { name: t(LOCALE, 'navBuildingsLink') });
  const description = t(LOCALE, 'metaBuildingsIndexDescription', { count: BUILDINGS.length });
  const url = `${SITE_URL}/buildings`;
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url } };
}

// The full catalogue (design spec §8) — every building in the pool,
// canon and deep tier alike; the daily game only ever draws its target
// from `canonBuildings()`, but the archive is comprehensive by design.
export default function BuildingsIndexPage() {
  const buildings = [...BUILDINGS].sort((a, b) => a.name.en.localeCompare(b.name.en));

  return (
    <main className="flex flex-1 flex-col bg-paper">
      <ArchiveNav locale={LOCALE} />
      <div className="flex flex-col gap-1 p-4 md:p-8">
        <h1 className="text-3xl uppercase" style={{ fontFamily: theme.type.display }}>
          {t(LOCALE, 'navBuildingsLink')}
        </h1>
        <p className="text-xs uppercase tracking-wide opacity-70" style={{ fontFamily: theme.type.mono }}>
          {t(LOCALE, 'archiveBuildingsCount', { count: buildings.length })}
        </p>
      </div>
      <ul className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 md:grid-cols-4 md:p-8">
        {buildings.map((b) => (
          <BuildingCard key={b.id} building={b} locale={LOCALE} />
        ))}
      </ul>
    </main>
  );
}
