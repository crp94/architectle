import type { Metadata } from 'next';
import { architectsByMovement, referencedMovementIds } from '@/lib/archive';
import { MOVEMENTS } from '@/data/movements';
import { SITE_URL } from '@/lib/site';
import { t } from '@/lib/i18n';
import { theme } from '@/lib/theme';
import { ArchiveNav } from '@/components/archive/ArchiveNav';
import { LinkList } from '@/components/archive/LinkList';

const LOCALE = 'en' as const;

export function generateMetadata(): Metadata {
  const title = t(LOCALE, 'metaArchiveTitle', { name: t(LOCALE, 'navMovementsLink') });
  const description = t(LOCALE, 'metaMovementsIndexDescription', { count: referencedMovementIds().length });
  const url = `${SITE_URL}/movements`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website', siteName: 'Architectle' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function MovementsIndexPage() {
  const movements = referencedMovementIds()
    .map((id) => MOVEMENTS[id])
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="flex flex-1 flex-col bg-paper">
      <ArchiveNav locale={LOCALE} />
      <div className="flex flex-col gap-1 p-4 md:p-8">
        <h1 className="text-3xl uppercase" style={{ fontFamily: theme.type.display }}>
          {t(LOCALE, 'navMovementsLink')}
        </h1>
        <p className="text-xs uppercase tracking-wide opacity-70" style={{ fontFamily: theme.type.mono }}>
          {t(LOCALE, 'archiveMovementsCount', { count: movements.length })}
        </p>
      </div>
      <div className="p-4 md:p-8">
        <LinkList
          testId="archive-movements-list"
          items={movements.map((m) => ({
            href: `/movement/${m.id}`,
            label: m.name,
            sub: t(LOCALE, 'archiveArchitectsCount', { count: architectsByMovement(m.id).length }),
          }))}
        />
      </div>
    </main>
  );
}
