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
