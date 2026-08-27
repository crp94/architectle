import { test, expect, type Page } from '@playwright/test';

// The e2e suite runs against a real daily building whose answer changes
// every day (src/lib/daily.ts's date-seeded index), so a scripted
// win/loss flow can't guess the real target deterministically. Instead we
// use the `?e2eBuilding=` override page.tsx reads only when
// `E2E_TEST_MODE=1` (set by playwright.config.ts's webServer) — never in
// production — pinned to the same Villa La Rotonda / Andrea Palladio pair
// e2e/archive.spec.ts already relies on as a fixed, known-good pool entry.
const BUILDING = 'villa-la-rotonda';
const CORRECT = 'Andrea Palladio';
// A roster architect guaranteed not to be Palladio, so wrong guesses stay
// wrong regardless of how the curated pool grows around this fixture.
const WRONG = 'Frank Lloyd Wright';
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

    for (let i = 0; i < 6; i += 1) {
      await submitGuess(page, WRONG);
    }

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
});
