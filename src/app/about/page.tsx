import type { Metadata } from 'next';
import Link from 'next/link';
import { theme } from '@/lib/theme';
import { t, type Locale } from '@/lib/i18n';
import { SectionRule } from '@/components/ui/SectionRule';
import { SpecimenLabel } from '@/components/ui/SpecimenLabel';
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
    <SpecimenLabel
      label={row.label[LOCALE] ?? row.label.en}
      value={`${row.actual} (${row.target})`}
    />
  );
}

function Section({ section }: { section: AboutSection }) {
  const [firstParagraph, ...rest] = section.paragraphs;
  return (
    <section id={section.id} className="flex flex-col gap-4">
      <SectionRule />
      <h2
        className="text-xl leading-tight md:text-2xl"
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
        <div className="flex flex-wrap gap-3">
          {section.gates.map((row) => (
            <GateRow key={row.id} row={row} />
          ))}
        </div>
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
        className="flex flex-col items-start gap-2 bg-mat px-6 py-8 md:px-10 md:py-10"
        style={{
          borderBottomWidth: theme.rule.hairline,
          borderStyle: 'solid',
          borderBottomColor: theme.color.frameLine,
        }}
      >
        <Link
          href="/"
          className="text-xs uppercase tracking-[0.2em] text-accent no-underline"
          style={{ fontFamily: theme.type.ui }}
        >
          {t(LOCALE, 'appTitle')}
        </Link>
        <h1 className="text-3xl leading-tight text-ink md:text-4xl" style={{ fontFamily: theme.type.display }}>
          {t(LOCALE, 'navAbout')}
        </h1>
        <p
          className="text-sm text-ink"
          style={{ fontFamily: theme.type.body }}
        >
          {t(LOCALE, 'appTagline')}
        </p>
      </div>

      <div className="flex flex-col gap-10 px-6 py-8 md:px-10 md:py-10">
        {ABOUT_SECTIONS.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </main>
  );
}
