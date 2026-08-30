import { describe, it, expect } from 'vitest';
import { shareGrid, shareText } from '@/lib/share';
import type { Comparison } from '@/lib/axes';

const cmp = (era: 'CONTEMPORARY'|'NEAR'|'FAR', mv: 'EXACT'|'SHARED'|'FAMILY'|'NONE',
              rg: 'EXACT'|'REGION'|'NONE', ty: 'EXACT'|'PARTIAL'|'NONE'): Comparison => ({
  era: { bucket: era, deltaYears: 0, direction: 'same' },
  movement: mv,
  region: { match: rg, bearing: null },
  typology: { match: ty, typologyMatch: ty === 'EXACT', materialMatch: ty === 'EXACT' },
});

describe('shareGrid', () => {
  it('renders one row of four blocks per guess', () => {
    const g = shareGrid([cmp('FAR', 'NONE', 'NONE', 'NONE'), cmp('CONTEMPORARY', 'EXACT', 'EXACT', 'EXACT')]);
    const rows = g.split('\n');
    expect(rows).toHaveLength(2);
    expect([...rows[0]]).toHaveLength(4);
    expect(rows[0]).toBe('⬜⬜⬜⬜');
    expect(rows[1]).toBe('⬛⬛⬛⬛');
  });

  it('uses the accent block for partial matches', () => {
    expect(shareGrid([cmp('NEAR', 'FAMILY', 'REGION', 'PARTIAL')])).toBe('🟨🟨🟨🟨');
    expect(shareGrid([cmp('NEAR', 'SHARED', 'REGION', 'PARTIAL')])).toBe('🟨🟨🟨🟨');
  });
});

describe('shareText', () => {
  it('reports the score and never names the architect', () => {
    const t = shareText({ puzzleNumber: 128, guessesUsed: 4,
      comparisons: [cmp('FAR','NONE','NONE','NONE')], locale: 'en' });
    expect(t).toContain('Architectle #128');
    expect(t).toContain('4/6');
    expect(t).toContain('architectle.carlosrodriguezpardo.es');
  });

  it('renders a loss as X/6', () => {
    const t = shareText({ puzzleNumber: 128, guessesUsed: null, comparisons: [], locale: 'en' });
    expect(t).toContain('X/6');
  });

  it('appends a streak line when the streak is 2 or more', () => {
    const t = shareText({
      puzzleNumber: 128, guessesUsed: 4, comparisons: [cmp('FAR','NONE','NONE','NONE')], locale: 'en', streak: 5,
    });
    expect(t).toContain('🔥5');
    // Stays on the header line, not a whole extra line — keeps the payload short.
    expect(t.split('\n\n')[0]).toBe('Architectle #128 4/6 🔥5');
  });

  it('omits the streak line for a streak of 1 (a single win is not yet "a streak")', () => {
    const t = shareText({
      puzzleNumber: 128, guessesUsed: 4, comparisons: [cmp('FAR','NONE','NONE','NONE')], locale: 'en', streak: 1,
    });
    expect(t).not.toContain('🔥');
  });

  it('omits the streak line entirely when streak is not passed (e.g. unlimited mode)', () => {
    const t = shareText({ puzzleNumber: 128, guessesUsed: 4, comparisons: [cmp('FAR','NONE','NONE','NONE')], locale: 'en' });
    expect(t).not.toContain('🔥');
  });

  it('labels an unlimited result as practice rather than a numbered daily puzzle', () => {
    const text = shareText({
      puzzleNumber: 128, guessesUsed: 4, comparisons: [cmp('FAR', 'NONE', 'NONE', 'NONE')], locale: 'en', mode: 'unlimited',
    });
    expect(text).toContain('Architectle Unlimited 4/6');
    expect(text).not.toContain('#128');
  });

  it('never leaks the architect or building name for a solved round, in any locale', () => {
    // These are stand-ins for whatever the answer happens to be: shareText receives
    // only Comparison[], puzzleNumber, guessesUsed and locale, so it has no channel
    // through which an architect or building name could ever reach the output.
    const forbidden = ['Zaha Hadid', 'Le Corbusier', 'Sydney Opera House', 'Fallingwater'];
    const comparisons = [
      cmp('FAR', 'NONE', 'NONE', 'NONE'),
      cmp('NEAR', 'FAMILY', 'REGION', 'PARTIAL'),
      cmp('CONTEMPORARY', 'EXACT', 'EXACT', 'EXACT'),
    ];
    for (const locale of ['en', 'es', 'it'] as const) {
      const t = shareText({ puzzleNumber: 128, guessesUsed: 3, comparisons, locale });
      for (const name of forbidden) {
        expect(t).not.toContain(name);
      }
    }
  });
});
