'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Building } from '@/types/building';
import type { Architect } from '@/types/architect';
import type { Comparison } from '@/lib/axes';
import type { Stats } from '@/lib/storage';
import { t, type Locale } from '@/lib/i18n';
import { theme } from '@/lib/theme';
import { shareText } from '@/lib/share';
import { displayPuzzleNumber } from '@/lib/daily';
import {
  architectMovementLabel, architectSpan, buildFacts, provenanceLine, statsSummary,
} from '@/lib/facts';
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
  /**
   * The daily round's up-to-date persistent stats (src/lib/storage.ts's
   * `Stats` — played/wins/streak/maxStreak/distribution, kept independently
   * of any single day's `GameState`). Omit entirely for unlimited-mode
   * rounds, which never track daily stats at all: the stats block (and the
   * share text's streak line, which reads `stats.streak`) only renders when
   * this is provided, rather than showing a misleading all-zero block for a
   * mode with no real streak.
   */
  stats?: Stats;
  unlimitedHref?: string;
  onPlayAgain?: () => void;
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
// Which of the two clipboard-writing buttons last resolved, and how
// (codereview findings #4/#10): the two separate `shareCopied`/`copyCopied`
// booleans, and their duplicated "did the write throw?" guard blocks, are
// collapsed into one state driven by a single shared helper below.
type CopyState = 'share' | 'copy' | 'failed-share' | 'failed-copy' | null;

export function Reveal({
  building, architect, solved, guessesUsed, comparisons, locale = 'en', stats, unlimitedHref = '/?mode=unlimited&lang=en', onPlayAgain,
}: RevealProps) {
  const [copied, setCopied] = useState<CopyState>(null);

  const buildingName = building.name[locale] ?? building.name.en;
  const dossier = building.dossier[locale] ?? building.dossier.en;
  const facts = buildFacts(building, locale);
  const context = building.context;
  const extraImages = building.extraImages ?? [];
  const photoCredit = `${t(locale, 'provenancePhotographerLabel')}: ${building.image.photographer}`;

  // Computed once per render and reused by both the visible share-preview
  // block below and the actual share/copy actions, so a player previewing
  // the text sees byte-for-byte what actually gets shared. shareText's own
  // signature has no architect/building parameter — it structurally cannot
  // leak the answer (see src/lib/share.ts) — and `stats` is optional, so
  // an unlimited-mode round (no stats prop) simply omits the streak line.
  const shareTextValue = shareText({
    puzzleNumber: displayPuzzleNumber(new Date()),
    guessesUsed,
    comparisons,
    locale,
    streak: stats?.streak,
  });
  const summary = stats ? statsSummary(stats) : null;

  // Shared by both handleShare's fallback path and the explicit Copy button
  // below (codereview finding #4): writes `shareTextValue` to the clipboard
  // and sets `copied` to the success or failure variant for `kind`. Wrapped
  // in try/catch — `navigator.clipboard.writeText` rejects for real (denied
  // permission, an insecure context, a browser quirk), and an unhandled
  // rejection there must never reach the console, let alone crash anything.
  // Missing API support (`navigator.clipboard?.writeText` absent entirely)
  // degrades the same way a genuine write failure does: a visible "couldn't
  // copy" state, not silence.
  async function copyToClipboard(kind: 'share' | 'copy') {
    try {
      if (typeof navigator === 'undefined' || !navigator.clipboard?.writeText) {
        setCopied(kind === 'share' ? 'failed-share' : 'failed-copy');
        return;
      }
      await navigator.clipboard.writeText(shareTextValue);
      setCopied(kind);
    } catch {
      setCopied(kind === 'share' ? 'failed-share' : 'failed-copy');
    }
  }

  async function handleShare() {
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share({ text: shareTextValue });
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
    await copyToClipboard('share');
  }

  // A second, explicit, always-visible copy affordance (spec: "many
  // desktop users never get navigator.share"): the Share button above
  // already falls back to the clipboard when the Web Share API doesn't
  // exist, but that fallback is invisible until clicked — a plainly
  // labelled "Copy" button next to it means a desktop player never has to
  // guess what "Share" will actually do on their machine.
  async function handleCopy() {
    await copyToClipboard('copy');
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

      {summary && (
        <>
          <SectionRule label={t(locale, 'statsTitle')} />
          <div data-testid="reveal-stats" className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-3">
              <SpecimenLabel label={t(locale, 'statsPlayed')} value={String(summary.played)} />
              <SpecimenLabel label={t(locale, 'statsWinPct')} value={summary.winPct} />
              <SpecimenLabel label={t(locale, 'statsStreak')} value={String(summary.streak)} />
              <SpecimenLabel label={t(locale, 'statsMaxStreak')} value={String(summary.maxStreak)} />
            </div>
            <div className="flex flex-col gap-1">
              <p
                className="text-[10px] uppercase tracking-[0.2em] text-ink/70"
                style={{ fontFamily: theme.type.ui }}
              >
                {t(locale, 'statsDistribution')}
              </p>
              {summary.distribution.map((bar) => (
                <div
                  key={bar.guesses}
                  data-testid={`reveal-stats-distribution-${bar.guesses}`}
                  className="flex items-center gap-2 text-xs"
                  style={{ fontFamily: theme.type.mono }}
                >
                  <span className="w-3 shrink-0">{bar.guesses}</span>
                  <span className="h-3 flex-1 bg-mat">
                    <span
                      className="block h-full bg-ink"
                      style={{ width: `${bar.pct}%` }}
                    />
                  </span>
                  <span className="w-6 shrink-0 text-right">{bar.count}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <SectionRule label={t(locale, 'sharePreviewHeading')} />
      <div className="flex flex-col gap-2">
        <pre
          data-testid="reveal-share-preview"
          className="whitespace-pre-wrap break-words px-3 py-2 text-xs leading-relaxed"
          style={{
            fontFamily: theme.type.mono,
            backgroundColor: theme.color.mat,
            borderWidth: theme.rule.hairline,
            borderStyle: 'solid',
            borderColor: theme.color.frameLine,
          }}
        >
          {shareTextValue}
        </pre>
        <p
          data-testid="reveal-share-preview-note"
          className="text-[10px] uppercase tracking-[0.15em] text-ink/70"
          style={{ fontFamily: theme.type.ui }}
        >
          {t(locale, 'sharePreviewNote')}
        </p>
      </div>

      <SectionRule />
      {onPlayAgain ? (
        <button
          type="button"
          onClick={onPlayAgain}
          className="self-start bg-accent px-5 py-3 text-xs uppercase tracking-wide text-paper"
          style={{ fontFamily: theme.type.ui }}
        >
          {t(locale, 'playAgain')}
        </button>
      ) : (
        <Link
          href={unlimitedHref}
          className="self-start bg-accent px-5 py-3 text-xs uppercase tracking-wide text-paper"
          style={{ fontFamily: theme.type.ui }}
        >
          {t(locale, 'playAgain')}
        </Link>
      )}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p
          data-testid="reveal-provenance"
          className="text-xs opacity-70"
          style={{ fontFamily: theme.type.mono }}
        >
          {provenanceLine(building, locale)}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            data-testid="reveal-share"
            onClick={handleShare}
            className="bg-ink px-5 py-2 text-xs uppercase tracking-wide text-paper"
            style={{ fontFamily: theme.type.ui }}
          >
            {copied === 'share' && t(locale, 'shareCopied')}
            {copied === 'failed-share' && t(locale, 'shareCopyFailed')}
            {copied !== 'share' && copied !== 'failed-share' && t(locale, 'shareButton')}
          </button>
          <button
            type="button"
            data-testid="reveal-copy"
            onClick={handleCopy}
            className="border px-5 py-2 text-xs uppercase tracking-wide text-ink"
            style={{ fontFamily: theme.type.ui, borderColor: theme.color.frameLine, borderWidth: theme.rule.hairline }}
          >
            {copied === 'copy' && t(locale, 'shareCopied')}
            {copied === 'failed-copy' && t(locale, 'shareCopyFailed')}
            {copied !== 'copy' && copied !== 'failed-copy' && t(locale, 'shareCopyButton')}
          </button>
        </div>
      </div>
    </section>
  );
}
