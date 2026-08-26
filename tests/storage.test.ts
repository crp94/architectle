import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { loadState, saveState, clearState, type GameState } from '@/lib/storage';
import { puzzleNumber } from '@/lib/daily';

const KEY = 'architectle:v1';

function makeState(overrides: Partial<GameState> = {}): GameState {
  return {
    puzzleNumber: puzzleNumber(new Date()),
    guesses: ['frank-lloyd-wright', 'zaha-hadid'],
    solved: true,
    finished: true,
    stats: { played: 10, wins: 8, streak: 3, maxStreak: 5, distribution: [0, 1, 2, 3, 2, 0] },
    ...overrides,
  };
}

describe('storage', () => {
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
