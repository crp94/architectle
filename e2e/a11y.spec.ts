import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// Runs against the real production routes — no `?e2eBuilding=` override —
// so this suite reflects exactly what a player sees, including whatever
// building the daily rotation happens to serve today.
const PAGES = [
  { name: 'game (home)', path: '/' },
  { name: 'building archive', path: '/building/villa-la-rotonda' },
  { name: 'architect archive', path: '/architect/andrea-palladio' },
];

for (const { name, path } of PAGES) {
  test(`${name} has zero wcag2a/wcag2aa violations`, async ({ page }) => {
    await page.goto(path);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    // Any violation fails the test with the full axe-core report attached
    // to the assertion message — including which rule, which node, and
    // why — rather than a bare "expected [] received [...]".
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
  });
}
