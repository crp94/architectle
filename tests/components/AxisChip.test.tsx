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
});
