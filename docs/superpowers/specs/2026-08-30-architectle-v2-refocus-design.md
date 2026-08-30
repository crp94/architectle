# Architectle v2 — Refocus design

Date: 2026-08-30. Supersedes nothing — this is a delta on top of the shipped v1
(`docs/superpowers/specs/2026-08-26-architectle-design.md`), which remains the
reference for everything not changed here.

## 1. Summary

v1 shipped a 221-building, 237-architect pool optimised for representativeness.
The result is a game that is too broad (too many guessable names nobody knows),
visually under-executed (display fonts never load; the brutalist identity reads
as unstyled), and image-weak (many hero photos were chosen without being looked
at). v2 makes the game better by making it less ambitious: a hand-picked
**featured roster of ~40 world-famous architects** with 2–4 buildings each
drives the game, while the full archive stays built and browsable. The UI is
re-skinned as **museum/gallery editorial**. The loop gains a **clue ladder**.
Every featured building's images are **hand-picked by visual inspection**, with
1–2 extra angles. SEO/discoverability gets a dedicated workstream.

**The open-data requirement is unchanged and non-negotiable**: every image is
openly licensed (CC0/CC BY/CC BY-SA/PD), verified on the live Commons/Flickr
page (never `extmetadata`), photographer credited, provenance recorded. Every
prose claim cited. The living-person rule and historical-context rule from v1
still bind.

## 2. The featured roster

- New file `src/scripts/curated/featured.ts` exporting `FEATURED_ARCHITECT_IDS:
  string[]` (~40 ids).
- Candidate list (~45, to be cut to ~40 by the feasibility pass — FoP or image
  availability may kill entries): Gaudí, F. L. Wright, Le Corbusier, Mies van
  der Rohe, Zaha Hadid, Norman Foster, Frank Gehry, Rem Koolhaas, Renzo Piano,
  Tadao Ando, Oscar Niemeyer, Alvar Aalto, Louis Kahn, Jørn Utzon, Kenzō Tange,
  I. M. Pei, Filippo Brunelleschi, Andrea Palladio, Christopher Wren, Mimar
  Sinan, Walter Gropius, Luis Barragán, Lina Bo Bardi, Peter Zumthor, Kazuyo
  Sejima, Santiago Calatrava, Eero Saarinen, Louis Sullivan, Jean Nouvel,
  Charles Rennie Mackintosh, Victor Horta, Moshe Safdie, Richard Rogers, Álvaro
  Siza, Toyo Ito, Marcel Breuer, Philip Johnson, Buckminster Fuller, Félix
  Candela, Balkrishna Doshi, Michelangelo, Gustave Eiffel, Antonin Raymond,
  Wang Shu, Denise Scott Brown/Venturi (feasibility decides the credit).
- Each featured architect: **2–4 buildings** in the pool (existing + newly
  curated), target 100–140 featured buildings total.
- New entries follow the **full v1 curation contract** (trilingual dossiers
  120–200 words, portraits 100–150, live licence verification, sources,
  detailRect, context blocks where history warrants).
- Validators: `featured-architect-exists` (every id resolves),
  `featured-min-buildings` (≥2 per featured architect) — hard gates.
- Game surfaces (`daily`, `unlimited`, `roster()`, autocomplete) draw only from
  featured buildings/architects via new `pool.ts` accessors
  (`featuredBuildings()`, `featuredArchitects()`). Daily continues to use the
  deterministic `dailyIndex` cycle over `featuredBuildings()` (canon-tier
  filtering within featured is dropped — the whole featured set IS the canon
  now).
- The archive (`/buildings`, `/architects`, `/movements`, all detail pages,
  sitemap) keeps the full pool.

## 3. Validator policy change

- Representativeness rules — the four era floors, five geography rules,
  `gender-min`, `canon-tier-min` — are **demoted from hard failures to a
  report-only table**. They still print on every `data:curate` run.
- Correctness rules stay hard: schema, licence enum, provenance,
  `wikidata-null-needs-sources`, id-uniqueness, chronological ordering,
  duplicate-site, image dimensions, cross-refs, and the two new featured rules.
- `max-buildings-per-architect` rises from 3 to **6** (hard).
- The about page is updated honestly: v2 trades representativeness targets for
  guessability; the wider archive remains; the v1 findings (FoP, no-photograph
  pattern, attribution pressure) remain published.

## 4. Game loop — comparison + clue hybrid

Six guesses, crop ladder, and the four comparison chips stay. Each wrong guess
additionally unlocks one concrete fact in a "case file" strip:

| After miss | Clue |
|---|---|
| 1 | Completion year |
| 2 | Country |
| 3 | Typology + signature material |
| 4 | Second photograph (different angle, from `extraImages`) |
| 5 | Movement + "also designed …" (a famous sibling work by the same architect, never the target building) |

Clues derive purely from guess count — `GameState` is unchanged. Pure function
`clueAt(building, architect, missCount)` in `src/lib/clues.ts`, fully
unit-tested, including: the sibling-work clue must never name the target
building; the second-photo clue degrades gracefully when a building has no
`extraImages` (skip to the next clue type, never a blank slot).

Autocomplete QoL: each suggestion row shows name, life dates, one-line
descriptor (new short `blurb` derived from existing data — no new curated field;
use movement + primary typology).

## 5. Visual — museum/gallery editorial

- Full re-skin. Warm paper ground, near-black ink, one muted accent (final
  values chosen with WCAG AA contrast math before tokens are committed).
- Type: high-contrast serif display + quiet grotesque for UI, **loaded via
  `next/font` self-hosted** (no external requests; open-licence fonts only,
  e.g. Fraunces + Inter — final pairing is the design-system task's call,
  justified in its report).
- The photograph is a gallery print: generous mat, hairline frame, small-caps
  caption with photographer credit visible in-game (credit was previously
  reveal-only; showing it during play is better licence practice and better
  design).
- Chips → specimen labels. Case-file strip matches.
- `theme.ts` stays the single source of truth; no hardcoded hex anywhere.
- Equal mobile/desktop effort: designed at ~390px portrait AND ≥1280px; the
  crop stage, guess rows, clue strip, and reveal all get explicit layouts at
  both sizes.
- Archive + about pages restyled to match (quieter).

## 6. Images — hand-picked, multiple per building

- Schema: `image: ImageRecord` stays primary; new optional
  `extraImages?: ImageRecord[]` (0–2) — populated for featured buildings only;
  archive-only entries untouched.
- For EVERY featured building: an agent downloads and looks at the current
  primary plus Commons alternatives, replaces bad primaries (composition,
  resolution, lighting — judged on pixels), adds 1–2 extra angles, verifies
  every licence on the live file page, re-derives `detailRect` from actual
  pixels (crop the rect, look at it), and respects interior/exterior FoP rules.
- `fetchImages.ts` extends to fetch `extraImages` (same idempotent AVIF
  pipeline, suffixed filenames `<slug>-2.avif`, `<slug>-3.avif`).
- Validator: `extra-images-licence` (same allowed-licence enum), dimensions
  recorded rule extended.

## 7. SEO and discoverability (new dedicated workstream)

- Per-building/architect OG images (dynamic `opengraph-image` per route using
  the building photo + name, replacing the single static template).
- Metadata audit: unique titles/descriptions per page in all three locales
  where the content exists; canonical URLs; `hreflang` alternates for the
  localized game page.
- JSON-LD audit and extension: `WebSite` + `SearchAction` on the home page,
  `BreadcrumbList` on archive pages, verify existing building/architect JSON-LD
  against Google's Rich Results requirements.
- `manifest.json` + icons (PWA-lite installability), proper favicon set.
- Daily-puzzle freshness signal: home-page metadata that changes daily without
  leaking the answer.
- Internal linking pass: game → archive → movements circulation, footer.
- Vercel Analytics wired in (`@vercel/analytics`) — from the original v1 ask,
  never shipped.
- Performance: verify image `sizes`/`priority` attributes, font loading
  strategy (`display: swap`), Core Web Vitals sanity via Lighthouse if
  available in-session.

## 8. Execution shape

Worktree-isolated waves (never two agents on one checkout):

- **W1 — feasibility**: research agents vet the candidate roster (FoP + image
  availability per architect), lock the ~40 list + building selections (which
  existing buildings are kept per architect, which new ones get curated).
- **W2 — engine + design system** (parallel worktrees): (a) featured plumbing,
  validator demotion/additions, `clues.ts`, `extraImages` schema + pipeline
  (TDD); (b) theme/token/font foundation with contrast-validated palette.
- **W3 — curation fan-out**: ~8–10 sonnet agents, each owning 4–5 featured
  architects: curate missing entries (full contract), image hand-pick pass on
  ALL their buildings (existing + new), extraImages, pixel-derived detailRects.
- **W4 — UI rebuild** (after W2b, parallel with late W3): game screen, clue
  strip, reveal, archive restyle, about update. Plus the SEO agent (§7).
- **W5 — integration**: merge, full-pool validation, image pipeline run,
  reviews of every curation slice (the v1 lesson: reviews catch real errors —
  wrong images, fabricated facts — at a high rate), e2e/a11y update,
  `npm run check && npm run e2e`, then `/code-review`.

## 9. Testing

- Unit: `clues.ts` (schedule, sibling-work never names target, extraImages
  degradation), featured validators, extraImages rules, theme contrast
  assertions (tokens tested against WCAG AA math in `tests/theme.test.ts`).
- Component: GameBoard + clue strip, updated chips/labels, Reveal with
  multiple images.
- E2e: clue-ladder progression added to `game.spec.ts` (assert each miss adds
  the right clue), a11y re-run on the new palette, archive spot-checks.
- The full gate stays `npm run check && npm run e2e`.

## 10. Out of scope

Deleting archive data; stats backend; account systems; any new locale; any
nationality-based exclusion (none exists, none will).
