// The v2 "featured roster" (design spec §2): the ~40 world-famous
// architects the game itself (daily, unlimited, autocomplete/roster
// rejection) draws from — see `featuredArchitects()` / `featuredBuildings()`
// / `featuredRoster()` in src/lib/pool.ts. The full archive
// (`/buildings`, `/architects`, `/movements`) is unaffected and keeps
// drawing from the whole pool via `roster()`/`BUILDINGS`/`ARCHITECTS`.
//
// `featured-architect-exists` and `featured-min-buildings`
// (src/scripts/validators/featured.ts) are HARD gates on every id listed
// here: each id must resolve to a real architect in the curated pool, and
// that architect must hold at least 2 buildings via `architectId` (a
// `coArchitects` reference does not count — see the validator). Run
// `npm run data:curate -- --allow-featured-gaps` to downgrade both rules to
// warnings while Wave V2-3's curation fan-out is still topping up the
// architects listed as PENDING below; the bare `npm run data:curate` used
// by `npm run check` must pass with NO flag, so nothing below this line is
// listed unless it already clears the ≥2-buildings bar today.
export const FEATURED_ARCHITECT_IDS: string[] = [
  // --- Seeded (verified: id exists AND already holds >=2 buildings via
  //     architectId in the current pool, as of this task) ---
  'luis-barragan', // 3 buildings (americas-mexico.ts)
  'lina-bo-bardi', // 2 buildings (americas-southern.ts)
  'peter-zumthor', // 2 buildings (europe-germanic.ts), incl. Therme Vals
  // --- Wave V2-3, batch B1 (US classic-modern top-up) ---
  'frank-lloyd-wright', // 3 buildings (americas.ts): Guggenheim NY, Fallingwater, Robie House
  'mies-van-der-rohe', // 3 buildings (europe-germanic.ts): Neue Nationalgalerie, Seagram, Farnsworth House
  'philip-johnson', // 3 buildings (americas.ts, new architect): Glass House, 550 Madison Ave, PPG Place
  'louis-sullivan', // 3 buildings (americas.ts): Wainwright, Carson Pirie Scott, Guaranty
  'eero-saarinen', // 3 buildings (americas.ts): Dulles Main Terminal, TWA Flight Center, Gateway Arch

  // --- PENDING (Wave V2-3 curation fan-out fills these gaps) -------------
  // Every id below EITHER:
  //   (a) already exists in the pool but currently holds exactly 1
  //       building via architectId (adding it now would fail
  //       featured-min-buildings on a bare `data:curate` run), or
  //   (b) does not exist in the pool at all yet (never curated as a
  //       primary architect — only ever mentioned in another entry's
  //       prose, e.g. Renzo Piano and Tadao Ando today).
  // Do not uncomment an id below until Wave V2-3 has actually added a
  // second (or first) building crediting it via architectId — verify with
  // `grep -rn "architectId: '<id>'" src/scripts/curated/buildings/*.ts`
  // before moving it up to the seeded list above.
  //
  // (a) exists, currently 1 building:
  // 'antoni-gaudi', 'le-corbusier',
  // 'zaha-hadid', 'norman-foster', 'oscar-niemeyer',
  // 'alvar-aalto', 'louis-kahn', 'jorn-utzon', 'kenzo-tange',
  // 'filippo-brunelleschi', 'andrea-palladio', 'mimar-sinan',
  // 'walter-gropius', 'kazuyo-sejima', 'victor-horta',
  // 'charles-rennie-mackintosh', 'moshe-safdie', 'richard-rogers',
  // 'felix-candela', 'balkrishna-doshi',
  //
  // (b) not yet curated as a primary architect at all:
  // 'renzo-piano', 'tadao-ando', 'frank-gehry', 'rem-koolhaas', 'i-m-pei',
  // 'christopher-wren', 'santiago-calatrava',
  // 'jean-nouvel', 'alvaro-siza' (NB: already curated as
  // a NON-featured pool architect — check building count before adding),
  // 'toyo-ito', 'marcel-breuer', 'buckminster-fuller',
  // 'michelangelo', 'gustave-eiffel', 'antonin-raymond', 'wang-shu' (also
  // already in the pool — check building count), 'denise-scott-brown',
  // 'robert-venturi',
];
