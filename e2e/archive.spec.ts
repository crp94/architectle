import { test, expect } from '@playwright/test';

// Confirms the design spec §8 cross-link chain actually works when clicked,
// not just when statically generated: /buildings -> a building -> its
// architect -> one of the architect's movements. Villa La Rotonda /
// Andrea Palladio / Renaissance is a fixed, known-good chain in the
// curated pool (Palladio's primary movement is 'renaissance'), so the
// walk is deterministic regardless of how the pool happens to be sorted.
//
// Every stop asserts a headline, a provenance block, and — in the same
// string — a licensed image credit (photographer + licence): see
// src/components/archive/Provenance.tsx, which folds both into one line.

test.describe('archive navigation', () => {
  test('walks building -> architect -> movement with headline, provenance and image credit at each stop', async ({ page }) => {
    await page.goto('/buildings?lang=en');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    const buildingLink = page.locator('a[href="/building/villa-la-rotonda?lang=en"]').first();
    await expect(buildingLink).toBeVisible();
    await buildingLink.click();

    await expect(page).toHaveURL(/\/building\/villa-la-rotonda\?lang=en$/);
    const buildingHeadline = page.getByTestId('archive-headline');
    await expect(buildingHeadline).toBeVisible();
    await expect(buildingHeadline).toContainText('Rotonda');

    const buildingProvenance = page.getByTestId('archive-provenance').first();
    await expect(buildingProvenance).toBeVisible();
    await expect(buildingProvenance).toContainText('Photo:');
    await expect(buildingProvenance).toContainText('Licence:');

    const architectLink = page.getByTestId('archive-architect-link');
    await expect(architectLink).toBeVisible();
    await architectLink.click();

    await expect(page).toHaveURL(/\/architect\/andrea-palladio\?lang=en$/);
    const architectHeadline = page.getByTestId('archive-headline');
    await expect(architectHeadline).toBeVisible();
    await expect(architectHeadline).toContainText('Palladio');

    // The architect page has no photo of its own — its licensed image
    // credit comes from a building card in "works in the pool".
    const architectProvenance = page.getByTestId('archive-provenance').first();
    await expect(architectProvenance).toBeVisible();
    await expect(architectProvenance).toContainText('Photo:');
    await expect(architectProvenance).toContainText('Licence:');

    const movementLink = page.locator('a[href^="/movement/"][href$="?lang=en"]').first();
    await expect(movementLink).toBeVisible();
    await movementLink.click();

    await expect(page).toHaveURL(/\/movement\/.*\?lang=en$/);
    const movementHeadline = page.getByTestId('archive-headline');
    await expect(movementHeadline).toBeVisible();

    const movementProvenance = page.getByTestId('archive-provenance').first();
    await expect(movementProvenance).toBeVisible();
    await expect(movementProvenance).toContainText('Photo:');
    await expect(movementProvenance).toContainText('Licence:');
  });
});
