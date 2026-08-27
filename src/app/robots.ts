import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// Allows everything except `/api/` (there is no player-facing reason to
// index a route handler's JSON response) and points crawlers at the
// generated sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
