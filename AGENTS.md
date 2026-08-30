<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Architectle — curation contract

This project's real product is trust in the data as much as the game itself.
The rules below are not style preferences — each one exists because it is
the fix for a defect that actually happened during curation (see
`.superpowers/sdd/2026-08-26-architectle/progress.md` for v1's full ledger
and `.superpowers/sdd/2026-08-30-architectle-v2/progress.md` for v2's, plus
the design specs and plans under `docs/superpowers/specs/` and
`docs/superpowers/plans/`, for the complete findings record — `/about` in
the running app is deliberately reduced to what-this-is/how-to-play and no
longer carries this; README.md's Data status section carries the short,
reader-facing account instead). Follow them on every change that touches
`src/scripts/curated/**`, the validators, or any UI that renders curated
data.

## Licence verification

Every `ImageRecord.license` is read off the **live, rendered** Wikimedia
Commons or Flickr file page — never off the Commons API's `extmetadata`
field. That field is not authoritative: during this project's own curation
it reported at least two CC-licensed files as "Public domain" when the
rendered licence box clearly read otherwise. A pipeline or a curator that
trusts `extmetadata` records a wrong licence while believing it verified
one. If you write or touch anything that reads a Commons licence
programmatically, it must fetch and parse the rendered page, not the API's
metadata.

Freedom of Panorama covers exteriors, not interiors, anywhere. Any building
whose architect died within the last 70 years, or is still living, may be
represented only by an exterior photograph with `detailRect` framed on
exterior fabric — an interior photo of in-copyright architecture is a
derivative work no photographer's CC licence can clear. Buildings out of
copyright by age are unaffected.

A Commons username (not a legal name) is a complete, valid photographer
credit — do not reject or "fix" one. The rule fails only on an empty
`photographer` field or a placeholder that credits nobody.

## Provenance rule

Every prose claim needs a citation. `validateProvenance`
(`src/scripts/validators/provenance.ts`) is a hard gate: any `dossier`,
`portrait` or `ContextBlock` with content and zero `sources` fails
(`prose-requires-source`, `context-requires-source`). A `wikipedia`-kind
`Source` must carry a `license`, never `null`
(`wikipedia-requires-license`). Unsourced assertion is a validation failure,
exactly like a malformed date — never soften a claim to dodge the rule
instead of finding the source.

`wikidataId` is nullable on both `Building` and `Architect`, deliberately —
requiring a Wikidata Q-number on every record reproduces the same coverage
bias this pool exists to correct (Wikidata has systematically thinner
coverage of buildings by under-represented architects). A record with
`wikidataId: null` must carry at least two independent, non-Wikidata,
non-Wikipedia sources instead (`wikidata-null-needs-sources`). Do not make
Wikidata coverage a gate for inclusion.

## The `unaffiliated` rule

`unaffiliated` is a real, single value for `Architect.movements`, not a
missing value. It never matches anything in `compareMovement` — not another
architect who is also `unaffiliated` — because the absence of a label is not
itself a shared label. Never invent or default a movement tag just to give
an architect a comparison result; many real architects reject movement
affiliation outright, and the taxonomy is contested by nature. If a movement
label is uncertain, leave the architect `unaffiliated` and say so in prose,
rather than picking one to tidy the mechanic.

## Coverage reporting, and the gates that remain hard

Since the v2 refocus (spec `docs/superpowers/specs/2026-08-30-architectle-v2-
refocus-design.md` §3), the representativeness targets in
`src/scripts/validators/coverage.ts` — era distribution, geography
floors/ceilings, the ≥20% women-or-non-binary share, ≥60% canon-tier — are
**report-only**: they print in `data:curate`'s coverage table (tagged
`info`) but no longer fail the build. The curator dropped them as gates
deliberately, trading representativeness for guessability in the featured
game roster; the full archive remains. Rules that stay HARD: max **6**
buildings credited to one architect, `featured-architect-exists`,
`featured-min-buildings` (≥2 per featured architect), and every
correctness rule (licence, provenance, schema, id-uniqueness, chronology,
duplicate-site, image dimensions). Never pad any number with a fabricated
or thinly-sourced fact — the fix for a shortfall is more real research,
never invented content. Run `npm run data:curate` and read the coverage
summary table it prints — that live output, not `/about` (which no longer
republishes it), is the current measured numbers against each target and
their margins.

Watch specifically for the attribution-pressure failure mode: a gender quota
combined with this game's single-`architectId`-per-building answer key can
create real pressure to credit the woman in a symmetric partnership as sole
architect. Don't game it. `architectId` follows the record's conventional
credit; `coArchitects` (optional, display-only, never read by any
comparison/selection/answer-key code) carries the rest — even when
populating it honestly lowers the measured gender percentage.

## Living-person rule

Where a living architect faces a contested allegation, leave them out of the
pool rather than adjudicate the allegation. This is a blanket policy with no
exceptions and no case-by-case judgement calls — do not add a living,
allegation-contested architect on the theory that the allegation seems
weak, and do not write about specific instances of this rule in any
user-facing copy.

Historical political content is the opposite: documented complicity,
colonial administration, forced labour or state ideology in a building's or
architect's own record stays in the entry, sourced and stated plainly, not
hidden or smoothed over. The distinction is documented-history-about-the-dead
versus contested-allegations-about-the-living, not political content in
general.

## No hardcoded hex, no hardcoded string

Colours come from `theme.color.*` in `src/lib/theme.ts` — a literal hex
value in a component is a review failure. Player-facing strings come from
`t(locale, key, params?)` in `src/lib/i18n.ts` — a hardcoded English string
in a component is a review failure. Long-form, one-off, page-owned prose
(e.g. `src/app/about/content.ts`) may instead be structured as
`LocalizedString`-shaped data local to its route, the same shape a curated
dossier uses, rather than added to the shared string table — that is a
deliberate exception for bulk prose, not licence to hardcode UI chrome.

## Definition of done

`npm run check` (`data:curate && lint && typecheck && test`) is the
definition of done for any change. If the change touches UI that renders the
pool, also run the Playwright suite (`npm run e2e`) before calling it
finished. A change that passes `check` but reintroduces a defect this
contract exists to prevent is not done.

