import type { Architect } from '@/types/architect';

// Wave 5 curator agent (Mexico and Central America): real, sourced Architect entries for this slice.
//
// Ownership per the Wave 5 contract: Luis Barragán, Tatiana Bilbao, Frida
// Escobedo and Félix Candela are assigned to this slice. Tatiana Bilbao is
// defined nowhere in the pool because not one of her buildings carries a
// Wikidata entity (see the task report); an architect with no building fails
// `architect-orphan`, so she is left out rather than attached to an
// unverifiable id.
//
// `workRegions` and `workCentroid` are derived by data:curate from the
// buildings below and are intentionally left empty/zeroed here.
//
// Fix round (task-9-americas-mexico review, Important #2 and the country-
// spread finding): added Mauricio Rocha (San Pablo's equal co-architect,
// via coArchitects on that building) and Rubén Martínez Bulnes (architect
// of record for a new El Salvador building, Iglesia El Rosario). The
// review's OTHER coArchitects catch — Gustavo María Saavedra and Juan
// Martínez de Velasco on Biblioteca Central UNAM — is NOT implemented here;
// see the task report for why (neither has a Wikidata entity under any
// spelling tried, and Architect.wikidataId in this branch is still a
// required, non-nullable string, so a real fix needs either a located
// Wikidata item or the wikidataId-nullable infrastructure to land here).
export const AMERICAS_MEXICO_ARCHITECTS: Architect[] = [
  {
    id: 'pedro-de-arrieta',
    wikidataId: 'Q749327',
    name: 'Pedro de Arrieta',
    alternativeNames: ['Arrieta', 'Pedro Arrieta'],
    gender: 'man',
    born: null,
    died: 1738,
    floruit: { start: 1695, end: 1737, override: false },
    movements: [{ id: 'baroque', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'sacral',
    signatureMaterial: 'stone',
    portrait: {
      en: "Pedro de Arrieta was the busiest master builder of New Spain's transitional baroque. Born at the mining camp of Pachuca on a date the record does not fix, he qualified as maestro in 1691 and in 1720 was raised to maestro mayor of the cathedral and of the kingdom, the highest architectural office in the viceroyalty. His manner sits between the sober seventeenth century and the estípite exuberance that came after it: mixtilinear and octagonal plans, dark polychrome tezontle set against pale chiluca dressings, classical orders used plainly, and almost no estípite pilasters. The old Basilica of Guadalupe, the Profesa church and the Palace of the Inquisition are his, together with bridges, hospital chapels and a Franciscan stair since demolished. He died in Mexico City on 15 December 1738.",
      es: "Pedro de Arrieta fue el maestro de obras más activo del barroco de transición novohispano. Nacido en el Real de Minas de Pachuca en fecha que los documentos no precisan, obtuvo el título de maestro en 1691 y en 1720 ascendió a maestro mayor de la Catedral y del Reyno, el cargo arquitectónico más alto del virreinato. Su manera se sitúa entre la sobriedad del siglo XVII y la exuberancia estipitada que vendría después: plantas mixtilíneas y octogonales, tezontle oscuro contrastado con cantera de chiluca clara, órdenes clásicos empleados sin retórica y casi ninguna columna estípite. Suyos son la antigua Basílica de Guadalupe, el templo de La Profesa y el Palacio de la Inquisición, además de puentes, capillas hospitalarias y una escalera franciscana hoy desaparecida. Murió en la Ciudad de México el 15 de diciembre de 1738.",
      it: "Pedro de Arrieta fu il capomastro più attivo del barocco di transizione della Nuova Spagna. Nato nel centro minerario di Pachuca in una data che i documenti non fissano, ottenne il titolo di maestro nel 1691 e nel 1720 fu nominato maestro mayor della cattedrale e del regno, la più alta carica architettonica del vicereame. Il suo linguaggio sta fra la sobrietà del Seicento e l'esuberanza dell'estípite che seguirà: piante mistilinee e ottagonali, tezontle scuro e policromo contrapposto alla pietra chiara di chiluca, ordini classici usati senza retorica e quasi nessun pilastro a estípite. Sono sue l'antica basilica di Guadalupe, la chiesa della Profesa e il Palazzo dell'Inquisizione, oltre a ponti, cappelle ospedaliere e una scala francescana poi demolita. Morì a Città del Messico il 15 dicembre 1738.",
    },
    awards: [],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q749327', title: 'Pedro de Arrieta (Q749327)', license: null },
      { kind: 'wikipedia', url: 'https://es.wikipedia.org/wiki/Pedro_de_Arrieta', title: 'Pedro de Arrieta — Wikipedia en español', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'diego-de-porres',
    wikidataId: 'Q52154134',
    name: 'Diego de Porres',
    alternativeNames: ['Diego de Porras', 'Porres'],
    gender: 'man',
    born: 1677,
    died: 1741,
    floruit: { start: 1703, end: 1741, override: false },
    movements: [{ id: 'baroque', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'sacral',
    signatureMaterial: 'stone',
    portrait: {
      en: "Diego de Porres was born in Santiago de los Caballeros de Guatemala on 19 November 1677, the natural son of Teresa Ventura and of the architect Joseph de Porres, a mestizo of the same city; he learned the trade on his father's sites. In 1703 he took his father's post as maestro mayor de arquitectura of Santiago and held it until his death in 1741, adding the office of chief water engineer in 1713. After the earthquake of 1717 he surveyed and repaired the damaged city, cathedral included. The historian Javier Aguilera Rojas credits him with defining the local baroque through sober, Renaissance-descended interiors, a Serlian mannerist streak and genuine innovation in construction. La Recolección, Santa Clara, the Capuchin convent and the royal mint are his.",
      es: "Diego de Porres nació en Santiago de los Caballeros de Guatemala el 19 de noviembre de 1677, hijo natural de Teresa Ventura y del arquitecto Joseph de Porres, mestizo de la misma ciudad; aprendió el oficio en las obras de su padre. En 1703 heredó su cargo de maestro mayor de Arquitectura de Santiago y lo conservó hasta su muerte en 1741, sumando en 1713 el de fontanero mayor. Tras el terremoto de 1717 peritó y reparó la ciudad dañada, catedral incluida. El historiador Javier Aguilera Rojas le atribuye la definición del barroco local por sus medios expresivos, sus sobrios interiores de ascendiente renacentista y la influencia manierista de Serlio, además de una innovación real en las técnicas constructivas. Suyos son La Recolección, Santa Clara, el convento de Capuchinas y la Real Casa de la Moneda.",
      it: "Diego de Porres nacque a Santiago de los Caballeros de Guatemala il 19 novembre 1677, figlio naturale di Teresa Ventura e dell'architetto Joseph de Porres, meticcio della stessa città; imparò il mestiere nei cantieri paterni. Nel 1703 ne ereditò la carica di maestro mayor de arquitectura di Santiago, che tenne fino alla morte nel 1741, aggiungendovi nel 1713 quella di fontaniere maggiore. Dopo il terremoto del 1717 perizió e riparò la città danneggiata, cattedrale compresa. Lo storico Javier Aguilera Rojas gli riconosce la definizione del barocco locale attraverso interni sobri di ascendenza rinascimentale, una vena manierista serliana e una reale innovazione nelle tecniche costruttive. Sono suoi La Recolección, Santa Clara, il convento delle Cappuccine e la Real Casa de la Moneda.",
    },
    awards: [],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q52154134', title: 'Diego de Porres (Q52154134)', license: null },
      { kind: 'wikipedia', url: 'https://es.wikipedia.org/wiki/Diego_de_Porres', title: 'Diego de Porres — Wikipedia en español', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'adamo-boari',
    wikidataId: 'Q351644',
    name: 'Adamo Boari',
    alternativeNames: ['Boari', 'Adamo Boari Zanardi'],
    gender: 'man',
    // floruit.override: Boari left Mexico in 1916 and died in 1928, but the
    // Palacio de Bellas Artes was only completed in 1934 by Federico
    // Mariscal. His own working span ends in 1916; the flag stops
    // `floruit-consistent` from demanding a span he did not live to see.
    floruit: { start: 1898, end: 1916, override: true },
    born: 1863,
    died: 1928,
    movements: [
      { id: 'art-nouveau', primary: true },
      { id: 'beaux-arts', primary: false },
    ],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'civic',
    signatureMaterial: 'stone',
    portrait: {
      en: "Adamo Boari trained as a civil engineer at Ferrara and Bologna, qualifying in 1886, and then worked his way across Brazil, Uruguay, Argentina and the United States before arriving in Mexico around 1898. Under Porfirio Díaz he became the regime's preferred designer of public monuments, and the two buildings that face each other across Avenida Juárez are both his: the Palacio de Correos of 1902–1907, an Isabelline Gothic fantasy in chiluca stone hung on an American steel frame, and the new National Theatre, begun in 1904, whose Carrara marble exterior is the most complete work of Art Nouveau in the Americas. He left Mexico in 1916 with the theatre unfinished and the revolution under way, settled in Rome, and died there in 1928.",
      es: "Adamo Boari se formó como ingeniero civil en Ferrara y Bolonia, donde se tituló en 1886, y trabajó sucesivamente en Brasil, Uruguay, Argentina y Estados Unidos antes de llegar a México hacia 1898. Bajo Porfirio Díaz se convirtió en el proyectista predilecto del régimen para la obra monumental, y suyos son los dos edificios que se miran a través de la avenida Juárez: el Palacio de Correos de 1902-1907, fantasía gótico-isabelina labrada en chiluca sobre un esqueleto de acero norteamericano, y el nuevo Teatro Nacional, iniciado en 1904, cuyo exterior de mármol de Carrara es la obra más completa del art nouveau en América. Dejó México en 1916, con el teatro inconcluso y la Revolución en marcha, se estableció en Roma y allí murió en 1928.",
      it: "Adamo Boari si formò come ingegnere civile a Ferrara e Bologna, laureandosi nel 1886, e lavorò poi in Brasile, Uruguay, Argentina e Stati Uniti prima di arrivare in Messico verso il 1898. Sotto Porfirio Díaz divenne il progettista prediletto del regime per l'architettura monumentale, e suoi sono i due edifici che si fronteggiano lungo l'Avenida Juárez: il Palacio de Correos del 1902-1907, fantasia gotico-isabellina scolpita nella pietra di chiluca su un'ossatura d'acciaio statunitense, e il nuovo Teatro Nazionale, avviato nel 1904, il cui rivestimento in marmo di Carrara è l'opera più compiuta dell'art nouveau nelle Americhe. Lasciò il Messico nel 1916, con il teatro incompiuto e la rivoluzione in corso, si stabilì a Roma e vi morì nel 1928.",
    },
    awards: [],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q351644', title: 'Adamo Boari (Q351644)', license: null },
      { kind: 'wikipedia', url: 'https://es.wikipedia.org/wiki/Adamo_Boari', title: 'Adamo Boari — Wikipedia en español', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'juan-ogorman',
    wikidataId: 'Q1378325',
    name: "Juan O'Gorman",
    alternativeNames: ['Juan OGorman', "O'Gorman", 'Juan O Gorman'],
    gender: 'man',
    born: 1905,
    died: 1982,
    floruit: { start: 1929, end: 1968, override: false },
    movements: [
      { id: 'functionalism', primary: true },
      { id: 'organic-architecture', primary: false },
    ],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'educational',
    signatureMaterial: 'concrete',
    portrait: {
      en: "Juan O'Gorman was born in Coyoacán in 1905 to an Irish mining engineer who painted, and he never chose between the two trades. At twenty-four he built a house on a stepped tennis court in San Ángel and, with the studios he added for Diego Rivera and Frida Kahlo, introduced Le Corbusier's vocabulary to Mexico. As head of the schools programme he designed twenty-six primary schools for the education ministry on the principle of maximum utility for minimum outlay. He then turned against his own doctrine: the mosaic-clad Central Library at the university campus and his lost lava-rock house in the Pedregal answer Frank Lloyd Wright and the Mesoamerican past instead. He took his own life in January 1982.",
      es: "Juan O'Gorman nació en Coyoacán en 1905, hijo de un ingeniero de minas irlandés que pintaba, y nunca eligió entre los dos oficios. A los veinticuatro años levantó una casa sobre una cancha de tenis escalonada en San Ángel y, con los estudios que añadió para Diego Rivera y Frida Kahlo, introdujo en México el vocabulario de Le Corbusier. Al frente del programa escolar proyectó veintiséis escuelas primarias para la Secretaría de Educación bajo la divisa del máximo de utilidad por el mínimo de gasto y esfuerzo. Después se volvió contra su propia doctrina: la Biblioteca Central de Ciudad Universitaria, revestida de mosaico de piedra, y su desaparecida casa de roca volcánica en el Pedregal responden más bien a Frank Lloyd Wright y al pasado mesoamericano. Se quitó la vida en enero de 1982.",
      it: "Juan O'Gorman nacque a Coyoacán nel 1905, figlio di un ingegnere minerario irlandese che dipingeva, e non scelse mai fra i due mestieri. A ventiquattro anni costruì una casa su un campo da tennis terrazzato a San Ángel e, con gli studi aggiunti per Diego Rivera e Frida Kahlo, introdusse in Messico il vocabolario di Le Corbusier. A capo del programma scolastico progettò ventisei scuole elementari per il ministero dell'istruzione secondo il principio del massimo di utilità con il minimo di spesa e fatica. Poi si rivoltò contro la propria dottrina: la Biblioteca Centrale della Città Universitaria, rivestita di mosaico di pietra, e la sua perduta casa di roccia lavica nel Pedregal rispondono piuttosto a Frank Lloyd Wright e al passato mesoamericano. Si tolse la vita nel gennaio del 1982.",
    },
    awards: ['Premio Nacional de Ciencias y Artes (Bellas Artes), 1972'],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q1378325', title: "Juan O'Gorman (Q1378325)", license: null },
      { kind: 'wikipedia', url: 'https://es.wikipedia.org/wiki/Juan_O%27Gorman', title: "Juan O'Gorman — Wikipedia en español", license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'luis-barragan',
    wikidataId: 'Q243295',
    name: 'Luis Barragán',
    alternativeNames: ['Luis Barragan', 'Luis Ramiro Barragán Morfín', 'Barragán'],
    gender: 'man',
    born: 1902,
    died: 1988,
    // Barragán refused the labels available to him — he trained as an
    // engineer, described himself variously as engineer, architect and
    // landscape architect, and worked outside every organised movement of
    // his generation. 'unaffiliated' is the honest reading.
    movements: 'unaffiliated',
    floruit: { start: 1928, end: 1980, override: false },
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'domestic',
    signatureMaterial: 'mixed',
    portrait: {
      en: "Luis Barragán qualified as a civil engineer in Guadalajara in 1923 and, because his school stopped issuing architecture diplomas, signed his work for the rest of his life as engineer, architect or landscape architect by turns. Travel in France and Spain in 1925–26 gave him Ferdinand Bac's enclosed gardens and the Alhambra; a functionalist decade in Mexico City after 1936 gave him a living. The mature work begins in the 1940s with land he bought and developed himself — the Pedregal subdivision, his own house on Calzada Madereros, later the Los Clubes estates — and it is made of walls, water, colour and controlled light rather than of structure. He received the Pritzker Prize in 1980 and died in Mexico City in 1988.",
      es: "Luis Barragán se tituló como ingeniero civil en Guadalajara en 1923 y, como su escuela dejó de expedir títulos de arquitecto, firmó el resto de su vida indistintamente como ingeniero, arquitecto o arquitecto paisajista. Los viajes por Francia y España de 1925-1926 le dieron los jardines cerrados de Ferdinand Bac y la Alhambra; una década funcionalista en la Ciudad de México a partir de 1936 le dio de comer. La obra madura arranca en los años cuarenta con terrenos que compró y desarrolló él mismo —el fraccionamiento del Pedregal, su propia casa en la Calzada Madereros, más tarde las quintas de Los Clubes— y está hecha de muros, agua, color y luz gobernada antes que de estructura. Recibió el Premio Pritzker en 1980 y murió en la Ciudad de México en 1988.",
      it: "Luis Barragán si laureò in ingegneria civile a Guadalajara nel 1923 e, poiché la sua scuola smise di rilasciare titoli in architettura, firmò per tutta la vita ora da ingegnere, ora da architetto, ora da paesaggista. I viaggi in Francia e Spagna del 1925-26 gli diedero i giardini chiusi di Ferdinand Bac e l'Alhambra; un decennio funzionalista a Città del Messico dopo il 1936 gli diede da vivere. L'opera matura comincia negli anni Quaranta con terreni che acquistò e lottizzò lui stesso — il Pedregal, la propria casa sulla Calzada Madereros, poi le tenute di Los Clubes — ed è fatta di muri, acqua, colore e luce governata più che di struttura. Ricevette il Premio Pritzker nel 1980 e morì a Città del Messico nel 1988.",
    },
    awards: ['Premio Pritzker de Arquitectura (1980)', 'Premio Nacional de Ciencias y Artes (Bellas Artes)'],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q243295', title: 'Luis Barragán (Q243295)', license: null },
      { kind: 'wikipedia', url: 'https://es.wikipedia.org/wiki/Luis_Barrag%C3%A1n', title: 'Luis Barragán — Wikipedia en español', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'felix-candela',
    wikidataId: 'Q704609',
    name: 'Félix Candela',
    alternativeNames: ['Felix Candela', 'Félix Candela Outeriño', 'Candela'],
    gender: 'man',
    born: 1910,
    died: 1997,
    // Candela belonged to no movement: he is a builder-engineer whose
    // subject was the geometry of the thin shell, and the labels of his
    // generation — functionalism, brutalism, organic architecture — all
    // misdescribe the work.
    movements: 'unaffiliated',
    floruit: { start: 1950, end: 1997, override: false },
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'sacral',
    signatureMaterial: 'concrete',
    portrait: {
      en: "Félix Candela finished his architecture degree in Madrid in 1935, learned about concrete shells from Eduardo Torroja, served as a captain of engineers in the Republican army and reached Mexico in June 1939 aboard the Sinaia, one of the Spanish republican exiles. He took Mexican nationality in 1941. With his brother Antonio he ran the contracting firm Cubiertas Ala from 1950 to 1969, which drew 1,439 projects and built 896 of them, most of them industrial. His instrument was the hyperbolic paraboloid, a doubly ruled surface that can be built with straight formwork and, in his hands, roofed enormous column-free spans in shells a few centimetres thick. He taught at UNAM and later in Illinois, and died in North Carolina in 1997.",
      es: "Félix Candela terminó la carrera de arquitectura en Madrid en 1935, aprendió de Eduardo Torroja el uso de las cubiertas de hormigón, sirvió como capitán de ingenieros en el Ejército Popular de la República y llegó a México en junio de 1939 a bordo del Sinaia, entre los exiliados republicanos españoles. Adoptó la nacionalidad mexicana en 1941. Con su hermano Antonio dirigió la constructora Cubiertas Ala de 1950 a 1969: 1439 proyectos redactados y 896 construidos, en su mayoría industriales. Su instrumento fue el paraboloide hiperbólico, superficie doblemente reglada que se encofra con tablas rectas y que en sus manos cubrió luces enormes sin columnas con cascarones de pocos centímetros de espesor. Enseñó en la UNAM y más tarde en Illinois, y murió en Carolina del Norte en 1997.",
      it: "Félix Candela si laureò in architettura a Madrid nel 1935, apprese da Eduardo Torroja l'uso delle volte sottili in calcestruzzo, servì come capitano del genio nell'esercito repubblicano e giunse in Messico nel giugno del 1939 a bordo del Sinaia, fra gli esuli repubblicani spagnoli. Prese la cittadinanza messicana nel 1941. Con il fratello Antonio diresse l'impresa Cubiertas Ala dal 1950 al 1969: 1439 progetti redatti e 896 costruiti, in gran parte industriali. Il suo strumento fu il paraboloide iperbolico, superficie doppiamente rigata che si cassera con tavole diritte e che nelle sue mani coprì luci enormi senza pilastri con gusci di pochi centimetri di spessore. Insegnò all'UNAM e poi in Illinois, e morì nella Carolina del Nord nel 1997.",
    },
    awards: [
      'Gold Medal, Institution of Structural Engineers (1961)',
      'Premio Auguste Perret, Unión Internacional de Arquitectos (1961)',
      'Medalla de Oro de la Arquitectura, CSCAE (1981)',
      'Premio Antonio Camuñas de Arquitectura (1985)',
    ],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q704609', title: 'Félix Candela (Q704609)', license: null },
      { kind: 'wikipedia', url: 'https://es.wikipedia.org/wiki/F%C3%A9lix_Candela', title: 'Félix Candela — Wikipedia en español', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'frida-escobedo',
    wikidataId: 'Q28151402',
    name: 'Frida Escobedo',
    alternativeNames: ['Escobedo', 'Frida Escobedo Estudio'],
    gender: 'woman',
    born: 1979,
    died: null,
    floruit: { start: 2006, end: 2024, override: false },
    movements: [
      { id: 'critical-regionalism', primary: true },
      { id: 'minimalism', primary: false },
    ],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'cultural',
    signatureMaterial: 'concrete',
    portrait: {
      en: "Frida Escobedo studied architecture at the Universidad Iberoamericana and took a master's in art, design and the public domain at Harvard. She founded Perro Rojo with Alejandro Alarcón in 2003 and has practised under her own name in Mexico City since 2006. Her buildings are usually additions to something already standing — a hotel, a mural workshop, a museum courtyard — and they work by screening, reflecting and re-orienting rather than by adding mass, most often through perforated concrete lattices that meter light and air. In 2018 she became the youngest architect to build the Serpentine Pavilion in London, and in 2022 the first woman commissioned to design a wing of the Metropolitan Museum of Art. She teaches at the Universidad Iberoamericana.",
      es: "Frida Escobedo estudió arquitectura en la Universidad Iberoamericana y cursó una maestría en arte, diseño y dominio público en Harvard. Fundó Perro Rojo con Alejandro Alarcón en 2003 y ejerce con despacho propio en la Ciudad de México desde 2006. Sus obras suelen ser añadidos a algo que ya existe —un hotel, un taller de muralismo, el patio de un museo— y operan tamizando, reflejando y reorientando antes que sumando volumen, casi siempre mediante celosías de concreto que dosifican la luz y el aire. En 2018 se convirtió en la arquitecta más joven en construir el Serpentine Pavilion de Londres, y en 2022 en la primera mujer a la que se encarga el proyecto de un ala del Metropolitan Museum of Art. Es docente en la Universidad Iberoamericana.",
      it: "Frida Escobedo ha studiato architettura all'Universidad Iberoamericana e ha conseguito un master in arte, design e dominio pubblico a Harvard. Ha fondato Perro Rojo con Alejandro Alarcón nel 2003 e dal 2006 lavora con studio proprio a Città del Messico. Le sue opere sono quasi sempre aggiunte a qualcosa che già esiste — un albergo, un laboratorio di muralismo, il cortile di un museo — e agiscono schermando, riflettendo e riorientando più che aggiungendo massa, per lo più con grate di calcestruzzo che dosano luce e aria. Nel 2018 è diventata la più giovane architetta a costruire il Serpentine Pavilion di Londra e nel 2022 la prima donna incaricata di progettare un'ala del Metropolitan Museum of Art. Insegna all'Universidad Iberoamericana.",
    },
    awards: [
      'Young Architects Forum, Architectural League of New York (2009)',
      'Emerging Architecture Award, The Architectural Review (2016)',
      'Emerging Voices, The Architectural League of New York (2017)',
    ],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q28151402', title: 'Frida Escobedo (Q28151402)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Frida_Escobedo', title: 'Frida Escobedo — English Wikipedia', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'gabriela-carrillo',
    wikidataId: 'Q50325056',
    name: 'Gabriela Carrillo',
    alternativeNames: ['Gabriela Carrillo Valadez', 'Carrillo'],
    gender: 'woman',
    born: 1978,
    died: null,
    floruit: { start: 2008, end: 2024, override: false },
    movements: [{ id: 'critical-regionalism', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'cultural',
    signatureMaterial: 'brick',
    portrait: {
      en: "Gabriela Carrillo graduated from the architecture faculty of the UNAM and joined Mauricio Rocha's Taller de Arquitectura in 2001, running its projects until 2011; from 2012 the office carried both names as Taller | Mauricio Rocha + Gabriela Carrillo. She is a founding member of the collective C733 and teaches the Jorge González Reyna workshop at the UNAM. The work is built from whatever the region supplies and can be worked by local trades — rammed earth in Oaxaca, brick, volcanic stone, exposed steel — and it treats an existing ruin as a structural and civic given rather than a backdrop. In 2017 the Architectural Review and the Architects' Journal named her Architect of the Year in their Women in Architecture awards.",
      es: "Gabriela Carrillo se tituló en la Facultad de Arquitectura de la UNAM e ingresó en 2001 al Taller de Arquitectura de Mauricio Rocha, donde dirigió proyectos hasta 2011; desde 2012 la oficina lleva los dos nombres como Taller | Mauricio Rocha + Gabriela Carrillo. Es miembro fundador del colectivo C733 y titular del taller Jorge González Reyna en la UNAM. Su obra se construye con lo que da la región y puede labrar la mano de obra local —tierra apisonada en Oaxaca, ladrillo, piedra volcánica, acero aparente— y trata la ruina preexistente como un dato estructural y cívico, no como telón de fondo. En 2017 The Architectural Review y The Architects' Journal la nombraron Arquitecta del Año en sus premios Women in Architecture.",
      it: "Gabriela Carrillo si è laureata alla facoltà di architettura dell'UNAM ed è entrata nel 2001 nel Taller de Arquitectura di Mauricio Rocha, dove ha diretto i progetti fino al 2011; dal 2012 lo studio porta entrambi i nomi, Taller | Mauricio Rocha + Gabriela Carrillo. È socia fondatrice del collettivo C733 e titolare del laboratorio Jorge González Reyna all'UNAM. Il suo lavoro si costruisce con ciò che la regione offre e che le maestranze locali sanno lavorare — terra battuta a Oaxaca, mattone, pietra vulcanica, acciaio a vista — e tratta la rovina preesistente come un dato strutturale e civico, non come sfondo. Nel 2017 The Architectural Review e The Architects' Journal l'hanno nominata Architetto dell'Anno nei premi Women in Architecture.",
    },
    awards: ["Architect of the Year, Women in Architecture Awards, The Architectural Review / The Architects' Journal (2017)"],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q50325056', title: 'Gabriela Carrillo (Q50325056)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Gabriela_Carrillo', title: 'Gabriela Carrillo — English Wikipedia', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    // coArchitect on San Pablo (task-9 fix round, Important #2): the
    // building's own cited ArchDaily source credits "Mauricio Rocha +
    // Gabriela Carrillo" as an equal "+" partnership, not a lead-plus-
    // assistant credit, so architectId stays gabriela-carrillo (load-bearing
    // for this slice's gender floor per the review's Minor #1) and Rocha is
    // added here as a full record, credited via coArchitects instead.
    id: 'mauricio-rocha',
    wikidataId: 'Q2840228',
    name: 'Mauricio Rocha',
    alternativeNames: ['Mauricio Rocha Iturbide', 'Rocha'],
    gender: 'man',
    born: 1963,
    died: null,
    floruit: { start: 1990, end: 2024, override: false },
    movements: [{ id: 'critical-regionalism', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'cultural',
    signatureMaterial: 'concrete',
    portrait: {
      en: "Mauricio Rocha was born in Mexico City in 1963, son of the photographer Graciela Iturbide and the architect Manuel Rocha Díaz. He studied architecture at the UNAM and opened his own Taller de Arquitectura in 1990 with a house built for his mother, continuing to collaborate with his father until Rocha Díaz's death in 1996. From 2001 Gabriela Carrillo directed the office's projects alongside him, and since 2012 the practice has carried both their names. His public buildings — the Centro de Atención a Gente Invidente (2000), the Mercado de San Pablo Oztotepec (2003), the Escuela de Artes Plásticas UABJO in Oaxaca (2008) — work by subtraction and exposed structure rather than ornament, seeking, in his own words, an architecture that ages with dignity. He has taught at the UNAM's Facultad de Arquitectura since 1992 and belongs to Mexico's Sistema Nacional de Creadores.",
      es: "Mauricio Rocha nació en la Ciudad de México en 1963, hijo de la fotógrafa Graciela Iturbide y del arquitecto Manuel Rocha Díaz. Estudió arquitectura en la UNAM y en 1990 abrió su propio Taller de Arquitectura con una casa construida para su madre, sin dejar de colaborar con su padre hasta la muerte de éste en 1996. Desde 2001 Gabriela Carrillo dirigió junto con él los proyectos del despacho, y desde 2012 la práctica lleva los dos nombres. Sus obras públicas —el Centro de Atención a Gente Invidente (2000), el Mercado de San Pablo Oztotepec (2003), la Escuela de Artes Plásticas UABJO en Oaxaca (2008)— trabajan por sustracción y con la estructura vista antes que con el ornamento, buscando, en sus propias palabras, una arquitectura que envejezca con dignidad. Da clases en la Facultad de Arquitectura de la UNAM desde 1992 y pertenece al Sistema Nacional de Creadores de México.",
      it: "Mauricio Rocha nacque a Città del Messico nel 1963, figlio della fotografa Graciela Iturbide e dell'architetto Manuel Rocha Díaz. Studiò architettura all'UNAM e nel 1990 aprì il proprio Taller de Arquitectura con una casa costruita per la madre, continuando a collaborare con il padre fino alla morte di quest'ultimo nel 1996. Dal 2001 Gabriela Carrillo diresse insieme a lui i progetti dello studio, e dal 2012 la pratica porta entrambi i nomi. Le sue opere pubbliche — il Centro de Atención a Gente Invidente (2000), il Mercado de San Pablo Oztotepec (2003), la Escuela de Artes Plásticas UABJO a Oaxaca (2008) — lavorano per sottrazione e con la struttura a vista invece che con l'ornamento, cercando, con le sue stesse parole, un'architettura che invecchi con dignità. Insegna alla Facultad de Arquitectura dell'UNAM dal 1992 e appartiene al Sistema Nacional de Creadores messicano.",
    },
    awards: [
      'Premio Covarrubias a la Mejor Museografía Nacional (2002)',
      'Medalla de Plata, VII Bienal de Arquitectura Mexicana (2002)',
      'Medalla de Oro, VIII Bienal de Arquitectura Mexicana (2004)',
    ],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q2840228', title: 'Mauricio Rocha Iturbide (Q2840228)', license: null },
      { kind: 'wikipedia', url: 'https://es.wikipedia.org/wiki/Mauricio_Rocha_Iturbide', title: 'Mauricio Rocha Iturbide — Wikipedia en español', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    // Country-spread fix (task-9 review, Important #1): the one new
    // building added for the six previously-unrepresented countries in this
    // slice (El Salvador). architectId here — no coArchitects issue.
    id: 'ruben-martinez-bulnes',
    wikidataId: 'Q14838817',
    name: 'Rubén Martínez Bulnes',
    alternativeNames: ['Rubén Martínez', 'Martínez Bulnes'],
    gender: 'man',
    born: 1929,
    died: 2023,
    floruit: { start: 1962, end: 2018, override: false },
    movements: [{ id: 'brutalism', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'sacral',
    signatureMaterial: 'concrete',
    portrait: {
      en: "Rubén Martínez Bulnes was born in San Salvador on 7 July 1929 and died in the same city on 17 July 2023. He set out to study engineering like his father, but taught himself sculpture by working scrap metal alongside welders, and became El Salvador's most prolific sculptor, with more than 180 works to his name — the Monumento a la Constitución and the Monumento a la Paz among them. In 1962 the Dominican friar Alejandro Peinador asked him to design a new parish church for San Salvador's historic centre, to replace an outgrown wooden one; Salvadoran church authorities balked at his plans, and approval came instead from the Vatican. He completed the church, El Rosario, in 1971. He was named Notable Sculptor of El Salvador by the Legislative Assembly in 2012 and Hijo Meritísimo of San Salvador in 2018.",
      es: "Rubén Martínez Bulnes nació en San Salvador el 7 de julio de 1929 y murió en la misma ciudad el 17 de julio de 2023. Pensaba estudiar ingeniería como su padre, pero se formó él mismo como escultor trabajando chatarra metálica junto a soldadores, y llegó a ser el escultor más prolífico de El Salvador, con más de 180 obras, entre ellas el Monumento a la Constitución y el Monumento a la Paz. En 1962 el fraile dominico Alejandro Peinador le encargó proyectar una nueva iglesia parroquial para el centro histórico de San Salvador, en sustitución de una de madera ya insuficiente; las autoridades eclesiales salvadoreñas rechazaron en un principio sus planos, y la aprobación llegó desde el Vaticano. Terminó la iglesia, El Rosario, en 1971. La Asamblea Legislativa lo nombró Notable Escultor de El Salvador en 2012 y la Alcaldía de San Salvador lo declaró Hijo Meritísimo en 2018.",
      it: "Rubén Martínez Bulnes nacque a San Salvador il 7 luglio 1929 e morì nella stessa città il 17 luglio 2023. Pensava di studiare ingegneria come il padre, ma si formò da autodidatta come scultore lavorando rottami metallici insieme a saldatori, diventando lo scultore più prolifico di El Salvador con oltre 180 opere, fra cui il Monumento a la Constitución e il Monumento a la Paz. Nel 1962 il frate domenicano Alejandro Peinador gli affidò il progetto di una nuova chiesa parrocchiale per il centro storico di San Salvador, in sostituzione di una chiesa di legno ormai insufficiente; le autorità ecclesiastiche salvadoregne respinsero dapprima i suoi disegni, e l'approvazione arrivò invece dal Vaticano. Completò la chiesa, El Rosario, nel 1971. Nel 2012 l'Assemblea Legislativa lo nominò Scultore Notevole di El Salvador e nel 2018 il Comune di San Salvador lo dichiarò Hijo Meritísimo.",
    },
    awards: [
      'Valor Cultural, CONCULTURA (2003)',
      'Notable Escultor de El Salvador, Asamblea Legislativa (2012)',
      'Hijo Meritísimo de San Salvador (2018)',
    ],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q14838817', title: 'Rubén Martínez Bulnes (Q14838817)', license: null },
      { kind: 'wikipedia', url: 'https://es.wikipedia.org/wiki/Rub%C3%A9n_Mart%C3%ADnez_Bulnes', title: 'Rubén Martínez Bulnes — Wikipedia en español', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'pedro-ramirez-vazquez',
    wikidataId: 'Q350915',
    name: 'Pedro Ramírez Vázquez',
    alternativeNames: [],
    gender: 'man',
    born: 1919,
    died: 2013,
    floruit: { start: 1958, end: 1998, override: false },
    movements: 'unaffiliated',
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'cultural',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Ramírez Vázquez trained at Mexico\'s National School of Architecture and spent his career moving between private commissions and direct state appointments, eventually holding cabinet-level responsibility for the 1968 Mexico City Olympics and for Mexico\'s basic-education textbook programme. His buildings for the state read as a coherent public architecture: reinforced concrete, generous daylight and, repeatedly, a wide courtyard organised around a single dramatic structural gesture, as in the cantilevered concrete umbrella that roofs the National Museum of Anthropology. He worked with a changing roster of co-authors, most often Rafael Mijares Alcérreca, rather than as a sole auteur, and his built output — museums, stadiums, embassies, a new basilica — is unusually large for having been produced largely inside government commissions rather than the open market.',
      es: 'Ramírez Vázquez se formó en la Escuela Nacional de Arquitectura de México y repartió su carrera entre encargos privados y nombramientos estatales directos, hasta asumir responsabilidad de rango ministerial en los Juegos Olímpicos de México de 1968 y en el programa nacional de libros de texto gratuitos. Sus edificios para el Estado se leen como una arquitectura pública coherente: hormigón armado, luz natural generosa y, una y otra vez, un amplio patio organizado en torno a un único gesto estructural dramático, como la sombrilla de hormigón en voladizo que cubre el Museo Nacional de Antropología. Trabajó con una nómina cambiante de coautores, sobre todo Rafael Mijares Alcérreca, más que como autor único, y su producción construida —museos, estadios, embajadas, una nueva basílica— es inusualmente extensa por haberse realizado en gran parte dentro de encargos gubernamentales y no del mercado abierto.',
      it: 'Ramírez Vázquez si formò alla Scuola Nazionale di Architettura del Messico e divise la carriera tra incarichi privati e nomine statali dirette, assumendo infine una responsabilità di rango ministeriale per le Olimpiadi di Città del Messico del 1968 e per il programma nazionale di libri di testo gratuiti. I suoi edifici per lo Stato si leggono come un\'architettura pubblica coerente: cemento armato, luce naturale generosa e, ripetutamente, un ampio cortile organizzato attorno a un unico gesto strutturale drammatico, come l\'ombrello di cemento a sbalzo che copre il Museo Nazionale di Antropologia. Lavorò con una squadra di coautori mutevole, soprattutto Rafael Mijares Alcérreca, più che come autore unico, e la sua produzione costruita — musei, stadi, ambasciate, una nuova basilica — è insolitamente ampia per essere stata realizzata in gran parte all\'interno di incarichi governativi anziché del libero mercato.',
    },
    awards: ['National Prize for Arts and Sciences, Mexico'],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q350915', title: 'Pedro Ramírez Vázquez (Q350915)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Pedro_Ram%C3%ADrez_V%C3%A1zquez', title: 'Pedro Ramírez Vázquez', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'rafael-mijares',
    wikidataId: 'Q2126990',
    name: 'Rafael Mijares Alcérreca',
    alternativeNames: ['Rafael Mijares'],
    gender: 'man',
    born: 1924,
    died: 2015,
    floruit: { start: 1958, end: 1998, override: false },
    movements: 'unaffiliated',
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'cultural',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Mijares Alcérreca trained in Mexico City and spent almost his entire career as Pedro Ramírez Vázquez\'s principal design partner rather than an independent name, co-signing the National Museum of Anthropology, the Aztec Stadium and a long list of the government buildings Ramírez Vázquez was commissioned to deliver through the 1960s and 1970s. Their working method combined a modern reinforced-concrete vocabulary with deliberate references to pre-Hispanic planning — courtyards, platforms and a processional approach to entry — argued as a specifically Mexican public architecture rather than an import. Mijares also taught architecture in Mexico City for much of his career, and continued to practise into his nineties before his death in 2015.',
      es: 'Mijares Alcérreca se formó en Ciudad de México y pasó casi toda su carrera como socio principal de diseño de Pedro Ramírez Vázquez más que como firma independiente, cofirmando el Museo Nacional de Antropología, el Estadio Azteca y una larga lista de los edificios gubernamentales que Ramírez Vázquez fue encargado de entregar durante los años sesenta y setenta. Su método de trabajo combinaba un vocabulario moderno de hormigón armado con referencias deliberadas al urbanismo prehispánico —patios, plataformas y un acceso concebido como recorrido procesional—, defendido como una arquitectura pública específicamente mexicana y no como una importación. Mijares también dio clases de arquitectura en Ciudad de México durante gran parte de su carrera, y siguió ejerciendo hasta los noventa años, antes de morir en 2015.',
      it: 'Mijares Alcérreca si formò a Città del Messico e trascorse quasi tutta la carriera come principale socio di progetto di Pedro Ramírez Vázquez più che come firma indipendente, cofirmando il Museo Nazionale di Antropologia, lo Stadio Azteca e una lunga lista degli edifici governativi che Ramírez Vázquez fu incaricato di realizzare negli anni Sessanta e Settanta. Il loro metodo di lavoro univa un vocabolario moderno in cemento armato a riferimenti deliberati all\'urbanistica precolombiana — cortili, piattaforme e un accesso concepito come percorso processionale —, sostenuto come un\'architettura pubblica specificamente messicana e non come un\'importazione. Mijares insegnò anche architettura a Città del Messico per gran parte della carriera, e continuò a esercitare fino ai novant\'anni, prima di morire nel 2015.',
    },
    awards: [],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q2126990', title: 'Rafael Mijares Alcérreca (Q2126990)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/National_Museum_of_Anthropology_(Mexico)', title: 'National Museum of Anthropology (Mexico)', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'teodoro-gonzalez-de-leon',
    wikidataId: 'Q723981',
    name: 'Teodoro González de León',
    alternativeNames: [],
    gender: 'man',
    born: 1926,
    died: 2016,
    floruit: { start: 1968, end: 2010, override: false },
    movements: [{ id: 'brutalism', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'cultural',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'González de León studied at UNAM\'s national architecture school from 1942 to 1947, then spent eighteen months in Le Corbusier\'s Paris atelier, working on the Marseille Unité d\'Habitation and the Saint-Dié factory project, before returning to Mexico and founding, with Abraham Zabludovsky, one of the country\'s most consistent architectural partnerships. From 1974 they built the COLMEX headquarters, the INFONAVIT headquarters, the Universidad Pedagógica Nacional and the Rufino Tamayo Museum in a single recognisable material: board-formed, bush-hammered concrete left entirely unclad, arranged as terraced, cantilevered volumes that step down sloped sites rather than standing as free blocks. Their shared 1982 National Award of Science and Arts recognised the Tamayo museum specifically; González de León later received the Union of International Architects\' gold medal in 2008 and remained active until close to his death in 2016.',
      es: 'González de León estudió en la escuela nacional de arquitectura de la UNAM entre 1942 y 1947, y pasó después dieciocho meses en el taller parisino de Le Corbusier, donde trabajó en la Unité d\'Habitation de Marsella y en la fábrica de Saint-Dié, antes de volver a México y fundar, con Abraham Zabludovsky, una de las sociedades de arquitectos más coherentes del país. Desde 1974 construyeron juntos la sede de El Colegio de México, la del INFONAVIT, la Universidad Pedagógica Nacional y el Museo Rufino Tamayo en un único material reconocible: hormigón encofrado y abujardado dejado por completo sin revestir, dispuesto en volúmenes escalonados y en voladizo que descienden por el terreno en vez de erguirse como bloques exentos. Su Premio Nacional de Ciencias y Artes compartido de 1982 reconoció específicamente el museo Tamayo; González de León recibió después la medalla de oro de la Unión Internacional de Arquitectos en 2008 y siguió activo hasta poco antes de morir en 2016.',
      it: 'González de León studiò alla scuola nazionale di architettura dell\'UNAM tra il 1942 e il 1947, e trascorse poi diciotto mesi nell\'atelier parigino di Le Corbusier, lavorando all\'Unité d\'Habitation di Marsiglia e alla fabbrica di Saint-Dié, prima di tornare in Messico e fondare, con Abraham Zabludovsky, una delle società di architetti più coerenti del paese. Dal 1974 costruirono insieme la sede del Colegio de México, quella dell\'INFONAVIT, l\'Universidad Pedagógica Nacional e il Museo Rufino Tamayo in un unico materiale riconoscibile: cemento con casseratura a vista e bocciardato, lasciato del tutto privo di rivestimento, disposto in volumi digradanti e a sbalzo che scendono lungo il terreno anziché ergersi come blocchi isolati. Il loro Premio Nazionale di Scienze e Arti condiviso del 1982 riconobbe specificamente il museo Tamayo; González de León ricevette poi la medaglia d\'oro dell\'Unione Internazionale degli Architetti nel 2008 e restò attivo fino a poco prima della morte, nel 2016.',
    },
    awards: [
      'National Prize for Arts and Sciences, Mexico (1982)',
      'Grand Latin American Award, Buenos Aires Architecture Biennale (1989)',
      'UIA Gold Medal (2008)',
    ],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q723981', title: 'Teodoro González de León (Q723981)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Teodoro_Gonz%C3%A1lez_de_Le%C3%B3n', title: 'Teodoro González de León', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'abraham-zabludovsky',
    wikidataId: 'Q330720',
    name: 'Abraham Zabludovsky',
    alternativeNames: [],
    gender: 'man',
    born: 1924,
    died: 2003,
    floruit: { start: 1968, end: 2001, override: false },
    movements: [{ id: 'brutalism', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'cultural',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Zabludovsky studied architecture in Mexico City and, from the 1960s, formed a long partnership with Teodoro González de León that produced some of Mexico\'s most consistent Brutalist civic architecture: El Colegio de México, the Rufino Tamayo Museum and the National Auditorium among them, all built in bare, board-marked concrete rather than applied finishes. The two shared authorship without a settled hierarchy, and their 1982 National Award of Science and Arts named them jointly for the Tamayo museum\'s design. Outside the partnership, Zabludovsky also built housing and cultural buildings under his own name in Mexico City, continuing to practise until close to his death in 2003.',
      es: 'Zabludovsky estudió arquitectura en Ciudad de México y, desde los años sesenta, formó con Teodoro González de León una larga sociedad que produjo parte de la arquitectura cívica brutalista más coherente de México: entre otras, El Colegio de México, el Museo Rufino Tamayo y el Auditorio Nacional, todos construidos en hormigón desnudo y encofrado sin acabados aplicados. Los dos compartieron la autoría sin una jerarquía fija, y su Premio Nacional de Ciencias y Artes de 1982 los nombró conjuntamente por el diseño del museo Tamayo. Fuera de la sociedad, Zabludovsky construyó también vivienda y equipamientos culturales bajo su propio nombre en Ciudad de México, y siguió ejerciendo hasta poco antes de morir en 2003.',
      it: 'Zabludovsky studiò architettura a Città del Messico e, dagli anni Sessanta, formò con Teodoro González de León una lunga società che produsse parte dell\'architettura civica brutalista più coerente del Messico: tra le altre, il Colegio de México, il Museo Rufino Tamayo e l\'Auditorio Nacional, tutti costruiti in cemento nudo e con casseratura a vista senza finiture applicate. I due condivisero la paternità del progetto senza una gerarchia fissa, e il loro Premio Nazionale di Scienze e Arti del 1982 li nominò congiuntamente per il progetto del museo Tamayo. Al di fuori della società, Zabludovsky costruì anche edilizia residenziale ed edifici culturali a proprio nome a Città del Messico, e continuò a esercitare fino a poco prima della morte, nel 2003.',
    },
    awards: ['National Prize for Arts and Sciences, Mexico (1982)'],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q330720', title: 'Abraham Zabludovsky (Q330720)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Museo_Rufino_Tamayo,_Mexico_City', title: 'Museo Rufino Tamayo, Mexico City', license: 'CC BY-SA 4.0' },
    ],
  },
];
