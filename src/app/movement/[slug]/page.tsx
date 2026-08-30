import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { architectsByMovement, buildingsByMovement, movementById, referencedMovementIds } from '@/lib/archive';
import { breadcrumbJsonLd, movementJsonLd } from '@/lib/jsonld';
import { SITE_URL } from '@/lib/site';
import { t } from '@/lib/i18n';
import { resolveLocale, type LocaleSearchParams } from '@/lib/locale';
import { theme } from '@/lib/theme';
import { familyLabel } from '@/lib/facts';
import { ArchiveNav } from '@/components/archive/ArchiveNav';
import { BuildingCard } from '@/components/archive/BuildingCard';
import { LinkList } from '@/components/archive/LinkList';
import { SectionRule } from '@/components/ui/SectionRule';

type Params = { slug: string };

// Only movements actually referenced by an architect in the pool get a
// page (src/lib/archive.ts's `referencedMovementIds`) — src/data/movements.ts
// defines more ids than the current pool uses, and an empty movement page
// (no architects, no buildings) has nothing to show a reader.
export function generateStaticParams() {
  return referencedMovementIds().map((id) => ({ slug: id }));
}

export async function generateMetadata({ params, searchParams }: { params: Promise<Params>; searchParams: Promise<LocaleSearchParams> }): Promise<Metadata> {
  const locale = resolveLocale((await searchParams).lang);
  const { slug } = await params;
  const movement = movementById(slug);
  if (!movement) return {};

  const title = t(locale, 'metaArchiveTitle', { name: movement.name });
  const description = (movement.blurb[locale] ?? movement.blurb.en).slice(0, 155);
  const url = `${SITE_URL}/movement/${movement.id}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website', siteName: 'Architectle', locale: 'en_US' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function MovementPage({ params, searchParams }: { params: Promise<Params>; searchParams: Promise<LocaleSearchParams> }) {
  const localeParams = await searchParams;
  const LOCALE = resolveLocale(localeParams.lang);
  const { slug } = await params;
  const movement = movementById(slug);
  if (!movement) notFound();

  const architects = architectsByMovement(movement.id);
  const buildings = buildingsByMovement(movement.id);
  const span = `${movement.approxSpan.start}–${movement.approxSpan.end ?? t(LOCALE, 'archiveOngoing')}`;

  return (
    <main className="flex flex-1 flex-col bg-paper">
      <ArchiveNav locale={LOCALE} pathname={`/movement/${slug}`} searchParams={localeParams} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(movementJsonLd(movement)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([
            { name: t(LOCALE, 'appTitle'), url: SITE_URL },
            { name: t(LOCALE, 'navMovementsLink'), url: `${SITE_URL}/movements` },
            { name: movement.name, url: `${SITE_URL}/movement/${movement.id}` },
          ])),
        }}
      />
      <article className="flex flex-col gap-8 p-4 md:p-8">
        <div className="flex flex-col gap-1">
          <p className="text-xs uppercase tracking-[0.2em] text-accent" style={{ fontFamily: theme.type.ui }}>
            {t(LOCALE, 'navMovementsLink')}
          </p>
          <h1
            data-testid="archive-headline"
            className="text-3xl leading-none md:text-5xl"
            style={{ fontFamily: theme.type.display }}
          >
            {movement.name}
          </h1>
          <p className="text-xs uppercase tracking-wide opacity-70" style={{ fontFamily: theme.type.ui }}>
            {t(LOCALE, 'archiveFamily')}: {familyLabel(movement.family, LOCALE)} · {t(LOCALE, 'archiveApproxSpan')}: {span}
          </p>
        </div>

        <p className="max-w-[70ch] text-sm leading-relaxed" style={{ fontFamily: theme.type.body }}>
          {movement.blurb[LOCALE] ?? movement.blurb.en}
        </p>

        <section className="flex flex-col gap-3">
          <SectionRule label={t(LOCALE, 'navArchitectsLink')} />
          {architects.length > 0 ? (
            <LinkList
              testId="archive-movement-architects"
              locale={LOCALE}
              items={architects.map((a) => ({ href: `/architect/${a.id}`, label: a.name }))}
            />
          ) : (
            <p className="text-sm">{t(LOCALE, 'archiveNoContemporaries')}</p>
          )}
        </section>

        <section className="flex flex-col gap-3">
          <SectionRule label={t(LOCALE, 'navBuildingsLink')} />
          {buildings.length > 0 ? (
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {buildings.map((b) => (
                <BuildingCard key={b.id} building={b} locale={LOCALE} />
              ))}
            </ul>
          ) : (
            <p className="text-sm">{t(LOCALE, 'archiveNoBuildings')}</p>
          )}
        </section>
      </article>
    </main>
  );
}
