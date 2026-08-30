import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ARCHITECTS, ArchitectNotFoundError, architectById } from '@/lib/pool';
import { buildingsByArchitect, contemporariesOf } from '@/lib/archive';
import { MOVEMENTS } from '@/data/movements';
import { architectJsonLd, breadcrumbJsonLd } from '@/lib/jsonld';
import { SITE_URL } from '@/lib/site';
import { t } from '@/lib/i18n';
import { theme } from '@/lib/theme';
import { architectMovementLabel, architectSpan } from '@/lib/facts';
import { ArchiveNav } from '@/components/archive/ArchiveNav';
import { Dossier } from '@/components/archive/Dossier';
import { BuildingCard } from '@/components/archive/BuildingCard';
import { LinkList } from '@/components/archive/LinkList';
import { SectionRule } from '@/components/ui/SectionRule';

const LOCALE = 'en' as const;

type Params = { slug: string };

// An architect's `id` doubles as their archive slug, exactly like a
// Building's `id` — pool.ts has no separate `architectBySlug` because
// none is needed, only `architectById`, which already throws a named
// error `findArchitect` turns into a 404 below.
function findArchitect(slug: string) {
  try {
    return architectById(slug);
  } catch (err) {
    if (err instanceof ArchitectNotFoundError) return undefined;
    throw err;
  }
}

// Every architect in the pool gets a page — not just `roster()` (the
// subset guessable as a primary answer). A co-credited-only architect
// (src/types/building.ts's `coArchitects`) is still reachable from a
// building's cross-link and deserves a working page, even though they
// won't appear on the `/architects` roster index.
export function generateStaticParams() {
  return ARCHITECTS.map((a) => ({ slug: a.id }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const architect = findArchitect(slug);
  if (!architect) return {};

  const title = t(LOCALE, 'metaArchiveTitle', { name: architect.name });
  const bio = architect.portrait.en.trim();
  const description = bio.length > 0
    ? bio.slice(0, 155)
    : `${architect.name}, ${architectSpan(architect)} — ${architectMovementLabel(architect, LOCALE)}.`;
  const url = `${SITE_URL}/architect/${architect.id}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'profile', siteName: 'Architectle', locale: 'en_US' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function ArchitectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const architect = findArchitect(slug);
  if (!architect) notFound();

  const works = buildingsByArchitect(architect.id);
  const contemporaries = contemporariesOf(architect);
  const movements = architect.movements === 'unaffiliated' ? [] : architect.movements;

  return (
    <main className="flex flex-1 flex-col bg-paper">
      <ArchiveNav locale={LOCALE} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(architectJsonLd(architect)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([
            { name: t(LOCALE, 'appTitle'), url: SITE_URL },
            { name: t(LOCALE, 'navArchitectsLink'), url: `${SITE_URL}/architects` },
            { name: architect.name, url: `${SITE_URL}/architect/${architect.id}` },
          ])),
        }}
      />
      <article className="flex flex-col gap-8 p-4 md:p-8">
        <div className="flex flex-col gap-1">
          <p className="text-xs uppercase tracking-[0.2em] text-accent" style={{ fontFamily: theme.type.ui }}>
            {t(LOCALE, 'navArchitectsLink')}
          </p>
          <h1
            data-testid="archive-headline"
            className="text-3xl leading-none md:text-5xl"
            style={{ fontFamily: theme.type.display }}
          >
            {architect.name}
          </h1>
          <p className="text-xs uppercase tracking-wide opacity-70" style={{ fontFamily: theme.type.ui }}>
            {architectSpan(architect)} · {architectMovementLabel(architect, LOCALE)}
          </p>
        </div>

        {architect.portrait.en.trim().length > 0 && <Dossier text={architect.portrait} locale={LOCALE} />}

        {movements.length > 0 && (
          <section className="flex flex-col gap-3">
            <SectionRule label={t(LOCALE, 'navMovementsLink')} />
            <LinkList
              testId="archive-movement-links"
              items={movements.map((m) => ({
                href: `/movement/${m.id}`,
                label: MOVEMENTS[m.id]?.name ?? m.id,
              }))}
            />
          </section>
        )}

        <section className="flex flex-col gap-3">
          <SectionRule label={t(LOCALE, 'archiveWorksHeading')} />
          {works.length > 0 ? (
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {works.map((b) => (
                <BuildingCard key={b.id} building={b} locale={LOCALE} />
              ))}
            </ul>
          ) : (
            <p className="text-sm">{t(LOCALE, 'archiveNoBuildings')}</p>
          )}
        </section>

        <section className="flex flex-col gap-3">
          <SectionRule label={t(LOCALE, 'archiveContemporariesHeading')} />
          {contemporaries.length > 0 ? (
            <LinkList
              testId="archive-contemporaries"
              items={contemporaries.map((a) => ({ href: `/architect/${a.id}`, label: a.name }))}
            />
          ) : (
            <p className="text-sm">{t(LOCALE, 'archiveNoContemporaries')}</p>
          )}
        </section>
      </article>
    </main>
  );
}
