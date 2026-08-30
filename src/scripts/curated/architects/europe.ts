import type { Architect } from '@/types/architect';

// Wave 5, agent 9a — Southern Europe (Italy, Spain, Portugal, Greece, Malta).
//
// Every entry below was checked against its live Wikidata entity page; gender
// follows P21, birth and death follow P569/P570. `floruit` is the span of
// completed works, not the lifespan, so it is narrower than born–died in every
// case; Palladio carries `override: true` because La Rotonda was finished
// twenty-five years after his death and would otherwise fail floruit-consistent.
//
// `workRegions` and `workCentroid` are deliberately left empty here:
// buildCuratedPool derives both from the architect's buildings and discards
// whatever this file supplies.
//
// Fix round (post-review): added `enric-miralles` and `enrique-sobejano` so
// Igualada and C3A can carry their real co-authors via the `coArchitects`
// field (display-only; `architectId` is unchanged and remains the answer
// key) — see the comments on those two buildings in europe.ts (buildings).
export const EUROPE_ARCHITECTS: Architect[] = [
  {
    id: 'filippo-brunelleschi',
    wikidataId: 'Q174330',
    name: 'Filippo Brunelleschi',
    alternativeNames: ['Filippo di Ser Brunellesco Lapi', 'Pippo di Ser Brunellesco', 'Brunellesco'],
    gender: 'man',
    born: 1377,
    died: 1446,
    floruit: { start: 1419, end: 1446, override: false },
    movements: [{ id: 'renaissance', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'sacral',
    signatureMaterial: 'brick',
    portrait: {
      en: 'Trained as a goldsmith and enrolled in the Florentine silk guild, Brunelleschi came to architecture through metalwork, clockmaking and a documented study of Roman ruins. His reputation rests on the double-shell dome he raised over Santa Maria del Fiore between 1420 and 1436 without the timber centring every earlier builder would have thought indispensable, solving a problem the cathedral works had left open for a century. He also built the Ospedale degli Innocenti, the Old Sacristy at San Lorenzo and the Pazzi Chapel, and both Vasari and his fifteenth-century biographer Antonio Manetti credit him with the first demonstrations of linear perspective. His architecture is grey pietra serena drawn as line against white plaster; his engineering, from the hoists to the herringbone brick coursing, was as inventive as his ornament was restrained.',
      es: 'Formado como orfebre e inscrito en el gremio florentino de la seda, Brunelleschi llegó a la arquitectura desde la metalistería, la relojería y un estudio documentado de las ruinas romanas. Su fama descansa en la cúpula de doble casco que levantó sobre Santa Maria del Fiore entre 1420 y 1436 sin la cimbra de madera que cualquier constructor anterior habría considerado imprescindible, resolviendo así un problema que la fábrica de la catedral arrastraba desde hacía un siglo. Suyos son también el Ospedale degli Innocenti, la Sacristía Vieja de San Lorenzo y la Capilla Pazzi, y tanto Vasari como su biógrafo cuatrocentista Antonio Manetti le atribuyen las primeras demostraciones de la perspectiva lineal. Su arquitectura es pietra serena gris trazada como línea sobre el yeso blanco; su ingeniería, de las grúas al aparejo en espina de pez, fue tan inventiva como sobrio su ornamento.',
      it: "Formatosi come orafo e iscritto all'Arte della Seta di Firenze, Brunelleschi arrivò all'architettura dalla lavorazione dei metalli, dall'orologeria e da uno studio documentato delle rovine romane. La sua fama poggia sulla cupola a doppia calotta che innalzò su Santa Maria del Fiore fra il 1420 e il 1436 senza la centina lignea che ogni costruttore precedente avrebbe ritenuto indispensabile, risolvendo un problema che l'Opera del Duomo si trascinava da un secolo. Sue sono anche lo Spedale degli Innocenti, la Sagrestia Vecchia di San Lorenzo e la Cappella Pazzi, e tanto Vasari quanto il suo biografo quattrocentesco Antonio Manetti gli attribuiscono le prime dimostrazioni della prospettiva lineare. La sua architettura è pietra serena grigia disegnata come linea sull'intonaco bianco; la sua ingegneria, dagli argani alla muratura a spina di pesce, fu inventiva quanto sobrio era il suo ornato.",
    },
    awards: [],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q174330', title: 'Filippo Brunelleschi (Q174330)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Filippo_Brunelleschi', title: 'Filippo Brunelleschi — Wikipedia', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'andrea-palladio',
    wikidataId: 'Q177692',
    name: 'Andrea Palladio',
    alternativeNames: ['Andrea di Pietro della Gondola', 'Andrea di Pietro'],
    gender: 'man',
    born: 1508,
    died: 1580,
    // override: La Rotonda was completed in 1605, twenty-five years after
    // Palladio's death, first by Vincenzo Scamozzi and then by the Capra
    // brothers. The end of the span is the completion date of a work he
    // designed, not a claim that he was still building in 1605.
    floruit: { start: 1540, end: 1605, override: true },
    movements: [
      { id: 'renaissance', primary: true },
      { id: 'palladianism', primary: false },
    ],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'domestic',
    signatureMaterial: 'brick',
    portrait: {
      en: 'Born Andrea di Pietro della Gondola and apprenticed as a stonecutter, he was renamed Palladio by his patron Gian Giorgio Trissino and rebuilt the architecture of the Veneto around a reading of Vitruvius and of the Roman ruins he measured on four trips south. Roughly thirty villas, the Basilica Palladiana at Vicenza, the churches of San Giorgio Maggiore and the Redentore in Venice and the Teatro Olimpico are his. His Quattro Libri dell’Architettura of 1570 turned that practice into a portable system and made him, through Inigo Jones and Lord Burlington, the most copied architect in history. The paradox worth stating is material: those authoritative temple fronts are brick and lime stucco, dressed to read as stone by a client class that could not afford stone.',
      es: 'Nacido Andrea di Pietro della Gondola y aprendiz de cantero, fue rebautizado Palladio por su mecenas Gian Giorgio Trissino y reescribió la arquitectura del Véneto a partir de una lectura de Vitruvio y de las ruinas romanas que midió en cuatro viajes al sur. Suyas son una treintena de villas, la Basílica Palladiana de Vicenza, las iglesias de San Giorgio Maggiore y el Redentore en Venecia y el Teatro Olímpico. Sus Quattro Libri dell’Architettura de 1570 convirtieron esa práctica en un sistema portátil y lo hicieron, a través de Inigo Jones y lord Burlington, el arquitecto más copiado de la historia. Conviene señalar la paradoja material: esos frontones de aire romano son ladrillo y estuco de cal, tratados para leerse como piedra por una clientela que no podía pagarla.',
      it: "Nato Andrea di Pietro della Gondola e apprendista scalpellino, fu ribattezzato Palladio dal suo mecenate Gian Giorgio Trissino e riscrisse l'architettura del Veneto a partire da una lettura di Vitruvio e delle rovine romane che misurò in quattro viaggi verso sud. Sue sono una trentina di ville, la Basilica Palladiana di Vicenza, le chiese di San Giorgio Maggiore e del Redentore a Venezia e il Teatro Olimpico. I Quattro Libri dell’Architettura del 1570 trasformarono quella pratica in un sistema trasportabile e ne fecero, attraverso Inigo Jones e lord Burlington, l'architetto più copiato della storia. Vale la pena dire il paradosso materiale: quei frontoni di autorità romana sono mattone e stucco di calce, trattati per leggersi come pietra da una committenza che la pietra non poteva permettersela.",
    },
    awards: [],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q177692', title: 'Andrea Palladio (Q177692)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Andrea_Palladio', title: 'Andrea Palladio — Wikipedia', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'girolamo-cassar',
    wikidataId: 'Q907536',
    name: 'Girolamo Cassar',
    alternativeNames: ['Gerolamo Cassar', 'Girolamo Cassaro', "Ġlormu Cassar"],
    gender: 'man',
    born: 1520,
    died: 1592,
    floruit: { start: 1566, end: 1586, override: false },
    movements: [{ id: 'mannerism', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'sacral',
    signatureMaterial: 'stone',
    portrait: {
      en: 'Cassar is the first Maltese architect whose buildings can be attributed by name, and almost the whole public face of Valletta is his. He worked as assistant to Francesco Laparelli, the military engineer Pope Pius V sent to lay out the new city after the Great Siege of 1565, and took over the works when Laparelli left in 1569. The Conventual Church of St John, the Grand Master’s Palace, seven of the auberges of the Order of St John and much of the city’s fortification belong to him. His idiom is severe and un-decorative: flat wall planes of local globigerina limestone, shallow pilasters, string courses set by military rather than ecclesiastical convention. Later Baroque decoration inside his churches was applied by other hands, over a century after he had finished.',
      es: 'Cassar es el primer arquitecto maltés cuyas obras pueden atribuirse con nombre propio, y prácticamente toda la cara pública de La Valeta es suya. Trabajó como ayudante de Francesco Laparelli, el ingeniero militar que el papa Pío V envió a trazar la nueva ciudad tras el Gran Sitio de 1565, y asumió las obras cuando Laparelli se marchó en 1569. Le pertenecen la iglesia conventual de San Juan, el Palacio del Gran Maestre, siete de los albergues de la Orden de San Juan y buena parte de las fortificaciones. Su lenguaje es severo y poco ornamental: planos murales lisos de piedra globigerina local, pilastras de escaso resalte e impostas fijadas según convención militar antes que eclesiástica. La decoración barroca del interior de sus iglesias es obra de otras manos, más de un siglo después.',
      it: "Cassar è il primo architetto maltese le cui opere si possano attribuire per nome, e quasi tutto il volto pubblico della Valletta è suo. Lavorò come aiutante di Francesco Laparelli, l'ingegnere militare che papa Pio V inviò a tracciare la nuova città dopo il Grande Assedio del 1565, e prese in carico i lavori quando Laparelli partì nel 1569. Gli appartengono la chiesa conventuale di San Giovanni, il Palazzo del Gran Maestro, sette degli alberghi dell'Ordine di San Giovanni e buona parte delle fortificazioni. Il suo linguaggio è severo e poco ornamentale: piani murari lisci in pietra globigerina locale, lesene di poco aggetto, cornici marcapiano regolate da convenzioni militari più che ecclesiastiche. La decorazione barocca degli interni delle sue chiese è opera di altre mani, oltre un secolo dopo.",
    },
    awards: [],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q907536', title: 'Girolamo Cassar (Q907536)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Girolamo_Cassar', title: 'Girolamo Cassar — Wikipedia', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'antoni-gaudi',
    wikidataId: 'Q25328',
    name: 'Antoni Gaudí',
    alternativeNames: ['Antoni Gaudí i Cornet', 'Antonio Gaudí'],
    gender: 'man',
    born: 1852,
    died: 1926,
    // Start moved to 1882 (from 1883) by wave v2-3 batch b3: Sagrada Família's
    // own inception year is 1882 (cornerstone laid under the original
    // architect Villar, months before Gaudí took over), and floruit-consistent
    // keys on a building's completed ?? inception.
    floruit: { start: 1882, end: 1926, override: false },
    movements: [{ id: 'art-nouveau', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'sacral',
    signatureMaterial: 'stone',
    portrait: {
      en: 'Gaudí is usually filed under Art Nouveau, which is accurate about the decade and misleading about the method. Where his European contemporaries drew curves, he derived them: catenary arches found by hanging weighted strings upside down, ruled surfaces generated from straight lines, warped ceramic mosaic used because broken tile is the only cladding that will follow a doubly curved wall. From Casa Vicens in 1883 he worked almost entirely for a Catalan industrial bourgeoisie — the Güell and Milà commissions — while the Sagrada Família, taken over in 1883 and unfinished at his death in 1926, absorbed his last twelve years entirely. Seven of his works are inscribed as a UNESCO World Heritage Site. He was run over by a tram in Barcelona and, unrecognised, taken to a paupers’ hospital.',
      es: 'A Gaudí se le archiva habitualmente en el modernismo, lo cual acierta con la década y despista sobre el método. Donde sus contemporáneos europeos dibujaban curvas, él las deducía: arcos catenarios hallados colgando cordeles lastrados boca abajo, superficies regladas generadas a partir de rectas, mosaico cerámico troceado porque el azulejo roto es el único revestimiento capaz de seguir un muro de doble curvatura. Desde la Casa Vicens de 1883 trabajó casi siempre para la burguesía industrial catalana —los encargos Güell y Milà—, mientras la Sagrada Família, asumida en 1883 e inacabada a su muerte en 1926, le absorbió por entero los doce últimos años. Siete de sus obras están inscritas como Patrimonio Mundial. Un tranvía lo atropelló en Barcelona y, sin ser reconocido, acabó en un hospital de pobres.',
      it: "Gaudí viene archiviato di solito sotto l'Art Nouveau, cosa esatta quanto al decennio e fuorviante quanto al metodo. Dove i contemporanei europei disegnavano curve, lui le ricavava: archi catenari trovati appendendo funicelle zavorrate a testa in giù, superfici rigate generate da rette, mosaico ceramico frantumato perché la piastrella rotta è l'unico rivestimento capace di seguire un muro a doppia curvatura. Dalla Casa Vicens del 1883 lavorò quasi sempre per la borghesia industriale catalana — le committenze Güell e Milà — mentre la Sagrada Família, assunta nel 1883 e incompiuta alla sua morte nel 1926, gli assorbì interamente gli ultimi dodici anni. Sette sue opere sono iscritte nel Patrimonio Mondiale. Fu investito da un tram a Barcellona e, non riconosciuto, portato in un ospedale per poveri.",
    },
    awards: [],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q25328', title: 'Antoni Gaudí (Q25328)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Antoni_Gaud%C3%AD', title: 'Antoni Gaudí — Wikipedia', license: 'CC BY-SA 4.0' },
      { kind: 'institution', url: 'https://whc.unesco.org/en/list/320/', title: 'Works of Antoni Gaudí — UNESCO World Heritage Centre', license: null },
    ],
  },
  {
    id: 'giuseppe-terragni',
    wikidataId: 'Q458653',
    name: 'Giuseppe Terragni',
    alternativeNames: ['Giuseppe Ercole Enea Terragni'],
    gender: 'man',
    born: 1904,
    died: 1943,
    floruit: { start: 1929, end: 1940, override: false },
    movements: [
      { id: 'functionalism', primary: true },
      { id: 'international-style', primary: false },
    ],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'civic',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Terragni built almost everything he built in one province, Como, in eleven years. He was a founder of Gruppo 7, the 1926 association that launched Italian Rationalism, and the movement label he used for himself was razionalismo, not functionalism or International Style. The Novocomum apartment block of 1929, the Casa del Fascio of 1932–36, the Asilo Sant’Elia nursery of 1937 and the unbuilt Danteum are the core of a body of work built almost entirely on reinforced-concrete frames clad in Botticino marble or rendered white. His concern was the relation between a structural grid and the wall that fills or omits it, and the results are more austere, and more geometrically argued, than anything else built in Italy in the 1930s. He was conscripted, sent to the Russian front in 1941, and died at 39 shortly after returning.',
      es: 'Terragni construyó casi toda su obra en una sola provincia, Como, en once años. Fue fundador del Gruppo 7, la asociación de 1926 que lanzó el racionalismo italiano, y la etiqueta que él mismo usaba era racionalismo, no funcionalismo ni estilo internacional. El bloque Novocomum de 1929, la Casa del Fascio de 1932-36, el parvulario Sant’Elia de 1937 y el Danteum no construido forman el núcleo de una obra levantada casi siempre sobre estructuras de hormigón armado revestidas de mármol de Botticino o enfoscadas en blanco. Su asunto era la relación entre una retícula estructural y el muro que la rellena o la omite, y los resultados son más austeros, y más razonados geométricamente, que nada de lo edificado en Italia en los años treinta. Movilizado, fue enviado al frente ruso en 1941 y murió a los 39 años poco después de regresar.',
      it: "Terragni costruì quasi tutto ciò che costruì in una sola provincia, Como, in undici anni. Fu fondatore del Gruppo 7, l'associazione del 1926 che avviò il razionalismo italiano, e l'etichetta che usava per sé era razionalismo, non funzionalismo né stile internazionale. Il Novocomum del 1929, la Casa del Fascio del 1932-36, l'asilo Sant’Elia del 1937 e il Danteum mai costruito formano il nucleo di un'opera realizzata quasi sempre su telai in cemento armato rivestiti di marmo di Botticino o intonacati di bianco. Il suo tema era il rapporto fra una griglia strutturale e il muro che la riempie o la omette, e gli esiti sono più austeri, e più argomentati geometricamente, di qualunque altra cosa costruita in Italia negli anni Trenta. Richiamato alle armi, fu mandato sul fronte russo nel 1941 e morì a trentanove anni poco dopo il rientro.",
    },
    awards: [],
    tier: 'canon',
    context: {
      body: {
        en: 'Terragni joined the National Fascist Party in 1928 and his best-known building, the Casa del Fascio at Como, was commissioned and built as the party’s provincial headquarters; he also designed a party house at Lissone and, with Pietro Lingeri, the unbuilt Danteum for the Rome of Mussolini. He was called up in 1939 and served on the Greek and then the Russian front, where he took part in the retreat of the Italian Eighth Army; he was invalided home in 1943 and died in Como on 19 July of that year, at 39, of a cerebral thrombosis. His association with the regime is a documented fact of the public record and is not separable from the commissions that produced the work.',
        es: 'Terragni se afilió al Partido Nacional Fascista en 1928 y su edificio más conocido, la Casa del Fascio de Como, fue encargado y construido como sede provincial del partido; proyectó además una casa del fascio en Lissone y, con Pietro Lingeri, el Danteum nunca construido para la Roma de Mussolini. Movilizado en 1939, sirvió en el frente griego y después en el ruso, donde participó en la retirada del VIII Ejército italiano; repatriado por enfermedad en 1943, murió en Como el 19 de julio de ese año, a los 39, de una trombosis cerebral. Su vinculación con el régimen es un hecho documentado del registro público y no se puede separar de los encargos que produjeron la obra.',
        it: "Terragni si iscrisse al Partito Nazionale Fascista nel 1928 e il suo edificio più noto, la Casa del Fascio di Como, fu commissionato e costruito come sede provinciale del partito; progettò inoltre una casa del fascio a Lissone e, con Pietro Lingeri, il Danteum mai realizzato per la Roma di Mussolini. Richiamato nel 1939, prestò servizio sul fronte greco e poi su quello russo, dove prese parte alla ritirata dell'Ottava Armata italiana; rimpatriato per malattia nel 1943, morì a Como il 19 luglio dello stesso anno, a trentanove anni, per una trombosi cerebrale. Il suo legame con il regime è un fatto documentato del registro pubblico e non è separabile dalle committenze che produssero l'opera.",
      },
      sources: [
        { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Giuseppe_Terragni', title: 'Giuseppe Terragni — Wikipedia', license: 'CC BY-SA 4.0' },
        { kind: 'wikipedia', url: 'https://it.wikipedia.org/wiki/Giuseppe_Terragni', title: 'Giuseppe Terragni — Wikipedia (it)', license: 'CC BY-SA 4.0' },
      ],
    },
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q458653', title: 'Giuseppe Terragni (Q458653)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Giuseppe_Terragni', title: 'Giuseppe Terragni — Wikipedia', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'theophil-hansen',
    wikidataId: 'Q78638',
    name: 'Theophil Hansen',
    alternativeNames: ['Theophil Edvard von Hansen', 'Theophilus Edvard Hansen'],
    gender: 'man',
    born: 1813,
    died: 1891,
    floruit: { start: 1839, end: 1891, override: false },
    movements: [{ id: 'neoclassicism', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'civic',
    signatureMaterial: 'stone',
    portrait: {
      en: 'A Copenhagen-trained Dane who spent eight years in Athens and the rest of his life in Vienna, Hansen is the architect through whom nineteenth-century Greece acquired a public architecture in the image of its own antiquity. He arrived in Athens in 1838 to study and restore Byzantine and classical monuments, built the National Observatory and, later from Vienna, the Academy of Athens, which with Ernst Ziller’s execution and his brother Christian’s University forms the marble group known as the Athenian Trilogy. In Vienna he built the Parliament, the Musikverein, the Stock Exchange and the Heinrichshof along the Ringstrasse. His classicism is archaeological rather than nostalgic: he reinstated the painted polychromy that nineteenth-century excavation had shown Greek temples once carried, against a profession that preferred them white.',
      es: 'Danés formado en Copenhague, con ocho años en Atenas y el resto de su vida en Viena, Hansen es el arquitecto a través del cual la Grecia del siglo XIX se dotó de una arquitectura pública a imagen de su propia antigüedad. Llegó a Atenas en 1838 para estudiar y restaurar monumentos bizantinos y clásicos, levantó el Observatorio Nacional y, más tarde desde Viena, la Academia de Atenas, que junto con la ejecución de Ernst Ziller y la Universidad de su hermano Christian forma el conjunto de mármol conocido como Trilogía Ateniense. En Viena construyó el Parlamento, el Musikverein, la Bolsa y el Heinrichshof sobre la Ringstrasse. Su clasicismo es arqueológico más que nostálgico: restituyó la policromía pintada que las excavaciones decimonónicas habían demostrado en los templos griegos, contra una profesión que los prefería blancos.',
      it: "Danese formatosi a Copenaghen, con otto anni ad Atene e il resto della vita a Vienna, Hansen è l'architetto attraverso il quale la Grecia dell'Ottocento si diede un'architettura pubblica a immagine della propria antichità. Arrivò ad Atene nel 1838 per studiare e restaurare monumenti bizantini e classici, costruì l'Osservatorio Nazionale e, più tardi da Vienna, l'Accademia di Atene, che con l'esecuzione di Ernst Ziller e l'Università del fratello Christian forma il gruppo marmoreo detto Trilogia Ateniese. A Vienna edificò il Parlamento, il Musikverein, la Borsa e lo Heinrichshof lungo la Ringstrasse. Il suo classicismo è archeologico più che nostalgico: restituì la policromia dipinta che gli scavi ottocenteschi avevano dimostrato nei templi greci, contro una professione che li preferiva bianchi.",
    },
    awards: ['RIBA Royal Gold Medal', 'Bavarian Maximilian Order for Science and Art', 'Grand Cross of the Order of the Dannebrog'],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q78638', title: 'Theophil Hansen (Q78638)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Theophil_Hansen', title: 'Theophil Hansen — Wikipedia', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'alvaro-siza',
    wikidataId: 'Q251365',
    name: 'Álvaro Siza Vieira',
    alternativeNames: ['Álvaro Siza', 'Álvaro Joaquim de Melo Siza Vieira'],
    gender: 'man',
    born: 1933,
    died: null,
    floruit: { start: 1958, end: 2025, override: false },
    movements: [{ id: 'critical-regionalism', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'cultural',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Siza wanted to be a sculptor and enrolled in architecture at Porto instead, where Fernando Távora taught him that a modern building could be sited by reading the ground rather than clearing it. His early works at Leça da Palmeira — the Boa Nova tea house and the tidal pools — set the method: low horizontal planes of raw concrete threaded between existing rock, so that what is built and what was there stop being distinguishable. The SAAL housing programme after the 1974 revolution gave him large-scale social commissions at Bouça and Malagueira; later came the Serralves Museum, the Porto architecture faculty and buildings across Europe, Korea and Brazil. The white rendered volumes and the offset, apparently arbitrary geometries are the visible part of an argument about topography that has run for sixty-five years.',
      es: 'Siza quería ser escultor y acabó matriculándose en arquitectura en Oporto, donde Fernando Távora le enseñó que un edificio moderno podía implantarse leyendo el terreno en lugar de arrasarlo. Sus primeras obras en Leça da Palmeira —la casa de té de Boa Nova y las piscinas de marea— fijan el método: planos horizontales bajos de hormigón visto enhebrados entre la roca existente, hasta que lo construido y lo preexistente dejan de distinguirse. El programa de vivienda SAAL, tras la revolución de 1974, le dio encargos sociales de gran escala en Bouça y Malagueira; luego llegaron el Museo de Serralves, la facultad de arquitectura de Oporto y obras en Europa, Corea y Brasil. Los volúmenes blancos enfoscados y las geometrías desplazadas, en apariencia arbitrarias, son la parte visible de un argumento sobre la topografía que dura ya sesenta y cinco años.',
      it: "Siza voleva fare lo scultore e si iscrisse invece ad architettura a Porto, dove Fernando Távora gli insegnò che un edificio moderno può essere collocato leggendo il terreno anziché spianarlo. Le prime opere a Leça da Palmeira — la casa da tè di Boa Nova e le piscine di marea — fissano il metodo: piani orizzontali bassi in calcestruzzo a vista infilati fra la roccia esistente, finché il costruito e il preesistente smettono di distinguersi. Il programma abitativo SAAL, dopo la rivoluzione del 1974, gli affidò commesse sociali di grande scala a Bouça e a Malagueira; vennero poi il Museo di Serralves, la facoltà di architettura di Porto e opere in Europa, Corea e Brasile. I volumi bianchi intonacati e le geometrie sfalsate, all'apparenza arbitrarie, sono la parte visibile di un ragionamento sulla topografia che dura da sessantacinque anni.",
    },
    awards: ['Pritzker Architecture Prize', 'RIBA Royal Gold Medal', 'Alvar Aalto Medal', 'Wolf Prize in Architecture', 'Praemium Imperiale', 'Golden Lion (Venice Architecture Biennale)'],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q251365', title: 'Álvaro Siza Vieira (Q251365)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/%C3%81lvaro_Siza_Vieira', title: 'Álvaro Siza Vieira — Wikipedia', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'rafael-moneo',
    wikidataId: 'Q311692',
    name: 'Rafael Moneo',
    alternativeNames: ['José Rafael Moneo Vallés'],
    gender: 'man',
    born: 1937,
    died: null,
    floruit: { start: 1965, end: 2025, override: false },
    movements: 'unaffiliated',
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'cultural',
    signatureMaterial: 'brick',
    portrait: {
      en: 'Moneo has spent a long career refusing to be a stylist, and the refusal is the point: he has written that a building’s form should be argued from its site and its programme rather than from an authorial signature, and his own work moves from the rationalist Bankinter tower to the Roman brick of Mérida to the alabaster and stone of Los Angeles without a recognisable manner holding it together. He worked for Jørn Utzon in Denmark, taught at Madrid, Barcelona and Harvard, where he chaired the design school, and built the Atocha station hall, the Kursaal at San Sebastián, the extension to the Prado and the Stockholm Museum of Modern Art. He is the only Spaniard to have received the Pritzker, the RIBA Royal Gold Medal and the Praemium Imperiale.',
      es: 'Moneo ha dedicado una carrera larga a negarse a ser un estilista, y la negativa es lo esencial: ha escrito que la forma de un edificio debe argumentarse desde su lugar y su programa antes que desde una firma de autor, y su obra va de la torre racionalista de Bankinter al ladrillo romano de Mérida y al alabastro y la piedra de Los Ángeles sin que una manera reconocible la sostenga. Trabajó con Jørn Utzon en Dinamarca, enseñó en Madrid, Barcelona y Harvard, donde presidió la escuela de diseño, y construyó la ampliación de Atocha, el Kursaal de San Sebastián, la ampliación del Prado y el Museo de Arte Moderno de Estocolmo. Es el único español que ha recibido el Pritzker, la Royal Gold Medal y el Praemium Imperiale.',
      it: "Moneo ha impiegato una lunga carriera a rifiutare di essere uno stilista, e il rifiuto è il punto: ha scritto che la forma di un edificio va argomentata a partire dal luogo e dal programma anziché da una firma d'autore, e la sua opera va dalla torre razionalista di Bankinter al mattone romano di Mérida all'alabastro e alla pietra di Los Angeles senza che una maniera riconoscibile la tenga insieme. Lavorò con Jørn Utzon in Danimarca, insegnò a Madrid, Barcellona e Harvard, dove diresse la scuola di design, e costruì l'atrio della stazione di Atocha, il Kursaal di San Sebastián, l'ampliamento del Prado e il Museo d'Arte Moderna di Stoccolma. È l'unico spagnolo ad aver ricevuto il Pritzker, la Royal Gold Medal e il Praemium Imperiale.",
    },
    awards: ['Pritzker Architecture Prize', 'RIBA Royal Gold Medal', 'Princess of Asturias Award for the Arts', 'Praemium Imperiale', 'Golden Lion (Venice Architecture Biennale)'],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q311692', title: 'Rafael Moneo (Q311692)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Rafael_Moneo', title: 'Rafael Moneo — Wikipedia', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'francisco-javier-saenz-de-oiza',
    wikidataId: 'Q2450186',
    name: 'Francisco Javier Sáenz de Oíza',
    alternativeNames: ['Francisco Javier Sáenz de Oiza', 'Sáenz de Oíza'],
    gender: 'man',
    born: 1918,
    died: 2000,
    floruit: { start: 1955, end: 1996, override: false },
    movements: [
      { id: 'organic-architecture', primary: true },
      { id: 'brutalism', primary: false },
    ],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'housing',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Sáenz de Oíza travelled to the United States in 1947 on a scholarship, came back with Frank Lloyd Wright and Louis Kahn in his luggage, and spent the next forty years arguing in Madrid that a modern building could be organic without being picturesque. The Arantzazu basilica of the 1950s, built with Jorge Oteiza’s sculpture and censured by the Vatican for it, was followed by Torres Blancas, the Torres de Colón, the black glass Banco de Bilbao tower and the long social housing blocks on the M-30. He was a demanding and famously talkative teacher at the Madrid school, where Rafael Moneo worked in his office as a young collaborator on Torres Blancas. His material is board-marked and bush-hammered concrete, worked as if it were masonry.',
      es: 'Sáenz de Oíza viajó a Estados Unidos en 1947 con una beca, volvió con Frank Lloyd Wright y Louis Kahn en el equipaje y dedicó los cuarenta años siguientes a sostener en Madrid que un edificio moderno podía ser orgánico sin ser pintoresco. A la basílica de Arantzazu de los años cincuenta, levantada con la escultura de Jorge Oteiza y censurada por ello desde el Vaticano, siguieron Torres Blancas, las Torres de Colón, la torre de vidrio negro del Banco de Bilbao y los largos bloques de vivienda social de la M-30. Fue un profesor exigente y célebre por su locuacidad en la escuela de Madrid, y en su estudio trabajó como joven colaborador en Torres Blancas un Rafael Moneo recién titulado. Su material es el hormigón encofrado y abujardado, trabajado como si fuera fábrica de piedra.',
      it: "Sáenz de Oíza andò negli Stati Uniti nel 1947 con una borsa di studio, tornò con Frank Lloyd Wright e Louis Kahn nel bagaglio e passò i quarant'anni successivi a sostenere a Madrid che un edificio moderno poteva essere organico senza essere pittoresco. Alla basilica di Arantzazu degli anni Cinquanta, costruita con la scultura di Jorge Oteiza e per questo censurata dal Vaticano, seguirono Torres Blancas, le Torres de Colón, la torre di vetro nero del Banco de Bilbao e i lunghi blocchi di edilizia sociale sulla M-30. Fu docente esigente e famosamente loquace alla scuola di Madrid, e nel suo studio lavorò come giovane collaboratore a Torres Blancas un Rafael Moneo appena laureato. Il suo materiale è il calcestruzzo casserato e bocciardato, lavorato come fosse muratura.",
    },
    awards: ['Gold Medal of Architecture (Spain)', 'Prince of Asturias Award for the Arts'],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q2450186', title: 'Francisco Javier Sáenz de Oíza (Q2450186)', license: null },
      { kind: 'wikipedia', url: 'https://es.wikipedia.org/wiki/Francisco_Javier_S%C3%A1enz_de_Oiza', title: 'Francisco Javier Sáenz de Oiza — Wikipedia (es)', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'carme-pinos',
    wikidataId: 'Q2939556',
    name: 'Carme Pinós',
    alternativeNames: ['Carme Pinós i Desplat', 'Carmen Pinós'],
    gender: 'woman',
    born: 1954,
    died: null,
    floruit: { start: 1986, end: 2025, override: false },
    movements: 'unaffiliated',
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'cultural',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Pinós studied at Barcelona and from 1983 to 1991 ran a joint practice with Enric Miralles, in which the two were equal authors of the Igualada cemetery, the La Llauna school at Badalona and the Olympic archery range; the standard credit line for those years is Miralles–Pinós, and reading them as his alone is a documented and persistent error. Working alone from 1991, she built the Torre Cube in Guadalajara, the CaixaForum in Zaragoza, the Massana art school in Barcelona and the Cube pavilions in Mexico. She refuses a stylistic label and describes her method as building a section that produces public space, in cantilevered and folded concrete that leans out over the ground rather than sitting on it. She received Spain’s National Architecture Prize in 2021.',
      es: 'Pinós estudió en Barcelona y entre 1983 y 1991 llevó un estudio conjunto con Enric Miralles, en el que ambos fueron autores en pie de igualdad del cementerio de Igualada, la escuela La Llauna de Badalona y el campo olímpico de tiro con arco; la autoría de aquellos años es Miralles-Pinós, y leerla como suya en solitario es un error documentado y persistente. Ya sola desde 1991, construyó la Torre Cube de Guadalajara, el CaixaForum de Zaragoza, la Escola Massana de Barcelona y los pabellones Cube en México. Rechaza cualquier etiqueta estilística y describe su método como construir una sección que produzca espacio público, en hormigón volado y plegado que se asoma sobre el terreno en lugar de posarse en él. Recibió el Premio Nacional de Arquitectura en 2021.',
      it: "Pinós studiò a Barcellona e fra il 1983 e il 1991 tenne uno studio comune con Enric Miralles, nel quale i due furono autori in egual misura del cimitero di Igualada, della scuola La Llauna a Badalona e del campo olimpico di tiro con l'arco; la firma di quegli anni è Miralles-Pinós, e leggerla come sua soltanto è un errore documentato e persistente. Dal 1991 da sola, ha costruito la Torre Cube a Guadalajara, il CaixaForum di Saragozza, la Escola Massana a Barcellona e i padiglioni Cube in Messico. Rifiuta ogni etichetta stilistica e descrive il proprio metodo come la costruzione di una sezione che produce spazio pubblico, in calcestruzzo a sbalzo e piegato che si affaccia sul terreno invece di posarvisi. Ha ricevuto il Premio Nazionale di Architettura spagnolo nel 2021.",
    },
    awards: ['National Architecture Award of Spain', 'FAD Award', 'Prix des Femmes Architectes', 'Premi Prat de la Riba'],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q2939556', title: 'Carme Pinós (Q2939556)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Carme_Pin%C3%B3s', title: 'Carme Pinós — Wikipedia', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://es.wikipedia.org/wiki/Carme_Pin%C3%B3s', title: 'Carme Pinós — Wikipedia (es)', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    // Added in the fix round for the New Cemetery of Igualada's
    // `coArchitects` — Wikidata's own P84 for Igualada (Q5994387) lists
    // both Miralles and Pinós. Not owned by any slice on the contract's
    // ownership table and confirmed undefined anywhere else in the pool.
    id: 'enric-miralles',
    wikidataId: 'Q723669',
    name: 'Enric Miralles',
    alternativeNames: ['Enric Miralles Moya', 'Enric Miralles i Moya'],
    gender: 'man',
    born: 1955,
    died: 2000,
    // Olympic Archery Range (1992) to his death; he was still actively
    // designing (Scottish Parliament, Santa Caterina market) when he died,
    // so no override is needed even though some of that later work was
    // only completed posthumously.
    floruit: { start: 1992, end: 2000, override: false },
    movements: 'unaffiliated',
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'civic',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Miralles trained at the Barcelona school (ETSAB, graduating 1978) after working through his studies in the office of Viaplana and Piñón. From 1983 to 1991 he ran a joint practice with his first wife, Carme Pinós, in which the two were equal authors of the Igualada cemetery and the La Llauna school; the credit line for those years is Miralles–Pinós. In 1993, with his second wife, Benedetta Tagliabue, he founded EMBT, and spent his last years on the Scottish Parliament in Edinburgh and the renovated Santa Caterina market in Barcelona, both completed after his death from a brain tumour in 2000, aged 45. His buildings favour irregular, faceted geometries and mixed concrete, steel and timber worked as if improvised on site. The Scottish Parliament won the Stirling Prize in 2005, five years after his death.',
      es: 'Miralles se formó en la escuela de Barcelona (ETSAB, licenciado en 1978) tras trabajar durante sus estudios en el despacho de Viaplana y Piñón. Entre 1983 y 1991 llevó un estudio conjunto con su primera esposa, Carme Pinós, en el que ambos fueron autores en pie de igualdad del cementerio de Igualada y la escuela La Llauna; la firma de aquellos años es Miralles-Pinós. En 1993, junto a su segunda esposa, Benedetta Tagliabue, fundó EMBT, y pasó sus últimos años en el Parlamento escocés de Edimburgo y en la reforma del mercado de Santa Caterina en Barcelona, ambos terminados tras su muerte por un tumor cerebral en 2000, a los 45 años. Sus edificios prefieren geometrías irregulares y facetadas, y una mezcla de hormigón, acero y madera trabajada como si se improvisara en obra. El Parlamento escocés ganó el Stirling Prize en 2005, cinco años después de su muerte.',
      it: "Miralles si formò alla scuola di Barcellona (ETSAB, laureato nel 1978) dopo aver lavorato durante gli studi nello studio di Viaplana e Piñón. Fra il 1983 e il 1991 tenne uno studio comune con la prima moglie, Carme Pinós, nel quale i due furono autori in egual misura del cimitero di Igualada e della scuola La Llauna; la firma di quegli anni è Miralles-Pinós. Nel 1993, insieme alla seconda moglie, Benedetta Tagliabue, fondò EMBT, e trascorse gli ultimi anni sul Parlamento scozzese di Edimburgo e sul rinnovo del mercato di Santa Caterina a Barcellona, entrambi completati dopo la sua morte per un tumore al cervello nel 2000, a 45 anni. I suoi edifici prediligono geometrie irregolari e sfaccettate, con calcestruzzo, acciaio e legno mescolati come se fossero improvvisati in cantiere. Il Parlamento scozzese vinse lo Stirling Prize nel 2005, cinque anni dopo la sua morte.",
    },
    awards: ['Golden Lion (Venice Biennale)', 'Stirling Prize'],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q723669', title: 'Enric Miralles (Q723669)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Enric_Miralles', title: 'Enric Miralles — Wikipedia', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'fuensanta-nieto',
    wikidataId: 'Q19902909',
    name: 'Fuensanta Nieto',
    alternativeNames: ['Fuensanta Nieto de la Cierva'],
    gender: 'woman',
    born: 1957,
    died: null,
    floruit: { start: 1990, end: 2025, override: false },
    movements: 'unaffiliated',
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'cultural',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Nieto studied in Madrid and at Columbia, and in 1984 founded Nieto Sobejano Arquitectos with Enrique Sobejano, with whom she has shared authorship of every project since; the two also edited the journal Arquitectura for the Madrid architects’ association between 1986 and 1991. The practice works almost entirely on museums and on buildings that sit on archaeology — the Madinat al-Zahra museum at Córdoba, the San Telmo extension in San Sebastián, the Moritzburg museum at Halle, the Joanneum quarter in Graz — and its recurring device is a cast concrete surface carrying a deep geometric relief that reads as ornament and works as structure or as light control. Nieto has taught at the Universidad Europea de Madrid since 2003 and lectures widely in Europe and the United States.',
      es: 'Nieto estudió en Madrid y en Columbia, y en 1984 fundó Nieto Sobejano Arquitectos con Enrique Sobejano, con quien comparte la autoría de todos los proyectos desde entonces; ambos dirigieron además la revista Arquitectura del Colegio de Arquitectos de Madrid entre 1986 y 1991. El estudio trabaja casi siempre sobre museos y sobre edificios que se asientan en yacimientos —el museo de Madinat al-Zahra en Córdoba, la ampliación de San Telmo en San Sebastián, el museo Moritzburg de Halle, el barrio Joanneum de Graz— y su recurso constante es una superficie de hormigón moldeada con un relieve geométrico profundo que se lee como ornamento y funciona como estructura o como control de la luz. Nieto enseña en la Universidad Europea de Madrid desde 2003 e imparte conferencias en Europa y Estados Unidos.',
      it: "Nieto studiò a Madrid e alla Columbia, e nel 1984 fondò Nieto Sobejano Arquitectos con Enrique Sobejano, con il quale condivide la firma di ogni progetto da allora; i due diressero anche la rivista Arquitectura dell'ordine degli architetti di Madrid fra il 1986 e il 1991. Lo studio lavora quasi soltanto su musei e su edifici che poggiano su scavi archeologici — il museo di Madinat al-Zahra a Cordova, l'ampliamento di San Telmo a San Sebastián, il museo Moritzburg di Halle, il quartiere Joanneum a Graz — e il suo espediente ricorrente è una superficie di calcestruzzo gettata con un rilievo geometrico profondo che si legge come ornamento e funziona come struttura o come controllo della luce. Nieto insegna alla Universidad Europea de Madrid dal 2003 e tiene conferenze in Europa e negli Stati Uniti.",
    },
    awards: ['Aga Khan Award for Architecture', 'Alvar Aalto Medal', 'Gold Medal of Merit in the Fine Arts (Spain)', 'Fellow of the American Institute of Architects'],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q19902909', title: 'Fuensanta Nieto (Q19902909)', license: null },
      { kind: 'wikipedia', url: 'https://es.wikipedia.org/wiki/Fuensanta_Nieto', title: 'Fuensanta Nieto — Wikipedia (es)', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    // Added in the fix round for C3A's `coArchitects` — Wikidata's own P84
    // for C3A (Q5839725) credits only the firm, Nieto Sobejano Arquitectos,
    // not either partner individually. Not owned by any slice on the
    // contract's ownership table and confirmed undefined anywhere else in
    // the pool. floruit, movements, primaryTypology and signatureMaterial
    // mirror Nieto's own entry deliberately: the two are joint authors of
    // every project the practice has built since 1984.
    id: 'enrique-sobejano',
    wikidataId: 'Q15808152',
    name: 'Enrique Sobejano',
    alternativeNames: ['Enrique Sobejano García'],
    gender: 'man',
    born: 1957,
    died: null,
    floruit: { start: 1990, end: 2025, override: false },
    movements: 'unaffiliated',
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'cultural',
    signatureMaterial: 'concrete',
    portrait: {
      en: "Sobejano studied at Madrid's ETSAM and took a master's at Columbia. In 1984 he founded Nieto Sobejano Arquitectos with Fuensanta Nieto, with whom he has shared authorship of every project since, from the Madinat al-Zahra museum outside Córdoba to the Moritzburg museum extension in Halle and the C3A in Córdoba itself. He has taught in Madrid and, since 2008, has held a chair in architectural design at the Berlin University of the Arts, where he is also a full member of the Academy of Arts. The practice's recurring device is a cast or carved surface — concrete, stone or brick — pierced with a deep geometric relief that doubles as structure, shading or ornament. He and Nieto received the Aga Khan Award for Architecture in 2010 and the Alvar Aalto Medal in 2015.",
      es: 'Sobejano estudió en la ETSAM de Madrid y cursó un máster en Columbia. En 1984 fundó Nieto Sobejano Arquitectos con Fuensanta Nieto, con quien comparte la autoría de todos los proyectos desde entonces, desde el museo de Madinat al-Zahra junto a Córdoba hasta la ampliación del museo Moritzburg en Halle y el propio C3A cordobés. Ha enseñado en Madrid y, desde 2008, ocupa una cátedra de proyectos en la Universidad de las Artes de Berlín, donde es además miembro de número de la Academia de las Artes. El recurso constante del estudio es una superficie moldeada o labrada —hormigón, piedra o ladrillo— perforada por un relieve geométrico profundo que funciona a la vez como estructura, protección solar u ornamento. Junto con Nieto recibió el Premio Aga Khan de Arquitectura en 2010 y la Medalla Alvar Aalto en 2015.',
      it: "Sobejano studiò alla ETSAM di Madrid e conseguì un master alla Columbia. Nel 1984 fondò Nieto Sobejano Arquitectos con Fuensanta Nieto, con la quale condivide la firma di ogni progetto da allora, dal museo di Madinat al-Zahra presso Cordova all'ampliamento del museo Moritzburg a Halle e allo stesso C3A cordovese. Ha insegnato a Madrid e, dal 2008, tiene una cattedra di progettazione alla Universität der Künste di Berlino, dove è anche membro effettivo dell'Accademia delle Arti. L'espediente ricorrente dello studio è una superficie gettata o scolpita — calcestruzzo, pietra o mattone — forata da un rilievo geometrico profondo che funziona insieme come struttura, schermatura solare o ornamento. Insieme a Nieto ha ricevuto il Premio Aga Khan per l'Architettura nel 2010 e la Medaglia Alvar Aalto nel 2015.",
    },
    awards: ['Aga Khan Award for Architecture', 'Alvar Aalto Medal', 'Gold Medal of Merit in the Fine Arts (Spain)', 'National Prize for Conservation and Restoration of Cultural Heritage (Spain)'],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q15808152', title: 'Enrique Sobejano (Q15808152)', license: null },
      { kind: 'wikipedia', url: 'https://es.wikipedia.org/wiki/Enrique_Sobejano', title: 'Enrique Sobejano — Wikipedia (es)', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'amanda-levete',
    wikidataId: 'Q440786',
    name: 'Amanda Levete',
    alternativeNames: ['Amanda Jane Levete'],
    gender: 'woman',
    born: 1955,
    died: null,
    floruit: { start: 1996, end: 2025, override: false },
    movements: [{ id: 'neo-futurism', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'cultural',
    signatureMaterial: 'steel-and-glass',
    portrait: {
      en: 'Levete trained at the Architectural Association, worked for Richard Rogers, and from 1989 to 2009 was a partner in Future Systems with Jan Kaplický, where the aluminium monocoque of the Lord’s Media Centre — built in a shipyard, not on site — won the Stirling Prize in 1999 and the disc-clad Selfridges at Birmingham became the most photographed British building of its decade. Since founding AL_A in 2009 she has built the MAAT in Lisbon, the Exhibition Road courtyard and porcelain-tiled galleries at the V&A in London, and the Paisley Museum. Her work is consistently curved, seamless and made off-site, and it treats a building’s skin as a single continuous surface. She received the Jane Drew Prize in 2018 and was appointed CBE in 2017.',
      es: 'Levete se formó en la Architectural Association, trabajó para Richard Rogers y entre 1989 y 2009 fue socia de Future Systems junto a Jan Kaplický, donde el monocasco de aluminio del Lord’s Media Centre —construido en un astillero, no en obra— ganó el Stirling Prize en 1999 y el Selfridges de Birmingham, revestido de discos, se convirtió en el edificio británico más fotografiado de su década. Desde que fundó AL_A en 2009 ha levantado el MAAT de Lisboa, el patio de Exhibition Road y las salas de porcelana del V&A de Londres y el Museo de Paisley. Su obra es constantemente curva, sin juntas y prefabricada fuera de obra, y trata la piel del edificio como una superficie continua. Recibió el Jane Drew Prize en 2018 y fue nombrada CBE en 2017.',
      it: "Levete si formò alla Architectural Association, lavorò per Richard Rogers e fra il 1989 e il 2009 fu socia di Future Systems con Jan Kaplický, dove la monoscocca in alluminio del Lord’s Media Centre — costruita in un cantiere navale, non in opera — vinse lo Stirling Prize nel 1999 e il Selfridges di Birmingham, rivestito di dischi, divenne l'edificio britannico più fotografato del suo decennio. Dalla fondazione di AL_A nel 2009 ha realizzato il MAAT di Lisbona, la corte di Exhibition Road e le sale rivestite in porcellana del V&A a Londra e il Paisley Museum. Il suo lavoro è costantemente curvo, privo di giunti e prodotto fuori opera, e tratta la pelle dell'edificio come una superficie continua. Ha ricevuto il Jane Drew Prize nel 2018 ed è stata nominata CBE nel 2017.",
    },
    awards: ['Stirling Prize', 'Jane Drew Prize', 'Commander of the Order of the British Empire'],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q440786', title: 'Amanda Levete (Q440786)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Amanda_Levete', title: 'Amanda Levete — Wikipedia', license: 'CC BY-SA 4.0' },
      { kind: 'institution', url: 'https://www.ala.uk.com/projects/maat/', title: 'MAAT — AL_A project page', license: null },
    ],
  },
];
