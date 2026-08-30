import { ImageResponse } from 'next/og';
import { movementById, referencedMovementIds } from '@/lib/archive';
import { familyLabel } from '@/lib/facts';
import { t } from '@/lib/i18n';
import { theme } from '@/lib/theme';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'An architecture movement on Architectle, with its family and approximate span.';

type Params = { slug: string };

export function generateStaticParams() {
  return referencedMovementIds().map((id) => ({ slug: id }));
}

/**
 * A movement (`src/data/movements.ts`) is a curated taxonomy label with no
 * photograph of its own, so — like the architect OG image — this is a
 * text specimen card: name, family, and approximate span, in the same
 * paper/ink/accent register as every other new OG image this task adds.
 */
export default async function Image({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const movement = movementById(slug);

  const paper = theme.color.paper;
  const ink = theme.color.ink;
  const accent = theme.color.accent;

  const name = movement?.name ?? 'Architectle';
  const meta = movement
    ? `${familyLabel(movement.family, 'en')} · ${movement.approxSpan.start}–${movement.approxSpan.end ?? t('en', 'archiveOngoing')}`
    : '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: paper,
          color: ink,
          padding: '80px 96px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: accent,
            fontFamily: 'Arial, Helvetica, sans-serif',
          }}
        >
          Architectle Archive
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 24,
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.05,
            fontFamily: 'Georgia, "Times New Roman", serif',
          }}
        >
          {name}
        </div>
        {meta.length > 0 && (
          <div
            style={{
              display: 'flex',
              marginTop: 28,
              fontSize: 30,
              textTransform: 'uppercase',
              letterSpacing: 1,
              opacity: 0.75,
              fontFamily: 'Arial, Helvetica, sans-serif',
            }}
          >
            {meta}
          </div>
        )}
        <div style={{ display: 'flex', marginTop: 40, width: 120, height: 6, backgroundColor: accent }} />
      </div>
    ),
    { ...size },
  );
}
