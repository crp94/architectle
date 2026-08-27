import type { MetadataRoute } from 'next';
import { ARCHITECTS, BUILDINGS } from '@/lib/pool';
import { referencedMovementIds } from '@/lib/archive';
import { SITE_URL } from '@/lib/site';

/**
 * Enumerates every statically generated archive route (design spec §8):
 * the building/architect/movement detail pages plus the three catalogue
 * indexes. Sourced from the same pool accessors the pages themselves use
 * (`generateStaticParams` in each `[slug]/page.tsx`), so this list can
 * never drift out of sync with what actually gets built.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const indexes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: 'daily', priority: 1 },
    { url: `${SITE_URL}/buildings`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/architects`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/movements`, changeFrequency: 'weekly', priority: 0.8 },
  ];

  const buildingRoutes: MetadataRoute.Sitemap = BUILDINGS.map((b) => ({
    url: `${SITE_URL}/building/${b.id}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const architectRoutes: MetadataRoute.Sitemap = ARCHITECTS.map((a) => ({
    url: `${SITE_URL}/architect/${a.id}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const movementRoutes: MetadataRoute.Sitemap = referencedMovementIds().map((id) => ({
    url: `${SITE_URL}/movement/${id}`,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...indexes, ...buildingRoutes, ...architectRoutes, ...movementRoutes];
}
