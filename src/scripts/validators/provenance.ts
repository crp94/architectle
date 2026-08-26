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
  }

  for (const a of pool.architects) {
    if (a.context) checkContextSources(a.context, a.id, out);
    checkSourcesForWikipediaLicense(a.sources, a.id, out);
    if (a.context) checkSourcesForWikipediaLicense(a.context.sources, a.id, out);
  }

  return out;
}
