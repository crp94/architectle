# Architectle v2 refocus — implementation plan

Spec: `docs/superpowers/specs/2026-08-30-architectle-v2-refocus-design.md`.
Branch: `architectle-v1` (continuing on the same branch; v1 is shipped and green).
Execution: sonnet subagents in isolated git worktrees under `.claude/worktrees/`,
`node_modules` symlinked from the main checkout, merged back wave by wave.
Definition of done for every task: `npm run check` clean in the task's worktree
(plus `npm run e2e` where UI is touched). Ledger:
`.superpowers/sdd/2026-08-30-architectle-v2/progress.md`.

## Wave V2-1 — feasibility (2 agents, parallel, read-only research)

**T1a / T1b — roster feasibility, split A–K / L–Z.** For each candidate
architect in spec §2: does the pool already hold them and with how many
buildings; for missing/under-quota ones, name 2–4 specific candidate buildings
with (a) a plausibly clean FoP situation (apply every v1 FoP finding recorded in
the v1 ledger) and (b) at least one openly-licensed Commons photo verified to
exist (search hit is enough at this stage; full licence verification happens at
curation). Output per architect: KEEP+list / CURATE+list / DROP+reason.
Controller then locks `FEATURED_ARCHITECT_IDS` (~40) and writes the W3 batch
assignments.

## Wave V2-2 — engine + design system (2 agents, separate worktrees)

**T2a — featured plumbing + clue engine (TDD).**
- `src/scripts/curated/featured.ts` (`FEATURED_ARCHITECT_IDS` — initially the
  locked list, entries commented out until their curation lands if needed).
- Validators: `featured-architect-exists`, `featured-min-buildings` (≥2, hard);
  demote the representativeness rules (era/geography/gender/canon) to
  report-only; raise `max-buildings-per-architect` to 6; `extraImages` schema
  (`extraImages?: ImageRecord[]`, 0–2) + licence/dimensions rules.
- `pool.ts`: `featuredBuildings()`, `featuredArchitects()`; game code switches
  `roster()`/daily/unlimited sources to featured.
- `src/lib/clues.ts`: `clueAt(building, architect, siblingWorks, missCount)`
  per spec §4 table, with the extraImages-degradation and never-name-the-target
  rules unit-tested.
- `fetchImages.ts`: fetch `extraImages` to `<slug>-2.avif`/`<slug>-3.avif`.

**T2b — design system foundation.**
- New `theme.ts` token set (museum/gallery editorial): paper/ink/accent with
  WCAG AA contrast asserted in `tests/theme.test.ts` before anything uses them.
- `next/font` self-hosted pairing (serif display + grotesque UI; open-licence
  fonts), wired into `layout.tsx`; `globals.css` alignment.
- A small set of primitives (`GalleryFrame`, `SpecimenLabel`, caption styles)
  in `src/components/ui/` for W4 to build on. No page redesigns yet — tokens,
  fonts, primitives only, all existing tests kept green (visual regressions in
  existing components are acceptable and expected; test/lint/type gates are
  not).

## Wave V2-3 — curation fan-out (~8 agents, worktree each, after W1 locks the list)

Each agent owns 4–5 featured architects (assignments written by the controller
after W1). Per architect: curate any missing buildings/architect records under
the FULL v1 contract (trilingual, live licence verification, provenance,
context blocks where warranted, interior/exterior FoP rules); then the image
pass on ALL that architect's featured buildings — download and look at the
current primary, replace if weak, add 1–2 `extraImages` angles, verify every
licence live, re-derive every `detailRect` from cropped pixels. Grep other
worktrees before defining any architect id. Validation:
`data:curate -- --allow-missing-dimensions` in-worktree.

## Wave V2-4 — UI rebuild + SEO (parallel worktrees, after T2b merges)

**T4a — game screen**: GameBoard/CropStage/GuessField/GuessRow/AxisChip
restyle on the new system; clue "case file" strip wired to `clues.ts`;
autocomplete rows with dates + descriptor; in-game photographer credit;
mobile (~390px) and desktop (≥1280px) layouts.
**T4b — reveal + archive + about**: Reveal with multi-image gallery; archive
pages restyled quieter; about page updated per spec §3 (honest v2 note, v1
findings preserved).
**T4c — SEO/discoverability** (spec §7): per-route OG images, metadata +
hreflang audit, JSON-LD extension (WebSite/SearchAction/BreadcrumbList),
manifest + icons, daily freshness signal without spoilers, internal-linking
pass, `@vercel/analytics`, image/font loading performance pass.

## Wave V2-5 — integration and release gate

Merge all worktrees; run the full image pipeline for new/changed images; bare
`data:curate` clean; review pass over every W3 curation slice (fresh-agent
reviews, v1 style — licences re-verified live, images actually looked at);
fix rounds as needed; e2e updated (clue-ladder progression in `game.spec.ts`,
a11y on the new palette); `npm run check && npm run e2e` green; ledger updated;
then ask the human partner to run `/code-review`.

## Merge discipline

One agent per worktree, never two on a checkout. Curation slices may merge
incrementally this time (the fixture-fallback constraint from v1 is gone — the
pool is real now), but engine/UI branches merge only when their full gate is
green. The controller does all merges.
