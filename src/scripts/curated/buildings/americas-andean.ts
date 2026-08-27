import type { Building } from '@/types/building';

// Wave 5 curator agent (Andean states and the Caribbean): real, sourced Building entries for this slice.
//
// Every `image` below was checked on the live Commons file page and its licence
// template read there (not the API extmetadata field, which has been shown to
// misreport licences elsewhere in this project): only CC0 / CC BY 2.0-4.0 /
// CC BY-SA 2.0-4.0 files with a named author or Commons username are used.
// Architects who died less than 70 years ago, or who are living, get an
// exterior-only image — Freedom of Panorama never reaches indoors. Two pairs
// share a city (Edificio Bacardí / Escuela de Artes Plásticas in Havana,
// ~11 km apart; Basílica de San Francisco / LUM in Lima, ~7.5 km apart) but
// are genuinely distinct sites, not curation duplicates.
// `image.width` / `image.height` are left at 0 for the later dimension pass.
//
// Ecuador (Milton Barragán, Templo de la Dolorosa) was researched and
// dropped: Ecuador's copyright code limits Freedom of Panorama to
// scientific/educational reproduction, Barragán died in 2024, and the only
// Commons file for the building turned out — on actually viewing the pixels,
// not trusting the automated description — to be an interior shot. See the
// task report for the full reasoning and the Dominican Republic/Haiti gaps.
export const AMERICAS_ANDEAN_BUILDINGS: Building[] = [
  {
    id: 'basilica-san-francisco-lima',
    wikidataId: 'Q2404214',
    name: {
      en: 'Basilica and Convent of San Francisco, Lima',
      es: 'Basílica y convento de San Francisco de Lima',
      it: 'Basilica e convento di San Francesco di Lima',
    },
    architectId: 'constantino-de-vasconcelos',
    location: { city: 'Lima', countryCode: 'PE', lat: -12.045497, lon: -77.027394 },
    inception: 1657,
    completed: 1672,
    demolished: null,
    typology: 'sacral',
    materials: ['stone', 'mixed'],
    structure: {
      en: "Low masonry walls and piers carry a nave roofed in bóvedas de quincha — vaults of cane and gypsum plaster on a timber armature rather than stone — chosen to withstand Lima's earthquakes.",
      es: 'Muros y pilares bajos de fábrica sostienen una nave cubierta con bóvedas de quincha —caña y yeso sobre armazón de madera, en lugar de piedra—, solución elegida para resistir los terremotos de Lima.',
      it: 'Muri e pilastri bassi in muratura reggono una navata coperta da bóvedas de quincha — volte di canna e gesso su armatura lignea anziché in pietra — soluzione scelta per resistere ai terremoti di Lima.',
    },
    program: {
      en: 'Rebuilt for the Franciscan order after the 1655 earthquake destroyed its earlier convent, the complex remains an active Franciscan church, convent and library.',
      es: 'Reconstruido para la orden franciscana tras el terremoto de 1655, que destruyó el convento anterior, el conjunto sigue siendo iglesia, convento y biblioteca franciscanos en activo.',
      it: 'Ricostruito per l’ordine francescano dopo che il terremoto del 1655 distrusse il convento precedente, il complesso resta chiesa, convento e biblioteca francescani attivi.',
    },
    heritage: 'unesco',
    currentUse: {
      en: 'Active Franciscan church and convent; the catacombs and historic library are open to visitors.',
      es: 'Iglesia y convento franciscanos en activo; las catacumbas y la biblioteca histórica están abiertas al público.',
      it: 'Chiesa e convento francescani attivi; le catacombe e la biblioteca storica sono aperte al pubblico.',
    },
    detailRect: { x: 0.35, y: 0.30, w: 0.30, h: 0.30 },
    image: {
      commonsFile: 'Iglesia de San Francisco, Lima, Perú, 2015-07-28, DD 70.jpg',
      photographer: 'Diego Delso',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Iglesia_de_San_Francisco,_Lima,_Per%C3%BA,_2015-07-28,_DD_70.jpg',
      width: 1600,
      height: 1025,
    },
    dossier: {
      en: "Vasconcelos drew the plans after the earthquake of 4 February 1655 flattened the Franciscans' earlier convent, and the master builder Manuel de Escobar ran the site while the architect worked from a plan meant above all to survive the next tremor. The cornerstone went in on 8 May 1657; the church was consecrated on 3 October 1672, four years after Vasconcelos died and never having seen it finished. His solution kept the masonry walls and piers low and roofed the nave in bóvedas de quincha — cane and gypsum plaster laid over a light timber armature rather than stone vaulting — a system that let the building ride out the earthquakes of 1687 and 1746 that brought down heavier vaults elsewhere in Lima. The twin-towered baroque façade, rebuilt after later damage, fronts a convent whose catacombs, an ossuary for an estimated 25,000 limeños, remain one of the city's most visited sites. The complex forms part of the Historic Centre of Lima, inscribed as a UNESCO World Heritage Site in 1991, and the Franciscan community still occupies the convent today.",
      es: 'Vasconcelos trazó los planos después de que el terremoto del 4 de febrero de 1655 derribara el convento franciscano anterior, mientras el maestro de obras Manuel de Escobar dirigía la obra sobre un proyecto pensado, ante todo, para resistir el próximo temblor. La primera piedra se puso el 8 de mayo de 1657; el templo se consagró el 3 de octubre de 1672, cuatro años después de la muerte de Vasconcelos, que nunca lo vio terminado. Su solución fue mantener bajos los muros y pilares de fábrica y cubrir la nave con bóvedas de quincha —caña y yeso sobre un liviano armazón de madera, en vez de bóveda de piedra—, sistema que permitió al edificio resistir los terremotos de 1687 y 1746, que arruinaron bóvedas más pesadas en otras partes de Lima. La fachada barroca de dos torres, reconstruida tras daños posteriores, antecede a un convento cuyas catacumbas, osario de unos 25.000 limeños, siguen siendo uno de los lugares más visitados de la ciudad. El conjunto forma parte del Centro Histórico de Lima, inscrito como Patrimonio Mundial de la Unesco en 1991, y la comunidad franciscana continúa ocupando el convento.',
      it: "Vasconcelos disegnò i piani dopo che il terremoto del 4 febbraio 1655 abbatté il precedente convento francescano, mentre il capomastro Manuel de Escobar dirigeva il cantiere di un progetto pensato, soprattutto, per resistere alla prossima scossa. La prima pietra fu posata l'8 maggio 1657; la chiesa fu consacrata il 3 ottobre 1672, quattro anni dopo la morte di Vasconcelos, che non la vide mai finita. La sua soluzione fu mantenere bassi i muri e i pilastri in muratura e coprire la navata con bóvedas de quincha — canna e gesso su una leggera armatura lignea, anziché volte in pietra — sistema che permise all'edificio di resistere ai terremoti del 1687 e del 1746, che distrussero volte più pesanti altrove a Lima. La facciata barocca a due torri, ricostruita dopo danni successivi, precede un convento le cui catacombe, ossario di circa 25.000 limegni, restano tra i luoghi più visitati della città. Il complesso fa parte del Centro Storico di Lima, iscritto come Patrimonio dell'Umanità dell'UNESCO nel 1991, e la comunità francescana occupa tuttora il convento.",
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q2404214', title: 'Monastery of San Francisco (Q2404214)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Basilica_and_Convent_of_San_Francisco,_Lima', title: 'Basilica and Convent of San Francisco, Lima', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
  {
    id: 'casa-moneda-potosi',
    wikidataId: 'Q847038',
    name: {
      en: 'National Mint of Bolivia',
      es: 'Casa de la Moneda de Bolivia',
      it: 'Zecca Nazionale della Bolivia',
    },
    architectId: 'salvador-de-villa',
    location: { city: 'Potosí', countryCode: 'BO', lat: -19.5886, lon: -65.7542 },
    inception: 1759,
    completed: 1773,
    demolished: null,
    typology: 'industrial',
    materials: ['stone', 'brick'],
    structure: {
      en: 'Dressed stone, river cobble and fine brick walls enclose five courtyards on a single fortress-like block, with timber-framed floors and roofs throughout the interior ranges.',
      es: 'Muros de piedra labrada, piedra bolona y ladrillo fino encierran cinco patios en una sola manzana de aire fortificado, con forjados y cubiertas de madera en las crujías interiores.',
      it: 'Muri in pietra squadrata, ciottolo di fiume e mattone fine racchiudono cinque cortili in un unico isolato dall’aspetto fortificato, con solai e coperture lignee nelle ali interne.',
    },
    program: {
      en: 'Built by the Spanish crown to strike coin for the Potosí mines, replacing an inadequate sixteenth-century mint on the same site.',
      es: 'Construida por la corona española para acuñar la plata de las minas de Potosí, en sustitución de una ceca del siglo XVI insuficiente en el mismo solar.',
      it: 'Costruita dalla corona spagnola per coniare l’argento delle miniere di Potosí, in sostituzione di una zecca cinquecentesca insufficiente sullo stesso sito.',
    },
    heritage: 'unesco',
    currentUse: {
      en: 'Museo Casa Nacional de Moneda, housing numismatic and colonial-art collections.',
      es: 'Museo Casa Nacional de Moneda, con colecciones numismáticas y de arte colonial.',
      it: 'Museo Casa Nacional de Moneda, con collezioni numismatiche e di arte coloniale.',
    },
    detailRect: { x: 0.40, y: 0.25, w: 0.28, h: 0.30 },
    image: {
      commonsFile: 'Casa Nacional de la Moneda, Potosí.jpg',
      photographer: 'Azulazul5',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Casa_Nacional_de_la_Moneda,_Potos%C3%AD.jpg',
      width: 1600,
      height: 1200,
    },
    dossier: {
      en: 'Local officials in Potosí, led by governor Ventura Santelices y Venero, wanted simply to enlarge the sixteenth-century mint that already stood on the site; Madrid overruled them, and Salvador de Villa arrived from a career spent building mints in Mexico City and Lima to start again from the foundations. Work ran from 1759 to 1773 across a single block of 7,570 square metres, producing roughly 15,000 square metres of building arranged around five courtyards and some two hundred rooms in dressed stone, river cobble and fine brick — a scale meant to match the wealth the Cerro Rico had poured through Potosí for two centuries. Villa died on site on 21 January 1764, four years into construction; his pupil Luis Cabello carried the work forward before handing it to Jaime San Just in 1765. The finished mint cost 1,148,452 pesos. It anchors the historic centre of Potosí, inscribed by UNESCO as a World Heritage Site in 1987, and today houses the numismatic and colonial-art collections of the Casa Nacional de Moneda museum.',
      es: 'Las autoridades de Potosí, encabezadas por el gobernador Ventura Santelices y Venero, querían simplemente ampliar la ceca del siglo XVI que ya ocupaba el solar; Madrid se impuso, y Salvador de Villa llegó tras una carrera dedicada a levantar casas de moneda en México y Lima para empezar de nuevo desde los cimientos. La obra corrió de 1759 a 1773 sobre una sola manzana de 7.570 metros cuadrados y produjo unos 15.000 metros cuadrados construidos en torno a cinco patios y cerca de doscientos ambientes, en piedra labrada, piedra bolona y ladrillo fino: una escala pensada para estar a la altura de la riqueza que el Cerro Rico había volcado sobre Potosí durante dos siglos. Villa murió en la obra el 21 de enero de 1764, a los cuatro años de faena; su discípulo Luis Cabello continuó el trabajo antes de traspasarlo a Jaime San Just en 1765. La ceca terminada costó 1.148.452 pesos. Hoy vertebra el centro histórico de Potosí, inscrito por la Unesco como Patrimonio Mundial en 1987, y alberga las colecciones numismáticas y de arte colonial del museo Casa Nacional de Moneda.',
      it: 'Le autorità di Potosí, guidate dal governatore Ventura Santelices y Venero, volevano semplicemente ampliare la zecca cinquecentesca già esistente sul sito; Madrid si impose, e Salvador de Villa giunse dopo una carriera dedicata a costruire zecche a Città del Messico e a Lima per ricominciare da zero, dalle fondamenta. Il cantiere andò dal 1759 al 1773 su un unico isolato di 7.570 metri quadrati e produsse circa 15.000 metri quadrati costruiti attorno a cinque cortili e a quasi duecento ambienti, in pietra squadrata, ciottolo di fiume e mattone fine: una scala pensata per essere all’altezza della ricchezza che il Cerro Rico aveva riversato su Potosí per due secoli. Villa morì in cantiere il 21 gennaio 1764, dopo quattro anni di lavori; il suo allievo Luis Cabello proseguì l’opera prima di consegnarla a Jaime San Just nel 1765. La zecca finita costò 1.148.452 pesos. Oggi è il fulcro del centro storico di Potosí, iscritto dall’UNESCO come Patrimonio dell’Umanità nel 1987, e ospita le collezioni numismatiche e di arte coloniale del museo Casa Nacional de Moneda.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q847038', title: 'National Mint of Bolivia (Q847038)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/National_Mint_of_Bolivia', title: 'National Mint of Bolivia', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
  {
    id: 'edificio-bacardi-havana',
    wikidataId: 'Q4838596',
    name: {
      en: 'Bacardí Building',
      es: 'Edificio Bacardí',
      it: 'Edificio Bacardí',
    },
    // Both Wikipedia infoboxes cited below (EN and ES) name multiple
    // architects for this building, and the dossier and architect portraits
    // already state this is a three-person credit in all three languages;
    // omitting coArchitects here would be exactly the attribution-erasure
    // Ruling 25 exists to prevent. Esteban Rodríguez Castells stays as
    // architectId (he's named first in the EN infobox, and EN body text
    // confirms he and Fernández Ruenes jointly won the design competition
    // and its prize); Fernández Ruenes and Menéndez are added here rather
    // than left invisible, per the ES infobox naming all three.
    architectId: 'esteban-rodriguez-castells',
    coArchitects: ['rafael-fernandez-ruenes', 'jose-menendez'],
    location: { city: 'Havana', countryCode: 'CU', lat: 23.1389, lon: -82.3571 },
    inception: 1929,
    completed: 1930,
    demolished: null,
    typology: 'commercial',
    materials: ['brick', 'stone', 'mixed'],
    structure: {
      en: 'A riveted steel frame with reinforced-concrete floor slabs carries twelve stepped-back storeys to a bronze-bat belvedere, the whole faced in red Bavarian granite, glazed terracotta and polychrome tile.',
      es: 'Un pórtico de acero remachado con losas de hormigón armado sostiene doce plantas escalonadas en retranqueo hasta un templete rematado por el murciélago de bronce, todo revestido en granito rojo de Baviera, terracota vidriada y azulejo policromo.',
      it: 'Un telaio d’acciaio chiodato con solai in cemento armato regge dodici piani arretrati a gradoni fino a un tempietto sormontato dal pipistrello di bronzo, il tutto rivestito in granito rosso di Baviera, terracotta invetriata e piastrella policroma.',
    },
    program: {
      en: 'Commissioned by Bacardí S.A. as a corporate headquarters and emblem, it now serves as an administrative building for the Office of the Historian of Havana.',
      es: 'Encargado por Bacardí S.A. como sede y emblema corporativo, funciona hoy como edificio administrativo de la Oficina del Historiador de La Habana.',
      it: 'Commissionato dalla Bacardí S.A. come sede ed emblema aziendale, funge oggi da edificio amministrativo dell’Ufficio dello Storico dell’Avana.',
    },
    heritage: 'unesco',
    currentUse: {
      en: 'Administrative offices for the Office of the Historian of Havana, following restoration in the late 1990s.',
      es: 'Oficinas administrativas de la Oficina del Historiador de La Habana, tras su restauración a finales de los años noventa.',
      it: 'Uffici amministrativi dell’Ufficio dello Storico dell’Avana, dopo il restauro della fine degli anni Novanta.',
    },
    detailRect: { x: 0.38, y: 0.05, w: 0.28, h: 0.30 },
    image: {
      commonsFile: 'Edificio Bacardí, La Habana, Cuba.jpg',
      photographer: 'Scmresearcher',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Edificio_Bacard%C3%AD,_La_Habana,_Cuba.jpg',
      width: 1200,
      height: 1600,
    },
    dossier: {
      en: 'Bacardí S.A. wanted a headquarters that would double as a corporate emblem, and the young trio of Esteban Rodríguez Castells, Rafael Fernández Ruenes and José Menéndez delivered the fullest statement of Art Deco architecture in Cuba. A riveted steel frame carries twelve storeys and roughly 44 metres, stepped back in successive setbacks until the mass narrows to a belvedere holding the company\'s bronze bat, the emblem it took as its trademark in 1862. The cladding is a deliberate catalogue of imported material assembled through the port a few blocks away: red granite from Bavaria, glazed terracotta, pressed brick and polychrome tile, with twenty-one varieties of marble inside from Italy, the United States and Spain. Construction ran through 1930 on a site within the old city walls, finishing that December as briefly the tallest building in Havana. Nationalised after 1960, the tower fell into disrepair before a restoration in the late 1990s returned it to use as an administrative building for the Office of the Historian of Havana. It stands within Old Havana and its Fortification System, inscribed by UNESCO in 1982.',
      es: 'Bacardí S.A. quería una sede que funcionara también como emblema corporativo, y el joven trío formado por Esteban Rodríguez Castells, Rafael Fernández Ruenes y José Menéndez entregó la formulación más completa del art déco en Cuba. Un pórtico de acero remachado sostiene doce plantas y unos 44 metros, retranqueados en escalonamientos sucesivos hasta que la masa se estrecha en un templete que sostiene el murciélago de bronce, emblema que la compañía adoptó en 1862. El revestimiento es un catálogo deliberado de materiales importados a través del puerto, a pocas manzanas de allí: granito rojo de Baviera, terracota vidriada, ladrillo prensado y azulejo policromo, con veintiún variedades de mármol en el interior procedentes de Italia, Estados Unidos y España. La obra se desarrolló a lo largo de 1930 sobre un solar dentro de las antiguas murallas, y terminó en diciembre como el edificio más alto de La Habana, aunque brevemente. Nacionalizada tras 1960, la torre se deterioró hasta que una restauración de finales de los noventa la devolvió al uso como sede administrativa de la Oficina del Historiador de La Habana. Se alza dentro de La Habana Vieja y su sistema de fortificaciones, inscrito por la Unesco en 1982.',
      it: 'La Bacardí S.A. voleva una sede che fungesse anche da emblema aziendale, e il giovane terzetto composto da Esteban Rodríguez Castells, Rafael Fernández Ruenes e José Menéndez consegnò la formulazione più compiuta dell’Art Déco a Cuba. Un telaio d’acciaio chiodato regge dodici piani e circa 44 metri, arretrati in gradoni successivi finché la massa si restringe in un tempietto che sorregge il pipistrello di bronzo, l’emblema adottato dall’azienda nel 1862. Il rivestimento è un catalogo voluto di materiali importati attraverso il porto, a poche vie di distanza: granito rosso di Baviera, terracotta invetriata, mattone pressato e piastrella policroma, con ventuno varietà di marmo all’interno provenienti da Italia, Stati Uniti e Spagna. Il cantiere si svolse nel corso del 1930 su un lotto entro le antiche mura, e si concluse a dicembre come l’edificio più alto dell’Avana, sia pure per poco. Nazionalizzata dopo il 1960, la torre decadde finché un restauro di fine anni Novanta la restituì all’uso come sede amministrativa dell’Ufficio dello Storico dell’Avana. Sorge entro L’Avana Vecchia e il suo sistema di fortificazioni, iscritto dall’UNESCO nel 1982.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q4838596', title: 'Bacardi Building (Havana) (Q4838596)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Bacardi_Building_(Havana)', title: 'Bacardi Building (Havana)', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://es.wikipedia.org/wiki/Edificio_Bacard%C3%AD_(La_Habana)', title: 'Edificio Bacardí (La Habana)', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
  {
    id: 'capitolio-puerto-rico',
    wikidataId: 'Q4212987',
    name: {
      en: 'Capitol of Puerto Rico',
      es: 'Capitolio de Puerto Rico',
      it: 'Campidoglio di Porto Rico',
    },
    architectId: 'rafael-carmoega',
    location: { city: 'San Juan', countryCode: 'PR', lat: 18.4667, lon: -66.1058 },
    inception: 1921,
    completed: 1929,
    demolished: null,
    typology: 'civic',
    materials: ['stone', 'concrete'],
    structure: {
      en: 'A concrete and steel frame faced entirely in white Georgia marble carries a double-shelled dome on an octagonal pendentive base, modelled respectively after the Pantheon and Hagia Sophia.',
      es: 'Una estructura de hormigón y acero revestida por completo en mármol blanco de Georgia sostiene una cúpula de doble cascarón sobre una base de pechinas octogonal, inspirada respectivamente en el Panteón y en Santa Sofía.',
      it: 'Una struttura in cemento e acciaio, interamente rivestita in marmo bianco della Georgia, regge una cupola a doppio guscio su una base ottagonale a pennacchi, ispirata rispettivamente al Pantheon e a Santa Sofia.',
    },
    program: {
      en: "Built by the Puerto Rico Department of the Interior as the seat of the island's legislature, a government commission Carmoega inherited unfinished and completed.",
      es: 'Construido por el Departamento del Interior de Puerto Rico como sede de la legislatura insular, un encargo público que Carmoega heredó sin terminar y llevó a término.',
      it: 'Costruito dal Dipartimento degli Interni di Porto Rico come sede della legislatura dell’isola, una commissione pubblica che Carmoega ereditò incompiuta e portò a termine.',
    },
    heritage: 'national',
    currentUse: {
      en: "Still the working seat of Puerto Rico's Legislative Assembly.",
      es: 'Sigue siendo la sede en funciones de la Asamblea Legislativa de Puerto Rico.',
      it: 'È tuttora la sede in funzione dell’Assemblea Legislativa di Porto Rico.',
    },
    detailRect: { x: 0.32, y: 0.20, w: 0.32, h: 0.28 },
    image: {
      commonsFile: 'El Capitolio de Puerto Rico.jpg',
      photographer: 'Nheitjan',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:El_Capitolio_de_Puerto_Rico.jpg',
      width: 1600,
      height: 1089,
    },
    dossier: {
      en: "An international competition of 1907 gave the commission to the New York architect Frank Perkins, whose scheme, revised with Adrian Finlayson, proved troubled and slow; when Rafael Carmoega became Puerto Rico's first native State Architect in 1921, he inherited a half-built Capitol and set about finishing it as a neoclassical statement in white marble shipped from Georgia. The building was inaugurated on 11 February 1929, its double-shelled dome raised on an octagonal base of pendentives — a construction device borrowed from Hagia Sophia to carry a silhouette modelled on the Pantheon — though the dome's lantern and much of the interior ornament were not finished until 1961. Twenty-one varieties of marble, from Italy, the mainland United States and Spain, line an interior whose murals and mosaics by Rafael Ríos Rey, José Oliver, Jorge Rechani and Rafael Tufiño narrate Puerto Rican history under an American territorial administration that was, at the same moment, writing its own institutions into the island's stone. Listed on the National Register of Historic Places in 1977, the Capitol remains the working seat of the Senate and House of Representatives.",
      es: 'Un concurso internacional de 1907 dio el encargo al arquitecto neoyorquino Frank Perkins, cuyo proyecto, revisado con Adrian Finlayson, resultó problemático y lento; cuando Rafael Carmoega se convirtió en 1921 en el primer arquitecto del Estado nacido en Puerto Rico, heredó un Capitolio a medio construir y se dispuso a rematarlo como una declaración neoclásica en mármol blanco traído de Georgia. El edificio se inauguró el 11 de febrero de 1929, con una cúpula de doble cascarón alzada sobre una base octogonal de pechinas —un recurso constructivo tomado de Santa Sofía para sostener una silueta inspirada en el Panteón—, aunque la linterna de la cúpula y buena parte de la ornamentación interior no se completaron hasta 1961. Veintiuna variedades de mármol, de Italia, Estados Unidos continental y España, revisten un interior cuyos murales y mosaicos de Rafael Ríos Rey, José Oliver, Jorge Rechani y Rafael Tufiño narran la historia puertorriqueña bajo una administración territorial estadounidense que, por esos mismos años, inscribía sus propias instituciones en la piedra de la isla. Declarado en el Registro Nacional de Lugares Históricos en 1977, el Capitolio sigue siendo la sede en funciones del Senado y la Cámara de Representantes.',
      it: 'Un concorso internazionale del 1907 assegnò l’incarico all’architetto newyorkese Frank Perkins, il cui progetto, rivisto con Adrian Finlayson, si rivelò problematico e lento; quando nel 1921 Rafael Carmoega divenne il primo architetto di Stato nato a Porto Rico, ereditò un Campidoglio a metà costruzione e si mise a completarlo come dichiarazione neoclassica in marmo bianco importato dalla Georgia. L’edificio fu inaugurato l’11 febbraio 1929, con una cupola a doppio guscio innalzata su una base ottagonale a pennacchi — un espediente costruttivo mutuato da Santa Sofia per sostenere una sagoma ispirata al Pantheon — sebbene la lanterna della cupola e buona parte della decorazione interna non furono completate fino al 1961. Ventuno varietà di marmo, provenienti da Italia, Stati Uniti continentali e Spagna, rivestono un interno i cui murales e mosaici di Rafael Ríos Rey, José Oliver, Jorge Rechani e Rafael Tufiño narrano la storia portoricana sotto un’amministrazione territoriale statunitense che, in quegli stessi anni, iscriveva le proprie istituzioni nella pietra dell’isola. Dichiarato nel Registro Nazionale dei Luoghi Storici nel 1977, il Campidoglio resta la sede in funzione del Senato e della Camera dei Rappresentanti.',
    },
    context: {
      body: {
        en: "Puerto Rico has been an unincorporated territory of the United States since 1898, a status the Supreme Court's Insular Cases (1901–1905) held meant the Constitution applied only in part. The Capitol was commissioned in 1921 and completed in 1929 under the Foraker Act's insular government of elected Puerto Rican delegates and appointed American officials — Rafael Carmoega's first years as State Architect. Puerto Ricans had held US citizenship since the Jones–Shafroth Act of 1917, but neither then nor since have the island's residents held a vote in US presidential elections or voting representation in Congress; Puerto Rico sends one non-voting Resident Commissioner to the House of Representatives. That status — unincorporated territory rather than state — has remained unchanged through Puerto Rico's 1952 constitution and to the present day.",
        es: 'Puerto Rico es territorio no incorporado de los Estados Unidos desde 1898, condición que los llamados Insular Cases del Tribunal Supremo (1901-1905) interpretaron en el sentido de que la Constitución solo se aplicaba parcialmente. El Capitolio se encargó en 1921 y se terminó en 1929 bajo el gobierno insular de la Ley Foraker, con delegados puertorriqueños electos y funcionarios estadounidenses designados —los primeros años de Rafael Carmoega como Arquitecto del Estado—. Los puertorriqueños tenían la ciudadanía estadounidense desde la Ley Jones-Shafroth de 1917, pero ni entonces ni después han tenido voto en las elecciones presidenciales de Estados Unidos ni representación con voto en el Congreso; la isla envía un Comisionado Residente sin voto a la Cámara de Representantes. Esa condición de territorio no incorporado, y no de estado, se ha mantenido sin cambios a través de la constitución de 1952 de Puerto Rico y hasta hoy.',
        it: "Porto Rico è territorio non incorporato degli Stati Uniti dal 1898, condizione che i cosiddetti Insular Cases della Corte Suprema (1901-1905) interpretarono nel senso che la Costituzione si applicasse solo in parte. Il Campidoglio fu commissionato nel 1921 e completato nel 1929 sotto il governo insulare della Foraker Act, con delegati portoricani eletti e funzionari statunitensi nominati — i primi anni di Rafael Carmoega come Architetto di Stato. I portoricani avevano la cittadinanza statunitense dal Jones-Shafroth Act del 1917, ma né allora né in seguito i residenti dell'isola hanno avuto voto alle elezioni presidenziali statunitensi né rappresentanza con diritto di voto al Congresso; Porto Rico invia alla Camera dei Rappresentanti un Commissario Residente senza diritto di voto. Questa condizione di territorio non incorporato, anziché di stato, è rimasta invariata attraverso la costituzione portoricana del 1952 e fino a oggi.",
      },
      sources: [
        { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Political_status_of_Puerto_Rico', title: 'Political status of Puerto Rico', license: 'CC BY-SA 4.0' },
      ],
    },
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q4212987', title: 'Capitol of Puerto Rico (Q4212987)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Capitol_of_Puerto_Rico', title: 'Capitol of Puerto Rico', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
  {
    id: 'escuela-artes-plasticas-havana',
    // No dedicated Wikidata entity exists for this specific building. Q6970485
    // is the whole National Art Schools complex, typed as a university, and
    // does not distinguish Porro's School of Plastic Arts from the separate
    // schools designed by his co-architects Roberto Gottardi and Vittorio
    // Garatti — using it here would misattribute a different author's work.
    wikidataId: '',
    name: {
      en: 'National Art Schools (School of Plastic Arts)',
      es: 'Escuelas Nacionales de Arte (Escuela de Artes Plásticas)',
      it: 'Scuole Nazionali d’Arte (Scuola di Arti Plastiche)',
    },
    architectId: 'ricardo-porro',
    location: { city: 'Havana', countryCode: 'CU', lat: 23.0881, lon: -82.4481 },
    inception: 1961,
    completed: 1965,
    demolished: null,
    typology: 'educational',
    materials: ['brick', 'mixed'],
    structure: {
      en: 'Catalan-vault domes and barrel vaults of brick and terracotta tile span the oval studios without steel reinforcement, a technique adopted after the US embargo made imported concrete and rebar prohibitively expensive.',
      es: 'Cúpulas y bóvedas de cañón a la catalana, de ladrillo y baldosa de barro, cubren los talleres ovales sin armadura de acero, técnica adoptada después de que el embargo estadounidense encareciera el hormigón y el acero de importación.',
      it: 'Cupole e volte a botte alla catalana, in mattone e piastrella di terracotta, coprono gli atelier ovali senza armatura d’acciaio, tecnica adottata dopo che l’embargo statunitense rese proibitivi il cemento e il tondino d’importazione.',
    },
    program: {
      en: "Commissioned by Fidel Castro on the grounds of the former Havana Country Club to give the revolution's new art school a building of its own.",
      es: 'Encargada por Fidel Castro en los terrenos del antiguo Country Club de La Habana, para dar a la nueva escuela de arte de la revolución un edificio propio.',
      it: 'Commissionata da Fidel Castro nei terreni dell’ex Country Club dell’Avana, per dare alla nuova scuola d’arte della rivoluzione un edificio proprio.',
    },
    heritage: 'national',
    currentUse: {
      en: 'Restored in part since the 2000s and used intermittently for art instruction and cultural events; declared a National Monument of Cuba in 2010.',
      es: 'Restaurada en parte desde la década de 2000 y usada de forma intermitente para la enseñanza artística y actos culturales; declarada Monumento Nacional de Cuba en 2010.',
      it: 'Restaurata in parte dagli anni 2000 e utilizzata a intermittenza per l’insegnamento artistico ed eventi culturali; dichiarata Monumento Nazionale di Cuba nel 2010.',
    },
    detailRect: { x: 0.30, y: 0.35, w: 0.30, h: 0.28 },
    image: {
      commonsFile: 'Loomis school plastic arts.jpg',
      photographer: 'John Loomis',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Loomis_school_plastic_arts.jpg',
      width: 1000,
      height: 676,
    },
    dossier: {
      en: 'Fidel Castro chose the site himself, playing golf across the abandoned Havana Country Club with Che Guevara in 1961, and handed the commission for a national art school to three architects in their thirties: the Cuban Ricardo Porro and the Italians Roberto Gottardi and Vittorio Garatti. Porro took the Schools of Plastic Arts and Modern Dance, and set them against the International Style, which he read as an architecture of imported capital; the US embargo, which made steel and Portland cement suddenly expensive, pushed the whole project toward brick, terracotta tile and the Catalan vault, a masonry technique that let domes and barrel vaults span without reinforcement. The School of Plastic Arts is arranged as an archetypal African village — a string of oval, top-lit studios threaded along curving colonnades — a form Porro drew from Yoruba settlement patterns and his own reading of Afro-Cuban culture. Political favour turned against the schools within years, construction stopped unfinished, and Porro left Cuba in 1966. Left to decay for decades, the complex was declared a National Monument in 2010 and has since seen partial restoration and renewed use for art instruction.',
      es: 'El propio Fidel Castro eligió el emplazamiento, jugando al golf en el abandonado Havana Country Club junto al Che Guevara en 1961, y encargó una escuela nacional de arte a tres arquitectos treintañeros: el cubano Ricardo Porro y los italianos Roberto Gottardi y Vittorio Garatti. Porro se hizo cargo de las Escuelas de Artes Plásticas y de Danza Moderna, y planteó la obra contra el estilo internacional, que leía como arquitectura de capital importado; el embargo estadounidense, que encareció de golpe el acero y el cemento portland, empujó todo el proyecto hacia el ladrillo, la baldosa de barro y la bóveda catalana, técnica que cubre cúpulas y bóvedas de cañón sin armadura. La Escuela de Artes Plásticas se ordena como una aldea africana arquetípica —una hilera de talleres ovales con lucernario, ensartados en galerías curvas—, forma que Porro tomó de los asentamientos yoruba y de la cultura afrocubana. El favor político se retiró de las escuelas en pocos años, la obra quedó inconclusa y Porro salió de Cuba en 1966. Abandonado durante décadas, el conjunto fue declarado Monumento Nacional en 2010 y desde entonces ha visto una restauración parcial y un uso renovado para la enseñanza artística.',
      it: 'Fu lo stesso Fidel Castro a scegliere il sito, giocando a golf nell’abbandonato Havana Country Club insieme al Che Guevara nel 1961, e affidò l’incarico di una scuola nazionale d’arte a tre architetti sui trent’anni: il cubano Ricardo Porro e gli italiani Roberto Gottardi e Vittorio Garatti. Porro si occupò delle Scuole di Arti Plastiche e di Danza Moderna, e impostò l’opera contro lo Stile Internazionale, che leggeva come architettura del capitale importato; l’embargo statunitense, che rese improvvisamente costosi l’acciaio e il cemento Portland, spinse l’intero progetto verso il mattone, la piastrella di terracotta e la volta catalana, tecnica muraria che consente di coprire cupole e volte a botte senza armatura. La Scuola di Arti Plastiche è ordinata come un villaggio africano archetipico — una fila di atelier ovali con lucernario, infilati su gallerie curve —, forma che Porro trasse dagli insediamenti yoruba e dalla propria lettura della cultura afrocubana. Il favore politico si ritirò dalle scuole in pochi anni, i lavori restarono incompiuti e Porro lasciò Cuba nel 1966. Abbandonato per decenni, il complesso fu dichiarato Monumento Nazionale nel 2010 e da allora ha conosciuto un restauro parziale e un uso rinnovato per l’insegnamento artistico.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q6970485', title: 'National Art Schools (Cuba) (Q6970485)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/National_Art_Schools_(Cuba)', title: 'National Art Schools (Cuba)', license: 'CC BY-SA 4.0' },
      { kind: 'publication', url: 'https://www.wmf.org/project/national-art-schools', title: 'National Art Schools — World Monuments Fund', license: null },
    ],
    tier: 'canon',
  },
  {
    id: 'aula-magna-ucv-caracas',
    wikidataId: 'Q5711801',
    name: {
      en: 'Aula Magna, Central University of Venezuela',
      es: 'Aula Magna de la Universidad Central de Venezuela',
      it: 'Aula Magna dell’Università Centrale del Venezuela',
    },
    architectId: 'carlos-raul-villanueva',
    location: { city: 'Caracas', countryCode: 'VE', lat: 10.49083, lon: -66.89056 },
    inception: 1952,
    completed: 1953,
    demolished: null,
    typology: 'cultural',
    materials: ['concrete', 'mixed'],
    structure: {
      en: "A quarter-circle concrete hall with a 43-metre exterior roof truss holds thirty-one suspended 'cloud' panels — steel-framed laminated wood designed with Alexander Calder — that double as ceiling sculpture and acoustic reflectors.",
      es: "Una sala de planta en cuarto de círculo, con una cercha exterior de 43 metros, sostiene treinta y una 'nubes' suspendidas —paneles de madera laminada sobre bastidor de acero, diseñados con Alexander Calder— que funcionan a la vez como escultura de techo y reflectores acústicos.",
      it: "Una sala a pianta di quarto di cerchio, con una capriata esterna di 43 metri, regge trentuno 'nuvole' sospese — pannelli di legno lamellare su telaio d’acciaio, progettati con Alexander Calder — che fungono insieme da scultura del soffitto e riflettori acustici.",
    },
    program: {
      en: "Built for the Universidad Central de Venezuela as its principal hall for graduations, concerts and assemblies, within Villanueva's Ciudad Universitaria campus.",
      es: 'Construida para la Universidad Central de Venezuela como su sala principal de graduaciones, conciertos y actos, dentro del campus de la Ciudad Universitaria de Villanueva.',
      it: 'Costruita per l’Universidad Central de Venezuela come sala principale per lauree, concerti e assemblee, all’interno del campus della Ciudad Universitaria di Villanueva.',
    },
    heritage: 'unesco',
    currentUse: {
      en: "Still the university's main auditorium, seating up to 2,700 for graduations, concerts and public events.",
      es: 'Sigue siendo el auditorio principal de la universidad, con capacidad para 2.700 personas en graduaciones, conciertos y actos públicos.',
      it: 'È tuttora l’auditorium principale dell’università, con una capienza fino a 2.700 posti per lauree, concerti ed eventi pubblici.',
    },
    detailRect: { x: 0.30, y: 0.30, w: 0.30, h: 0.28 },
    image: {
      commonsFile: 'Aula Magna UCV Caracas Venezuela 28.09.2023 (1).jpg',
      photographer: 'Warairarepano&Guaicaipuro',
      license: 'CC0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Aula_Magna_UCV_Caracas_Venezuela_28.09.2023_(1).jpg',
      width: 1200,
      height: 1600,
    },
    dossier: {
      en: "From 1944 Villanueva devoted himself to the Ciudad Universitaria de Caracas, and the Aula Magna is where his idea of a síntesis de las artes is most complete. The Danish contractor Christiani & Nielsen built the hall in 1952–53 to a quarter-circle plan borrowed from Greco-Roman theatre, its stage end open to a 43-metre exterior truss. The acoustic problem of a room that size was solved by inviting Alexander Calder to design thirty-one 'clouds' — steel-framed panels of laminated wood, suspended on cable at calculated angles — that absorb and redirect sound while reading, from the seats, as a work of kinetic sculpture hung directly over the audience. Specially profiled doors, a folded timber canopy over the stage and perforated seat upholstery complete the acoustic design. The hall seats around 2,700 and remains the university's principal venue for graduations, concerts, lectures and, at times, political assembly. It forms the ceremonial heart of the Ciudad Universitaria, which UNESCO inscribed as a World Heritage Site on 30 November 2000 for its integration of modern architecture, engineering and the visual arts.",
      es: "Desde 1944 Villanueva se volcó en la Ciudad Universitaria de Caracas, y el Aula Magna es donde su idea de síntesis de las artes se cumple con mayor plenitud. La contratista danesa Christiani & Nielsen construyó la sala en 1952-53 sobre una planta en cuarto de círculo tomada del teatro grecorromano, con el extremo del escenario abierto a una cercha exterior de 43 metros. El problema acústico de una sala de ese tamaño se resolvió invitando a Alexander Calder a diseñar treinta y una 'nubes' —paneles de madera laminada sobre bastidor de acero, suspendidos de cables en ángulos calculados— que absorben y redirigen el sonido mientras se leen, desde las butacas, como una escultura cinética suspendida sobre el público. Puertas de perfil especial, un dosel de madera plegada sobre el escenario y tapicería perforada en los asientos completan el diseño acústico. La sala tiene aforo para unas 2.700 personas y sigue siendo el escenario principal de la universidad para graduaciones, conciertos, conferencias y, en ocasiones, actos políticos. Es el corazón ceremonial de la Ciudad Universitaria, que la Unesco inscribió como Patrimonio Mundial el 30 de noviembre de 2000 por su integración de arquitectura moderna, ingeniería y artes visuales.",
      it: "Dal 1944 Villanueva si dedicò alla Ciudad Universitaria di Caracas, e l’Aula Magna è dove la sua idea di síntesis de las artes si compie più pienamente. L’impresa danese Christiani & Nielsen costruì la sala nel 1952-53 su una pianta a quarto di cerchio mutuata dal teatro greco-romano, con il lato del palco aperto su una capriata esterna di 43 metri. Il problema acustico di una sala di quelle dimensioni fu risolto invitando Alexander Calder a disegnare trentuno 'nuvole' — pannelli di legno lamellare su telaio d’acciaio, sospesi a cavi con angolazioni calcolate — che assorbono e ridirigono il suono pur leggendosi, dalle poltrone, come una scultura cinetica sospesa sul pubblico. Porte dal profilo speciale, un baldacchino ligneo pieghettato sopra il palco e sedute imbottite perforate completano il progetto acustico. La sala ha una capienza di circa 2.700 posti e resta la sede principale dell’università per lauree, concerti, conferenze e, talvolta, assemblee politiche. È il cuore cerimoniale della Ciudad Universitaria, che l’UNESCO iscrisse come Patrimonio dell’Umanità il 30 novembre 2000 per la sua integrazione di architettura moderna, ingegneria e arti visive.",
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q5711801', title: 'Aula Magna (Q5711801)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Aula_Magna_(Central_University_of_Venezuela)', title: 'Aula Magna (Central University of Venezuela)', license: 'CC BY-SA 4.0' },
      { kind: 'institution', url: 'https://whc.unesco.org/en/list/986/', title: 'Ciudad Universitaria de Caracas — UNESCO World Heritage Centre', license: null },
    ],
    tier: 'canon',
  },
  {
    id: 'torres-del-parque-bogota',
    wikidataId: 'Q9089120',
    name: {
      en: 'Torres del Parque',
      es: 'Torres del Parque',
      it: 'Torres del Parque',
    },
    architectId: 'rogelio-salmona',
    location: { city: 'Bogotá', countryCode: 'CO', lat: 4.6135, lon: -74.0674 },
    inception: 1965,
    completed: 1970,
    demolished: null,
    typology: 'housing',
    materials: ['brick', 'concrete'],
    structure: {
      en: 'A reinforced-concrete frame is wrapped entirely in exposed fired brick, its three towers curved in plan to echo the adjoining bullring and linked by ramps, external stairs and terraces rather than enclosed corridors.',
      es: 'Una estructura de hormigón armado se envuelve por completo en ladrillo cocido visto; sus tres torres, curvas en planta para hacer eco de la plaza de toros contigua, se enlazan mediante rampas, escaleras exteriores y terrazas en lugar de pasillos cerrados.',
      it: 'Una struttura in cemento armato è avvolta interamente in mattone cotto a vista; le sue tre torri, curve in pianta per fare eco alla vicina plaza de toros, sono collegate da rampe, scale esterne e terrazze anziché corridoi chiusi.',
    },
    program: {
      en: 'Built as a private residential complex of 294 apartments around the Plaza de Toros de Santamaría and Parque de la Independencia.',
      es: 'Construido como complejo residencial privado de 294 apartamentos en torno a la Plaza de Toros de Santamaría y el Parque de la Independencia.',
      it: 'Costruito come complesso residenziale privato di 294 appartamenti attorno alla Plaza de Toros de Santamaría e al Parque de la Independencia.',
    },
    heritage: 'national',
    currentUse: {
      en: 'In continuous residential use, with three-quarters of the site kept as gardens and public plazas.',
      es: 'En uso residencial continuo, con tres cuartas partes del solar reservadas a jardines y plazas públicas.',
      it: 'In uso residenziale continuativo, con tre quarti del lotto riservati a giardini e piazze pubbliche.',
    },
    detailRect: { x: 0.32, y: 0.28, w: 0.30, h: 0.30 },
    image: {
      commonsFile: 'Bogotá Torres del Parque A & B.JPG',
      photographer: 'Felipe Restrepo Acosta',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bogot%C3%A1_Torres_del_Parque_A_%26_B.JPG',
      width: 1200,
      height: 1600,
    },
    dossier: {
      en: "Salmona had spent nine years in Le Corbusier's Paris atelier before returning to Bogotá in 1958, and Torres del Parque, designed with the engineer Domenico Parma and the architect Urbano Ripoll, is the project where he broke most decisively with what he had learned there. Construction began in May 1968 on a site beside the Plaza de Toros de Santamaría, whose circular mass the three towers curve around and echo, their silhouette also answering the line of Bogotá's eastern hills. Salmona chose fired brick over concrete or glass for reasons he stated in plain terms: it is made from clay, it employs many hands, its colour shifts through the day, and brick architecture sits naturally beside vegetation. Ramps, spiral stairs and open terraces do the work that corridors and elevators do elsewhere, treating circulation as inhabited space rather than leftover space, and three-quarters of the 4.3-hectare site remains garden and plaza rather than building footprint. Completed in 1970 with 294 apartments across the three blocks, it was declared a National Monument of Colombia and stands as the clearest founding statement of what critics later called Bogotano brick architecture.",
      es: 'Salmona había pasado nueve años en el taller parisino de Le Corbusier antes de volver a Bogotá en 1958, y Torres del Parque, proyectada con el ingeniero Domenico Parma y el arquitecto Urbano Ripoll, es la obra en que rompió más decididamente con lo aprendido allí. La construcción comenzó en mayo de 1968 junto a la Plaza de Toros de Santamaría, cuya masa circular las tres torres bordean y repiten en su silueta, que responde también a la línea de los cerros orientales de Bogotá. Salmona eligió el ladrillo cocido frente al hormigón o el vidrio por razones que enunció sin rodeos: se hace con barro, emplea a mucha gente, su color cambia con la luz del día, y la arquitectura de ladrillo convive bien con la vegetación. Rampas, escaleras de caracol y terrazas abiertas cumplen la función de pasillos y ascensores, y tres cuartas partes del solar de 4,3 hectáreas siguen siendo jardín y plaza en lugar de huella construida. Terminada en 1970 con 294 apartamentos repartidos en los tres bloques, fue declarada Monumento Nacional de Colombia y es la afirmación fundacional más clara de lo que la crítica llamaría después arquitectura bogotana en ladrillo.',
      it: 'Salmona aveva trascorso nove anni nell’atelier parigino di Le Corbusier prima di tornare a Bogotá nel 1958, e Torres del Parque, progettata con l’ingegnere Domenico Parma e l’architetto Urbano Ripoll, è l’opera in cui ruppe più decisamente con quanto vi aveva appreso. Il cantiere iniziò nel maggio 1968 accanto alla Plaza de Toros de Santamaría, la cui massa circolare le tre torri assecondano e ripetono nella sagoma, che risponde anche alla linea dei colli orientali di Bogotá. Salmona scelse il mattone cotto rispetto al cemento o al vetro per ragioni che enunciò senza giri di parole: si fa con l’argilla, impiega molte mani, il suo colore cambia con la luce del giorno, e l’architettura in mattone convive bene con la vegetazione. Rampe, scale a chiocciola e terrazze aperte svolgono la funzione che altrove spetta a corridoi e ascensori, trattando la circolazione come spazio abitato e non come residuo, e tre quarti del lotto di 4,3 ettari restano giardino e piazza anziché impronta costruita. Completata nel 1970 con 294 appartamenti distribuiti nei tre blocchi, fu dichiarata Monumento Nazionale della Colombia ed è l’affermazione fondativa più chiara di quella che la critica avrebbe poi chiamato architettura bogotana in mattone.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q9089120', title: 'Torres del Parque (Q9089120)', license: null },
      { kind: 'wikipedia', url: 'https://es.wikipedia.org/wiki/Torres_del_Parque', title: 'Torres del Parque', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
  {
    id: 'coliseo-el-pueblo-cali',
    wikidataId: 'Q976776',
    name: {
      en: 'Coliseo El Pueblo',
      es: 'Coliseo El Pueblo',
      it: 'Coliseo El Pueblo',
    },
    // architectId keeps Yusti — the record is genuinely symmetric (she and
    // Richardson co-founded and jointly ran Richardson y Yusti, and es.wiki's
    // own Libia Yusti article treats them as equal partners with no stated
    // hierarchy), so either name is defensible and this is not a quota call.
    // Richardson is added via coArchitects rather than left invisible: the
    // Coliseo El Pueblo article itself names him first ("Diseñado por el
    // arquitecto colombiano Pedro Enrique Richardson Saravia, del estudio
    // Richardson y Yusti (junto con Libia Yusti)"), so omitting him here
    // would be the exact attribution-erasure this project's own Ruling 25
    // exists to avoid.
    architectId: 'libia-yusti',
    coArchitects: ['enrique-richardson'],
    location: { city: 'Cali', countryCode: 'CO', lat: 3.4134, lon: -76.5519 },
    inception: 1969,
    completed: 1971,
    demolished: null,
    typology: 'civic',
    materials: ['concrete'],
    structure: {
      en: 'A reinforced-concrete frame carries a wide-span roof over a sunken bowl of tiered seating, engineered by Harold Arzayús to clear 12,000 unobstructed seats without interior columns.',
      es: 'Una estructura de hormigón armado sostiene una cubierta de gran luz sobre una cuenca hundida de gradas, calculada por Harold Arzayús para liberar 12.000 asientos sin columnas interiores.',
      it: 'Una struttura in cemento armato regge una copertura a grande luce su una conca ribassata di gradinate, calcolata da Harold Arzayús per liberare 12.000 posti senza colonne interne.',
    },
    program: {
      en: 'Built by the city of Cali as one of the main venues for the VI Pan American Games of 1971.',
      es: 'Construido por la ciudad de Cali como uno de los principales escenarios de los VI Juegos Panamericanos de 1971.',
      it: 'Costruito dalla città di Cali come uno dei principali impianti dei VI Giochi Panamericani del 1971.',
    },
    heritage: 'none',
    currentUse: {
      en: "Still an active indoor-sports arena, also used for concerts, under the city's Secretariat of Sport.",
      es: 'Sigue siendo un coliseo deportivo activo, usado también para conciertos, bajo la Secretaría de Deporte de la ciudad.',
      it: 'È tuttora un palazzetto sportivo attivo, utilizzato anche per concerti, sotto la Segreteria dello Sport della città.',
    },
    detailRect: { x: 0.30, y: 0.35, w: 0.28, h: 0.28 },
    image: {
      commonsFile: 'Coliseo El Pueblo - Cali.JPG',
      photographer: 'CalinkaPF',
      license: 'CC BY 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Coliseo_El_Pueblo_-_Cali.JPG',
      width: 1600,
      height: 1200,
    },
    dossier: {
      en: "Yusti belonged to the first class to graduate in architecture from the Universidad del Valle, in 1958, and built her career in Cali in the firm Richardson y Yusti, run with the architect Enrique Richardson. Cali's bid to host the VI Pan American Games of 1971 needed a venue for indoor sports fast, and the firm delivered a reinforced-concrete coliseum, its structural calculations by the engineer Harold Arzayús, seating some 18,000 spectators under a wide-span roof with no interior columns to block sightlines. It opened on 30 July 1971 within the sports precinct the city laid out on its western edge for the Games, alongside venues including the Alcides Nieto Patiño velodrome. Basketball's 1982 FIBA World Championship and futsal's 2016 FIFA World Cup both passed through it, and the seating was later reconfigured to an all-seater capacity of 12,000. Renovated again in 2016, the coliseum remains in daily use for indoor sport and hosts concerts by touring musicians, run today by Cali's municipal Secretariat of Sport and Recreation.",
      es: 'Yusti formó parte de la primera promoción de arquitectura egresada de la Universidad del Valle, en 1958, y desarrolló su carrera en Cali en la firma Richardson y Yusti, que dirigió junto al arquitecto Enrique Richardson. La candidatura de Cali para albergar los VI Juegos Panamericanos de 1971 necesitaba con urgencia un escenario para deportes bajo techo, y la firma entregó un coliseo de hormigón armado, con cálculo estructural del ingeniero Harold Arzayús, con aforo para unos 18.000 espectadores bajo una cubierta de gran luz sin columnas interiores que bloquearan la visión. Se inauguró el 30 de julio de 1971 dentro de la unidad deportiva que la ciudad trazó en su borde occidental para los Juegos, junto a escenarios como el velódromo Alcides Nieto Patiño. El Mundial de Baloncesto FIBA de 1982 y el Mundial de Futsal FIFA de 2016 pasaron por él, y sus gradas se reconfiguraron después hasta un aforo de 12.000 asientos. Renovado de nuevo en 2016, el coliseo sigue en uso diario para deporte bajo techo y acoge conciertos de artistas en gira, hoy bajo la Secretaría de Deporte y Recreación del municipio de Cali.',
      it: "Yusti fece parte della prima leva di architettura laureata alla Universidad del Valle, nel 1958, e costruì la carriera a Cali nello studio Richardson y Yusti, diretto insieme all'architetto Enrique Richardson. La candidatura di Cali per ospitare i VI Giochi Panamericani del 1971 aveva urgente bisogno di un impianto per gli sport al coperto, e lo studio realizzò un coliseo in cemento armato, con calcolo strutturale dell'ingegnere Harold Arzayús, con una capienza di circa 18.000 spettatori sotto una copertura a grande luce priva di colonne interne che ostacolassero la visuale. Fu inaugurato il 30 luglio 1971 all'interno del comparto sportivo che la città tracciò sul suo margine occidentale per i Giochi, accanto a impianti come il velodromo Alcides Nieto Patiño. I Mondiali FIBA di pallacanestro del 1982 e i Mondiali FIFA di calcio a 5 del 2016 vi transitarono entrambi, e le gradinate furono poi riconfigurate fino a una capienza di 12.000 posti a sedere. Rinnovato di nuovo nel 2016, il coliseo resta in uso quotidiano per lo sport al coperto e ospita concerti di artisti in tournée, oggi sotto la Segreteria dello Sport e della Ricreazione del comune di Cali.",
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q976776', title: 'Coliseo El Pueblo (Q976776)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Coliseo_El_Pueblo', title: 'Coliseo El Pueblo', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://es.wikipedia.org/wiki/Libia_Yusti', title: 'Libia Yusti', license: 'CC BY-SA 4.0' },
    ],
    tier: 'deep',
  },
  {
    id: 'devon-house-kingston',
    wikidataId: 'Q139511996',
    name: {
      en: 'Devon House',
      es: 'Devon House',
      it: 'Devon House',
    },
    architectId: 'charles-p-lazarus',
    location: { city: 'Kingston', countryCode: 'JM', lat: 18.01473, lon: -76.79002 },
    inception: 1880,
    completed: 1881,
    demolished: null,
    typology: 'domestic',
    materials: ['brick', 'timber'],
    structure: {
      en: 'A symmetrical brick-and-timber block in the Jamaican Georgian tradition is wrapped by wraparound verandahs and jalousied windows, with wrought-iron gates imported for the commission.',
      es: 'Un volumen simétrico de ladrillo y madera en la tradición georgiana jamaicana está envuelto por galerías perimetrales y ventanas de celosía, con verjas de hierro forjado importadas para la obra.',
      it: 'Un volume simmetrico in mattoni e legno nella tradizione georgiana giamaicana è avvolto da verande perimetrali e finestre a persiana, con cancelli in ferro battuto importati per l’opera.',
    },
    program: {
      en: 'Built as a private residence for the merchant George Stiebel, reputed to be Jamaica\'s first Black millionaire, it was bought by the Jamaican government in 1965 to prevent demolition.',
      es: 'Construida como residencia privada para el comerciante George Stiebel, considerado el primer millonario negro de Jamaica, fue comprada por el gobierno jamaicano en 1965 para impedir su demolición.',
      it: 'Costruita come residenza privata per il commerciante George Stiebel, ritenuto il primo milionario nero della Giamaica, fu acquistata dal governo giamaicano nel 1965 per impedirne la demolizione.',
    },
    heritage: 'national',
    currentUse: {
      en: 'House museum and national heritage site, with restored period rooms, craft shops and a garden restaurant.',
      es: 'Museo casa-histórica y sitio patrimonial nacional, con salas de época restauradas, talleres artesanales y un restaurante en el jardín.',
      it: 'Museo-casa storico e sito patrimoniale nazionale, con sale d’epoca restaurate, botteghe artigiane e un ristorante in giardino.',
    },
    detailRect: { x: 0.32, y: 0.34, w: 0.3, h: 0.3 },
    image: {
      commonsFile: 'Devon House in Kingson 2000.jpg',
      photographer: 'David Amsler',
      license: 'CC BY 2.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Devon_House_in_Kingson_2000.jpg',
      width: 1529,
      height: 1000,
    },
    dossier: {
      en: "George Stiebel, who made his fortune in mining and shipping in Venezuela before returning home reputedly Jamaica's first Black millionaire, built Devon House at Half Way Tree in 1881 as a residence to match his standing. Its designer, Charles P. Lazarus, was not a professional architect — he worked as an iron founder and as engineer to the Kingston and Liguanea Water Works Company, and doubled as a local political figure — but the house he gave Stiebel follows Jamaican Georgian convention with a discipline that has made it the reference point for the type: a symmetrical brick-and-timber block wrapped in wraparound verandahs, its jalousied windows and deep eaves tuned against the island heat, its wrought-iron gates shipped in for the purpose. The house passed through several owners after Stiebel's death in 1896 and stood empty and threatened with demolition by 1965, when the Jamaican government bought it outright to save it. Restored as a museum, it now anchors a complex of craft shops, restaurants and gardens in Kingston, and remains one of the island's most visited heritage sites.",
      es: 'George Stiebel, que hizo fortuna en la minería y el transporte marítimo en Venezuela antes de volver como, según se dice, el primer millonario negro de Jamaica, construyó Devon House en Half Way Tree en 1881 como residencia a la altura de su posición. Su autor, Charles P. Lazarus, no era arquitecto de formación —trabajaba como fundidor de hierro y como ingeniero de la Kingston and Liguanea Water Works Company, y ejercía además como dirigente político local—, pero la casa que entregó a Stiebel sigue la convención georgiana jamaicana con una disciplina que la ha convertido en la referencia del tipo: un volumen simétrico de ladrillo y madera envuelto en galerías perimetrales, con ventanas de celosía y aleros profundos calculados contra el calor de la isla, y verjas de hierro forjado traídas expresamente para la obra. La casa pasó por varios propietarios tras la muerte de Stiebel en 1896 y quedó vacía y amenazada de demolición hacia 1965, cuando el gobierno de Jamaica la compró para salvarla. Restaurada como museo, hoy es el núcleo de un complejo de talleres artesanales, restaurantes y jardines en Kingston, y sigue siendo uno de los sitios patrimoniales más visitados de la isla.',
      it: 'George Stiebel, che fece fortuna nell’attività mineraria e marittima in Venezuela prima di tornare in patria come, si dice, il primo milionario nero della Giamaica, costruì Devon House a Half Way Tree nel 1881 come residenza all’altezza della propria posizione. Il suo autore, Charles P. Lazarus, non era un architetto di formazione — lavorava come fonditore di ferro e come ingegnere della Kingston and Liguanea Water Works Company, ed ebbe anche un ruolo di dirigente politico locale —, ma la casa che consegnò a Stiebel segue la convenzione georgiana giamaicana con una disciplina che ne ha fatto il riferimento del genere: un volume simmetrico in mattoni e legno avvolto da verande perimetrali, con finestre a persiana e ampie gronde calcolate contro il caldo dell’isola, e cancelli in ferro battuto fatti arrivare apposta per l’opera. La casa passò per diversi proprietari dopo la morte di Stiebel nel 1896 e rimase vuota e minacciata di demolizione verso il 1965, quando il governo giamaicano la acquistò integralmente per salvarla. Restaurata come museo, oggi è il fulcro di un complesso di botteghe artigiane, ristoranti e giardini a Kingston, e resta uno dei siti patrimoniali più visitati dell’isola.',
    },
    context: null,
    sources: [
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Devon_House', title: 'Devon House', license: 'CC BY-SA 4.0' },
      { kind: 'publication', url: 'https://averyreview.com/issues/59/devon-house', title: 'Devon House — The Avery Review', license: null },
      { kind: 'institution', url: 'https://www.ksamc.gov.jm/attractions/devon-house', title: 'Devon House — Kingston and St. Andrew Municipal Corporation', license: null },
    ],
    tier: 'deep',
  },
  {
    id: 'red-house-port-of-spain',
    wikidataId: 'Q7759880',
    name: {
      en: 'The Red House',
      es: 'The Red House',
      it: 'The Red House',
    },
    architectId: 'daniel-hahn',
    location: { city: 'Port of Spain', countryCode: 'TT', lat: 10.653056, lon: -61.511667 },
    inception: 1904,
    completed: 1907,
    demolished: null,
    typology: 'civic',
    materials: ['stone'],
    structure: {
      en: 'Dressed-stone masonry walls in a Beaux-Arts composition carry a central cupola over a rotunda, with purpleheart timber columns and entablature furnishing the chambers within.',
      es: 'Muros de mampostería de piedra labrada en una composición beaux-arts sostienen una cúpula central sobre una rotonda, con columnas y entablamentos de madera de purpleheart en las cámaras interiores.',
      it: 'Muri in muratura di pietra squadrata in una composizione beaux-arts reggono una cupola centrale su una rotonda, con colonne e trabeazioni in legno di purpleheart nelle camere interne.',
    },
    program: {
      en: "Rebuilt for the colonial government after fire destroyed its predecessor in the 1903 Water Riots, it has seated Trinidad and Tobago's Parliament since independence in 1962.",
      es: 'Reconstruida para el gobierno colonial después de que el incendio destruyera su predecesora en los disturbios del agua de 1903, alberga el Parlamento de Trinidad y Tobago desde la independencia en 1962.',
      it: "Ricostruita per il governo coloniale dopo che l'incendio distrusse la sua predecessora nei moti dell'acqua del 1903, ospita il Parlamento di Trinidad e Tobago dall'indipendenza nel 1962.",
    },
    heritage: 'national',
    currentUse: {
      en: 'Seat of the Parliament of Trinidad and Tobago.',
      es: 'Sede del Parlamento de Trinidad y Tobago.',
      it: 'Sede del Parlamento di Trinidad e Tobago.',
    },
    detailRect: { x: 0.15, y: 0.25, w: 0.3, h: 0.35 },
    image: {
      commonsFile: 'Red House of Trinidad and Tobago.jpg',
      photographer: 'David Stanley',
      license: 'CC BY 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Red_House_of_Trinidad_and_Tobago.jpg',
      width: 1024,
      height: 768,
    },
    dossier: {
      en: "The original Red House of 1844 stood only until the Water Riots of 23 March 1903, when a crowd protesting a new water ordinance burned it to the ground. Daniel Hahn, chief draughtsman of the colonial Public Works Department, rebuilt it in a Beaux-Arts idiom of dressed stone, reopening on 4 February 1907 with a high central cupola — the Rotunda — that gives the building its silhouette across Woodford Square. Purpleheart timber columns and entablature, fustic panelling and a Legislative Council ceiling in Wedgwood-blue gesso by the English firm Jackson & Sons furnish the two principal chambers. Named, by tradition, for the red paint it wore for a royal visit, it has functioned since 1962 as the seat of an independent Trinidad and Tobago's Parliament. On 27 July 1990 members of the Jamaat al Muslimeen stormed the building and held the Prime Minister and Cabinet hostage for five days in an attempted coup that left 24 people dead before the insurgents surrendered.",
      es: 'El primer Red House, de 1844, se mantuvo en pie solo hasta los disturbios del agua del 23 de marzo de 1903, cuando una multitud que protestaba por una nueva ordenanza sobre el agua lo incendió por completo. Daniel Hahn, delineante jefe del Departamento de Obras Públicas colonial, lo reconstruyó en un lenguaje beaux-arts de piedra labrada, reabriéndolo el 4 de febrero de 1907 con una alta cúpula central —la Rotonda— que define su silueta sobre la plaza Woodford. Columnas y entablamentos de madera de purpleheart, paneles de fustete y un techo del Consejo Legislativo en yesería azul Wedgwood de la firma inglesa Jackson & Sons equipan las dos cámaras principales. Llamado, según la tradición, por la pintura roja que lució con motivo de una visita real, funciona desde 1962 como sede del Parlamento de una Trinidad y Tobago ya independiente. El 27 de julio de 1990, miembros del Jamaat al Muslimeen asaltaron el edificio y mantuvieron secuestrados al primer ministro y al gabinete durante cinco días en un intento de golpe de Estado que dejó 24 muertos antes de que los insurgentes se rindieran.',
      it: "Il primo Red House, del 1844, rimase in piedi solo fino ai moti dell'acqua del 23 marzo 1903, quando una folla in protesta contro una nuova ordinanza sull'acqua lo incendiò completamente. Daniel Hahn, disegnatore capo del Dipartimento dei Lavori Pubblici coloniale, lo ricostruì in un linguaggio beaux-arts di pietra squadrata, riaprendolo il 4 febbraio 1907 con un'alta cupola centrale — la Rotonda — che definisce la sua sagoma sulla piazza Woodford. Colonne e trabeazioni in legno di purpleheart, pannelli di fustagno e un soffitto del Consiglio Legislativo in stucco blu Wedgwood della ditta inglese Jackson & Sons arredano le due camere principali. Chiamato, per tradizione, dalla vernice rossa sfoggiata per una visita reale, funge dal 1962 da sede del Parlamento di una Trinidad e Tobago ormai indipendente. Il 27 luglio 1990 membri del Jamaat al Muslimeen assaltarono l'edificio e tennero in ostaggio il primo ministro e il gabinetto per cinque giorni in un tentativo di colpo di Stato che lasciò 24 morti prima della resa degli insorti.",
    },
    context: {
      body: {
        en: "On 27 July 1990, some 114 members of the Jamaat al Muslimeen, led by Yasin Abu Bakr, stormed the Red House and the state broadcaster in an attempted coup, holding Prime Minister A.N.R. Robinson and most of his Cabinet hostage inside the building for five days while parts of Port of Spain burned in the accompanying unrest. Robinson was shot in the leg; 24 people died before the insurgents surrendered on 1 August 1990 under an amnesty later upheld by the Privy Council. The building itself sustained fire and structural damage that fed into a restoration completed decades later.",
        es: 'El 27 de julio de 1990, unos 114 miembros del Jamaat al Muslimeen, liderados por Yasin Abu Bakr, asaltaron el Red House y la emisora estatal en un intento de golpe de Estado, manteniendo secuestrados dentro del edificio durante cinco días al primer ministro A. N. R. Robinson y a la mayor parte de su gabinete, mientras zonas de Puerto España ardían en los disturbios paralelos. Robinson recibió un disparo en la pierna; murieron 24 personas antes de que los insurgentes se rindieran el 1 de agosto de 1990 bajo una amnistía que después confirmó el Privy Council. El propio edificio sufrió daños de incendio y estructurales que alimentaron una restauración concluida décadas después.',
        it: "Il 27 luglio 1990, circa 114 membri del Jamaat al Muslimeen, guidati da Yasin Abu Bakr, assaltarono il Red House e l'emittente statale in un tentativo di colpo di Stato, tenendo in ostaggio all'interno dell'edificio per cinque giorni il primo ministro A. N. R. Robinson e gran parte del suo governo, mentre alcune zone di Port of Spain bruciavano nei disordini paralleli. Robinson fu colpito a una gamba; morirono 24 persone prima che gli insorti si arrendessero il 1° agosto 1990 sotto un'amnistia poi confermata dal Privy Council. L'edificio stesso subì danni da incendio e strutturali che portarono a un restauro concluso decenni dopo.",
      },
      sources: [
        { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Red_House_(Trinidad_and_Tobago)', title: 'Red House (Trinidad and Tobago)', license: 'CC BY-SA 4.0' },
      ],
    },
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q7759880', title: 'The Red House (Q7759880)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Red_House_(Trinidad_and_Tobago)', title: 'Red House (Trinidad and Tobago)', license: 'CC BY-SA 4.0' },
      { kind: 'institution', url: 'https://nationaltrust.tt/location/the-red-house/', title: 'The Red House — National Trust of Trinidad and Tobago', license: null },
    ],
    tier: 'canon',
  },
  {
    id: 'lum-lima',
    wikidataId: 'Q5982529',
    name: {
      en: 'Place of Memory, Tolerance and Social Inclusion',
      es: 'Lugar de la Memoria, la Tolerancia y la Inclusión Social',
      it: 'Luogo della Memoria, della Tolleranza e dell’Inclusione Sociale',
    },
    architectId: 'sandra-barclay',
    location: { city: 'Lima', countryCode: 'PE', lat: -12.108097, lon: -77.054047 },
    inception: 2009,
    completed: 2015,
    demolished: null,
    typology: 'cultural',
    materials: ['concrete'],
    structure: {
      en: 'A stack of pigmented, board-formed concrete volumes cantilevers over the cliff edge above the Costa Verde, cut through by ramps and light shafts rather than a conventional floor-by-floor circulation.',
      es: 'Un apilamiento de volúmenes de hormigón pigmentado y encofrado de tablas vuela en voladizo sobre el borde del acantilado de la Costa Verde, atravesado por rampas y lucernarios en lugar de una circulación convencional planta a planta.',
      it: 'Una sovrapposizione di volumi in cemento pigmentato con casseratura a tavole aggetta sul bordo della scogliera della Costa Verde, attraversata da rampe e pozzi di luce anziché da una circolazione convenzionale piano per piano.',
    },
    program: {
      en: "Commissioned by Peru's Ministry of Culture as a museum and documentation centre on the internal conflict of 1980–2000, won through an international competition in 2008.",
      es: 'Encargado por el Ministerio de Cultura del Perú como museo y centro de documentación sobre el conflicto armado interno de 1980-2000, ganado mediante concurso internacional en 2008.',
      it: 'Commissionato dal Ministero della Cultura del Perù come museo e centro di documentazione sul conflitto armato interno del 1980-2000, vinto tramite concorso internazionale nel 2008.',
    },
    heritage: 'none',
    currentUse: {
      en: "Active museum, documentation centre and library on Peru's period of political violence.",
      es: 'Museo, centro de documentación y biblioteca en activo sobre el periodo de violencia política del Perú.',
      it: 'Museo attivo, centro di documentazione e biblioteca sul periodo di violenza politica del Perù.',
    },
    detailRect: { x: 0.30, y: 0.35, w: 0.30, h: 0.28 },
    image: {
      commonsFile: 'Fachada del museo LUM (Lugar de la Memoria, la Tolerancia y la Inclusión Social).jpg',
      photographer: 'Stephany CH',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Fachada_del_museo_LUM_(Lugar_de_la_Memoria,_la_Tolerancia_y_la_Inclusi%C3%B3n_Social).jpg',
      width: 1600,
      height: 1200,
    },
    dossier: {
      en: "Barclay & Crousse won the international competition Peru's Ministry of Culture opened in 2008 for a museum confronting the internal conflict of 1980–2000, between the state, Sendero Luminoso and the MRTA, which the Truth and Reconciliation Commission estimated killed some 69,000 people. Sandra Barclay and Jean Pierre Crousse, who had built their practice reworking the Peruvian coastal desert as raw material, set the building on the edge of the cliffs above the Costa Verde in Miraflores, stacking pigmented concrete volumes that cantilever toward the Pacific and are threaded internally by ramps and light shafts rather than a conventional stair-and-corridor plan. The rough, sand-toned concrete deliberately withholds decoration, treating the building itself as a neutral container for an exhibition design that does not shy from naming perpetrators on both sides. Completed in 2015 and inaugurated that December, the Lugar de la Memoria houses a documentation centre, library and permanent galleries devoted to the conflict's causes and victims. It won the Gold Hexagon at Peru's XVI Architecture Biennial in 2014 and the Oscar Niemeyer Prize at the Pan-American Architecture Biennial of Quito in 2016.",
      es: 'Barclay & Crousse ganó el concurso internacional que el Ministerio de Cultura del Perú abrió en 2008 para un museo que afrontara el conflicto armado interno de 1980-2000, entre el Estado, Sendero Luminoso y el MRTA, que la Comisión de la Verdad y Reconciliación estimó en unas 69.000 víctimas mortales. Sandra Barclay y Jean Pierre Crousse, que habían construido su estudio trabajando el desierto costero peruano como materia prima, situaron el edificio al borde de los acantilados de la Costa Verde en Miraflores, apilando volúmenes de hormigón pigmentado que vuelan hacia el Pacífico y se recorren por dentro mediante rampas y lucernarios en vez de escaleras y pasillos convencionales. El hormigón áspero, de tono arena, renuncia al ornamento y trata el edificio como un contenedor neutro para un guion museográfico que no rehúye nombrar a los responsables de ambos bandos. Terminado e inaugurado en diciembre de 2015, el Lugar de la Memoria alberga un centro de documentación, biblioteca y salas permanentes dedicadas a las causas y víctimas del conflicto. Ganó el Hexágono de Oro en la XVI Bienal de Arquitectura del Perú en 2014 y el Premio Oscar Niemeyer en la Bienal Panamericana de Arquitectura de Quito en 2016.',
      it: "Barclay & Crousse vinse il concorso internazionale bandito nel 2008 dal Ministero della Cultura del Perù per un museo che affrontasse il conflitto armato interno del 1980-2000, tra lo Stato, Sendero Luminoso e l'MRTA, che la Commissione Verità e Riconciliazione stimò in circa 69.000 vittime. Sandra Barclay e Jean Pierre Crousse, che avevano costruito il proprio studio lavorando il deserto costiero peruviano come materia prima, collocarono l'edificio sul bordo delle scogliere della Costa Verde a Miraflores, sovrapponendo volumi in cemento pigmentato che aggettano verso il Pacifico e sono percorsi all'interno da rampe e pozzi di luce anziché da una pianta convenzionale di scale e corridoi. Il cemento ruvido, dal tono sabbia, rinuncia deliberatamente all'ornamento e tratta l'edificio stesso come un contenitore neutro per un allestimento museografico che non evita di nominare i responsabili di entrambi gli schieramenti. Completato nel 2015 e inaugurato nel dicembre di quell'anno, il Lugar de la Memoria ospita un centro di documentazione, una biblioteca e sale permanenti dedicate alle cause e alle vittime del conflitto. Vinse l'Hexágono de Oro alla XVI Biennale di Architettura del Perù nel 2014 e il Premio Oscar Niemeyer alla Biennale Panamericana di Architettura di Quito nel 2016.",
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q5982529', title: 'Lugar de la Memoria, la Tolerancia y la Inclusión Social (Q5982529)', license: null },
      { kind: 'wikipedia', url: 'https://es.wikipedia.org/wiki/Lugar_de_la_Memoria,_la_Tolerancia_y_la_Inclusi%C3%B3n_Social', title: 'Lugar de la Memoria, la Tolerancia y la Inclusión Social', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
  {
    id: 'museo-cao-el-brujo',
    wikidataId: 'Q26205212',
    name: {
      en: 'Museo Cao',
      es: 'Museo Cao',
      it: 'Museo Cao',
    },
    architectId: 'claudia-uccelli',
    location: { city: 'Magdalena de Cao', countryCode: 'PE', lat: -7.9139, lon: -79.3043 },
    inception: 2007,
    completed: 2009,
    demolished: null,
    typology: 'cultural',
    materials: ['concrete'],
    structure: {
      en: 'Five modular concrete volumes, left exposed and unrendered, are arranged around courtyards so that the voids between them carry as much compositional weight as the built mass.',
      es: 'Cinco volúmenes modulares de hormigón, dejados a la vista sin revestir, se disponen en torno a patios de modo que los vacíos entre ellos pesan en la composición tanto como la masa construida.',
      it: 'Cinque volumi modulari in cemento, lasciati a vista senza rivestimento, sono disposti attorno a cortili in modo che i vuoti fra loro pesino nella composizione quanto la massa costruita.',
    },
    program: {
      en: 'Commissioned by the Fundación Wiese to house the Lady of Cao and the Moche collections of the El Brujo archaeological complex.',
      es: 'Encargado por la Fundación Wiese para albergar a la Señora de Cao y las colecciones moche del complejo arqueológico El Brujo.',
      it: 'Commissionato dalla Fundación Wiese per ospitare la Signora di Cao e le collezioni moche del complesso archeologico di El Brujo.',
    },
    heritage: 'regional',
    currentUse: {
      en: 'Active archaeology museum beside the Huaca Cao Viejo pyramid.',
      es: 'Museo arqueológico en activo junto a la pirámide de Huaca Cao Viejo.',
      it: 'Museo archeologico attivo accanto alla piramide di Huaca Cao Viejo.',
    },
    detailRect: { x: 0.28, y: 0.35, w: 0.30, h: 0.28 },
    image: {
      commonsFile: 'Museo Cao building.jpg',
      photographer: 'Jorge Gobbi',
      license: 'CC BY 2.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Museo_Cao_building.jpg',
      width: 1600,
      height: 1200,
    },
    dossier: {
      en: "The Fundación Wiese commissioned Claudia Uccelli to give the El Brujo archaeological complex, on Peru's northern coast, a museum for the Lady of Cao, the tattooed Moche ruler whose 2006 tomb find rewrote assumptions about women's authority in pre-Columbian Peru. Built in 2008–09 beside the Huaca Cao Viejo pyramid, the museum is organised as five modular pavilions in exposed concrete, their plan derived from Moche domestic layouts rather than a conventional gallery sequence; Uccelli has written that the voids between the pavilions are as much a part of the composition as their solid mass, comparing them to the silences in a piece of music. Concrete left unrendered is the building's only material, chosen to sit without competing against the earthen huaca beside it. Galleries hold textiles, ceramics and the mummy of the Lady of Cao herself, alongside an auditorium, laboratory and research rooms serving the archaeologists still excavating the site. The museum was shortlisted for the Mies Crown Hall Americas Prize in 2014 and won the Silver Hexagon for the northern macro-region at Peru's XIV Architecture Biennial in 2010.",
      es: 'La Fundación Wiese encargó a Claudia Uccelli dotar al complejo arqueológico El Brujo, en la costa norte del Perú, de un museo para la Señora de Cao, la gobernante moche tatuada cuyo hallazgo en 2006 replanteó los supuestos sobre la autoridad femenina en el Perú prehispánico. Construido en 2008-09 junto a la pirámide de Huaca Cao Viejo, el museo se organiza en cinco pabellones modulares de hormigón visto, cuya planta deriva de la vivienda doméstica moche antes que de una secuencia expositiva convencional; Uccelli ha escrito que los vacíos entre pabellones forman parte de la composición tanto como su masa construida, comparándolos con los silencios de una pieza musical. El hormigón sin revestir es el único material del edificio, elegido para no competir con la huaca de tierra contigua. Las salas albergan textiles, cerámica y la momia de la propia Señora de Cao, junto a un auditorio, un laboratorio y ambientes de investigación para los arqueólogos que aún excavan el sitio. El museo fue finalista del Mies Crown Hall Americas Prize en 2014 y ganó el Hexágono de Plata de la macrorregión norte en la XIV Bienal de Arquitectura Peruana de 2010.',
      it: 'La Fundación Wiese incaricò Claudia Uccelli di dotare il complesso archeologico di El Brujo, sulla costa settentrionale del Perù, di un museo per la Signora di Cao, la sovrana moche tatuata il cui ritrovamento nel 2006 ha ridefinito le ipotesi sull’autorità femminile nel Perù precolombiano. Costruito nel 2008-09 accanto alla piramide di Huaca Cao Viejo, il museo è organizzato in cinque padiglioni modulari in cemento a vista, la cui pianta deriva dagli insediamenti domestici moche più che da una sequenza espositiva convenzionale; Uccelli ha scritto che i vuoti fra i padiglioni fanno parte della composizione quanto la loro massa costruita, paragonandoli ai silenzi di un brano musicale. Il cemento a vista è l’unico materiale dell’edificio, scelto per non competere con la huaca di terra accanto. Le sale ospitano tessuti, ceramiche e la mummia della stessa Signora di Cao, insieme a un auditorium, un laboratorio e ambienti di ricerca per gli archeologi che ancora scavano il sito. Il museo è stato finalista al Mies Crown Hall Americas Prize nel 2014 e ha vinto l’Hexágono de Plata della macroregione nord alla XIV Biennale di Architettura Peruviana del 2010.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q26205212', title: 'Museo Cao (Q26205212)', license: null },
      { kind: 'publication', url: 'https://arqa.com/arquitectura/museo-cao.html', title: 'Museo Cao — ARQA (project sheet, Claudia Uccelli Romero)', license: null },
      { kind: 'institution', url: 'https://www.mchap.co/mchap-2014-projects/cao-museum', title: 'Cao Museum — Mies Crown Hall Americas Prize 2014 nominated projects', license: null },
    ],
    tier: 'deep',
  },
];
