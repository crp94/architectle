'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Building } from '@/types/building';
import type { Architect } from '@/types/architect';
import type { Comparison } from '@/lib/axes';
import { t, type Locale } from '@/lib/i18n';
import { theme } from '@/lib/theme';
import { shareText } from '@/lib/share';
import { puzzleNumber } from '@/lib/daily';
import { architectMovementLabel, architectSpan, buildFacts, provenanceLine } from '@/lib/facts';

const MAX_GUESSES = 6;

export type RevealProps = {
  building: Building;
  architect: Architect;
  solved: boolean;
  guessesUsed: number | null;
  comparisons: Comparison[];
  locale?: Locale;
};

/**
 * The post-game reveal (design spec §4.6 / task-12-brief.md): the full
 * photograph, the architect's name as headline, a four-cell fact strip, the
 * trilingual dossier, an optional `ContextBlock`, a mono provenance line and
 * a share button. Keeps the Task 11 prop signature and `data-testid="reveal"`
 * root that `<GameBoard />` and its test suite depend on.
 */
export function Reveal({
  building, architect, solved, guessesUsed, comparisons, locale = 'en',
}: RevealProps) {
  const [copied, setCopied] = useState(false);

  const buildingName = building.name[locale] ?? building.name.en;
  const dossier = building.dossier[locale] ?? building.dossier.en;
  const facts = buildFacts(building, locale);
  const context = building.context;

  async function handleShare() {
    // shareText's own signature has no architect/building parameter — it
    // structurally cannot leak the answer (see src/lib/share.ts). Nothing
    // below concatenates the name back in.
    const text = shareText({
      puzzleNumber: puzzleNumber(new Date()),
      guessesUsed,
      comparisons,
      locale,
    });

    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      await navigator.share({ text });
      return;
    }
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    }
  }

  return (
    <section data-testid="reveal" aria-live="polite" className="flex flex-col gap-6 p-4 md:p-8">
      <div className="flex flex-col gap-1">
        <p
          className="text-xs uppercase tracking-wide text-warn"
          style={{ fontFamily: theme.type.mono }}
        >
          {t(locale, 'revealArchitect')}
          {' · '}
          {solved ? t(locale, 'winTitle') : t(locale, 'lossTitle')}
        </p>
        <h2
          className="text-3xl uppercase leading-none md:text-4xl"
          style={{ fontFamily: theme.type.display }}
        >
          {architect.name}
        </h2>
        <p
          className="text-xs uppercase tracking-wide opacity-70"
          style={{ fontFamily: theme.type.mono }}
        >
          {architectSpan(architect)}
          {' · '}
          {architectMovementLabel(architect, locale)}
        </p>
        <p data-testid="reveal-message" className="text-sm">
          {solved
            ? t(locale, 'winMessage', { n: guessesUsed ?? comparisons.length, total: MAX_GUESSES })
            : t(locale, 'lossMessage', { name: architect.name })}
        </p>
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="md:w-1/2">
          <div className="relative w-full" style={{ boxShadow: theme.shadow.hard }}>
            <Image
              data-testid="reveal-photo"
              src={`/buildings/${building.id}.avif`}
              alt={buildingName}
              width={building.image.width}
              height={building.image.height}
              sizes="(min-width: 768px) 50vw, 100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <p
            data-testid="reveal-building"
            className="mt-2 text-sm uppercase"
            style={{ fontFamily: theme.type.display }}
          >
            {buildingName}
          </p>
        </div>

        <div className="flex flex-col gap-4 md:w-1/2">
          <dl className="grid grid-cols-2 gap-px border-2 border-ink bg-ink sm:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.key} data-testid={`reveal-fact-${fact.key}`} className="bg-paper p-2">
                <dt
                  className="text-[10px] uppercase tracking-wide opacity-60"
                  style={{ fontFamily: theme.type.mono }}
                >
                  {fact.label}
                </dt>
                <dd
                  className="mt-1 text-sm uppercase"
                  style={{ fontFamily: theme.type.display }}
                >
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <div
            data-testid="reveal-dossier"
            className="text-sm leading-relaxed sm:columns-2 sm:gap-6"
            style={{ fontFamily: theme.type.body }}
          >
            <p>{dossier}</p>
          </div>

          {context && (
            <div data-testid="reveal-context" className="flex flex-col gap-2 border-t-2 border-ink pt-3">
              <h3
                className="text-xs uppercase tracking-wide"
                style={{ fontFamily: theme.type.mono }}
              >
                {t(locale, 'revealContext')}
              </h3>
              <p className="text-sm leading-relaxed" style={{ fontFamily: theme.type.body }}>
                {context.body[locale] ?? context.body.en}
              </p>
              <ul
                data-testid="reveal-context-sources"
                className="flex flex-col gap-1 text-xs"
                style={{ fontFamily: theme.type.mono }}
              >
                {context.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noreferrer" className="underline">
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t-2 border-ink pt-3 sm:flex-row sm:items-center sm:justify-between">
        <p
          data-testid="reveal-provenance"
          className="text-xs opacity-70"
          style={{ fontFamily: theme.type.mono }}
        >
          {provenanceLine(building, locale)}
        </p>
        <button
          type="button"
          data-testid="reveal-share"
          onClick={handleShare}
          className="border-2 border-ink bg-ink px-4 py-2 text-xs uppercase tracking-wide text-paper"
          style={{ fontFamily: theme.type.mono }}
        >
          {copied ? t(locale, 'shareCopied') : t(locale, 'shareButton')}
        </button>
      </div>
    </section>
  );
}

