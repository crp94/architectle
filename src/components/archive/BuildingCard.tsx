import Image from 'next/image';
import Link from 'next/link';
import type { Building } from '@/types/building';
import type { Locale } from '@/lib/i18n';
import { theme } from '@/lib/theme';
import { Provenance } from './Provenance';

/**
 * One building tile: photograph, linked name, and its provenance line
 * (which itself carries the licensed image credit — see Provenance.tsx).
 * Used on `/buildings` and wherever a cross-linked list of buildings shows
 * up (an architect's works, a movement's buildings).
 */
export function BuildingCard({ building, locale }: { building: Building; locale: Locale }) {
  const name = building.name[locale] ?? building.name.en;
  return (
    <li className="flex flex-col gap-2 border-2 border-ink bg-paper p-2">
      <Link href={`/building/${building.id}`} className="flex flex-col gap-2">
        <div className="relative w-full" style={{ boxShadow: theme.shadow.hard }}>
          <Image
            src={`/buildings/${building.id}.avif`}
            alt={name}
            width={building.image.width}
            height={building.image.height}
            sizes="(min-width: 768px) 25vw, 50vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <span
          className="text-sm uppercase underline"
          style={{ fontFamily: theme.type.display }}
        >
          {name}
        </span>
      </Link>
      <Provenance building={building} locale={locale} />
    </li>
  );
}
