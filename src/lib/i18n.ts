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
  shareCopied: 'Copied to clipboard',
  playAgain: 'Play unlimited',

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
};

type Strings = typeof en;

const es: Strings = {
  appTitle: 'Architectle',
  appTagline: 'Adivina al arquitecto a partir de un encuadre que se abre poco a poco.',
  navArchive: 'Archivo',
  navAbout: 'Acerca de',
  navArchitectsLink: 'Arquitectos',

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
  shareCopied: 'Copiado al portapapeles',
  playAgain: 'Jugar sin límite',

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
};

const it: Strings = {
  appTitle: 'Architectle',
  appTagline: 'Indovina l’architetto da un’inquadratura che si allarga poco a poco.',
  navArchive: 'Archivio',
  navAbout: 'Informazioni',
  navArchitectsLink: 'Architetti',

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
  shareCopied: 'Copiato negli appunti',
  playAgain: 'Gioca senza limiti',

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
