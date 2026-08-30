import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/lib/site";
import { theme } from "@/lib/theme";
import { fraunces, inter } from "@/lib/fonts";
import { SiteFooter } from "@/components/ui/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    // The bare brand name, used verbatim wherever a route (the home page)
    // sets no `title` of its own. Every other route sets its own bare item
    // title (e.g. "Fallingwater — Frank Lloyd Wright") and lets this
    // `template` append the consistent " | Architectle" suffix — the one
    // place that composition rule lives, per generateMetadata's own
    // documented `title.template` contract.
    default: "Architectle",
    template: "%s | Architectle",
  },
  description: "Guess the architect from a widening crop of a building photo.",
  openGraph: {
    siteName: "Architectle",
    // The site-wide default `og:locale`. Every route below sets its own
    // `openGraph` object (Next replaces rather than merges a child's
    // `openGraph` against the parent's — see this same note at each call
    // site) and repeats `locale` there for the two English-only page kinds:
    // the archive/about pages (hardcoded `LOCALE = 'en'`, a pre-existing,
    // documented convention — see about/page.tsx's own comment) get a bare
    // `'en_US'`; the home page's own `generateMetadata` overrides this with
    // whichever of en/es/it the `?lang=` param resolved to, plus the other
    // two as `alternateLocale`.
    locale: "en_US",
  },
  // `apple-mobile-web-app-title` (spec item 5) — the name iOS shows under a
  // home-screen icon once a player adds this PWA, distinct from the tab
  // <title> (which carries the "| Architectle" suffix on every route).
  appleWebApp: {
    title: "Architectle",
  },
};

// `themeColor` on the `metadata` object is deprecated in favour of
// `viewport` as of Next.js 14 (see generateMetadata's own docs) — this is
// the replacement, driving the browser chrome/address-bar tint from the
// same `theme.color.paper` token every other surface reads, never a
// hardcoded hex.
export const viewport: Viewport = {
  themeColor: theme.color.paper,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`h-full ${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
