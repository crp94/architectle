import type { ImageRecord } from '@/types/common';
import type { Pool, Violation } from './schema';

const ALLOWED_LICENSES: ImageRecord['license'][] = [
  'CC0', 'CC BY 2.0', 'CC BY 3.0', 'CC BY 4.0',
  'CC BY-SA 2.0', 'CC BY-SA 3.0', 'CC BY-SA 4.0', 'PD',
];

// Commons hosts an original either at commons.wikimedia.org/wiki/File:... or
// as a raw asset under upload.wikimedia.org/.../commons/...
function isCommonsUrl(url: string): boolean {
  return url.includes('commons.wikimedia.org') || url.includes('upload.wikimedia.org/wikipedia/commons');
}

export function validateImages(pool: Pool): Violation[] {
  const out: Violation[] = [];
  const buildingsByCommonsFile = new Map<string, string[]>();

  for (const b of pool.buildings) {
    const { image } = b;

    if (!ALLOWED_LICENSES.includes(image.license)) {
      out.push({
        rule: 'image-license-allowed',
        subject: b.id,
        detail: `license "${image.license}" is not in the allowed set (${ALLOWED_LICENSES.join(', ')})`,
      });
    }

    if (image.photographer.trim() === '') {
      out.push({
        rule: 'image-photographer-required',
        subject: b.id,
        detail: 'image.photographer is empty',
      });
    }

    if (!isCommonsUrl(image.sourceUrl)) {
      out.push({
        rule: 'image-source-url',
        subject: b.id,
        detail: `sourceUrl "${image.sourceUrl}" is not a Wikimedia Commons URL`,
      });
    }

    if (image.width <= 0 || image.height <= 0) {
      out.push({
        rule: 'image-dimensions-recorded',
        subject: b.id,
        detail: `image dimensions ${image.width}x${image.height} are not both positive`,
      });
    }

    const ids = buildingsByCommonsFile.get(image.commonsFile) ?? [];
    ids.push(b.id);
    buildingsByCommonsFile.set(image.commonsFile, ids);
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
