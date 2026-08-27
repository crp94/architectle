import type { Metadata } from 'next';
import Link from 'next/link';
import { theme } from '@/lib/theme';
import { t, type Locale } from '@/lib/i18n';
import { ABOUT_SECTIONS, type AboutSection, type CoverageGateRow } from './content';

// No dynamic locale routing exists yet anywhere in the app (src/app/page.tsx
// hardcodes the same constant) — this is the same convention, not a
// regression. Every string this page renders is nonetheless authored
// trilingually in ./content.ts so switching this constant, or threading a
// real locale through once routing exists, is a one-line change here.
const LOCALE: Locale = 'en';

export const metadata: Metadata = {
  title: 'About — Architectle',
  description:
    'What Architectle is, where its data comes from, and the honest limitations of a hand-curated pool of buildings and architects.',
};

function GateRow({ row }: { row: CoverageGateRow }) {
  return (
    <div className="flex flex-col gap-1 bg-paper p-3">
      <dt
        className="text-[10px] uppercase tracking-wide opacity-60"
        style={{ fontFamily: theme.type.mono }}
      >
        {row.label[LOCALE] ?? row.label.en}
      </dt>
      <dd className="flex items-baseline gap-2 text-sm uppercase" style={{ fontFamily: theme.type.display }}>
        <span>{row.target}</span>
        <span className="text-xs opacity-60" style={{ fontFamily: theme.type.mono }}>
          / {row.actual}
        </span>
      </dd>
    </div>
  );
}

function Section({ section }: { section: AboutSection }) {
  const [firstParagraph, ...rest] = section.paragraphs;
  return (
    <section
      id={section.id}
      className="flex flex-col gap-4 border-t-2 border-ink pt-6"
    >
      <h2
        className="text-xl uppercase leading-tight md:text-2xl"
        style={{ fontFamily: theme.type.display }}
      >
        {section.heading[LOCALE] ?? section.heading.en}
      </h2>

      {firstParagraph && (
        <p className="max-w-[70ch] text-sm leading-relaxed" style={{ fontFamily: theme.type.body }}>
          {firstParagraph[LOCALE] ?? firstParagraph.en}
        </p>
      )}

      {section.gates && (
        <dl className="grid grid-cols-2 gap-px border-2 border-ink bg-ink sm:grid-cols-3 lg:grid-cols-4">
          {section.gates.map((row) => (
            <GateRow key={row.id} row={row} />
          ))}
        </dl>
      )}

      {rest.map((paragraph, i) => (
        // Paragraphs never reorder within a section, so index keys are stable.
        <p key={i} className="max-w-[70ch] text-sm leading-relaxed" style={{ fontFamily: theme.type.body }}>
          {paragraph[LOCALE] ?? paragraph.en}
        </p>
      ))}
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col bg-paper">
      <div
        className="flex flex-col items-start gap-2 border-ink bg-accent px-8 py-6"
        style={{
          borderBottomWidth: theme.rule.thick,
          borderStyle: 'solid',
          fontFamily: theme.type.display,
        }}
      >
        <Link
          href="/"
          className="text-xs uppercase tracking-wide text-ink no-underline"
          style={{ fontFamily: theme.type.mono }}
        >
          {t(LOCALE, 'appTitle')}
        </Link>
        <h1 className="text-3xl uppercase tracking-tight text-ink md:text-4xl">
          {t(LOCALE, 'navAbout')}
        </h1>
        <p
          className="text-sm normal-case tracking-normal text-ink"
          style={{ fontFamily: theme.type.body }}
        >
          {t(LOCALE, 'appTagline')}
        </p>
      </div>

      <div className="flex flex-col gap-8 px-6 py-8 md:px-10 md:py-10">
        {ABOUT_SECTIONS.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </main>
  );
}
