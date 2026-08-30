import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import {
  cleanup, fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import type { Building } from '@/types/building';
import type { Architect } from '@/types/architect';
import type { Comparison } from '@/lib/axes';
import { Reveal } from '@/components/reveal/Reveal';

function ls(en: string, es: string, it: string) {
  return { en, es, it };
}

const architect: Architect = {
  id: 'reveal-architect',
  wikidataId: 'Q42',
  name: 'Reveal Architect',
  alternativeNames: [],
  gender: 'woman',
  born: 1920,
  died: 1990,
  floruit: { start: 1950, end: 1980, override: false },
  movements: [{ id: 'brutalism', primary: true }],
  workRegions: ['Western Europe'],
  workCentroid: { lat: 48, lon: 2 },
  primaryTypology: 'civic',
  signatureMaterial: 'concrete',
  portrait: ls('Portrait EN.', 'Retrato ES.', 'Ritratto IT.'),
  awards: [],
  tier: 'canon',
  context: null,
  sources: [{ kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q42', title: 'Reveal Architect', license: null }],
};

const baseBuilding: Building = {
  id: 'reveal-building',
  wikidataId: 'Q100',
  name: ls('Reveal Hall', 'Sala Reveal', 'Sala Reveal IT'),
  architectId: 'reveal-architect',
  location: { city: 'Testville', countryCode: 'XX', lat: 0, lon: 0 },
  inception: 1960,
  completed: 1965,
  demolished: null,
  typology: 'civic',
  materials: ['concrete'],
  structure: ls('Structure EN.', 'Estructura ES.', 'Struttura IT.'),
  program: ls('Program EN.', 'Programa ES.', 'Programma IT.'),
  heritage: null,
  currentUse: null,
  detailRect: { x: 0.35, y: 0.35, w: 0.15, h: 0.15 },
  image: {
    commonsFile: 'File:Reveal.jpg',
    photographer: 'Jane Photographer',
    license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Reveal.jpg',
    width: 1600,
    height: 1000,
  },
  dossier: ls(
    'English dossier text describing the building at length.',
    'Texto de ficha en español que describe el edificio.',
    "Testo della scheda in italiano che descrive l'edificio.",
  ),
  context: null,
  sources: [{ kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q100', title: 'Reveal Hall', license: null }],
  tier: 'canon',
};

const comparisons: Comparison[] = [
  {
    era: { bucket: 'FAR', deltaYears: -50, direction: 'earlier' },
    movement: 'NONE',
    region: { match: 'NONE', bearing: 'N' },
    typology: { match: 'NONE', typologyMatch: false, materialMatch: false },
  },
];

function renderReveal(overrides: Partial<Building> = {}, solved = true) {
  const building = { ...baseBuilding, ...overrides };
  return render(
    <Reveal
      building={building}
      architect={architect}
      solved={solved}
      guessesUsed={solved ? 1 : null}
      comparisons={comparisons}
      locale="en"
    />,
  );
}

describe('Reveal', () => {
  afterEach(() => {
    cleanup();
    Object.defineProperty(navigator, 'share', { value: undefined, configurable: true });
    Object.defineProperty(navigator, 'clipboard', { value: undefined, configurable: true });
    vi.restoreAllMocks();
  });

  it('renders the full uncropped photograph, not a cropped/positioned variant', () => {
    renderReveal();
    const img = screen.getByTestId('reveal-photo');
    const src = img.getAttribute('src') ?? '';
    expect(decodeURIComponent(src)).toContain(`/buildings/${baseBuilding.id}.avif`);
    expect(img.getAttribute('width')).toBe(String(baseBuilding.image.width));
    expect(img.getAttribute('height')).toBe(String(baseBuilding.image.height));
    // Task 11's CropStage zooms in by inflating the <img> past 100% width/
    // height and shifting it with a negative offset; the reveal must show
    // the whole, unscaled frame instead of that trick.
    const style = img.getAttribute('style') ?? '';
    const widthPct = /width:\s*([\d.]+)%/.exec(style);
    expect(widthPct === null || Number(widthPct[1]) <= 100).toBe(true);
    expect(style).not.toMatch(/left:\s*-/);
    expect(style).not.toMatch(/top:\s*-/);
  });

  it("renders the architect's name", () => {
    renderReveal();
    expect(screen.getByText(architect.name)).toBeTruthy();
  });

  it('renders a four-cell fact strip', () => {
    renderReveal();
    expect(screen.getAllByTestId(/^reveal-fact-/)).toHaveLength(4);
  });

  it('omits the extra-images gallery entirely when the building has no extraImages', () => {
    renderReveal();
    expect(screen.queryByTestId('reveal-extra-images')).toBeNull();
  });

  it('renders each extraImages entry as a smaller framed print, credited and captioned', () => {
    renderReveal({
      extraImages: [
        {
          commonsFile: 'File:Reveal-angle-2.jpg',
          photographer: 'Second Photographer',
          license: 'CC BY-SA 4.0',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Reveal-angle-2.jpg',
          width: 1200,
          height: 800,
        },
        {
          commonsFile: 'File:Reveal-angle-3.jpg',
          photographer: 'Third Photographer',
          license: 'CC BY 4.0',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Reveal-angle-3.jpg',
          width: 1200,
          height: 800,
        },
      ],
    });

    const gallery = screen.getByTestId('reveal-extra-images');
    expect(gallery).toBeTruthy();

    const firstImg = screen.getByTestId('image-gallery-photo-0');
    expect(decodeURIComponent(firstImg.getAttribute('src') ?? '')).toContain(`/buildings/${baseBuilding.id}-2.avif`);
    const secondImg = screen.getByTestId('image-gallery-photo-1');
    expect(decodeURIComponent(secondImg.getAttribute('src') ?? '')).toContain(`/buildings/${baseBuilding.id}-3.avif`);

    // Each print carries its own alt text and photographer credit — never a
    // bare, uncredited image (design spec §6).
    expect(firstImg.getAttribute('alt')).toContain(baseBuilding.name.en);
    const captions = screen.getAllByTestId('gallery-frame-caption').map((c) => c.textContent ?? '');
    expect(captions.some((c) => c.includes('Second Photographer'))).toBe(true);
    expect(captions.some((c) => c.includes('Third Photographer'))).toBe(true);
  });

  it('renders the trilingual dossier in the active locale', () => {
    const building = { ...baseBuilding };
    render(
      <Reveal
        building={building}
        architect={architect}
        solved
        guessesUsed={1}
        comparisons={comparisons}
        locale="es"
      />,
    );
    expect(screen.getByTestId('reveal-dossier').textContent).toContain(building.dossier.es);
  });

  it('renders the context block, with its sources, when present', () => {
    renderReveal({
      context: {
        body: ls('Context in English.', 'Contexto en español.', 'Contesto in italiano.'),
        sources: [{ kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/X', title: 'Cited source X', license: 'CC BY-SA 4.0' }],
      },
    });
    const contextSection = screen.getByTestId('reveal-context');
    expect(contextSection.textContent).toContain('Context in English.');
    expect(screen.getByText('Cited source X')).toBeTruthy();
  });

  it('omits the context section entirely when the building has none', () => {
    renderReveal({ context: null });
    expect(screen.queryByTestId('reveal-context')).toBeNull();
  });

  it('renders the provenance line with the QID, Commons file, photographer and licence', () => {
    renderReveal();
    const prov = screen.getByTestId('reveal-provenance').textContent ?? '';
    expect(prov).toContain('Q100');
    expect(prov).toContain('File:Reveal.jpg');
    expect(prov).toContain('Jane Photographer');
    expect(prov).toContain('CC BY-SA 4.0');
  });

  it('shows a "no Wikidata item" indication instead of a QID when wikidataId is null', () => {
    renderReveal({ wikidataId: null });
    const prov = screen.getByTestId('reveal-provenance').textContent ?? '';
    expect(prov).not.toContain('Q100');
    expect(prov.toLowerCase()).toContain('no wikidata item');
  });

  it('calls navigator.share with a text payload when the Web Share API is available', async () => {
    const shareMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'share', { value: shareMock, configurable: true });
    renderReveal();

    fireEvent.click(screen.getByTestId('reveal-share'));

    await waitFor(() => expect(shareMock).toHaveBeenCalledTimes(1));
    const payload = shareMock.mock.calls[0][0];
    expect(typeof payload.text).toBe('string');
    expect(payload.text.length).toBeGreaterThan(0);
  });

  it('falls back to the clipboard when navigator.share is unavailable', async () => {
    Object.defineProperty(navigator, 'share', { value: undefined, configurable: true });
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });
    renderReveal();

    fireEvent.click(screen.getByTestId('reveal-share'));

    await waitFor(() => expect(writeText).toHaveBeenCalledTimes(1));
    expect(await screen.findByText(/copied/i)).toBeTruthy();
  });

  it('silently does nothing when the user cancels the native share sheet (AbortError)', async () => {
    const abortError = Object.assign(new Error('cancelled'), { name: 'AbortError' });
    const shareMock = vi.fn().mockRejectedValue(abortError);
    Object.defineProperty(navigator, 'share', { value: shareMock, configurable: true });
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });
    renderReveal();

    fireEvent.click(screen.getByTestId('reveal-share'));

    await waitFor(() => expect(shareMock).toHaveBeenCalledTimes(1));
    // A user-cancelled share is not a failure: no clipboard fallback, no
    // "Copied!" feedback, no unhandled rejection.
    expect(writeText).not.toHaveBeenCalled();
    expect(screen.queryByText(/copied/i)).toBeNull();
  });

  it('falls back to the clipboard when navigator.share rejects with a real error', async () => {
    const realError = new Error('no share targets available');
    const shareMock = vi.fn().mockRejectedValue(realError);
    Object.defineProperty(navigator, 'share', { value: shareMock, configurable: true });
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });
    renderReveal();

    fireEvent.click(screen.getByTestId('reveal-share'));

    await waitFor(() => expect(shareMock).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(writeText).toHaveBeenCalledTimes(1));
    expect(await screen.findByText(/copied/i)).toBeTruthy();
  });

  it('never lets the architect name reach the share payload, for a win or a loss', async () => {
    const shareMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'share', { value: shareMock, configurable: true });

    renderReveal({}, true);
    fireEvent.click(screen.getByTestId('reveal-share'));
    await waitFor(() => expect(shareMock).toHaveBeenCalledTimes(1));
    expect(shareMock.mock.calls[0][0].text).not.toContain(architect.name);
    cleanup();

    renderReveal({}, false);
    fireEvent.click(screen.getByTestId('reveal-share'));
    await waitFor(() => expect(shareMock).toHaveBeenCalledTimes(2));
    expect(shareMock.mock.calls[1][0].text).not.toContain(architect.name);
  });
});
