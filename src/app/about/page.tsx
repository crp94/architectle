import type { Metadata } from 'next';
import Link from 'next/link';
import { theme } from '@/lib/theme';
import { t, type Locale } from '@/lib/i18n';
import { localeHref, resolveLocale, type LocaleSearchParams } from '@/lib/locale';
import { LocaleSwitcher } from '@/components/game/LocaleSwitcher';
import { SectionRule } from '@/components/ui/SectionRule';
import { SITE_URL } from '@/lib/site';
import { ABOUT_SECTIONS, type AboutSection } from './content';

const ABOUT_URL = `${SITE_URL}/about`;

export async function generateMetadata({ searchParams }: { searchParams: Promise<LocaleSearchParams> }): Promise<Metadata> {
  const locale = resolveLocale((await searchParams).lang);
  const title = t(locale, 'navAbout');
  const description = t(locale, 'metaAboutDescription');
  return {
    title,
    description,
    alternates: { canonical: ABOUT_URL },
    openGraph: {
    title,
    description,
    url: ABOUT_URL,
    type: 'website',
    siteName: 'Architectle',
    locale: 'en_US',
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

function Section({ section, locale }: { section: AboutSection; locale: Locale }) {
  const [firstParagraph, ...rest] = section.paragraphs;
  return (
    <section id={section.id} className="flex flex-col gap-4">
      <SectionRule />
      <h2
        className="text-xl leading-tight md:text-2xl"
        style={{ fontFamily: theme.type.display }}
      >
        {section.heading[locale] ?? section.heading.en}
      </h2>

      {firstParagraph && (
        <p className="max-w-[70ch] text-sm leading-relaxed" style={{ fontFamily: theme.type.body }}>
          {firstParagraph[locale] ?? firstParagraph.en}
        </p>
      )}


      {rest.map((paragraph, i) => (
        // Paragraphs never reorder within a section, so index keys are stable.
        <p key={i} className="max-w-[70ch] text-sm leading-relaxed" style={{ fontFamily: theme.type.body }}>
          {paragraph[locale] ?? paragraph.en}
        </p>
      ))}
    </section>
  );
}

export default async function AboutPage({ searchParams }: { searchParams: Promise<LocaleSearchParams> }) {
  const params = await searchParams;
  const LOCALE = resolveLocale(params.lang);
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
          href={localeHref('/', LOCALE)}
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
        <LocaleSwitcher locale={LOCALE} pathname="/about" searchParams={params} />
      </div>

      <div className="flex flex-col gap-10 px-6 py-8 md:px-10 md:py-10">
        {ABOUT_SECTIONS.map((section) => (
          <Section key={section.id} section={section} locale={LOCALE} />
        ))}
      </div>
    </main>
  );
}
