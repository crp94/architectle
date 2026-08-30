import type { Building } from '@/types/building';

// Wave 5 curator agent (Central and Eastern Europe): real, sourced Building entries for this slice.
//
// Slice countries: PL, CZ, SK, HU, RO, BG, RS, HR, SI, BA, MK, AL, UA, BY, MD, RU.
// M49 note: PL/CZ/HU/RU/SK/RO/BG/BY/UA/MD are *Eastern Europe*; HR/SI/RS/BA/MK/AL
// are *Southern Europe*, the same subregion as Italy, Spain and Greece.
//
// Every image below is an EXTERIOR view. For buildings whose architect died
// less than 70 years ago the photographer's CC licence clears the photograph
// but not the architecture, so the entry additionally relies on freedom of
// panorama in the country concerned (CZ, PL, HR, RS, MK and RU-for-buildings
// all provide it). Slovenia, Romania, Belarus, Ukraine and Bulgaria do not,
// which is why no in-copyright building from those countries appears here.
export const EUROPE_CENTRAL_BUILDINGS: Building[] = [
  {
    id: 'zelena-hora-pilgrimage-church',
    wikidataId: 'Q752318',
    name: {
      en: 'Pilgrimage Church of St John of Nepomuk at Zelená hora',
      es: 'Iglesia de peregrinación de San Juan Nepomuceno en Zelená hora',
      it: 'Chiesa di pellegrinaggio di San Giovanni Nepomuceno a Zelená hora',
    },
    architectId: 'jan-santini-aichel',
    location: { city: 'Žďár nad Sázavou', countryCode: 'CZ', lat: 49.58, lon: 15.94194 },
    inception: 1719,
    completed: 1722,
    demolished: null,
    typology: 'sacral',
    materials: ['stone', 'brick'],
    structure: {
      en: 'A rendered masonry rotunda on a five-pointed star plan, its central space ringed by five pairs of piers carrying ribbed vaults and a shallow dome, with five tent-roofed chapels pushed out between them.',
      es: 'Una rotonda de fábrica revocada sobre planta de estrella de cinco puntas, cuyo espacio central rodean cinco pares de pilares que sostienen bóvedas de crucería y una cúpula rebajada, con cinco capillas de cubierta en tienda proyectadas entre ellos.',
      it: 'Una rotonda in muratura intonacata su pianta a stella a cinque punte, il cui spazio centrale è cinto da cinque coppie di pilastri che reggono volte costolonate e una cupola ribassata, con cinque cappelle a tetto conico sporgenti fra di essi.',
    },
    program: {
      en: 'Built for Václav Vejmluva, abbot of the Cistercian monastery at Žďár, as a pilgrimage church for the newly beatified John of Nepomuk, and still in use as a church.',
      es: 'Construida para Václav Vejmluva, abad del monasterio cisterciense de Žďár, como iglesia de peregrinación al recién beatificado Juan Nepomuceno, y todavía en uso como iglesia.',
      it: 'Costruita per Václav Vejmluva, abate del monastero cistercense di Žďár, come chiesa di pellegrinaggio per il neo-beatificato Giovanni Nepomuceno, ed è tuttora in uso come chiesa.',
    },
    heritage: 'unesco',
    currentUse: {
      en: 'Parish church and pilgrimage site, inscribed on the UNESCO World Heritage List in 1994.',
      es: 'Iglesia parroquial y lugar de peregrinación, inscrita en la Lista del Patrimonio Mundial de la UNESCO en 1994.',
      it: 'Chiesa parrocchiale e luogo di pellegrinaggio, iscritta nella Lista del Patrimonio Mondiale UNESCO nel 1994.',
    },
    detailRect: { x: 0.35, y: 0.56, w: 0.30, h: 0.28 },
    image: {
      // Re-verified on the live Commons page during this pass: the file
      // originally recorded here (Kostel svatého Jana Nepomuckého (3).jpg)
      // is filed under "Interior of Pilgrimage Church of Saint John of
      // Nepomuk" — an interior shot, contradicting this file's own header
      // comment that every image in the slice is an exterior. Santini has
      // been dead since 1723, so the architecture itself carries no
      // copyright risk either way, but swapped to a genuine exterior for
      // consistency with the rest of the slice and with the game's crop
      // mechanic (a player should be able to recognise the building's
      // silhouette by the final guess). Portrait-orientation wide shot of
      // the whole church from the approach, dome and tower dominant with
      // sky above; the rect below sits on the lower two-thirds of the
      // frame, over the chapel/rotunda roofline rather than the sky.
      commonsFile: 'File:Zelená hora - poutní kostel.jpg',
      photographer: 'Prazak',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Zelen%C3%A1_hora_-_poutn%C3%AD_kostel.jpg',
      width: 1000,
      height: 1500,
    },
    dossier: {
      en: 'On 15 April 1719 the tomb of John of Nepomuk was opened in Prague and the tissue found inside it was declared his incorrupt tongue. Within four months the abbot of Žďár had a design. Santini built the whole church around the number five — five points to the star plan, five chapels, five altars, five stars in the vault, matching the five stars of the saint\'s halo — and set the church inside a ten-sided cloister that repeats the figure at the scale of the hill. The architecture is stranger than the programme required. Pointed arches, ribbed vaults and a rippling parapet quote the Gothic three centuries after it ended, an archaism the Cistercians read as respect for their medieval foundation. Consecrated in 1722, it was Santini\'s last work; he died the following year. A fire in 1784 destroyed the roof, which was rebuilt to a flatter profile. UNESCO inscribed it in 1994, citing the mathematical ratios that produce, in the nomination\'s phrase, an independent spatial reality.',
      es: 'El 15 de abril de 1719 se abrió en Praga la tumba de Juan Nepomuceno y el tejido hallado en su interior se declaró su lengua incorrupta. En menos de cuatro meses el abad de Žďár tenía un proyecto. Santini construyó toda la iglesia en torno al número cinco —cinco puntas de la estrella en planta, cinco capillas, cinco altares, cinco estrellas en la bóveda, como las cinco del nimbo del santo— y la situó dentro de un claustro decagonal que repite la figura a escala del cerro. La arquitectura es más extraña de lo que el programa exigía. Arcos apuntados, bóvedas de crucería y un pretil ondulante citan el gótico tres siglos después de su final, un arcaísmo que los cistercienses leyeron como respeto por su fundación medieval. Consagrada en 1722, fue la última obra de Santini, muerto al año siguiente. Un incendio destruyó la cubierta en 1784. La UNESCO la inscribió en 1994.',
      it: 'Il 15 aprile 1719 fu aperta a Praga la tomba di Giovanni Nepomuceno e il tessuto trovato al suo interno venne dichiarato la sua lingua incorrotta. In meno di quattro mesi l\'abate di Žďár aveva un progetto. Santini costruì l\'intera chiesa attorno al numero cinque — cinque punte della stella in pianta, cinque cappelle, cinque altari, cinque stelle nella volta, come le cinque del nimbo del santo — e la collocò dentro un chiostro decagonale che ripete la figura alla scala della collina. L\'architettura è più strana di quanto il programma richiedesse. Archi acuti, volte costolonate e un parapetto ondulato citano il gotico tre secoli dopo la sua fine, un arcaismo che i cistercensi lessero come rispetto per la propria fondazione medievale. Consacrata nel 1722, fu l\'ultima opera di Santini, morto l\'anno seguente. Un incendio distrusse il tetto nel 1784. L\'UNESCO la iscrisse nel 1994.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q752318', title: 'Pilgrimage Church of Saint John of Nepomuk (Q752318)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Pilgrimage_Church_of_Saint_John_of_Nepomuk', title: 'Pilgrimage Church of Saint John of Nepomuk', license: 'CC BY-SA 4.0' },
      { kind: 'institution', url: 'https://whc.unesco.org/en/list/690/', title: 'Pilgrimage Church of St John of Nepomuk at Zelená Hora — UNESCO World Heritage Centre', license: null },
    ],
    tier: 'canon',
  },
  {
    id: 'stari-most-mostar',
    wikidataId: 'Q188528',
    name: {
      en: 'Stari Most (Old Bridge), Mostar',
      es: 'Stari Most (Puente Viejo) de Mostar',
      it: 'Stari Most (Ponte Vecchio) di Mostar',
    },
    architectId: 'mimar-hayruddin',
    location: { city: 'Mostar', countryCode: 'BA', lat: 43.33728, lon: 17.81503 },
    inception: 1557,
    completed: 1566,
    demolished: null,
    typology: 'infrastructure',
    materials: ['stone'],
    structure: {
      en: 'A single hump-backed limestone arch of about 29 metres, rising some 12 metres from abutments keyed directly into the rock of the gorge rather than founded on piers in the river.',
      es: 'Un único arco de piedra caliza de lomo de asno de unos 29 metros, con una flecha de unos 12, cuyos estribos se empotran directamente en la roca del desfiladero en lugar de apoyarse en pilas dentro del río.',
      it: 'Un\'unica arcata a schiena d\'asino in calcare di circa 29 metri, con una freccia di circa 12, le cui spalle si incastrano direttamente nella roccia della gola invece di poggiare su pile nel fiume.',
    },
    program: {
      en: 'Commissioned by Suleiman the Magnificent to replace a wooden suspension crossing on the Neretva, and still the principal pedestrian link between the two halves of Mostar.',
      es: 'Encargado por Solimán el Magnífico para sustituir un puente colgante de madera sobre el Neretva, sigue siendo el principal enlace peatonal entre las dos mitades de Mostar.',
      it: 'Commissionato da Solimano il Magnifico per sostituire un ponte sospeso in legno sulla Neretva, resta il principale collegamento pedonale fra le due metà di Mostar.',
    },
    heritage: 'unesco',
    currentUse: {
      en: 'Pedestrian bridge and the centre of the Old Bridge Area of the Old City of Mostar, inscribed by UNESCO in 2005.',
      es: 'Puente peatonal y centro del conjunto del Puente Viejo del casco antiguo de Mostar, inscrito por la UNESCO en 2005.',
      it: 'Ponte pedonale e centro dell\'area del Ponte Vecchio della città storica di Mostar, iscritta dall\'UNESCO nel 2005.',
    },
    detailRect: { x: 0.50, y: 0.36, w: 0.32, h: 0.24 },
    image: {
      commonsFile: 'File:Mostar bridge cloudy.jpg',
      photographer: 'Hibasi',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mostar_bridge_cloudy.jpg',
      width: 1600,
      height: 1067,
    },
    dossier: {
      en: 'The Ottoman geographer Katip Çelebi recorded that the wooden bridge Hayruddin was sent to replace "swayed so much that people crossing it did so in mortal fear". His answer was a single stone arch thrown clear across the Neretva gorge, with no pier in the water: the abutments are keyed into the limestone cliffs and rise more than six metres before the arch springs. Work began in 1557 and the inscription dates completion to the Muslim year 974, between July 1566 and July 1567. On completion it was among the widest arches yet built anywhere, and the townspeople took their name from it — mostari, the bridge keepers, who manned the two towers at either end. Almost nothing is documented about how it was made; the mortar is traditionally said to have been mixed with egg white. What survived instead were the tower gates, the ribbed roadway that still gives a foothold on the climb, and the name of the builder.',
      es: 'El geógrafo otomano Katip Çelebi anotó que el puente de madera que Hayruddin fue enviado a sustituir «se bamboleaba tanto que quienes lo cruzaban lo hacían con miedo mortal». Su respuesta fue un arco único de piedra lanzado limpiamente sobre el desfiladero del Neretva, sin ninguna pila en el agua: los estribos se empotran en los acantilados calizos y ascienden más de seis metros antes de que arranque el arco. Las obras comenzaron en 1557 y la inscripción fecha su terminación en el año musulmán 974, entre julio de 1566 y julio de 1567. Al acabarse figuraba entre los arcos más anchos construidos hasta entonces, y los habitantes tomaron de él su nombre: mostari, los guardianes del puente, que atendían las dos torres de los extremos. Casi nada se documenta sobre su ejecución; la tradición sostiene que el mortero se amasó con clara de huevo.',
      it: 'Il geografo ottomano Katip Çelebi annotò che il ponte di legno che Hayruddin fu mandato a sostituire «oscillava tanto che chi lo attraversava lo faceva con timore mortale». La sua risposta fu un\'unica arcata in pietra gettata di netto sulla gola della Neretva, senza alcuna pila in acqua: le spalle si incastrano nelle falesie calcaree e salgono per oltre sei metri prima che l\'arco si imposti. I lavori iniziarono nel 1557 e l\'iscrizione data il completamento all\'anno musulmano 974, fra il luglio 1566 e il luglio 1567. Al termine era fra le arcate più ampie mai costruite, e gli abitanti ne presero il nome: mostari, i custodi del ponte, che presidiavano le due torri alle estremità. Quasi nulla è documentato sulla sua esecuzione; la tradizione vuole che la malta fosse impastata con albume d\'uovo.',
    },
    context: {
      body: {
        en: 'During the Croat–Bosniak War the Army of the Republic of Bosnia and Herzegovina used the bridge as a supply route, and on 9 November 1993 it was shelled and destroyed by the Croatian Defence Council. The arch was rebuilt to the original design, largely from stone quarried locally and blocks recovered from the river, under a programme coordinated with UNESCO and the World Bank; it reopened on 23 July 2004, and the old town around it was inscribed as a World Heritage Site in 2005. In 2017 the appeals chamber of the International Criminal Tribunal for the former Yugoslavia found that the bridge had been a legitimate military target at the time it was destroyed.',
        es: 'Durante la guerra croato-bosnia el Ejército de la República de Bosnia y Herzegovina utilizó el puente como vía de suministro y, el 9 de noviembre de 1993, fue bombardeado y destruido por el Consejo de Defensa Croata. El arco se reconstruyó según el diseño original, en buena parte con piedra de canteras locales y sillares recuperados del río, mediante un programa coordinado con la UNESCO y el Banco Mundial; se reabrió el 23 de julio de 2004 y el casco antiguo que lo rodea fue inscrito como Patrimonio Mundial en 2005. En 2017 la sala de apelaciones del Tribunal Penal Internacional para la ex Yugoslavia concluyó que el puente había constituido un objetivo militar legítimo en el momento de su destrucción.',
        it: 'Durante la guerra croato-bosniaca l\'Esercito della Repubblica di Bosnia ed Erzegovina utilizzò il ponte come via di rifornimento e, il 9 novembre 1993, esso fu bombardato e distrutto dal Consiglio di difesa croato. L\'arcata fu ricostruita secondo il disegno originale, in larga parte con pietra di cave locali e conci recuperati dal fiume, nell\'ambito di un programma coordinato con l\'UNESCO e la Banca Mondiale; riaprì il 23 luglio 2004 e il centro storico circostante fu iscritto come Patrimonio Mondiale nel 2005. Nel 2017 la camera d\'appello del Tribunale penale internazionale per l\'ex Jugoslavia stabilì che il ponte era stato un obiettivo militare legittimo al momento della distruzione.',
      },
      sources: [
        { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Stari_Most', title: 'Stari Most', license: 'CC BY-SA 4.0' },
        { kind: 'institution', url: 'https://whc.unesco.org/en/list/946/', title: 'Old Bridge Area of the Old City of Mostar — UNESCO World Heritage Centre', license: null },
      ],
    },
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q188528', title: 'Stari Most (Q188528)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Stari_Most', title: 'Stari Most', license: 'CC BY-SA 4.0' },
      { kind: 'institution', url: 'https://whc.unesco.org/en/list/946/', title: 'Old Bridge Area of the Old City of Mostar — UNESCO World Heritage Centre', license: null },
    ],
    tier: 'canon',
  },
  {
    id: 'budapest-museum-of-applied-arts',
    wikidataId: 'Q1088467',
    name: {
      en: 'Museum of Applied Arts, Budapest',
      es: 'Museo de Artes Aplicadas de Budapest',
      it: 'Museo delle Arti Applicate di Budapest',
    },
    architectId: 'odon-lechner',
    // Wikipedia credits this jointly: "designed by Ödön Lechner and Gyula
    // Pártos". architectId stays Lechner (he led the artistic side per both
    // architects' own account, and is the name the building is known by),
    // with Pártos credited honestly via coArchitects rather than dropped.
    coArchitects: ['gyula-partos'],
    location: { city: 'Budapest', countryCode: 'HU', lat: 47.48611, lon: 19.06833 },
    inception: 1893,
    completed: 1896,
    demolished: null,
    typology: 'cultural',
    materials: ['brick', 'steel-and-glass'],
    structure: {
      en: 'A load-bearing brick block faced in Zsolnay pyrogranite, wrapped around a top-lit central hall whose glazed vault is carried on an iron frame.',
      es: 'Un bloque de fábrica de ladrillo revestido de pirogranito de Zsolnay, dispuesto alrededor de un salón central cenital cuya bóveda acristalada descansa sobre una estructura de hierro.',
      it: 'Un blocco in muratura di mattoni rivestito di pirogranito Zsolnay, disposto attorno a una sala centrale con luce zenitale la cui volta vetrata poggia su un\'ossatura in ferro.',
    },
    program: {
      en: 'Built for the museum founded by the Hungarian parliament in 1872, and shared from 1896 with the Royal School of Applied Arts.',
      es: 'Construido para el museo fundado por el parlamento húngaro en 1872, y compartido desde 1896 con la Escuela Real de Artes Aplicadas.',
      it: 'Costruito per il museo fondato dal parlamento ungherese nel 1872, e condiviso dal 1896 con la Regia Scuola di Arti Applicate.',
    },
    heritage: 'national',
    currentUse: {
      en: 'Still the Museum of Applied Arts; the building has been closed to visitors for a reconstruction set in motion by a design competition held in 2012.',
      es: 'Sigue siendo el Museo de Artes Aplicadas; el edificio permanece cerrado al público por una reconstrucción iniciada a raíz de un concurso de proyectos convocado en 2012.',
      it: 'È tuttora il Museo delle Arti Applicate; l\'edificio è chiuso al pubblico per una ricostruzione avviata a seguito di un concorso di progettazione bandito nel 2012.',
    },
    detailRect: { x: 0.45, y: 0.18, w: 0.32, h: 0.30 },
    image: {
      commonsFile: 'File:Museum of Applied Arts. Main facade from south. BudapestDSCN3639.jpg',
      photographer: 'Yoav Dothan',
      license: 'PD',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Museum_of_Applied_Arts._Main_facade_from_south._BudapestDSCN3639.jpg',
      width: 1600,
      height: 1200,
    },
    dossier: {
      en: 'The third applied-arts museum in the world after London and Vienna, and the building in which Lechner first got his argument fully built. He and Gyula Pártos won the commission and worked from 1893 to 1896, finishing in time for the millennial celebrations of the Magyar conquest. The exterior is a brick box carrying an unbroken sheet of Zsolnay pyrogranite: a frost-proof glazed stoneware developed at Pécs, which let Lechner run green and gold across the roof and pull the dome up into a bulb of gilded ceramic. The ornament is not Hungarian folk art transcribed but a synthesis he assembled from embroidery motifs and from Indian and Persian sources, following a then-current belief that Magyar pattern shared an eastern ancestry. Inside, the sequence reverses: a white, top-lit central hall with pointed arcades and an iron-framed glass vault, closer to a Victorian exhibition shed than to anything on the facade.',
      es: 'El tercer museo de artes aplicadas del mundo después de los de Londres y Viena, y el edificio en que Lechner construyó por fin su tesis completa. Él y Gyula Pártos ganaron el encargo y trabajaron de 1893 a 1896, a tiempo para las celebraciones del milenario de la conquista magiar. El exterior es una caja de ladrillo cubierta por un manto continuo de pirogranito de Zsolnay, gres vidriado resistente a la helada desarrollado en Pécs, que permitió a Lechner extender verde y oro por la cubierta y rematar la cúpula en un bulbo de cerámica dorada. El ornamento no es arte popular húngaro transcrito, sino una síntesis que reunió a partir de motivos de bordado y de fuentes indias y persas, siguiendo la creencia entonces vigente de un tronco oriental común. Dentro, la secuencia se invierte: un salón blanco y cenital de arcadas apuntadas y bóveda de vidrio sobre armazón de hierro.',
      it: 'Il terzo museo di arti applicate al mondo dopo Londra e Vienna, e l\'edificio in cui Lechner riuscì finalmente a costruire per intero la propria tesi. Insieme a Gyula Pártos vinse l\'incarico e lavorò dal 1893 al 1896, in tempo per le celebrazioni del millenario della conquista magiara. L\'esterno è una scatola di mattoni ricoperta da un manto continuo di pirogranito Zsolnay, grès invetriato resistente al gelo messo a punto a Pécs, che permise a Lechner di stendere verde e oro sul tetto e di concludere la cupola in un bulbo di ceramica dorata. L\'ornato non è arte popolare ungherese trascritta, ma una sintesi raccolta da motivi di ricamo e da fonti indiane e persiane, secondo la convinzione allora corrente di un ceppo orientale comune. Dentro la sequenza si rovescia: una sala bianca a luce zenitale, con arcate acute e volta di vetro su ossatura di ferro.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q1088467', title: 'Museum of Applied Arts (Q1088467)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Museum_of_Applied_Arts_(Budapest)', title: 'Museum of Applied Arts (Budapest)', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/%C3%96d%C3%B6n_Lechner', title: 'Ödön Lechner', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
  {
    id: 'prague-church-of-the-most-sacred-heart',
    wikidataId: 'Q1164329',
    name: {
      en: 'Church of the Most Sacred Heart of Our Lord, Prague',
      es: 'Iglesia del Sagrado Corazón de Nuestro Señor, Praga',
      it: 'Chiesa del Sacratissimo Cuore di Nostro Signore, Praga',
    },
    architectId: 'joze-plecnik',
    location: { city: 'Prague', countryCode: 'CZ', lat: 50.078035, lon: 14.4507539 },
    inception: 1929,
    completed: 1932,
    demolished: null,
    typology: 'sacral',
    materials: ['brick', 'stone'],
    structure: {
      en: 'A single undivided hall roofed in one span, its walls built as a dark brick skin studded with projecting grey stone blocks and closed at the east by a flat 42-metre tower pierced by a glazed clock.',
      es: 'Una sala única sin dividir cubierta de un solo vano, con muros levantados como una piel de ladrillo oscuro tachonada de bloques salientes de piedra gris y cerrada al este por una torre plana de 42 metros perforada por un reloj acristalado.',
      it: 'Un\'unica sala indivisa coperta con una sola campata, con murature costruite come una pelle di mattoni scuri tempestata di blocchi sporgenti di pietra grigia e chiusa a est da una torre piatta di 42 metri traforata da un orologio vetrato.',
    },
    program: {
      en: 'A parish church for the growing Vinohrady district, commissioned by the Catholic Church as one of two new Prague churches marking the millennium of the death of St Wenceslas.',
      es: 'Iglesia parroquial para el creciente barrio de Vinohrady, encargada por la Iglesia católica como una de las dos nuevas iglesias de Praga con motivo del milenario de la muerte de san Wenceslao.',
      it: 'Chiesa parrocchiale per il crescente quartiere di Vinohrady, commissionata dalla Chiesa cattolica come una delle due nuove chiese praghesi per il millenario della morte di san Venceslao.',
    },
    heritage: 'national',
    currentUse: {
      en: 'Active Roman Catholic parish church, listed as a Czech national cultural monument since 2010.',
      es: 'Iglesia parroquial católica en uso, declarada monumento cultural nacional checo desde 2010.',
      it: 'Chiesa parrocchiale cattolica in uso, dichiarata monumento culturale nazionale ceco dal 2010.',
    },
    detailRect: { x: 0.30, y: 0.36, w: 0.30, h: 0.30 },
    image: {
      commonsFile: 'File:Praha kostel NSP bok 1.jpg',
      photographer: 'VitVit',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Praha_kostel_NSP_bok_1.jpg',
      width: 1600,
      height: 971,
    },
    dossier: {
      en: 'Plečnik had been working at Prague Castle for a decade when the archdiocese asked him for a parish church on the new square at Jiřího z Poděbrad. He gave Vinohrady something that reads at a distance as a Roman basilica and up close as nothing of the kind. The long walls are faced in dark brown brick into which grey stone blocks are set proud of the surface at regular intervals, a chequer he is said to have thought of as ermine, so that the whole building resembles a robe rather than a masonry box. Above it runs a broad white cornice like an entablature that has slipped its columns. The east end is a single flat tower forty-two metres high, split by a glazed clock 7.6 metres across — still the largest in the country — with a ramped stair climbing through the wall behind it. Inside there is one undivided hall, a coffered timber ceiling and a white marble altar carrying six patrons of Bohemia.',
      es: 'Plečnik llevaba una década trabajando en el Castillo de Praga cuando el arzobispado le pidió una parroquia en la nueva plaza de Jiřího z Poděbrad. Dio a Vinohrady algo que de lejos se lee como una basílica romana y de cerca como nada semejante. Los muros largos se revisten de ladrillo pardo oscuro en el que se incrustan, sobresaliendo a intervalos regulares, bloques de piedra gris: un damero que él habría concebido como armiño, de modo que el edificio entero recuerda más a un manto que a una caja de fábrica. Encima corre una ancha cornisa blanca, como un entablamento al que se le hubieran escapado las columnas. El testero oriental es una única torre plana de cuarenta y dos metros, partida por un reloj acristalado de 7,6 metros de diámetro —aún el mayor del país— con una escalera en rampa que asciende por el muro. Dentro, una sola sala, techo de casetones de madera y altar de mármol blanco.',
      it: 'Plečnik lavorava da un decennio al Castello di Praga quando l\'arcidiocesi gli chiese una parrocchiale sulla nuova piazza di Jiřího z Poděbrad. Diede a Vinohrady qualcosa che da lontano si legge come una basilica romana e da vicino come nulla del genere. Le pareti lunghe sono rivestite di mattoni bruno scuro in cui blocchi di pietra grigia sono incastonati sporgenti a intervalli regolari: una scacchiera che egli avrebbe pensato come ermellino, così che l\'intero edificio somiglia a un manto più che a una scatola muraria. Sopra corre un\'ampia cornice bianca, come una trabeazione sfuggita alle proprie colonne. Il fronte orientale è un\'unica torre piatta di quarantadue metri, spaccata da un orologio vetrato di 7,6 metri di diametro — tuttora il maggiore del paese — con una scala in rampa che sale dentro il muro. All\'interno una sola sala, soffitto ligneo a cassettoni e altare in marmo bianco.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q1164329', title: 'Church of the Most Sacred Heart of Our Lord (Q1164329)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Church_of_the_Most_Sacred_Heart_of_Our_Lord', title: 'Church of the Most Sacred Heart of Our Lord', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
  {
    id: 'melnikov-house-moscow',
    wikidataId: 'Q4165336',
    name: {
      en: 'Melnikov House, Moscow',
      es: 'Casa Mélnikov, Moscú',
      it: 'Casa Mel\'nikov, Mosca',
    },
    architectId: 'konstantin-melnikov',
    location: { city: 'Moscow', countryCode: 'RU', lat: 55.74806, lon: 37.58944 },
    inception: 1927,
    completed: 1929,
    demolished: null,
    typology: 'domestic',
    materials: ['brick'],
    structure: {
      en: 'Two interlocking brick cylinders under stuccoed render, the walls laid as a diagonal lattice whose gaps were either glazed as hexagonal windows or filled with rubble, so that no internal frame or beam is needed.',
      es: 'Dos cilindros de ladrillo entrelazados bajo revoco, con muros aparejados en retícula diagonal cuyos huecos se acristalaron como ventanas hexagonales o se rellenaron de cascote, de modo que no se precisa armazón ni viga interior.',
      it: 'Due cilindri di mattoni compenetrati sotto intonaco, con murature apparecchiate a reticolo diagonale i cui vuoti furono vetrati come finestre esagonali oppure riempiti di pietrame, così che non serve alcuna ossatura o trave interna.',
    },
    program: {
      en: 'Built by Melnikov as a house and studio for himself, his wife and their two children, on a private plot granted by the Moscow soviet.',
      es: 'Construida por Mélnikov como vivienda y taller para sí mismo, su mujer y sus dos hijos, en una parcela privada concedida por el sóviet de Moscú.',
      it: 'Costruita da Mel\'nikov come casa e studio per sé, la moglie e i due figli, su un lotto privato concesso dal soviet di Mosca.',
    },
    heritage: 'national',
    currentUse: {
      en: 'The Melnikov Museum, a branch of the Shchusev State Museum of Architecture since 2014; the interiors have been closed for restoration since 2022 while the garden and exterior remain accessible.',
      es: 'Museo Mélnikov, filial del Museo Estatal de Arquitectura Shchúsev desde 2014; los interiores están cerrados por restauración desde 2022, aunque el jardín y el exterior siguen accesibles.',
      it: 'Museo Mel\'nikov, sezione del Museo statale di architettura Ščusev dal 2014; gli interni sono chiusi per restauro dal 2022, mentre il giardino e l\'esterno restano accessibili.',
    },
    detailRect: { x: 0.14, y: 0.52, w: 0.32, h: 0.30 },
    image: {
      commonsFile: 'File:Melnikov House, May 2021.jpg',
      photographer: 'Paulkuz',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Melnikov_House%2C_May_2021.jpg',
      width: 1200,
      height: 1600,
    },
    dossier: {
      en: 'A one-family house in the middle of Moscow, built in the years when private building had all but stopped, and the only such commission Melnikov ever had — from himself. He set two brick cylinders overlapping by about a third of their diameter, so the plan is a figure of eight and every room is a segment of a circle. The walls carry themselves: bricks laid in a diagonal net leave two hundred hexagonal openings, of which sixty were glazed and the rest packed with rubble and rendered over, allowing windows to be added or closed without touching the structure. The front cylinder is cut open by a two-storey sheet of glazing carrying his name and the word ARCHITECT; the rear one is pierced by rows of hexagons and lights a studio with no shadowed corner. He finished it before he was forty. Nothing else of his was built after 1936, and he lived in the house until his death in 1974.',
      es: 'Una casa unifamiliar en pleno Moscú, levantada en los años en que la construcción privada prácticamente había cesado, y el único encargo de ese tipo que Mélnikov tuvo jamás: el suyo propio. Superpuso dos cilindros de ladrillo solapados en cerca de un tercio de su diámetro, de modo que la planta es un ocho y toda habitación es un segmento de círculo. Los muros se sostienen solos: el ladrillo aparejado en red diagonal deja doscientos huecos hexagonales, sesenta de ellos acristalados y el resto rellenos de cascote y revocados, lo que permite abrir o cerrar ventanas sin tocar la estructura. El cilindro delantero lo abre un paño acristalado de dos alturas con su nombre y la palabra ARQUITECTO; el trasero, perforado por hileras de hexágonos, ilumina un taller sin un solo rincón en sombra. Vivió en ella hasta su muerte en 1974.',
      it: 'Una casa unifamiliare nel pieno di Mosca, costruita negli anni in cui l\'edilizia privata era quasi cessata, e l\'unico incarico del genere che Mel\'nikov abbia mai avuto: il proprio. Sovrappose due cilindri di mattoni intersecati per circa un terzo del diametro, così che la pianta è un otto e ogni stanza è un segmento di cerchio. Le murature si reggono da sole: i mattoni disposti a rete diagonale lasciano duecento aperture esagonali, sessanta delle quali vetrate e le altre riempite di pietrame e intonacate, il che permette di aprire o chiudere finestre senza toccare la struttura. Il cilindro anteriore è squarciato da una vetrata su due piani che porta il suo nome e la parola ARCHITETTO; quello posteriore, traforato da file di esagoni, illumina uno studio senza un solo angolo in ombra. Vi abitò fino alla morte, nel 1974.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q4165336', title: 'Melnikov House (Q4165336)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Melnikov_House', title: 'Melnikov House', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Konstantin_Melnikov', title: 'Konstantin Melnikov', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
  {
    id: 'jested-tower-liberec',
    wikidataId: 'Q1129608',
    name: {
      en: 'Ještěd Tower and Hotel',
      es: 'Torre y hotel de Ještěd',
      it: 'Torre e albergo dello Ještěd',
    },
    architectId: 'karel-hubacek',
    location: { city: 'Liberec', countryCode: 'CZ', lat: 50.732628, lon: 14.984592 },
    inception: 1966,
    completed: 1973,
    demolished: null,
    typology: 'tower',
    materials: ['concrete', 'steel-and-glass'],
    structure: {
      en: 'A 94-metre reinforced concrete shell in the form of a rotation hyperboloid, whose curve carries the transmitter mast, resists the summit winds and continues the profile of the mountain in one figure.',
      es: 'Una lámina de hormigón armado de 94 metros con forma de hiperboloide de revolución, cuya curva sostiene el mástil emisor, resiste los vientos de la cumbre y prolonga el perfil de la montaña en una sola figura.',
      it: 'Un guscio in cemento armato di 94 metri a forma di iperboloide di rotazione, la cui curva sorregge l\'albero del trasmettitore, resiste ai venti della vetta e prolunga il profilo della montagna in un\'unica figura.',
    },
    program: {
      en: 'Commissioned jointly by the Liberec restaurant enterprise and the Prague radio communications administration to combine a mountain hotel and restaurant with a television transmitter.',
      es: 'Encargada conjuntamente por la empresa de restauración de Liberec y la administración de radiocomunicaciones de Praga para reunir un hotel de montaña con restaurante y un emisor de televisión.',
      it: 'Commissionata congiuntamente dall\'impresa di ristorazione di Liberec e dall\'amministrazione praghese delle radiocomunicazioni per unire un albergo di montagna con ristorante e un trasmettitore televisivo.',
    },
    heritage: 'national',
    currentUse: {
      en: 'Working television transmitter, hotel and restaurant; a Czech national cultural monument since 2006 and on the country\'s UNESCO tentative list since 2007.',
      es: 'Emisor de televisión en servicio, hotel y restaurante; monumento cultural nacional checo desde 2006 y en la lista indicativa de la UNESCO desde 2007.',
      it: 'Trasmettitore televisivo in funzione, albergo e ristorante; monumento culturale nazionale ceco dal 2006 e nella lista propositiva UNESCO dal 2007.',
    },
    detailRect: { x: 0.32, y: 0.58, w: 0.34, h: 0.26 },
    image: {
      commonsFile: 'File:2022-12-15-Jested-Tower-01.jpg',
      photographer: 'Gunnar Klack',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:2022-12-15-Jested-Tower-01.jpg',
      width: 1600,
      height: 1600,
    },
    dossier: {
      en: 'The wooden lodge on the summit of Ještěd burned down in January 1963, and the competition held a month later asked for a replacement that would also carry a television transmitter. Eleven entries came in; Hubáček\'s won because it refused to treat the two programmes as separate buildings. He proposed a single hyperboloid of revolution whose curve begins where the mountain profile ends, so that from Liberec the hill appears simply to continue upward into a mast. The same geometry solves the engineering: the shell sheds the summit wind, and a pendulum damper inside the shaft absorbs the sway. The hotel and restaurant occupy the flared base behind a continuous band of glazing; above them the cone tapers into the transmitter. Design took three years, construction seven, and it opened in July 1973. Hubáček had already received the International Union of Architects\' Auguste Perret Prize for it in 1969, four years before anyone could stand inside.',
      es: 'El refugio de madera de la cumbre del Ještěd ardió en enero de 1963, y el concurso convocado un mes después pedía un sustituto que albergara además un emisor de televisión. Se presentaron once propuestas; ganó la de Hubáček porque se negó a tratar los dos programas como edificios distintos. Propuso un único hiperboloide de revolución cuya curva arranca donde termina el perfil de la montaña, de modo que desde Liberec el cerro parece continuar sin más hacia arriba hasta convertirse en mástil. La misma geometría resuelve la ingeniería: la lámina desvía el viento de cumbre y un amortiguador de péndulo alojado en el fuste absorbe la oscilación. El hotel y el restaurante ocupan la base acampanada tras una banda continua de vidrio. El proyecto llevó tres años y la obra siete; abrió en julio de 1973. La Unión Internacional de Arquitectos ya le había dado el Premio Auguste Perret en 1969.',
      it: 'Il rifugio di legno sulla vetta dello Ještěd bruciò nel gennaio 1963, e il concorso bandito un mese dopo chiedeva un sostituto che ospitasse anche un trasmettitore televisivo. Arrivarono undici proposte; vinse quella di Hubáček perché rifiutava di trattare i due programmi come edifici distinti. Propose un unico iperboloide di rotazione la cui curva inizia dove finisce il profilo della montagna, così che da Liberec il colle sembra semplicemente proseguire verso l\'alto fino a farsi albero d\'antenna. La stessa geometria risolve l\'ingegneria: il guscio devia il vento di vetta e uno smorzatore a pendolo alloggiato nel fusto assorbe l\'oscillazione. Albergo e ristorante occupano la base svasata dietro una fascia continua di vetro. Il progetto richiese tre anni, il cantiere sette; aprì nel luglio 1973. L\'Unione Internazionale degli Architetti gli aveva già assegnato il Premio Auguste Perret nel 1969.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q1129608', title: 'Ještěd Tower (Q1129608)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Je%C5%A1t%C4%9Bd_Tower', title: 'Ještěd Tower', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
  {
    id: 'museum-of-contemporary-art-belgrade',
    wikidataId: 'Q1290510',
    name: {
      en: 'Museum of Contemporary Art, Belgrade',
      es: 'Museo de Arte Contemporáneo de Belgrado',
      it: 'Museo d\'arte contemporanea di Belgrado',
    },
    architectId: 'ivanka-raspopovic',
    // Wikipedia and every secondary source name this a joint work — "Ivan
    // Antić and Ivanka Raspopović" — with Antić conventionally named first
    // and neither treated as senior. architectId stays hers (this slice's
    // gender quota already clears its floor without leaning on this choice;
    // see Ruling 25 in progress.md — the choice must not correlate with the
    // quota either way), and Antić is credited honestly via coArchitects
    // rather than erased.
    coArchitects: ['ivan-antic'],
    location: { city: 'Belgrade', countryCode: 'RS', lat: 44.819444, lon: 20.442222 },
    inception: 1960,
    completed: 1965,
    demolished: null,
    typology: 'cultural',
    materials: ['concrete', 'stone'],
    structure: {
      en: 'A reinforced concrete frame divided into six square bays, each closed above by a faceted crystal of white marble panels whose four sloping faces meet a glazed roof lantern.',
      es: 'Una estructura de hormigón armado dividida en seis módulos cuadrados, cada uno cerrado en lo alto por un cristal facetado de placas de mármol blanco cuyas cuatro caras inclinadas se encuentran en un lucernario acristalado.',
      it: 'Un telaio in cemento armato diviso in sei campate quadrate, ciascuna chiusa in alto da un cristallo sfaccettato di lastre di marmo bianco le cui quattro falde inclinate si incontrano in un lucernario vetrato.',
    },
    program: {
      en: 'Built for the Belgrade Modern Gallery, founded in 1958, as the first purpose-designed museum of twentieth-century Yugoslav art.',
      es: 'Construido para la Galería Moderna de Belgrado, fundada en 1958, como primer museo concebido específicamente para el arte yugoslavo del siglo XX.',
      it: 'Costruito per la Galleria Moderna di Belgrado, fondata nel 1958, come primo museo concepito appositamente per l\'arte jugoslava del Novecento.',
    },
    heritage: 'national',
    currentUse: {
      en: 'Museum of Contemporary Art, reopened in October 2017 after a ten-year reconstruction; a protected cultural monument of Serbia.',
      es: 'Museo de Arte Contemporáneo, reabierto en octubre de 2017 tras diez años de reconstrucción; monumento cultural protegido de Serbia.',
      it: 'Museo d\'arte contemporanea, riaperto nell\'ottobre 2017 dopo dieci anni di ricostruzione; monumento culturale protetto della Serbia.',
    },
    detailRect: { x: 0.18, y: 0.12, w: 0.30, h: 0.32 },
    image: {
      commonsFile: 'File:Beograd - Muzej Savremene Umetnosti (MoCAB) (crop).jpg',
      photographer: 'Fred Romero',
      license: 'CC BY 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Beograd_-_Muzej_Savremene_Umetnosti_(MoCAB)_(crop).jpg',
      width: 1600,
      height: 861,
    },
    dossier: {
      en: 'Ivanka Raspopović and Ivan Antić were both working on factories and infrastructure when they took the museum commission in 1960, and the building keeps the discipline of that work. It stands in Ušće park near the meeting of the Sava and the Danube, on the flat ground of New Belgrade, and consists of six square cells arranged so that the galleries spiral upward around a central hall in half-level steps, giving a single continuous route with no dead ends. Each cell is capped by a faceted marble crystal whose four sloping faces run up to a glass lantern, so that all the daylight in the museum arrives from above. Belgrade nicknamed it the crystal at the confluence. The city gave the two architects its October Prize on 20 October 1965, the same day the doors opened. Raspopović was still advising on the reconstruction that closed the building from 2007 to 2017; she died two years before it reopened.',
      es: 'Ivanka Raspopović e Ivan Antić trabajaban ambos en fábricas e infraestructuras cuando aceptaron el encargo del museo en 1960, y el edificio conserva la disciplina de aquel oficio. Se alza en el parque de Ušće, cerca de la confluencia del Sava y el Danubio, sobre el llano de Nuevo Belgrado, y se compone de seis células cuadradas dispuestas de modo que las salas ascienden en espiral en torno a un vestíbulo central por medios niveles, con un recorrido continuo y sin fondos de saco. Cada célula se corona con un cristal facetado de mármol cuyas cuatro caras inclinadas suben hasta un lucernario, de manera que toda la luz natural del museo llega desde arriba. Belgrado lo apodó el cristal de la confluencia. La ciudad concedió a los dos arquitectos su Premio de Octubre el 20 de octubre de 1965, el mismo día de la apertura.',
      it: 'Ivanka Raspopović e Ivan Antić lavoravano entrambi su fabbriche e infrastrutture quando nel 1960 accettarono l\'incarico del museo, e l\'edificio conserva la disciplina di quel mestiere. Sorge nel parco di Ušće, presso la confluenza fra la Sava e il Danubio, sulla piana di Nuova Belgrado, ed è composto da sei celle quadrate disposte in modo che le sale salgano a spirale attorno a un atrio centrale per mezzi livelli, con un percorso continuo e senza vicoli ciechi. Ogni cella è coronata da un cristallo sfaccettato di marmo le cui quattro falde salgono fino a un lucernario, cosicché tutta la luce naturale del museo giunge dall\'alto. Belgrado lo soprannominò il cristallo alla confluenza. La città assegnò ai due architetti il Premio di Ottobre il 20 ottobre 1965, lo stesso giorno dell\'apertura.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q1290510', title: 'Museum of Contemporary Art, Belgrade (Q1290510)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Museum_of_Contemporary_Art,_Belgrade', title: 'Museum of Contemporary Art, Belgrade', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Ivanka_Raspopovi%C4%87', title: 'Ivanka Raspopović', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
  {
    id: 'manhattan-estate-wroclaw',
    wikidataId: 'Q9390467',
    name: {
      en: 'Manhattan Estate (Sedesowce), Wrocław',
      es: 'Conjunto Manhattan (Sedesowce), Breslavia',
      it: 'Complesso Manhattan (Sedesowce), Breslavia',
    },
    architectId: 'jadwiga-grabowska-hawrylak',
    location: { city: 'Wrocław', countryCode: 'PL', lat: 51.1103, lon: 17.054 },
    inception: 1970,
    completed: 1978,
    demolished: null,
    typology: 'housing',
    materials: ['concrete'],
    structure: {
      en: 'Six sixteen-storey reinforced concrete towers, each 55 metres high, standing with their commercial pavilions on a raised concrete deck carried by some 240 piles, with prefabricated rounded loggia frames hung across the facades.',
      es: 'Seis torres de hormigón armado de dieciséis plantas y 55 metros de altura que, junto a sus pabellones comerciales, se levantan sobre una plataforma de hormigón sostenida por unos 240 pilotes, con marcos prefabricados de logia redondeados colgados en las fachadas.',
      it: 'Sei torri in cemento armato di sedici piani e 55 metri di altezza che, insieme ai loro padiglioni commerciali, poggiano su una piattaforma in calcestruzzo retta da circa 240 pali, con telai prefabbricati di loggia arrotondati appesi lungo le facciate.',
    },
    program: {
      en: 'A mixed residential and commercial development on Grunwaldzki Square, begun for the city and completed by a housing cooperative.',
      es: 'Un conjunto mixto de vivienda y comercio en la plaza Grunwaldzki, iniciado por el ayuntamiento y terminado por una cooperativa de vivienda.',
      it: 'Un complesso misto residenziale e commerciale in piazza Grunwaldzki, avviato dal comune e completato da una cooperativa edilizia.',
    },
    heritage: null,
    currentUse: {
      en: 'Occupied flats and ground-floor shops; the concrete facades were repaired and painted white in a 2015 renovation.',
      es: 'Viviendas ocupadas y comercios en planta baja; las fachadas de hormigón se repararon y pintaron de blanco en una rehabilitación de 2015.',
      it: 'Alloggi occupati e negozi al piano terra; le facciate in calcestruzzo furono riparate e dipinte di bianco in un intervento del 2015.',
    },
    detailRect: { x: 0.54, y: 0.12, w: 0.32, h: 0.30 },
    image: {
      commonsFile: 'File:Wrocław - Zespół mieszkalno-usługowy przy pl. Grunwaldzkim (3).jpg',
      photographer: 'Fred Romero',
      license: 'CC BY 2.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Wroc%C5%82aw_-_Zesp%C3%B3%C5%82_mieszkalno-us%C5%82ugowy_przy_pl._Grunwaldzkim_(3).jpg',
      width: 1600,
      height: 1067,
    },
    dossier: {
      en: 'Grabowska-Hawrylak drew this between 1967 and 1970 as an attempt to import a warmer climate into a rebuilt German city: white towers, balconies framed by rounded concrete openings, climbing plants spilling from them, grass roofs on the shops below and communal roof terraces with washrooms on top of every block, meant to make up for the absence of any real recreation ground. Then the project was handed from the city to a housing cooperative, costs were cut, and it was built in grey concrete with the formwork marks left showing, the stair halls stripped of their windows to squeeze in more small rooms, and the plants never planted. Wrocław named it the Bunkers and the Toilet Bowls, after the shape of the loggia frames, and it entered the literature as brutalism by accident. The roof terraces survived the cuts. A 2015 renovation finally painted the towers the white she had specified forty-five years earlier.',
      es: 'Grabowska-Hawrylak lo dibujó entre 1967 y 1970 como un intento de importar un clima más benigno a una ciudad alemana reconstruida: torres blancas, balcones enmarcados por huecos redondeados de hormigón, plantas trepadoras desbordándolos, cubiertas de césped sobre los comercios y terrazas comunitarias con aseos encima de cada bloque, pensadas para suplir la falta de cualquier zona de recreo. Después el proyecto pasó del ayuntamiento a una cooperativa, se recortaron costes y se construyó en hormigón gris con las marcas del encofrado a la vista, las cajas de escalera despojadas de ventanas para encajar más habitaciones pequeñas y las plantas nunca plantadas. Breslavia lo llamó los Búnkeres y los Sedesowce —los inodoros—, por la forma de los marcos, y entró en la bibliografía como brutalismo por accidente. Una rehabilitación de 2015 pintó por fin las torres del blanco previsto cuarenta y cinco años antes.',
      it: 'Grabowska-Hawrylak lo disegnò fra il 1967 e il 1970 come un tentativo di importare un clima più mite in una città tedesca ricostruita: torri bianche, balconi incorniciati da aperture arrotondate in calcestruzzo, rampicanti che ne debordano, tetti erbosi sui negozi e terrazze comuni con servizi igienici sulla sommità di ogni blocco, pensate per compensare l\'assenza di qualsiasi spazio di svago. Poi il progetto passò dal comune a una cooperativa, i costi furono tagliati e si costruì in calcestruzzo grigio con i segni del cassero a vista, i vani scala privati delle finestre per ricavare più stanze piccole e le piante mai messe a dimora. Breslavia lo chiamò i Bunker e i Sedesowce — le tazze del water — per la forma dei telai, ed entrò nella letteratura come brutalismo per caso. Un intervento del 2015 dipinse infine le torri del bianco previsto quarantacinque anni prima.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q9390467', title: 'Manhattan estate, Wrocław (Q9390467)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Manhattan_Estate', title: 'Manhattan Estate', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Jadwiga_Grabowska-Hawrylak', title: 'Jadwiga Grabowska-Hawrylak', license: 'CC BY-SA 4.0' },
    ],
    tier: 'deep',
  },
  {
    id: 'sady-zoliborskie-estate-warsaw',
    wikidataId: 'Q107600895',
    name: {
      en: 'Sady Żoliborskie Housing Estate, Warsaw',
      es: 'Conjunto residencial Sady Żoliborskie, Varsovia',
      it: 'Quartiere residenziale Sady Żoliborskie, Varsavia',
    },
    architectId: 'halina-skibniewska',
    location: { city: 'Warsaw', countryCode: 'PL', lat: 52.266076, lon: 20.972486 },
    inception: 1959,
    completed: 1964,
    demolished: null,
    typology: 'housing',
    materials: ['brick', 'concrete'],
    structure: {
      en: 'Low four- and five-storey slabs on a reinforced concrete skeleton, with no load-bearing walls inside the flats, so that partitions could be rearranged by the occupants.',
      es: 'Bloques bajos de cuatro y cinco plantas sobre esqueleto de hormigón armado, sin muros de carga en el interior de las viviendas, de modo que los tabiques pudieran reordenarlos los propios vecinos.',
      it: 'Blocchi bassi di quattro e cinque piani su scheletro in cemento armato, privi di muri portanti all\'interno degli alloggi, così che i tramezzi potessero essere riorganizzati dagli abitanti.',
    },
    program: {
      en: 'Built for the Warsaw Housing Cooperative on the site of old orchards in Żoliborz, as twenty-four blocks grouped into three neighbourhood units.',
      es: 'Construido para la Cooperativa de Vivienda de Varsovia sobre antiguos huertos de Żoliborz, en veinticuatro bloques agrupados en tres unidades vecinales.',
      it: 'Costruito per la Cooperativa edilizia di Varsavia sul sedime di antichi frutteti a Żoliborz, in ventiquattro blocchi raggruppati in tre unità di vicinato.',
    },
    heritage: 'regional',
    currentUse: {
      en: 'Occupied housing, entered in the Warsaw municipal register of historic monuments; a public park was laid out on the remaining orchard land in 1992.',
      es: 'Viviendas ocupadas, inscritas en el registro municipal de monumentos de Varsovia; en 1992 se trazó un parque público en el terreno de huertos restante.',
      it: 'Alloggi occupati, iscritti nel registro comunale dei monumenti di Varsavia; nel 1992 fu realizzato un parco pubblico sull\'area dei frutteti residui.',
    },
    detailRect: { x: 0.18, y: 0.28, w: 0.28, h: 0.34 },
    image: {
      commonsFile: 'File:Sady Żoliborskie w Warszawie w latach 60.jpg',
      photographer: 'Zbyszko Siemaszko',
      license: 'PD',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sady_%C5%BBoliborskie_w_Warszawie_w_latach_60.jpg',
      width: 1600,
      height: 744,
    },
    dossier: {
      en: 'The site was an orchard, and Skibniewska\'s first decision was to keep as many of the fruit trees as the building programme would allow — a refusal of the clearance-and-grid method then standard in Polish estate planning. She grouped twenty-four low blocks into three neighbourhood units of seven or eight, each enclosing a planted courtyard, and set them so that no block stands in another\'s light. Behind the plain facades the flats sit on a concrete skeleton with no internal load-bearing walls, so tenants could move partitions; one eleven-storey block is topped by a terrace serving as an open clubroom, and its ground floor holds double-height glazed studios with gardens, built for artists. The first block, on Krasińskiego, was voted Mister Warszawy in 1961. Construction ran from 1959 to 1964. The later colonies of the same estate were built to standardised state catalogue types, and the difference between the two halves is still legible from the street.',
      es: 'El solar era un huerto, y la primera decisión de Skibniewska fue conservar cuantos frutales permitiera el programa: un rechazo del método de desmonte y retícula entonces habitual en el planeamiento polaco. Agrupó veinticuatro bloques bajos en tres unidades vecinales de siete u ocho, cada una en torno a un patio arbolado, y los dispuso de modo que ningún bloque quitara luz a otro. Tras las fachadas sobrias, las viviendas descansan en un esqueleto de hormigón sin muros de carga interiores, de manera que los vecinos podían mover los tabiques; un bloque de once plantas se remata con una terraza que sirve de sala común abierta, y en su planta baja hay estudios acristalados de doble altura con jardín, construidos para artistas. El primer bloque, en la calle Krasińskiego, fue elegido Mister Warszawy en 1961. Las obras duraron de 1959 a 1964.',
      it: 'Il lotto era un frutteto, e la prima decisione di Skibniewska fu conservare quanti più alberi il programma consentisse: un rifiuto del metodo di sbancamento e griglia allora corrente nella pianificazione polacca. Raggruppò ventiquattro blocchi bassi in tre unità di vicinato di sette o otto, ciascuna attorno a una corte alberata, e li dispose in modo che nessun blocco togliesse luce a un altro. Dietro le facciate sobrie gli alloggi poggiano su uno scheletro in calcestruzzo privo di muri portanti interni, così che gli inquilini potessero spostare i tramezzi; un blocco di undici piani è coronato da una terrazza che funge da sala comune aperta, e al piano terra ospita atelier vetrati a doppia altezza con giardino, costruiti per artisti. Il primo blocco, in via Krasińskiego, fu votato Mister Warszawy nel 1961. I lavori durarono dal 1959 al 1964.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q107600895', title: 'osiedle Sady Żoliborskie I (Q107600895)', license: null },
      { kind: 'wikipedia', url: 'https://pl.wikipedia.org/wiki/Sady_%C5%BBoliborskie', title: 'Sady Żoliborskie (Polish Wikipedia)', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Halina_Skibniewska', title: 'Halina Skibniewska', license: 'CC BY-SA 4.0' },
    ],
    tier: 'deep',
  },
  {
    id: 'skopje-telecommunications-centre',
    wikidataId: 'Q65296431',
    name: {
      en: 'Telecommunications Centre, Skopje',
      es: 'Centro de Telecomunicaciones de Skopie',
      it: 'Centro delle telecomunicazioni di Skopje',
    },
    architectId: 'janko-konstantinov',
    location: { city: 'Skopje', countryCode: 'MK', lat: 41.9975483, lon: 21.4299167 },
    inception: 1968,
    completed: 1981,
    demolished: null,
    typology: 'infrastructure',
    materials: ['concrete'],
    structure: {
      en: 'Board-marked and ribbed reinforced concrete throughout: cylindrical service and stair drums, circular window openings punched straight through the wall, and curved cantilevered fins carrying the roofs of the halls below.',
      es: 'Hormigón armado encofrado y acanalado en su totalidad: tambores cilíndricos de servicio y escaleras, huecos circulares horadados directamente en el muro y aletas curvas en voladizo que sostienen las cubiertas de las salas inferiores.',
      it: 'Cemento armato a casseratura e scanalato ovunque: tamburi cilindrici di servizio e di scala, aperture circolari forate direttamente nel muro e alette curve a sbalzo che reggono le coperture delle sale sottostanti.',
    },
    program: {
      en: 'Built for the Macedonian postal and telecommunications administration as part of the reconstruction of central Skopje after the 1963 earthquake, in the same complex as the main post office.',
      es: 'Construido para la administración macedonia de correos y telecomunicaciones dentro de la reconstrucción del centro de Skopie tras el terremoto de 1963, en el mismo complejo que la oficina central de correos.',
      it: 'Costruito per l\'amministrazione macedone delle poste e telecomunicazioni nell\'ambito della ricostruzione del centro di Skopje dopo il terremoto del 1963, nello stesso complesso dell\'ufficio postale centrale.',
    },
    heritage: null,
    currentUse: {
      en: 'Still in telecommunications and postal use; the adjoining post office counter hall has stood damaged since a fire destroyed its roof in 2013.',
      es: 'Sigue en uso postal y de telecomunicaciones; la sala de ventanillas de correos contigua permanece dañada desde que un incendio destruyó su cubierta en 2013.',
      it: 'Tuttora in uso postale e per le telecomunicazioni; l\'attigua sala sportelli delle poste resta danneggiata da quando un incendio ne distrusse il tetto nel 2013.',
    },
    detailRect: { x: 0.40, y: 0.46, w: 0.30, h: 0.30 },
    image: {
      commonsFile: 'File:Pošta vo Skopje, Macedonia.jpg',
      photographer: 'yeowatzup',
      license: 'CC BY 2.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Po%C5%A1ta_vo_Skopje%2C_Macedonia.jpg',
      width: 1600,
      height: 1067,
    },
    dossier: {
      en: 'The earthquake of 26 July 1963 destroyed most of central Skopje, and the reconstruction that followed was run as an international project, with a United Nations competition, a masterplan by Kenzō Tange and buildings by architects drawn back from abroad. Konstantinov was one of them: he had spent the previous decade in Copenhagen, in Finland with Alvar Aalto, and in Victor Gruen\'s office in Los Angeles. What he built on the north bank of the Vardar over the following two decades is the most sculptural thing in the new city. Cylindrical drums of board-marked concrete carry vertical ribs like fluting; walls are punched with plain circles instead of windows; curved fins spread from the centre of the adjoining post office hall like petals. The complex went up in stages from the late 1960s to 1989. MoMA showed a model of the Telecommunications Centre in 2018 in its survey of Yugoslav architecture.',
      es: 'El terremoto del 26 de julio de 1963 destruyó casi todo el centro de Skopie, y la reconstrucción que siguió se gestionó como un proyecto internacional, con un concurso de Naciones Unidas, un plan maestro de Kenzō Tange y edificios de arquitectos repatriados. Konstantinov fue uno de ellos: había pasado la década anterior en Copenhague, en Finlandia con Alvar Aalto y en el estudio de Victor Gruen en Los Ángeles. Lo que levantó en la orilla norte del Vardar durante los veinte años siguientes es lo más escultórico de la ciudad nueva. Tambores cilíndricos de hormigón encofrado llevan nervios verticales como estrías; los muros se horadan con círculos limpios en lugar de ventanas; aletas curvas se abren desde el centro de la sala de correos contigua como pétalos. El conjunto se erigió por fases desde finales de los sesenta hasta 1989.',
      it: 'Il terremoto del 26 luglio 1963 distrusse quasi tutto il centro di Skopje, e la ricostruzione che seguì fu condotta come un progetto internazionale, con un concorso delle Nazioni Unite, un piano regolatore di Kenzō Tange ed edifici di architetti richiamati dall\'estero. Konstantinov fu uno di loro: aveva passato il decennio precedente a Copenaghen, in Finlandia con Alvar Aalto e nello studio di Victor Gruen a Los Angeles. Ciò che eresse sulla riva nord del Vardar nei vent\'anni successivi è la cosa più scultorea della città nuova. Tamburi cilindrici di calcestruzzo casserato portano costole verticali come scanalature; le murature sono forate da cerchi netti invece che da finestre; alette curve si aprono dal centro dell\'attigua sala postale come petali. Il complesso fu eretto per fasi dalla fine degli anni Sessanta al 1989.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q65296431', title: 'Telecom building, Skopje (Q65296431)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Janko_Konstantinov', title: 'Janko Konstantinov', license: 'CC BY-SA 4.0' },
      { kind: 'institution', url: 'https://www.moma.org/collection/works/205691', title: 'Janko Konstantinov. Telecommunications Center, Skopje, Macedonia. 1968–1981 — MoMA', license: null },
    ],
    tier: 'canon',
  },
  {
    id: 'museum-of-contemporary-art-zagreb',
    wikidataId: 'Q3503103',
    name: {
      en: 'Museum of Contemporary Art, Zagreb',
      es: 'Museo de Arte Contemporáneo de Zagreb',
      it: 'Museo d\'arte contemporanea di Zagabria',
    },
    architectId: 'igor-franic',
    location: { city: 'Zagreb', countryCode: 'HR', lat: 45.7788131, lon: 15.9818579 },
    inception: 2003,
    completed: 2009,
    demolished: null,
    typology: 'cultural',
    materials: ['steel-and-glass', 'concrete'],
    structure: {
      en: 'A long horizontal box of glass and metal panels lifted clear of the ground on slender concrete columns, so that the whole ground plane passes beneath it as covered public space.',
      es: 'Una caja horizontal alargada de vidrio y paneles metálicos elevada del suelo sobre esbeltos pilares de hormigón, de modo que todo el plano del terreno discurre bajo ella como espacio público cubierto.',
      it: 'Una lunga scatola orizzontale di vetro e pannelli metallici sollevata da terra su esili pilastri in calcestruzzo, così che l\'intero piano di campagna passa sotto di essa come spazio pubblico coperto.',
    },
    program: {
      en: 'The first purpose-built home for a collection begun as the City Gallery of Contemporary Art in 1954 and until then housed in a palace in Zagreb\'s upper town.',
      es: 'La primera sede de nueva planta para una colección iniciada como Galería Municipal de Arte Contemporáneo en 1954 y alojada hasta entonces en un palacio de la ciudad alta de Zagreb.',
      it: 'La prima sede appositamente costruita per una collezione avviata come Galleria civica d\'arte contemporanea nel 1954 e fino ad allora ospitata in un palazzo della città alta di Zagabria.',
    },
    heritage: 'none',
    currentUse: {
      en: 'Croatia\'s national museum of contemporary art, with about 14,600 square metres of floor area, a library, a multimedia hall and a bookshop.',
      es: 'Museo nacional croata de arte contemporáneo, con unos 14.600 metros cuadrados construidos, biblioteca, sala multimedia y librería.',
      it: 'Museo nazionale croato d\'arte contemporanea, con circa 14.600 metri quadrati di superficie, biblioteca, sala multimediale e libreria.',
    },
    detailRect: { x: 0.16, y: 0.20, w: 0.30, h: 0.30 },
    image: {
      commonsFile: 'File:Msu-museum-contemporary-art-zagreb-2.jpg',
      photographer: 'Myriam Thyes',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Msu-museum-contemporary-art-zagreb-2.jpg',
      width: 1600,
      height: 1033,
    },
    dossier: {
      en: 'For fifty-five years Zagreb\'s contemporary collection had no permanent display, because the Kulmer Palace in the upper town could not hold one. In 1998 the city and the Ministry of Culture decided to build across the river in Novi Zagreb, on the corner of Dubrovnik and Većeslav Holjevac avenues, and Igor Franić won the competition against eighty-four other entries. The building he delivered is deliberately undramatic from outside: a long glazed and metal-clad volume held above the ground on thin columns, leaving the site open underneath so that the museum does not close off the block. The cornerstone went down in November 2003 and the museum opened on 11 December 2009 after six years of delays, at more than twice the budgeted cost. Of its 14,600 square metres, 3,500 are given to the permanent collection and about 1,500 to temporary exhibitions, the remainder taken up by a library, a multimedia hall, a bookshop and the circulation threading them together.',
      es: 'Durante cincuenta y cinco años la colección contemporánea de Zagreb careció de exposición permanente, porque el palacio Kulmer de la ciudad alta no podía albergarla. En 1998 el ayuntamiento y el Ministerio de Cultura decidieron construir al otro lado del río, en Novi Zagreb, en la esquina de las avenidas Dubrovnik y Većeslav Holjevac, e Igor Franić ganó el concurso frente a otras ochenta y cuatro propuestas. El edificio que entregó es deliberadamente poco espectacular desde fuera: un volumen alargado de vidrio y chapa sostenido sobre pilares delgados, que deja libre el suelo para que el museo no cierre la manzana. La primera piedra se puso en noviembre de 2003 y el museo abrió el 11 de diciembre de 2009, tras seis años de retrasos y con un coste que más que duplicó lo presupuestado. De sus 14.600 metros cuadrados, 3.500 se destinan a la colección permanente y unos 1.500 a exposiciones temporales; el resto lo ocupan una biblioteca, una sala multimedia, una librería y los recorridos que los enhebran.',
      it: 'Per cinquantacinque anni la collezione contemporanea di Zagabria non ebbe un\'esposizione permanente, perché il palazzo Kulmer nella città alta non poteva ospitarla. Nel 1998 il comune e il Ministero della Cultura decisero di costruire oltre il fiume, a Novi Zagreb, all\'angolo fra i viali Dubrovnik e Većeslav Holjevac, e Igor Franić vinse il concorso contro altre ottantaquattro proposte. L\'edificio che consegnò è volutamente poco spettacolare dall\'esterno: un volume allungato di vetro e lamiera sostenuto da pilastri sottili, che lascia libero il suolo perché il museo non chiuda l\'isolato. La prima pietra fu posata nel novembre 2003 e il museo aprì l\'11 dicembre 2009, dopo sei anni di ritardi e con un costo più che raddoppiato rispetto al preventivo. Dei suoi 14.600 metri quadrati, 3.500 sono destinati alla collezione permanente e circa 1.500 alle mostre temporanee; il resto è occupato da una biblioteca, una sala multimediale, una libreria e i percorsi che li collegano.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q3503103', title: 'Museum of Contemporary Art, Zagreb (Q3503103)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Museum_of_Contemporary_Art,_Zagreb', title: 'Museum of Contemporary Art, Zagreb', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Igor_Frani%C4%87', title: 'Igor Franić', license: 'CC BY-SA 4.0' },
    ],
    tier: 'deep',
  },
  {
    id: 'zlin-congress-centre',
    wikidataId: 'Q28758229',
    name: {
      en: 'Congress Centre, Zlín',
      es: 'Centro de Congresos de Zlín',
      it: 'Centro congressi di Zlín',
    },
    architectId: 'eva-jiricna',
    location: { city: 'Zlín', countryCode: 'CZ', lat: 49.2231514, lon: 17.6643719 },
    inception: 2007,
    completed: 2010,
    demolished: null,
    typology: 'cultural',
    materials: ['steel-and-glass', 'concrete'],
    structure: {
      en: 'A concrete drum housing the auditorium, ringed by a foyer wall of glass block and steel, and covered by a 60-metre steel roof weighing some 90 tonnes that spans the hall without intermediate support.',
      es: 'Un tambor de hormigón que aloja el auditorio, ceñido por un muro de vestíbulo de pavés y acero y cubierto por una techumbre metálica de 60 metros y unas 90 toneladas que salva la sala sin apoyos intermedios.',
      it: 'Un tamburo in calcestruzzo che ospita l\'auditorio, cinto da una parete di foyer in vetrocemento e acciaio e coperto da un tetto in acciaio di 60 metri e circa 90 tonnellate che scavalca la sala senza appoggi intermedi.',
    },
    program: {
      en: 'A concert and conference hall for the city of Zlín, forming one complex with the university centre of Tomas Bata University completed alongside it.',
      es: 'Sala de conciertos y congresos para la ciudad de Zlín, que forma un único complejo con el centro universitario de la Universidad Tomáš Baťa terminado junto a ella.',
      it: 'Sala per concerti e congressi per la città di Zlín, che forma un unico complesso con il centro universitario dell\'Università Tomáš Baťa completato accanto ad essa.',
    },
    heritage: 'none',
    currentUse: {
      en: 'Home of the Bohuslav Martinů Philharmonic and the city\'s conference venue; its two halls are named after Eva Jiřičná and the former mayor Irena Ondrová.',
      es: 'Sede de la Filarmónica Bohuslav Martinů y recinto de congresos de la ciudad; sus dos salas llevan los nombres de Eva Jiřičná y de la exalcaldesa Irena Ondrová.',
      it: 'Sede della Filarmonica Bohuslav Martinů e struttura congressuale della città; le sue due sale portano i nomi di Eva Jiřičná e dell\'ex sindaca Irena Ondrová.',
    },
    detailRect: { x: 0.42, y: 0.24, w: 0.30, h: 0.30 },
    image: {
      commonsFile: 'File:Zlín, Kongresové centrum, od severovýchodu.jpg',
      photographer: 'ŠJů',
      license: 'CC BY 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Zl%C3%ADn%2C_Kongresov%C3%A9_centrum%2C_od_severov%C3%BDchodu.jpg',
      width: 1600,
      height: 1200,
    },
    dossier: {
      en: 'Zlín was built almost from nothing in the 1920s and 1930s as the company town of the Baťa shoe works, on a strict grid of red brick and reinforced concrete frames. Eva Jiřičná was born there in 1939 and left as a small child; the congress and university centre is her return, seventy years later, to the town her practice partners still call the model. The hall sits in a plain concrete drum, wrapped by a foyer whose outer wall is glass block held in a steel cage, so that the building glows rather than displays itself after dark. Over it sits a steel roof sixty metres across and about ninety tonnes in weight, spanning the auditorium in one piece; she described its structure as taken from the silica shell of a diatom. The university centre alongside was finished in 2008 and the two opened together in 2010.',
      es: 'Zlín se construyó casi de la nada en los años veinte y treinta como ciudad-fábrica de la zapatera Baťa, sobre una retícula estricta de ladrillo rojo y pórticos de hormigón armado. Eva Jiřičná nació allí en 1939 y se marchó siendo muy niña; el centro de congresos y universitario es su regreso, setenta años después, a la ciudad que sus socios siguen llamando el modelo. La sala se aloja en un tambor liso de hormigón, envuelto por un vestíbulo cuyo muro exterior es pavés sostenido en una jaula de acero, de modo que al anochecer el edificio irradia luz en vez de exhibirse. Encima descansa una cubierta de acero de sesenta metros de luz y unas noventa toneladas, que salva el auditorio de una sola pieza; ella describió su estructura como tomada del caparazón silíceo de una diatomea. Ambos edificios se inauguraron en 2010.',
      it: 'Zlín fu costruita quasi dal nulla negli anni Venti e Trenta come città-fabbrica del calzaturificio Baťa, su una griglia rigorosa di mattoni rossi e telai in cemento armato. Eva Jiřičná vi nacque nel 1939 e se ne andò ancora bambina; il centro congressi e universitario è il suo ritorno, settant\'anni dopo, alla città che i suoi soci chiamano ancora il modello. La sala è alloggiata in un tamburo liscio di calcestruzzo, avvolto da un foyer la cui parete esterna è in vetrocemento retto da una gabbia d\'acciaio, così che al buio l\'edificio irradia luce anziché esibirsi. Sopra poggia una copertura in acciaio di sessanta metri di luce e circa novanta tonnellate, che scavalca l\'auditorio in un pezzo solo; ne descrisse la struttura come ripresa dal guscio siliceo di una diatomea. I due edifici furono inaugurati insieme nel 2010.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q28758229', title: 'Congress Center Zlín (Q28758229)', license: null },
      { kind: 'wikipedia', url: 'https://cs.wikipedia.org/wiki/Kongresov%C3%A9_centrum_Zl%C3%ADn', title: 'Kongresové centrum Zlín (Czech Wikipedia)', license: 'CC BY-SA 4.0' },
      { kind: 'institution', url: 'https://www.zlin.eu/tiskove-zpravy/saly-kongresoveho-centra-nesou-jmena-architektky-jiricne-a-byvale-primatorky-ondrove-65e7', title: 'Sály Kongresového centra nesou jména architektky Jiřičné a bývalé primátorky Ondrové — City of Zlín', license: null },
    ],
    tier: 'deep',
  },
  {
    id: 'palace-of-culture-and-science-warsaw',
    wikidataId: 'Q167566',
    name: {
      en: 'Palace of Culture and Science, Warsaw',
      es: 'Palacio de la Cultura y la Ciencia de Varsovia',
      it: 'Palazzo della Cultura e della Scienza di Varsavia',
    },
    architectId: 'lev-rudnev',
    location: { city: 'Warsaw', countryCode: 'PL', lat: 52.231667, lon: 21.006389 },
    inception: 1952,
    completed: 1955,
    demolished: null,
    typology: 'tower',
    materials: ['steel-and-glass', 'stone', 'concrete'],
    structure: {
      en: 'A riveted steel skeleton of 42 floors rising in tiered set-backs to a 237-metre spire, clad in sandstone-toned ceramic tile made in the Urals and dressed at the base and in its reliefs with limestone, sandstone, granite and marble.',
      es: 'Un esqueleto de acero remachado de 42 plantas que asciende en retranqueos escalonados hasta una aguja de 237 metros, revestido de cerámica sinterizada color arenisca fabricada en los Urales y rematado en la base y en los relieves con caliza, arenisca, granito y mármol.',
      it: 'Uno scheletro d\'acciaio chiodato di 42 piani che sale a gradoni fino a una guglia di 237 metri, rivestito di ceramica sinterizzata color arenaria prodotta negli Urali e concluso alla base e nei rilievi con calcare, arenaria, granito e marmo.',
    },
    program: {
      en: 'Built at Soviet initiative as a declared "gift" to the Polish people, combining theatres, museums, a cinema, a swimming pool and offices under one roof.',
      es: 'Construido por iniciativa soviética como un declarado «regalo» al pueblo polaco, combinando teatros, museos, un cine, una piscina y oficinas bajo un mismo techo.',
      it: 'Costruito per iniziativa sovietica come dichiarato «dono» al popolo polacco, riunendo teatri, musei, un cinema, una piscina e uffici sotto un unico tetto.',
    },
    heritage: 'national',
    currentUse: {
      en: 'Still Warsaw\'s tallest occupied building, combining cultural venues, a public viewing terrace, offices and the city council\'s chambers; listed on Poland\'s Registry of Objects of Cultural Heritage since 2007.',
      es: 'Sigue siendo el edificio ocupado más alto de Varsovia, con salas culturales, una terraza mirador pública, oficinas y las salas del ayuntamiento; inscrito en el Registro polaco de Objetos del Patrimonio Cultural desde 2007.',
      it: 'Resta l\'edificio occupato più alto di Varsavia, con sale culturali, una terrazza panoramica pubblica, uffici e le sale del consiglio comunale; iscritto nel Registro polacco degli Oggetti del Patrimonio Culturale dal 2007.',
    },
    detailRect: { x: 0.36, y: 0.44, w: 0.28, h: 0.30 },
    image: {
      // Exterior daytime street-level view from Roman Dmowski's roundabout,
      // showing the tiered set-back profile of the tower. Rudnev has been
      // dead since 1956 (70 years, borderline the interior/exterior rule),
      // so an exterior was used regardless; the rect below sits on the
      // tiered stone-and-tile facade well below the spire, away from sky.
      commonsFile: 'File:Pałac Kultury i Nauki 2019.jpg',
      photographer: 'Adrian Grycuk (Boston9)',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pa%C5%82ac_Kultury_i_Nauki_2019.jpg',
      width: 1033,
      height: 1600,
    },
    dossier: {
      en: 'Stalin offered the tower before Poland asked for one: in 1951 the Soviet Union proposed a "gift of the Soviet people to the Polish nation," and Lev Rudnev, chief architect of Moscow State University\'s own tower, was sent to design it. Ground broke in May 1952, raised by an estimated 3,500 to 5,000 imported Soviet workers alongside some 4,000 Polish ones, on a site cleared in the city centre. Rudnev set a steel skeleton over 42 floors, clad in sandstone-toned ceramic tile made in the Urals and dressed at the base and in its reliefs with limestone, sandstone, granite and marble, its silhouette a tiered form climbing through set-backs to a spire reaching 237 metres — modelled on the Manhattan skyscrapers he had studied, following Stalin\'s instruction that the gift still read as built "in the Polish style." It opened on 22 July 1955, the state\'s national holiday, dedicated to Stalin by name on its colonnade and in its lobby; the dedication was revoked during the de-Stalinisation that followed 1956. Warsaw inherited a landmark it could neither demolish nor disown, and gradually filled its floors with theatres, museums, a cinema, a swimming pool, offices and the city council chamber.',
      es: 'Stalin ofreció la torre antes de que Polonia la pidiera: en 1951 la Unión Soviética propuso un «regalo del pueblo soviético a la nación polaca», y envió a Lev Rúdnev, arquitecto jefe de la torre de la Universidad Estatal de Moscú, para proyectarlo. Las obras comenzaron en mayo de 1952, levantadas por entre 3.500 y 5.000 obreros soviéticos desplazados junto a unos 4.000 polacos, en un solar despejado en pleno centro. Rúdnev dispuso un esqueleto de acero de 42 plantas, revestido de cerámica sinterizada color arenisca fabricada en los Urales y rematado en la base y en los relieves con caliza, arenisca, granito y mármol; su silueta escalonada asciende hasta una aguja de 237 metros, inspirada en los rascacielos de Manhattan que Rúdnev había estudiado, siguiendo la instrucción de Stalin de que el regalo se leyera igualmente construido «al estilo polaco». Se inauguró el 22 de julio de 1955, fiesta nacional del régimen, dedicado a Stalin en la columnata y el vestíbulo; la dedicatoria se revocó durante la desestalinización posterior a 1956. Varsovia heredó un hito que no podía ni derribar ni desentenderse de él, y con el tiempo llenó sus plantas de teatros, museos, cine, piscina, oficinas y la sala del ayuntamiento.',
      it: 'Stalin offrì la torre prima ancora che la Polonia la chiedesse: nel 1951 l\'Unione Sovietica propose un «dono del popolo sovietico alla nazione polacca», e inviò Lev Rudnev, architetto capo della torre dell\'Università statale di Mosca, per progettarlo. I lavori iniziarono nel maggio 1952, condotti da una stima di 3.500-5.000 operai sovietici trasferiti insieme a circa 4.000 polacchi, su un\'area sgombrata nel centro cittadino. Rudnev impostò uno scheletro d\'acciaio di 42 piani, rivestito di ceramica sinterizzata color arenaria prodotta negli Urali e concluso alla base e nei rilievi con calcare, arenaria, granito e marmo; la sua sagoma a gradoni sale fino a una guglia di 237 metri, modellata sui grattacieli di Manhattan che Rudnev aveva studiato, seguendo l\'istruzione di Stalin secondo cui il dono dovesse comunque leggersi costruito «in stile polacco». Fu inaugurato il 22 luglio 1955, festa nazionale del regime, dedicato a Stalin per nome sul colonnato e nell\'atrio; la dedica fu revocata durante la destalinizzazione seguita al 1956. Varsavia ereditò un monumento che non poteva né demolire né disconoscere, e ne riempì gradualmente i piani con teatri, musei, un cinema, una piscina, uffici e la sala del consiglio comunale.',
    },
    context: {
      body: {
      en: 'The palace\'s dedication to Stalin, inscribed on its colonnade and in its lobby at the 1955 opening, made explicit what its design already argued: that Warsaw\'s skyline now answered to Moscow. The tower arrived as an unrequested "gift," built at Soviet initiative rather than Polish request, and was widely resented in Poland as a monument to Soviet political domination even while its theatres, museums, cinema and public halls were put to genuine civic use from the start. The dedication to Stalin was formally revoked during the de-Stalinisation that followed 1956, his name removed from the colonnade, lobby and a sculptural group. The building\'s fate has stayed politically contested since: demolition has been proposed by nationalist and anti-communist voices at various points after Poland\'s 1989 transition, and rejected each time on the grounds that the building, whatever the circumstances of its construction, is now simply part of Warsaw\'s skyline and everyday civic life.',
      es: 'La dedicatoria a Stalin, inscrita en la columnata y en el vestíbulo en la inauguración de 1955, hacía explícito lo que el propio diseño ya argumentaba: que el perfil de Varsovia respondía ahora a Moscú. La torre llegó como un «regalo» no solicitado, construido por iniciativa soviética y no a petición polaca, y fue ampliamente resentido en Polonia como un monumento al dominio político soviético, incluso mientras sus teatros, museos, cine y salas públicas se destinaban desde el principio a un uso cívico real. La dedicatoria a Stalin se revocó formalmente durante la desestalinización posterior a 1956, y su nombre se retiró de la columnata, el vestíbulo y un grupo escultórico. El destino del edificio ha seguido siendo políticamente disputado desde entonces: voces nacionalistas y anticomunistas han propuesto su demolición en distintos momentos tras la transición polaca de 1989, y en cada ocasión se ha rechazado alegando que el edificio, cualesquiera que fueran las circunstancias de su construcción, forma ya simplemente parte del perfil de Varsovia y de su vida cívica cotidiana.',
      it: 'La dedica a Stalin, incisa sul colonnato e nell\'atrio all\'inaugurazione del 1955, rendeva esplicito ciò che il progetto stesso già affermava: che lo skyline di Varsavia rispondeva ora a Mosca. La torre arrivò come un «dono» non richiesto, costruito per iniziativa sovietica e non su richiesta polacca, e fu ampiamente risentito in Polonia come un monumento al dominio politico sovietico, anche se i suoi teatri, musei, il cinema e le sale pubbliche furono destinati fin dall\'inizio a un uso civico reale. La dedica a Stalin fu revocata formalmente durante la destalinizzazione seguita al 1956, e il suo nome fu rimosso dal colonnato, dall\'atrio e da un gruppo scultoreo. Il destino dell\'edificio è rimasto da allora politicamente controverso: voci nazionaliste e anticomuniste ne hanno proposto la demolizione in vari momenti dopo la transizione polacca del 1989, e ogni volta la proposta è stata respinta sostenendo che l\'edificio, quali che fossero le circostanze della sua costruzione, fa ormai semplicemente parte dello skyline di Varsavia e della sua vita civica quotidiana.',
    },
      sources: [
        { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Palace_of_Culture_and_Science', title: 'Palace of Culture and Science', license: 'CC BY-SA 4.0' },
      ],
    },
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q167566', title: 'Palace of Culture and Science (Q167566)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Palace_of_Culture_and_Science', title: 'Palace of Culture and Science', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://pl.wikipedia.org/wiki/Pa%C5%82ac_Kultury_i_Nauki', title: 'Pałac Kultury i Nauki (Polish Wikipedia)', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
  {
    id: 'spodek-katowice',
    wikidataId: 'Q1051683',
    name: {
      en: 'Spodek, Katowice',
      es: 'Spodek de Katowice',
      it: 'Spodek di Katowice',
    },
    architectId: 'maciej-gintowt',
    coArchitects: ['maciej-krasinski'],
    location: { city: 'Katowice', countryCode: 'PL', lat: 50.266111, lon: 19.025278 },
    inception: 1964,
    completed: 1971,
    demolished: null,
    typology: 'cultural',
    materials: ['concrete', 'steel-and-glass'],
    structure: {
      en: 'A reinforced-concrete drum on forty flexible foundations, roofed by a tensioned saucer of 120 radial steel cables anchored to a central ring, engineered with Wacław Zalewski to flex under mining tremors rather than resist them rigidly.',
      es: 'Un tambor de hormigón armado sobre cuarenta cimentaciones flexibles, cubierto por un platillo tensado de 120 cables de acero radiales anclados a un anillo central, calculado con Wacław Zalewski para flexionar ante las sacudidas mineras en vez de resistirlas rígidamente.',
      it: 'Un tamburo in cemento armato su quaranta fondazioni flessibili, coperto da un disco teso di 120 cavi d\'acciaio radiali ancorati a un anello centrale, calcolato con Wacław Zalewski per flettersi sotto le scosse minerarie anziché resistervi rigidamente.',
    },
    program: {
      en: 'Built for the city of Katowice, after a closed 1959 competition, as a multipurpose arena for sport, concerts and public assembly able to withstand coal-mining subsidence.',
      es: 'Construido para la ciudad de Katowice, tras un concurso restringido de 1959, como pabellón multiusos para deporte, conciertos y actos públicos capaz de resistir la subsidencia minera.',
      it: 'Costruito per la città di Katowice, dopo un concorso chiuso del 1959, come palazzetto polifunzionale per sport, concerti e assemblee pubbliche capace di resistere alla subsidenza mineraria.',
    },
    heritage: 'national',
    currentUse: {
      en: 'Still an active arena seating over 10,000, renovated in 2011 and joined by an adjoining conference centre in 2015; listed on Poland\'s register of immovable cultural monuments.',
      es: 'Sigue siendo un pabellón en activo con aforo para más de 10.000 personas, renovado en 2011 y ampliado con un centro de congresos anexo en 2015; inscrito en el registro polaco de monumentos culturales inmuebles.',
      it: 'Resta un palazzetto attivo con posti per oltre 10.000 persone, rinnovato nel 2011 e affiancato da un centro congressi annesso nel 2015; iscritto nel registro polacco dei monumenti culturali immobili.',
    },
    detailRect: { x: 0.30, y: 0.32, w: 0.34, h: 0.30 },
    image: {
      // Close exterior view of the dome's cable roof and upper facade,
      // shot 2024-08-08 during Wikimania Katowice. Both architects are long
      // dead (Gintowt 2003, Krasiński 1999) but this is an exterior of a
      // building in a full-FoP jurisdiction regardless. Rect below sits on
      // the visible cable/rib junctions of the roof, not the sky above it.
      commonsFile: 'File:Exterior of Spodek, 20240808.jpg',
      photographer: 'Abzeronow',
      license: 'CC BY 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Exterior_of_Spodek,_20240808.jpg',
      width: 1600,
      height: 1200,
    },
    dossier: {
      en: 'Katowice\'s coal seams run directly beneath the city centre, and any building set there has to survive the tremors of mining subsidence. A closed 1959 competition for a hall to replace an earlier venue asked for exactly that, and the entry from architects Maciej Gintowt and Maciej Krasiński, developed with structural engineer Wacław Zalewski, answered with a shape rather than a cage: an inverted concrete cone standing on forty flexible supports, roofed by a saucer of 120 radial steel cables strung from a central ring and anchored to a reinforced concrete rim, so the whole structure can flex under a shock instead of resisting it rigidly. It was among the first tensegrity roofs attempted anywhere at this span. Ground was broken in 1964; the hall opened on 9 May 1971, seating over ten thousand under a dome unbroken by any internal column. Katowice nicknamed it Spodek, the saucer, well before it was finished, and the name displaced whatever the commission had originally intended to call it.',
      es: 'Las vetas de carbón de Katowice corren justo bajo el centro de la ciudad, y cualquier edificio que se alce allí debe resistir las sacudidas de la subsidencia minera. Un concurso restringido convocado en 1959 para un pabellón que sustituyera a otro anterior pedía exactamente eso, y la propuesta de los arquitectos Maciej Gintowt y Maciej Krasiński, desarrollada con el ingeniero de estructuras Wacław Zalewski, respondió con una forma en vez de una jaula: un cono invertido de hormigón apoyado en cuarenta soportes flexibles, cubierto por un platillo de 120 cables de acero radiales tensados desde un anillo central y anclados a un borde de hormigón armado, de modo que toda la estructura puede flexionar ante una sacudida en lugar de resistirla rígidamente. Fue una de las primeras cubiertas de tensegridad ensayadas en el mundo a esta luz. Las obras comenzaron en 1964; el pabellón abrió el 9 de mayo de 1971, con aforo para más de diez mil personas bajo una cúpula sin una sola columna interior. Katowice lo apodó Spodek, el platillo, mucho antes de que se terminara, y el apodo desplazó cualquier nombre que el encargo hubiera previsto originalmente.',
      it: 'I filoni di carbone di Katowice corrono proprio sotto il centro cittadino, e ogni edificio costruito lì deve resistere alle scosse della subsidenza mineraria. Un concorso chiuso bandito nel 1959 per una sala che sostituisse una precedente chiedeva esattamente questo, e la proposta degli architetti Maciej Gintowt e Maciej Krasiński, sviluppata con l\'ingegnere strutturale Wacław Zalewski, rispose con una forma anziché con una gabbia: un cono di cemento rovesciato su quaranta appoggi flessibili, coperto da un disco di 120 cavi d\'acciaio radiali tesi da un anello centrale e ancorati a un bordo in cemento armato, così che l\'intera struttura possa flettersi sotto una scossa anziché resisterle rigidamente. Fu una delle prime coperture tensegrali tentate al mondo a questa luce. I lavori iniziarono nel 1964; la sala aprì il 9 maggio 1971, con posti per oltre diecimila persone sotto una cupola priva di qualsiasi colonna interna. Katowice la soprannominò Spodek, il piattino, molto prima che fosse terminata, e il soprannome soppiantò qualunque nome l\'incarico avesse originariamente previsto.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q1051683', title: 'Spodek (Q1051683)', license: null },
      { kind: 'wikipedia', url: 'https://pl.wikipedia.org/wiki/Spodek_(hala_widowiskowa)', title: 'Spodek (hala widowiskowa) (Polish Wikipedia)', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
  {
    id: 'kotva-department-store-prague',
    wikidataId: 'Q11744412',
    name: {
      en: 'Kotva Department Store, Prague',
      es: 'Grandes almacenes Kotva de Praga',
      it: 'Grande magazzino Kotva di Praga',
    },
    architectId: 'vera-machoninova',
    coArchitects: ['vladimir-machonin'],
    location: { city: 'Prague', countryCode: 'CZ', lat: 50.088889, lon: 14.427222 },
    inception: 1970,
    completed: 1975,
    demolished: null,
    typology: 'commercial',
    materials: ['concrete', 'steel-and-glass'],
    structure: {
      en: 'A reinforced-concrete frame carrying interlocked hexagonal bays, faceted at every module edge and hung with pressed aluminium panels and dark glazing, five storeys above ground over a comparable depth of parking and services below.',
      es: 'Una estructura de hormigón armado que soporta módulos hexagonales entrelazados, facetada en cada arista y revestida de paneles de aluminio prensado y vidrio oscuro, con cinco plantas sobre rasante y una profundidad similar de aparcamiento y servicios bajo ella.',
      it: 'Una struttura in cemento armato che regge campate esagonali incastrate, sfaccettata a ogni spigolo e rivestita di pannelli di alluminio pressato e vetrate scure, con cinque piani fuori terra e una profondità analoga di parcheggio e servizi sottoterra.',
    },
    program: {
      en: 'Built by the Czechoslovak state, with the Swedish firm SIAB as contractor, as its flagship department store, designed to serve some 75,000 customers a day.',
      es: 'Construido por el Estado checoslovaco, con la contratista sueca SIAB, como sus grandes almacenes insignia, proyectados para atender a unos 75.000 clientes al día.',
      it: 'Costruito dallo Stato cecoslovacco, con l\'impresa svedese SIAB come appaltatrice, come suo grande magazzino di punta, progettato per servire circa 75.000 clienti al giorno.',
    },
    heritage: 'national',
    currentUse: {
      en: 'Still trading as a department store on its lower floors while its upper floors are converted to offices; a protected Czech cultural monument since 2019.',
      es: 'Sigue funcionando como grandes almacenes en sus plantas inferiores mientras las superiores se reconvierten en oficinas; monumento cultural checo protegido desde 2019.',
      it: 'Continua a funzionare come grande magazzino ai piani inferiori mentre quelli superiori vengono convertiti in uffici; monumento culturale ceco protetto dal 2019.',
    },
    detailRect: { x: 0.32, y: 0.30, w: 0.32, h: 0.30 },
    image: {
      // Exterior street view of the hexagonal-module facade, taken 2013.
      // Machoninová is living (b. 1928) and Machonin died 1990 (36 years,
      // well inside the 70-year window), so exterior-only applies to both;
      // this is an exterior. Rect sits on a hexagon facet junction of the
      // facade, away from sky and pavement.
      commonsFile: 'File:Kotva Department Store, Prague.jpg',
      photographer: 'Slyronit',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kotva_Department_Store,_Prague.jpg',
      width: 1600,
      height: 1067,
    },
    dossier: {
      en: 'Věra Machoninová and Vladimír Machonin, a married couple who ran their practice jointly, planned Kotva around a single repeating cell: a hexagon, multiplied and interlocked so that the whole footprint reads as a honeycomb rather than a block, with no facade oriented the same way as its neighbour. Five storeys rise above Náměstí Republiky and roughly as many descend below it for parking and a supermarket, threaded by ten escalators in two shafts, an unusually generous circulation for a Prague department store. The exterior hangs pressed aluminium panels and dark glazing from a reinforced concrete frame, faceted at every hexagon edge so the building reads as crystalline rather than smooth. Built with the Swedish contractor SIAB, unusual for Czechoslovakia at the time, it opened on 10 February 1975 as the largest department store in the country, publicly framed as proof of socialist abundance even as supply shortages already strained the shelves behind its glazing. It was declared a Czech cultural monument in 2019, after an earlier bid for protection had failed in 2007.',
      es: 'Věra Machoninová y Vladimír Machonin, un matrimonio que dirigía su estudio conjuntamente, proyectaron Kotva a partir de una sola célula repetida: un hexágono, multiplicado y entrelazado hasta que toda la planta se lee como un panal más que como un bloque, sin que ninguna fachada mire exactamente en la misma dirección que su vecina. Cinco plantas se alzan sobre la plaza de la República y otras tantas descienden bajo ella para aparcamiento y un supermercado, recorridas por diez escaleras mecánicas en dos núcleos, una circulación inusualmente generosa para unos grandes almacenes praguenses. El exterior cuelga paneles de aluminio prensado y vidrio oscuro de una estructura de hormigón armado, facetados en cada arista hexagonal, de modo que el edificio se lee cristalino y no liso. Construido con la contratista sueca SIAB, algo inusual en la Checoslovaquia de la época, abrió el 10 de febrero de 1975 como los mayores grandes almacenes del país, presentados públicamente como prueba de la abundancia socialista mientras la escasez de suministros ya tensaba las estanterías tras su fachada acristalada. Fue declarado monumento cultural checo en 2019, tras un primer intento de protección fallido en 2007.',
      it: 'Věra Machoninová e Vladimír Machonin, una coppia sposata che dirigeva insieme il proprio studio, progettarono Kotva a partire da un\'unica cellula ripetuta: un esagono, moltiplicato e incastrato finché l\'intera pianta si legge come un alveare piuttosto che come un blocco, senza che due facciate vicine siano mai orientate allo stesso modo. Cinque piani si innalzano sopra piazza della Repubblica e altrettanti scendono sotto di essa per il parcheggio e un supermercato, collegati da dieci scale mobili in due nuclei, una circolazione insolitamente generosa per un grande magazzino praghese. L\'esterno appende pannelli di alluminio pressato e vetrate scure a una struttura in cemento armato, sfaccettati su ogni spigolo esagonale, così che l\'edificio si legga cristallino anziché liscio. Costruito con l\'impresa svedese SIAB, cosa insolita per la Cecoslovacchia dell\'epoca, aprì il 10 febbraio 1975 come il più grande grande magazzino del paese, presentato pubblicamente come prova dell\'abbondanza socialista mentre le carenze di approvvigionamento già mettevano a dura prova gli scaffali dietro le sue vetrine. Fu dichiarato monumento culturale ceco nel 2019, dopo un primo tentativo di tutela fallito nel 2007.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q11744412', title: 'Kotva (Q11744412)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Kotva_Department_Store', title: 'Kotva Department Store', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://cs.wikipedia.org/wiki/Kotva_(obchodn%C3%AD_d%C5%AFm)', title: 'Kotva (obchodní dům) (Czech Wikipedia)', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
  {
    // Cross-batch note (agent B2, americas): architectId 'frank-gehry' is
    // defined in src/scripts/curated/architects/americas.ts (his practice
    // base). This building is in Czechia, so it is filed here in the
    // europe-central region file per the region-follows-building-location
    // convention. Co-design credit: Wikipedia/Wikidata list the building's
    // architect as "Vlado Milunić, Frank Gehry" — Milunić, a Czech
    // architect, originated the commission and is equally credited, but he
    // is not a featured architect and is not owned by any other batch's
    // roster (grepped: no worktree defines a 'vlado-milunic' id). Rather
    // than define a full architect record for a non-featured co-designer
    // out of this batch's scope, he is credited by name in the dossier
    // prose (sourced) instead of via `coArchitects`. Flagging for the
    // controller in case a future pass wants to add him formally.
    id: 'dancing-house',
    wikidataId: 'Q244816',
    name: {
      en: 'Dancing House',
      es: 'Casa Danzante',
      it: 'Casa Danzante',
    },
    architectId: 'frank-gehry',
    location: { city: 'Prague', countryCode: 'CZ', lat: 50.07556, lon: 14.41417 },
    inception: 1992,
    completed: 1996,
    demolished: null,
    typology: 'commercial',
    materials: ['steel-and-glass', 'concrete'],
    structure: {
      en: 'A reinforced-concrete frame carries two towers on a corner site: a static, fully glazed cylinder of vertical piers, and a narrow-waisted glass-and-steel tower cast from ninety-nine uniquely shaped precast concrete panels that taper and twist as they rise, capped by a tangled steel "Medusa" dome.',
      es: 'Una estructura de hormigón armado sostiene dos torres en un solar en esquina: un cilindro estático y totalmente acristalado de pilares verticales, y una torre de vidrio y acero de cintura estrecha, moldeada con noventa y nueve paneles de hormigón prefabricado de forma única que se afinan y retuercen al ascender, coronada por una cúpula de acero enmarañado apodada "Medusa".',
      it: 'Una struttura in cemento armato sorregge due torri su un lotto d\'angolo: un cilindro statico e interamente vetrato di pilastri verticali, e una torre di vetro e acciaio dalla vita stretta, realizzata con novantanove pannelli prefabbricati in cemento di forma unica che si assottigliano e torcono salendo, coronata da una cupola d\'acciaio aggrovigliato soprannominata "Medusa".',
    },
    program: {
      en: 'An office building for the Dutch insurer Nationale-Nederlanden on a riverfront lot left empty since a 1945 American bombing raid, commissioned at the personal urging of neighbour and Czech president Václav Havel, who wanted a lively cultural building rather than another office block on the site.',
      es: 'Edificio de oficinas para la aseguradora neerlandesa Nationale-Nederlanden en un solar junto al río, vacío desde un bombardeo estadounidense en 1945, encargado a instancias personales del vecino y entonces presidente checo Václav Havel, que quería en ese solar un edificio culturalmente vivo y no otro bloque de oficinas.',
      it: 'Edificio per uffici per l\'assicuratrice olandese Nationale-Nederlanden su un lotto sul fiume rimasto vuoto dopo un bombardamento americano del 1945, commissionato su sollecitazione personale del vicino e allora presidente ceco Václav Havel, che voleva in quel lotto un edificio culturalmente vivo e non un altro blocco di uffici.',
    },
    heritage: 'none',
    currentUse: {
      en: 'Mixed offices, an art gallery, a rooftop restaurant and a boutique hotel that opened in the building in 2018.',
      es: 'Uso mixto de oficinas, una galería de arte, un restaurante en la azotea y un hotel boutique abierto en el edificio en 2018.',
      it: 'Uso misto di uffici, una galleria d\'arte, un ristorante panoramico e un hotel boutique aperto nell\'edificio nel 2018.',
    },
    detailRect: { x: 0.25, y: 0.45, w: 0.32, h: 0.28 },
    image: {
      commonsFile: 'File:Prague - Dancing House.jpg',
      photographer: 'Maros Mraz',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Prague_-_Dancing_House.jpg',
      width: 1200,
      height: 1600,
    },
    extraImages: [
      {
        commonsFile: 'File:Maison dansante Prague 1.jpg',
        photographer: 'Chabe01',
        license: 'CC BY-SA 4.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Maison_dansante_Prague_1.jpg',
        width: 1067,
        height: 1600,
      },
    ],
    dossier: {
      en: 'The Czech architect Vlado Milunić had lived next door to the bomb-cleared corner lot for years and had already sketched a "yin and yang" pair of towers for it when his upstairs neighbour, freshly elected president Václav Havel, backed the project and helped bring in Gehry as a co-designer able to get an ambitious modern building built in a historic riverfront row. The two towers Milunić and Gehry built together read as a couple mid-step: a static glazed cylinder, nicknamed Ginger for its flared "skirt" of curved glass, leans into a rigid stone-toned tower nicknamed Fred, its waist pinched by a structural steel column embedded in the glass facade. Getting the tower\'s compound curves built at all required casting ninety-nine reinforced-concrete panels, no two alike, from custom formwork. The design split Czech opinion on completion in 1996 — a building this playful, on a site that still remembered wartime bombing, struck some critics as disrespectful of Prague\'s historic skyline — but it has since become one of the most photographed buildings in the country and appears on a 2005 Czech commemorative coin.',
      es: 'El arquitecto checo Vlado Milunić llevaba años viviendo junto al solar en esquina, vacío desde el bombardeo, y ya había esbozado para él una pareja de torres "yin y yang" cuando su vecino de arriba, el recién elegido presidente Václav Havel, respaldó el proyecto y ayudó a incorporar a Gehry como codiseñador capaz de lograr que se construyera un edificio moderno y ambicioso en una hilera histórica junto al río. Las dos torres que Milunić y Gehry levantaron juntos se leen como una pareja a mitad de paso: un cilindro estático acristalado, apodado Ginger por su "falda" acampanada de vidrio curvo, se inclina hacia una torre rígida de tono pétreo apodada Fred, con la cintura ceñida por una columna estructural de acero incrustada en la fachada de vidrio. Construir siquiera las curvas compuestas de la torre exigió moldear noventa y nueve paneles de hormigón armado, ninguno igual a otro, con encofrados a medida. El diseño dividió la opinión checa al terminarse en 1996 —un edificio tan lúdico, en un solar que aún recordaba el bombardeo de guerra, pareció a algunos críticos una falta de respeto al perfil histórico de Praga— pero desde entonces se ha convertido en uno de los edificios más fotografiados del país y aparece en una moneda conmemorativa checa de 2005.',
      it: 'L\'architetto ceco Vlado Milunić viveva da anni accanto al lotto d\'angolo sgombrato dalle macerie del bombardamento e aveva già abbozzato per esso una coppia di torri "yin e yang" quando il suo vicino di sopra, il neoeletto presidente Václav Havel, appoggiò il progetto e contribuì a coinvolgere Gehry come co-progettista capace di far costruire un edificio moderno e ambizioso in una cortina storica sul fiume. Le due torri che Milunić e Gehry costruirono insieme si leggono come una coppia a metà di un passo di danza: un cilindro statico vetrato, soprannominato Ginger per la sua "gonna" svasata di vetro curvo, si inclina verso una torre rigida dal tono pietroso soprannominata Fred, con la vita stretta da un pilastro strutturale in acciaio incassato nella facciata vetrata. Realizzare anche solo le curve composte della torre richiese di gettare novantanove pannelli in cemento armato, nessuno uguale all\'altro, con casseforme su misura. Il progetto divise l\'opinione pubblica ceca al suo completamento nel 1996 — un edificio così giocoso, su un lotto che ricordava ancora il bombardamento bellico, parve ad alcuni critici irrispettoso dello skyline storico di Praga — ma da allora è diventato uno degli edifici più fotografati del paese e compare su una moneta commemorativa ceca del 2005.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q244816', title: 'Dancing House (Q244816)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Dancing_House', title: 'Dancing House', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
];
