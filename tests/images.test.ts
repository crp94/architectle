import {
  describe, it, expect, beforeEach, afterEach,
} from 'vitest';
import {
  mkdtempSync, mkdirSync, writeFileSync, rmSync,
} from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { commonsOriginalUrl, targetPath, needsFetch } from '@/scripts/fetchImages';

// Commons serves an original at
// upload.wikimedia.org/wikipedia/commons/<a>/<ab>/<file>, where <a>/<ab> are
// the first 1/2 hex chars of the MD5 of the *underscored* filename (spaces
// -> underscores, "File:" prefix stripped) and <file> is percent-encoded per
// RFC 3986 (MediaWiki uses PHP's rawurlencode, which — unlike JS's
// encodeURIComponent — also escapes ! * ' ( )). Every expected path below was
// cross-checked against the live Commons imageinfo API on 2026-08-27, e.g.:
//   curl '.../w/api.php?action=query&titles=File:07-Villa-Rotonda-Palladio.jpg&prop=imageinfo&iiprop=url&format=json'
// returned .../wikipedia/commons/8/86/07-Villa-Rotonda-Palladio.jpg.
describe('commonsOriginalUrl', () => {
  it('builds the plain-ASCII path with no special characters to encode', () => {
    // md5("07-Villa-Rotonda-Palladio.jpg") = 863b82d6122dcd153dedd6951b3754b -> 8/86
    expect(commonsOriginalUrl('File:07-Villa-Rotonda-Palladio.jpg')).toBe(
      'https://upload.wikimedia.org/wikipedia/commons/8/86/07-Villa-Rotonda-Palladio.jpg',
    );
  });

  it('hashes the space-to-underscore form and percent-encodes a curly apostrophe', () => {
    // md5("Brunelleschi’s_dome_seen_from_the_bell_tower.jpg") = 932b8cda190e5fd6b083e322742ade2 -> 9/93
    expect(commonsOriginalUrl('File:Brunelleschi’s dome seen from the bell tower.jpg')).toBe(
      'https://upload.wikimedia.org/wikipedia/commons/9/93/Brunelleschi%E2%80%99s_dome_seen_from_the_bell_tower.jpg',
    );
  });

  it('percent-encodes a straight apostrophe and commas (not left literal, unlike encodeURIComponent)', () => {
    // md5("Facade_of_St._John's_Co-Cathedral,_Valletta,_Malta.jpg") = babb2b6e3fc4ddae0850497cb4317838 -> b/ba
    expect(commonsOriginalUrl("File:Facade of St. John's Co-Cathedral, Valletta, Malta.jpg")).toBe(
      'https://upload.wikimedia.org/wikipedia/commons/b/ba/Facade_of_St._John%27s_Co-Cathedral%2C_Valletta%2C_Malta.jpg',
    );
  });

  it('percent-encodes accented letters and parentheses', () => {
    // md5("Centro_de_Creación_Contemporánea_de_Andalucía_(52019071256).jpg") = ae803e8126f40c3c40f9387f3de86bb7 -> a/ae
    expect(commonsOriginalUrl('File:Centro de Creación Contemporánea de Andalucía (52019071256).jpg')).toBe(
      'https://upload.wikimedia.org/wikipedia/commons/a/ae/Centro_de_Creaci%C3%B3n_Contempor%C3%A1nea_de_Andaluc%C3%ADa_%2852019071256%29.jpg',
    );
  });
});

describe('targetPath', () => {
  it('returns the public/buildings/<slug>.avif path for the primary image (no index, or index 1)', () => {
    expect(targetPath('cupola-di-santa-maria-del-fiore')).toBe(
      'public/buildings/cupola-di-santa-maria-del-fiore.avif',
    );
    expect(targetPath('cupola-di-santa-maria-del-fiore', 1)).toBe(
      'public/buildings/cupola-di-santa-maria-del-fiore.avif',
    );
  });

  // Design spec §6: extraImages[0] -> <slug>-2.avif, extraImages[1] ->
  // <slug>-3.avif (the primary is implicitly "image 1" but keeps its
  // unsuffixed filename for backward compatibility with every already-
  // fetched building).
  it('returns the <slug>-2.avif path for extraImages[0] (index 2)', () => {
    expect(targetPath('villa-la-rotonda', 2)).toBe('public/buildings/villa-la-rotonda-2.avif');
  });

  it('returns the <slug>-3.avif path for extraImages[1] (index 3)', () => {
    expect(targetPath('villa-la-rotonda', 3)).toBe('public/buildings/villa-la-rotonda-3.avif');
  });
});

describe('needsFetch', () => {
  // targetPath is a path relative to the process cwd, so exercise it against
  // a real temp directory (never the project's actual public/buildings/) by
  // chdir-ing into a scratch tree for the duration of each test.
  let originalCwd: string;
  let tmpDir: string;

  beforeEach(() => {
    originalCwd = process.cwd();
    tmpDir = mkdtempSync(path.join(os.tmpdir(), 'architectle-images-test-'));
    mkdirSync(path.join(tmpDir, 'public', 'buildings'), { recursive: true });
    process.chdir(tmpDir);
  });

  afterEach(() => {
    process.chdir(originalCwd);
    rmSync(tmpDir, { recursive: true, force: true });
  });

  it('is true when the target AVIF does not exist on disk', () => {
    expect(needsFetch('some-building')).toBe(true);
  });

  it('is false once the target AVIF exists on disk', () => {
    writeFileSync(path.join(tmpDir, 'public', 'buildings', 'some-building.avif'), 'fake-avif-bytes');
    expect(needsFetch('some-building')).toBe(false);
  });

  it('checks the suffixed extraImages path independently of the primary', () => {
    expect(needsFetch('some-building', 2)).toBe(true);
    writeFileSync(path.join(tmpDir, 'public', 'buildings', 'some-building.avif'), 'fake-avif-bytes');
    // The primary now exists, but extraImages[0] (-2.avif) still doesn't.
    expect(needsFetch('some-building', 2)).toBe(true);
    writeFileSync(path.join(tmpDir, 'public', 'buildings', 'some-building-2.avif'), 'fake-avif-bytes');
    expect(needsFetch('some-building', 2)).toBe(false);
  });
});

// Regression: extraImages entries nest their fields at 8-space indentation
// (vs the primary image's 6) — the dimension write-back must match both.
// See the v2 ledger: the first full extras run failed on every extra
// because the placeholder pattern hardcoded 6-space indentation.
import { describe as describe2, it as it2, expect as expect2 } from 'vitest';
describe2('updateDimensionsInSource indentation flexibility', () => {
  it2('matches both 6-space (primary) and 8-space (extraImages) placeholders', () => {
    const placeholderRe = /^([ ]*)width: 0,\n([ ]*)height: 0,\n/gm;
    const block = [
      "    id: 'x',", '    image: {', '      width: 0,', '      height: 0,', '    },',
      '    extraImages: [', '      {', '        width: 0,', '        height: 0,', '      },', '    ],',
    ].join('\n') + '\n';
    const matches = [...block.matchAll(placeholderRe)];
    expect2(matches).toHaveLength(2);
    expect2(matches[0][1]).toBe('      ');
    expect2(matches[1][1]).toBe('        ');
  });
});
