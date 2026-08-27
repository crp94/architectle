import type { ContextBlock, LocalizedString, Source } from '@/types/common';
import type { Pool, Violation } from './schema';

function hasProse(value: LocalizedString): boolean {
  return value.en.trim() !== '' || value.es.trim() !== '' || value.it.trim() !== '';
}

function checkContextSources(context: ContextBlock, subject: string, out: Violation[]): void {
  if (context.sources.length === 0) {
    out.push({
      rule: 'context-requires-source',
      subject,
      detail: `${subject} carries a ContextBlock with no sources`,
    });
  }
}

function checkSourcesForWikipediaLicense(sources: Source[], subject: string, out: Violation[]): void {
  for (const source of sources) {
    if (source.kind === 'wikipedia' && source.license === null) {
      out.push({
        rule: 'wikipedia-requires-license',
        subject,
        detail: `${subject} has a wikipedia Source (${source.url}) with license: null`,
      });
    }
  }
}

// A null wikidataId means the record cannot lean on Wikidata/Wikipedia's own
// verification for its facts, so it must carry independent corroboration
// instead. "Non-Wikidata/Wikipedia-derived" means Source.kind is neither
// 'wikidata' nor 'wikipedia' — 'publication' or 'institution' sources count,
// a wikipedia Source does not, however well-licensed.
const MIN_SOURCES_WHEN_WIKIDATA_NULL = 2;

function checkWikidataNullSources(
  wikidataId: string | null, sources: Source[], subject: string, out: Violation[],
): void {
  if (wikidataId !== null) return;
  const nonWikiCount = sources.filter((s) => s.kind !== 'wikidata' && s.kind !== 'wikipedia').length;
  if (nonWikiCount < MIN_SOURCES_WHEN_WIKIDATA_NULL) {
    out.push({
      rule: 'wikidata-null-needs-sources',
      subject,
      detail: `${subject} has wikidataId: null but only ${nonWikiCount} non-Wikidata/Wikipedia source(s); `
        + `at least ${MIN_SOURCES_WHEN_WIKIDATA_NULL} required`,
    });
  }
}

export function validateProvenance(pool: Pool): Violation[] {
  const out: Violation[] = [];

  for (const b of pool.buildings) {
    if (hasProse(b.dossier) && b.sources.length === 0) {
      out.push({
        rule: 'prose-requires-source',
        subject: b.id,
        detail: `${b.id} has dossier content but sources is empty`,
      });
    }
    if (b.context) checkContextSources(b.context, b.id, out);
    checkSourcesForWikipediaLicense(b.sources, b.id, out);
    if (b.context) checkSourcesForWikipediaLicense(b.context.sources, b.id, out);
    checkWikidataNullSources(b.wikidataId, b.sources, b.id, out);
  }

  for (const a of pool.architects) {
    if (a.context) checkContextSources(a.context, a.id, out);
    checkSourcesForWikipediaLicense(a.sources, a.id, out);
    if (a.context) checkSourcesForWikipediaLicense(a.context.sources, a.id, out);
    checkWikidataNullSources(a.wikidataId, a.sources, a.id, out);
  }

  return out;
}
