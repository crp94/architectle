import { theme } from "@/lib/theme";
import { t, LOCALES, type Locale } from "@/lib/i18n";
import { GameBoard } from "@/components/game/GameBoard";
import { LocaleSwitcher } from "@/components/game/LocaleSwitcher";
import { buildingBySlug } from "@/lib/pool";

type SearchParams = { lang?: string; e2eBuilding?: string };

function resolveLocale(raw: string | undefined): Locale {
  return (LOCALES as readonly string[]).includes(raw ?? "") ? (raw as Locale) : "en";
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const locale = resolveLocale(params.lang);

  // e2e-only escape hatch: pins a known building/architect pair so the
  // e2e game suite (e2e/game.spec.ts) can script a deterministic win/loss
  // sequence instead of guessing the real, date-seeded daily answer.
  // `E2E_TEST_MODE` is only ever set by playwright.config.ts's webServer
  // — never in production — so the real daily build never exposes this
  // override or hints the answer before resolution (spec §8, Task 13).
  const building = process.env.E2E_TEST_MODE === "1" && params.e2eBuilding
    ? buildingBySlug(params.e2eBuilding)
    : undefined;

  return (
    <main className="flex flex-1 flex-col bg-paper">
      <div
        className="flex flex-col items-center gap-2 border-ink bg-accent px-8 py-6"
        style={{
          borderBottomWidth: theme.rule.thick,
          borderStyle: "solid",
          fontFamily: theme.type.display,
        }}
      >
        <h1 className="text-4xl uppercase tracking-tight text-ink">
          {t(locale, "appTitle")}
        </h1>
        <p
          className="text-sm normal-case tracking-normal text-ink"
          style={{ fontFamily: theme.type.body }}
        >
          {t(locale, "appTagline")}
        </p>
        <LocaleSwitcher locale={locale} />
      </div>
      <GameBoard mode="daily" locale={locale} building={building} />
    </main>
  );
}
