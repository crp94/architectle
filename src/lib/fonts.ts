import { Fraunces, Inter } from 'next/font/google';

/**
 * Self-hosted, open-licence type for the v2 museum/gallery re-skin (design
 * spec §5): a high-contrast serif display face (Fraunces) and a quiet
 * grotesque for UI/reading copy (Inter). Both are SIL Open Font
 * Licence — free to bundle and redistribute.
 *
 * `next/font/google` downloads the font files at BUILD time and serves them
 * as static assets from this app's own origin — see
 * node_modules/next/dist/docs/01-app/03-api-reference/02-components/font.md:
 * "CSS and font files are downloaded at build time and self-hosted with the
 * rest of your static assets. No requests are sent to Google by the
 * browser." Verified in this worktree with `next build`: the emitted
 * `.next/static/media/*.woff2` files are the actual font binaries, and
 * nothing in the built output or runtime network traffic references
 * fonts.googleapis.com or fonts.gstatic.com — see the T2b report
 * (.superpowers/sdd/2026-08-30-architectle-v2/t2b-report.md) for the exact
 * check performed.
 *
 * Both are declared as variable fonts (the default weight axis covers the
 * whole family), so no `weight` option is needed. `display: 'swap'` avoids
 * a flash of invisible text while the self-hosted file loads.
 */
export const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ui',
});
