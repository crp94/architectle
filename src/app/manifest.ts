import type { MetadataRoute } from 'next';
import { theme } from '@/lib/theme';
import { t } from '@/lib/i18n';

/**
 * Web app manifest (design spec §7: "PWA-lite installability"). Colours
 * come straight from the v2 gallery palette (`theme.ts`) — never a
 * hardcoded hex — and the two large icons are the committed static PNGs
 * (`public/icon-192.png` / `icon-512.png`, rasterized once via sharp from
 * the owner's real `public/brand/architectle-app-icon.svg` — see
 * `src/app/icon.svg` and `apple-icon.png`, the static file-convention icons
 * built from the same source) rather than a dynamic `icon` route: a
 * manifest's `icons` array needs stable, directly-fetchable URLs at fixed
 * sizes, and Next's `generateImageMetadata` multi-size convention resolves
 * to opaque, hash-suffixed paths that aren't a good fit for that. Text comes
 * from the shared string table (English — manifest metadata has no
 * per-request locale to read; nothing in the app routes `?lang=` anywhere
 * but the home page itself).
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: t('en', 'appTitle'),
    short_name: t('en', 'appTitle'),
    description: t('en', 'appTagline'),
    start_url: '/',
    display: 'standalone',
    background_color: theme.color.paper,
    theme_color: theme.color.paper,
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
