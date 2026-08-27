import type { Building, HeritageStatus } from '@/types/building';
import type { Architect, Gender } from '@/types/architect';
import type { LocalizedString, Material, Tier, Typology } from '@/types/common';

// The pool a validator operates on: every curated building and architect,
// composed by Task 8's `data:curate` script before any validator runs.
export type Pool = { buildings: Building[]; architects: Architect[] };

// A single validation failure. `subject` names the offending item (a
// building or architect id, or `pool` for a pool-wide aggregate); `detail`
// must state what was measured, not just that something was wrong — the
// curator agents in Task 9 act on this text.
export type Violation = { rule: string; subject: string; detail: string };

const TYPOLOGIES: Typology[] = [
  'housing', 'civic', 'sacral', 'cultural', 'commercial',
  'industrial', 'educational', 'infrastructure', 'tower', 'domestic',
];

const MATERIALS: Material[] = [
  'concrete', 'brick', 'steel-and-glass', 'timber', 'stone', 'earth', 'mixed',
];

const HERITAGE_STATUSES: HeritageStatus[] = ['unesco', 'national', 'regional', 'none'];

const TIERS: Tier[] = ['canon', 'deep'];

const GENDERS: Gender[] = ['woman', 'man', 'non-binary', 'unknown'];

const MIN_YEAR = 1;
const MAX_YEAR = 2100;
const MIN_DETAIL_RECT_AREA = 0.04;
const BOUNDS_EPSILON = 1e-9;

function isPlausibleYear(year: number): boolean {
  return year >= MIN_YEAR && year <= MAX_YEAR;
}

function localizedGaps(value: LocalizedString): string[] {
  const gaps: string[] = [];
  if (value.en.trim() === '') gaps.push('en');
  if (value.es.trim() === '') gaps.push('es');
  if (value.it.trim() === '') gaps.push('it');
  return gaps;
}

function checkLocalized(
  value: LocalizedString | null, fieldLabel: string, subject: string, out: Violation[],
): void {
  if (value === null) return;
  const gaps = localizedGaps(value);
  if (gaps.length > 0) {
    out.push({
      rule: 'localized-complete',
      subject,
      detail: `${fieldLabel} is missing locale(s): ${gaps.join(', ')}`,
    });
  }
}

function checkYear(
  year: number | null, fieldLabel: string, subject: string, out: Violation[],
): void {
  if (year === null) return;
  if (!isPlausibleYear(year)) {
    out.push({
      rule: 'plausible-years',
      subject,
      detail: `${fieldLabel} ${year} is outside the plausible range ${MIN_YEAR}-${MAX_YEAR}`,
    });
  }
}

function checkTier(tier: Tier | undefined, subject: string, out: Violation[]): void {
  if (tier === undefined || tier === null) {
    out.push({
      rule: 'enum-membership',
      subject,
      detail: 'tier is missing (must be "canon" or "deep")',
    });
  } else if (!TIERS.includes(tier)) {
    out.push({
      rule: 'enum-membership',
      subject,
      detail: `tier "${tier}" is not a recognized Tier`,
    });
  }
}

function checkGender(gender: Gender | undefined, subject: string, out: Violation[]): void {
  if (gender === undefined || gender === null) {
    out.push({
      rule: 'enum-membership',
      subject,
      detail: 'gender is missing (must be "woman", "man", "non-binary", or "unknown")',
    });
  } else if (!GENDERS.includes(gender)) {
    out.push({
      rule: 'enum-membership',
      subject,
      detail: `gender "${gender}" is not a recognized Gender`,
    });
  }
}

function checkBuildingSchema(b: Building, out: Violation[]): void {
  if (b.completed !== null && b.completed < b.inception) {
    out.push({
      rule: 'inception-before-completion',
      subject: b.id,
      detail: `completed ${b.completed} is before inception ${b.inception}`,
    });
  }

  const { x, y, w, h } = b.detailRect;
  const inBounds = x >= -BOUNDS_EPSILON && y >= -BOUNDS_EPSILON
    && x + w <= 1 + BOUNDS_EPSILON && y + h <= 1 + BOUNDS_EPSILON
    && w > 0 && h > 0;
  if (!inBounds) {
    out.push({
      rule: 'detail-rect-in-bounds',
      subject: b.id,
      detail: `detailRect {x:${x}, y:${y}, w:${w}, h:${h}} extends outside the image bounds [0,1]`,
    });
  } else {
    const area = w * h;
    if (area < MIN_DETAIL_RECT_AREA - BOUNDS_EPSILON) {
      out.push({
        rule: 'detail-rect-min-area',
        subject: b.id,
        detail: `detailRect area ${area.toFixed(4)} is below the minimum ${MIN_DETAIL_RECT_AREA}`,
      });
    }
  }

  checkLocalized(b.name, 'building.name', b.id, out);
  checkLocalized(b.structure, 'building.structure', b.id, out);
  checkLocalized(b.program, 'building.program', b.id, out);
  checkLocalized(b.dossier, 'building.dossier', b.id, out);
  checkLocalized(b.currentUse, 'building.currentUse', b.id, out);
  if (b.context) checkLocalized(b.context.body, 'building.context.body', b.id, out);

  checkYear(b.inception, 'inception', b.id, out);
  checkYear(b.completed, 'completed', b.id, out);
  checkYear(b.demolished, 'demolished', b.id, out);

  // `demolished` must not precede whichever of `completed`/`inception` is
  // the best-known completion year (falls back to `inception` when
  // `completed` is null, same fallback `floruit-consistent` in crossRefs.ts
  // already uses for a building's effective year). Same class of bug as
  // `inception-before-completion` above — a basic internal-consistency
  // check on this building's own fields, unrelated to any override.
  if (b.demolished !== null) {
    const completionYear = b.completed ?? b.inception;
    if (b.demolished < completionYear) {
      out.push({
        rule: 'demolished-after-completion',
        subject: b.id,
        detail: `demolished ${b.demolished} is before ${b.completed !== null ? 'completed' : 'inception'} ${completionYear}`,
      });
    }
  }

  if (!TYPOLOGIES.includes(b.typology)) {
    out.push({
      rule: 'enum-membership',
      subject: b.id,
      detail: `typology "${b.typology}" is not a recognized Typology`,
    });
  }
  for (const m of b.materials) {
    if (!MATERIALS.includes(m)) {
      out.push({
        rule: 'enum-membership',
        subject: b.id,
        detail: `material "${m}" is not a recognized Material`,
      });
    }
  }
  if (b.heritage !== null && !HERITAGE_STATUSES.includes(b.heritage)) {
    out.push({
      rule: 'enum-membership',
      subject: b.id,
      detail: `heritage "${b.heritage}" is not a recognized HeritageStatus`,
    });
  }

  checkTier(b.tier, b.id, out);
}

function checkArchitectSchema(a: Architect, out: Violation[]): void {
  checkGender(a.gender, a.id, out);
  checkLocalized(a.portrait, 'architect.portrait', a.id, out);
  if (a.context) checkLocalized(a.context.body, 'architect.context.body', a.id, out);

  checkYear(a.born, 'born', a.id, out);
  checkYear(a.died, 'died', a.id, out);
  checkYear(a.floruit.start, 'floruit.start', a.id, out);
  checkYear(a.floruit.end, 'floruit.end', a.id, out);

  // `born`/`died` internal consistency. Same class of bug this project has
  // already had to fix twice for `tier` and `gender` (validated in one
  // place — coverage.ts — but not the analogous place — schema.ts): a check
  // that only lives in crossRefs.ts (or nowhere) misses a hand-authored
  // typo that never gets cross-checked against anything else.
  if (a.born !== null && a.died !== null && a.born > a.died) {
    out.push({
      rule: 'born-before-died',
      subject: a.id,
      detail: `born ${a.born} is after died ${a.died}`,
    });
  }

  // `floruit.start` <= `floruit.end`, checked here — unconditionally, even
  // when `floruit.override` is true. `override` exempts a floruit from
  // being cross-checked against this architect's OWN buildings
  // (crossRefs.ts's `floruit-consistent` rule skips it deliberately, since
  // an override is often used precisely because the buildings-derived
  // window is wrong) — it was never meant to exempt the floruit from basic
  // internal consistency. A hand-authored `{start: 1990, end: 1950,
  // override: true}` must still fail loudly: an inverted window like that
  // corrupts src/lib/axes/era.ts's midpoint math during live gameplay.
  if (a.floruit.start > a.floruit.end) {
    out.push({
      rule: 'floruit-start-before-end',
      subject: a.id,
      detail: `floruit.start ${a.floruit.start} is after floruit.end ${a.floruit.end}`,
    });
  }

  if (!TYPOLOGIES.includes(a.primaryTypology)) {
    out.push({
      rule: 'enum-membership',
      subject: a.id,
      detail: `primaryTypology "${a.primaryTypology}" is not a recognized Typology`,
    });
  }
  if (!MATERIALS.includes(a.signatureMaterial)) {
    out.push({
      rule: 'enum-membership',
      subject: a.id,
      detail: `signatureMaterial "${a.signatureMaterial}" is not a recognized Material`,
    });
  }

  checkTier(a.tier, a.id, out);
}

export function validateSchema(pool: Pool): Violation[] {
  const out: Violation[] = [];
  for (const b of pool.buildings) checkBuildingSchema(b, out);
  for (const a of pool.architects) checkArchitectSchema(a, out);
  return out;
}
