// Every player-facing string lives here (design spec §9). A hardcoded
// English string in a component is a review failure — components must pull
// their copy through `t(locale, key, params?)`.

export type Locale = 'en' | 'es' | 'it';

export const LOCALES: Locale[] = ['en', 'es', 'it'];

const en = {
  // Header / chrome
  appTitle: 'Architectle',
  appTagline: 'Name the architect from a widening crop.',
  navArchive: 'Archive',
  navAbout: 'About',
  navArchitectsLink: 'Architects',
  languageLabel: 'Language',
  languageEnglish: 'English',
  languageSpanish: 'Spanish',
  languageItalian: 'Italian',
  dailyGame: 'Daily puzzle',

  // Round / guess field
  guessCounter: 'Guess {n} of {total}',
  guessFieldLabel: 'Name the architect',
  guessFieldPlaceholder: 'Type an architect’s name…',
  guessSubmit: 'Guess',
  rosterRejection: '"{name}" is not on the roster — guesses are limited to the architects in the pool.',
  rosterRejectionLink: 'Browse the architects',

  // Axis labels
  axisEra: 'Era',
  axisMovement: 'Movement',
  axisRegion: 'Region',
  axisTypology: 'Typology + material',

  // Era chip legend
  eraContemporary: 'Contemporary',
  eraNear: 'Near',
  eraFar: 'Far',
  eraDirectionEarlier: 'earlier',
  eraDirectionLater: 'later',
  eraDirectionSame: 'at the same time',
  eraChipAriaSame: '{axis}: {bucket}, the guessed architect worked at the same time as the target',
  eraChipAriaDiff: '{axis}: {bucket}, the guessed architect worked {years} years {direction}',

  // Movement chip legend
  movementExact: 'Same movement',
  movementShared: 'Shared movement',
  movementFamily: 'Same family',
  movementNone: 'No relation',
  movementChipAria: '{axis}: {result}',

  // Region chip legend
  regionExact: 'Same region',
  regionRegionMatch: 'Same wider region',
  regionNone: 'Different region',
  regionChipAria: '{axis}: {result}',
  regionChipAriaBearing: '{axis}: {result}, target lies to the {bearing}',

  // Compass bearings
  compassN: 'north',
  compassNE: 'northeast',
  compassE: 'east',
  compassSE: 'southeast',
  compassS: 'south',
  compassSW: 'southwest',
  compassW: 'west',
  compassNW: 'northwest',

  // Typology chip legend
  typologyExact: 'Same typology and material',
  typologyPartial: 'Partial match',
  typologyNone: 'No match',
  typologyChipAria: '{axis}: {result}',

  // Win / loss
  winTitle: 'Solved',
  winMessage: 'You named the architect in {n} of {total} guesses.',
  lossTitle: 'Out of guesses',
  lossMessage: 'The architect was {name}.',
  shareButton: 'Share',
  shareCopyButton: 'Copy',
  shareCopied: 'Copied to clipboard',
  // Shown instead of shareCopied when a clipboard write itself rejects
  // (codereview finding #4: denied permission, an insecure context, or the
  // API simply being unavailable) — a visible failure state rather than a
  // silently swallowed, unhandled rejection.
  shareCopyFailed: "Couldn't copy",
  sharePreviewHeading: 'What gets shared',
  sharePreviewNote: 'Spoiler-free — no architect or building name.',
  playAgain: 'Play unlimited',
  unlimitedEyebrow: 'Unlimited practice',
  unlimitedNote: 'Unlimited rounds do not affect daily statistics or streaks.',
  shareDailyHeader: 'Architectle #{n} {score}',
  shareUnlimitedHeader: 'Architectle Unlimited {score}',

  // Stats
  statsTitle: 'Statistics',
  statsPlayed: 'Played',
  statsWinPct: 'Win %',
  statsStreak: 'Streak',
  statsMaxStreak: 'Max streak',
  statsDistribution: 'Guess distribution',

  // Reveal
  revealDossier: 'Dossier',
  revealProvenance: 'Provenance',
  revealSources: 'Sources',
  revealArchitect: 'Architect',
  revealContext: 'Context',
  // Caption/heading for a building's extraImages (design spec §6) — shown
  // both in the post-game reveal and on the building's archive page.
  revealAnotherAngle: 'Another angle',
  archiveMoreViews: 'More views',

  // Reveal fact-strip labels
  factCompleted: 'Completed',
  factLocation: 'Location',
  factTypology: 'Typology',
  factMaterial: 'Material',

  // Provenance line labels
  provenanceNoWikidata: 'No Wikidata item',
  provenanceWikidataLabel: 'Wikidata',
  provenanceCommonsLabel: 'Commons',
  provenancePhotographerLabel: 'Photo',
  provenanceLicenseLabel: 'Licence',

  // Architect movement, when unaffiliated (reveal subtitle)
  architectUnaffiliated: 'Unaffiliated',

  // Typology display labels (fact strip / archive)
  typologyHousing: 'Housing',
  typologyCivic: 'Civic',
  typologySacral: 'Sacral',
  typologyCultural: 'Cultural',
  typologyCommercial: 'Commercial',
  typologyIndustrial: 'Industrial',
  typologyEducational: 'Educational',
  typologyInfrastructure: 'Infrastructure',
  typologyTower: 'Tower',
  typologyDomestic: 'Domestic',

  // Material display labels (fact strip / archive)
  materialConcrete: 'Concrete',
  materialBrick: 'Brick',
  materialSteelGlass: 'Steel and glass',
  materialTimber: 'Timber',
  materialStone: 'Stone',
  materialEarth: 'Earth',
  materialMixed: 'Mixed',

  // Archive nav / index headings
  navBuildingsLink: 'Buildings',
  navMovementsLink: 'Movements',

  // Archive cross-link section headings
  archiveWorksHeading: 'Works in the pool',
  archiveContemporariesHeading: 'Contemporaries',
  archiveFloruit: 'Active',
  archiveApproxSpan: 'Approx. span',
  archiveOngoing: 'ongoing',
  archiveFamily: 'Family',
  archiveWithCoArchitects: 'With',
  archiveViewOnMap: 'View on map',
  archiveAllBuildings: 'All buildings',
  archiveAllArchitects: 'All architects',
  archiveAllMovements: 'All movements',
  archiveNoBuildings: 'No buildings documented yet.',
  archiveNoContemporaries: 'No documented contemporaries yet.',
  archiveBuildingsCount: '{count} buildings',
  archiveArchitectsCount: '{count} architects',
  archiveMovementsCount: '{count} movements',

  // Archive <title>/<meta description>
  metaArchiveTitle: '{name}',
  // Building pages name both the building AND its architect in the title
  // (the "Fallingwater — Frank Lloyd Wright | Architectle" pattern) —
  // distinct from `metaArchiveTitle` because a building is the one archive
  // entity with a natural second name to surface up front.
  metaBuildingTitle: '{building} — {architect}',
  metaBuildingsIndexDescription: 'Every building in the Architectle pool — {count} landmarks, illustrated and sourced.',
  metaArchitectsIndexDescription: 'Every architect in the Architectle pool — {count} names, with their works, movements and provenance.',
  metaMovementsIndexDescription: 'Every architecture movement referenced in the Architectle pool — {count} movements, with their architects and buildings.',
  // Home page <meta description> — a daily freshness signal (puzzle
  // number + date) with zero hint of the day's actual building or
  // architect (design spec §7, Task w4c).
  metaHomeDescription: 'Daily architecture puzzle #{n} ({date}) — name the architect from a widening crop of a building photo. A new building every day.',
  metaAboutDescription: 'What Architectle is, where its data comes from, and the honest limitations of a hand-curated pool of buildings and architects.',
  // Root opengraph-image.tsx's `alt` export and second tagline line
  // (codereview finding #7) — previously hardcoded English, now routed
  // through `t('en', ...)` like every other player-facing string, so it
  // can't silently drift from the rest of the app's copy.
  ogHomeAlt: 'Architectle — name the architect from a widening crop of a building photo. A new building every day.',
  ogDailyBuildingLine: 'A new building, every day.',
  // The small "ARCHITECTLE ARCHIVE" eyebrow row shared by the architect and
  // movement OG specimen-card routes (src/lib/ogSpecimenCard.tsx).
  ogArchiveLabel: 'Architectle Archive',

  // Movement family labels (Movement.family, src/types/movement.ts)
  familyClassical: 'Classical',
  familyMedieval: 'Medieval',
  familyIslamic: 'Islamic',
  familyRenaissanceBaroque: 'Renaissance & Baroque',
  familyRevivalist: 'Revivalist',
  familyModernism: 'Modernism',
  familyPostmodernism: 'Postmodernism',
  familyContemporary: 'Contemporary',
  familyVernacular: 'Vernacular',

  // Clue ladder ("case file" strip, design spec §4 — src/lib/clues.ts's
  // CLUE_I18N_KEYS names one key per Clue['kind']; clueStripHeading and
  // clueAlsoDesigned are additive UI labels the clue engine doesn't itself
  // require). Additive-only — appended here, not interleaved above, to
  // keep this an easy merge alongside any other agent's own additions.
  clueStripHeading: 'Case file',
  clueYear: 'Completed',
  // Shown instead of `clueYear` when the building's `completed` is null
  // (still under construction / no recorded completion) and the year clue
  // falls back to `inception` — never label an unfinished building
  // "Completed" (review B3/B4 Critical #2, e.g. Sagrada Família).
  clueYearBegun: 'Begun',
  clueCountry: 'Country',
  clueTypologyMaterial: 'Typology + material',
  clueSecondPhoto: 'Second photograph',
  clueMovementSibling: 'Movement',
  clueAlsoDesigned: 'Also designed',

  // Alt text for the crop-stage photo and the clue strip's second photo
  // while a round is unresolved (codereview finding #2: the real building
  // name must never reach a screen reader before the round is solved/lost —
  // Reveal.tsx's own photo keeps the real name, correctly, post-resolution).
  mysteryBuildingAlt: 'Mystery building — cropped detail',
};

type Strings = typeof en;

const es: Strings = {
  appTitle: 'Architectle',
  appTagline: 'Adivina al arquitecto a partir de un encuadre que se abre poco a poco.',
  navArchive: 'Archivo',
  navAbout: 'Acerca de',
  navArchitectsLink: 'Arquitectos',
  languageLabel: 'Idioma',
  languageEnglish: 'Inglés',
  languageSpanish: 'Español',
  languageItalian: 'Italiano',
  dailyGame: 'Puzzle diario',

  guessCounter: 'Intento {n} de {total}',
  guessFieldLabel: 'Nombra al arquitecto',
  guessFieldPlaceholder: 'Escribe el nombre de un arquitecto…',
  guessSubmit: 'Adivinar',
  rosterRejection: '«{name}» no está en el listado — solo puedes elegir entre los arquitectos del juego.',
  rosterRejectionLink: 'Ver el listado de arquitectos',

  axisEra: 'Época',
  axisMovement: 'Movimiento',
  axisRegion: 'Región',
  axisTypology: 'Tipología y material',

  eraContemporary: 'Contemporáneo',
  eraNear: 'Cercano',
  eraFar: 'Lejano',
  eraDirectionEarlier: 'antes',
  eraDirectionLater: 'después',
  eraDirectionSame: 'al mismo tiempo',
  eraChipAriaSame: '{axis}: {bucket}, el arquitecto elegido trabajó al mismo tiempo que el objetivo',
  eraChipAriaDiff: '{axis}: {bucket}, el arquitecto elegido trabajó {years} años {direction}',

  movementExact: 'Mismo movimiento',
  movementShared: 'Movimiento compartido',
  movementFamily: 'Misma familia',
  movementNone: 'Sin relación',
  movementChipAria: '{axis}: {result}',

  regionExact: 'Misma región',
  regionRegionMatch: 'Misma región amplia',
  regionNone: 'Región distinta',
  regionChipAria: '{axis}: {result}',
  regionChipAriaBearing: '{axis}: {result}, el objetivo está al {bearing}',

  compassN: 'norte',
  compassNE: 'noreste',
  compassE: 'este',
  compassSE: 'sureste',
  compassS: 'sur',
  compassSW: 'suroeste',
  compassW: 'oeste',
  compassNW: 'noroeste',

  typologyExact: 'Misma tipología y material',
  typologyPartial: 'Coincidencia parcial',
  typologyNone: 'Sin coincidencia',
  typologyChipAria: '{axis}: {result}',

  winTitle: 'Resuelto',
  winMessage: 'Has acertado al arquitecto en {n} de {total} intentos.',
  lossTitle: 'Sin intentos',
  lossMessage: 'El arquitecto era {name}.',
  shareButton: 'Compartir',
  shareCopyButton: 'Copiar',
  shareCopied: 'Copiado al portapapeles',
  shareCopyFailed: 'No se pudo copiar',
  sharePreviewHeading: 'Qué se comparte',
  sharePreviewNote: 'Sin spoilers — sin el nombre del arquitecto ni del edificio.',
  playAgain: 'Jugar sin límite',
  unlimitedEyebrow: 'Práctica sin límite',
  unlimitedNote: 'Las partidas sin límite no afectan a las estadísticas ni a la racha diarias.',
  shareDailyHeader: 'Architectle #{n} {score}',
  shareUnlimitedHeader: 'Architectle sin límite {score}',

  statsTitle: 'Estadísticas',
  statsPlayed: 'Jugadas',
  statsWinPct: '% de victorias',
  statsStreak: 'Racha',
  statsMaxStreak: 'Racha máxima',
  statsDistribution: 'Distribución de intentos',

  revealDossier: 'Ficha',
  revealProvenance: 'Procedencia',
  revealSources: 'Fuentes',
  revealArchitect: 'Arquitecto',
  revealContext: 'Contexto',
  revealAnotherAngle: 'Otro ángulo',
  archiveMoreViews: 'Más vistas',

  factCompleted: 'Finalización',
  factLocation: 'Ubicación',
  factTypology: 'Tipología',
  factMaterial: 'Material',

  provenanceNoWikidata: 'Sin elemento de Wikidata',
  provenanceWikidataLabel: 'Wikidata',
  provenanceCommonsLabel: 'Commons',
  provenancePhotographerLabel: 'Foto',
  provenanceLicenseLabel: 'Licencia',

  architectUnaffiliated: 'Sin afiliación',

  typologyHousing: 'Vivienda',
  typologyCivic: 'Cívico',
  typologySacral: 'Sacro',
  typologyCultural: 'Cultural',
  typologyCommercial: 'Comercial',
  typologyIndustrial: 'Industrial',
  typologyEducational: 'Educativo',
  typologyInfrastructure: 'Infraestructura',
  typologyTower: 'Torre',
  typologyDomestic: 'Doméstico',

  materialConcrete: 'Hormigón',
  materialBrick: 'Ladrillo',
  materialSteelGlass: 'Acero y vidrio',
  materialTimber: 'Madera',
  materialStone: 'Piedra',
  materialEarth: 'Tierra',
  materialMixed: 'Mixto',

  navBuildingsLink: 'Edificios',
  navMovementsLink: 'Movimientos',

  archiveWorksHeading: 'Obras en el juego',
  archiveContemporariesHeading: 'Contemporáneos',
  archiveFloruit: 'Activo',
  archiveApproxSpan: 'Período aproximado',
  archiveOngoing: 'en curso',
  archiveFamily: 'Familia',
  archiveWithCoArchitects: 'Con',
  archiveViewOnMap: 'Ver en el mapa',
  archiveAllBuildings: 'Todos los edificios',
  archiveAllArchitects: 'Todos los arquitectos',
  archiveAllMovements: 'Todos los movimientos',
  archiveNoBuildings: 'Aún no hay edificios documentados.',
  archiveNoContemporaries: 'Aún no hay contemporáneos documentados.',
  archiveBuildingsCount: '{count} edificios',
  archiveArchitectsCount: '{count} arquitectos',
  archiveMovementsCount: '{count} movimientos',

  metaArchiveTitle: '{name}',
  metaBuildingTitle: '{building} — {architect}',
  metaBuildingsIndexDescription: 'Todos los edificios del listado de Architectle — {count} monumentos, ilustrados y documentados.',
  metaArchitectsIndexDescription: 'Todos los arquitectos del listado de Architectle — {count} nombres, con sus obras, movimientos y procedencia.',
  metaMovementsIndexDescription: 'Todos los movimientos arquitectónicos presentes en el listado de Architectle — {count} movimientos, con sus arquitectos y edificios.',
  metaHomeDescription: 'Puzle diario de arquitectura n.º {n} ({date}) — adivina el arquitecto a partir de un recorte que se va ampliando de la foto de un edificio. Un edificio nuevo cada día.',
  metaAboutDescription: 'Qué es Architectle, de dónde vienen sus datos y las limitaciones honestas de un listado de edificios y arquitectos curado a mano.',
  ogHomeAlt: 'Architectle — adivina al arquitecto a partir de un encuadre que se abre poco a poco de la foto de un edificio. Un edificio nuevo cada día.',
  ogDailyBuildingLine: 'Un edificio nuevo, cada día.',
  ogArchiveLabel: 'Archivo de Architectle',

  familyClassical: 'Clásica',
  familyMedieval: 'Medieval',
  familyIslamic: 'Islámica',
  familyRenaissanceBaroque: 'Renacimiento y Barroco',
  familyRevivalist: 'Revivalista',
  familyModernism: 'Modernismo',
  familyPostmodernism: 'Posmodernismo',
  familyContemporary: 'Contemporánea',
  familyVernacular: 'Vernácula',

  clueStripHeading: 'Expediente',
  clueYear: 'Finalización',
  clueYearBegun: 'Comenzado',
  clueCountry: 'País',
  clueTypologyMaterial: 'Tipología y material',
  clueSecondPhoto: 'Segunda fotografía',
  clueMovementSibling: 'Movimiento',
  clueAlsoDesigned: 'También diseñó',

  mysteryBuildingAlt: 'Edificio misterioso — detalle recortado',
};

const it: Strings = {
  appTitle: 'Architectle',
  appTagline: 'Indovina l’architetto da un’inquadratura che si allarga poco a poco.',
  navArchive: 'Archivio',
  navAbout: 'Informazioni',
  navArchitectsLink: 'Architetti',
  languageLabel: 'Lingua',
  languageEnglish: 'Inglese',
  languageSpanish: 'Spagnolo',
  languageItalian: 'Italiano',
  dailyGame: 'Puzzle quotidiano',

  guessCounter: 'Tentativo {n} di {total}',
  guessFieldLabel: "Nomina l'architetto",
  guessFieldPlaceholder: 'Scrivi il nome di un architetto…',
  guessSubmit: 'Indovina',
  rosterRejection: '«{name}» non è nell’elenco — puoi scegliere solo tra gli architetti del gioco.',
  rosterRejectionLink: "Sfoglia l'elenco degli architetti",

  axisEra: 'Epoca',
  axisMovement: 'Movimento',
  axisRegion: 'Regione',
  axisTypology: 'Tipologia e materiale',

  eraContemporary: 'Contemporaneo',
  eraNear: 'Vicino',
  eraFar: 'Lontano',
  eraDirectionEarlier: 'prima',
  eraDirectionLater: 'dopo',
  eraDirectionSame: 'nello stesso periodo',
  eraChipAriaSame: '{axis}: {bucket}, l’architetto scelto ha lavorato nello stesso periodo del bersaglio',
  eraChipAriaDiff: '{axis}: {bucket}, l’architetto scelto ha lavorato {years} anni {direction}',

  movementExact: 'Stesso movimento',
  movementShared: 'Movimento condiviso',
  movementFamily: 'Stessa famiglia',
  movementNone: 'Nessuna relazione',
  movementChipAria: '{axis}: {result}',

  regionExact: 'Stessa regione',
  regionRegionMatch: 'Stessa macroregione',
  regionNone: 'Regione diversa',
  regionChipAria: '{axis}: {result}',
  regionChipAriaBearing: '{axis}: {result}, il bersaglio si trova a {bearing}',

  compassN: 'nord',
  compassNE: 'nord-est',
  compassE: 'est',
  compassSE: 'sud-est',
  compassS: 'sud',
  compassSW: 'sud-ovest',
  compassW: 'ovest',
  compassNW: 'nord-ovest',

  typologyExact: 'Stessa tipologia e materiale',
  typologyPartial: 'Corrispondenza parziale',
  typologyNone: 'Nessuna corrispondenza',
  typologyChipAria: '{axis}: {result}',

  winTitle: 'Risolto',
  winMessage: "Hai indovinato l'architetto in {n} tentativi su {total}.",
  lossTitle: 'Tentativi esauriti',
  lossMessage: "L'architetto era {name}.",
  shareButton: 'Condividi',
  shareCopyButton: 'Copia',
  shareCopied: 'Copiato negli appunti',
  shareCopyFailed: 'Copia non riuscita',
  sharePreviewHeading: 'Cosa viene condiviso',
  sharePreviewNote: 'Senza spoiler — niente nome dell’architetto o dell’edificio.',
  playAgain: 'Gioca senza limiti',
  unlimitedEyebrow: 'Pratica senza limiti',
  unlimitedNote: 'Le partite senza limiti non influenzano statistiche o serie giornaliere.',
  shareDailyHeader: 'Architectle #{n} {score}',
  shareUnlimitedHeader: 'Architectle senza limiti {score}',

  statsTitle: 'Statistiche',
  statsPlayed: 'Partite',
  statsWinPct: '% vittorie',
  statsStreak: 'Serie',
  statsMaxStreak: 'Serie massima',
  statsDistribution: 'Distribuzione dei tentativi',

  revealDossier: 'Scheda',
  revealProvenance: 'Provenienza',
  revealSources: 'Fonti',
  revealArchitect: 'Architetto',
  revealContext: 'Contesto',
  revealAnotherAngle: 'Un altro punto di vista',
  archiveMoreViews: 'Altre vedute',

  factCompleted: 'Completamento',
  factLocation: 'Posizione',
  factTypology: 'Tipologia',
  factMaterial: 'Materiale',

  provenanceNoWikidata: 'Nessuna voce Wikidata',
  provenanceWikidataLabel: 'Wikidata',
  provenanceCommonsLabel: 'Commons',
  provenancePhotographerLabel: 'Foto',
  provenanceLicenseLabel: 'Licenza',

  architectUnaffiliated: 'Non affiliato',

  typologyHousing: 'Residenziale',
  typologyCivic: 'Civile',
  typologySacral: 'Sacro',
  typologyCultural: 'Culturale',
  typologyCommercial: 'Commerciale',
  typologyIndustrial: 'Industriale',
  typologyEducational: 'Educativo',
  typologyInfrastructure: 'Infrastruttura',
  typologyTower: 'Torre',
  typologyDomestic: 'Domestico',

  materialConcrete: 'Cemento',
  materialBrick: 'Mattone',
  materialSteelGlass: 'Acciaio e vetro',
  materialTimber: 'Legno',
  materialStone: 'Pietra',
  materialEarth: 'Terra',
  materialMixed: 'Misto',

  navBuildingsLink: 'Edifici',
  navMovementsLink: 'Movimenti',

  archiveWorksHeading: 'Opere nel gioco',
  archiveContemporariesHeading: 'Contemporanei',
  archiveFloruit: 'Attivo',
  archiveApproxSpan: 'Periodo approssimativo',
  archiveOngoing: 'in corso',
  archiveFamily: 'Famiglia',
  archiveWithCoArchitects: 'Con',
  archiveViewOnMap: 'Vedi sulla mappa',
  archiveAllBuildings: 'Tutti gli edifici',
  archiveAllArchitects: 'Tutti gli architetti',
  archiveAllMovements: 'Tutti i movimenti',
  archiveNoBuildings: 'Nessun edificio ancora documentato.',
  archiveNoContemporaries: 'Nessun contemporaneo ancora documentato.',
  archiveBuildingsCount: '{count} edifici',
  archiveArchitectsCount: '{count} architetti',
  archiveMovementsCount: '{count} movimenti',

  metaArchiveTitle: '{name}',
  metaBuildingTitle: '{building} — {architect}',
  metaBuildingsIndexDescription: "Tutti gli edifici del catalogo di Architectle — {count} monumenti, illustrati e documentati.",
  metaArchitectsIndexDescription: 'Tutti gli architetti del catalogo di Architectle — {count} nomi, con le loro opere, i movimenti e la provenienza.',
  metaMovementsIndexDescription: 'Tutti i movimenti architettonici presenti nel catalogo di Architectle — {count} movimenti, con i loro architetti ed edifici.',
  metaHomeDescription: "Puzzle quotidiano di architettura n. {n} ({date}) — indovina l'architetto da un ritaglio che si allarga della foto di un edificio. Un edificio nuovo ogni giorno.",
  metaAboutDescription: "Cos'è Architectle, da dove vengono i suoi dati e i limiti onesti di un catalogo di edifici e architetti curato a mano.",
  ogHomeAlt: "Architectle — indovina l'architetto da un'inquadratura che si allarga poco a poco della foto di un edificio. Un edificio nuovo ogni giorno.",
  ogDailyBuildingLine: 'Un nuovo edificio, ogni giorno.',
  ogArchiveLabel: 'Archivio di Architectle',

  familyClassical: 'Classica',
  familyMedieval: 'Medievale',
  familyIslamic: 'Islamica',
  familyRenaissanceBaroque: 'Rinascimento e Barocco',
  familyRevivalist: 'Revivalista',
  familyModernism: 'Modernismo',
  familyPostmodernism: 'Postmodernismo',
  familyContemporary: 'Contemporanea',
  familyVernacular: 'Vernacolare',

  clueStripHeading: 'Fascicolo',
  clueYear: 'Completamento',
  clueYearBegun: 'Iniziato',
  clueCountry: 'Paese',
  clueTypologyMaterial: 'Tipologia e materiale',
  clueSecondPhoto: 'Seconda fotografia',
  clueMovementSibling: 'Movimento',
  clueAlsoDesigned: 'Ha anche progettato',

  mysteryBuildingAlt: 'Edificio misterioso — dettaglio ritagliato',
};

export const STRINGS: Record<Locale, Strings> = { en, es, it };

/**
 * Looks up `key` in `locale` and interpolates any `{param}` placeholders.
 * Never throws: a key missing from `STRINGS[locale]` (impossible for a
 * `keyof Strings`, but `t` is also called with values coming from data or
 * tests) falls back to the raw key string.
 */
export function t(
  locale: Locale,
  key: keyof Strings | string,
  params?: Record<string, string | number>,
): string {
  const table = STRINGS[locale] as Record<string, string>;
  const template = table[key];
  if (template === undefined) return key;
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (match, name: string) => (
    Object.prototype.hasOwnProperty.call(params, name) ? String(params[name]) : match
  ));
}
