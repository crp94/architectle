import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';
import { BUILDINGS, architectById, buildingBySlug } from '@/lib/pool';
import { theme } from '@/lib/theme';

// `sharp` (already a project dependency — the same AVIF pipeline
// fetchImages.ts uses) needs real Node bindings, and reads the built photo
// straight off disk — both require the Node.js runtime, never edge.
export const runtime = 'nodejs';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'A featured building on Architectle, photographed and credited.';

type Params = { slug: string };

// Every building gets its own OG image (design spec §7) — mirrors the
// page's own `generateStaticParams` in this same route segment so this
// file prerenders at build time regardless of whether Next would have
// inherited the sibling page's params automatically.
export function generateStaticParams() {
  return BUILDINGS.map((b) => ({ slug: b.id }));
}

/**
 * The building's own photograph, name and architect, composited into a
 * 1200x630 card with the "Architectle" wordmark — replacing the single
 * static template for this route (design spec §7). Building pages carry no
 * "today's answer" concept of their own (unlike the home page, which
 * resolves its daily target client-side specifically to avoid this) — every
 * building in the pool already has its own public, always-linkable archive
 * page, so there is nothing to leak here that isn't already public.
 *
 * The photo is read from the SAME built `.avif` the page itself serves via
 * `next/image`, then re-encoded to PNG: `next/og`'s renderer (satori/resvg)
 * cannot decode AVIF directly (verified empirically against this exact
 * file while building this route — embedding the raw AVIF bytes throws;
 * re-encoding through `sharp` first works). A plain center `cover` crop is
 * used rather than `building.detailRect` — that rect is tuned for the
 * game's own crop-ladder aspect ratios (src/lib/crop.ts), not a 1200x630 OG
 * card, and reusing it here would need its own pixel math for a different
 * problem than the one it was designed for.
 */
export default async function Image({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const building = buildingBySlug(slug);

  const paper = theme.color.paper;
  const ink = theme.color.ink;
  const accent = theme.color.accent;

  if (!building) {
    // Unreachable via generateStaticParams (every slug comes from the same
    // BUILDINGS pool the page itself enumerates) but kept defensive rather
    // than throwing a build failure for what would be a data bug elsewhere.
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: paper, color: ink, fontSize: 96, fontFamily: 'Georgia, serif',
          }}
        >
          Architectle
        </div>
      ),
      { ...size },
    );
  }

  const architect = architectById(building.architectId);
  const name = building.name.en;

  const photoPath = join(process.cwd(), 'public', 'buildings', `${building.id}.avif`);
  const photoBuffer = await readFile(photoPath);
  const pngBuffer = await sharp(photoBuffer)
    .resize(size.width, size.height, { fit: 'cover', position: 'attention' })
    .png()
    .toBuffer();
  const photoSrc = `data:image/png;base64,${pngBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative' }}>
        {/* A plain <img> with a pre-encoded data URI is the documented
            pattern inside next/og's satori renderer (next/image can't run
            here at all) — see opengraph-image.md's "Using Node.js runtime
            with local assets". `alt=""`: this is the rendered OG image
            ITSELF, never seen by a screen reader — the building's name is
            already real text a few lines down in this same composition,
            which is what a reader of the resulting image actually gets. */}
        <img
          src={photoSrc}
          alt=""
          width={size.width}
          height={size.height}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '32px 48px',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 24,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: paper,
              fontFamily: 'Arial, Helvetica, sans-serif',
            }}
          >
            Architectle
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            padding: '40px 56px 48px',
            background: `linear-gradient(to top, rgba(27,23,18,0.94) 0%, rgba(27,23,18,0.6) 55%, rgba(27,23,18,0) 100%)`,
          }}
        >
          <div style={{ display: 'flex', width: 72, height: 6, backgroundColor: accent, marginBottom: 20 }} />
          <div
            style={{
              display: 'flex',
              fontSize: 58,
              fontWeight: 700,
              lineHeight: 1.1,
              color: paper,
              fontFamily: 'Georgia, "Times New Roman", serif',
            }}
          >
            {name}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 14,
              fontSize: 30,
              color: paper,
              opacity: 0.85,
              fontFamily: 'Arial, Helvetica, sans-serif',
            }}
          >
            {architect.name}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
