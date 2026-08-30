import { describe, it, expect } from 'vitest';
import { statsSummary } from '@/lib/facts';
import type { GameState } from '@/lib/storage';

function makeStats(overrides: Partial<GameState['stats']> = {}): GameState['stats'] {
  return {
    played: 0, wins: 0, streak: 0, maxStreak: 0, distribution: [0, 0, 0, 0, 0, 0], ...overrides,
  };
}

describe('statsSummary', () => {
  it('rounds the win percentage from wins/played', () => {
    const s = statsSummary(makeStats({ played: 3, wins: 2 }));
    expect(s.winPct).toBe('67%');
  });

  it('reports 0% rather than dividing by zero when nothing has been played', () => {
    const s = statsSummary(makeStats());
    expect(s.winPct).toBe('0%');
    expect(s.played).toBe(0);
  });

  it('carries played/streak/maxStreak straight through', () => {
    const s = statsSummary(makeStats({
      played: 10, wins: 8, streak: 3, maxStreak: 5,
    }));
    expect(s.played).toBe(10);
    expect(s.streak).toBe(3);
    expect(s.maxStreak).toBe(5);
  });

  it('scales each distribution bar against the single largest bucket, not against played', () => {
    const s = statsSummary(makeStats({
      played: 8, wins: 8, distribution: [0, 1, 2, 4, 1, 0],
    }));
    expect(s.distribution).toHaveLength(6);
    expect(s.distribution.map((b) => b.guesses)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(s.distribution.map((b) => b.count)).toEqual([0, 1, 2, 4, 1, 0]);
    // The largest bucket (4, at guess 4) draws a full-width bar...
    expect(s.distribution[3].pct).toBe(100);
    // ...and every other bucket scales relative to it, not to `played`.
    expect(s.distribution[1].pct).toBe(25); // 1/4
    expect(s.distribution[2].pct).toBe(50); // 2/4
    expect(s.distribution[0].pct).toBe(0);
  });

  it('never divides by zero when every distribution bucket is empty', () => {
    const s = statsSummary(makeStats());
    expect(s.distribution.every((b) => b.pct === 0)).toBe(true);
  });
});
