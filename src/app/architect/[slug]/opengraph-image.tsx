import { ImageResponse } from 'next/og';
import { ARCHITECTS, ArchitectNotFoundError, architectById } from '@/lib/pool';
import { architectMovementLabel, architectSpan } from '@/lib/facts';
import { specimenCard } from '@/lib/ogSpecimenCard';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'An architect on Architectle, with their life span and movement.';
// `specimenCard()` rasterizes the brand SVG via `sharp` — needs real Node
// bindings, same as `building/[slug]`'s own OG route.
export const runtime = 'nodejs';

type Params = { slug: string };

export function generateStaticParams() {
  return ARCHITECTS.map((a) => ({ slug: a.id }));
}

function findArchitect(slug: string) {
  try {
    return architectById(slug);
  } catch (err) {
    if (err instanceof ArchitectNotFoundError) return undefined;
    throw err;
  }
}

/**
 * An architect has no photograph of their own in this pool (only buildings
 * do — see `building/[slug]/opengraph-image.tsx`), so this is the shared
 * `specimenCard()` template (src/lib/ogSpecimenCard.tsx, codereview finding
 * #9): name, life-span and primary movement. English-only
 * (`architectSpan`/`architectMovementLabel` below take a locale, but every
 * archive page itself is hardcoded to `'en'` today — see that route's own
 * comment on the same, pre-existing limitation).
 */
export default async function Image({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const architect = findArchitect(slug);

  const name = architect?.name ?? 'Architectle';
  const meta = architect ? `${architectSpan(architect)} · ${architectMovementLabel(architect, 'en')}` : '';

  return new ImageResponse(await specimenCard({ name, meta }), { ...size });
}
