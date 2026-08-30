import { describe, it, expect } from 'vitest';
import { theme } from '@/lib/theme';

/**
 * Real WCAG 2.x contrast math (relative luminance -> contrast ratio),
 * computed from the actual exported `theme` hex values — not pinned
 * literals. A future edit to any token that drops a pairing below its
 * required threshold fails these assertions, not just a visual review.
 * https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 */
function channelLuminance(c: number): number {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}

function relativeLuminance(hex: string): number {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return 0.2126 * channelLuminance(r) + 0.7152 * channelLuminance(g) + 0.0722 * channelLuminance(b);
}

function contrastRatio(hexA: string, hexB: string): number {
  const la = relativeLuminance(hexA);
  const lb = relativeLuminance(hexB);
  const lighter = Math.max(la, lb);
  const darker = Math.min(la, lb);
  return (lighter + 0.05) / (darker + 0.05);
}

const AA_TEXT = 4.5;
const AA_LARGE_TEXT = 3;

describe('theme colors', () => {
  it('is a valid 6-digit hex value for every color token', () => {
    for (const [key, value] of Object.entries(theme.color)) {
      expect(value, `color.${key}`).toMatch(/^#[0-9a-f]{6}$/i);
    }
  });

  it('clears WCAG AA (4.5:1) body text against every ground it sits on', () => {
    // ink is the primary body/UI text color; paper/mat/paperAlt are the
    // grounds it renders on throughout the app (page background, gallery
    // mat, autocomplete hover row).
    expect(contrastRatio(theme.color.ink, theme.color.paper)).toBeGreaterThanOrEqual(AA_TEXT);
    expect(contrastRatio(theme.color.ink, theme.color.mat)).toBeGreaterThanOrEqual(AA_TEXT);
    expect(contrastRatio(theme.color.ink, theme.color.paperAlt)).toBeGreaterThanOrEqual(AA_TEXT);
  });

  it('clears WCAG AA (4.5:1) for paper text on an inverted ink ground', () => {
    // The inverse pairing (e.g. a filled button, an exact-match specimen
    // label) — same ratio as ink-on-paper by definition, asserted directly
    // against the tokens actually used together.
    expect(contrastRatio(theme.color.paper, theme.color.ink)).toBeGreaterThanOrEqual(AA_TEXT);
  });

  it('clears WCAG AA (4.5:1) for the accent used as text on paper/mat', () => {
    // `accent` is deliberately deep and muted (design spec §5) and is used
    // by the new primitives ONLY as small text on a light ground (a
    // specimen label's partial-match value, a kicker) — never as a large
    // fill with dark text on top of it. See the module comment in
    // src/lib/theme.ts for the one known legacy exception (a few v1
    // components still use `bg-accent` + `text-ink`, which this palette
    // does not attempt to keep legible — flagged for wave 4 instead).
    expect(contrastRatio(theme.color.accent, theme.color.paper)).toBeGreaterThanOrEqual(AA_TEXT);
    expect(contrastRatio(theme.color.accent, theme.color.mat)).toBeGreaterThanOrEqual(AA_TEXT);
  });

  it('clears WCAG AA (4.5:1) for warn text on paper (its only real use site)', () => {
    expect(contrastRatio(theme.color.warn, theme.color.paper)).toBeGreaterThanOrEqual(AA_TEXT);
  });

  it('clears the large-display-text floor (3:1) for ink-on-paper headlines', () => {
    // Building/architect display names render at 3xl/4xl using `ink` on
    // `paper` — comfortably clears the stricter 4.5:1 minimum above, so
    // this is a belt-and-braces check against the spec's explicit 3:1
    // large-text floor rather than a distinct color pairing.
    expect(contrastRatio(theme.color.ink, theme.color.paper)).toBeGreaterThanOrEqual(AA_LARGE_TEXT);
  });

  it('documents (without gating) the one known legacy under-contrast pairing', () => {
    // `ink` text directly on a filled `accent` background — the pairing a
    // few not-yet-restyled v1 components still use (src/app/page.tsx,
    // src/app/about/page.tsx, ArchiveNav.tsx, AxisChip.tsx's `partial`
    // tone). This assertion is deliberately an upper bound, not a floor: it
    // exists so that if a future palette change accidentally makes this
    // pairing legible, this test stops silently describing a problem that
    // no longer exists, rather than to enforce the current (bad) state.
    expect(contrastRatio(theme.color.ink, theme.color.accent)).toBeLessThan(AA_LARGE_TEXT);
  });

  it('keeps `warn` and `accent` as the same "one muted accent" hue', () => {
    expect(theme.color.warn).toBe(theme.color.accent);
  });

  it('keeps mat and frameLine distinguishable from paper (non-zero, but quiet)', () => {
    const matVsPaper = contrastRatio(theme.color.mat, theme.color.paper);
    const frameLineVsPaper = contrastRatio(theme.color.frameLine, theme.color.paper);
    expect(matVsPaper).toBeGreaterThan(1);
    expect(frameLineVsPaper).toBeGreaterThan(1);
    // Neither is meant to be loud: mat is a large quiet surface, frameLine
    // is a hairline rule, not body text — so both stay well under the AA
    // text floor by design.
    expect(matVsPaper).toBeLessThan(AA_LARGE_TEXT);
    expect(frameLineVsPaper).toBeLessThan(AA_LARGE_TEXT);
  });
});

describe('theme shape', () => {
  it('keeps the v1-compatible color keys other components already reference', () => {
    for (const key of ['ink', 'paper', 'paperAlt', 'accent', 'warn', 'white'] as const) {
      expect(typeof theme.color[key]).toBe('string');
    }
  });

  it('adds the new gallery/frame tokens the v2 primitives read', () => {
    expect(theme.color.mat).toMatch(/^#[0-9a-f]{6}$/i);
    expect(theme.color.frameLine).toMatch(/^#[0-9a-f]{6}$/i);
    expect(theme.rule.hairline).toBe('1px');
  });

  it('keeps the v1-compatible rule/shadow/type keys other components already reference', () => {
    expect(typeof theme.rule.thin).toBe('string');
    expect(typeof theme.rule.thick).toBe('string');
    expect(typeof theme.shadow.hard).toBe('string');
    expect(typeof theme.type.display).toBe('string');
    expect(typeof theme.type.body).toBe('string');
    expect(typeof theme.type.mono).toBe('string');
  });

  it('has a refined hairline/soft-shadow scale, not v1\'s 6px brutalist offset', () => {
    expect(theme.shadow.hard).not.toMatch(/^6px 6px 0/);
    expect(theme.rule.thick).not.toBe('3px');
  });

  it('wires display/body/ui type through the self-hosted font CSS variables', () => {
    expect(theme.type.display).toContain('var(--font-display)');
    expect(theme.type.body).toContain('var(--font-ui)');
    expect(theme.type.ui).toContain('var(--font-ui)');
    // Mono stays a system stack (spec §5: rationed to citations, not worth
    // a third self-hosted font) rather than a var(--font-*) reference.
    expect(theme.type.mono).not.toContain('var(--font');
  });
});
