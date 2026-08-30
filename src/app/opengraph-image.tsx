import { ImageResponse } from 'next/og';
import { theme } from '@/lib/theme';
import { t } from '@/lib/i18n';
import { logoDataUri } from '@/lib/brandArt';

// Routed through i18n.ts (codereview finding #7) — this used to be a
// hardcoded English literal, risking silent drift from the equivalent copy
// elsewhere (appTagline, metaHomeDescription) the next time either changed.
export const alt = t('en', 'ogHomeAlt');
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
// `logoDataUri()` reads the brand SVG off disk and rasterizes it via
// `sharp` — needs real Node bindings, same as `building/[slug]`'s own OG
// route.
export const runtime = 'nodejs';

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
// This is the single highest-traffic share surface in the app (w4d task:
// "make results people actually want to post") — it's what a stranger sees
// in a feed BEFORE clicking through, with zero other context. The v1/w4c
// wordmark-plus-tagline card named the game but didn't show what playing it
// looks like; this version adds a small illustrative guess grid (three
// rows going from mostly unmatched to fully solved, in the exact
// none/partial/exact tones `shareGrid` itself renders as emoji — see
// src/lib/share.ts) so the card reads, at a glance, as "a Wordle-shaped
// guessing game about buildings" even to someone who has never played.
// Entirely decorative/illustrative: no reference to any real puzzle,
// building or architect.
//
// Paper-ground / ink-text (rather than a full accent fill) is a deliberate
// choice over the v1 template this replaces: `theme.ts`'s own module
// comment flags that `ink` directly on `accent` clears only ~1.7:1
// contrast, nowhere near AA. An OG image isn't gated by WCAG the way a
// live page is, but there's no reason to ship the ONE known bad-contrast
// pairing into a share preview when `ink`-on-`paper` (15.70:1) reads just
// as "gallery" and is actually legible at social-preview thumbnail sizes.
type CellState = 'none' | 'partial' | 'exact';

const GRID: CellState[][] = [
  ['none', 'none', 'partial', 'none'],
  ['partial', 'exact', 'partial', 'none'],
  ['exact', 'exact', 'exact', 'exact'],
];

export default async function Image() {
  const paper = theme.color.paper;
  const ink = theme.color.ink;
  const accent = theme.color.accent;
  const frameLine = theme.color.frameLine;

  const cellFill: Record<CellState, string> = { none: paper, partial: accent, exact: ink };
  const logo = await logoDataUri();

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
          backgroundColor: paper,
          color: ink,
        }}
      >
        {/* The real owner wordmark, not a re-typed "Architectle" —
            `alt=""`: decorative within the OG image itself, which already
            carries its own `alt` export for screen readers. */}
        <img src={logo} alt="" width={624} height={107} style={{ display: 'flex' }} />
        <div
          style={{
            display: 'flex',
            marginTop: 16,
            width: 110,
            height: 4,
            backgroundColor: accent,
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 40, gap: 12 }}>
          {GRID.map((row, i) => (
            <div key={i} style={{ display: 'flex', gap: 12 }}>
              {row.map((state, j) => (
                <div
                  key={j}
                  style={{
                    display: 'flex',
                    width: 54,
                    height: 54,
                    backgroundColor: cellFill[state],
                    borderWidth: 3,
                    borderStyle: 'solid',
                    borderColor: frameLine,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 40,
            fontSize: 32,
            textTransform: 'uppercase',
            letterSpacing: 2,
            fontFamily: 'Arial, Helvetica, sans-serif',
          }}
        >
          {/* Byte-identical to appTagline today — reusing the same key
              means the two can never drift apart silently (finding #7). */}
          {t('en', 'appTagline')}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 14,
            fontSize: 24,
            opacity: 0.65,
            fontFamily: 'Arial, Helvetica, sans-serif',
          }}
        >
          {t('en', 'ogDailyBuildingLine')}
        </div>
      </div>
    ),
    { ...size },
  );
}
