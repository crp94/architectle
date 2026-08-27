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
  it('returns the public/buildings/<slug>.avif path', () => {
    expect(targetPath('cupola-di-santa-maria-del-fiore')).toBe(
      'public/buildings/cupola-di-santa-maria-del-fiore.avif',
    );
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
});
