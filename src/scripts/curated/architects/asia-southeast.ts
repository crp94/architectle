import type { Architect } from '@/types/architect';

// Wave 5 curator agent (Southeast Asia): real, sourced Architect entries for this slice.
//
// Countries in scope: TH, VN, KH, LA, MM, MY, SG, ID, PH.
//
// `workRegions` and `workCentroid` are deliberately left as [] / {0,0}:
// `npm run data:curate` derives both from each architect's buildings and
// overwrites whatever is typed here.
// REMOVED BY THE SECOND CURATOR (buildings pass), with their full entries
// recoverable from commit 26122ec:
//   henri-maclaine-pont, vann-molyvann, tep-vattho, rizal-muslimin
// Each is a real, correctly researched architect, but no photograph of any of
// their buildings can be licensed for this pool. Indonesia and Cambodia have
// no freedom of panorama (Commons:Copyright rules by territory), and their
// architectural copyright terms are life + 70 and life + 50 respectively, so
// a freely-licensed photograph of an in-copyright building by Maclaine Pont
// (d. 1971), Rizal Muslimin (living), Vann Molyvann (d. 2017) or Tep Vattho
// (d. 2016) is a derivative work that no photographer's CC licence can clear.
// `architect-orphan` in crossRefs.ts fails on any architect with no building,
// so they could not simply be left in place.
export const ASIA_SOUTHEAST_ARCHITECTS: Architect[] = [
  // --- pre-1800 -----------------------------------------------------------
  {
    id: 'kavindrarimathana',
    // No Wikidata item exists for him; the name appears only inside the
    // items for the temples he built (see report).
    wikidataId: '',
    name: 'Kavindrarimathana',
    alternativeNames: ['Kavīndrārimathana', 'Kavindrarimathana of Angkor'],
    gender: 'man',
    born: null,
    died: null,
    floruit: { start: 950, end: 962, override: false },
    movements: 'unaffiliated',
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'sacral',
    signatureMaterial: 'brick',
    portrait: {
      en: 'Kavindrarimathana is the only builder of the Khmer Empire whose name has come down to us. A Buddhist serving as chief minister to Rajendravarman II, who ruled at Angkor between 944 and 968, he is named on the doorjambs of Bat Chum as the man who raised that temple, and the same inscriptions credit him with the reservoir of Srah Srang and with the island temple of the East Mebon; the palace from which Rajendravarman governed is also attributed to him. That a court official signed his work at all is extraordinary. The thousand sanctuaries of Angkor otherwise record their royal patrons and say nothing of the people who set the brick. He appears to have died shortly after 960, the year Bat Chum was dedicated.',
      es: 'Kavindrarimathana es el único constructor del Imperio jemer cuyo nombre ha llegado hasta nosotros. Budista y primer ministro de Rajendravarman II, que reinó en Angkor entre 944 y 968, aparece nombrado en las jambas de Bat Chum como el hombre que levantó ese templo, y las mismas inscripciones le atribuyen el embalse de Srah Srang y el templo insular de Mebon Oriental; también se le adjudica el palacio desde el que gobernaba el rey. Que un alto funcionario firmara su obra resulta excepcional: los mil santuarios de Angkor consignan a sus patronos reales y callan el nombre de quienes asentaron el ladrillo. Debió de morir poco después del 960, año en que Bat Chum fue consagrado.',
      it: "Kavindrarimathana è l'unico costruttore dell'Impero khmer di cui ci sia giunto il nome. Buddhista e primo ministro di Rajendravarman II, che regnò ad Angkor fra il 944 e il 968, è nominato sugli stipiti di Bat Chum come l'uomo che innalzò quel tempio, e le stesse iscrizioni gli attribuiscono il bacino di Srah Srang e il tempio insulare dell'East Mebon; a lui si fa risalire anche il palazzo da cui il re governava. Che un alto funzionario firmasse la propria opera è eccezionale: i mille santuari di Angkor registrano i patroni regali e tacciono su chi posava i mattoni. Morì con ogni probabilità poco dopo il 960, anno della consacrazione di Bat Chum.",
    },
    awards: [],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Bat_Chum', title: 'Bat Chum', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Rajendravarman_II', title: 'Rajendravarman II', license: 'CC BY-SA 4.0' },
      { kind: 'publication', url: 'https://brill.com/display/title/6748', title: 'Dumarçay & Royère, Cambodian Architecture, Eighth to Thirteenth Centuries (Brill, 2001)', license: null },
    ],
  },
  {
    id: 'juan-macias',
    wikidataId: '',
    name: 'Juan Macías',
    alternativeNames: ['Fray Juan Macías', 'Juan Macias'],
    gender: 'man',
    born: null,
    died: null,
    floruit: { start: 1586, end: 1607, override: false },
    movements: [{ id: 'baroque', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'sacral',
    signatureMaterial: 'stone',
    portrait: {
      en: 'Juan Macías was the Augustinian friar who drew the stone church of San Agustín inside the walls of Manila, begun in 1586 after two earlier timber-and-thatch churches on the same ground had burned. His brief was structural before it was decorative: to build something that would outlast the earthquakes and typhoons that had already destroyed most of what the Spanish had put up in Luzon. He specified thick adobe-stone walls, massive buttresses and a barrel vault carried on transverse arches, and the building has survived every major Manila earthquake since, including 1645, 1863 and 1880. Macías died before the church was declared finished in 1607; the Augustinians formally recorded him afterwards as the builder of the edifice.',
      es: 'Juan Macías fue el fraile agustino que trazó la iglesia de piedra de San Agustín dentro de las murallas de Manila, comenzada en 1586 después de que dos templos anteriores de madera y nipa ardieran en el mismo solar. Su encargo era estructural antes que ornamental: levantar algo capaz de sobrevivir a los terremotos y tifones que ya habían arruinado casi todo lo construido por los españoles en Luzón. Dispuso muros gruesos de piedra de adobe, contrafuertes macizos y una bóveda de cañón sobre arcos fajones, y el edificio ha resistido desde entonces todos los grandes seísmos de Manila, entre ellos los de 1645, 1863 y 1880. Macías murió antes de que la obra se diera por concluida en 1607; los agustinos lo reconocieron después formalmente como constructor del edificio.',
      it: "Juan Macías fu il frate agostiniano che disegnò la chiesa in pietra di San Agustín dentro le mura di Manila, avviata nel 1586 dopo che due chiese precedenti in legno e paglia erano bruciate sullo stesso terreno. Il suo compito era strutturale prima che decorativo: costruire qualcosa che sopravvivesse ai terremoti e ai tifoni che avevano già distrutto quasi tutto ciò che gli spagnoli avevano eretto a Luzon. Prescrisse muri spessi in pietra di adobe, contrafforti massicci e una volta a botte su archi trasversali, e l'edificio ha resistito da allora a ogni grande sisma di Manila, compresi quelli del 1645, 1863 e 1880. Macías morì prima che la chiesa fosse dichiarata conclusa nel 1607; gli agostiniani lo registrarono poi ufficialmente come costruttore dell'edificio.",
    },
    awards: [],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/San_Agustin_Church_(Manila)', title: 'San Agustin Church (Manila)', license: 'CC BY-SA 4.0' },
      { kind: 'institution', url: 'https://whc.unesco.org/en/list/677/', title: 'UNESCO World Heritage Centre — Baroque Churches of the Philippines', license: null },
    ],
  },
  {
    id: 'ewout-verhagen',
    // C2 fix (task-9 review): a prior pass discarded Q133870895 ("Ewout
    // Verhagen," VOC surveyor/map drawer, died 1694, sourced to the
    // Repertorium van Nederlandse kaartmakers) as an unrelated person, on the
    // grounds that the entity carries no direct link to Gereja Sion. Re-
    // examined and reversed: the Gereja Sion Wikipedia article's own
    // footnote 18 — citing Xu, Guanmian, "The 'Perfect Map' of Widow
    // Hiamtse: A Micro-Spatial History of Sugar Plantations in Early Modern
    // Southeast Asia, 1685-1710," International Review of Social History
    // 67:1 (2022), 97-126 — states that the same Ewout Verhagen who designed
    // the church "was also noted to have worked as land surveyor for
    // College van Heemraden." Xu's article itself independently places a
    // Heemraden land surveyor of that exact name active in Batavia as early
    // as 2 June 1685 (surveying widow Hiamtse's plantation claim). Name,
    // employer (VOC), occupation (land surveyor / map drawer), and Batavia
    // location and period all converge on one individual: the prior
    // "unrelated person" call over-corrected. wikidataId restored; died:
    // 1694 is now sourced, not inherited residue.
    wikidataId: 'Q133870895',
    name: 'Ewout Verhagen',
    alternativeNames: ['E. Verhagen', 'Ewout Verhagen van Rotterdam'],
    gender: 'man',
    born: null,
    died: 1694,
    floruit: { start: 1692, end: 1695, override: false },
    movements: [{ id: 'baroque', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'sacral',
    signatureMaterial: 'brick',
    portrait: {
      en: 'Ewout Verhagen came from Rotterdam to Batavia, the Dutch East India Company capital on Java, and rose to head the ambachtskwartier, the walled craft quarter where the Company kept its carpenters, masons and shipwrights. In that role he drew the permanent Portuguese Outer Church, approved by the Company on 11 July 1692 and built over the following three years for the Mardijker congregation living outside the city wall. The design is a plain Dutch Protestant preaching box translated into the tropics: a single wide hall under a timber roof, brick walls rendered white, round-arched windows tall enough to move air. Verhagen died in 1694, a year before the church was consecrated. It is the oldest building in Jakarta still doing the job it was built for.',
      es: 'Ewout Verhagen llegó de Róterdam a Batavia, la capital de la Compañía Neerlandesa de las Indias Orientales en Java, y llegó a dirigir el ambachtskwartier, el barrio amurallado de oficios donde la Compañía alojaba a sus carpinteros, albañiles y calafates. Desde ese puesto trazó la iglesia portuguesa exterior definitiva, aprobada por la Compañía el 11 de julio de 1692 y levantada en los tres años siguientes para la congregación mardijker que vivía extramuros. El proyecto es una sobria sala de predicación protestante neerlandesa trasladada al trópico: una única nave ancha bajo cubierta de madera, muros de ladrillo enlucidos en blanco y ventanas de medio punto lo bastante altas para mover el aire. Verhagen murió en 1694, un año antes de la consagración. Es el edificio más antiguo de Yakarta que sigue cumpliendo su función original.',
      it: "Ewout Verhagen giunse da Rotterdam a Batavia, capitale della Compagnia olandese delle Indie orientali a Giava, e arrivò a dirigere l'ambachtskwartier, il quartiere murato delle arti dove la Compagnia teneva falegnami, muratori e maestri d'ascia. In quella veste disegnò la chiesa portoghese esterna definitiva, approvata dalla Compagnia l'11 luglio 1692 e costruita nei tre anni successivi per la congregazione mardijker che viveva fuori le mura. Il progetto è una sobria sala di predicazione protestante olandese trapiantata ai tropici: un'unica aula larga sotto un tetto ligneo, muri in laterizio intonacati di bianco, finestre centinate alte quanto basta a far circolare l'aria. Verhagen morì nel 1694, un anno prima della consacrazione. È il più antico edificio di Giacarta che svolga ancora la funzione per cui fu eretto.",
    },
    awards: [],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Gereja_Sion', title: 'Gereja Sion', license: 'CC BY-SA 4.0' },
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q133870895', title: 'Ewout Verhagen (Q133870895)', license: null },
      { kind: 'publication', url: 'https://doi.org/10.1017/S002085902100050X', title: 'Xu, Guanmian, "The \'Perfect Map\' of Widow Hiamtse: A Micro-Spatial History of Sugar Plantations in Early Modern Southeast Asia, 1685-1710," International Review of Social History 67:1 (2022), 97-126', license: null },
    ],
  },

  // --- 1800-1945 ----------------------------------------------------------
  {
    id: 'u-tin',
    wikidataId: 'Q7876246',
    name: 'U Tin',
    alternativeNames: ['Sithu U Tin', 'ဦးတင်'],
    gender: 'man',
    born: 1890,
    died: 1972,
    floruit: { start: 1926, end: 1957, override: false },
    movements: 'unaffiliated',
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'civic',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'U Tin was the Burmese architect and engineer who gave colonial Rangoon its most conspicuously Burmese public buildings. Working inside a British administration whose civic architecture was otherwise imported wholesale from London and Calcutta, he fitted tiered pyatthat roofs, peacock reliefs and naga balustrades onto reinforced-concrete frames of entirely modern construction. Yangon City Hall, begun in 1926 and finished in 1936, is the fullest statement of that syncretism; Yangon Central Railway Station and Myoma High School belong to the same argument. The honorific Sithu was conferred on him. His work is now the anchor of Yangon’s heritage list, and the reason the city’s colonial core does not read simply as a British transplant.',
      es: 'U Tin fue el arquitecto e ingeniero birmano que dotó a la Rangún colonial de sus edificios públicos más visiblemente birmanos. Trabajando dentro de una administración británica cuya arquitectura civil se importaba por lo general en bloque desde Londres y Calcuta, ajustó cubiertas escalonadas pyatthat, relieves de pavos reales y balaustradas de naga sobre estructuras de hormigón armado enteramente modernas. El Ayuntamiento de Yangón, iniciado en 1926 y terminado en 1936, es la formulación más completa de ese sincretismo; la Estación Central de Yangón y la Escuela Myoma pertenecen al mismo argumento. Recibió el título honorífico de Sithu. Su obra es hoy el eje de la lista patrimonial de Yangón y la razón de que el centro colonial de la ciudad no se lea simplemente como un trasplante británico.',
      it: "U Tin fu l'architetto e ingegnere birmano che diede alla Rangoon coloniale i suoi edifici pubblici più marcatamente birmani. Operando dentro un'amministrazione britannica la cui architettura civile veniva per lo più importata in blocco da Londra e Calcutta, innestò tetti a gradoni pyatthat, rilievi di pavoni e balaustre a naga su telai in cemento armato del tutto moderni. Il Municipio di Yangon, avviato nel 1926 e concluso nel 1936, è la formulazione più compiuta di quel sincretismo; la Stazione centrale di Yangon e la Myoma High School appartengono allo stesso discorso. Gli fu conferito il titolo onorifico di Sithu. La sua opera è oggi il cardine della lista del patrimonio di Yangon e la ragione per cui il nucleo coloniale della città non si legge come un semplice trapianto britannico.",
    },
    awards: ['Sithu (Burmese state honorific)'],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/U_Tin', title: 'U Tin', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Yangon_City_Hall', title: 'Yangon City Hall', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'juan-m-arellano',
    wikidataId: 'Q1882538',
    name: 'Juan M. Arellano',
    alternativeNames: ['Juan Marcos Arellano y de Guzmán', 'Juan Arellano'],
    gender: 'man',
    born: 1888,
    died: 1960,
    floruit: { start: 1918, end: 1940, override: false },
    movements: [{ id: 'art-deco', primary: true }, { id: 'beaux-arts', primary: false }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'civic',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Juan M. Arellano trained first as a painter under Lorenzo Guerrero and Fabián de la Rosa, then went to the United States as one of the first Filipino government pensionados in architecture, studying at the Pennsylvania Academy of the Fine Arts and Drexel and working for George B. Post & Sons in New York. Back in Manila he became a supervising architect at the Bureau of Public Works and produced the Beaux-Arts set pieces of the American colonial capital: the Legislative Building, the Manila Central Post Office, the Rizal Memorial sports complex. Sent back to America in 1927 to study under the theatre specialist Thomas W. Lamb, he returned a different designer, and the Metropolitan Theater of 1931 announced Art Deco in the Philippines with tropical foliage cast in concrete and stained glass.',
      es: 'Juan M. Arellano se formó primero como pintor con Lorenzo Guerrero y Fabián de la Rosa, y viajó después a Estados Unidos como uno de los primeros pensionados filipinos en arquitectura, estudiando en la Pennsylvania Academy of the Fine Arts y en Drexel y trabajando para George B. Post & Sons en Nueva York. De vuelta en Manila fue arquitecto supervisor de la Oficina de Obras Públicas y firmó las piezas Beaux-Arts de la capital colonial norteamericana: el Edificio Legislativo, la Oficina Central de Correos, el complejo deportivo Rizal Memorial. Enviado de nuevo a Estados Unidos en 1927 para formarse con el especialista en teatros Thomas W. Lamb, regresó convertido en otro proyectista: el Teatro Metropolitano de 1931 anunció el art déco en Filipinas con vegetación tropical fundida en hormigón y vidriera.',
      it: "Juan M. Arellano si formò dapprima come pittore con Lorenzo Guerrero e Fabián de la Rosa, poi partì per gli Stati Uniti come uno dei primi pensionados filippini in architettura, studiando alla Pennsylvania Academy of the Fine Arts e alla Drexel e lavorando per George B. Post & Sons a New York. Tornato a Manila divenne architetto sovrintendente dell'Ufficio dei Lavori Pubblici e firmò i pezzi Beaux-Arts della capitale coloniale americana: il Palazzo Legislativo, le Poste centrali, il complesso sportivo Rizal Memorial. Rimandato in America nel 1927 per formarsi con lo specialista di teatri Thomas W. Lamb, rientrò come un progettista diverso: il Teatro Metropolitano del 1931 annunciò l'Art Déco nelle Filippine con vegetazione tropicale fusa nel cemento e nelle vetrate.",
    },
    awards: [],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Juan_M._Arellano', title: 'Juan M. Arellano', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Manila_Metropolitan_Theater', title: 'Manila Metropolitan Theater', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'ernest-hebrard',
    wikidataId: 'Q1931256',
    name: 'Ernest Hébrard',
    alternativeNames: ['Ernest Michel Hébrard', 'Ernest Hebrard'],
    gender: 'man',
    born: 1875,
    died: 1933,
    floruit: { start: 1917, end: 1932, override: false },
    movements: [{ id: 'beaux-arts', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'civic',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Ernest Hébrard won the Grand Prix de Rome in 1904 and made his reputation twice over: first with the reconstruction plan for Thessaloniki after the fire of 1917, then, from 1921, as head of the Architecture and Town Planning Service of French Indochina, based in Hanoi. There he laid out the hill station of Da Lat, redrew districts of Hanoi and Phnom Penh, and built a series of government and academic buildings in what he called the style indochinois — reinforced-concrete frames wrapped in deep verandas, louvred screens and multi-tiered tile roofs borrowed from Vietnamese and Khmer models. The style was a colonial instrument as much as an aesthetic one, arguing that French rule could be at home in Asia. He returned to Paris in 1931 and died two years later.',
      es: 'Ernest Hébrard ganó el Grand Prix de Rome en 1904 y labró su reputación dos veces: primero con el plan de reconstrucción de Salónica tras el incendio de 1917 y, desde 1921, como director del Servicio de Arquitectura y Urbanismo de la Indochina francesa, con sede en Hanói. Allí trazó la estación de altura de Da Lat, rediseñó barrios de Hanói y Nom Pen y levantó una serie de edificios oficiales y académicos en lo que llamó style indochinois: estructuras de hormigón armado envueltas en galerías profundas, celosías y cubiertas de teja de varios cuerpos tomadas de modelos vietnamitas y jemeres. El estilo fue tanto un instrumento colonial como una estética, pues sostenía que la dominación francesa podía estar en casa en Asia. Regresó a París en 1931 y murió dos años después.',
      it: "Ernest Hébrard vinse il Grand Prix de Rome nel 1904 e si costruì una reputazione due volte: prima con il piano di ricostruzione di Salonicco dopo l'incendio del 1917, poi, dal 1921, come direttore del Servizio di Architettura e Urbanistica dell'Indocina francese, con sede a Hanoi. Vi tracciò la stazione climatica di Da Lat, ridisegnò quartieri di Hanoi e Phnom Penh e realizzò una serie di edifici governativi e accademici in quello che chiamò style indochinois: telai in cemento armato avvolti da verande profonde, schermature a persiana e coperture in tegole a più ordini riprese da modelli vietnamiti e khmer. Lo stile fu uno strumento coloniale non meno che un'estetica, poiché sosteneva che il dominio francese potesse essere di casa in Asia. Rientrò a Parigi nel 1931 e morì due anni dopo.",
    },
    awards: ['Grand Prix de Rome (1904)'],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Ernest_H%C3%A9brard', title: 'Ernest Hébrard', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/National_Museum_of_Vietnamese_History', title: 'National Museum of Vietnamese History', license: 'CC BY-SA 4.0' },
    ],
  },

  // --- 1945-2000 ----------------------------------------------------------
  {
    id: 'leandro-locsin',
    wikidataId: 'Q2196637',
    name: 'Leandro Locsin',
    alternativeNames: ['Leandro Valencia Locsin', 'Lindy Locsin'],
    gender: 'man',
    born: 1928,
    died: 1994,
    floruit: { start: 1955, end: 1994, override: false },
    movements: [{ id: 'brutalism', primary: true }, { id: 'tropical-modernism', primary: false }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'cultural',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Leandro Locsin came to architecture from music: he was reading for a degree in piano at the University of Santo Tomás when he changed course. His first significant building, the round Church of the Holy Sacrifice at the University of the Philippines in 1955, put a thin concrete shell dome over an altar placed in the middle of the congregation, and was executed with a group of artists who would all later be named National Artists. A visit to the United States, and meetings with Paul Rudolph and Eero Saarinen, confirmed concrete as his material: cheap in the Philippines, easy to form, and capable of the cantilevered slabs that became his signature — a heavy volume that appears to float clear of the ground. He was named National Artist for Architecture in 1990.',
      es: 'Leandro Locsin llegó a la arquitectura desde la música: cursaba la carrera de piano en la Universidad de Santo Tomás cuando cambió de rumbo. Su primera obra importante, la iglesia circular del Santo Sacrificio en la Universidad de Filipinas, de 1955, cubrió con una lámina delgada de hormigón un altar situado en medio de la asamblea, y se ejecutó junto a un grupo de artistas que con el tiempo serían todos Artistas Nacionales. Un viaje a Estados Unidos y sus encuentros con Paul Rudolph y Eero Saarinen le confirmaron el hormigón como material: barato en Filipinas, fácil de encofrar y capaz de los forjados en voladizo que se volvieron su firma, un volumen pesado que parece flotar separado del suelo. Fue proclamado Artista Nacional de Arquitectura en 1990.',
      it: "Leandro Locsin arrivò all'architettura dalla musica: studiava pianoforte all'Università di Santo Tomás quando cambiò strada. La sua prima opera importante, la chiesa circolare del Santo Sacrificio all'Università delle Filippine, del 1955, coprì con una sottile calotta in calcestruzzo un altare collocato in mezzo all'assemblea, e fu realizzata con un gruppo di artisti che sarebbero poi divenuti tutti Artisti Nazionali. Un viaggio negli Stati Uniti e gli incontri con Paul Rudolph ed Eero Saarinen gli confermarono il calcestruzzo come materiale: economico nelle Filippine, facile da casserare e capace di quegli sbalzi che divennero la sua firma, un volume pesante che sembra galleggiare staccato dal suolo. Fu proclamato Artista Nazionale per l'Architettura nel 1990.",
    },
    awards: ['National Artist of the Philippines for Architecture (1990)'],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Leandro_Locsin', title: 'Leandro Locsin', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Cultural_Center_of_the_Philippines', title: 'Cultural Center of the Philippines', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'ken-yeang',
    wikidataId: 'Q522879',
    name: 'Ken Yeang',
    alternativeNames: ['Yeang Cheng Hai', 'Kenneth Yeang'],
    gender: 'man',
    born: 1948,
    died: null,
    floruit: { start: 1984, end: 2020, override: false },
    movements: [{ id: 'sustainable-architecture', primary: true }, { id: 'high-tech', primary: false }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'tower',
    signatureMaterial: 'steel-and-glass',
    portrait: {
      en: 'Ken Yeang was born in Penang, trained at the Architectural Association in London, and took a Cambridge doctorate with a thesis on incorporating ecological reasoning into the design of the built environment — an argument he has been building ever since, in Kuala Lumpur, at the practice Hamzah & Yeang. His subject is the tropical skyscraper: how a tall building in an equatorial climate can be shaded, cross-ventilated, planted and oriented so that its envelope does the work air conditioning normally does. The devices he standardised — spiralling planted terraces, sunshades sized by solar path, naturally ventilated lift lobbies, the roof-level louvre canopy — first appeared together at Menara Mesiniaga in 1992. The Guardian listed him in 2008 among fifty people who could save the planet.',
      es: 'Ken Yeang nació en Penang, se formó en la Architectural Association de Londres y se doctoró en Cambridge con una tesis sobre la incorporación del razonamiento ecológico al proyecto del entorno construido, un argumento que no ha dejado de desarrollar desde entonces en Kuala Lumpur, en el estudio Hamzah & Yeang. Su tema es el rascacielos tropical: cómo sombrear, ventilar de forma cruzada, plantar y orientar un edificio alto en clima ecuatorial para que su envolvente haga el trabajo que normalmente hace el aire acondicionado. Los recursos que él normalizó —terrazas ajardinadas en espiral, parasoles dimensionados según el recorrido solar, vestíbulos de ascensores ventilados naturalmente, la pérgola de lamas en cubierta— aparecieron juntos por primera vez en la Menara Mesiniaga en 1992. En 2008 The Guardian lo incluyó entre cincuenta personas capaces de salvar el planeta.',
      it: "Ken Yeang è nato a Penang, si è formato all'Architectural Association di Londra e ha conseguito un dottorato a Cambridge con una tesi sull'inserimento del ragionamento ecologico nel progetto dell'ambiente costruito: un argomento che da allora non ha smesso di sviluppare a Kuala Lumpur, nello studio Hamzah & Yeang. Il suo tema è il grattacielo tropicale: come ombreggiare, ventilare in modo incrociato, piantumare e orientare un edificio alto in clima equatoriale perché il suo involucro faccia il lavoro che di norma spetta al condizionamento. I dispositivi che ha codificato — terrazze piantumate a spirale, frangisole dimensionati sul percorso solare, atri degli ascensori a ventilazione naturale, la pensilina a lamelle in copertura — comparvero insieme per la prima volta alla Menara Mesiniaga nel 1992. Nel 2008 il Guardian lo incluse fra cinquanta persone capaci di salvare il pianeta.",
    },
    awards: ['Aga Khan Award for Architecture (1995)', 'Merdeka Award (2011)'],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Ken_Yeang', title: 'Ken Yeang', license: 'CC BY-SA 4.0' },
      { kind: 'institution', url: 'https://www.akdn.org/architecture/project/menara-mesiniaga', title: 'Aga Khan Development Network — Menara Mesiniaga', license: null },
    ],
  },
  {
    id: 'dang-viet-nga',
    wikidataId: '',
    name: 'Đặng Việt Nga',
    alternativeNames: ['Dang Viet Nga', 'Hằng Nga'],
    gender: 'woman',
    born: null,
    died: null,
    floruit: { start: 1990, end: 2020, override: false },
    movements: [{ id: 'expressionism', primary: true }, { id: 'organic-architecture', primary: false }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'domestic',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Đặng Việt Nga took a doctorate in architecture in Moscow and is the daughter of Trường Chinh, general secretary of the Communist Party of Vietnam. She has spent more than thirty years building a single house in Đà Lạt, and she builds it without drawings: instead of plans she makes paintings, and hands them to local craftsmen who have no formal training in construction to be turned into structure. The result, the Hằng Nga guesthouse, has almost no right angles — a five-storey concrete banyan tree with caves, webs and animal rooms grown out of it, which critics have called expressionist and which she says descends from the pine forests around Đà Lạt and from Antoni Gaudí. It remains her home, her office and, since 1990, a hotel open to the public.',
      es: 'Đặng Việt Nga se doctoró en arquitectura en Moscú y es hija de Trường Chinh, secretario general del Partido Comunista de Vietnam. Lleva más de treinta años construyendo una sola casa en Đà Lạt, y la construye sin planos: en lugar de proyectos pinta cuadros y los entrega a artesanos locales sin formación constructiva para que los conviertan en estructura. El resultado, la casa de huéspedes Hằng Nga, apenas tiene ángulos rectos: un baniano de hormigón de cinco alturas del que brotan cuevas, telarañas y habitaciones-animal, que la crítica ha llamado expresionista y que ella hace descender de los pinares de Đà Lạt y de Antoni Gaudí. Sigue siendo su vivienda, su estudio y, desde 1990, un hotel abierto al público.',
      it: "Đặng Việt Nga si è addottorata in architettura a Mosca ed è figlia di Trường Chinh, segretario generale del Partito Comunista del Vietnam. Da più di trent'anni costruisce una sola casa a Đà Lạt, e la costruisce senza disegni: invece di progetti dipinge quadri e li consegna ad artigiani locali privi di formazione edilizia perché li traducano in struttura. Il risultato, la pensione Hằng Nga, non ha quasi angoli retti: un banano di calcestruzzo alto cinque piani da cui germogliano grotte, ragnatele e stanze-animale, che la critica ha definito espressionista e che lei fa discendere dalle pinete attorno a Đà Lạt e da Antoni Gaudí. Resta la sua abitazione, il suo studio e, dal 1990, un albergo aperto al pubblico.",
    },
    awards: [],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/H%E1%BA%B1ng_Nga_guesthouse', title: 'Hằng Nga guesthouse', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://vi.wikipedia.org/wiki/Bi%E1%BB%87t_th%E1%BB%B1_H%E1%BA%B1ng_Nga', title: 'Biệt thự Hằng Nga (Vietnamese Wikipedia)', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'ling-siew-may',
    wikidataId: 'Q97818823',
    name: 'Ling Siew May',
    alternativeNames: ['林秀梅', 'Mrs Ong Teng Cheong'],
    gender: 'woman',
    born: 1937,
    died: 1999,
    floruit: { start: 1972, end: 1999, override: false },
    movements: 'unaffiliated',
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'educational',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Ling Siew May was born in Shanghai in 1937, separated from her family during the war and placed in an orphanage there, and reunited with her father in Singapore in 1948. She went to Nanyang Girls’ High School, then to the University of Adelaide, and in 1963 became the first Asian woman to graduate from it in architecture. In 1972 she and her husband Ong Teng Cheong founded the practice ONG&ONG, where she was a principal partner. When Ong became President of Singapore in 1993 she kept working, the first spouse of a head of state there to hold a job. Her last project, completed while she was terminally ill, was the new campus for her own school on Linden Drive; she opened it on 6 June 1999 and died seven weeks later.',
      es: 'Ling Siew May nació en Shanghái en 1937, quedó separada de su familia durante la guerra y fue internada allí en un orfanato, hasta reunirse con su padre en Singapur en 1948. Estudió en el Nanyang Girls’ High School y después en la Universidad de Adelaida, donde en 1963 fue la primera mujer asiática en licenciarse en arquitectura. En 1972 fundó con su marido, Ong Teng Cheong, el estudio ONG&ONG, del que fue socia principal. Cuando Ong accedió a la presidencia de Singapur en 1993 ella siguió trabajando: fue la primera cónyuge de un jefe de Estado del país con empleo propio. Su último proyecto, terminado ya enferma de gravedad, fue el nuevo campus de su propio colegio en Linden Drive; lo inauguró el 6 de junio de 1999 y murió siete semanas después.',
      it: "Ling Siew May nacque a Shanghai nel 1937, fu separata dalla famiglia durante la guerra e collocata lì in un orfanotrofio, per ricongiungersi al padre a Singapore nel 1948. Studiò alla Nanyang Girls’ High School e poi all'Università di Adelaide, dove nel 1963 fu la prima donna asiatica a laurearsi in architettura. Nel 1972 fondò con il marito Ong Teng Cheong lo studio ONG&ONG, di cui fu socia principale. Quando Ong divenne presidente di Singapore nel 1993 continuò a lavorare: fu la prima consorte di un capo di Stato del paese ad avere un impiego proprio. Il suo ultimo progetto, portato a termine ormai gravemente malata, fu il nuovo campus della sua stessa scuola in Linden Drive; lo inaugurò il 6 giugno 1999 e morì sette settimane più tardi.",
    },
    awards: [],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Ling_Siew_May', title: 'Ling Siew May', license: 'CC BY-SA 4.0' },
      { kind: 'institution', url: 'https://www.nlb.gov.sg/main/article-detail?cmsuuid=5ff9dd22-4fbc-4ed6-b419-999040269dd1', title: 'National Library Board Singapore, Infopedia — Ling Siew May', license: null },
    ],
  },

  // --- post-2000 ----------------------------------------------------------
  {
    id: 'kotchakorn-voraakhom',
    wikidataId: 'Q59160125',
    name: 'Kotchakorn Voraakhom',
    alternativeNames: ['กชกร วรอาคม', 'Kotchakorn Voraakhom (Landprocess)'],
    gender: 'woman',
    born: 1981,
    died: null,
    floruit: { start: 2015, end: 2021, override: false },
    movements: [{ id: 'sustainable-architecture', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'infrastructure',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Kotchakorn Voraakhom is a Thai landscape architect who works on a city that is sinking. Bangkok sits about a metre and a half above sea level, and her practice Landprocess designs public ground that is engineered to flood on purpose rather than to shed water into an overwhelmed drainage system. She read landscape architecture at Chulalongkorn University, took a graduate degree at Harvard, co-founded the community design non-profit Kounkuey Design Initiative, and returned to Bangkok in 2006; she has taught at Chulalongkorn since 2010 and founded the Porous City Network in 2017. Her built work — the Chulalongkorn Centenary Park, the rooftop farm at Thammasat University, the Chong Nonsi canal park — treats retention volume as the primary design material, drawing on the Thai kaem ling or "monkey cheeks" model of holding runoff for later use.',
      es: 'Kotchakorn Voraakhom es una paisajista tailandesa que trabaja sobre una ciudad que se hunde. Bangkok se asienta a metro y medio sobre el nivel del mar, y su estudio, Landprocess, proyecta suelo público calculado para inundarse a propósito en lugar de verter el agua a una red de drenaje desbordada. Estudió arquitectura del paisaje en la Universidad de Chulalongkorn, cursó un posgrado en Harvard, cofundó la organización de diseño comunitario Kounkuey Design Initiative y regresó a Bangkok en 2006; enseña en Chulalongkorn desde 2010 y fundó la Porous City Network en 2017. Su obra construida —el Parque del Centenario de Chulalongkorn, la granja en cubierta de la Universidad Thammasat, el parque del canal de Chong Nonsi— trata el volumen de retención como material de proyecto, apoyándose en el modelo tailandés del kaem ling o «carrillos de mono», que almacena la escorrentía para usarla después.',
      it: "Kotchakorn Voraakhom è una paesaggista thailandese che lavora su una città che sprofonda. Bangkok sta a circa un metro e mezzo sul livello del mare, e il suo studio Landprocess progetta suolo pubblico calcolato per allagarsi di proposito anziché scaricare l'acqua in una rete fognaria già in crisi. Ha studiato architettura del paesaggio alla Chulalongkorn University, ha conseguito un master a Harvard, ha cofondato l'organizzazione di progettazione partecipata Kounkuey Design Initiative ed è tornata a Bangkok nel 2006; insegna alla Chulalongkorn dal 2010 e nel 2017 ha fondato la Porous City Network. Le sue opere — il Parco del Centenario della Chulalongkorn, la fattoria pensile della Thammasat University, il parco del canale di Chong Nonsi — trattano il volume d'invaso come materiale di progetto, richiamando il modello thailandese del kaem ling, le «guance di scimmia» che trattengono l'acqua per usarla poi.",
    },
    awards: ['TED Fellow (2018)'],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Kotchakorn_Voraakhom', title: 'Kotchakorn Voraakhom', license: 'CC BY-SA 4.0' },
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q59160125', title: 'Kotchakorn Voraakhom (Q59160125)', license: null },
    ],
  },
  {
    id: 'wong-mun-summ',
    wikidataId: 'Q115592346',
    name: 'Wong Mun Summ',
    alternativeNames: ['黄文森', 'Wong Mun Summ (WOHA)'],
    gender: 'man',
    born: null,
    died: null,
    floruit: { start: 1994, end: 2020, override: false },
    movements: [{ id: 'sustainable-architecture', primary: true }, { id: 'tropical-modernism', primary: false }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'commercial',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Wong Mun Summ is the Singaporean co-founding director of WOHA, the practice he set up in 1994 with Richard Hassell after the two met working for Kerry Hill Architects; the name is made from the first two letters of their surnames, and the work is credited to the office rather than to either partner. WOHA began with private houses, won two Mass Rapid Transit station competitions in 2000, and drew international attention when the 1 Moulmein Rise apartment tower took the Aga Khan Award for Architecture in 2007. The office argues that density and greenery are not in conflict: its towers, hotels and public housing estates carry planted terraces, sky gardens and naturally ventilated circulation as structural parts of the brief rather than landscaping added afterwards.',
      es: 'Wong Mun Summ es el director cofundador singapurense de WOHA, el estudio que creó en 1994 con Richard Hassell tras coincidir ambos en Kerry Hill Architects; el nombre se forma con las dos primeras letras de sus apellidos y la autoría se atribuye a la oficina y no a ninguno de los dos socios. WOHA empezó con casas particulares, ganó en 2000 dos concursos de estaciones del metro y alcanzó proyección internacional cuando la torre de viviendas 1 Moulmein Rise obtuvo el Premio Aga Khan de Arquitectura en 2007. El estudio sostiene que densidad y vegetación no se contraponen: sus torres, hoteles y promociones de vivienda pública incorporan terrazas plantadas, jardines en altura y circulaciones ventiladas de forma natural como partes estructurales del encargo, no como paisajismo añadido después.',
      it: "Wong Mun Summ è il direttore cofondatore singaporiano di WOHA, lo studio nato nel 1994 con Richard Hassell dopo che i due si erano conosciuti da Kerry Hill Architects; il nome si compone delle prime due lettere dei loro cognomi e la paternità delle opere è attribuita allo studio e non a uno dei due soci. WOHA cominciò con case private, vinse nel 2000 due concorsi per stazioni della metropolitana e ottenne visibilità internazionale quando la torre residenziale 1 Moulmein Rise ricevette l'Aga Khan Award for Architecture nel 2007. Lo studio sostiene che densità e verde non siano in conflitto: torri, alberghi e complessi di edilizia pubblica portano terrazze piantumate, giardini pensili e percorsi a ventilazione naturale come parti strutturali del programma, non come paesaggio aggiunto in seguito.",
    },
    awards: ['Aga Khan Award for Architecture (2007, with WOHA)'],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/WOHA', title: 'WOHA', license: 'CC BY-SA 4.0' },
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q115592346', title: 'Wong Mun Summ (Q115592346)', license: null },
    ],
  },
  {
    id: 'richard-hassell',
    // No standalone Wikidata item for the contemporary architect; the only
    // "Richard Hassell" on Wikidata (Q21165472) is an 18th-century Royal
    // Society member and unrelated. Practice-based in Singapore since 1989,
    // so owned by this slice under contract §3, not by his native Australia.
    wikidataId: '',
    name: 'Richard Hassell',
    alternativeNames: ['Richard Hassell (WOHA)'],
    gender: 'man',
    born: 1966,
    died: null,
    floruit: { start: 1994, end: 2020, override: false },
    movements: [{ id: 'sustainable-architecture', primary: true }, { id: 'tropical-modernism', primary: false }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'commercial',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Richard Hassell is the Australian-born half of WOHA, the Singapore practice he founded in 1994 with Wong Mun Summ, whom he met while both were working for Kerry Hill Architects. Born in 1966, he trained at the University of Western Australia and later took a master’s degree at RMIT in Melbourne, then settled in Singapore in 1989 and has practised there since. WOHA credits every project to the office rather than to either founder, and Hassell has been as much the firm’s public voice on its central argument — that tropical density and greenery are not opposed — as its designer, sitting on the boards of the DesignSingapore Council and the Building and Construction Authority and holding the Seidler Chair in architectural practice at the University of New South Wales.',
      es: 'Richard Hassell es la mitad australiana de WOHA, el estudio de Singapur que fundó en 1994 con Wong Mun Summ, a quien conoció mientras ambos trabajaban para Kerry Hill Architects. Nacido en 1966, se formó en la Universidad de Australia Occidental y cursó después un máster en la RMIT de Melbourne; se instaló en Singapur en 1989 y ejerce allí desde entonces. WOHA atribuye cada proyecto a la oficina y no a ninguno de sus fundadores, y Hassell ha sido tanto la voz pública del estudio en torno a su argumento central —que densidad tropical y vegetación no se oponen— como su proyectista, además de formar parte de los consejos del DesignSingapore Council y de la Building and Construction Authority y ocupar la cátedra Seidler de práctica arquitectónica en la Universidad de Nueva Gales del Sur.',
      it: "Richard Hassell è la metà australiana di WOHA, lo studio di Singapore che fondò nel 1994 con Wong Mun Summ, conosciuto mentre entrambi lavoravano per Kerry Hill Architects. Nato nel 1966, si è formato all'Università dell'Australia Occidentale e ha poi conseguito un master alla RMIT di Melbourne; si è stabilito a Singapore nel 1989 e vi esercita da allora. WOHA attribuisce ogni progetto allo studio e non a uno dei due fondatori, e Hassell ne è stato tanto la voce pubblica sull'argomento centrale — che densità tropicale e verde non si oppongono — quanto il progettista, facendo parte dei consigli del DesignSingapore Council e della Building and Construction Authority e occupando la cattedra Seidler di pratica architettonica all'Università del Nuovo Galles del Sud.",
    },
    awards: ['Aga Khan Award for Architecture (2007, with WOHA)'],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/WOHA', title: 'WOHA', license: 'CC BY-SA 4.0' },
      { kind: 'institution', url: 'https://www.ctbuh.org/people-profile/richard-hassell', title: 'Council on Tall Buildings and Urban Habitat — Richard Hassell', license: null },
    ],
  },
  {
    id: 'ngo-viet-thu',
    wikidataId: 'Q3339372',
    name: 'Ngô Viết Thụ',
    alternativeNames: [],
    gender: 'man',
    born: 1927,
    died: 2000,
    floruit: { start: 1961, end: 1990, override: false },
    movements: 'unaffiliated',
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'civic',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Ngô Viết Thụ trained at Vietnam\'s Đà Lạt architecture school before continuing at the École des Beaux-Arts in Paris, where in 1955 he became the first Vietnamese architect to win the Grand Prix de Rome, spending three years afterward at the Villa Medici. Returning to South Vietnam around 1960, he built for the state repeatedly through the decade — university campuses at Huế and Thủ Đức, an atomic research centre at Đà Lạt, and the palace commissioned after the 1962 bombing of its predecessor — combining a reinforced-concrete modern structure with facade screens stylised from traditional Vietnamese bamboo lattice-blinds and pagoda ornament. He continued to build into the 1990s and became, in 1962, the first Asian architect named an honorary fellow of the American Institute of Architects.',
      es: 'Ngô Viết Thụ se formó en la escuela de arquitectura de Đà Lạt, en Vietnam, antes de continuar en la École des Beaux-Arts de París, donde en 1955 se convirtió en el primer arquitecto vietnamita en ganar el Gran Premio de Roma, pasando después tres años en la Villa Medici. De vuelta en Vietnam del Sur hacia 1960, construyó repetidamente para el Estado a lo largo de la década —campus universitarios en Huế y Thủ Đức, un centro de investigación atómica en Đà Lạt y el palacio encargado tras el bombardeo de 1962 de su predecesor—, combinando una estructura moderna de hormigón armado con celosías de fachada estilizadas a partir de las persianas tradicionales de bambú y el ornamento de las pagodas vietnamitas. Siguió construyendo hasta los años noventa y, en 1962, se convirtió en el primer arquitecto asiático nombrado miembro honorario del Instituto Americano de Arquitectos.',
      it: 'Ngô Viết Thụ si formò alla scuola di architettura di Đà Lạt, in Vietnam, prima di proseguire all\'École des Beaux-Arts di Parigi, dove nel 1955 divenne il primo architetto vietnamita a vincere il Grand Prix de Rome, trascorrendo poi tre anni a Villa Medici. Tornato nel Vietnam del Sud verso il 1960, costruì ripetutamente per lo Stato nel corso del decennio — campus universitari a Huế e Thủ Đức, un centro di ricerca atomica a Đà Lạt e il palazzo commissionato dopo il bombardamento del 1962 del suo predecessore —, unendo una struttura moderna in cemento armato a schermature di facciata stilizzate sulle tradizionali persiane di bambù e sull\'ornato delle pagode vietnamite. Continuò a costruire fino agli anni Novanta e, nel 1962, divenne il primo architetto asiatico nominato membro onorario dell\'American Institute of Architects.',
    },
    awards: ['Grand Prix de Rome (1955)', 'Honorary Fellow, American Institute of Architects (1962)'],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q3339372', title: 'Ngô Viết Thụ (Q3339372)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Ng%C3%B4_Vi%E1%BA%BFt_Th%E1%BB%A5', title: 'Ngô Viết Thụ', license: 'CC BY-SA 4.0' },
    ],
  },
  {
    id: 'vann-molyvann',
    wikidataId: 'Q379178',
    name: 'Vann Molyvann',
    alternativeNames: [],
    gender: 'man',
    born: 1926,
    died: 2017,
    floruit: { start: 1956, end: 1970, override: false },
    movements: [{ id: 'tropical-modernism', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'civic',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Vann Molyvann studied architecture in Paris on a state scholarship through the 1950s, training partly under Le Corbusier, before returning to newly independent Cambodia in 1956 and becoming Norodom Sihanouk\'s de facto state architect. Over the following fourteen years he built more than one hundred structures — the Independence Monument, the National Sports Complex, Chaktomuk Conference Hall, university buildings and the White Building housing estate — in a manner scholars later named New Khmer Architecture: modern reinforced-concrete construction carrying forms translated whole from Angkorian temples and adapted to Cambodia\'s monsoon climate. The 1970 coup and the Khmer Rouge years sent him into exile in Switzerland; he returned in 1991 to lead the Angkor conservation authority until 2001, and received the Nikkei Asia Prize in 2013.',
      es: 'Vann Molyvann estudió arquitectura en París con una beca estatal durante los años cincuenta, formándose en parte con Le Corbusier, antes de volver en 1956 a una Camboya recién independizada y convertirse en el arquitecto de facto del Estado de Norodom Sihanouk. En los catorce años siguientes construyó más de cien edificios —el Monumento a la Independencia, el Complejo Deportivo Nacional, la Sala de Conferencias Chaktomuk, edificios universitarios y el conjunto de vivienda White Building— en un estilo que los historiadores llamarían después Nueva Arquitectura Jemer: construcción moderna de hormigón armado que traslada formas enteras de los templos angkorianos y las adapta al clima monzónico de Camboya. El golpe de 1970 y los años de los jemeres rojos lo enviaron al exilio en Suiza; volvió en 1991 para dirigir la autoridad de conservación de Angkor hasta 2001, y recibió el Premio Nikkei de Asia en 2013.',
      it: 'Vann Molyvann studiò architettura a Parigi con una borsa di studio statale negli anni Cinquanta, formandosi in parte con Le Corbusier, prima di tornare nel 1956 in una Cambogia appena indipendente e diventare l\'architetto di fatto dello Stato di Norodom Sihanouk. Nei quattordici anni successivi costruì oltre cento edifici — il Monumento all\'Indipendenza, il Complesso Sportivo Nazionale, la Sala Conferenze Chaktomuk, edifici universitari e il complesso residenziale White Building — in uno stile che gli storici avrebbero poi chiamato Nuova Architettura Khmer: costruzione moderna in cemento armato che trasferisce forme intere dai templi angkoriani e le adatta al clima monsonico della Cambogia. Il colpo di stato del 1970 e gli anni dei khmer rossi lo mandarono in esilio in Svizzera; tornò nel 1991 per dirigere l\'autorità di conservazione di Angkor fino al 2001, e ricevette il Premio Nikkei Asia nel 2013.',
    },
    awards: ['Nikkei Asia Prize, Culture category (2013)'],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q379178', title: 'Vann Molyvann (Q379178)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Vann_Molyvann', title: 'Vann Molyvann', license: 'CC BY-SA 4.0' },
    ],
  },
];
