import Link from 'next/link';
import { theme } from '@/lib/theme';

export type LinkItem = { href: string; label: string; sub?: string };

/** A generic list of cross-links (an architect's movements, a movement's
 * architects, an architect's contemporaries) — one label, one href, an
 * optional secondary line of context. */
export function LinkList({ items, testId }: { items: LinkItem[]; testId?: string }) {
  return (
    <ul data-testid={testId} className="flex flex-col gap-1">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="text-sm underline" style={{ fontFamily: theme.type.body }}>
            {item.label}
          </Link>
          {item.sub && (
            <span className="ml-2 text-xs opacity-60" style={{ fontFamily: theme.type.mono }}>
              {item.sub}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
