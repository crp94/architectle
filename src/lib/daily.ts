export const EPOCH = Date.UTC(2026, 8, 1); // 2026-09-01, launch day
const DAY_MS = 86_400_000;

// One-day editorial selections use the player's local calendar date. If an
// entry is no longer in the featured pool, the game safely falls back to the
// normal deterministic rotation.
export const DAILY_BUILDING_OVERRIDES: Readonly<Record<string, string>> = {
  '2026-08-30': 'the-shard',
};

export function localDateKey(now: Date): string {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function dailyBuildingIdOverride(now: Date): string | undefined {
  return DAILY_BUILDING_OVERRIDES[localDateKey(now)];
}

export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffledCycle(n: number, cycleIndex: number): number[] {
  const rng = mulberry32(0x9e3779b9 ^ (cycleIndex * 2654435761));
  const a = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Uses the LOCAL calendar date, normalised through Date.UTC, so the puzzle turns
// over at the player's midnight and is immune to DST shifts.
export function localDayIndex(now: Date): number {
  const utcOfLocalDate = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.floor((utcOfLocalDate - EPOCH) / DAY_MS);
}

export function puzzleNumber(now: Date): number {
  return localDayIndex(now) + 1;
}

/**
 * `puzzleNumber` reads negative/zero for any clock before `EPOCH` (a
 * preview deploy, a pre-launch build). That's real and fine for
 * `puzzleNumber` itself (used as a storage key and to compute `dailyIndex`),
 * but every player-FACING surface that prints the number — the home page's
 * `<meta description>` (page.tsx) and the reveal's share/preview text
 * (Reveal.tsx) — must clamp it to 1 so it never reads as a visible bug
 * instead of a freshness signal. Defined once, here, so both call sites
 * share the same clamp instead of each re-deriving it (and risking drift).
 */
export function displayPuzzleNumber(now: Date): number {
  return Math.max(1, puzzleNumber(now));
}

export function dailyIndex(now: Date, poolSize: number): number {
  if (poolSize <= 0) throw new Error('poolSize must be positive');
  const d = localDayIndex(now);
  const cycle = Math.floor(d / poolSize);
  const pos = ((d % poolSize) + poolSize) % poolSize;
  return shuffledCycle(poolSize, cycle)[pos];
}
