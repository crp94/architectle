import { ImageResponse } from 'next/og';
import { movementById, referencedMovementIds } from '@/lib/archive';
import { familyLabel } from '@/lib/facts';
import { t } from '@/lib/i18n';
import { specimenCard } from '@/lib/ogSpecimenCard';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'An architecture movement on Architectle, with its family and approximate span.';
// `specimenCard()` rasterizes the brand SVG via `sharp` — needs real Node
// bindings, same as `building/[slug]`'s own OG route.
export const runtime = 'nodejs';

type Params = { slug: string };

export function generateStaticParams() {
  return referencedMovementIds().map((id) => ({ slug: id }));
}

/**
 * A movement (`src/data/movements.ts`) is a curated taxonomy label with no
 * photograph of its own, so — like the architect OG image — this uses the
 * shared `specimenCard()` template (src/lib/ogSpecimenCard.tsx, codereview
 * finding #9): name, family, and approximate span.
 */
export default async function Image({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const movement = movementById(slug);

  const name = movement?.name ?? 'Architectle';
  const meta = movement
    ? `${familyLabel(movement.family, 'en')} · ${movement.approxSpan.start}–${movement.approxSpan.end ?? t('en', 'archiveOngoing')}`
    : '';

  return new ImageResponse(await specimenCard({ name, meta }), { ...size });
}
