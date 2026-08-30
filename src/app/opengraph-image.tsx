import { ImageResponse } from 'next/og';
import { theme } from '@/lib/theme';

export const alt = 'Architectle — name the architect from a widening crop.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// The generic, branded fallback OG image for the whole site (design spec
// §7: per-route dynamic OG images "replacing the single static template" —
// this one stays as that replacement's own fallback for the home page and
// the three archive INDEXES, none of which have a single photograph of
// their own). A building's own page overrides this with
// `building/[slug]/opengraph-image.tsx`; architect and movement pages get
// their own text-card variants too. This file must NEVER reference the
// day's actual building/architect — the home page's daily target resolves
// client-side specifically so no server-rendered surface, including this
// image, can leak it (see src/app/page.tsx's own comment on the same
// point) — this template only ever names the game itself.
//
// Paper-ground / ink-text (rather than a full accent fill) is a deliberate
// choice over the v1 template this replaces: `theme.ts`'s own module
// comment flags that `ink` directly on `accent` clears only ~1.7:1
// contrast, nowhere near AA. An OG image isn't gated by WCAG the way a
// live page is, but there's no reason to ship the ONE known bad-contrast
// pairing into a share preview when `ink`-on-`paper` (15.70:1) reads just
// as "gallery" and is actually legible at social-preview thumbnail sizes.
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
          backgroundColor: theme.color.paper,
          color: theme.color.ink,
        }}
      >
        <div
          style={{
            fontSize: 132,
            fontWeight: 700,
            letterSpacing: -4,
            textTransform: 'uppercase',
            fontFamily: 'Georgia, "Times New Roman", serif',
          }}
        >
          Architectle
        </div>
        <div
          style={{
            marginTop: 20,
            width: 120,
            height: 4,
            backgroundColor: theme.color.accent,
          }}
        />
        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            textTransform: 'uppercase',
            letterSpacing: 2,
            fontFamily: 'Arial, Helvetica, sans-serif',
          }}
        >
          Name the architect from a widening crop.
        </div>
      </div>
    ),
    { ...size },
  );
}
