import { describe, it, expect } from 'vitest';
import {
  dailyBuildingIdOverride, dailyIndex, displayPuzzleNumber, localDayIndex, mulberry32, puzzleNumber, shuffledCycle, EPOCH,
} from '@/lib/daily';

describe('mulberry32', () => {
  it('is deterministic for a seed', () => {
    const a = mulberry32(42), b = mulberry32(42);
    expect([a(), a(), a()]).toEqual([b(), b(), b()]);
  });
  it('stays in [0,1)', () => {
    const r = mulberry32(7);
    for (let i = 0; i < 1000; i++) { const v = r(); expect(v).toBeGreaterThanOrEqual(0); expect(v).toBeLessThan(1); }
  });
});

describe('shuffledCycle', () => {
  it('is a permutation of 0..n-1', () => {
    const c = shuffledCycle(40, 0);
    expect([...c].sort((x, y) => x - y)).toEqual(Array.from({ length: 40 }, (_, i) => i));
  });
  it('differs between cycles', () => {
    expect(shuffledCycle(40, 0)).not.toEqual(shuffledCycle(40, 1));
  });
  it('is stable across calls', () => {
    expect(shuffledCycle(40, 3)).toEqual(shuffledCycle(40, 3));
  });
});

describe('dailyIndex', () => {
  it('pins today to The Shard by Renzo Piano', () => {
    expect(dailyBuildingIdOverride(new Date(2026, 7, 30, 12))).toBe('the-shard');
  });

  it('leaves other days on the normal rotation', () => {
    expect(dailyBuildingIdOverride(new Date(2026, 7, 31, 12))).toBeUndefined();
  });

  it('visits every building exactly once before repeating', () => {
    const n = 40;
    const seen = new Set<number>();
    for (let d = 0; d < n; d++) {
      seen.add(dailyIndex(new Date(2026, 8, 1 + d, 12), n));
    }
    expect(seen.size).toBe(n);
  });

  it('is stable across a DST boundary', () => {
    // Europe/Madrid falls back on 2026-10-25.
    const before = dailyIndex(new Date(2026, 9, 25, 1), 40);
    const after = dailyIndex(new Date(2026, 9, 25, 23), 40);
    expect(before).toBe(after);
  });

  it('changes at local midnight, not UTC midnight', () => {
    const lateOn5th = dailyIndex(new Date(2026, 8, 5, 23, 59), 40);
    const earlyOn6th = dailyIndex(new Date(2026, 8, 6, 0, 1), 40);
    expect(lateOn5th).not.toBe(earlyOn6th);
  });
});

describe('puzzleNumber', () => {
  it('starts at 1 on the epoch day', () => {
    expect(puzzleNumber(new Date(2026, 8, 1, 12))).toBe(1);
  });
  it('increments by one per local day', () => {
    expect(puzzleNumber(new Date(2026, 8, 11, 12))).toBe(11);
  });
});

describe('displayPuzzleNumber (codereview finding #5)', () => {
  it('matches puzzleNumber on and after the epoch day', () => {
    expect(displayPuzzleNumber(new Date(2026, 8, 1, 12))).toBe(1);
    expect(displayPuzzleNumber(new Date(2026, 8, 11, 12))).toBe(11);
  });

  it('clamps a pre-epoch (negative/zero) puzzleNumber up to 1', () => {
    const before = new Date(EPOCH - 5 * 86_400_000); // 5 days before launch
    expect(puzzleNumber(before)).toBeLessThan(1);
    expect(displayPuzzleNumber(before)).toBe(1);
  });
});

describe('localDayIndex', () => {
  it('ignores the time of day', () => {
    expect(localDayIndex(new Date(2026, 8, 9, 0, 0)))
      .toBe(localDayIndex(new Date(2026, 8, 9, 23, 59)));
  });
});
