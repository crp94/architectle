import Image from 'next/image';
import Link from 'next/link';
import type { Building } from '@/types/building';
import type { Locale } from '@/lib/i18n';
import { localeHref } from '@/lib/locale';
import { theme } from '@/lib/theme';
import { GalleryFrame } from '@/components/ui/GalleryFrame';
import { Provenance } from './Provenance';

/**
 * One building tile: a gallery-framed photograph, linked name, and its
 * provenance line (which itself carries the licensed image credit — see
 * Provenance.tsx). Used on `/buildings` and wherever a cross-linked list of
 * buildings shows up (an architect's works, a movement's buildings).
 */
export function BuildingCard({ building, locale }: { building: Building; locale: Locale }) {
  const name = building.name[locale] ?? building.name.en;
  return (
    <li className="flex flex-col gap-2">
      <Link href={localeHref(`/building/${building.id}`, locale)} className="flex flex-col gap-2">
        <GalleryFrame width={building.image.width} height={building.image.height} className="p-2 sm:p-3">
          <Image
            src={`/buildings/${building.id}.avif`}
            alt={name}
            width={building.image.width}
            height={building.image.height}
            sizes="(min-width: 768px) 25vw, 50vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </GalleryFrame>
        <span
          className="text-sm underline"
          style={{ fontFamily: theme.type.display }}
        >
          {name}
        </span>
      </Link>
      <Provenance building={building} locale={locale} />
    </li>
  );
}
