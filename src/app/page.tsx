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

// `og:locale`/`og:locale:alternate` tags (spec item 5) — the underscore
// region form Open Graph itself expects (e.g. `en_US`, not the bare BCP-47
// `en` LocaleSwitcher.tsx's `?lang=` param carries). Only the home page has
// a real per-request locale to report at all (every other route hardcodes
// `LOCALE = 'en'` — see about/page.tsx's own comment on that pre-existing
// convention), so this map lives here rather than in the shared i18n table.
const OG_LOCALE: Record<Locale, string> = { en: "en_US", es: "es_ES", it: "it_IT" };

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
    openGraph: {
      description,
      url: canonical,
      type: "website",
      siteName: "Architectle",
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
    },
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
      {/* Museum/gallery editorial re-skin (design spec §5). v1's header was
          a filled `bg-accent` banner with `text-ink` set directly on top of
          it — the t2b design-system report flags that pairing as a genuine
          contrast regression once `accent` became a deep oxblood (~1.7:1,
          nowhere near AA), not just a style mismatch. This header now stays
          on the plain paper ground with a quiet hairline close, the same
          idiom `<SectionRule />` uses elsewhere — `accent` never appears as
          a fill behind `ink` text anywhere in this file. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />
      <div
        className="flex flex-col items-center gap-2 px-8 py-6"
        style={{
          borderBottomWidth: theme.rule.hairline,
          borderBottomColor: theme.color.frameLine,
          borderBottomStyle: "solid",
          fontFamily: theme.type.display,
        }}
      >
        {/* The real owner wordmark (public/brand/architectle-logo.svg)
            replaces the styled-text title: its ink/accent fills are the
            exact hex this palette's `theme.color.ink`/`accent` already use
            (#1b1712 / #6e2a1f), so it reads as native to the gallery
            register rather than a foreign brand mark dropped on top. `h1`
            stays for semantics; the localized title becomes the image's
            `alt` (its accessible name to a screen reader/crawler) since the
            logo asset itself can't localize. */}
        <h1 className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element -- a
              static local brand SVG with no responsive/loader benefit from
              next/image; see CropStage.tsx/ClueStrip.tsx for the same
              already-established exception. */}
          <img
            src="/brand/architectle-logo.svg"
            alt={t(locale, "appTitle")}
            height={44}
            style={{ height: 44, width: "auto" }}
          />
        </h1>
        <p
          className="text-sm normal-case tracking-normal text-ink/70"
          style={{ fontFamily: theme.type.ui }}
        >
          {t(locale, "appTagline")}
        </p>
        <LocaleSwitcher locale={locale} searchParams={params} />
      </div>
      <GameBoard mode="daily" locale={locale} building={building} />
    </main>
  );
}
