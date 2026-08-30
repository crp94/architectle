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
import { GalleryFrame } from '@/components/ui/GalleryFrame';
import { SpecimenLabel } from '@/components/ui/SpecimenLabel';
import { SectionRule } from '@/components/ui/SectionRule';
import { ImageGallery } from '@/components/archive/ImageGallery';

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
 * The post-game reveal (design spec §4.6 / v2 refocus §5): the full
 * photograph as a gallery print, an optional row of extra hand-picked
 * angles below it, a specimen-label fact strip, the trilingual dossier set
 * in the serif at a readable measure, an optional `ContextBlock` and a
 * quiet mono provenance line with the share button. Keeps the Task 11 prop
 * signature and the `data-testid="reveal"` root / `"reveal-message"` node
 * that `<GameBoard />` and its test suite depend on.
 */
export function Reveal({
  building, architect, solved, guessesUsed, comparisons, locale = 'en',
}: RevealProps) {
  const [copied, setCopied] = useState(false);

  const buildingName = building.name[locale] ?? building.name.en;
  const dossier = building.dossier[locale] ?? building.dossier.en;
  const facts = buildFacts(building, locale);
  const context = building.context;
  const extraImages = building.extraImages ?? [];
  const photoCredit = `${t(locale, 'provenancePhotographerLabel')}: ${building.image.photographer}`;

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
      try {
        await navigator.share({ text });
        return;
      } catch (err) {
        // A user dismissing the native share sheet rejects with an
        // AbortError — that's a deliberate cancellation, not a failure, so
        // it degrades silently (no fallback, no error state). Any other
        // rejection is a genuine failure (no share targets configured,
        // permission denied, etc.) and must not be swallowed silently —
        // fall through to the clipboard path below, same as when
        // `navigator.share` doesn't exist at all, so the player still gets
        // a working share action and its "Copied!" feedback.
        if (err instanceof Error && err.name === 'AbortError') return;
      }
    }
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    }
  }

  return (
    <section data-testid="reveal" aria-live="polite" className="flex flex-col gap-8 p-4 md:p-8">
      <div className="flex flex-col gap-1">
        <p
          className="text-xs uppercase tracking-[0.2em] text-accent"
          style={{ fontFamily: theme.type.ui }}
        >
          {t(locale, 'revealArchitect')}
          {' · '}
          {solved ? t(locale, 'winTitle') : t(locale, 'lossTitle')}
        </p>
        <h2
          className="text-3xl leading-none md:text-5xl"
          style={{ fontFamily: theme.type.display }}
        >
          {architect.name}
        </h2>
        <p
          className="text-xs uppercase tracking-wide opacity-70"
          style={{ fontFamily: theme.type.ui }}
        >
          {architectSpan(architect)}
          {' · '}
          {architectMovementLabel(architect, locale)}
        </p>
        <p data-testid="reveal-message" className="text-sm" style={{ fontFamily: theme.type.body }}>
          {solved
            ? t(locale, 'winMessage', { n: guessesUsed ?? comparisons.length, total: MAX_GUESSES })
            : t(locale, 'lossMessage', { name: architect.name })}
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
        <GalleryFrame
          caption={`${buildingName} · ${photoCredit}`}
          width={building.image.width}
          height={building.image.height}
        >
          <Image
            data-testid="reveal-photo"
            src={`/buildings/${building.id}.avif`}
            alt={buildingName}
            width={building.image.width}
            height={building.image.height}
            sizes="(min-width: 768px) 60vw, 100vw"
            style={{ width: '100%', height: 'auto' }}
            // The reveal's hero is the round's answer at full resolution —
            // the first thing the player looks at once it mounts, so it
            // skips lazy loading (SEO/perf pass, spec §7).
            priority
          />
        </GalleryFrame>

        {extraImages.length > 0 && (
          <div data-testid="reveal-extra-images">
            <ImageGallery
              buildingId={building.id}
              buildingName={buildingName}
              images={extraImages}
              locale={locale}
            />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-10">
        <div className="flex flex-col gap-4 md:col-span-2">
          <SectionRule label={t(locale, 'revealDossier')} />
          <div
            data-testid="reveal-dossier"
            className="max-w-[70ch] text-sm leading-relaxed"
            style={{ fontFamily: theme.type.body }}
          >
            <p>{dossier}</p>
          </div>

          {context && (
            <div data-testid="reveal-context" className="flex flex-col gap-3">
              <SectionRule label={t(locale, 'revealContext')} />
              <p className="max-w-[70ch] text-sm leading-relaxed" style={{ fontFamily: theme.type.body }}>
                {context.body[locale] ?? context.body.en}
              </p>
              <ul
                data-testid="reveal-context-sources"
                className="flex flex-col gap-1 text-xs"
                style={{ fontFamily: theme.type.mono }}
              >
                {context.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noreferrer" className="text-accent underline">
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3 md:col-span-1">
          {facts.map((fact) => (
            <div key={fact.key} data-testid={`reveal-fact-${fact.key}`}>
              <SpecimenLabel label={fact.label} value={fact.value} />
            </div>
          ))}
        </div>
      </div>

      <SectionRule />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
          className="bg-ink px-5 py-2 text-xs uppercase tracking-wide text-paper"
          style={{ fontFamily: theme.type.ui }}
        >
          {copied ? t(locale, 'shareCopied') : t(locale, 'shareButton')}
        </button>
      </div>
    </section>
  );
}
