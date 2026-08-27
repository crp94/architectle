import { ImageResponse } from 'next/og';
import { theme } from '@/lib/theme';

export const alt = 'Architectle — name the architect from a widening crop.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// The generic, branded fallback OG image for the whole site (design spec
// §8: "dynamic OpenGraph ... images"). A building's own page overrides
// this with the building's photograph (see building/[slug]/page.tsx's
// `openGraph.images`); architect and movement pages have no photograph of
// their own and fall back to this — kept intentionally simple rather than
// generating a per-slug composed image, per the brief's "keep it simple".
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.color.accent,
          color: theme.color.ink,
        }}
      >
        <div
          style={{
            fontSize: 132,
            fontWeight: 900,
            letterSpacing: -4,
            textTransform: 'uppercase',
            fontFamily: 'Arial Black, Arial, sans-serif',
          }}
        >
          Architectle
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            textTransform: 'uppercase',
            letterSpacing: 2,
            fontFamily: 'Georgia, serif',
          }}
        >
          Name the architect from a widening crop.
        </div>
      </div>
    ),
    { ...size },
  );
}
