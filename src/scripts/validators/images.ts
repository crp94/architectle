import type { ImageRecord } from '@/types/common';
import type { Pool, Violation } from './schema';

const ALLOWED_LICENSES: ImageRecord['license'][] = [
  'CC0', 'CC BY 2.0', 'CC BY 3.0', 'CC BY 4.0',
  'CC BY-SA 2.0', 'CC BY-SA 3.0', 'CC BY-SA 4.0', 'PD',
];

// Commons hosts an original either at commons.wikimedia.org/wiki/File:... or
// as a raw asset under upload.wikimedia.org/wikipedia/commons/... . Compare
// the parsed hostname (and, for the upload host, the path prefix) rather
// than doing a substring match on the whole URL, which a non-Commons URL
// could satisfy merely by mentioning the string in a query parameter. A
// malformed sourceUrl falls through to `false`, which surfaces as the
// existing image-source-url violation instead of throwing.
function isCommonsUrl(url: string): boolean {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return false;
  }
  if (parsed.hostname === 'commons.wikimedia.org') return true;
  if (parsed.hostname === 'upload.wikimedia.org' && parsed.pathname.startsWith('/wikipedia/commons/')) return true;
  return false;
}

// One check function applied to every image on a building — the primary
// `image` AND each `extraImages` entry (design spec §6: extras carry the
// same licence/photographer/dimensions obligations as the primary; the
// e.g. `extraImages[0]` label lets a curator find the exact offending
// entry, and reuses the SAME rule name as the primary check so
// `--allow-missing-dimensions` in buildCuratedPool.ts downgrades both
// without needing its own flag).
function checkImage(image: ImageRecord, subject: string, label: string, out: Violation[]): void {
  if (!ALLOWED_LICENSES.includes(image.license)) {
    out.push({
      rule: 'image-license-allowed',
      subject,
      detail: `${label} license "${image.license}" is not in the allowed set (${ALLOWED_LICENSES.join(', ')})`,
    });
  }

  if (image.photographer.trim() === '') {
    out.push({
      rule: 'image-photographer-required',
      subject,
      detail: `${label}.photographer is empty`,
    });
  }

  if (!isCommonsUrl(image.sourceUrl)) {
    out.push({
      rule: 'image-source-url',
      subject,
      detail: `${label} sourceUrl "${image.sourceUrl}" is not a Wikimedia Commons URL`,
    });
  }

  if (image.width <= 0 || image.height <= 0) {
    out.push({
      rule: 'image-dimensions-recorded',
      subject,
      detail: `${label} dimensions ${image.width}x${image.height} are not both positive`,
    });
  }
}

export function validateImages(pool: Pool): Violation[] {
  const out: Violation[] = [];
  const buildingsByCommonsFile = new Map<string, string[]>();

  for (const b of pool.buildings) {
    checkImage(b.image, b.id, 'image', out);

    const allFiles = [b.image.commonsFile];
    for (const [i, extra] of (b.extraImages ?? []).entries()) {
      checkImage(extra, b.id, `extraImages[${i}]`, out);
      allFiles.push(extra.commonsFile);
    }

    for (const commonsFile of allFiles) {
      const ids = buildingsByCommonsFile.get(commonsFile) ?? [];
      ids.push(b.id);
      buildingsByCommonsFile.set(commonsFile, ids);
    }
  }

  for (const [commonsFile, ids] of buildingsByCommonsFile) {
    if (ids.length > 1) {
      out.push({
        rule: 'image-file-unique',
        subject: ids.join(','),
        detail: `commonsFile "${commonsFile}" is used by ${ids.length} buildings: ${ids.join(', ')}`,
      });
    }
  }

  return out;
}
