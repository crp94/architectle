# Architectle

A daily deduction game: you see a tight crop of a building's most diagnostic
detail and you have six guesses to name its architect. Every wrong guess
widens the frame and tells you how your guess relates to the real architect
across four axes — era, movement, region, and typology plus material. Guess
correctly, or run out of guesses, and you get the building's dossier and the
architect's portrait, with links into a fully indexable archive of every
building, architect and movement in the pool.

**Play:** https://architectle.carlosrodriguezpardo.es

Architectle is one of a family of small daily games by
[Carlos Rodríguez-Pardo](https://carlosrodriguezpardo.es) — siblings include
**GeoFauna**, **Cityle**, **Climatle**, **P-hackle** and **Partido a
Partido** — and follows the same conventions: daily plus unlimited, three
languages, MIT-licensed, deployed on Vercel with zero secrets required to
build.

Full disclosure on the data, the curation policy and this project's own
honest limitations lives right here in this README (see "Data status"
below) and in `AGENTS.md`'s curation contract — `/about` in the running app
is deliberately reduced to what-the-game-is/how-to-play and no longer
republishes it. Read the sources below before citing anything as fact.

## Languages

English, Spanish, Italian (`en` / `es` / `it`). Every player-facing string is
validated complete across all three at build time.

## Licence

MIT — see [`LICENSE`](./LICENSE).

## Tech stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4 — the concrete/brutalist palette lives entirely in
  `src/lib/theme.ts`; there are no hardcoded hex values in components
- `sharp` at build time for the image pipeline (Commons originals → committed
  AVIF masters)
- Vitest for unit tests, Playwright + `@axe-core/playwright` for e2e
- `@vercel/analytics` / `@vercel/speed-insights` — no other tracking
- Zero secrets required to build or deploy; no database, no stateful API
  routes

## Development

```bash
npm install        # runs data:curate via postinstall
npm run dev        # http://localhost:3000
npm run check      # data:curate && lint && typecheck && test — the CI gate
```

Individual commands:

```bash
npm run lint        # eslint
npm run typecheck   # tsc --noEmit
npm run test        # vitest run
npm run e2e         # playwright test
npm run build       # next build
```

## Data pipeline

The pool is hand-curated, not scraped. Wikidata is a research aid, never a
runtime dependency — the curation script reads no external data at build
time.

```bash
npm run data:seed     # SPARQL against Wikidata — produces a candidate report only, nothing ships from it
npm run data:curate   # compiles and validates src/scripts/curated/**/*.ts into the pool; hard failure on any violation
npm run data:images   # fetches each Commons original once, writes a committed AVIF master, records real image dimensions
```

`data:curate` is the single source of truth for whether a change to the pool
is valid: schema, cross-references, image licensing, provenance and the
coverage targets below are all hard gates, not lint warnings.

## Data status

The pool currently holds **221 buildings** and **237 architects**, hand-
curated across **18 country-disjoint slices**, against published, enforced
coverage targets (era distribution, geography floors/ceilings, ≥20% women or
non-binary architects, ≥60% canon-tier, max 3 buildings credited to one
architect — see `src/scripts/validators/coverage.ts`). None of it is scraped
automatically and none of it ships without passing `data:curate`.

It is a curated selection, not a research dataset, and the findings below
are the honest account of that — this README and `AGENTS.md`'s curation
contract are the authoritative, up to date sources for it (`/about` used to
carry this account too, but was deliberately reduced to what-the-game-is/
how-to-play and no longer does):

- **Copyright law removes real architects from an open-licensed pool.**
  France has no Freedom of Panorama for architecture, so there is no Le
  Corbusier anywhere in this pool, and Eileen Gray, Charlotte Perriand, Odile
  Decq and Anne Lacaton were all researched and discarded for the same
  reason. Similar findings hold for Belgium (which *does* have Freedom of
  Panorama, since 2016 — a fact this project itself got wrong before
  correcting it), Luxembourg, Egypt, Libya, Eritrea, Mozambique, and the
  OAPI/Bangui Agreement countries of West Africa, where non-commercial-only
  licensing blocked the use of Francis Kéré and Mariam Kamara despite both
  being the region's own pre-assigned architects.
- **Some real, documented architects have no free photograph of their work
  findable at all** — Minnette de Silva, Matilde Ucelay, Salima Naji, Aziza
  Chaouni and Högna Sigurðardóttir among them — set against Frank Lloyd
  Wright's 283 attributed buildings with images.
- **A ≥20% gender quota and a single-answer game mechanic pulled against each
  other.** Combining a diversity target with a data model that credits one
  architect per building created measurable, repeated pressure to
  sole-credit the woman in a mixed-gender partnership — caught in review in
  at least one case, and independently resisted in another. Both are
  disclosed, not just the flattering one.
- The geography targets count where a building stands, not who is credited
  for designing it — a gap that is real and only partially fixed (see the
  Kenyatta International Conference Centre / David Mutiso case above).

See `AGENTS.md`'s curation contract for the rules each of these findings
produced, and the SDD ledgers under `.superpowers/sdd/` (in particular
`2026-08-26-architectle/progress.md` and
`2026-08-30-architectle-v2/progress.md`) for the full task-by-task record of
how each was found and fixed.
