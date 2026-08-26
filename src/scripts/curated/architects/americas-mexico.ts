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
];
