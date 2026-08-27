import { MOVEMENTS } from '@/data/movements';
import type { Pool, Violation } from './schema';

const EARTH_RADIUS_KM = 6371;
const DUPLICATE_SITE_RADIUS_KM = 25;

function toRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

// Great-circle distance between two lat/lon points, in kilometres.
function haversineKm(a: { lat: number; lon: number }, b: { lat: number; lon: number }): number {
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * EARTH_RADIUS_KM * Math.asin(Math.min(1, Math.sqrt(h)));
}

export function validateCrossRefs(pool: Pool): Violation[] {
  const out: Violation[] = [];
  const architectsById = new Map(pool.architects.map((a) => [a.id, a]));

  // --- architect-exists ---
  for (const b of pool.buildings) {
    if (!architectsById.has(b.architectId)) {
      out.push({
        rule: 'architect-exists',
        subject: b.id,
        detail: `${b.id} references architectId "${b.architectId}", which is not in the pool`,
      });
    }
  }

  // --- co-architect-exists ---
  // Same referential-integrity check as `architect-exists` above, applied to
  // the display-only `coArchitects` list rather than the answer-key
  // `architectId`. Kept as a sibling rule (not folded into `architect-exists`)
  // so a curator can tell from the rule name alone whether the broken
  // reference is the building's answer or a co-credit.
  for (const b of pool.buildings) {
    for (const coId of b.coArchitects ?? []) {
      if (!architectsById.has(coId)) {
        out.push({
          rule: 'co-architect-exists',
          subject: b.id,
          detail: `${b.id} references coArchitects id "${coId}", which is not in the pool`,
        });
      }
    }
  }

  // --- co-architect-duplicate ---
  // Two distinct ways a `coArchitects` list can duplicate a credit rather
  // than add a genuine second author: (1) it re-lists the building's own
  // `architectId`, or (2) it lists the same co-architect more than once.
  // Both are curation mistakes, not partnerships, so both are hard failures.
  for (const b of pool.buildings) {
    const coArchitects = b.coArchitects ?? [];
    if (coArchitects.includes(b.architectId)) {
      out.push({
        rule: 'co-architect-duplicate',
        subject: b.id,
        detail: `${b.id} lists its own architectId "${b.architectId}" in coArchitects — a co-credit must name a different architect`,
      });
    }
    const seen = new Set<string>();
    const repeated = new Set<string>();
    for (const coId of coArchitects) {
      if (seen.has(coId)) repeated.add(coId);
      seen.add(coId);
    }
    if (repeated.size > 0) {
      out.push({
        rule: 'co-architect-duplicate',
        subject: b.id,
        detail: `${b.id} lists coArchitects id(s) [${[...repeated].join(', ')}] more than once`,
      });
    }
  }

  // --- architect-orphan ---
  // An architect co-credited on a building — never the answer, but a
  // legitimate second author — is enough to keep them out of this rule:
  // they genuinely worked on something in the pool, so they belong in it
  // even though they'll never be the day's target (see `roster()` in
  // src/lib/pool.ts, which still keys strictly off `architectId`).
  const architectIdsWithBuildings = new Set<string>();
  for (const b of pool.buildings) {
    architectIdsWithBuildings.add(b.architectId);
    for (const coId of b.coArchitects ?? []) architectIdsWithBuildings.add(coId);
  }
  for (const a of pool.architects) {
    if (!architectIdsWithBuildings.has(a.id)) {
      out.push({
        rule: 'architect-orphan',
        subject: a.id,
        detail: `${a.id} has no buildings in the pool`,
      });
    }
  }

  // --- movement-resolves ---
  for (const a of pool.architects) {
    if (a.movements === 'unaffiliated') continue;
    for (const m of a.movements) {
      if (!MOVEMENTS[m.id]) {
        out.push({
          rule: 'movement-resolves',
          subject: a.id,
          detail: `${a.id} references movement id "${m.id}", which is not in MOVEMENTS`,
        });
      }
    }
  }

  // --- floruit-consistent ---
  for (const a of pool.architects) {
    if (a.floruit.override) continue;
    const mismatches = pool.buildings
      .filter((b) => b.architectId === a.id)
      .map((b) => ({ id: b.id, year: b.completed ?? b.inception }))
      .filter(({ year }) => year < a.floruit.start || year > a.floruit.end);
    if (mismatches.length > 0) {
      const summary = mismatches.map(({ id, year }) => `${id} (${year})`).join(', ');
      out.push({
        rule: 'floruit-consistent',
        subject: a.id,
        detail: `${a.id} floruit [${a.floruit.start}-${a.floruit.end}] is inconsistent with: ${summary}`,
      });
    }
  }

  // --- possible-duplicate-site ---
  for (let i = 0; i < pool.buildings.length; i += 1) {
    for (let j = i + 1; j < pool.buildings.length; j += 1) {
      const bi = pool.buildings[i];
      const bj = pool.buildings[j];
      const distance = haversineKm(bi.location, bj.location);
      if (distance <= DUPLICATE_SITE_RADIUS_KM) {
        out.push({
          rule: 'possible-duplicate-site',
          subject: `${bi.id},${bj.id}`,
          detail: `${bi.id} and ${bj.id} are ${distance.toFixed(1)} km apart (within ${DUPLICATE_SITE_RADIUS_KM} km)`,
        });
      }
    }
  }

  return out;
}
