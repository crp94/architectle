'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Building } from '@/types/building';
import type { Architect } from '@/types/architect';
import type { Material, Typology } from '@/types/common';
import type { Comparison } from '@/lib/axes';
import { t, type Locale } from '@/lib/i18n';
import { theme } from '@/lib/theme';
import { shareText } from '@/lib/share';
import { puzzleNumber } from '@/lib/daily';
import { MOVEMENTS } from '@/data/movements';

const MAX_GUESSES = 6;

export type RevealProps = {
  building: Building;
  architect: Architect;
  solved: boolean;
  guessesUsed: number | null;
  comparisons: Comparison[];
  locale?: Locale;
};

const TYPOLOGY_KEY: Record<Typology, string> = {
  housing: 'typologyHousing',
  civic: 'typologyCivic',
  sacral: 'typologySacral',
  cultural: 'typologyCultural',
  commercial: 'typologyCommercial',
  industrial: 'typologyIndustrial',
  educational: 'typologyEducational',
  infrastructure: 'typologyInfrastructure',
  tower: 'typologyTower',
  domestic: 'typologyDomestic',
};

const MATERIAL_KEY: Record<Material, string> = {
  concrete: 'materialConcrete',
  brick: 'materialBrick',
  'steel-and-glass': 'materialSteelGlass',
  timber: 'materialTimber',
  stone: 'materialStone',
  earth: 'materialEarth',
  mixed: 'materialMixed',
};

/** Best-effort human label for the architect's dominant movement (design
 * spec §4.4's "unaffiliated never matches anything" carries over here: an
 * unaffiliated architect gets a plain label, never an invented one).
 * Movement names (`Movement.name` in src/data/movements.ts) are not
 * localized in the data — they're proper nouns treated the same across
 * locales, the same way "Brutalism" reads unchanged in en/es/it prose. */
function architectMovementLabel(architect: Architect, locale: Locale): string {
  if (architect.movements === 'unaffiliated') return t(locale, 'architectUnaffiliated');
  const primary = architect.movements.find((m) => m.primary) ?? architect.movements[0];
  if (!primary) return t(locale, 'architectUnaffiliated');
  return MOVEMENTS[primary.id]?.name ?? primary.id;
}

function architectSpan(architect: Architect): string {
  const born = architect.born ?? '?';
  const died = architect.died ?? '—';
  return `${born}–${died}`;
}

type FactCell = { key: string; label: string; value: string };

function buildFacts(building: Building, locale: Locale): FactCell[] {
  const completed = building.completed !== null ? String(building.completed) : '—';
  const location = `${building.location.city}, ${building.location.countryCode}`;
  const typology = t(locale, TYPOLOGY_KEY[building.typology]);
  const material = building.materials.map((m) => t(locale, MATERIAL_KEY[m])).join(' / ');
  return [
    { key: 'completed', label: t(locale, 'factCompleted'), value: completed },
    { key: 'location', label: t(locale, 'factLocation'), value: location },
    { key: 'typology', label: t(locale, 'factTypology'), value: typology },
    { key: 'material', label: t(locale, 'factMaterial'), value: material },
  ];
}

function provenanceLine(building: Building, locale: Locale): string {
  const wikidata = building.wikidataId
    ? `${t(locale, 'provenanceWikidataLabel')} ${building.wikidataId}`
    : t(locale, 'provenanceNoWikidata');
  const parts = [
    wikidata,
    `${t(locale, 'provenanceCommonsLabel')}: ${building.image.commonsFile}`,
    `${t(locale, 'provenancePhotographerLabel')}: ${building.image.photographer}`,
    `${t(locale, 'provenanceLicenseLabel')}: ${building.image.license}`,
  ];
  return parts.join(' · ');
}

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

