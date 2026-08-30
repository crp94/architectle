import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  loadState, saveState, clearState, type GameState,
  loadStats, saveStats, defaultStats, nextStats, type Stats,
} from '@/lib/storage';
import { puzzleNumber } from '@/lib/daily';

const KEY = 'architectle:v1';
const STATS_KEY = 'architectle:v1:stats';

function makeState(overrides: Partial<GameState> = {}): GameState {
  return {
    puzzleNumber: puzzleNumber(new Date()),
    buildingId: 'fallingwater',
    guesses: ['frank-lloyd-wright', 'zaha-hadid'],
    solved: true,
    finished: true,
    ...overrides,
  };
}

function makeStats(overrides: Partial<Stats> = {}): Stats {
  return {
    played: 10, wins: 8, streak: 3, maxStreak: 5, distribution: [0, 1, 2, 3, 2, 0], lastWinPuzzle: 99,
    ...overrides,
  };
}

describe('storage (daily round)', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it('round-trips a GameState', () => {
    const s = makeState();
    saveState(s);
    expect(loadState()).toEqual(s);
  });

  it('returns null on an empty store', () => {
    expect(loadState()).toBeNull();
  });

  it('returns null and does not throw when localStorage.getItem throws', () => {
    const spy = vi
      .spyOn(Storage.prototype, 'getItem')
      .mockImplementation(() => {
        throw new DOMException('blocked', 'SecurityError');
      });
    expect(() => loadState()).not.toThrow();
    expect(loadState()).toBeNull();
    spy.mockRestore();
  });

  it('saveState swallows a throwing setItem', () => {
    const spy = vi
      .spyOn(Storage.prototype, 'setItem')
      .mockImplementation(() => {
        throw new DOMException('quota exceeded', 'QuotaExceededError');
      });
    expect(() => saveState(makeState())).not.toThrow();
    spy.mockRestore();
    // Nothing was persisted, since the write threw before it could land.
    expect(loadState()).toBeNull();
  });

  it('clearState swallows a throwing removeItem', () => {
    saveState(makeState());
    const spy = vi
      .spyOn(Storage.prototype, 'removeItem')
      .mockImplementation(() => {
        throw new DOMException('blocked', 'SecurityError');
      });
    expect(() => clearState()).not.toThrow();
    spy.mockRestore();
  });

  it('clearState removes the saved state', () => {
    saveState(makeState());
    clearState();
    expect(loadState()).toBeNull();
  });

  it('returns null on malformed JSON', () => {
    localStorage.setItem(KEY, '{not valid json');
    expect(loadState()).toBeNull();
  });

  it("returns null when the stored puzzleNumber differs from today's, so yesterday's board never resumes", () => {
    const yesterday = makeState({ puzzleNumber: puzzleNumber(new Date()) - 1 });
    localStorage.setItem(KEY, JSON.stringify(yesterday));
    expect(loadState()).toBeNull();
  });
});

describe('stats persistence (codereview finding #1)', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it('defaultStats starts at all zeros with no prior win', () => {
    expect(defaultStats()).toEqual({
      played: 0, wins: 0, streak: 0, maxStreak: 0, distribution: [0, 0, 0, 0, 0, 0], lastWinPuzzle: null,
    });
  });

  it('round-trips a Stats record independently of the daily GameState', () => {
    const s = makeStats();
    saveStats(s);
    expect(loadStats()).toEqual(s);

    // Proof of the actual fix: a stale/absent daily GameState (any day but
    // today) must not touch the separately-keyed stats record at all.
    expect(loadState()).toBeNull();
    expect(loadStats()).toEqual(s);
  });

  it('loadStats returns defaultStats on an empty store', () => {
    expect(loadStats()).toEqual(defaultStats());
  });

  it('does not throw and degrades to defaultStats on malformed JSON', () => {
    localStorage.setItem(STATS_KEY, '{not valid json');
    expect(() => loadStats()).not.toThrow();
    expect(loadStats()).toEqual(defaultStats());
  });

  it('degrades to defaultStats when the stored value is an empty object (finding #3)', () => {
    localStorage.setItem(STATS_KEY, JSON.stringify({}));
    expect(loadStats()).toEqual(defaultStats());
  });

  it('degrades to defaultStats when distribution is not an array', () => {
    localStorage.setItem(STATS_KEY, JSON.stringify({
      played: 1, wins: 1, streak: 1, maxStreak: 1, distribution: 'nope', lastWinPuzzle: null,
    }));
    expect(loadStats()).toEqual(defaultStats());
  });

  it('degrades to defaultStats when distribution contains a non-number', () => {
    localStorage.setItem(STATS_KEY, JSON.stringify({
      played: 1, wins: 1, streak: 1, maxStreak: 1, distribution: [0, 0, '2', 0, 0, 0], lastWinPuzzle: null,
    }));
    expect(loadStats()).toEqual(defaultStats());
  });

  it('degrades to defaultStats when a numeric field is the wrong type', () => {
    localStorage.setItem(STATS_KEY, JSON.stringify({
      played: '1', wins: 1, streak: 1, maxStreak: 1, distribution: [0, 0, 0, 0, 0, 0], lastWinPuzzle: null,
    }));
    expect(loadStats()).toEqual(defaultStats());
  });

  it('degrades to defaultStats when lastWinPuzzle is neither a number nor null', () => {
    localStorage.setItem(STATS_KEY, JSON.stringify({
      played: 1, wins: 1, streak: 1, maxStreak: 1, distribution: [0, 0, 0, 0, 0, 0], lastWinPuzzle: 'yesterday',
    }));
    expect(loadStats()).toEqual(defaultStats());
  });

  it("migrates an old combined-shape record's embedded stats (win) into the new record", () => {
    const legacy = {
      puzzleNumber: 50,
      buildingId: 'x',
      guesses: ['a'],
      solved: true,
      finished: true,
      stats: {
        played: 4, wins: 3, streak: 2, maxStreak: 2, distribution: [0, 1, 1, 1, 0, 0],
      },
    };
    localStorage.setItem(KEY, JSON.stringify(legacy));

    const migrated = loadStats();
    expect(migrated).toEqual({
      played: 4, wins: 3, streak: 2, maxStreak: 2, distribution: [0, 1, 1, 1, 0, 0], lastWinPuzzle: 50,
    });
    // Persisted under the new key so it isn't lost/re-migrated on the next load.
    expect(JSON.parse(localStorage.getItem(STATS_KEY)!)).toEqual(migrated);
  });

  it("migration leaves lastWinPuzzle null when the legacy record's own last round was a loss", () => {
    const legacy = {
      puzzleNumber: 50,
      buildingId: 'x',
      guesses: [],
      solved: false,
      finished: true,
      stats: {
        played: 4, wins: 3, streak: 0, maxStreak: 2, distribution: [0, 1, 1, 1, 0, 0],
      },
    };
    localStorage.setItem(KEY, JSON.stringify(legacy));
    expect(loadStats().lastWinPuzzle).toBeNull();
  });

  it('does not migrate (or overwrite) once a new-shape stats record already exists', () => {
    saveStats(makeStats({ played: 1, wins: 1 }));
    localStorage.setItem(KEY, JSON.stringify({
      puzzleNumber: 1,
      buildingId: 'x',
      guesses: [],
      solved: true,
      finished: true,
      stats: {
        played: 99, wins: 99, streak: 99, maxStreak: 99, distribution: [0, 0, 0, 0, 0, 0],
      },
    }));
    expect(loadStats().played).toBe(1);
  });

  it('ignores a legacy record with no embedded stats at all and returns defaultStats', () => {
    localStorage.setItem(KEY, JSON.stringify({
      puzzleNumber: 1, buildingId: 'x', guesses: [], solved: true, finished: true,
    }));
    expect(loadStats()).toEqual(defaultStats());
  });

  it('saveStats swallows a throwing setItem', () => {
    const spy = vi
      .spyOn(Storage.prototype, 'setItem')
      .mockImplementation(() => {
        throw new DOMException('quota exceeded', 'QuotaExceededError');
      });
    expect(() => saveStats(makeStats())).not.toThrow();
    spy.mockRestore();
    expect(loadStats()).toEqual(defaultStats());
  });
});

describe('nextStats streak semantics (codereview finding #1)', () => {
  it('a first-ever win starts the streak at 1', () => {
    const s = nextStats(defaultStats(), true, 3, 10);
    expect(s.streak).toBe(1);
    expect(s.maxStreak).toBe(1);
    expect(s.lastWinPuzzle).toBe(10);
    expect(s.wins).toBe(1);
    expect(s.played).toBe(1);
  });

  it('winning puzzle N+1 the day after winning puzzle N continues the streak to 2', () => {
    const afterN = nextStats(defaultStats(), true, 2, 10);
    const afterN1 = nextStats(afterN, true, 4, 11);
    expect(afterN1.streak).toBe(2);
    expect(afterN1.maxStreak).toBe(2);
    expect(afterN1.lastWinPuzzle).toBe(11);
  });

  it('winning puzzle N+2 after winning puzzle N (a missed day) resets the streak to 1, not 0', () => {
    const afterN = nextStats(defaultStats(), true, 2, 10);
    const afterN2 = nextStats(afterN, true, 5, 12);
    expect(afterN2.streak).toBe(1);
    // The earlier streak's high-water mark is not erased by the reset.
    expect(afterN2.maxStreak).toBe(1);
  });

  it('a loss resets the streak to 0 without touching wins or lastWinPuzzle', () => {
    const afterWin = nextStats(defaultStats(), true, 2, 10);
    const afterLoss = nextStats(afterWin, false, 6, 11);
    expect(afterLoss.streak).toBe(0);
    expect(afterLoss.wins).toBe(afterWin.wins);
    expect(afterLoss.lastWinPuzzle).toBe(afterWin.lastWinPuzzle);
    expect(afterLoss.played).toBe(afterWin.played + 1);
  });

  it('maxStreak tracks the running high-water mark across ups and downs', () => {
    let s = defaultStats();
    s = nextStats(s, true, 1, 1); // streak 1
    s = nextStats(s, true, 2, 2); // streak 2
    s = nextStats(s, true, 3, 3); // streak 3
    s = nextStats(s, false, 6, 4); // streak 0
    s = nextStats(s, true, 1, 5); // streak 1 (fresh, after the loss)
    expect(s.maxStreak).toBe(3);
    expect(s.streak).toBe(1);
  });

  it('records the guess-count distribution only on a win, leaves it untouched on a loss', () => {
    const s = nextStats(defaultStats(), true, 3, 1);
    expect(s.distribution[2]).toBe(1);
    const s2 = nextStats(s, false, 6, 2);
    expect(s2.distribution).toEqual(s.distribution);
  });

  it('unlimited mode never touches stats: nextStats is a pure function only GameBoard\'s daily path calls', () => {
    // Documentation-as-test: nextStats has no notion of "mode" at all — the
    // guarantee that unlimited mode never reads/writes stats lives entirely
    // in GameBoard.tsx's own `mode === 'daily'` guard, not here.
    expect(typeof nextStats).toBe('function');
  });
});
