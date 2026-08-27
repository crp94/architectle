import { test, expect, type Locator } from '@playwright/test';

// Exercises the real, reachable locale-switching mechanism added for this
// task (src/components/game/LocaleSwitcher.tsx / src/app/page.tsx's
// `?lang=` searchParam) — Task 11 wired every translated string and a
// `locale` prop on `GameBoard`, but nothing in the running app let a
// player actually reach a non-English locale before this. Pinned to the
// same fixed Villa La Rotonda / Andrea Palladio pair as game.spec.ts via
// the `?e2eBuilding=` test-only override, purely so a guess can be
// submitted to render axis chips — the win/loss outcome is irrelevant
// here.
const BUILDING = 'villa-la-rotonda';
const WRONG = 'Frank Lloyd Wright';

type LocaleCode = 'en' | 'es' | 'it';

// Every string below is copied verbatim from src/lib/i18n.ts's STRINGS
// table so a drift in either place fails this suite rather than the two
// silently disagreeing.
const STRINGS: Record<LocaleCode, {
  guessCounter1: string;
  guessSubmit: string;
  guessFieldPlaceholder: string;
  axisEra: string;
  axisMovement: string;
  axisRegion: string;
  axisTypology: string;
}> = {
  en: {
    guessCounter1: 'Guess 1 of 6',
    guessSubmit: 'Guess',
    guessFieldPlaceholder: 'Type an architect’s name…',
    axisEra: 'Era',
    axisMovement: 'Movement',
    axisRegion: 'Region',
    axisTypology: 'Typology + material',
  },
  es: {
    guessCounter1: 'Intento 1 de 6',
    guessSubmit: 'Adivinar',
    guessFieldPlaceholder: 'Escribe el nombre de un arquitecto…',
    axisEra: 'Época',
    axisMovement: 'Movimiento',
    axisRegion: 'Región',
    axisTypology: 'Tipología y material',
  },
  it: {
    guessCounter1: 'Tentativo 1 di 6',
    guessSubmit: 'Indovina',
    guessFieldPlaceholder: 'Scrivi il nome di un architetto…',
    axisEra: 'Epoca',
    axisMovement: 'Movimento',
    axisRegion: 'Regione',
    axisTypology: 'Tipologia e materiale',
  },
};

async function ariaLabel(locator: Locator): Promise<string> {
  return (await locator.getAttribute('aria-label')) ?? '';
}

// `axisTypology` ("Typology + material") contains a literal `+`, which
// would otherwise be read as a regex quantifier once interpolated below.
function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

for (const locale of Object.keys(STRINGS) as LocaleCode[]) {
  test(`renders the game screen in ${locale} via the locale switcher`, async ({ page }) => {
    const strings = STRINGS[locale];

    // Start in English (the default) and switch through the real UI
    // control, rather than navigating straight to `?lang=`, so the
    // switcher itself is under test.
    await page.goto(`/?e2eBuilding=${BUILDING}`);
    await page.getByTestId(`locale-link-${locale}`).click();
    await expect(page).toHaveURL(new RegExp(`lang=${locale}`));

    await expect(page.getByText(strings.guessCounter1, { exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: strings.guessSubmit, exact: true })).toBeVisible();
    await expect(page.locator('#architect-guess')).toHaveAttribute('placeholder', strings.guessFieldPlaceholder);

    // Submit one guess so the four axis chips render, then check each
    // chip's accessible name opens with the locale's translated axis
    // label — the visible chip label itself is only the bucket/result
    // word (e.g. "Far"/"Lejano"), the axis name lives entirely in
    // aria-label (src/components/ui/AxisChip.tsx).
    await page.locator('#architect-guess').fill(WRONG);
    await page.getByRole('button', { name: strings.guessSubmit, exact: true }).click();

    expect(await ariaLabel(page.getByTestId('axis-chip-era'))).toMatch(new RegExp(`^${escapeRegExp(strings.axisEra)}:`));
    expect(await ariaLabel(page.getByTestId('axis-chip-movement'))).toMatch(new RegExp(`^${escapeRegExp(strings.axisMovement)}:`));
    expect(await ariaLabel(page.getByTestId('axis-chip-region'))).toMatch(new RegExp(`^${escapeRegExp(strings.axisRegion)}:`));
    expect(await ariaLabel(page.getByTestId('axis-chip-typology'))).toMatch(new RegExp(`^${escapeRegExp(strings.axisTypology)}:`));

    if (locale !== 'en') {
      // No leftover English chrome: the English guess counter and submit
      // label must not appear anywhere on the game screen once a
      // non-English locale is active.
      await expect(page.getByText('Guess 2 of 6', { exact: true })).toHaveCount(0);
      await expect(page.getByRole('button', { name: 'Guess', exact: true })).toHaveCount(0);
    }
  });
}
