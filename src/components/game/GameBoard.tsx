'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { architectById, featuredBuildings } from '@/lib/pool';
import { buildingsByArchitect } from '@/lib/archive';
import { dailyIndex, puzzleNumber } from '@/lib/daily';
import { compareArchitects, type Comparison } from '@/lib/axes';
import { cluesAt } from '@/lib/clues';
import {
  clearState, loadState, saveState, loadStats, saveStats, defaultStats, nextStats, type Stats,
} from '@/lib/storage';
import { t, type Locale } from '@/lib/i18n';
import { theme } from '@/lib/theme';
import { imageCredit } from '@/lib/facts';
import type { Building } from '@/types/building';
import type { Architect } from '@/types/architect';
import { GalleryFrame } from '@/components/ui/GalleryFrame';
import { CropStage } from './CropStage';
import { ClueStrip } from './ClueStrip';
import { GuessField } from './GuessField';
import { GuessRow } from './GuessRow';
import { Reveal } from '@/components/reveal/Reveal';

// The crop stage's real-world width/height ratio (design spec §3 — unchanged
// from Task 11). Threaded explicitly into both `<GalleryFrame />` (its mat
// window) and `<CropStage />` (its own crop math) so the two agree even if
// either component's own default ever diverges from the other's.
const STAGE_ASPECT = 16 / 9;

const TOTAL_GUESSES = 6;

export type GameBoardProps = {
  /** 'daily' (default) selects from the v2 featured-roster pool
   * (`featuredBuildings()` — design spec §2: "the whole featured set IS
   * the canon now") via `dailyIndex`; 'unlimited' draws from that same
   * featured pool and — per design spec §4.5 — never reads or writes daily
   * stats/streak/localStorage. */
  mode?: 'daily' | 'unlimited';
  /**
   * Overrides the target building instead of deriving one from `mode`.
   * Exists for tests (a fixed fixture, independent of the live pool) and
   * for embedding a specific building without wiring a whole route.
   */
  building?: Building;
  locale?: Locale;
  unlimitedHref?: string;
};

type GuessEntry = { architect: Architect; comparison: Comparison };

function pickDailyBuilding(): Building {
  const pool = featuredBuildings();
  const idx = dailyIndex(new Date(), pool.length);
  return pool[idx];
}

function pickUnlimitedBuilding(excludeId?: string): Building {
  const pool = featuredBuildings();
  const candidates = excludeId ? pool.filter((building) => building.id !== excludeId) : pool;
  const choices = candidates.length > 0 ? candidates : pool;
  return choices[Math.floor(Math.random() * choices.length)];
}

/**
 * Orchestrates one round: picks the target building, renders the crop and
 * guess field, wires each guess through `compareArchitects`, persists daily
 * progress/stats through `storage.ts`, and resolves into `<Reveal />` on
 * win or loss.
 */
export function GameBoard({ mode = 'daily', building, locale = 'en', unlimitedHref = '/?mode=unlimited&lang=en' }: GameBoardProps) {
  // Neither the daily nor the unlimited target can be resolved during SSR.
  // Unlimited mode has no deterministic index at all (§4.5 draws from the
  // whole pool via a bare `Math.random()`, not a date-seeded slot). Daily
  // mode DOES have a deterministic index (`dailyIndex` in src/lib/daily.ts)
  // — but it's a function of `new Date()`, read in THIS RUNTIME's own local
  // timezone. `pickDailyBuilding()` used to be called directly from
  // `useMemo` during render, which runs once on the server (the server's
  // timezone) and again on the client during hydration (the browser's
  // timezone) — for any player whose timezone differs from the server's,
  // there is a daily window (the size of the offset) where those two
  // computations disagree, corrupting hydration and/or silently showing the
  // wrong day's puzzle. So, like unlimited mode, the daily target is now
  // resolved exactly once, client-side only, in a `useEffect` after mount:
  // the render that happens before that effect fires returns `null` (see
  // the early return below), which matches between the server's render and
  // the client's pre-effect render, so hydration never disagrees.
  const [dailyBuilding, setDailyBuilding] = useState<Building | null>(null);
  const [unlimitedBuilding, setUnlimitedBuilding] = useState<Building | null>(null);

  /* eslint-disable react-hooks/set-state-in-effect -- reading Date()/
   * Math.random() during render (rather than after mount) would produce a
   * different pick on the server than on the client and hydration would
   * fail. This is the one-time "read an external, non-React source of
   * truth on mount" case the rule's own description carves out, not an
   * accidental derived-state effect. */
  useEffect(() => {
    if (building || mode !== 'daily') return;
    setDailyBuilding(pickDailyBuilding());
  }, [building, mode]);

  useEffect(() => {
    if (building || mode !== 'unlimited') return;
    setUnlimitedBuilding(pickUnlimitedBuilding());
  }, [building, mode]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const target = useMemo<Building | null>(() => {
    if (building) return building;
    if (mode === 'daily') return dailyBuilding;
    return unlimitedBuilding;
  }, [building, mode, dailyBuilding, unlimitedBuilding]);

  const targetArchitect = useMemo(
    () => (target ? architectById(target.architectId) : null),
    [target],
  );

  const [guesses, setGuesses] = useState<GuessEntry[]>([]);
  const [solved, setSolved] = useState(false);
  const [finished, setFinished] = useState(false);
  const [stats, setStats] = useState<Stats>(defaultStats());

  // Loads the PERSISTENT stats record exactly once (codereview finding #1:
  // stats used to live embedded in the day-keyed GameState below, so they
  // were rebuilt from `defaultStats()` every day `loadState()` returned null
  // for anything but today — played could never exceed 1, streak could
  // never reach 2). Independent of the round-restore effect below: unlike a
  // round, stats don't depend on `target`/`targetArchitect` resolving first,
  // and unlimited mode never touches them at all (see the `mode === 'daily'`
  // guard in handleGuess), so this simply does nothing there.
  const statsLoadedRef = useRef(false);
  /* eslint-disable react-hooks/set-state-in-effect -- localStorage is an
   * external, non-React store read once after mount; see the restore effect
   * below for the same justification. */
  useEffect(() => {
    if (statsLoadedRef.current) return;
    if (mode !== 'daily') return;
    statsLoadedRef.current = true;
    setStats(loadStats());
  }, [mode]);
  /* eslint-enable react-hooks/set-state-in-effect */

  // Restores an in-progress daily round exactly once. Guarded with a ref
  // (rather than an empty dependency array) so the effect still declares
  // every value it reads, without re-running when they happen to change.
  // The ref is only latched once `target`/`targetArchitect` are actually
  // available: daily mode's target now resolves asynchronously (see the
  // `dailyBuilding` effect above), so this effect can legitimately run once
  // with `target` still null before the daily pick lands — latching
  // `restoredRef.current` on that first, premature run would permanently
  // skip the real restore once the target shows up on the next render.
  const restoredRef = useRef(false);
  /* eslint-disable react-hooks/set-state-in-effect -- localStorage is an
   * external, non-React store read once after mount (never during SSR,
   * where it doesn't exist); syncing React state from it here is the
   * documented escape hatch, not an accidental derived-state effect. */
  useEffect(() => {
    if (restoredRef.current) return;
    if (mode !== 'daily' || !target || !targetArchitect) return;
    restoredRef.current = true;

    const saved = loadState();
    if (!saved) return;
    // A save recorded against a different building (a fixed `building`
    // override differing from whatever was last played, or today's real
    // daily building differing from an override) must never restore —
    // `puzzleNumber` alone can't distinguish those, since an override
    // building shares today's puzzle number with the real daily building.
    if (saved.buildingId !== target.id) return;

    // `saved.guesses` ids are only ever validated as an array of strings
    // (`isGameState` in storage.ts) — never that each one still resolves to
    // a CURRENT architect. If an architect id is ever renamed/removed in a
    // later curation pass while an old same-day save is still sitting in a
    // returning player's localStorage, `architectById` throws
    // `ArchitectNotFoundError`. storage.ts documents a "never crash the
    // game" guarantee for exactly this kind of stale/corrupt save, so a
    // failure here must degrade the same way `loadState()` returning
    // something unusable already does: drop the save and start fresh,
    // rather than let the throw escape the effect and crash the page.
    let restored: GuessEntry[];
    try {
      restored = saved.guesses.map((id) => {
        const architect = architectById(id);
        return { architect, comparison: compareArchitects(architect, targetArchitect) };
      });
    } catch {
      clearState();
      return;
    }
    // Stats are restored separately (see the `statsLoadedRef` effect above)
    // — `saved` (the daily round) no longer carries an embedded `stats`
    // field at all (codereview finding #1).
    setGuesses(restored);
    setSolved(saved.solved);
    setFinished(saved.finished);
  }, [mode, target, targetArchitect]);
  /* eslint-enable react-hooks/set-state-in-effect */

  if (!target || !targetArchitect) {
    // Still picking the target client-side (daily and unlimited modes
    // both resolve after mount — see the two effects above); the `building`
    // override path never hits this branch.
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
      const pNum = puzzleNumber(new Date());
      saveState({
        puzzleNumber: pNum,
        buildingId: target.id,
        guesses: nextGuesses.map((g) => g.architect.id),
        solved: isSolved,
        finished: isFinished,
      });
      // Stats are a separate, persistent record (codereview finding #1) —
      // only updated (and only written to storage) once the round actually
      // finishes, never on every intermediate guess.
      if (isFinished) {
        const updatedStats = nextStats(stats, isSolved, nextGuesses.length, pNum);
        setStats(updatedStats);
        saveStats(updatedStats);
      }
    }
  }

  function handleUnlimitedReplay() {
    if (mode !== 'unlimited') return;
    setGuesses([]);
    setSolved(false);
    setFinished(false);
    setUnlimitedBuilding(pickUnlimitedBuilding(target?.id));
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
        unlimitedHref={unlimitedHref}
        onPlayAgain={mode === 'unlimited' ? handleUnlimitedReplay : undefined}
        // Unlimited mode never tracks daily stats (see the `mode === 'daily'`
        // guard in handleGuess above) — `stats` would just be the unchanging
        // all-zero `defaultStats()` there, which would render a misleading
        // "Played: 0 / Streak: 0" block right after a round was just played.
        // Reveal's stats block and share-text streak line both key off this
        // prop being present at all, so unlimited mode omits it outright.
        stats={mode === 'daily' ? stats : undefined}
      />
    );
  }

  const currentGuessNumber = Math.min(guesses.length + 1, TOTAL_GUESSES);

  // Every guess still in `guesses` while the round is in progress is a
  // WRONG one (a correct guess sets `finished` and the branch above already
  // returns `<Reveal />` before this point) — so the miss count the clue
  // ladder keys off is exactly `guesses.length`, with no separate counter
  // to keep in sync. Sibling candidates are drawn from the FULL archive
  // (`buildingsByArchitect`, not the small featured-only pool) so a
  // featured architect who currently holds only their target building in
  // the featured set can still surface a real "also designed" work.
  const clues = cluesAt(target, targetArchitect, buildingsByArchitect(targetArchitect.id), guesses.length);

  return (
    <div
      data-testid="game-board"
      className="flex flex-1 flex-col gap-6 p-4 sm:p-6 lg:grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-start lg:gap-10 lg:p-10"
    >
      <GalleryFrame
        aspectRatio={STAGE_ASPECT}
        caption={imageCredit(target.image, locale)}
        className="lg:sticky lg:top-6"
      >
        <CropStage
          imageSrc={`/buildings/${target.id}.avif`}
          // codereview finding #2: while the round is unresolved, the alt
          // text must NOT name the real building (a screen-reader player
          // would hear the answer from guess 1) — a neutral, translated
          // placeholder stands in until the round resolves, where Reveal.tsx
          // already uses the real name correctly. The slug-bearing image URL
          // above remains a lesser, accepted leak surface (the archive
          // itself is public, so the id isn't secret — just not read aloud).
          imageAlt={t(locale, 'mysteryBuildingAlt')}
          imageWidth={target.image.width}
          imageHeight={target.image.height}
          detailRect={target.detailRect}
          guess={currentGuessNumber}
          totalGuesses={TOTAL_GUESSES}
          stageAspect={STAGE_ASPECT}
        />
      </GalleryFrame>

      <div className="flex flex-col gap-5">
        <p
          className="text-xs uppercase tracking-[0.2em] text-ink/70"
          style={{ fontFamily: theme.type.ui }}
        >
          {t(locale, 'guessCounter', { n: currentGuessNumber, total: TOTAL_GUESSES })}
        </p>
        <ClueStrip locale={locale} clues={clues} buildingId={target.id} />
        <GuessField
          locale={locale}
          onGuess={handleGuess}
          guessedIds={new Set(guesses.map((guess) => guess.architect.id))}
          disabled={finished}
        />
        <div className="flex flex-col">
          {guesses.map((g, i) => (
            <GuessRow key={`${g.architect.id}-${i}`} guess={g.architect} comparison={g.comparison} locale={locale} />
          ))}
        </div>
      </div>
    </div>
  );
}
