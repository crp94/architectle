import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { AxisChip } from '@/components/ui/AxisChip';
import type { RegionResult } from '@/lib/axes';

describe('AxisChip (region)', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the visible compass-bearing label translated into the active locale', () => {
    // Regression guard: the visible label used to interpolate the raw
    // Compass8 code (e.g. "NE") directly, instead of routing it through
    // `t(locale, COMPASS_KEY[...])` the way aria-label already correctly
    // does — so a non-English player saw an untranslated English
    // abbreviation glued onto an otherwise-translated label.
    const result: RegionResult = { match: 'REGION', bearing: 'NE' };
    render(<AxisChip axis="region" result={result} locale="es" />);

    const chip = screen.getByTestId('axis-chip-region');
    // "NE" (the raw, untranslated code) must not leak into the visible
    // label in a non-English locale.
    expect(chip.textContent).not.toContain('NE');
    // The Spanish translation for "NE" (compassNE) is "noreste".
    expect(chip.textContent).toContain('noreste');
  });

  it('keeps the aria-label fully translated (unchanged behavior)', () => {
    const result: RegionResult = { match: 'REGION', bearing: 'NE' };
    render(<AxisChip axis="region" result={result} locale="es" />);

    const chip = screen.getByTestId('axis-chip-region');
    expect(chip.getAttribute('aria-label')).toContain('noreste');
  });

  it('renders via the SpecimenLabel primitive, tinting only the value text (no accent-fill/ink-text pairing)', () => {
    // v2 re-skin (design spec §5): AxisChip is now a thin wrapper around
    // `<SpecimenLabel />`. A 'partial' match must tint just the VALUE in
    // `accent` on plain `paper` — never fill a background with `accent`
    // behind `ink` text (the under-contrast pairing flagged in the t2b
    // design-system report).
    const result: RegionResult = { match: 'REGION', bearing: null };
    render(<AxisChip axis="region" result={result} locale="en" />);

    const chip = screen.getByTestId('axis-chip-region');
    expect(chip.getAttribute('data-tone')).toBe('partial');
    const specimen = screen.getByTestId('specimen-label');
    expect(specimen.className).not.toContain('bg-accent');
    expect(screen.getByTestId('specimen-label-value').className).toContain('text-accent');
  });

  it('knocks the label out (ink fill, paper text) for an exact match', () => {
    const result: RegionResult = { match: 'EXACT', bearing: null };
    render(<AxisChip axis="region" result={result} locale="en" />);

    expect(screen.getByTestId('axis-chip-region').getAttribute('data-tone')).toBe('exact');
    expect(screen.getByTestId('specimen-label').className).toContain('bg-ink');
    expect(screen.getByTestId('specimen-label-value').className).toContain('text-paper');
  });
});
