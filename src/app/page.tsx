import type { Metadata } from "next";
import { theme } from "@/lib/theme";
import { t, LOCALES, type Locale } from "@/lib/i18n";
import { GameBoard } from "@/components/game/GameBoard";
import { LocaleSwitcher } from "@/components/game/LocaleSwitcher";
import { buildingBySlug } from "@/lib/pool";
import { SITE_URL } from "@/lib/site";
import { puzzleNumber } from "@/lib/daily";
import { websiteJsonLd } from "@/lib/jsonld";

// The index signature (beyond the two named fields this page itself reads)
// keeps this type assignable to LocaleSwitcher's `searchParams` prop, which
// must preserve whatever OTHER params the current URL happens to carry
// (e.g. `?e2eBuilding=`) rather than knowing their names up front.
type SearchParams = { lang?: string; e2eBuilding?: string; [key: string]: string | string[] | undefined };

function resolveLocale(raw: string | undefined): Locale {
  return (LOCALES as readonly string[]).includes(raw ?? "") ? (raw as Locale) : "en";
}

/**
 * Home page metadata (design spec §7): a daily freshness signal — the
 * puzzle number and date — in the description, with zero hint of the
 * day's actual building or architect. `puzzleNumber` is purely
 * date-derived (src/lib/daily.ts) so it's safe to compute here, server
 * side, unlike the daily BUILDING, which this v2 game resolves
 * client-side specifically to avoid ever putting the answer in
 * server-rendered HTML or a response any crawler could read before the
 * round starts.
 *
 * `alternates.languages` carries the three `?lang=` query-param variants
 * the real, reachable locale switch (`LocaleSwitcher.tsx`) produces — the
 * only locale-routed surface in the app today — plus an `x-default`
 * pointing at the bare English root.
 */
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}): Promise<Metadata> {
  const params = await searchParams;
  const locale = resolveLocale(params.lang);
  const now = new Date();
  // `puzzleNumber` runs negative/zero before `EPOCH` (src/lib/daily.ts) —
  // real for any environment (a preview deploy, a pre-launch build) whose
  // clock reads before launch day. Clamped to 1 so a description meant to
  // read as a freshness SIGNAL never reads as a visible bug instead.
  const n = Math.max(1, puzzleNumber(now));
  const description = t(locale, "metaHomeDescription", {
    n,
    date: new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(now),
  });
  const canonical = locale === "en" ? `${SITE_URL}/` : `${SITE_URL}/?lang=${locale}`;

  return {
    description,
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/`,
        es: `${SITE_URL}/?lang=es`,
        it: `${SITE_URL}/?lang=it`,
        "x-default": `${SITE_URL}/`,
      },
    },
    openGraph: { description, url: canonical, type: "website", siteName: "Architectle" },
    twitter: { card: "summary_large_image", description },
  };
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />
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
        <LocaleSwitcher locale={locale} searchParams={params} />
      </div>
      <GameBoard mode="daily" locale={locale} building={building} />
    </main>
  );
}
