import { describe, it, expect } from 'vitest';
import {
  BUILDINGS, ARCHITECTS, architectById, buildingBySlug, canonBuildings, roster,
  featuredArchitects, featuredBuildings, featuredRoster,
} from '@/lib/pool';
import { FEATURED_ARCHITECT_IDS } from '@/scripts/curated/featured';

// These tests deliberately assert generic invariants over whatever pool
// `data:curate` last generated (the Task 3 fixture during Task 8/9
// development, ~40 real buildings once Task 9 lands, ~300 eventually) —
// pool.ts is a thin accessor layer, and its correctness doesn't depend on
// the content of the curated data. That content is `data:curate`'s job to
// validate, not this file's.
describe('pool accessors', () => {
  it('BUILDINGS and ARCHITECTS are non-empty', () => {
    expect(BUILDINGS.length).toBeGreaterThan(0);
    expect(ARCHITECTS.length).toBeGreaterThan(0);
  });

  describe('roster()', () => {
    it('returns every architect referenced by a building, and nothing else', () => {
      const referencedIds = new Set(BUILDINGS.map((b) => b.architectId));
      const rosterIds = roster().map((a) => a.id);

      expect(new Set(rosterIds)).toEqual(referencedIds);
      // No duplicates: exactly one entry per referenced architect.
      expect(rosterIds.length).toBe(referencedIds.size);
    });
  });

  describe('canonBuildings()', () => {
    it('returns only buildings with tier "canon"', () => {
      const result = canonBuildings();
      expect(result.length).toBeGreaterThan(0);
      expect(result.every((b) => b.tier === 'canon')).toBe(true);
      expect(result).toEqual(BUILDINGS.filter((b) => b.tier === 'canon'));
    });
  });

  describe('architectById()', () => {
    it('returns the matching architect for a known id', () => {
      const target = ARCHITECTS[0];
      expect(architectById(target.id)).toEqual(target);
    });

    it('throws a named error for an unknown id', () => {
      expect(() => architectById('no-such-architect')).toThrow();
      try {
        architectById('no-such-architect');
        expect.unreachable('architectById should have thrown');
      } catch (err) {
        expect((err as Error).name).toBe('ArchitectNotFoundError');
        expect((err as Error).message).toContain('no-such-architect');
      }
    });
  });

  describe('buildingBySlug()', () => {
    it('returns the matching building for a known slug', () => {
      const target = BUILDINGS[0];
      expect(buildingBySlug(target.id)).toEqual(target);
    });

    it('returns undefined for an unknown slug', () => {
      expect(buildingBySlug('no-such-building')).toBeUndefined();
    });
  });

  // Design spec §2: the v2 "featured roster" the game (daily/unlimited/
  // autocomplete) draws from, distinct from `roster()` (untouched, still
  // full-pool, used by the archive).
  describe('featuredArchitects()', () => {
    it('returns exactly the architects whose id is in FEATURED_ARCHITECT_IDS', () => {
      const result = featuredArchitects();
      expect(result.length).toBe(FEATURED_ARCHITECT_IDS.length);
      expect(new Set(result.map((a) => a.id))).toEqual(new Set(FEATURED_ARCHITECT_IDS));
    });

    it('is non-empty for the real pool', () => {
      expect(featuredArchitects().length).toBeGreaterThan(0);
    });
  });

  describe('featuredBuildings()', () => {
    it('returns only buildings whose architectId is a featured architect', () => {
      const featuredIds = new Set(FEATURED_ARCHITECT_IDS);
      const result = featuredBuildings();
      expect(result.length).toBeGreaterThan(0);
      expect(result.every((b) => featuredIds.has(b.architectId))).toBe(true);
      expect(result).toEqual(BUILDINGS.filter((b) => featuredIds.has(b.architectId)));
    });
  });

  describe('featuredRoster()', () => {
    it('returns every featured architect referenced by a building, and nothing else', () => {
      const featuredIds = new Set(FEATURED_ARCHITECT_IDS);
      const referencedFeaturedIds = new Set(
        BUILDINGS.filter((b) => featuredIds.has(b.architectId)).map((b) => b.architectId),
      );
      const rosterIds = featuredRoster().map((a) => a.id);
      expect(new Set(rosterIds)).toEqual(referencedFeaturedIds);
      expect(rosterIds.every((id) => featuredIds.has(id))).toBe(true);
    });

    it('never includes an architect outside FEATURED_ARCHITECT_IDS', () => {
      const featuredIds = new Set(FEATURED_ARCHITECT_IDS);
      expect(featuredRoster().every((a) => featuredIds.has(a.id))).toBe(true);
    });
  });
});
