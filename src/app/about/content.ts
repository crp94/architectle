// Trilingual content for /about, owned exclusively by this route.
//
// This is deliberately NOT routed through src/lib/i18n.ts: that file holds
// short, parametrized UI strings shared across the whole app, and this page
// is a few thousand words of long-form, one-off prose. Structuring it the
// same way the curated pool structures a dossier or a ContextBlock — a
// `LocalizedString`-shaped block per unit of content — keeps it consistent
// with the rest of the codebase's data model without turning the shared
// string table into a prose dump. See src/types/common.ts for the type this
// mirrors exactly.
//
// Every factual claim below (numbers, names, dates, legal findings) is
// carried over from this project's own curation ledger
// (.superpowers/sdd/2026-08-26-architectle/progress.md) and, for the pool
// statistics, recomputed directly against src/data/curated-buildings.json
// and src/data/curated-architects.json rather than copied from memory.
// If the pool changes, re-run the numbers before editing this file.

import type { LocalizedString } from '@/types/common';

export type CoverageGateRow = {
  id: string;
  label: LocalizedString;
  target: string;
  actual: string;
};

export type AboutSection = {
  id: string;
  heading: LocalizedString;
  paragraphs: LocalizedString[];
  /** Only the coverage-targets section carries this; rendered as a fact-grid
   * between its two paragraphs. */
  gates?: CoverageGateRow[];
};

export const COVERAGE_GATES: CoverageGateRow[] = [
  {
    id: 'era-pre-1800',
    label: { en: 'Pre-1800 buildings', es: 'Edificios anteriores a 1800', it: 'Edifici precedenti al 1800' },
    target: '≥10%',
    actual: '17.2%',
  },
  {
    id: 'era-1800-1945',
    label: { en: '1800–1945', es: '1800–1945', it: '1800–1945' },
    target: '≥25%',
    actual: '25.3%',
  },
  {
    id: 'era-1945-2000',
    label: { en: '1945–2000', es: '1945–2000', it: '1945–2000' },
    target: '≥40%',
    actual: '40.3%',
  },
  {
    id: 'era-post-2000',
    label: { en: 'Post-2000 buildings', es: 'Edificios posteriores a 2000', it: 'Edifici successivi al 2000' },
    target: '≥15%',
    actual: '17.2%',
  },
  {
    id: 'geo-europe',
    label: { en: 'Europe', es: 'Europa', it: 'Europa' },
    target: '≤45%',
    actual: '35.3%',
  },
  {
    id: 'geo-north-america',
    label: { en: 'North America', es: 'América del Norte', it: 'America settentrionale' },
    target: '≤25%',
    actual: '5.4%',
  },
  {
    id: 'geo-asia',
    label: {
      en: 'East / South / Southeast Asia',
      es: 'Asia oriental, meridional y sudoriental',
      it: 'Asia orientale, meridionale e sud-orientale',
    },
    target: '≥15%',
    actual: '20.8%',
  },
  {
    id: 'geo-africa-westasia',
    label: { en: 'Africa and Western Asia', es: 'África y Asia occidental', it: 'Africa e Asia occidentale' },
    target: '≥12%',
    actual: '20.8%',
  },
  {
    id: 'geo-latin-america',
    label: { en: 'Latin America', es: 'América Latina', it: 'America Latina' },
    target: '≥10%',
    actual: '17.6%',
  },
  {
    id: 'gender',
    label: {
      en: 'Women or non-binary architects',
      es: 'Arquitectas o personas no binarias',
      it: 'Architette o persone non binarie',
    },
    target: '≥20%',
    actual: '23.2%',
  },
  {
    id: 'canon',
    label: { en: 'Canon-tier buildings', es: 'Edificios de nivel «canon»', it: 'Edifici di livello «canone»' },
    target: '≥60%',
    actual: '73.8%',
  },
  {
    id: 'max-per-architect',
    label: {
      en: 'Max buildings per architect',
      es: 'Máximo de edificios por arquitecto',
      it: 'Massimo di edifici per architetto',
    },
    target: '≤3',
    actual: '3',
  },
];

export const ABOUT_SECTIONS: AboutSection[] = [
  {
    id: 'what-this-is',
    heading: { en: 'What this is', es: 'Qué es esto', it: "Cos'è questo" },
    paragraphs: [
      {
        en: "Architectle is a daily deduction game. You see a tight, hand-picked crop of a building's most diagnostic detail — a joint, a window reveal, a stair, a material junction — and you have six guesses to name its architect. Every wrong guess widens the frame and tells you how your guess relates to the real architect across four axes: era, movement, region, and typology plus material. Guess correctly, or run out of guesses, and you get the building's dossier and the architect's portrait.",
        es: 'Architectle es un juego diario de deducción. Ves el encuadre ajustado y elegido a mano del detalle más diagnóstico de un edificio —una junta, el hueco de una ventana, una escalera, un encuentro de materiales— y tienes seis intentos para nombrar a su arquitecto. Cada fallo amplía el encuadre y te dice cómo se relaciona tu respuesta con el arquitecto real en cuatro ejes: época, movimiento, región y tipología más material. Si aciertas, o se te acaban los intentos, obtienes la ficha del edificio y el retrato del arquitecto.',
        it: "Architectle è un gioco quotidiano di deduzione. Vedi un ritaglio stretto e scelto a mano del dettaglio più rivelatore di un edificio — un giunto, lo strombo di una finestra, una scala, un incontro tra materiali — e hai sei tentativi per nominarne l'architetto. Ogni tentativo sbagliato allarga l'inquadratura e ti dice come la tua risposta si relaziona all'architetto reale lungo quattro assi: epoca, movimento, regione e tipologia più materiale. Se indovini, o finisci i tentativi, ottieni la scheda dell'edificio e il ritratto dell'architetto.",
      },
      {
        en: "This page is the disclosure the rest of the game doesn't have room for: where the data comes from, what was verified and how, what had to be left out and why, and where the project's own incentives pulled in the wrong direction. Architectle is a game, not a research dataset. It is a curated selection of 221 buildings and 237 architects out of roughly 93,000 Wikidata candidates that carry both a named architect and a photograph — shaped as much by copyright law and by what has been photographed and licensed as by the actual history of architecture. It does not claim to be a statistically representative sample of world architecture, and this page is where that claim gets made explicit rather than implied.",
        es: 'Esta página es la información que el resto del juego no tiene espacio para dar: de dónde vienen los datos, qué se verificó y cómo, qué tuvo que quedar fuera y por qué, y en qué puntos los propios incentivos del proyecto tiraron en la dirección equivocada. Architectle es un juego, no un conjunto de datos de investigación. Es una selección curada de 221 edificios y 237 arquitectos de entre unos 93.000 candidatos de Wikidata que tienen a la vez un arquitecto nombrado y una fotografía —moldeada tanto por el derecho de autor y por lo que se ha fotografiado y licenciado en abierto como por la historia real de la arquitectura. No pretende ser una muestra estadísticamente representativa de la arquitectura mundial, y esta página es donde esa afirmación se hace explícita en lugar de darse por sentada.',
        it: "Questa pagina è la trasparenza per cui il resto del gioco non ha spazio: da dove vengono i dati, cosa è stato verificato e come, cosa è dovuto restare fuori e perché, e dove gli stessi incentivi del progetto hanno spinto nella direzione sbagliata. Architectle è un gioco, non un insieme di dati di ricerca. È una selezione curata di 221 edifici e 237 architetti tra circa 93.000 candidati di Wikidata che portano insieme un architetto nominato e una fotografia — plasmata tanto dal diritto d'autore e da ciò che è stato fotografato e concesso in licenza aperta quanto dalla storia reale dell'architettura. Non pretende di essere un campione statisticamente rappresentativo dell'architettura mondiale, e questa pagina è il luogo in cui quell'affermazione viene resa esplicita invece che sottintesa.",
      },
    ],
  },
  {
    id: 'data-and-curation',
    heading: { en: 'Where the data comes from', es: 'De dónde vienen los datos', it: 'Da dove vengono i dati' },
    paragraphs: [
      {
        en: "Every building and architect in the pool is hand-authored, not scraped. Wikidata is queried by SPARQL for candidates — buildings that carry an architect (P84), an image (P18), a construction date (P571), and, where available, a style, a location and a heritage status — but that query's output is a research aid, a list of what might be usable, never data that ships. A curator reads the candidate, checks it against independent sources, writes the dossier, and only then does it become part of the pool. The curation script itself reads no external data at build time: once authored, the pool is a set of typed TypeScript source files, checked and validated on every change, and the build is completely offline and deterministic — nothing in Architectle can break because a file was renamed, relicensed or deleted on Wikimedia's servers after the fact.",
        es: 'Cada edificio y cada arquitecto del catálogo está redactado a mano, no extraído automáticamente. Wikidata se consulta mediante SPARQL en busca de candidatos —edificios que tengan un arquitecto (P84), una imagen (P18), una fecha de construcción (P571) y, cuando existan, un estilo, una ubicación y un estatus patrimonial— pero el resultado de esa consulta es solo una ayuda de investigación, una lista de lo que podría servir, nunca datos que se publican tal cual. Un curador lee el candidato, lo contrasta con fuentes independientes, escribe la ficha, y solo entonces pasa a formar parte del catálogo. El propio script de curación no lee ningún dato externo al construir: una vez redactado, el catálogo es un conjunto de archivos TypeScript tipados, validados en cada cambio, y la construcción es completamente offline y determinista —nada en Architectle puede romperse porque un archivo se haya renombrado, recibido otra licencia o eliminado en los servidores de Wikimedia después de curarlo.',
        it: "Ogni edificio e ogni architetto del catalogo è scritto a mano, non estratto automaticamente. Wikidata viene interrogato via SPARQL alla ricerca di candidati — edifici che abbiano un architetto (P84), un'immagine (P18), una data di costruzione (P571) e, dove disponibili, uno stile, una collocazione e uno stato di tutela — ma il risultato di quella query è solo un aiuto alla ricerca, un elenco di ciò che potrebbe servire, mai dati pubblicati così come sono. Un curatore legge il candidato, lo verifica con fonti indipendenti, scrive la scheda, e solo allora questa entra a far parte del catalogo. Lo script di curazione stesso non legge alcun dato esterno in fase di build: una volta redatto, il catalogo è un insieme di file TypeScript tipizzati, validati a ogni modifica, e la build è completamente offline e deterministica — nulla in Architectle può rompersi perché un file è stato rinominato, rilicenziato o eliminato sui server di Wikimedia dopo la curazione.",
      },
      {
        en: "One consequence of that division worth stating plainly: for a while, this project required every building and every architect to carry a Wikidata Q-number, and that requirement reproduced the exact coverage bias the project exists to correct. Georgette Cottin-Euziol — a well-documented Algerian architect with a freely-licensed photograph of her building available — was excluded for a period purely because Wikidata has no item for the building itself, not because sources for her were missing. The fix was to make wikidataId nullable on both buildings and architects, on the condition that anything without one carries at least two independent, non-Wikidata, non-Wikipedia sources instead. Gatekeeping this pool on Wikidata's own coverage would have meant inheriting its gaps.",
        es: 'Una consecuencia de esa separación merece decirse con claridad: durante un tiempo, este proyecto exigió que todo edificio y todo arquitecto tuviera un número Q de Wikidata, y esa exigencia reproducía exactamente el sesgo de cobertura que el proyecto existe para corregir. Georgette Cottin-Euziol —una arquitecta argelina bien documentada, con una fotografía de su edificio disponible en licencia abierta— quedó excluida durante un tiempo solo porque Wikidata no tiene ficha para ese edificio en concreto, no porque le faltaran fuentes. La solución fue hacer que wikidataId pudiera ser nulo tanto en edificios como en arquitectos, con la condición de que todo lo que carezca de él aporte al menos dos fuentes independientes, ni de Wikidata ni de Wikipedia. Filtrar este catálogo por la propia cobertura de Wikidata habría significado heredar sus huecos.',
        it: "Una conseguenza di questa separazione merita di essere detta chiaramente: per un periodo, questo progetto ha richiesto che ogni edificio e ogni architetto avesse un numero Q di Wikidata, e quel requisito riproduceva esattamente il pregiudizio di copertura che il progetto esiste per correggere. Georgette Cottin-Euziol — un'architetta algerina ben documentata, con una fotografia del suo edificio disponibile in licenza aperta — è rimasta esclusa per un periodo solo perché Wikidata non ha una voce per quello specifico edificio, non perché mancassero fonti su di lei. La soluzione è stata rendere wikidataId nullable sia per gli edifici sia per gli architetti, a condizione che tutto ciò che ne è privo porti almeno due fonti indipendenti, né di Wikidata né di Wikipedia. Filtrare questo catalogo sulla copertura di Wikidata stessa avrebbe significato ereditarne le lacune.",
      },
    ],
  },
  {
    id: 'licences',
    heading: {
      en: 'Licences, verified by hand, not by API',
      es: 'Licencias, verificadas a mano, no por API',
      it: 'Licenze, verificate a mano, non tramite API',
    },
    paragraphs: [
      {
        en: "Every image is Wikimedia Commons or Flickr, openly licensed, and attributed to the photographer as credited on the file's own page — which on Commons is very often a username rather than a legal name, and that is treated as a complete, valid credit rather than grounds to discard the file. Licences are read directly off the rendered file page, never off the Commons API's extmetadata field. That is not a stylistic preference: during curation, extmetadata reported at least two CC-licensed Grand Egyptian Museum files as “Public domain” when the file pages' own licence boxes clearly read CC BY-SA 4.0 and CC BY 4.0. A pipeline or a curator trusting that field would have recorded a wrong licence while believing it had verified one, so Architectle's tooling reads the rendered page instead, on principle, every time.",
        es: 'Todas las imágenes proceden de Wikimedia Commons o de Flickr, tienen licencia abierta y se atribuyen al fotógrafo tal como consta en la propia página del archivo —que en Commons suele ser un nombre de usuario y no un nombre legal, y eso se trata como una atribución completa y válida, no como motivo para descartar el archivo. Las licencias se leen directamente en la página del archivo, tal como se muestra, nunca en el campo extmetadata de la API de Commons. No es una preferencia de estilo: durante la curación, extmetadata indicó que al menos dos archivos con licencia CC del Gran Museo Egipcio eran «dominio público», cuando los recuadros de licencia de esas mismas páginas decían claramente CC BY-SA 4.0 y CC BY 4.0. Un proceso o un curador que confiara en ese campo habría registrado una licencia equivocada creyendo haberla verificado, así que las herramientas de Architectle leen siempre la página renderizada, por principio.',
        it: "Tutte le immagini provengono da Wikimedia Commons o da Flickr, hanno licenza aperta e sono attribuite al fotografo così come indicato nella pagina del file — che su Commons è molto spesso un nome utente e non un nome legale, e questo viene considerato un credito completo e valido, non un motivo per scartare il file. Le licenze si leggono direttamente sulla pagina del file così come viene renderizzata, mai dal campo extmetadata dell'API di Commons. Non è una preferenza stilistica: durante la curazione, extmetadata ha segnalato almeno due file con licenza CC del Grand Egyptian Museum come «di pubblico dominio», mentre i riquadri di licenza delle stesse pagine indicavano chiaramente CC BY-SA 4.0 e CC BY 4.0. Una pipeline o un curatore che si fidasse di quel campo avrebbe registrato una licenza sbagliata credendo di averla verificata, perciò gli strumenti di Architectle leggono sempre la pagina renderizzata, per principio, ogni volta.",
      },
      {
        en: "Freedom of Panorama — the exemption that lets a photograph of a building in a public place be reused despite the architecture still being in copyright — covers exteriors, not interiors, anywhere. An interior photograph of a still-in-copyright building is a derivative work of the architect's own expression, and no photographer's Creative Commons licence can clear that on their behalf. So: any building whose architect died within the last 70 years, or is still living, is represented only by an exterior photograph, framed on exterior fabric. One candidate — a hotel in Tripoli by an architect who died in 1965 — was dropped after a reviewer noticed its only usable image was an interior courtyard shot; a private hotel courtyard is not a public place under any Freedom of Panorama exception, and the building could not be fixed by re-reading the licence. Buildings out of copyright by age are unaffected.",
        es: 'La Libertad de Panorama —la excepción que permite reutilizar la fotografía de un edificio en un lugar público aunque la arquitectura siga protegida por derechos de autor— cubre exteriores, no interiores, en ningún país. Una fotografía de interior de un edificio aún protegido es una obra derivada de la expresión propia del arquitecto, y ninguna licencia Creative Commons del fotógrafo puede autorizarla en su nombre. Por eso, cualquier edificio cuyo arquitecto falleciera hace menos de 70 años, o que siga vivo, se representa únicamente con una fotografía exterior, encuadrada sobre la fábrica exterior. Un candidato —un hotel de Trípoli obra de un arquitecto fallecido en 1965— se descartó al advertir un revisor que su única imagen utilizable era la de un patio interior; el patio privado de un hotel no es un lugar público bajo ninguna excepción de Libertad de Panorama, y el problema no se podía resolver releyendo la licencia. Los edificios ya en dominio público por antigüedad no se ven afectados.',
        it: "La Libertà di Panorama — l'eccezione che consente di riutilizzare la fotografia di un edificio in un luogo pubblico anche se l'architettura è ancora protetta da copyright — copre gli esterni, non gli interni, ovunque. Una fotografia d'interni di un edificio ancora protetto è un'opera derivata dell'espressione propria dell'architetto, e nessuna licenza Creative Commons del fotografo può autorizzarla per suo conto. Perciò: qualsiasi edificio il cui architetto sia morto negli ultimi 70 anni, o sia ancora vivente, è rappresentato solo da una fotografia esterna, inquadrata sulla fabbrica esterna. Un candidato — un albergo di Tripoli opera di un architetto morto nel 1965 — è stato scartato dopo che un revisore ha notato che l'unica immagine utilizzabile era quella di un cortile interno; il cortile privato di un albergo non è un luogo pubblico secondo nessuna eccezione di Libertà di Panorama, e il problema non si poteva risolvere rileggendo la licenza. Gli edifici già di pubblico dominio per anzianità non sono interessati.",
      },
    ],
  },
  {
    id: 'derived-vs-judgement',
    heading: {
      en: "What's derived, what's judgement",
      es: 'Qué se deriva, qué es criterio editorial',
      it: "Cosa è derivato, cosa è giudizio curatoriale",
    },
    paragraphs: [
      {
        en: "The four axes the game compares are not all the same kind of fact. Era and region are derived: an architect's floruit is the span of their attributed completed works (the min and max of Wikidata's P571 across their buildings in the pool), and their practice region is the UN M49 subregion of the countries where they built. Both come out of sourced data, with a hand-override only where Wikidata's own dates are wrong or too thin to trust.",
        es: 'Los cuatro ejes que compara el juego no son todos el mismo tipo de dato. La época y la región se derivan: el «floruit» de un arquitecto es el intervalo de sus obras completadas atribuidas (el mínimo y el máximo de la propiedad P571 de Wikidata entre sus edificios del catálogo), y su región de práctica es la subregión de la ONU (M49) de los países donde construyó. Ambos salen de datos con fuente, con una anulación manual solo cuando las fechas de Wikidata son erróneas o demasiado escasas para fiarse de ellas.',
        it: "I quattro assi che il gioco confronta non sono tutti lo stesso tipo di dato. Epoca e regione sono derivati: il «floruit» di un architetto è l'intervallo delle sue opere completate attribuite (il minimo e il massimo della proprietà P571 di Wikidata tra i suoi edifici nel catalogo), e la sua regione di pratica è la sottoregione ONU (M49) dei paesi in cui ha costruito. Entrambi provengono da dati con fonte, con una sovrascrittura manuale solo dove le date di Wikidata sono sbagliate o troppo scarse per fidarsene.",
      },
      {
        en: "Movement and typology-plus-material are not derived — they are the curators' own editorial call, stated as such everywhere they appear. Each architect carries one to three movement tags from a two-level taxonomy (a family, like Modernism, containing movements like Brutalism or Metabolism), with one marked primary, or the single value unaffiliated. Unaffiliated never matches anything in the game, including another architect who is also unaffiliated — the absence of a label is not itself a shared label. Many real architects reject movement affiliation outright, and the game does not invent one just to make its own mechanic tidier. The taxonomy is contested by nature, and every archive page says so rather than presenting it as settled fact.",
        es: 'El movimiento y la tipología más material no se derivan: son un criterio editorial propio de los curadores, señalado como tal en cada lugar donde aparece. Cada arquitecto lleva de una a tres etiquetas de movimiento de una taxonomía de dos niveles (una familia, como el Modernismo, que contiene movimientos como el Brutalismo o el Metabolismo), con una marcada como principal, o bien el valor único unaffiliated (sin afiliación). Unaffiliated nunca coincide con nada en el juego, ni siquiera con otro arquitecto también unaffiliated —la ausencia de una etiqueta no es en sí misma una etiqueta compartida. Muchos arquitectos reales rechazan de plano cualquier afiliación a un movimiento, y el juego no inventa una solo para que su propia mecánica quede más ordenada. La taxonomía es discutible por naturaleza, y cada página del archivo lo dice así, en lugar de presentarla como un hecho asentado.',
        it: "Il movimento e la tipologia più materiale non sono derivati: sono un giudizio editoriale dei curatori stessi, indicato come tale ovunque compaia. Ogni architetto porta da una a tre etichette di movimento tratte da una tassonomia a due livelli (una famiglia, come il Modernismo, che contiene movimenti come il Brutalismo o il Metabolismo), con una segnata come principale, oppure l'unico valore unaffiliated (non affiliato). Unaffiliated non corrisponde mai a nulla nel gioco, nemmeno a un altro architetto anch'esso unaffiliated — l'assenza di un'etichetta non è di per sé un'etichetta condivisa. Molti architetti reali rifiutano categoricamente qualsiasi affiliazione a un movimento, e il gioco non ne inventa una solo per rendere più ordinato il proprio meccanismo. La tassonomia è per natura controversa, e ogni pagina dell'archivio lo dichiara, invece di presentarla come un fatto acquisito.",
      },
    ],
  },
  {
    id: 'coverage-targets',
    heading: {
      en: 'The coverage targets, as gates',
      es: 'Los objetivos de cobertura, como barreras',
      it: 'Gli obiettivi di copertura, come soglie vincolanti',
    },
    paragraphs: [
      {
        en: 'A pool built by taking whatever Wikidata happens to have is not neutral: measured directly against Wikidata’s own numbers, 20th-century buildings with a named architect and an image outnumber the entirety of 1000–1500 roughly sixteen to one, and a search on Frank Lloyd Wright returns 283 attributed buildings against ten for Lina Bo Bardi, three for Balkrishna Doshi and zero for Minnette de Silva. So the pool is validated against published numeric targets on every change (npm run data:curate), and a pool that misses one does not ship. These are hard failures, not aspirations, and the actual, currently-measured pool is shown alongside each target below.',
        es: 'Un catálogo construido tomando lo que Wikidata tenga a mano no es neutral: medido directamente contra los propios números de Wikidata, los edificios del siglo XX con arquitecto nombrado e imagen superan a todo el periodo 1000–1500 en una proporción aproximada de dieciséis a uno, y una búsqueda sobre Frank Lloyd Wright devuelve 283 edificios atribuidos frente a diez de Lina Bo Bardi, tres de Balkrishna Doshi y cero de Minnette de Silva. Por eso el catálogo se valida contra objetivos numéricos publicados en cada cambio (npm run data:curate), y un catálogo que incumple uno no se publica. Son fallos duros, no aspiraciones, y junto a cada objetivo se muestra la medición real y actual del catálogo.',
        it: "Un catalogo costruito prendendo ciò che Wikidata ha a disposizione non è neutrale: misurato direttamente contro i numeri di Wikidata stessa, gli edifici del XX secolo con architetto nominato e immagine superano l'intero periodo 1000–1500 in un rapporto di circa sedici a uno, e una ricerca su Frank Lloyd Wright restituisce 283 edifici attribuiti contro dieci di Lina Bo Bardi, tre di Balkrishna Doshi e zero di Minnette de Silva. Per questo il catalogo viene validato contro obiettivi numerici pubblicati a ogni modifica (npm run data:curate), e un catalogo che ne manca uno non viene pubblicato. Sono fallimenti duri, non aspirazioni, e accanto a ogni obiettivo è mostrata la misurazione reale e attuale del catalogo.",
      },
      {
        en: 'Two of these sit close enough to their floor that a single future change could break them: 1800–1945 and 1945–2000 both came in only a few tenths of a point above their minimum at final assembly. That is disclosed here rather than smoothed over, because a coverage claim with no visible margin is a different claim from one with room to spare.',
        es: 'Dos de estos objetivos quedan lo bastante cerca de su mínimo como para que un solo cambio futuro pudiera incumplirlos: 1800–1945 y 1945–2000 llegaron al ensamblaje final apenas unas décimas por encima de su mínimo. Se dice aquí en lugar de disimularlo, porque una afirmación de cobertura sin margen visible es una afirmación distinta de una con margen de sobra.',
        it: "Due di questi obiettivi si trovano abbastanza vicini alla loro soglia minima che un singolo cambiamento futuro potrebbe farli fallire: 1800–1945 e 1945–2000 sono arrivati all'assemblaggio finale solo pochi decimi di punto sopra il minimo. Lo si dichiara qui invece di attenuarlo, perché un'affermazione di copertura senza margine visibile è un'affermazione diversa da una con margine di riserva.",
      },
    ],
    gates: COVERAGE_GATES,
  },
  {
    id: 'freedom-of-panorama',
    heading: {
      en: 'Freedom of Panorama: what copyright law removed',
      es: 'Libertad de Panorama: lo que el derecho de autor eliminó',
      it: "Libertà di Panorama: ciò che il diritto d'autore ha tolto",
    },
    paragraphs: [
      {
        en: "Freedom of Panorama is the legal exception that lets a photograph of a building standing in a public place be reused even while the building's design is still in copyright. It does not exist everywhere, it does not always cover commercial reuse (which a CC BY-SA licence requires), and where it is absent or too narrow, an entire architect's work can become unusable in a pool like this one — regardless of how important that architect is. This is not a nationality filter. Nothing in this project excludes an architect, a building or a country because of where it is from; every absence below is either a specific copyright-law finding, a missing Wikidata item, or a photograph that could not be found, and each is named as such.",
        es: 'La Libertad de Panorama es la excepción legal que permite reutilizar la fotografía de un edificio situado en un lugar público aunque el diseño del edificio siga protegido por derechos de autor. No existe en todas partes, no siempre cubre el uso comercial (que una licencia CC BY-SA exige), y donde está ausente o es demasiado limitada, la obra entera de un arquitecto puede quedar inutilizable para un catálogo como este —sin importar lo importante que sea ese arquitecto. Esto no es un filtro por nacionalidad. Nada en este proyecto excluye a un arquitecto, un edificio o un país por su procedencia; cada ausencia que sigue tiene un motivo concreto y declarado —un hallazgo de derecho de autor, una ficha de Wikidata inexistente, o una fotografía que no se pudo encontrar— y se nombra como tal.',
        it: "La Libertà di Panorama è l'eccezione legale che consente di riutilizzare la fotografia di un edificio situato in un luogo pubblico anche se il progetto dell'edificio è ancora protetto da copyright. Non esiste ovunque, non copre sempre l'uso commerciale (che una licenza CC BY-SA richiede), e dove è assente o troppo limitata, l'intera opera di un architetto può diventare inutilizzabile per un catalogo come questo — indipendentemente da quanto sia importante quell'architetto. Questo non è un filtro per nazionalità. Nulla in questo progetto esclude un architetto, un edificio o un paese per la sua provenienza; ogni assenza qui sotto ha un motivo specifico e dichiarato — un riscontro sul diritto d'autore, una voce Wikidata mancante, o una fotografia che non si è riusciti a trovare — e viene indicata come tale.",
      },
      {
        en: 'France: France has no Freedom of Panorama for architecture; commercial reuse of a photograph of an in-copyright French building requires the architect’s permission. The consequence: there is no Le Corbusier anywhere in this pool — every French building of his is blocked, and his sole Belgian work needed a design-era slot that was already full. Eileen Gray, Charlotte Perriand, Odile Decq and Anne Lacaton were all researched and discarded for the same reason; the only Commons images of Gray’s E-1027 are close-ups of storm damage. As the curator who did this research put it: France’s women architects are precisely who this law locks out.',
        es: 'Francia: Francia no tiene Libertad de Panorama para la arquitectura; reutilizar comercialmente la fotografía de un edificio francés aún protegido exige el permiso del arquitecto. Consecuencia: no hay ningún Le Corbusier en este catálogo —toda su obra francesa está bloqueada, y su única obra belga necesitaba una plaza de época que ya estaba completa. Eileen Gray, Charlotte Perriand, Odile Decq y Anne Lacaton se investigaron y se descartaron por el mismo motivo; las únicas imágenes en Commons de la E-1027 de Gray son primeros planos de daños por tormenta. En palabras de la curadora que hizo esta investigación: las arquitectas de Francia son precisamente a quienes esta ley deja fuera.',
        it: "Francia: la Francia non ha Libertà di Panorama per l'architettura; il riutilizzo commerciale della fotografia di un edificio francese ancora protetto richiede il permesso dell'architetto. Conseguenza: non c'è alcun Le Corbusier in questo catalogo — tutta la sua opera francese è bloccata, e la sua unica opera belga avrebbe richiesto un posto d'epoca già al completo. Eileen Gray, Charlotte Perriand, Odile Decq e Anne Lacaton sono state tutte ricercate e scartate per lo stesso motivo; le uniche immagini su Commons della E-1027 di Gray sono primi piani dei danni di una tempesta. Nelle parole della curatrice che ha condotto questa ricerca: le architette francesi sono esattamente chi questa legge esclude.",
      },
      {
        en: 'Belgium: Belgium has had Freedom of Panorama since 15 July 2016 — a fact this project’s own internal planning got wrong at first, listing Belgium among the countries without it, until the curator working that region checked the law directly and corrected it. Three Belgian buildings are in the pool as a result.',
        es: 'Bélgica: Bélgica tiene Libertad de Panorama desde el 15 de julio de 2016 —un dato que la planificación interna de este proyecto dio por erróneo al principio, incluyendo a Bélgica entre los países sin ella, hasta que la curadora que trabajaba esa región comprobó la ley directamente y lo corrigió. Por eso hay tres edificios belgas en el catálogo.',
        it: "Belgio: il Belgio ha la Libertà di Panorama dal 15 luglio 2016 — un dato che la pianificazione interna di questo progetto aveva inizialmente sbagliato, inserendo il Belgio tra i paesi senza, finché la curatrice che seguiva quella regione ha verificato la legge direttamente e l'ha corretto. Per questo nel catalogo ci sono tre edifici belgi.",
      },
      {
        en: 'Luxembourg: Luxembourg has no Freedom of Panorama. A planned entry for the Philharmonie Luxembourg was researched and dropped for exactly this reason; Luxembourg has zero buildings in the pool.',
        es: 'Luxemburgo: Luxemburgo no tiene Libertad de Panorama. Una entrada prevista para la Philharmonie de Luxemburgo se investigó y se descartó por este mismo motivo; Luxemburgo no tiene ningún edificio en el catálogo.',
        it: "Lussemburgo: il Lussemburgo non ha Libertà di Panorama. Una voce prevista per la Philharmonie Luxembourg è stata ricercata e scartata esattamente per questo motivo; il Lussemburgo non ha alcun edificio nel catalogo.",
      },
      {
        en: 'Egypt: Egypt’s Freedom of Panorama position was not solid enough to rely on. Hassan Fathy’s New Gourna and a planned modern museum entry were both withdrawn — one Commons file under consideration for the museum even carried a deletion nomination, and the grounds turned out to be Egyptian copyright law, not a licensing dispute. Egypt’s two entries in the pool instead credit architects who are public domain by expiry.',
        es: 'Egipto: la posición de Egipto sobre la Libertad de Panorama no era lo bastante sólida como para confiar en ella. La aldea de New Gourna de Hassan Fathy y una entrada prevista de un museo moderno se retiraron ambas; uno de los archivos de Commons que se consideraban para el museo llegó a tener una propuesta de borrado cuyo motivo resultó ser el derecho de autor egipcio, no una disputa de licencia. Las dos entradas egipcias del catálogo corresponden en cambio a arquitectos ya en dominio público por vencimiento de derechos.',
        it: "Egitto: la posizione dell'Egitto sulla Libertà di Panorama non era abbastanza solida da potercisi affidare. Il villaggio di New Gourna di Hassan Fathy e una voce prevista per un museo moderno sono stati entrambi ritirati; uno dei file di Commons in esame per il museo aveva perfino una proposta di cancellazione i cui motivi si sono rivelati essere il diritto d'autore egiziano, non una disputa sulla licenza. Le due voci egiziane nel catalogo riguardano invece architetti già di pubblico dominio per scadenza dei diritti.",
      },
      {
        en: 'Libya: Libya’s Freedom of Panorama does not reach the case this project needed it to. A Tripoli hotel by an architect who died in 1965 was dropped once the only usable photograph turned out to be an interior courtyard shot — Libya has zero buildings in the pool.',
        es: 'Libia: la Libertad de Panorama de Libia no alcanza el caso que este proyecto necesitaba. Un hotel de Trípoli obra de un arquitecto fallecido en 1965 se descartó al comprobarse que su única fotografía utilizable era la de un patio interior; Libia no tiene ningún edificio en el catálogo.',
        it: "Libia: la Libertà di Panorama libica non copre il caso di cui questo progetto aveva bisogno. Un albergo di Tripoli opera di un architetto morto nel 1965 è stato scartato quando si è scoperto che l'unica fotografia utilizzabile era quella di un cortile interno — la Libia non ha alcun edificio nel catalogo.",
      },
      {
        en: 'Eritrea: Eritrea has no Freedom of Panorama at all. Asmara’s Fiat Tagliero — its architect died in 2001 — was dropped for this reason and replaced with a building in the public domain by expiry.',
        es: 'Eritrea: Eritrea no tiene Libertad de Panorama en absoluto. El Fiat Tagliero de Asmara —su arquitecto falleció en 2001— se descartó por este motivo y se sustituyó por un edificio ya en dominio público por vencimiento de derechos.',
        it: "Eritrea: l'Eritrea non ha alcuna Libertà di Panorama. Il Fiat Tagliero di Asmara — il suo architetto è morto nel 2001 — è stato scartato per questo motivo e sostituito con un edificio già di pubblico dominio per scadenza dei diritti.",
      },
      {
        en: 'Mozambique: Mozambique’s Freedom of Panorama is non-commercial-only, which is incompatible with the CC BY-SA licences this project requires. Both Mozambican buildings in an earlier draft, and both their architects (both died in 2015), were removed on this basis. Mozambique has zero buildings in the pool.',
        es: 'Mozambique: la Libertad de Panorama de Mozambique es solo para uso no comercial, algo incompatible con las licencias CC BY-SA que este proyecto necesita. Los dos edificios mozambiqueños de un borrador anterior, y sus dos arquitectos (ambos fallecidos en 2015), se retiraron por este motivo. Mozambique no tiene ningún edificio en el catálogo.',
        it: "Mozambico: la Libertà di Panorama del Mozambico vale solo per uso non commerciale, il che è incompatibile con le licenze CC BY-SA richieste da questo progetto. I due edifici mozambicani presenti in una bozza precedente, e i loro due architetti (entrambi morti nel 2015), sono stati rimossi per questo motivo. Il Mozambico non ha alcun edificio nel catalogo.",
      },
      {
        en: 'West Africa (Burkina Faso, Mali, Senegal, Côte d’Ivoire, Benin, Togo, Guinea, Niger): these countries’ shared copyright framework gives non-commercial-only Freedom of Panorama, which blocked this pool from using Francis Kéré and Mariam Kamara — despite both being the West Africa slice’s own pre-assigned architects going into curation.',
        es: 'África Occidental (Burkina Faso, Mali, Senegal, Costa de Marfil, Benín, Togo, Guinea y Níger): el marco de derecho de autor compartido por estos países da una Libertad de Panorama solo para uso no comercial, lo que impidió a este catálogo usar a Francis Kéré y Mariam Kamara —a pesar de que ambos eran, ya antes de empezar la curación, los arquitectos asignados de partida a la región de África Occidental.',
        it: "Africa Occidentale (Burkina Faso, Mali, Senegal, Costa d'Avorio, Benin, Togo, Guinea, Niger): il quadro normativo condiviso da questi paesi prevede una Libertà di Panorama solo per uso non commerciale, il che ha impedito a questo catalogo di utilizzare Francis Kéré e Mariam Kamara — nonostante entrambi fossero, già prima dell'inizio della curazione, gli architetti assegnati di default alla regione dell'Africa Occidentale.",
      },
      {
        en: 'Ghana: Ghana has no Freedom of Panorama provision at all. Its two buildings in the pool — Larabanga Mosque (1421) and Elmina Castle (1482) — are old enough that no living or recently-deceased architect’s copyright is at stake.',
        es: 'Ghana: Ghana no tiene ninguna disposición de Libertad de Panorama. Sus dos edificios del catálogo —la mezquita de Larabanga (1421) y el castillo de Elmina (1482)— son lo bastante antiguos como para que no esté en juego el derecho de autor de ningún arquitecto vivo o fallecido recientemente.',
        it: "Ghana: il Ghana non ha alcuna disposizione di Libertà di Panorama. I suoi due edifici nel catalogo — la moschea di Larabanga (1421) e il castello di Elmina (1482) — sono abbastanza antichi da non mettere in gioco il copyright di alcun architetto vivente o morto di recente.",
      },
      {
        en: 'Nigeria: Nigeria had Freedom of Panorama until it was repealed before 2023. That now-repealed law is the only usable exception found anywhere in the West Africa slice, which is why Nigeria alone accounts for the majority of that region’s buildings in the pool.',
        es: 'Nigeria: Nigeria tuvo Libertad de Panorama hasta que la ley se derogó antes de 2023. Esa ley ya derogada es la única excepción utilizable que se encontró en toda la región de África Occidental, razón por la cual Nigeria por sí sola representa la mayoría de los edificios de esa región en el catálogo.',
        it: "Nigeria: la Nigeria ha avuto la Libertà di Panorama finché la legge non è stata abrogata prima del 2023. Quella legge ormai abrogata è l'unica eccezione utilizzabile trovata in tutta la regione dell'Africa Occidentale, motivo per cui la Nigeria da sola rappresenta la maggioranza degli edifici di quella regione nel catalogo.",
      },
      {
        en: 'Mauritania: Mauritania does have full, commercial-compatible Freedom of Panorama (Law 2012-038, Article 47) — another case where this project’s own working assumption was wrong at first and had to be corrected. Even so, no Mauritanian building with a clean image and a documented architect was found. Mauritania’s absence from the pool is a research gap, not a legal one.',
        es: 'Mauritania: Mauritania sí tiene Libertad de Panorama plena y compatible con el uso comercial (Ley 2012-038, artículo 47) —otro caso en el que la hipótesis de trabajo de este proyecto era errónea al principio y hubo que corregirla. Aun así, no se encontró ningún edificio mauritano con una imagen en regla y un arquitecto documentado. La ausencia de Mauritania en el catálogo es un vacío de investigación, no legal.',
        it: "Mauritania: la Mauritania ha invece una Libertà di Panorama piena e compatibile con l'uso commerciale (Legge 2012-038, articolo 47) — un altro caso in cui l'ipotesi di lavoro di questo progetto era inizialmente sbagliata e ha dovuto essere corretta. Ciò nonostante, non è stato trovato alcun edificio mauritano con un'immagine in regola e un architetto documentato. L'assenza della Mauritania dal catalogo è una lacuna di ricerca, non legale.",
      },
    ],
  },
  {
    id: 'no-photograph-exists',
    heading: {
      en: 'Real architects, no free photograph found',
      es: 'Arquitectos reales, ninguna fotografía libre encontrada',
      it: 'Architetti reali, nessuna fotografia libera trovata',
    },
    paragraphs: [
      {
        en: "Freedom of Panorama is one way an architect's work becomes unusable here. The other is simpler: no freely-licensed photograph of the building exists to be found at all. Minnette de Silva — the first Asian woman elected to the Royal Institute of British Architects — has, as far as this project's search could establish, zero photographs of her built work on Commons or Flickr. Matilde Ucelay, the first woman to qualify as an architect in Spain (1936), has no free image of any building she designed. Salima Naji and Aziza Chaouni, both practising in Morocco with real, documented careers and Wikidata items of their own, have no usable Commons photograph of a building either one of them authored. Högna Sigurðardóttir has no photograph of her work findable on Commons at all. Mariam Kamara — already blocked from this pool by West Africa's Freedom of Panorama law, above — has the same gap independently. Set against this: Frank Lloyd Wright alone has 283 attributed buildings with images available.",
        es: 'La Libertad de Panorama es una manera de que la obra de un arquitecto quede inutilizable aquí. La otra es más simple: no existe ninguna fotografía con licencia abierta del edificio que se pueda encontrar. Minnette de Silva —la primera mujer asiática elegida miembro del Royal Institute of British Architects— tiene, hasta donde ha podido establecer la búsqueda de este proyecto, cero fotografías de su obra construida en Commons o Flickr. Matilde Ucelay, la primera mujer que obtuvo el título de arquitecta en España (1936), no tiene ninguna imagen libre de ningún edificio que diseñara. Salima Naji y Aziza Chaouni, ambas en ejercicio en Marruecos, con carreras reales y documentadas y ficha propia en Wikidata, no tienen ninguna fotografía utilizable en Commons de un edificio que cualquiera de las dos haya autorado. De Högna Sigurðardóttir no se ha podido encontrar ninguna fotografía de su obra en Commons. Mariam Kamara —ya bloqueada de este catálogo por la ley de Libertad de Panorama de África Occidental, arriba— presenta el mismo vacío de forma independiente. Frente a todo esto: solo Frank Lloyd Wright tiene 283 edificios atribuidos con imágenes disponibles.',
        it: "La Libertà di Panorama è un modo in cui l'opera di un architetto diventa qui inutilizzabile. L'altro è più semplice: non esiste alcuna fotografia con licenza aperta dell'edificio che si possa trovare. Minnette de Silva — la prima donna asiatica eletta membro del Royal Institute of British Architects — ha, per quanto la ricerca di questo progetto è riuscita a stabilire, zero fotografie della sua opera costruita su Commons o Flickr. Matilde Ucelay, la prima donna abilitata come architetta in Spagna (1936), non ha alcuna immagine libera di alcun edificio da lei progettato. Salima Naji e Aziza Chaouni, entrambe attive in Marocco, con carriere reali e documentate e una propria voce Wikidata, non hanno alcuna fotografia utilizzabile su Commons di un edificio progettato da nessuna delle due. Di Högna Sigurðardóttir non si è potuta trovare alcuna fotografia della sua opera su Commons. Mariam Kamara — già esclusa da questo catalogo per la legge sulla Libertà di Panorama dell'Africa Occidentale, sopra — presenta la stessa lacuna in modo indipendente. A fronte di tutto questo: il solo Frank Lloyd Wright ha 283 edifici attribuiti con immagini disponibili.",
      },
      {
        en: "The precise claim here matters, and it is deliberately narrower than it might sound: this is “no freely-licensed photograph found on Commons or Flickr as of August 2026,” not “no photograph exists.” The same review that produced this finding also turned up two Flickr images a Commons-only search had missed elsewhere in the pool, so a stronger claim would be a claim this project cannot actually stand behind. It is nonetheless a repeated, five-times-independently-confirmed pattern, not a single unlucky search.",
        es: 'La afirmación exacta aquí importa, y es deliberadamente más limitada de lo que podría parecer: se trata de «ninguna fotografía con licencia abierta encontrada en Commons o Flickr a fecha de agosto de 2026», no de «no existe ninguna fotografía». La misma revisión que produjo este hallazgo también encontró, en otro punto del catálogo, dos imágenes de Flickr que una búsqueda limitada a Commons había pasado por alto, así que una afirmación más fuerte sería una afirmación que este proyecto no puede realmente respaldar. Aun así, es un patrón repetido, confirmado de forma independiente cinco veces, no el resultado de una única búsqueda con mala suerte.',
        it: "L'affermazione esatta qui conta, ed è deliberatamente più circoscritta di quanto potrebbe sembrare: si tratta di «nessuna fotografia con licenza aperta trovata su Commons o Flickr alla data di agosto 2026», non di «non esiste alcuna fotografia». La stessa revisione che ha prodotto questo riscontro ha anche trovato, altrove nel catalogo, due immagini Flickr che una ricerca limitata a Commons aveva mancato, quindi un'affermazione più forte sarebbe un'affermazione che questo progetto non può davvero sostenere. È comunque uno schema ripetuto, confermato in modo indipendente cinque volte, non il risultato di un'unica ricerca sfortunata.",
      },
    ],
  },
  {
    id: 'attribution-and-credit',
    heading: {
      en: 'A quota and a single answer key, in tension',
      es: 'Una cuota y una única respuesta correcta, en tensión',
      it: 'Una quota e un’unica risposta corretta, in tensione',
    },
    paragraphs: [
      {
        en: "This pool targets at least 20% of its defined architects being women or non-binary. Architectle's game mechanic asks the player to name one architect per building, which means every building needs exactly one architectId as its answer key. Combining those two things created a real, repeated pressure, independently found across five different curators working on unrelated parts of the pool: given a building genuinely designed by a mixed-gender partnership, credit the woman as the sole architect, because doing so counts toward the quota and naming her partner first does not. The clearest instance was caught and reverted before it shipped: an early draft credited interior designer Zeynep Fadıllıoğlu as the sole architect of Istanbul's Sakirin Mosque, when the architect of record — confirmed by the same Wikidata record the entry cited — is Hüsrev Tayla. The entry now credits Tayla, with Fadıllıoğlu shown via the co-architect field instead.",
        es: 'Este catálogo se marca como objetivo que al menos el 20% de sus arquitectos definidos sean mujeres o de género no binario. La mecánica de Architectle pide al jugador que nombre a un único arquitecto por edificio, lo que significa que cada edificio necesita exactamente un architectId como respuesta correcta. Combinar ambas cosas creó una presión real y repetida, detectada de forma independiente por cinco curadores distintos que trabajaban en partes no relacionadas del catálogo: ante un edificio realmente diseñado por una pareja de géneros mixtos, acreditar a la mujer como única arquitecta, porque hacerlo cuenta para la cuota y nombrar antes a su compañero no. El caso más claro se detectó y se revirtió antes de publicarse: un borrador inicial acreditaba a la interiorista Zeynep Fadıllıoğlu como única arquitecta de la mezquita de Sakirin, en Estambul, cuando el arquitecto de registro —confirmado por la misma ficha de Wikidata que citaba la entrada— es Hüsrev Tayla. La entrada acredita ahora a Tayla, con Fadıllıoğlu mostrada a través del campo de coautoría.',
        it: "Questo catalogo si pone come obiettivo che almeno il 20% dei suoi architetti definiti siano donne o persone non binarie. Il meccanismo di Architectle chiede al giocatore di nominare un solo architetto per edificio, il che significa che ogni edificio ha bisogno di esattamente un architectId come risposta corretta. Combinare le due cose ha creato una pressione reale e ripetuta, riscontrata in modo indipendente da cinque curatori diversi che lavoravano su parti non correlate del catalogo: di fronte a un edificio realmente progettato da una coppia di genere misto, accreditare la donna come unica architetta, perché farlo conta per la quota mentre nominare prima il suo compagno no. Il caso più evidente è stato individuato e corretto prima della pubblicazione: una bozza iniziale accreditava l'interior designer Zeynep Fadıllıoğlu come unica architetta della Moschea Sakirin a Istanbul, mentre l'architetto di riferimento — confermato dalla stessa voce Wikidata citata nella scheda — è Hüsrev Tayla. La scheda ora accredita Tayla, con Fadıllıoğlu indicata tramite il campo di coautoria.",
      },
      {
        en: "The counter-evidence matters as much as the finding. One curator working on the pool's southern Americas slice independently rejected four separate candidates specifically because sole-crediting a woman architect would have been factually wrong, and left a woman architect (Gabriela Medrano) out of one building's credit entirely rather than force her into a slot the historical record didn't support. So the pressure documented here was real, and it was not universal: at least one part of this pool actively resisted it. Where a building really was a symmetric partnership with no conventional lead, both names are recorded — the sole architectId follows the partnership's conventional public credit, and the coArchitects field, shown in the reveal and on every archive page but never asked as a guess, carries the rest. Populating that field honestly sometimes lowers the pool's measured women's percentage, because it adds the male co-author to the count of defined architects — and the rule this project applied throughout is that the accurate credit stands regardless of what it does to the number.",
        es: 'La contraevidencia importa tanto como el hallazgo. Una curadora que trabajaba en el bloque sur de América rechazó de forma independiente cuatro candidatas distintas precisamente porque acreditar en solitario a una arquitecta habría sido objetivamente falso, y dejó fuera por completo a una arquitecta (Gabriela Medrano) de la autoría de un edificio antes que forzarla en un lugar que el registro histórico no respaldaba. Así que la presión documentada aquí fue real, y no fue universal: al menos una parte de este catálogo la resistió activamente. Cuando un edificio fue de verdad una autoría compartida a partes iguales, sin un crédito convencional dominante, se registran ambos nombres —el único architectId sigue el crédito público convencional de la asociación, y el campo coArchitects, mostrado en la revelación y en cada página del archivo pero nunca planteado como una adivinanza, recoge al resto. Rellenar ese campo con honestidad a veces reduce el porcentaje medido de mujeres en el catálogo, porque añade al coautor varón al recuento de arquitectos definidos —y la regla que se aplicó en todo el proyecto es que el crédito exacto se mantiene, con independencia de lo que eso le haga al número.',
        it: "La controprova conta quanto il riscontro stesso. Una curatrice che lavorava sul blocco sudamericano ha respinto in modo indipendente quattro diverse candidate proprio perché accreditare in solitaria un'architetta sarebbe stato oggettivamente sbagliato, e ha lasciato del tutto fuori un'architetta (Gabriela Medrano) dai crediti di un edificio piuttosto che forzarla in un posto che la documentazione storica non sosteneva. Quindi la pressione qui documentata era reale, e non era universale: almeno una parte di questo catalogo l'ha attivamente respinta. Dove un edificio era davvero una coautoria simmetrica, senza un credito convenzionale dominante, vengono registrati entrambi i nomi — l'unico architectId segue il credito pubblico convenzionale della coppia, e il campo coArchitects, mostrato nella rivelazione e su ogni pagina dell'archivio ma mai posto come indovinello, riporta il resto. Compilare quel campo onestamente a volte abbassa la percentuale femminile misurata del catalogo, perché aggiunge il coautore uomo al conteggio degli architetti definiti — e la regola applicata in tutto il progetto è che il credito accurato resta valido, indipendentemente da cosa questo comporti per il numero.",
      },
    ],
  },
  {
    id: 'geography-vs-credit',
    heading: {
      en: 'Showing a place is not the same as crediting its architect',
      es: 'Mostrar un lugar no es lo mismo que acreditar a su arquitecto',
      it: "Mostrare un luogo non è la stessa cosa che accreditarne l'architetto",
    },
    paragraphs: [
      {
        en: 'The geography targets above count where a building stands, not who is credited with designing it. A pool can clear every regional floor — a building in every part of the world — while still crediting almost entirely European and American architects for the buildings outside Europe and America. That is a real, separate finding about this pool, and it is not fixed by any of the numeric gates above.',
        es: 'Los objetivos de geografía de más arriba cuentan dónde está un edificio, no a quién se acredita por diseñarlo. Un catálogo puede superar todos los mínimos regionales —un edificio en cada parte del mundo— y aun así acreditar a arquitectos casi exclusivamente europeos y estadounidenses por los edificios fuera de Europa y Estados Unidos. Ese es un hallazgo real y distinto sobre este catálogo, y ninguno de los límites numéricos de arriba lo corrige.',
        it: "Gli obiettivi geografici sopra contano dove si trova un edificio, non a chi viene accreditata la sua progettazione. Un catalogo può superare ogni soglia regionale minima — un edificio in ogni parte del mondo — e allo stesso tempo accreditare architetti quasi esclusivamente europei e statunitensi per gli edifici fuori da Europa e Stati Uniti. Questo è un riscontro reale e distinto su questo catalogo, e nessuna delle soglie numeriche sopra lo corregge.",
      },
      {
        en: "One case was caught and corrected. Nairobi's Kenyatta International Conference Centre is credited in most Western sources to Norwegian architect Karl Henrik Nøstvik. Independent Kenyan sourcing — including an interview in which the man himself describes his own role — establishes David Mutiso, Kenya's first African chief government architect, as the building's actual primary designer, with Nøstvik in a junior role on the same project. This pool's answer key was corrected to match: architectId is David Mutiso, and Nøstvik is credited via the co-architect field. It is one case, resolved because it happened to be checked closely enough, not a systemic guarantee that every non-Western building here credits the right person. That gap is real, and it is stated here rather than left implicit behind a passing geography number.",
        es: 'Un caso se detectó y se corrigió. El Kenyatta International Conference Centre de Nairobi se acredita en la mayoría de las fuentes occidentales al arquitecto noruego Karl Henrik Nøstvik. Fuentes independientes kenianas —incluida una entrevista en la que el propio protagonista describe su papel— establecen que David Mutiso, primer arquitecto jefe de gobierno africano de Kenia, fue en realidad el diseñador principal del edificio, con Nøstvik en un papel subordinado en el mismo proyecto. La respuesta correcta de este catálogo se corrigió para reflejarlo: architectId es David Mutiso, y Nøstvik se acredita mediante el campo de coautoría. Es un caso, resuelto porque se revisó con la suficiente atención, no una garantía sistemática de que cada edificio no occidental de aquí acredite a la persona correcta. Ese vacío es real, y se dice aquí en lugar de dejarlo implícito detrás de un número de geografía que simplemente se cumple.',
        it: "Un caso è stato individuato e corretto. Il Kenyatta International Conference Centre di Nairobi è accreditato nella maggior parte delle fonti occidentali all'architetto norvegese Karl Henrik Nøstvik. Fonti keniote indipendenti — inclusa un'intervista in cui l'interessato stesso descrive il proprio ruolo — stabiliscono che David Mutiso, primo architetto capo di governo africano del Kenya, fu in realtà il progettista principale dell'edificio, con Nøstvik in un ruolo subordinato nello stesso progetto. La risposta corretta di questo catalogo è stata corretta di conseguenza: architectId è David Mutiso, e Nøstvik è accreditato tramite il campo di coautoria. È un caso, risolto perché è stato controllato con sufficiente attenzione, non una garanzia sistematica che ogni edificio non occidentale qui accrediti la persona giusta. Quella lacuna è reale, ed è dichiarata qui invece di restare implicita dietro un numero geografico semplicemente rispettato.",
      },
    ],
  },
  {
    id: 'living-architects',
    heading: {
      en: 'Living architects and contested allegations',
      es: 'Arquitectos vivos y denuncias en disputa',
      it: 'Architetti viventi e accuse controverse',
    },
    paragraphs: [
      {
        en: "Where a living architect faces a contested allegation, this project's rule is to leave them out of the pool rather than adjudicate the allegation itself. This is a blanket policy, applied without exception, not a judgement about any individual case — and this page does not discuss specific instances of it.",
        es: 'Cuando un arquitecto vivo afronta una denuncia en disputa, la norma de este proyecto es dejarlo fuera del catálogo en lugar de juzgar la denuncia. Es una política general, aplicada sin excepciones, no un juicio sobre ningún caso concreto —y esta página no trata casos concretos de su aplicación.',
        it: "Quando un architetto vivente affronta un'accusa controversa, la regola di questo progetto è lasciarlo fuori dal catalogo piuttosto che giudicare l'accusa stessa. È una politica generale, applicata senza eccezioni, non un giudizio su alcun caso specifico — e questa pagina non discute casi concreti della sua applicazione.",
      },
    ],
  },
  {
    id: 'historical-content',
    heading: {
      en: 'Political history, included, not hidden',
      es: 'Historia política, incluida, no ocultada',
      it: 'Storia politica, inclusa, non nascosta',
    },
    paragraphs: [
      {
        en: "Architecture's twentieth century cannot be told honestly by removing the buildings and architects whose politics or conduct are part of the documented record. This project's policy is the opposite of erasure: where a building or an architect's history includes colonial administration, forced labour, state ideology or personal complicity, that history stays in the entry, sourced and stated plainly, rather than being smoothed over or left out.",
        es: 'El siglo XX de la arquitectura no se puede contar con honestidad eliminando los edificios y arquitectos cuya política o conducta forma parte del registro documentado. La política de este proyecto es la contraria a borrarlos: cuando la historia de un edificio o de un arquitecto incluye administración colonial, trabajo forzado, ideología de Estado o complicidad personal, esa historia permanece en la ficha, con fuentes y dicha con claridad, en lugar de suavizarse o quedar fuera.',
        it: "Il Novecento dell'architettura non si può raccontare onestamente eliminando gli edifici e gli architetti la cui politica o condotta fa parte della documentazione storica. La politica di questo progetto è l'opposto della cancellazione: quando la storia di un edificio o di un architetto include amministrazione coloniale, lavoro forzato, ideologia di Stato o complicità personale, quella storia resta nella scheda, con fonti e detta con chiarezza, invece di essere attenuata o omessa.",
      },
      {
        en: "Concretely: Como's Casa del Fascio is presented as both a celebrated work of rationalist architecture and the former headquarters of the local Fascist party. Nuremberg's Zeppelinfeld grandstand is presented as Albert Speer's design for Nazi party rallies staged for hundreds of thousands of people, not only as an interwar stadium. MASP's founding director, Pietro Maria Bardi, has his own Fascist-era record in Italy stated in his portrait before his 1946 emigration to Brazil. Colonial administrative buildings and apartheid-era South African architecture are represented the same way — the institutional facts stated concretely, not softened into abstraction, and not flattered by which facts get left out of the arrangement.",
        es: 'En concreto: la Casa del Fascio de Como se presenta a la vez como una obra celebrada de arquitectura racionalista y como la sede que fue del partido fascista local. La tribuna del Zeppelinfeld de Núremberg se presenta como el diseño de Albert Speer para los mitines del partido nazi ante cientos de miles de personas, no solo como un estadio de entreguerras. Del director fundador del MASP, Pietro Maria Bardi, se recoge en su retrato su propio historial de la época fascista en Italia, antes de emigrar a Brasil en 1946. Los edificios de administración colonial y la arquitectura sudafricana de la era del apartheid se tratan de la misma manera: los hechos institucionales, dichos con concreción, no diluidos en la abstracción, y sin que el edificio salga favorecido por lo que se decide dejar fuera.',
        it: "Concretamente: la Casa del Fascio di Como è presentata sia come opera celebrata dell'architettura razionalista sia come sede che fu del partito fascista locale. La tribuna dello Zeppelinfeld di Norimberga è presentata come il progetto di Albert Speer per le adunate del partito nazista davanti a centinaia di migliaia di persone, non solo come uno stadio del periodo tra le due guerre. Del direttore fondatore del MASP, Pietro Maria Bardi, il ritratto riporta il suo stesso trascorso dell'epoca fascista in Italia, prima dell'emigrazione in Brasile nel 1946. Gli edifici dell'amministrazione coloniale e l'architettura sudafricana dell'epoca dell'apartheid sono trattati allo stesso modo: i fatti istituzionali, detti in modo concreto, non attenuati nell'astrazione, e senza che l'edificio ne esca favorito per ciò che si sceglie di omettere.",
      },
    ],
  },
  {
    id: 'honest-limits',
    heading: {
      en: 'The crop is not a lock, and this is not a dataset',
      es: 'El recorte no es un candado, y esto no es un conjunto de datos',
      it: 'Il ritaglio non è un lucchetto, e questo non è un dataset',
    },
    paragraphs: [
      {
        en: "Each building's first guess is a hand-picked detail crop, widening toward the full photograph over six guesses. Serving a re-encoded, downscaled image at each step raises the cost of a casual reverse image search — it does not defeat a determined one, and this page says so rather than implying the game is any harder to cheat than it actually is.",
        es: 'El primer intento de cada edificio es un recorte de un detalle elegido a mano, que se amplía hacia la fotografía completa a lo largo de seis intentos. Servir una imagen reescalada y recodificada en cada paso encarece una búsqueda inversa de imágenes hecha por curiosidad —no impide una hecha con determinación, y esta página lo dice así en lugar de sugerir que el juego es más difícil de burlar de lo que realmente es.',
        it: "Il primo tentativo di ogni edificio è un ritaglio di un dettaglio scelto a mano, che si allarga verso la fotografia completa nell'arco di sei tentativi. Servire un'immagine ricodificata e a risoluzione ridotta a ogni passaggio alza il costo di una ricerca inversa per immagini fatta per curiosità — non impedisce quella fatta con determinazione, e questa pagina lo dichiara invece di lasciar intendere che il gioco sia più difficile da aggirare di quanto non sia in realtà.",
      },
      {
        en: "221 buildings and 237 architects, out of roughly 93,000 Wikidata candidates that carry a named architect and a photograph, is a curated selection — shaped by a curator's judgement, by what has been photographed and openly licensed, and by the copyright law of the country each building happens to stand in, as much as by the actual history of architecture. It is not a claim to statistical representativeness, and it was never meant to be one. It is a game, built to teach something true in the time it takes to make six guesses.",
        es: 'Los 221 edificios y 237 arquitectos, de entre unos 93.000 candidatos de Wikidata que tienen a la vez arquitecto nombrado y fotografía, son una selección curada —moldeada tanto por el criterio de un curador, por lo que se ha fotografiado y licenciado en abierto, y por el derecho de autor del país donde resulta que está cada edificio, como por la historia real de la arquitectura. No es una pretensión de representatividad estadística, y nunca lo fue. Es un juego, hecho para enseñar algo cierto en el tiempo que tardan seis intentos.',
        it: "221 edifici e 237 architetti, tra circa 93.000 candidati di Wikidata che portano insieme un architetto nominato e una fotografia, sono una selezione curata — plasmata tanto dal giudizio di un curatore, da ciò che è stato fotografato e concesso in licenza aperta, e dal diritto d'autore del paese in cui ciascun edificio si trova, quanto dalla storia reale dell'architettura. Non è una pretesa di rappresentatività statistica, e non lo è mai stata. È un gioco, fatto per insegnare qualcosa di vero nel tempo che occorre per fare sei tentativi.",
      },
    ],
  },
];
