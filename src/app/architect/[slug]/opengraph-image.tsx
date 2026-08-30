import { ImageResponse } from 'next/og';
import { ARCHITECTS, ArchitectNotFoundError, architectById } from '@/lib/pool';
import { architectMovementLabel, architectSpan } from '@/lib/facts';
import { theme } from '@/lib/theme';
import { markDataUri } from '@/lib/brandArt';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'An architect on Architectle, with their life span and movement.';
// `markDataUri()` rasterizes the brand SVG via `sharp` — needs real Node
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
 * do — see `building/[slug]/opengraph-image.tsx`), so this is a text
 * specimen card in the same museum/gallery register: paper ground, ink
 * type, one accent rule, the architect's name/life-span/primary movement.
 * English-only (`architectSpan`/`architectMovementLabel` below take a
 * locale, but every archive page itself is hardcoded to `'en'` today — see
 * that route's own comment on the same, pre-existing limitation).
 */
export default async function Image({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const architect = findArchitect(slug);

  const paper = theme.color.paper;
  const ink = theme.color.ink;
  const accent = theme.color.accent;

  const name = architect?.name ?? 'Architectle';
  const meta = architect ? `${architectSpan(architect)} · ${architectMovementLabel(architect, 'en')}` : '';
  const mark = await markDataUri();

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
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={mark} alt="" width={22} height={22} style={{ display: 'flex' }} />
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
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 24,
            fontSize: 76,
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
