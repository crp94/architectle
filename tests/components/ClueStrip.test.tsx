import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { ClueStrip } from '@/components/game/ClueStrip';
import { cluesAt } from '@/lib/clues';
import type { Building } from '@/types/building';
import type { Architect } from '@/types/architect';

function ls(en: string) {
  return { en, es: en, it: en };
}

function makeBuilding(patch: Partial<Building> = {}): Building {
  return {
    id: 'target-building',
    wikidataId: 'Q1',
    name: ls('Target Building'),
    architectId: 'arch-1',
    location: { city: 'Testville', countryCode: 'FR', lat: 48.8566, lon: 2.3522 },
    inception: 1920,
    completed: 1925,
    demolished: null,
    typology: 'civic',
    materials: ['concrete'],
    structure: ls('A structure.'),
    program: ls('A program.'),
    heritage: null,
    currentUse: null,
    detailRect: { x: 0.2, y: 0.2, w: 0.3, h: 0.3 },
    image: {
      commonsFile: 'File:Target.jpg',
      photographer: 'Someone',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Target.jpg',
      width: 1600,
      height: 1200,
    },
    dossier: ls('A dossier.'),
    context: null,
    sources: [{ kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q1', title: 'Target', license: null }],
    tier: 'canon',
    ...patch,
  };
}

function makeArchitect(patch: Partial<Architect> = {}): Architect {
  return {
    id: 'arch-1',
    wikidataId: 'Q2',
    name: 'Test Architect',
    alternativeNames: [],
    gender: 'unknown',
    born: 1880,
    died: 1950,
    floruit: { start: 1900, end: 1940, override: false },
    movements: [{ id: 'brutalism', primary: true }],
    workRegions: ['Western Europe'],
    workCentroid: { lat: 48.8566, lon: 2.3522 },
    primaryTypology: 'civic',
    signatureMaterial: 'concrete',
    portrait: ls('A portrait.'),
    awards: [],
    tier: 'canon',
    context: null,
    sources: [],
    ...patch,
  };
}

const siblingBuilding = makeBuilding({ id: 'sibling-building', name: ls('Sibling Hall') });

describe('ClueStrip', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders nothing before the first miss', () => {
    const building = makeBuilding();
    const architect = makeArchitect();
    const clues = cluesAt(building, architect, [siblingBuilding], 0);

    render(
      <ClueStrip locale="en" clues={clues} buildingId={building.id} />,
    );

    expect(screen.queryByTestId('clue-strip')).toBeNull();
  });

  it('renders exactly the clues unlocked at each miss count, in schedule order', () => {
    const building = makeBuilding({ extraImages: [{
      commonsFile: 'File:Extra.jpg',
      photographer: 'Extra Photographer',
      license: 'CC0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Extra.jpg',
      width: 1200,
      height: 900,
    }] });
    const architect = makeArchitect();

    function renderAt(missCount: number) {
      cleanup();
      const clues = cluesAt(building, architect, [siblingBuilding], missCount);
      render(
        <ClueStrip locale="en" clues={clues} buildingId={building.id} />,
      );
    }

    renderAt(1);
    expect(screen.getByTestId('clue-year').textContent).toContain('1925');
    expect(screen.queryByTestId('clue-country')).toBeNull();

    renderAt(2);
    expect(screen.getByTestId('clue-year')).toBeTruthy();
    expect(screen.getByTestId('clue-country').textContent).toContain('FR');
    expect(screen.queryByTestId('clue-typology-material')).toBeNull();

    renderAt(3);
    expect(screen.getByTestId('clue-typology-material').textContent).toContain('Civic');
    expect(screen.getByTestId('clue-typology-material').textContent).toContain('Concrete');
    expect(screen.queryByTestId('clue-second-photo')).toBeNull();

    renderAt(4);
    expect(screen.getByTestId('clue-second-photo')).toBeTruthy();
    expect(screen.queryByTestId('clue-movement-sibling')).toBeNull();

    renderAt(5);
    expect(screen.getByTestId('clue-movement-sibling').textContent).toContain('Brutalism');
    expect(screen.getByTestId('clue-movement-sibling').textContent).toContain('Sibling Hall');

    // The ladder never grows past its 5 real clue kinds — a further miss
    // must not invent a 6th entry. (Anchored regex excludes the nested
    // `clue-second-photo-image` testid, which also starts with `clue-`.)
    renderAt(6);
    expect(screen.getAllByTestId(/^clue-(year|country|typology-material|second-photo|movement-sibling)$/))
      .toHaveLength(5);
  });

  it('degrades gracefully without extraImages: skips second-photo without consuming a slot', () => {
    const building = makeBuilding(); // no extraImages
    const architect = makeArchitect();
    const clues = cluesAt(building, architect, [siblingBuilding], 4);

    render(
      <ClueStrip locale="en" clues={clues} buildingId={building.id} />,
    );

    expect(screen.queryByTestId('clue-second-photo')).toBeNull();
    // movement-sibling is promoted into slot 4 instead of being skipped.
    expect(screen.getByTestId('clue-movement-sibling')).toBeTruthy();
    // Only 4 real clue kinds exist in the degraded schedule — nothing new
    // appears at a 5th+ miss.
    const cluesAtFive = cluesAt(building, architect, [siblingBuilding], 5);
    expect(cluesAtFive).toHaveLength(4);
  });

  it('renders the second photo in its own hairline-framed gallery frame with a photographer credit', () => {
    const building = makeBuilding({ extraImages: [{
      commonsFile: 'File:Extra.jpg',
      photographer: 'Extra Photographer',
      license: 'CC0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Extra.jpg',
      width: 1200,
      height: 900,
    }] });
    const architect = makeArchitect();
    const clues = cluesAt(building, architect, [siblingBuilding], 4);

    render(
      <ClueStrip locale="en" clues={clues} buildingId={building.id} />,
    );

    expect(screen.getAllByTestId('gallery-frame')).toHaveLength(1);
    const img = screen.getByTestId('clue-second-photo-image');
    expect(img.getAttribute('src')).toBe('/buildings/target-building-2.avif');
    // Codereview finding #2: the round is still unresolved at this point —
    // the alt text must NOT name the real building.
    expect(img.getAttribute('alt')).not.toBe('Target Building');
    expect(img.getAttribute('alt')).not.toContain('Target Building');
    expect(img.getAttribute('alt')?.length).toBeGreaterThan(0);
    const caption = screen.getByTestId('gallery-frame-caption');
    expect(caption.textContent).toContain('Extra Photographer');
    expect(caption.textContent).toContain('CC0');
  });

  it('shows "unaffiliated" rather than inventing a movement for an unaffiliated architect', () => {
    const building = makeBuilding();
    const architect = makeArchitect({ movements: 'unaffiliated' });
    const clues = cluesAt(building, architect, [siblingBuilding], 5);

    render(
      <ClueStrip locale="en" clues={clues} buildingId={building.id} />,
    );

    expect(screen.getByTestId('clue-movement-sibling').textContent).toContain('Unaffiliated');
  });

  it('labels the year clue "Completed" when the building has a completed year', () => {
    const building = makeBuilding({ completed: 1925 });
    const architect = makeArchitect();
    const clues = cluesAt(building, architect, [siblingBuilding], 1);

    render(
      <ClueStrip locale="en" clues={clues} buildingId={building.id} />,
    );

    const yearClue = screen.getByTestId('clue-year');
    expect(yearClue.textContent).toContain('Completed');
    expect(yearClue.textContent).toContain('1925');
    expect(yearClue.textContent).not.toContain('Begun');
  });

  it('labels the year clue "Begun" (not "Completed") and shows the inception year when completed is null', () => {
    // Regression test for review B3/B4 Critical #2: a still-under-
    // construction building like Sagrada Família (completed: null) must
    // never be shown under the "Completed" label.
    const building = makeBuilding({ completed: null, inception: 1882 });
    const architect = makeArchitect();
    const clues = cluesAt(building, architect, [siblingBuilding], 1);

    render(
      <ClueStrip locale="en" clues={clues} buildingId={building.id} />,
    );

    const yearClue = screen.getByTestId('clue-year');
    expect(yearClue.textContent).toContain('Begun');
    expect(yearClue.textContent).toContain('1882');
    expect(yearClue.textContent).not.toContain('Completed');
  });

  it('omits the "also designed" line when no sibling building is available', () => {
    const building = makeBuilding();
    const architect = makeArchitect();
    // Only the target itself is available as a "sibling" candidate — the
    // clue engine filters it out and returns sibling: null.
    const clues = cluesAt(building, architect, [building], 5);

    render(
      <ClueStrip locale="en" clues={clues} buildingId={building.id} />,
    );

    const movementClue = screen.getByTestId('clue-movement-sibling');
    expect(movementClue.textContent).toContain('Brutalism');
    expect(movementClue.textContent).not.toContain('Sibling Hall');
  });
});
