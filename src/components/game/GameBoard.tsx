'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { BUILDINGS, architectById, canonBuildings } from '@/lib/pool';
import { dailyIndex, puzzleNumber } from '@/lib/daily';
import { compareArchitects, type Comparison } from '@/lib/axes';
import { loadState, saveState, type GameState } from '@/lib/storage';
import { t, type Locale } from '@/lib/i18n';
import { theme } from '@/lib/theme';
import type { Building } from '@/types/building';
import type { Architect } from '@/types/architect';
import { CropStage } from './CropStage';
import { GuessField } from './GuessField';
import { GuessRow } from './GuessRow';
import { Reveal } from '@/components/reveal/Reveal';

const TOTAL_GUESSES = 6;

export type GameBoardProps = {
  /** 'daily' (default) selects from the canon-tier pool via `dailyIndex`;
   * 'unlimited' draws from the whole pool and — per design spec §4.5 —
   * never reads or writes daily stats/streak/localStorage. */
  mode?: 'daily' | 'unlimited';
  /**
   * Overrides the target building instead of deriving one from `mode`.
   * Exists for tests (a fixed fixture, independent of the live pool) and
   * for embedding a specific building without wiring a whole route.
   */
  building?: Building;
  locale?: Locale;
};

type GuessEntry = { architect: Architect; comparison: Comparison };

function defaultStats(): GameState['stats'] {
  return { played: 0, wins: 0, streak: 0, maxStreak: 0, distribution: [0, 0, 0, 0, 0, 0] };
}

function nextStats(prev: GameState['stats'], solved: boolean, guessesUsed: number): GameState['stats'] {
  const distribution = [...prev.distribution];
  if (solved) distribution[guessesUsed - 1] = (distribution[guessesUsed - 1] ?? 0) + 1;
  const streak = solved ? prev.streak + 1 : 0;
  return {
    played: prev.played + 1,
    wins: prev.wins + (solved ? 1 : 0),
    streak,
    maxStreak: Math.max(prev.maxStreak, streak),
    distribution,
  };
}

function pickDailyBuilding(): Building {
  const pool = canonBuildings();
  const idx = dailyIndex(new Date(), pool.length);
  return pool[idx];
}

/**
 * Orchestrates one round: picks the target building, renders the crop and
 * guess field, wires each guess through `compareArchitects`, persists daily
 * progress/stats through `storage.ts`, and resolves into `<Reveal />` on
 * win or loss.
 */
export function GameBoard({ mode = 'daily', building, locale = 'en' }: GameBoardProps) {
  // Unlimited mode has no deterministic index to SSR safely (§4.5 draws
  // from the whole pool, not a date-seeded slot), so its target is picked
  // client-side only, after mount, to avoid a hydration mismatch.
  const [unlimitedBuilding, setUnlimitedBuilding] = useState<Building | null>(null);

  /* eslint-disable react-hooks/set-state-in-effect -- reading Math.random()
   * during render (rather than after mount) would produce a different pick
   * on the server than on the client and hydration would fail. This is the
   * one-time "read an external, non-React source of truth on mount" case
   * the rule's own description carves out, not an accidental derived-state
   * effect. */
  useEffect(() => {
    if (building || mode !== 'unlimited') return;
    setUnlimitedBuilding(BUILDINGS[Math.floor(Math.random() * BUILDINGS.length)]);
  }, [building, mode]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const target = useMemo<Building | null>(() => {
    if (building) return building;
    if (mode === 'daily') return pickDailyBuilding();
    return unlimitedBuilding;
  }, [building, mode, unlimitedBuilding]);

  const targetArchitect = useMemo(
    () => (target ? architectById(target.architectId) : null),
    [target],
  );

  const [guesses, setGuesses] = useState<GuessEntry[]>([]);
  const [solved, setSolved] = useState(false);
  const [finished, setFinished] = useState(false);
  const [stats, setStats] = useState<GameState['stats']>(defaultStats());

  // Restores an in-progress daily round exactly once. Guarded with a ref
  // (rather than an empty dependency array) so the effect still declares
  // every value it reads, without re-running when they happen to change.
  const restoredRef = useRef(false);
  /* eslint-disable react-hooks/set-state-in-effect -- localStorage is an
   * external, non-React store read once after mount (never during SSR,
   * where it doesn't exist); syncing React state from it here is the
   * documented escape hatch, not an accidental derived-state effect. */
  useEffect(() => {
    if (restoredRef.current) return;
    restoredRef.current = true;
    if (mode !== 'daily' || building || !targetArchitect) return;

    const saved = loadState();
    if (!saved) return;

    setStats(saved.stats);
    const restored = saved.guesses.map((id) => {
      const architect = architectById(id);
      return { architect, comparison: compareArchitects(architect, targetArchitect) };
    });
    setGuesses(restored);
    setSolved(saved.solved);
    setFinished(saved.finished);
  }, [mode, building, targetArchitect]);
  /* eslint-enable react-hooks/set-state-in-effect */

  if (!target || !targetArchitect) {
    // Unlimited mode still picking its target client-side.
    return null;
  }

  function handleGuess(architect: Architect) {
    if (finished || !target || !targetArchitect) return;

    const comparison = compareArchitects(architect, targetArchitect);
    const nextGuesses = [...guesses, { architect, comparison }];
    const isSolved = architect.id === target.architectId;
    const isFinished = isSolved || nextGuesses.length >= TOTAL_GUESSES;

    setGuesses(nextGuesses);
    if (isSolved) setSolved(true);
    if (isFinished) setFinished(true);

    if (mode === 'daily') {
      const updatedStats = isFinished ? nextStats(stats, isSolved, nextGuesses.length) : stats;
      if (isFinished) setStats(updatedStats);
      saveState({
        puzzleNumber: puzzleNumber(new Date()),
        guesses: nextGuesses.map((g) => g.architect.id),
        solved: isSolved,
        finished: isFinished,
        stats: updatedStats,
      });
    }
  }

  if (finished) {
    return (
      <Reveal
        building={target}
        architect={targetArchitect}
        solved={solved}
        guessesUsed={solved ? guesses.length : null}
        comparisons={guesses.map((g) => g.comparison)}
        locale={locale}
      />
    );
  }

  const currentGuessNumber = Math.min(guesses.length + 1, TOTAL_GUESSES);
  const buildingName = target.name[locale] ?? target.name.en;

  return (
    <div data-testid="game-board" className="flex flex-1 flex-col">
      <CropStage
        imageSrc={`/buildings/${target.id}.avif`}
        imageAlt={buildingName}
        imageWidth={target.image.width}
        imageHeight={target.image.height}
        detailRect={target.detailRect}
        guess={currentGuessNumber}
        totalGuesses={TOTAL_GUESSES}
      />
      <div className="border-b-[3px] border-ink" />
      <div className="flex flex-col gap-4 p-4">
        <p className="text-sm uppercase tracking-wide" style={{ fontFamily: theme.type.mono }}>
          {t(locale, 'guessCounter', { n: currentGuessNumber, total: TOTAL_GUESSES })}
        </p>
        <GuessField locale={locale} onGuess={handleGuess} disabled={finished} />
        <div>
          {guesses.map((g, i) => (
            <GuessRow key={`${g.architect.id}-${i}`} guess={g.architect} comparison={g.comparison} locale={locale} />
          ))}
        </div>
      </div>
    </div>
  );
}
