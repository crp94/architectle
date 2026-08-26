# Architectle — Design

**Date:** 2026-08-26
**Status:** Approved design, pre-implementation
**Author:** Carlos Rodríguez-Pardo (with Claude)

---

## 1. Summary

Architectle is a daily deduction game: you see a tight crop of a building and name
the architect. Six guesses. Each wrong guess widens the frame *and* reports how your
architect relates to the target across four axes. Afterwards you get the building's
dossier, and the full catalogue is a browsable, indexable archive.

It is a sibling of Cityle, Climatle, GeoFauna, P-hackle and Partido a Partido, and
follows their conventions: daily plus unlimited, three languages, MIT, deployed on
Vercel with zero secrets required to build.

---

## 2. Goals and non-goals

**Goals**

- A daily puzzle that is winnable by a curious non-specialist and interesting to an
  architect.
- Real educational payload: after every round you know something you did not know.
- Coverage that is honest about the history of architecture rather than about the
  history of Wikidata.
- An indexable archive that answers the query *"who designed X"* better than the
  current results do.
- Every fact traceable to an open source. Every image openly licensed.

**Non-goals**

- Not a scientific dataset. It is a game, and the about page says so.
- No accounts, no login, no server-side player state.
- No dark mode. The concrete palette is the identity.
- No monetisation, no ads, no tracking beyond Vercel Analytics and Speed Insights.

---

## 3. Visual identity

**Concrete / editorial brutalist, photo-led.**

- Palette: warm concrete `#d9d6d0` ground, near-black `#141414` ink, a single
  acid-yellow `#e8dc50` for partial matches, a single red `#d4321e` for accents and
  kickers. Defined once in `src/lib/theme.ts`; a hardcoded hex in a component is a
  review failure.
- Type: a heavy grotesque display face for headlines, numerals and the fact strip;
  a serif for body copy at a readable measure. Display type is *rationed* — it
  appears in the headline, the guess rows and the fact strip, nowhere else.
- Structure: 3px rules, 2–3px borders, hard offset shadows (`6px 6px 0`), 1px-gap
  fact grids. No rounded corners, no gradients, no soft shadows.
- Game screen: the crop runs edge-to-edge across the top ~47% with drafting ticks
  burned into its corners; heavy type compresses to a single banner rule beneath it.
  The photograph gets the most area, because the game is about looking.
- Archive pages: same system, quiet. Display face for the headline and fact strip
  only; body copy in serif, two columns on wide viewports.

---

## 4. Game design

### 4.1 Round structure

Six guesses. Each guess is an architect chosen from the roster (§4.3).

On a wrong guess, two things happen:

1. The crop widens one step (§4.2).
2. A comparison row appears showing how the guessed architect relates to the target
   across the four axes (§4.4).

On a correct guess, or after the sixth wrong one, the round resolves to the reveal
(§4.6).

### 4.2 The crop ladder

Each building has exactly one hand-authored normalised detail rect
`{x, y, w, h}` in `[0,1]`, framing something diagnostic — a joint, a window reveal,
a stair, a material junction.

The frame shown at guess *n* of 6 is a linear interpolation of that rect toward the
full frame:

```
t = (n - 1) / 5                  // 0 at guess 1, 1 at guess 6
rect(n) = lerp(detailRect, fullFrame, easeOutCubic(t))
```

Authoring cost is one rectangle per building, not six. `easeOutCubic` keeps the
early reveals stingy and opens up faster at the end, so guess 2 still feels hard and
guess 6 is a fair look at the building.

Serving a re-encoded, downscaled crop meaningfully raises the cost of casual reverse
image search. It does not defeat a determined lookup, and the about page says so
rather than implying the game is tamper-proof.

### 4.3 The roster and autocomplete

The guessable roster is exactly the set of architects present in the pool
(~170 for ~300 buildings, capped at 3 buildings per architect). Names off the roster
are rejected, because the feedback requires structured data about the *guess*.

This is the only place the game refuses a player, so:

- The roster is browsable in-game and at `/architects`.
- Autocomplete matches on diacritic-folded substrings of the full name and any
  documented alternative name (`Le Corbusier` also matches `Jeanneret`).
- The rejection message names the constraint and links to the roster.

### 4.4 The four comparison axes

The comparison is about **the architect**, not the building. The player is
triangulating a person.

| Axis | Source | Kind |
|---|---|---|
| Era | derived | sourced |
| Movement | hand-authored | curated judgement |
| Region | derived | sourced |
| Typology + material | hand-authored | curated judgement |

Two of four are derived from Wikidata; two are editorial judgement. Every archive
page labels which is which.

#### Era

`architect.floruit = { start, end }` — the span of their attributed *completed*
works, taken as min/max of `P571` across their buildings, with a hand-override field
for cases where Wikidata is wrong or thin. Deliberately not birth year, so that
contemporaries read as contemporaries and a long-lived architect who built late is
placed where they actually built.

```
d = target.floruitMidpoint - guess.floruitMidpoint
|d| <= 15            -> CONTEMPORARY
15 < |d| <= 40       -> NEAR
|d| > 40             -> FAR
```

Chip shows the bucket plus a direction arrow and the rounded delta: `↑40y`.

#### Movement

A two-level taxonomy in `src/data/movements.ts`: `family -> movement`
(e.g. `Modernism -> { International Style, Brutalism, Metabolism, Organic, ... }`).

Each architect carries 1–3 movement tags with one marked primary, or the single
value `unaffiliated`.

```
shares primary movement            -> EXACT
shares any movement                -> SHARED
shares any family                  -> FAMILY
otherwise                          -> NONE
```

`unaffiliated` never matches anything, including another `unaffiliated` — the
absence of a label is not evidence. Many architects reject movement labels, and the
game must not invent one to make the mechanic tidier. The taxonomy is contested by
nature; the archive says so and names the affiliation as curatorial.

#### Region

`architect.workRegions` — derived. Count the architect's buildings per UN M49
subregion (via building `P17` → country → subregion), keep every subregion holding
≥15% of their output.

```
intersecting subregions            -> EXACT
intersecting M49 regions           -> REGION
otherwise                          -> NONE
```

When the result is `REGION` or `NONE`, the chip also carries an 8-point compass
bearing from the centroid of the guess's works to the centroid of the target's.

Note this is the architect's *practice geography*, not the building's location, and
they frequently differ — which is itself one of the more interesting things the game
teaches.

#### Typology + material

Hand-authored per architect: a primary typology from a closed enum (`housing`,
`civic`, `sacral`, `cultural`, `commercial`, `industrial`, `educational`,
`infrastructure`, `tower`, `domestic`) and a signature material from a closed enum
(`concrete`, `brick`, `steel-and-glass`, `timber`, `stone`, `earth`, `mixed`).

```
both match                         -> EXACT
one matches                        -> PARTIAL
neither                            -> NONE
```

### 4.5 Daily and unlimited

- **Canon tier.** A subset of the roster (~110 architects) a curious non-specialist
  could plausibly name. Flagged per architect in the curated source, validated for
  size.
- **Daily** draws only from buildings whose architect is canon-tier, using a
  deterministic shuffled cycle: cycle index `floor(daysSinceEpoch / poolSize)` seeds
  a `mulberry32` shuffle of the pool indices, so every building appears exactly once
  before any repeats. Identical to Cityle's scheme.
- **Unlimited** draws from the whole pool, including deep cuts. Unlimited rounds
  never touch daily statistics or streaks.
- Player state (streak, distribution, today's in-progress round) lives in
  `localStorage`, wrapped in try/catch, with the game fully playable when it throws.

### 4.6 Reveal and sharing

The reveal shows the full photograph, the building dossier and the architect
portrait (§7.3), with links onward into the archive.

The share string is spoiler-free: puzzle number, guesses used (or `X/6`), and a
6×4 grid of blocks encoding the axis chips per guess — filled for exact, half for
partial, empty for none. Uses the Web Share API with a clipboard fallback.

---

## 5. Stack

- Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4
- Vitest for unit tests, Playwright (+ `@axe-core/playwright`) for e2e
- `sharp` at build time for the image pipeline
- `@vercel/analytics`, `@vercel/speed-insights`
- Zero secrets required to build or deploy. No database, no API routes with state.

App Router SSG is close to mandatory here: the archive (§8) is most of the SEO
surface and needs to be statically rendered and indexable.

---

## 6. Data model

`src/types/`:

```ts
type Building = {
  id: string;                    // slug
  wikidataId: string;            // Q-number
  name: LocalizedString;
  architectId: string;
  location: { city: string; countryCode: string; lat: number; lon: number };
  inception: number;             // year design/construction began
  completed: number | null;      // null if never completed
  demolished: number | null;
  typology: Typology;
  materials: Material[];
  structure: LocalizedString;    // structural system, one sentence
  program: LocalizedString;      // client and use
  heritage: HeritageStatus | null;
  currentUse: LocalizedString | null;
  detailRect: Rect;              // normalized, the guess-1 crop
  image: ImageRecord;
  dossier: LocalizedString;      // 120-200 words
  context: ContextBlock | null;  // see §7.4
  sources: Source[];
  tier: 'canon' | 'deep';
};

type Architect = {
  id: string;
  wikidataId: string;
  name: string;
  alternativeNames: string[];
  born: number | null;
  died: number | null;
  floruit: { start: number; end: number; override: boolean };
  movements: { id: string; primary: boolean }[] | ['unaffiliated'];
  workRegions: string[];         // M49 subregion codes, derived
  workCentroid: { lat: number; lon: number };  // derived
  primaryTypology: Typology;
  signatureMaterial: Material;
  portrait: LocalizedString;     // 100-150 words
  awards: string[];
  tier: 'canon' | 'deep';
  sources: Source[];
};

type ImageRecord = {
  commonsFile: string;
  photographer: string;
  license: 'CC0' | 'CC BY 2.0' | 'CC BY 3.0' | 'CC BY 4.0'
         | 'CC BY-SA 2.0' | 'CC BY-SA 3.0' | 'CC BY-SA 4.0' | 'PD';
  sourceUrl: string;
  width: number;
  height: number;
};

type Source = {
  kind: 'wikidata' | 'wikipedia' | 'publication' | 'institution';
  url: string;
  title: string;
  license: string | null;        // required when prose derives from it
};
```

`LocalizedString` is `{ en: string; es: string; it: string }` and is validated
complete at curation time.

---

## 7. Data pipeline and editorial policy

### 7.1 Seeding

`npm run data:seed` runs SPARQL against the Wikidata endpoint for candidates:
buildings with `P84` (architect), `P18` (image), `P571` (inception), joined where
available to `P149` (style), `P276`/`P625` (location), `P17` (country), `P1435`
(heritage status). Output is a candidate report, not shipped data — it exists to
tell the curator what is available and what is missing.

### 7.2 Curation

Buildings and architects are **hand-authored into typed TS source files** under
`src/scripts/curated/`, exactly as Cityle authors its cities. The curation script
reads no other file. Wikidata is a research aid, not a runtime dependency.

`npm run data:curate` compile-checks every enum and then runtime-validates:

- required fields present; numeric ranges plausible; `inception <= completed`
- `detailRect` inside image bounds and at least 4% of image area
- every `ImageRecord` complete, with a licence in the allowed set, a named
  photographer and a resolvable source URL
- no image file reused across two buildings
- every architect referenced by a building exists, and vice versa
- no architect appearing in more than 3 buildings
- `floruit` consistent with the architect's buildings unless `override` is set
- every movement tag resolving in the taxonomy
- every `LocalizedString` complete in `en`, `es`, `it`
- every prose block carrying at least one `Source`
- the coverage targets in §7.3, as **hard failures**
- canon tier large enough for a sensible daily cycle

### 7.3 Coverage targets

Enforced by `data:curate`. These are validation failures, not aspirations. The
Wikidata probe that motivated them is recorded in §11.

- **Era:** ≥10% pre-1800 · ≥25% 1800–1945 · ≥40% 1945–2000 · ≥15% post-2000
- **Geography:** ≤45% Europe · ≤25% North America · ≥15% East/South/Southeast Asia
  · ≥12% Africa and West Asia · ≥10% Latin America
- **≥20%** of pool architects women or non-binary
- **≤3** buildings per architect

They are reachable — Sinan, Lahauri, Fathy, Kéré, Kamara, Lari, Chadirji, Bo Bardi,
de Silva, Doshi, Correa, Bawa, Salmona, Dieste, Nwoko, Bilbao, Escobedo, Vann
Molyvann and many more have documented built work — but only if metadata is
hand-added where Wikidata is thin, which for exactly these architects it badly is.

### 7.4 Provenance and context

Every fact carries a source. Prose is either original writing or CC BY-SA text
attributed inline to Wikipedia. Unsourced assertion is a validation failure, the
same as a malformed date.

Every archive page carries a provenance block naming the Wikidata QID, the Commons
file, the photographer, the licence, and which fields are curatorial judgement
(movement affiliation, typology, signature material, difficulty tier) rather than
sourced fact.

**Context blocks.** A `ContextBlock` may state documented, attributed, published
facts about an architect's politics or conduct, or about a building's history —
colonial administration, forced labour, state ideology — with a citation and the
outcome where known. Unattributed characterisation is a validation failure.

Twentieth-century architecture cannot be taught honestly while hiding that Modernism
and Fascism were entangled; Casa del Fascio is a masterpiece *and* a party
headquarters. Historical figures whose politics are part of the documented record
stay in the pool, with that record in the dossier.

For **living** people, the curation rule is conservative: where there is doubt about
contested allegations, the person is not added to the pool. The pool is a selection
of ~300 from ~93,000 candidates and carries no obligation to anyone.

### 7.5 Images

`npm run data:images` downloads each Commons original once, writes a single ~1600px
AVIF master per building (~250 KB), records the real dimensions back into the
curated source, and the masters are **committed**. ~300 buildings ≈ 75 MB in-repo.

Builds are then offline-deterministic and cannot break when a file is renamed,
relicensed or deleted upstream. Next's image optimisation handles derivatives.

---

## 8. Archive and SEO

Statically generated:

- `/building/[slug]` — dossier, full photograph, fact strip, map, context block,
  provenance, links to architect and movement
- `/architect/[slug]` — portrait, floruit, movements, other works in the pool,
  contemporaries, provenance
- `/movement/[slug]` — what it was, what it reacted against, its architects and
  buildings in the pool
- `/buildings`, `/architects`, `/movements` — catalogue indexes
- `/about` — methodology, data sources, licences, the honest limitations

Per-page JSON-LD (`LandmarksOrHistoricalBuildings`, `Person`, `VideoGame`), dynamic
OpenGraph and Twitter images, `sitemap.xml`, `robots.txt`. Roughly 500–700
indexable pages of sourced, illustrated answers to *"who designed X"*.

Archive pages never spoil an unsolved daily: the daily building's page is generated
like any other but is not linked from the game before the round resolves.

---

## 9. Internationalisation

English, Spanish, Italian. Every player-facing string lives in `src/lib/i18n.ts`;
a hardcoded English string in a component is a review failure. `data:curate`
validates that every `LocalizedString` in the pool and every i18n key is complete
across all three locales.

---

## 10. Testing and CI

**Vitest (unit):**

- daily cycle determinism — full-cycle coverage, no repeat before exhaustion,
  stability across timezones and across a DST boundary
- each comparison axis, including the `unaffiliated` and empty-`workRegions` edges
- crop-rect interpolation and clamping
- share-string generation
- localStorage persistence with a throwing accessor

**Data validation:** `data:curate` runs in CI and is a gate.

**Playwright (e2e):** full win and loss flows; the three locales; roster rejection;
share fallback; archive navigation; axe accessibility pass on game and archive.

**Workflows:** `test.yml` (typecheck, lint, curate, unit, build) and `e2e.yml` on
every push and PR.

---

## 11. Risks and known limitations

- **Wikidata's canon bias is severe.** Measured 2026-08-26: 93,265 buildings carry
  both an architect and an image, across 31,458 architects — but 31,128 of the dated
  ones are 20th century against ~1,900 for all of 1000–1500, and the probe returned
  Lina Bo Bardi 10 buildings, Doshi 3, Bawa 2, Minnette de Silva 0. §7.3 exists
  because of this and the curation effort is the bulk of the project.
- **Freedom of Panorama** is less damaging than feared — Piano 64/79 buildings with
  images, Nouvel 42/55, Hadid 50/66 — but it will bite for specific modern buildings
  in France, Italy, Belgium and Greece.
- **Difficulty is the central product risk.** Naming an architect is hard. The canon
  tier, the roster autocomplete and the four axes exist to make it deducible; the
  first two weeks of real play should be treated as calibration data.
- **Movement labels are contested** and the game presents them as a mechanic. The
  archive must be unambiguous that they are curatorial.
- **Reverse image search** is raised in cost, not prevented.

---

## 12. Open questions

- Optional anonymous daily-stats backend (Upstash, as in GeoFauna) — deferred,
  feature-flagged off, not in the first release.
- Whether `/movement/[slug]` pages ship in v1 or follow once the pool is populated.
