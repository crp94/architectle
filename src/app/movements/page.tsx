import type { Metadata } from 'next';
import { architectsByMovement, referencedMovementIds } from '@/lib/archive';
import { MOVEMENTS } from '@/data/movements';
import { SITE_URL } from '@/lib/site';
import { t } from '@/lib/i18n';
import { OG_LOCALE, resolveLocale, type LocaleSearchParams } from '@/lib/locale';
import { theme } from '@/lib/theme';
import { ArchiveNav } from '@/components/archive/ArchiveNav';
import { LinkList } from '@/components/archive/LinkList';

export async function generateMetadata({ searchParams }: { searchParams: Promise<LocaleSearchParams> }): Promise<Metadata> {
  const locale = resolveLocale((await searchParams).lang);
  const title = t(locale, 'metaArchiveTitle', { name: t(locale, 'navMovementsLink') });
  const description = t(locale, 'metaMovementsIndexDescription', { count: referencedMovementIds().length });
  const url = `${SITE_URL}/movements`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website', siteName: 'Architectle', locale: OG_LOCALE[locale] },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function MovementsIndexPage({ searchParams }: { searchParams: Promise<LocaleSearchParams> }) {
  const params = await searchParams;
  const locale = resolveLocale(params.lang);
  const movements = referencedMovementIds()
    .map((id) => MOVEMENTS[id])
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="flex flex-1 flex-col bg-paper">
      <ArchiveNav locale={locale} pathname="/movements" searchParams={params} />
      <div className="flex flex-col gap-1 p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl" style={{ fontFamily: theme.type.display }}>
          {t(locale, 'navMovementsLink')}
        </h1>
        <p className="text-xs uppercase tracking-wide opacity-70" style={{ fontFamily: theme.type.ui }}>
          {t(locale, 'archiveMovementsCount', { count: movements.length })}
        </p>
      </div>
      <div className="p-4 md:p-8">
        <LinkList
          testId="archive-movements-list"
          locale={locale}
          items={movements.map((m) => ({
            href: `/movement/${m.id}`,
            label: m.name,
            sub: t(locale, 'archiveArchitectsCount', { count: architectsByMovement(m.id).length }),
          }))}
        />
      </div>
    </main>
  );
}
