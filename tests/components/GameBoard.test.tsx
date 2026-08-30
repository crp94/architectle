import {
  describe, it, expect, beforeEach, afterEach, vi,
} from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import type { Building } from '@/types/building';
import type { Architect } from '@/types/architect';
import { puzzleNumber } from '@/lib/daily';

function ls(en: string, es: string, it: string) {
  return { en, es, it };
}

const targetArchitect: Architect = {
  id: 'target-architect',
  wikidataId: 'Q1',
  name: 'Target Architect',
  alternativeNames: ['Targo'],
  gender: 'woman',
  born: 1920,
  died: 1990,
  floruit: { start: 1950, end: 1980, override: false },
  movements: [{ id: 'brutalism', primary: true }],
  workRegions: ['Western Europe'],
  workCentroid: { lat: 48, lon: 2 },
  primaryTypology: 'civic',
  signatureMaterial: 'concrete',
  portrait: ls('Target Architect portrait.', 'Retrato.', 'Ritratto.'),
  awards: [],
  tier: 'canon',
  context: null,
  sources: [],
};

const wrongArchitect: Architect = {
  id: 'wrong-architect',
  wikidataId: 'Q2',
  name: 'Wrong Architect',
  alternativeNames: [],
  gender: 'man',
  born: 1700,
  died: 1760,
  floruit: { start: 1720, end: 1750, override: false },
  movements: 'unaffiliated',
  workRegions: ['Eastern Asia'],
  workCentroid: { lat: 35, lon: 139 },
  primaryTypology: 'tower',
  signatureMaterial: 'timber',
  portrait: ls('Wrong Architect portrait.', 'Retrato.', 'Ritratto.'),
  awards: [],
  tier: 'canon',
  context: null,
  sources: [],
};

const FIXTURE_ARCHITECTS: Architect[] = [targetArchitect, wrongArchitect];

const targetBuilding: Building = {
  id: 'target-building',
  wikidataId: 'Q100',
  name: ls('Target Hall', 'Target Hall (es)', 'Target Hall (it)'),
  architectId: 'target-architect',
  location: { city: 'Testville', countryCode: 'XX', lat: 0, lon: 0 },
  inception: 1960,
  completed: 1965,
  demolished: null,
  typology: 'civic',
  materials: ['concrete'],
  structure: ls('A test structure.', 'Una estructura de prueba.', 'Una struttura di prova.'),
  program: ls('A test programme.', 'Un programa de prueba.', 'Un programma di prova.'),
  heritage: null,
  currentUse: null,
  detailRect: { x: 0.35, y: 0.35, w: 0.15, h: 0.15 },
  image: {
    commonsFile: 'File:Target.jpg',
    photographer: 'Test Photographer',
    license: 'CC0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Target.jpg',
    width: 1600,
    height: 1000,
  },
  dossier: ls('A test dossier.', 'Una ficha de prueba.', 'Una scheda di prova.'),
  context: null,
  sources: [{ kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q100', title: 'Target Hall', license: null }],
  tier: 'canon',
};

vi.mock('@/lib/pool', () => ({
  BUILDINGS: [targetBuilding],
  ARCHITECTS: FIXTURE_ARCHITECTS,
  architectById: (id: string) => {
    const found = FIXTURE_ARCHITECTS.find((a) => a.id === id);
    if (!found) throw new Error(`No fixture architect "${id}"`);
    return found;
  },
  buildingBySlug: (slug: string) => (slug === targetBuilding.id ? targetBuilding : undefined),
  featuredBuildings: () => [targetBuilding],
  roster: () => FIXTURE_ARCHITECTS,
  featuredRoster: () => FIXTURE_ARCHITECTS,
}));

const { GameBoard } = await import('@/components/game/GameBoard');

function submit(input: HTMLElement, value: string) {
  fireEvent.change(input, { target: { value } });
  fireEvent.submit(input.closest('form')!);
}

describe('GameBoard', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
    localStorage.clear();
  });

  it('renders with a fixture building', () => {
    render(<GameBoard building={targetBuilding} mode="daily" locale="en" />);
    expect(screen.getByTestId('game-board')).toBeTruthy();
    expect(screen.getByTestId('crop-stage')).toBeTruthy();
    expect(screen.getByText('Guess 1 of 6')).toBeTruthy();
  });

  it('adds a guess row with four chips when a roster name is submitted', () => {
    render(<GameBoard building={targetBuilding} mode="daily" locale="en" />);
    const input = screen.getByLabelText('Name the architect');

    submit(input, 'Wrong Architect');

    const rows = screen.getAllByTestId('guess-row');
    expect(rows).toHaveLength(1);
    expect(rows[0].textContent).toContain('Wrong Architect');
    expect(screen.getByTestId('axis-chip-era')).toBeTruthy();
    expect(screen.getByTestId('axis-chip-movement')).toBeTruthy();
    expect(screen.getByTestId('axis-chip-region')).toBeTruthy();
    expect(screen.getByTestId('axis-chip-typology')).toBeTruthy();
    expect(screen.getByText('Guess 2 of 6')).toBeTruthy();
  });

  it('presents the photograph in a gallery frame with an in-game photographer credit', () => {
    // v2 re-skin (design spec §5): the photographer credit used to be
    // reveal-only; it must now be visible during play, under the frame.
    render(<GameBoard building={targetBuilding} mode="daily" locale="en" />);

    expect(screen.getByTestId('gallery-frame')).toBeTruthy();
    const caption = screen.getByTestId('gallery-frame-caption');
    expect(caption.textContent).toContain('Test Photographer');
    expect(caption.textContent).toContain('CC0');
  });

  it('unlocks one case-file clue per wrong guess', () => {
    render(<GameBoard building={targetBuilding} mode="daily" locale="en" />);
    const input = screen.getByLabelText('Name the architect');

    // No misses yet: no clue strip at all.
    expect(screen.queryByTestId('clue-strip')).toBeNull();

    submit(input, 'Wrong Architect');
    // Miss 1: completion year only. targetBuilding.completed === 1965.
    expect(screen.getByTestId('clue-year').textContent).toContain('1965');
    expect(screen.queryByTestId('clue-country')).toBeNull();

    submit(input, 'Wrong Architect');
    // Miss 2: country joins the year clue. targetBuilding's countryCode is 'XX'.
    expect(screen.getByTestId('clue-year')).toBeTruthy();
    expect(screen.getByTestId('clue-country').textContent).toContain('XX');
    expect(screen.queryByTestId('clue-typology-material')).toBeNull();
  });

  it('rejects an off-roster name without consuming a guess', () => {
    render(<GameBoard building={targetBuilding} mode="daily" locale="en" />);
    const input = screen.getByLabelText('Name the architect');

    submit(input, 'Not A Real Person');

    expect(screen.getByTestId('roster-rejection').textContent).toContain('Not A Real Person');
    expect(screen.queryAllByTestId('guess-row')).toHaveLength(0);
    expect(screen.getByText('Guess 1 of 6')).toBeTruthy();
  });

  it('widens the crop between guess 1 and guess 2', () => {
    render(<GameBoard building={targetBuilding} mode="daily" locale="en" />);
    const input = screen.getByLabelText('Name the architect');

    const before = screen.getByTestId('crop-image').getAttribute('style');

    submit(input, 'Wrong Architect');

    const after = screen.getByTestId('crop-image').getAttribute('style');
    expect(after).not.toEqual(before);

    const parsePct = (style: string | null, prop: string) => {
      const match = new RegExp(`${prop}:\\s*(-?[\\d.]+)%`).exec(style ?? '');
      return match ? parseFloat(match[1]) : NaN;
    };
    // Guess 2's frame has widened toward the full image, so the zoomed-in
    // <img> shrinks back down: its percentage width/height must be smaller
    // than guess 1's tight crop.
    expect(parsePct(after, 'width')).toBeLessThan(parsePct(before, 'width'));
    expect(parsePct(after, 'height')).toBeLessThan(parsePct(before, 'height'));
  });

  it('renders the reveal on a correct guess', () => {
    render(<GameBoard building={targetBuilding} mode="daily" locale="en" />);
    const input = screen.getByLabelText('Name the architect');

    submit(input, 'Target Architect');

    expect(screen.getByTestId('reveal')).toBeTruthy();
    expect(screen.queryByTestId('game-board')).toBeNull();
    expect(screen.getByTestId('reveal-message').textContent).toContain('1 of 6');
  });

  it('renders the loss state with the answer revealed after six wrong guesses', () => {
    render(<GameBoard building={targetBuilding} mode="daily" locale="en" />);
    const input = screen.getByLabelText('Name the architect');

    for (let i = 0; i < 6; i += 1) {
      submit(input, 'Wrong Architect');
    }

    expect(screen.getByTestId('reveal')).toBeTruthy();
    expect(screen.getByTestId('reveal-message').textContent).toContain('Target Architect');
  });

  it('resolves the daily target client-side (no building override) without crashing', async () => {
    // Regression guard: the daily target used to be picked synchronously
    // during render via `pickDailyBuilding()`, which reads `new Date()` in
    // whichever timezone the CURRENT render happens to run in — different
    // between an SSR pass and client hydration for a player whose timezone
    // differs from the server's. It must now resolve after mount, client-
    // side only, exactly like unlimited mode already did.
    render(<GameBoard mode="daily" locale="en" />);
    expect(await screen.findByTestId('game-board')).toBeTruthy();
    expect(screen.getByTestId('crop-stage')).toBeTruthy();
  });

  it('recovers gracefully from a stale save referencing a since-removed architect id', () => {
    // Regression guard: `isGameState` (storage.ts) only checks that
    // `guesses` is an array of strings, never that each id still resolves
    // to a CURRENT architect. A same-day save left over from before an
    // architect id was renamed/removed must degrade to "start fresh," not
    // crash the restore effect with an uncaught ArchitectNotFoundError.
    localStorage.setItem('architectle:v1', JSON.stringify({
      puzzleNumber: puzzleNumber(new Date()),
      buildingId: targetBuilding.id,
      guesses: ['ghost-architect-id'],
      solved: false,
      finished: false,
      stats: {
        played: 3, wins: 2, streak: 1, maxStreak: 2, distribution: [0, 1, 1, 0, 0, 0],
      },
    }));

    render(<GameBoard building={targetBuilding} mode="daily" locale="en" />);

    expect(screen.getByTestId('game-board')).toBeTruthy();
    expect(screen.queryAllByTestId('guess-row')).toHaveLength(0);
    expect(screen.getByText('Guess 1 of 6')).toBeTruthy();
    // The stale save itself must be cleared, not just ignored in memory —
    // otherwise the very next render would try (and fail) to restore it
    // again.
    expect(localStorage.getItem('architectle:v1')).toBeNull();
  });

  it('does not name the target building in the crop-stage alt text during an active round (codereview finding #2)', () => {
    render(<GameBoard building={targetBuilding} mode="daily" locale="en" />);
    const alt = screen.getByTestId('crop-image').getAttribute('alt') ?? '';
    expect(alt).not.toContain(targetBuilding.name.en);
    expect(alt.length).toBeGreaterThan(0);
  });

  it('does not name the target building in the second-photo clue alt text either', () => {
    render(<GameBoard building={targetBuilding} mode="daily" locale="en" />);
    const input = screen.getByLabelText('Name the architect');
    // Four misses unlocks the second-photo clue (see cluesAt's schedule).
    for (let i = 0; i < 4; i += 1) submit(input, 'Wrong Architect');
    const img = screen.queryByTestId('clue-second-photo-image');
    if (img) {
      expect(img.getAttribute('alt') ?? '').not.toContain(targetBuilding.name.en);
    }
  });

  it("persists a win to the PERSISTENT stats record, independent of the day-keyed round save (codereview finding #1)", () => {
    render(<GameBoard building={targetBuilding} mode="daily" locale="en" />);
    const input = screen.getByLabelText('Name the architect');

    submit(input, 'Target Architect');

    const raw = localStorage.getItem('architectle:v1:stats');
    expect(raw).not.toBeNull();
    const stats = JSON.parse(raw!);
    expect(stats).toMatchObject({ played: 1, wins: 1, streak: 1, maxStreak: 1 });
    expect(stats.distribution[0]).toBe(1);

    // The day-keyed round save itself no longer embeds a `stats` field.
    const round = JSON.parse(localStorage.getItem('architectle:v1')!);
    expect(round.stats).toBeUndefined();
  });

  it('never writes to the persistent stats record in unlimited mode', () => {
    render(<GameBoard building={targetBuilding} mode="unlimited" locale="en" />);
    const input = screen.getByLabelText('Name the architect');

    submit(input, 'Target Architect');

    expect(localStorage.getItem('architectle:v1:stats')).toBeNull();
    expect(localStorage.getItem('architectle:v1')).toBeNull();
  });

  it('carries stats forward from a prior win, correctly continuing the streak (finding #1)', () => {
    localStorage.setItem('architectle:v1:stats', JSON.stringify({
      played: 2,
      wins: 2,
      streak: 2,
      maxStreak: 2,
      distribution: [0, 1, 1, 0, 0, 0],
      // "Yesterday" relative to today's real puzzleNumber, so today's win
      // continues the streak to 3 rather than restarting it at 1.
      lastWinPuzzle: puzzleNumber(new Date()) - 1,
    }));

    render(<GameBoard building={targetBuilding} mode="daily" locale="en" />);
    const input = screen.getByLabelText('Name the architect');
    submit(input, 'Target Architect');

    const stats = JSON.parse(localStorage.getItem('architectle:v1:stats')!);
    expect(stats.streak).toBe(3);
    expect(stats.maxStreak).toBe(3);
    expect(stats.played).toBe(3);
  });
});
