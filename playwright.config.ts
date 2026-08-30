import { defineConfig, devices } from '@playwright/test';

const PORT = 3100;
const BASE_URL = `http://localhost:${PORT}`;

/**
 * Playwright config for `e2e/*.spec.ts`. Builds and serves the production
 * bundle (`next build` then `next start`), not the dev server: the defects
 * this suite exists to catch — static generation gaps, missing metadata,
 * image optimisation — only appear after building (task-15-brief.md).
 *
 * Runs on a dedicated port, out of the way of a dev server a developer
 * already has running on 3000, and reuses that server locally so repeated
 * runs don't pay the build+start cost twice; CI always starts fresh.
 * `E2E_TEST_MODE=1` unlocks the `?e2eBuilding=` override `src/app/page.tsx`
 * reads (see its comment) so the win/loss flows in e2e/game.spec.ts can
 * pin a known building instead of guessing the real daily answer.
 */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'list',
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  webServer: {
    command: `npm run build && npm run start -- -p ${PORT}`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    env: { E2E_TEST_MODE: '1' },
  },
});
