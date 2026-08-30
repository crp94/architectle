import type { Pool, Violation } from './schema';
import { FEATURED_ARCHITECT_IDS } from '../curated/featured';

// Design spec §2: two hard gates over `FEATURED_ARCHITECT_IDS`
// (src/scripts/curated/featured.ts). `featuredIds` defaults to the real
// curated list but is accepted as a parameter so tests can exercise this
// against tests/fixtures/pool.ts's small fixture pool instead.
const MIN_FEATURED_BUILDINGS = 2;

export function validateFeatured(pool: Pool, featuredIds: string[] = FEATURED_ARCHITECT_IDS): Violation[] {
  const out: Violation[] = [];
  const architectsById = new Map(pool.architects.map((a) => [a.id, a]));

  // Counts ONLY `architectId` references — a `coArchitects` credit is
  // display-only and never the game's answer key (see Building.coArchitects
  // in src/types/building.ts), so it must not help an architect clear this
  // bar. Mirrors the identical decision already made for
  // `max-buildings-per-architect` in coverage.ts.
  const buildingCountByArchitectId = new Map<string, number>();
  for (const b of pool.buildings) {
    buildingCountByArchitectId.set(b.architectId, (buildingCountByArchitectId.get(b.architectId) ?? 0) + 1);
  }

  for (const id of featuredIds) {
    if (!architectsById.has(id)) {
      out.push({
        rule: 'featured-architect-exists',
        subject: id,
        detail: `FEATURED_ARCHITECT_IDS lists "${id}", which does not resolve to any architect in the pool`,
      });
      continue;
    }

    const count = buildingCountByArchitectId.get(id) ?? 0;
    if (count < MIN_FEATURED_BUILDINGS) {
      out.push({
        rule: 'featured-min-buildings',
        subject: id,
        detail: `featured architect "${id}" holds ${count} building(s) via architectId; `
          + `at least ${MIN_FEATURED_BUILDINGS} required (coArchitects credits do not count)`,
      });
    }
  }

  return out;
}
