import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

/**
 * Rasterized, base64-embeddable copies of the owner's real brand assets
 * (`public/brand/architectle-mark.svg` / `architectle-logo.svg`), for use
 * inside `next/og`'s `ImageResponse` templates (the four `opengraph-image.tsx`
 * routes). Satori/resvg — the renderer behind `ImageResponse` — can't
 * reliably rasterize an arbitrary local SVG passed straight into an
 * `<img src>` at request time (the same limitation `building/[slug]`'s own
 * OG route already documents for AVIF: re-encoding through `sharp` first is
 * what actually works), so this pre-renders each asset to a fixed-size PNG
 * data URI, once, via the same `sharp` dependency already used for the
 * building-photo pipeline.
 *
 * Both are memoized at module scope: the source files never change at
 * runtime, so every route that imports this module shares one decode.
 */

const LOGO_ASPECT = 420 / 72; // architectle-logo.svg's own viewBox

let markPromise: Promise<string> | null = null;
let logoPromise: Promise<string> | null = null;

async function rasterize(assetFile: string, width: number, height: number): Promise<string> {
  const svgPath = join(process.cwd(), 'public', 'brand', assetFile);
  const svg = await readFile(svgPath);
  const png = await sharp(svg).resize(width, height).png().toBuffer();
  return `data:image/png;base64,${png.toString('base64')}`;
}

/** The standalone mark (the nested frames + "A"), rasterized square at a
 * fixed 256x256 — every call site downscales it further via `<img>`
 * width/height, the same way the building OG route reuses one full-size
 * photo PNG at whatever display size a template needs. */
export function markDataUri(): Promise<string> {
  if (!markPromise) markPromise = rasterize('architectle-mark.svg', 256, 256);
  return markPromise;
}

/** The full wordmark lockup (mark + "Architectle" in the display serif),
 * rasterized once at a fixed width preserving the source SVG's own aspect
 * ratio. */
export function logoDataUri(): Promise<string> {
  if (!logoPromise) logoPromise = rasterize('architectle-logo.svg', 840, Math.round(840 / LOGO_ASPECT));
  return logoPromise;
}
