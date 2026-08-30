// Museum/gallery editorial palette (v2 refocus, design spec §5). Every
// text/ground pairing below is checked against real WCAG relative-luminance
// contrast math in tests/theme.test.ts — not eyeballed — so a future change
// to any of these hex values that breaks AA fails CI. The computed ratios
// (see the report at
// .superpowers/sdd/2026-08-30-architectle-v2/t2b-report.md) are:
//   ink    on paper     15.70:1   ink    on mat        13.19:1
//   paper  on ink       15.70:1   ink    on paperAlt    12.64:1
//   accent on paper      9.18:1   accent on mat          7.71:1
//
// `accent` is deliberately a DEEP, muted oxblood — closer in luminance to
// `ink` than to `paper` — because the spec (§5) asks for "one muted accent"
// in the oxblood/umber/slate register, not a pastel. That has one known
// consequence: a handful of v1 components still put `text-ink` directly ON
// TOP of `bg-accent` as a large filled banner (src/app/page.tsx,
// src/app/about/page.tsx, src/components/archive/ArchiveNav.tsx, and
// AxisChip.tsx's `partial` tone) — `ink` on `accent` only clears ~1.7:1,
// nowhere near AA. This task's scope is tokens/fonts/primitives only (no
// page/component redesigns), so those call sites are left exactly as they
// render today rather than patched here; the regression is flagged
// prominently in the T2b report for wave 4 (which owns those surfaces) to
// pick up. Every *new* primitive in src/components/ui/ uses `accent` only
// as TEXT on `paper`/`mat` (9.18:1 / 7.71:1 — both comfortably AA), never as
// a large fill behind `ink` text.
export const theme = {
  color: {
    // Near-black ink, warmed rather than pure #000 to sit quietly on the
    // warm paper ground below.
    ink: '#1b1712',
    // A warm paper ground — gallery-wall off-white, not a cold digital
    // white.
    paper: '#f5f0e6',
    // Hover/active feedback tone for paper surfaces (e.g. an autocomplete
    // row) — a shade further from `paper` than `mat`, so a hover state
    // reads as clearly different from the resting mat tone.
    paperAlt: '#e3d8c4',
    // The mat surrounding a photograph in `<GalleryFrame />` — a subtle
    // step down from `paper`, present but quiet (contrast against `paper`
    // is a deliberately gentle ~1.19:1; it is never used for text-on-mat
    // vs text-on-paper distinctions, only as a large quiet surface).
    mat: '#e6ddc7',
    // The hairline itself: a frame/rule colour for GalleryFrame's edge and
    // SectionRule's divider. Decorative, not text — not AA-gated.
    frameLine: '#c7bca4',
    // The one muted accent (see the module comment above for the
    // rationale and its one known legacy-contrast caveat).
    accent: '#6e2a1f',
    // `warn` intentionally shares `accent`'s exact value. v1 kept `warn`
    // and `accent` as two different hues (acid yellow vs. a darkened red);
    // v2's "one muted accent" rule collapses them back into a single hue
    // used for both roles, the same way v1 already had to hand-tune `warn`
    // away from the spec's original red once contrast math demanded it.
    // Both keys stay, for any code that already reads one or the other.
    warn: '#6e2a1f',
    white: '#ffffff',
  },
  shadow: {
    // A gallery print lifted slightly off the wall, replacing v1's flat
    // 6px hard-offset brutalist shadow. The rgba triples are `ink`'s own
    // rgb (27, 23, 18) — the shadow reads as ink's own shade, not an
    // arbitrary grey.
    hard: '0 1px 2px rgba(27, 23, 18, 0.06), 0 8px 24px rgba(27, 23, 18, 0.10)',
  },
  rule: {
    // The refined hairline scale (spec §5: "hairlines, not 6px brutalist
    // offsets"). `hairline` is the canonical 1px line new primitives
    // reach for; `thin`/`thick` stay for the v1 call sites that already
    // read them (src/app/page.tsx, src/app/about/page.tsx) and now render
    // noticeably thinner rules as a result — a welcome side effect of the
    // token change, not a page redesign.
    hairline: '1px',
    thin: '1px',
    thick: '2px',
  },
  type: {
    // High-contrast serif display face — Fraunces (SIL OFL), self-hosted
    // via next/font/google (see src/lib/fonts.ts). `var(--font-display)`
    // is set on <html> by the root layout; the fallback stack keeps this
    // string meaningful even outside that DOM (e.g. component tests render
    // outside the real layout).
    display: "var(--font-display), Fraunces, Georgia, 'Times New Roman', serif",
    // Quiet grotesque — Inter (SIL OFL), self-hosted the same way. Used
    // both for the long-form reading prose (dossier/context copy, this
    // key's original role in v1) and, via the `ui` alias below, for the
    // new primitives' chrome (labels, captions, rules).
    body: "var(--font-ui), Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    // Same typeface as `body` — a distinct key so new UI chrome (specimen
    // labels, gallery captions, section rules) can name its intent
    // ("this is UI chrome") independently of `body` ("this is reading
    // prose"), even though both currently resolve to the same font.
    ui: "var(--font-ui), Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    // Mono is rationed to citations/provenance lines (spec §5) — a system
    // stack rather than a third self-hosted font, since its entire job in
    // this app is a handful of small credit lines, not a distinctive brand
    // voice worth the extra network/build weight.
    mono: "ui-monospace, 'SF Mono', 'Cascadia Code', 'Roboto Mono', Menlo, Consolas, 'Liberation Mono', monospace",
  },
} as const;
