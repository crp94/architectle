import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BUILDINGS, architectById, buildingBySlug } from '@/lib/pool';
import { buildingJsonLd } from '@/lib/jsonld';
import { SITE_URL } from '@/lib/site';
import { t } from '@/lib/i18n';
import { theme } from '@/lib/theme';
import { ArchiveNav } from '@/components/archive/ArchiveNav';
import { FactStrip } from '@/components/archive/FactStrip';
import { Dossier } from '@/components/archive/Dossier';
import { ContextBlockView } from '@/components/archive/ContextBlockView';
import { Provenance } from '@/components/archive/Provenance';

const LOCALE = 'en' as const;

type Params = { slug: string };

// Every building in the pool gets a static page (design spec §8) —
// including the day's still-unsolved daily target. Nothing in the live
// game links to it before the round resolves (see Reveal.tsx), but the
// route itself is generated like any other; that's the documented,
// intentional shape of "not linked", not "not built".
export function generateStaticParams() {
  return BUILDINGS.map((b) => ({ slug: b.id }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const building = buildingBySlug(slug);
  if (!building) return {};
  const architect = architectById(building.architectId);
  const name = building.name.en;
  const title = t(LOCALE, 'metaArchiveTitle', { name });
  const description = building.dossier.en.slice(0, 155);
  const url = `${SITE_URL}/building/${building.id}`;
  const image = `${SITE_URL}/buildings/${building.id}.avif`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      images: [{ url: image, width: building.image.width, height: building.image.height, alt: name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    other: { 'article:author': architect.name },
  };
}

export default async function BuildingPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const building = buildingBySlug(slug);
  if (!building) notFound();

  const architect = architectById(building.architectId);
  const coArchitects = (building.coArchitects ?? []).map((id) => architectById(id));
  const buildingName = building.name[LOCALE] ?? building.name.en;
  const mapHref = `https://www.openstreetmap.org/?mlat=${building.location.lat}&mlon=${building.location.lon}#map=15/${building.location.lat}/${building.location.lon}`;

  return (
    <main className="flex flex-1 flex-col bg-paper">
      <ArchiveNav locale={LOCALE} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildingJsonLd(building, architect)) }}
      />
      <article className="flex flex-col gap-6 p-4 md:p-8">
        <div className="flex flex-col gap-1">
          <p className="text-xs uppercase tracking-wide text-warn" style={{ fontFamily: theme.type.mono }}>
            {t(LOCALE, 'navBuildingsLink')}
          </p>
          <h1
            data-testid="archive-headline"
            className="text-3xl uppercase leading-none md:text-4xl"
            style={{ fontFamily: theme.type.display }}
          >
            {buildingName}
          </h1>
          <p className="text-sm" style={{ fontFamily: theme.type.body }}>
            <Link href={`/architect/${architect.id}`} className="underline" data-testid="archive-architect-link">
              {architect.name}
            </Link>
            {coArchitects.length > 0 && (
              <>
                {' '}
                {t(LOCALE, 'archiveWithCoArchitects')}{' '}
                {coArchitects.map((a, i) => (
                  <span key={a.id}>
                    {i > 0 ? ', ' : ''}
                    <Link href={`/architect/${a.id}`} className="underline">
                      {a.name}
                    </Link>
                  </span>
                ))}
              </>
            )}
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="md:w-1/2">
            <div className="relative w-full" style={{ boxShadow: theme.shadow.hard }}>
              <Image
                data-testid="archive-photo"
                src={`/buildings/${building.id}.avif`}
                alt={buildingName}
                width={building.image.width}
                height={building.image.height}
                sizes="(min-width: 768px) 50vw, 100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <a
              href={mapHref}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-xs underline"
              style={{ fontFamily: theme.type.mono }}
            >
              {t(LOCALE, 'archiveViewOnMap')}
            </a>
          </div>

          <div className="flex flex-col gap-4 md:w-1/2">
            <FactStrip building={building} locale={LOCALE} />
            <Dossier text={building.dossier} locale={LOCALE} />
            {building.context && <ContextBlockView context={building.context} locale={LOCALE} />}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t-2 border-ink pt-3">
          <Provenance building={building} locale={LOCALE} />
        </div>
      </article>
    </main>
  );
}
