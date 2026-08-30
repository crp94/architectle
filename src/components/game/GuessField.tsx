'use client';

import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { featuredRoster } from '@/lib/pool';
import type { Architect } from '@/types/architect';
import { t, type Locale } from '@/lib/i18n';
import { theme } from '@/lib/theme';
import { architectDescriptor, architectSpan } from '@/lib/facts';

export type GuessFieldProps = {
  locale: Locale;
  onGuess: (architect: Architect) => void;
  guessedIds?: ReadonlySet<string>;
  disabled?: boolean;
};

const MAX_SUGGESTIONS = 6;

/**
 * Diacritic-folded, case-insensitive comparison key. NFD-decomposes and
 * strips combining marks so "Jeanneret" matches "Jeanneret" regardless of
 * how either string is authored, and so a plain-ASCII guess still matches
 * an accented roster name.
 */
function fold(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip combining accents (NFD diacritics)
    .toLowerCase()
    .trim();
}

function matches(architect: Architect, query: string): boolean {
  if (fold(architect.name).includes(query)) return true;
  return architect.alternativeNames.some((alt) => fold(alt).includes(query));
}

function resolve(architects: Architect[], input: string): Architect | undefined {
  const query = fold(input);
  if (!query) return undefined;
  return architects.find(
    (a) => fold(a.name) === query || a.alternativeNames.some((alt) => fold(alt) === query),
  );
}

/**
 * The only place the game refuses a player (design spec §4.3): guesses are
 * limited to `featuredRoster()` — the v2 hand-picked featured architects
 * actually referenced by a featured building (design spec §2), NOT the
 * full-pool `roster()` the archive uses — matched by a diacritic-folded
 * substring against the full name or any documented alternative name, so
 * "Le Corbusier" is reachable by typing "Jeanneret".
 */
export function GuessField({ locale, onGuess, guessedIds = new Set(), disabled = false }: GuessFieldProps) {
  const [value, setValue] = useState('');
  const [rejected, setRejected] = useState<string | null>(null);
  const architects = featuredRoster();
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions = useMemo(() => {
    const query = fold(value);
    if (!query) return [];
    return architects.filter((a) => !guessedIds.has(a.id) && matches(a, query)).slice(0, MAX_SUGGESTIONS);
  }, [architects, guessedIds, value]);

  function handleSelect(architect: Architect) {
    if (guessedIds.has(architect.id)) return;
    onGuess(architect);
    setValue('');
    setRejected(null);
    // Clearing `value` above unmounts the suggestion list (guarded by
    // `value.trim().length > 0` below), removing the just-activated
    // suggestion button from the DOM. Without an explicit refocus, a
    // keyboard/screen-reader user who activated that button would have
    // focus silently dropped to `document.body`.
    inputRef.current?.focus();
  }

  function handleSubmit(input: string) {
    const trimmed = input.trim();
    if (!trimmed) return;
    const match = resolve(architects, trimmed);
    if (match && !guessedIds.has(match.id)) {
      handleSelect(match);
    } else {
      setRejected(trimmed);
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!disabled) handleSubmit(value);
      }}
      className="flex flex-col gap-2"
    >
      <label htmlFor="architect-guess" className="sr-only">
        {t(locale, 'guessFieldLabel')}
      </label>
      <div className="flex gap-2">
        <input
          id="architect-guess"
          ref={inputRef}
          type="text"
          value={value}
          disabled={disabled}
          onChange={(e) => {
            setValue(e.target.value);
            setRejected(null);
          }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowDown' && suggestions.length > 0) {
              event.preventDefault();
              document.getElementById(`architect-suggestion-${suggestions[0].id}`)?.focus();
            }
          }}
          placeholder={t(locale, 'guessFieldPlaceholder')}
          autoComplete="off"
          className="min-w-0 flex-1 border border-frame-line bg-paper px-3 py-2 text-ink"
          style={{ borderWidth: theme.rule.hairline, fontFamily: theme.type.ui }}
        />
        <button
          type="submit"
          disabled={disabled}
          className="border bg-ink px-4 py-2 text-xs uppercase tracking-wide text-paper"
          style={{ borderWidth: theme.rule.hairline, borderColor: theme.color.ink, fontFamily: theme.type.ui }}
        >
          {t(locale, 'guessSubmit')}
        </button>
      </div>

      {value.trim().length > 0 && suggestions.length > 0 && (
        <ul
          role="listbox"
          aria-label={t(locale, 'guessFieldLabel')}
          className="flex flex-col border border-frame-line"
          style={{ borderWidth: theme.rule.hairline }}
        >
          {suggestions.map((a) => {
            // A single explicit aria-label reads as one clean sentence to
            // assistive tech ("Architect One, 1920–1990, Brutalism ·
            // Civic") instead of the incidental concatenation of the two
            // separately-styled visible lines below it.
            const descriptor = `${a.name}, ${architectSpan(a)}, ${architectDescriptor(a, locale)}`;
            return (
              <li key={a.id}>
                <button
                  id={`architect-suggestion-${a.id}`}
                  type="button"
                  onClick={() => handleSelect(a)}
                  onKeyDown={(event) => {
                    const index = suggestions.indexOf(a);
                    if (event.key === 'ArrowDown' && index < suggestions.length - 1) {
                      event.preventDefault();
                      document.getElementById(`architect-suggestion-${suggestions[index + 1].id}`)?.focus();
                    } else if (event.key === 'ArrowUp') {
                      event.preventDefault();
                      if (index === 0) inputRef.current?.focus();
                      else document.getElementById(`architect-suggestion-${suggestions[index - 1].id}`)?.focus();
                    }
                  }}
                  aria-label={descriptor}
                  className="flex w-full flex-col gap-0.5 border-b border-frame-line px-3 py-2 text-left last:border-b-0 hover:bg-paper-alt"
                  style={{ borderBottomWidth: theme.rule.hairline }}
                >
                  <span className="text-sm uppercase tracking-wide" style={{ fontFamily: theme.type.display }}>
                    {a.name}
                  </span>
                  <span
                    className="text-xs uppercase tracking-wide text-ink/60"
                    style={{ fontFamily: theme.type.ui }}
                  >
                    {architectSpan(a)} · {architectDescriptor(a, locale)}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {rejected && (
        <p role="alert" data-testid="roster-rejection" className="text-sm">
          {t(locale, 'rosterRejection', { name: rejected })}{' '}
          <Link href="/architects" className="underline">
            {t(locale, 'rosterRejectionLink')}
          </Link>
        </p>
      )}
    </form>
  );
}
