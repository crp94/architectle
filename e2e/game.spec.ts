import { test, expect, type Page } from '@playwright/test';

// The e2e suite runs against a real daily building whose answer changes
// every day (src/lib/daily.ts's date-seeded index), so a scripted
// win/loss flow can't guess the real target deterministically. Instead we
// use the `?e2eBuilding=` override page.tsx reads only when
// `E2E_TEST_MODE=1` (set by playwright.config.ts's webServer) — never in
// production.
//
// v2 refocus (design spec §2): GuessField now validates guesses against
// `featuredRoster()`, not the full-pool `roster()` — see src/lib/pool.ts.
// This fixture WAS pinned to Villa La Rotonda / Andrea Palladio (still used
// by e2e/archive.spec.ts, which reads the untouched full-pool archive and
// needs no change), but Palladio holds only 1 building via architectId in
// the current pool, so he isn't in the seeded FEATURED_ARCHITECT_IDS list
// (src/scripts/curated/featured.ts) yet and a guess of "Andrea Palladio"
// would be rejected as off-roster. Repinned to Therme Vals / Peter Zumthor
// (2 buildings, seeded) — Luis Barragán (3 buildings, also seeded) is a
// distinct, definitely-wrong featured architect for WRONG.
const BUILDING = 'therme-vals';
const CORRECT = 'Peter Zumthor';
// A roster architect guaranteed not to be Zumthor, so wrong guesses stay
// wrong regardless of how the curated pool grows around this fixture.
const WRONG = 'Luis Barragán';
const WRONG_GUESSES = [
  'Luis Barragán', 'Lina Bo Bardi', 'Frank Lloyd Wright', 'Ludwig Mies van der Rohe', 'Philip Johnson', 'Louis Sullivan',
];
const GIBBERISH = 'Zzyzx Notarealperson';

function gameUrl(): string {
  return `/?e2eBuilding=${BUILDING}`;
}

async function submitGuess(page: Page, name: string) {
  await page.locator('#architect-guess').fill(name);
  await page.getByRole('button', { name: 'Guess', exact: true }).click();
}

function parsePct(style: string | null, prop: string): number {
  const match = new RegExp(`${prop}:\\s*(-?[\\d.]+)%`).exec(style ?? '');
  return match ? parseFloat(match[1]) : NaN;
}

test.describe('game flow', () => {
  test('wins after naming the architect, widening the crop and rendering the reveal', async ({ page }) => {
    await page.goto(gameUrl());
    await expect(page.getByTestId('game-board')).toBeVisible();
    await expect(page.getByText('Guess 1 of 6')).toBeVisible();

    const before = await page.getByTestId('crop-image').getAttribute('style');

    await submitGuess(page, WRONG);

    const rows = page.getByTestId('guess-row');
    await expect(rows).toHaveCount(1);
    await expect(rows.first()).toContainText(WRONG);
    await expect(page.getByTestId('axis-chip-era')).toBeVisible();
    await expect(page.getByTestId('axis-chip-movement')).toBeVisible();
    await expect(page.getByTestId('axis-chip-region')).toBeVisible();
    await expect(page.getByTestId('axis-chip-typology')).toBeVisible();
    await expect(page.getByText('Guess 2 of 6')).toBeVisible();

    // Guess 2's frame has widened toward the full image relative to guess
    // 1's tight crop — the same concrete signal Task 11's own
    // GameBoard.test.tsx asserts on (tests/components/GameBoard.test.tsx):
    // the zoomed-in <img>'s percentage width/height shrinks back down.
    const after = await page.getByTestId('crop-image').getAttribute('style');
    expect(after).not.toEqual(before);
    expect(parsePct(after, 'width')).toBeLessThan(parsePct(before, 'width'));
    expect(parsePct(after, 'height')).toBeLessThan(parsePct(before, 'height'));

    await submitGuess(page, CORRECT);

    await expect(page.getByTestId('reveal')).toBeVisible();
    await expect(page.getByTestId('reveal-message')).toContainText('2 of 6');
    await expect(page.getByTestId('game-board')).toHaveCount(0);
  });

  test('loses after six wrong guesses and names the architect in the reveal', async ({ page }) => {
    await page.goto(gameUrl());

    for (const guess of WRONG_GUESSES) await submitGuess(page, guess);

    await expect(page.getByTestId('reveal')).toBeVisible();
    await expect(page.getByTestId('reveal-message')).toContainText(CORRECT);
  });

  test('rejects an off-roster guess without advancing the guess counter', async ({ page }) => {
    await page.goto(gameUrl());

    await submitGuess(page, GIBBERISH);

    await expect(page.getByTestId('roster-rejection')).toContainText(GIBBERISH);
    await expect(page.getByTestId('guess-row')).toHaveCount(0);
    await expect(page.getByText('Guess 1 of 6')).toBeVisible();
  });

  test('persists guesses across a reload mid-round', async ({ page }) => {
    await page.goto(gameUrl());

    await submitGuess(page, WRONG);
    await expect(page.getByTestId('guess-row')).toHaveCount(1);
    await expect(page.getByText('Guess 2 of 6')).toBeVisible();

    await page.reload();

    await expect(page.getByTestId('guess-row')).toHaveCount(1);
    await expect(page.getByTestId('guess-row').first()).toContainText(WRONG);
    await expect(page.getByText('Guess 2 of 6')).toBeVisible();
  });

  test('starts a fresh round when replaying unlimited mode', async ({ page }) => {
    await page.goto(`${gameUrl()}&mode=unlimited`);
    await expect(page.getByText('Unlimited practice', { exact: true })).toBeVisible();
    await expect(page.getByText('Unlimited rounds do not affect daily statistics or streaks.', { exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Daily puzzle', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Play unlimited', exact: true })).toHaveCount(0);
    await submitGuess(page, CORRECT);
    await expect(page.getByTestId('reveal')).toBeVisible();
    await expect(page.getByTestId('reveal-share-preview')).toContainText('Architectle Unlimited');

    await page.getByRole('button', { name: 'Play unlimited', exact: true }).click();
    await expect(page.getByTestId('game-board')).toBeVisible();
    await expect(page.getByText('Guess 1 of 6')).toBeVisible();
    await expect(page.getByTestId('guess-row')).toHaveCount(0);
  });
});
