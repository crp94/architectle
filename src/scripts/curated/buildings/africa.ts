import type { Building } from '@/types/building';

// Wave 5, agent 9d — Northern Africa (UN M49 "Northern Africa": DZ, EG, LY, MA,
// SD, TN). Six buildings: one pre-1800, one 1800–1945, three 1945–2000, one
// post-2000.
//
// Every image licence below was read from the live Commons file page, not
// inferred from the file being hosted on Commons. image.width/height are left
// at 0 for Task 10 to record.
export const AFRICA_BUILDINGS: Building[] = [
  {
    id: 'bab-dar-assinaa',
    wikidataId: 'Q67195111',
    name: {
      en: 'Bab Dar Assinaa',
      es: 'Bab Dar Assinaa',
      it: 'Bab Dar Assinaa',
    },
    architectId: 'mohamed-ben-ali',
    location: {
      city: 'Salé', countryCode: 'MA', lat: 34.03329, lon: -6.82161,
    },
    inception: 1260,
    completed: 1261,
    demolished: null,
    typology: 'infrastructure',
    materials: ['stone'],
    structure: {
      en: 'A pointed horseshoe arch of dressed limestone voussoirs, carried on two solid ashlar '
        + 'bastions and closed above by a merlon-capped curtain that ties the gate into the town wall.',
      es: 'Un arco de herradura apuntado de dovelas de caliza labrada, apoyado en dos bastiones '
        + 'macizos de sillería y rematado por un lienzo almenado que traba la puerta con la muralla.',
      it: 'Un arco a ferro di cavallo acuto in conci di calcare squadrato, portato da due bastioni '
        + 'massicci in pietra da taglio e chiuso in alto da una cortina merlata che lega la porta alle mura.',
    },
    program: {
      en: 'Built for the Marinid sultan Abu Yusuf Yaqub ibn Abd al-Haqq as the landward gate of the '
        + "Salé arsenal, where the kingdom of Fes built and stored its ships and weapons.",
      es: 'Construida para el sultán meriní Abu Yusuf Yaqub ibn Abd al-Haqq como puerta terrestre de '
        + 'las atarazanas de Salé, donde el reino de Fez fabricaba y guardaba sus naves y sus armas.',
      it: 'Costruita per il sultano merinide Abu Yusuf Yaqub ibn Abd al-Haqq come porta di terra '
        + 'dell’arsenale di Salé, dove il regno di Fes costruiva e custodiva navi e armi.',
    },
    heritage: 'national',
    currentUse: {
      en: 'A pedestrian gate in the southern wall of the Salé medina, listed as Moroccan national heritage.',
      es: 'Puerta peatonal en la muralla sur de la medina de Salé, inscrita como patrimonio nacional marroquí.',
      it: 'Porta pedonale nelle mura meridionali della medina di Salé, iscritta al patrimonio nazionale marocchino.',
    },
    detailRect: {
      x: 0.38, y: 0.40, w: 0.32, h: 0.34,
    },
    image: {
      commonsFile: 'Bab Dar Assinaa.jpg',
      photographer: 'Rachidourkia',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bab_Dar_Assinaa.jpg',
      width: 0,
      height: 0,
    },
    dossier: {
      en: 'In 1260 a Castilian fleet took Salé and sacked it. The Marinid sultan Abu Yusuf Yaqub ibn '
        + 'Abd al-Haqq retook the town and decided to rebuild it as the principal shipyard and '
        + 'commercial port of the kingdom of Fes, from which the war in al-Andalus could be '
        + 'resupplied. He gave the work to an Andalusi architect from Seville, Mohamed Ben Ali, and '
        + 'Arabic sources date the gate precisely: 658 AH, 1261 CE. Bab Dar Assinaa — the Gate of the '
        + 'Arsenal, known locally also as Bab al-Farran and Bab Antar — opened onto the yard where '
        + 'ships and weapons were made and stored, which is what its name says. Its companion, the '
        + 'far larger Bab el-Mrissa, was vaulted over a canal so that galleys could be brought inside '
        + 'the walls. The pair are among the very few buildings anywhere in the medieval Maghreb '
        + 'whose architect is named rather than absorbed into an anonymous masons\' guild.',
      es: 'En 1260 una flota castellana tomó Salé y la saqueó. El sultán meriní Abu Yusuf Yaqub ibn '
        + 'Abd al-Haqq recuperó la ciudad y decidió rehacerla como principal astillero y puerto '
        + 'comercial del reino de Fez, desde el que podría abastecerse la guerra en al-Ándalus. '
        + 'Encargó la obra a un arquitecto andalusí de Sevilla, Mohamed Ben Ali, y las fuentes árabes '
        + 'fechan la puerta con precisión: 658 de la Hégira, 1261. Bab Dar Assinaa —la puerta de las '
        + 'atarazanas, conocida también como Bab al-Farran y Bab Antar— se abría al recinto donde se '
        + 'fabricaban y guardaban naves y armas, que es exactamente lo que dice su nombre. Su '
        + 'compañera, la mucho mayor Bab el-Mrissa, se abovedó sobre un canal para que las galeras '
        + 'entraran dentro de la muralla. Ambas figuran entre los poquísimos edificios del Magreb '
        + 'medieval cuyo arquitecto tiene nombre en vez de disolverse en un gremio anónimo de albañiles.',
      it: 'Nel 1260 una flotta castigliana prese Salé e la saccheggiò. Il sultano merinide Abu Yusuf '
        + 'Yaqub ibn Abd al-Haqq riconquistò la città e decise di rifarla come principale cantiere '
        + 'navale e porto commerciale del regno di Fes, da cui rifornire la guerra in al-Andalus. '
        + 'Affidò l’opera a un architetto andaluso di Siviglia, Mohamed Ben Ali, e le fonti arabe '
        + 'datano la porta con precisione: 658 dell’Egira, 1261. Bab Dar Assinaa — la porta '
        + 'dell’arsenale, nota localmente anche come Bab al-Farran e Bab Antar — si apriva sul '
        + 'recinto dove si costruivano e si custodivano navi e armi, che è esattamente ciò che dice '
        + 'il suo nome. La sua compagna, la ben più grande Bab el-Mrissa, fu voltata su un canale '
        + 'perché le galee potessero entrare dentro le mura. Le due porte sono fra i pochissimi '
        + 'edifici del Maghreb medievale il cui architetto ha un nome invece di sparire in una '
        + 'corporazione anonima di muratori.',
    },
    context: null,
    sources: [
      {
        kind: 'wikidata',
        url: 'https://www.wikidata.org/wiki/Q67195111',
        title: 'Bab Dar Assinaa (Q67195111)',
        license: null,
      },
      {
        kind: 'wikipedia',
        url: 'https://ar.wikipedia.org/wiki/%D8%A8%D8%A7%D8%A8_%D8%AF%D8%A7%D8%B1_%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D8%A9',
        title: 'باب دار الصناعة — ويكيبيديا',
        license: 'CC BY-SA 4.0',
      },
      {
        kind: 'wikipedia',
        url: 'https://fr.wikipedia.org/wiki/Mohamed_Ben_Ali_(architecte)',
        title: 'Mohamed Ben Ali (architecte) — Wikipédia',
        license: 'CC BY-SA 4.0',
      },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Bab_el-Mrissa',
        title: 'Bab el-Mrissa — Wikipedia',
        license: 'CC BY-SA 4.0',
      },
    ],
    tier: 'canon',
  },
  {
    id: 'uaddan-hotel',
    wikidataId: 'Q4704929',
    name: {
      en: 'Uaddan Hotel and Casino',
      es: 'Hotel y Casino Uaddan',
      it: 'Hotel e Casinò Uaddan',
    },
    architectId: 'florestano-di-fausto',
    location: {
      city: 'Tripoli', countryCode: 'LY', lat: 32.89333, lon: 13.19111,
    },
    inception: 1935,
    completed: 1936,
    demolished: null,
    typology: 'commercial',
    materials: ['mixed'],
    structure: {
      en: 'Rendered load-bearing walls stepped around an open court, with a ground-floor arcade of '
        + 'round arches carrying a pierced balustrade and shallow domes over the low wings.',
      es: 'Muros de carga revocados que escalonan un patio abierto, con una arcada de medio punto en '
        + 'planta baja que sostiene una balaustrada calada y cúpulas rebajadas sobre las alas bajas.',
      it: 'Murature portanti intonacate che digradano attorno a una corte aperta, con un’arcata a '
        + 'tutto sesto al piano terra che sostiene una balaustra traforata e cupole ribassate sulle ali basse.',
    },
    program: {
      en: 'A luxury hotel with a casino and a 500-seat theatre, built for the colonial administration '
        + 'of Italian Libya as the flagship of its tourist system.',
      es: 'Hotel de lujo con casino y teatro de 500 localidades, construido para la administración '
        + 'colonial de la Libia italiana como buque insignia de su sistema turístico.',
      it: 'Albergo di lusso con casinò e teatro da 500 posti, costruito per l’amministrazione '
        + 'coloniale della Libia italiana come ammiraglia del suo sistema turistico.',
    },
    heritage: null,
    currentUse: {
      en: 'A hotel again since a restoration completed in 2009; no national heritage designation is on record.',
      es: 'De nuevo hotel desde una restauración terminada en 2009; no consta ninguna declaración de '
        + 'patrimonio nacional.',
      it: 'Di nuovo albergo dopo un restauro concluso nel 2009; non risulta alcuna dichiarazione di '
        + 'tutela nazionale.',
    },
    detailRect: {
      x: 0.24, y: 0.62, w: 0.30, h: 0.21,
    },
    image: {
      commonsFile: 'Waddan Hotel Tripoli Libya Internal Courtyard.JPG',
      photographer: 'Abdul-Jawad Elhusuni (عبدالجواد الحسوني)',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Waddan_Hotel_Tripoli_Libya_Internal_Courtyard.JPG',
      width: 0,
      height: 0,
    },
    dossier: {
      en: 'The Uaddan — named after the Barbary sheep of the Libyan mountains — went up on the '
        + 'Tripoli seafront in 1935 and opened as the grandest hotel in the colony, with a casino and '
        + 'a five-hundred-seat theatre attached. Florestano Di Fausto designed it, working with '
        + 'Stefano Gatti-Casazza, one year after Italo Balbo had unified Tripolitania and Cyrenaica '
        + 'into a single colony and begun turning it into a destination for Italian tourists. The '
        + 'building is Di Fausto at his most characteristic: ochre-pink render, round-arched arcades, '
        + 'shallow domes and a timber mashrabiya balcony, an Italian hotel wearing a North African '
        + 'vocabulary for visitors who had come to see North Africa. Brian McLaren reads it as the '
        + 'most significant of Di Fausto\'s African buildings and as an instrument of that tourist '
        + 'system rather than a neutral piece of hospitality architecture. It was restored between '
        + '2007 and 2009 and reopened as a luxury hotel.',
      es: 'El Uaddan —llamado así por el arruí de las montañas libias— se levantó en el frente '
        + 'marítimo de Trípoli en 1935 y abrió como el hotel más señorial de la colonia, con casino y '
        + 'un teatro de quinientas localidades anexos. Lo proyectó Florestano Di Fausto, con Stefano '
        + 'Gatti-Casazza, un año después de que Italo Balbo unificara Tripolitania y Cirenaica en una '
        + 'sola colonia y empezara a convertirla en destino para el turismo italiano. El edificio es '
        + 'Di Fausto en estado puro: revoco de un rosa ocre, arcadas de medio punto, cúpulas '
        + 'rebajadas y un mirador de celosía de madera; un hotel italiano vestido con vocabulario '
        + 'norteafricano para visitantes que venían a ver el norte de África. Brian McLaren lo lee '
        + 'como la más importante de sus obras africanas y como instrumento de aquel sistema '
        + 'turístico, no como arquitectura hotelera neutral. Fue restaurado entre 2007 y 2009 y '
        + 'reabrió como hotel de lujo.',
      it: 'L’Uaddan — chiamato come il muflone delle montagne libiche — sorse sul lungomare di '
        + 'Tripoli nel 1935 e aprì come l’albergo più signorile della colonia, con annessi un casinò '
        + 'e un teatro da cinquecento posti. Lo progettò Florestano Di Fausto, con Stefano '
        + 'Gatti-Casazza, un anno dopo che Italo Balbo aveva unificato Tripolitania e Cirenaica in '
        + 'un’unica colonia e cominciato a trasformarla in meta del turismo italiano. L’edificio è Di '
        + 'Fausto allo stato puro: intonaco rosa ocra, arcate a tutto sesto, cupole ribassate e una '
        + 'moucharabieh lignea; un albergo italiano che indossa un lessico nordafricano per visitatori '
        + 'venuti a vedere il Nordafrica. Brian McLaren lo legge come la più importante delle sue '
        + 'opere africane e come strumento di quel sistema turistico, non come architettura '
        + 'alberghiera neutrale. È stato restaurato fra il 2007 e il 2009 e ha riaperto come albergo di lusso.',
    },
    context: {
      body: {
        en: 'Italy took Tripolitania and Cyrenaica from the Ottoman Empire in the war of 1911–12. '
          + 'From 1923 the Senussi order led an armed resistance in Cyrenaica; the Italian pacification '
          + 'campaign that suppressed it, completed in 1932, resulted in the deaths of a quarter of '
          + "Cyrenaica's population. In 1934 the governor Italo Balbo unified the two colonies as "
          + 'Italian Libya with Tripoli as its capital, and the colony came to hold some 150,000 '
          + 'Italian settlers. The Uaddan was commissioned in that immediate aftermath and formed part '
          + "of Balbo's programme of tourist and settlement building. Italy was defeated in Libya in "
          + '1943 and relinquished its claim under the 1947 Paris Peace Treaty; Libya became '
          + 'independent in 1951.',
        es: 'Italia arrebató Tripolitania y Cirenaica al Imperio otomano en la guerra de 1911-1912. '
          + 'Desde 1923 la orden senusí encabezó una resistencia armada en Cirenaica; la campaña '
          + 'italiana de «pacificación» que la aplastó, concluida en 1932, causó la muerte de la cuarta '
          + 'parte de la población de Cirenaica. En 1934 el gobernador Italo Balbo unificó ambas '
          + 'colonias como Libia italiana con capital en Trípoli, y la colonia llegó a albergar unos '
          + '150.000 colonos italianos. El Uaddan se encargó justo después y formó parte del programa '
          + 'de construcción turística y colonizadora de Balbo. Italia fue derrotada en Libia en 1943 y '
          + 'renunció a sus reclamaciones en el Tratado de París de 1947; Libia fue independiente en 1951.',
        it: 'L’Italia tolse Tripolitania e Cirenaica all’Impero ottomano nella guerra del 1911-1912. '
          + 'Dal 1923 la confraternita senussita guidò una resistenza armata in Cirenaica; la campagna '
          + 'italiana di «pacificazione» che la stroncò, conclusa nel 1932, causò la morte di un quarto '
          + 'della popolazione della Cirenaica. Nel 1934 il governatore Italo Balbo unificò le due '
          + 'colonie in Libia italiana con capitale Tripoli, e la colonia arrivò a contare circa '
          + '150.000 coloni italiani. L’Uaddan fu commissionato in quell’immediato dopoguerra coloniale '
          + 'e fece parte del programma di edilizia turistica e di colonizzazione di Balbo. L’Italia fu '
          + 'sconfitta in Libia nel 1943 e rinunciò alle sue rivendicazioni con il Trattato di Parigi '
          + 'del 1947; la Libia divenne indipendente nel 1951.',
      },
      sources: [
        {
          kind: 'wikipedia',
          url: 'https://en.wikipedia.org/wiki/Italian_Libya',
          title: 'Italian Libya — Wikipedia',
          license: 'CC BY-SA 4.0',
        },
        {
          kind: 'publication',
          url: 'https://www.hfsbooks.com/books/architecture-and-tourism-in-italian-colonial-libya-mclaren/',
          title: 'Brian L. McLaren, Architecture and Tourism in Italian Colonial Libya: An Ambivalent Modernism (University of Washington Press, 2006)',
          license: null,
        },
      ],
    },
    sources: [
      {
        kind: 'wikidata',
        url: 'https://www.wikidata.org/wiki/Q4704929',
        title: 'Al Waddan Hotel (Q4704929)',
        license: null,
      },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Al_Waddan_Hotel',
        title: 'Al Waddan Hotel — Wikipedia',
        license: 'CC BY-SA 4.0',
      },
      {
        kind: 'publication',
        url: 'https://www.hfsbooks.com/books/architecture-and-tourism-in-italian-colonial-libya-mclaren/',
        title: 'Brian L. McLaren, Architecture and Tourism in Italian Colonial Libya: An Ambivalent Modernism (University of Washington Press, 2006)',
        license: null,
      },
    ],
    tier: 'deep',
  },
  {
    id: 'new-gourna-village',
    wikidataId: 'Q14218502',
    name: {
      en: 'New Gourna Village',
      es: 'Poblado de Nueva Gurna',
      it: 'Villaggio di Nuova Gurna',
    },
    architectId: 'hassan-fathy',
    location: {
      city: 'Luxor', countryCode: 'EG', lat: 25.71482, lon: 32.62281,
    },
    inception: 1946,
    completed: 1952,
    demolished: null,
    typology: 'housing',
    materials: ['earth'],
    structure: {
      en: 'Sun-dried mud brick throughout, roofed by Nubian barrel vaults and pendentive domes laid '
        + 'in leaning courses without centring, so that no timber formwork was needed.',
      es: 'Adobe secado al sol en toda la obra, cubierto con bóvedas de cañón nubias y cúpulas sobre '
        + 'pechinas ejecutadas por hiladas inclinadas sin cimbra, de modo que no hizo falta encofrado de madera.',
      it: 'Mattoni crudi essiccati al sole in tutta l’opera, coperti da volte a botte nubiane e '
        + 'cupole su pennacchi eseguite per corsi inclinati senza centine, così da non richiedere casseforme lignee.',
    },
    program: {
      en: 'A village with mosque, market, theatre and school, commissioned by the Egyptian '
        + 'Department of Antiquities to rehouse the community of Old Gourna off the Theban necropolis.',
      es: 'Un poblado con mezquita, mercado, teatro y escuela, encargado por el Servicio de '
        + 'Antigüedades egipcio para realojar a la comunidad de la vieja Gurna fuera de la necrópolis tebana.',
      it: 'Un villaggio con moschea, mercato, teatro e scuola, commissionato dal Servizio delle '
        + 'antichità egiziano per trasferire la comunità della vecchia Gurna fuori dalla necropoli tebana.',
    },
    heritage: 'unesco',
    currentUse: {
      en: 'A living village inside the World Heritage property of Ancient Thebes; roughly 40 per cent '
        + 'of the original fabric has been lost and UNESCO has run a safeguarding project since 2009.',
      es: 'Poblado habitado dentro del bien Patrimonio Mundial de la antigua Tebas; se ha perdido en '
        + 'torno al 40 % del tejido original y la UNESCO mantiene desde 2009 un proyecto de salvaguarda.',
      it: 'Villaggio abitato all’interno del sito Patrimonio Mondiale dell’antica Tebe; circa il 40 '
        + 'per cento del tessuto originario è andato perduto e dal 2009 l’UNESCO conduce un progetto '
        + 'di salvaguardia.',
    },
    detailRect: {
      x: 0.60, y: 0.38, w: 0.25, h: 0.25,
    },
    image: {
      commonsFile: 'Gurna Mosque R01.jpg',
      photographer: 'Marc Ryckaert',
      license: 'CC BY 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Gurna_Mosque_R01.jpg',
      width: 0,
      height: 0,
    },
    dossier: {
      en: 'The people of Old Gourna lived on the Theban necropolis, above the tombs, and traded in '
        + 'what came out of them. In 1946 the Department of Antiquities decided to move them, and '
        + 'gave Hassan Fathy the village. He built it in mud brick, roofed with the Nubian vault he '
        + 'had learned in 1941 — laid in leaning courses, no centring, no imported timber — because '
        + 'steel, cement and glass made no economic sense for a poor country. He tried to consult '
        + 'every family and argued for ethnographers in the planning team. The Gournis did not want '
        + 'to go: relocation cut them off from their livelihood, work halted, and only a fraction of '
        + 'the plan was ever built. Fathy called the experiment a failure in Architecture for the '
        + 'Poor. It made his international reputation anyway. The mosque, market and theatre survive; '
        + 'about 40 per cent of the fabric does not, and UNESCO has been trying to save the rest since 2009.',
      es: 'Los habitantes de la vieja Gurna vivían sobre la necrópolis tebana, encima de las tumbas, '
        + 'y comerciaban con lo que salía de ellas. En 1946 el Servicio de Antigüedades decidió '
        + 'trasladarlos y entregó el poblado a Hassan Fathy. Lo construyó en adobe, cubierto con la '
        + 'bóveda nubia que había aprendido en 1941 —hiladas inclinadas, sin cimbra, sin madera '
        + 'importada—, porque el acero, el cemento y el vidrio no tenían sentido económico en un país '
        + 'pobre. Intentó consultar a cada familia y defendió que hubiera etnógrafos en el equipo de '
        + 'planeamiento. Los gurnauíes no querían irse: el traslado los apartaba de su medio de vida, '
        + 'la obra se detuvo y del plan se levantó solo una fracción. Fathy llamó fracaso '
        + 'al experimento en Arquitectura para los pobres. Aun así le dio renombre internacional. La '
        + 'mezquita, el mercado y el teatro siguen en pie; cerca del 40 % del tejido no, y la UNESCO '
        + 'intenta salvar el resto desde 2009.',
      it: 'Gli abitanti della vecchia Gurna vivevano sulla necropoli tebana, sopra le tombe, e '
        + 'commerciavano ciò che ne usciva. Nel 1946 il Servizio delle antichità decise di '
        + 'trasferirli e affidò il villaggio a Hassan Fathy. Lo costruì in mattoni crudi, coperto con '
        + 'la volta nubiana che aveva imparato nel 1941 — corsi inclinati, niente centine, niente '
        + 'legname importato — perché acciaio, cemento e vetro non avevano senso economico in un '
        + 'paese povero. Cercò di consultare ogni famiglia e sostenne che nella squadra di '
        + 'pianificazione servissero etnografi. I gurnawi non volevano andarsene: il trasferimento li '
        + 'tagliava fuori dalla loro fonte di reddito, il cantiere si fermò e del piano fu costruita '
        + 'solo una frazione. Fathy definì l’esperimento un fallimento in Architettura per '
        + 'i poveri. Gli diede comunque fama internazionale. Moschea, mercato e teatro sopravvivono; '
        + 'circa il 40 per cento del tessuto no, e dal 2009 l’UNESCO cerca di salvare il resto.',
    },
    context: {
      body: {
        en: 'New Gourna was a resettlement scheme, not a housing programme its inhabitants had asked '
          + 'for. The community of Old Gourna lived within the World Heritage area of Ancient Thebes '
          + 'with its Necropolis, and its relocation was pursued as a way of reducing damage to the '
          + 'pharaonic tombs. English Wikipedia records that the villagers were not enthusiastic about '
          + 'moving, because it cut them off from their existing livelihood of trading in '
          + 'archaeological finds; Fathy himself wrote that the Gourna experiment failed and that '
          + 'construction was halted before the village was complete. UNESCO began a safeguarding '
          + 'project for what remains in 2009, after the World Heritage Committee and an international '
          + "petition of specialists raised the alarm over the village's condition.",
        es: 'Nueva Gurna fue un plan de realojo, no un programa de vivienda que sus habitantes '
          + 'hubieran pedido. La comunidad de la vieja Gurna vivía dentro del área Patrimonio Mundial '
          + 'de la antigua Tebas y su necrópolis, y su traslado se impulsó como forma de reducir los '
          + 'daños a las tumbas faraónicas. La Wikipedia en inglés recoge que los vecinos no acogieron '
          + 'con entusiasmo la mudanza, porque los separaba de su medio de vida, el comercio de '
          + 'hallazgos arqueológicos; el propio Fathy escribió que el experimento de Gurna fracasó y '
          + 'que la obra se detuvo antes de terminar el poblado. La UNESCO inició en 2009 un proyecto '
          + 'de salvaguarda de lo que queda, después de que el Comité del Patrimonio Mundial y una '
          + 'petición internacional de especialistas alertaran del estado del conjunto.',
        it: 'Nuova Gurna fu un piano di trasferimento, non un programma abitativo che i suoi abitanti '
          + 'avessero chiesto. La comunità della vecchia Gurna viveva dentro l’area Patrimonio '
          + 'Mondiale dell’antica Tebe e della sua necropoli, e il suo spostamento fu perseguito come '
          + 'modo per ridurre i danni alle tombe faraoniche. La Wikipedia in inglese registra che gli '
          + 'abitanti non accolsero con entusiasmo il trasloco, perché li tagliava fuori dalla loro '
          + 'fonte di reddito, il commercio dei reperti archeologici; lo stesso Fathy scrisse che '
          + 'l’esperimento di Gurna fallì e che i lavori furono interrotti prima del completamento. '
          + 'Nel 2009 l’UNESCO ha avviato un progetto di salvaguardia di ciò che resta, dopo che il '
          + 'Comitato del Patrimonio Mondiale e una petizione internazionale di specialisti avevano '
          + 'segnalato lo stato del villaggio.',
      },
      sources: [
        {
          kind: 'institution',
          url: 'https://whc.unesco.org/en/activities/637/',
          title: "UNESCO World Heritage Centre, Safeguarding project of Hassan Fathy's New Gourna Village",
          license: null,
        },
        {
          kind: 'wikipedia',
          url: 'https://en.wikipedia.org/wiki/Hassan_Fathy',
          title: 'Hassan Fathy — Wikipedia',
          license: 'CC BY-SA 4.0',
        },
      ],
    },
    sources: [
      {
        kind: 'wikidata',
        url: 'https://www.wikidata.org/wiki/Q14218502',
        title: 'Hassan Fathy Village / New Gourna (Q14218502)',
        license: null,
      },
      {
        kind: 'institution',
        url: 'https://whc.unesco.org/en/activities/637/',
        title: "UNESCO World Heritage Centre, Safeguarding project of Hassan Fathy's New Gourna Village",
        license: null,
      },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Hassan_Fathy',
        title: 'Hassan Fathy — Wikipedia',
        license: 'CC BY-SA 4.0',
      },
    ],
    tier: 'canon',
  },
  {
    id: 'diar-el-mahcoul',
    wikidataId: 'Q3026326',
    name: {
      en: 'Diar el-Mahçoul',
      es: 'Diar el-Mahçoul',
      it: 'Diar el-Mahçoul',
    },
    architectId: 'fernand-pouillon',
    location: {
      city: 'Algiers', countryCode: 'DZ', lat: 36.7465, lon: 3.0671,
    },
    inception: 1953,
    completed: 1955,
    demolished: null,
    typology: 'housing',
    materials: ['stone', 'concrete'],
    structure: {
      en: 'Load-bearing walls of quarried cut stone laid in regular courses, carrying concrete floor '
        + 'slabs and deep recessed loggias, with the blocks stepped down the hillside around '
        + 'connected courts.',
      es: 'Muros de carga de piedra de cantera labrada en hiladas regulares, que soportan forjados de '
        + 'hormigón y logias profundamente retranqueadas, con los bloques escalonados por la ladera en '
        + 'torno a patios encadenados.',
      it: 'Murature portanti in pietra da cava squadrata a corsi regolari, che sostengono solai in '
        + 'calcestruzzo e logge profondamente arretrate, con i blocchi digradanti sul pendio attorno a '
        + 'corti concatenate.',
    },
    program: {
      en: 'A municipal housing estate of some 1,500 dwellings commissioned by Jacques Chevallier, '
        + 'mayor of Algiers, to rehouse families from the city\'s bidonvilles.',
      es: 'Barriada municipal de unas 1.500 viviendas encargada por Jacques Chevallier, alcalde de '
        + 'Argel, para realojar a familias de los bidonvilles de la ciudad.',
      it: 'Quartiere municipale di circa 1.500 alloggi commissionato da Jacques Chevallier, sindaco '
        + 'di Algeri, per trasferire famiglie dalle bidonvilles della città.',
    },
    heritage: 'none',
    currentUse: {
      en: 'Occupied housing and a district of Algiers, split between the quarters of Belouizdad and '
        + 'El Madania; it carries no heritage listing.',
      es: 'Viviendas ocupadas y barrio de Argel, repartido entre Belouizdad y El Madania; no cuenta '
        + 'con ninguna figura de protección patrimonial.',
      it: 'Alloggi abitati e quartiere di Algeri, diviso fra Belouizdad ed El Madania; non ha alcun '
        + 'vincolo di tutela.',
    },
    detailRect: {
      x: 0.68, y: 0.22, w: 0.28, h: 0.28,
    },
    image: {
      commonsFile: 'Alger Diar-El-Mahcoul IMG 1147.JPG',
      photographer: 'Poudou99',
      license: 'CC BY 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Alger_Diar-El-Mahcoul_IMG_1147.JPG',
      width: 0,
      height: 0,
    },
    dossier: {
      en: 'Jacques Chevallier became mayor of Algiers in 1953 on a promise of "symbiosis" between the '
        + "city's communities, made Fernand Pouillon his chief architect, and set him to work on the "
        + 'bidonvilles. Diar el-Mahçoul — "houses of the fulfilled promise" — was the second of three '
        + 'estates and went up between 1953 and 1955 on the heights above the bay. Pouillon built it '
        + 'in load-bearing cut stone rather than concrete panels, because a quarry and a stonecutting '
        + 'yard on site were cheaper than a panel factory, and because he wanted mass housing to have '
        + 'the weight and the shadow of a masonry city. The blocks step down the slope around linked '
        + 'courts, with deep loggias, generous stairs and planted terraces. Seventy years on the '
        + 'stonework is still doing its job, buried under satellite dishes and laundry. It carries no '
        + 'protection of any kind.',
      es: 'Jacques Chevallier llegó a la alcaldía de Argel en 1953 con la promesa de una «simbiosis» '
        + 'entre las comunidades de la ciudad, nombró arquitecto jefe a Fernand Pouillon y lo puso a '
        + 'trabajar sobre los bidonvilles. Diar el-Mahçoul —«las casas de la promesa cumplida»— fue '
        + 'la segunda de tres barriadas y se levantó entre 1953 y 1955 en las alturas sobre la bahía. '
        + 'Pouillon la construyó en sillería portante y no en paneles de hormigón, porque una cantera '
        + 'y un taller de labra a pie de obra salían más baratos que una fábrica de paneles, y porque '
        + 'quería que la vivienda masiva tuviera el peso y la sombra de una ciudad de piedra. Los '
        + 'bloques bajan escalonados por la ladera en torno a patios encadenados, con logias '
        + 'profundas, escaleras generosas y terrazas plantadas. Setenta años después la piedra sigue '
        + 'cumpliendo, sepultada bajo parabólicas y ropa tendida. No tiene protección de ningún tipo.',
      it: 'Jacques Chevallier divenne sindaco di Algeri nel 1953 promettendo una «simbiosi» fra le '
        + 'comunità della città, nominò Fernand Pouillon architetto capo e lo mise al lavoro sulle '
        + 'bidonvilles. Diar el-Mahçoul — «le case della promessa mantenuta» — fu il secondo di tre '
        + 'quartieri e sorse fra il 1953 e il 1955 sulle alture sopra la baia. Pouillon lo costruì in '
        + 'pietra da taglio portante e non in pannelli di calcestruzzo, perché una cava e un cantiere '
        + 'di squadratura sul posto costavano meno di una fabbrica di pannelli, e perché voleva che '
        + 'l’edilizia di massa avesse il peso e l’ombra di una città in muratura. I blocchi scendono '
        + 'a gradoni sul pendio attorno a corti concatenate, con logge profonde, scale generose e '
        + 'terrazze piantumate. Settant’anni dopo la pietra fa ancora il suo mestiere, sepolta sotto '
        + 'parabole e panni stesi. Non gode di alcuna tutela.',
    },
    context: {
      body: {
        en: 'Diar el-Mahçoul was built by the colonial municipality of Algiers across the outbreak of the '
          + 'Algerian war of independence in November 1954, and its plan was segregated. Published research on '
          + 'the three Algiers estates records that Diar el-Mahçoul combined European and Algerian '
          + 'Muslim dwelling types in separate structures — about 900 units for Algerian Muslims and '
          + '650 for Europeans — with the two districts divided from one another by roads. Its '
          + 'companions were segregated outright: Diar es-Saada housed Europeans only, Climat de '
          + 'France an exclusively Muslim population. Pouillon was working for a mayor who described '
          + 'this programme as symbiosis. Algeria became independent in 1962; Pouillon, barred from '
          + 'practice in France after his 1961 conviction, returned to work for the independent state '
          + 'from 1966.',
        es: 'Diar el-Mahçoul lo construyó el municipio colonial de Argel a caballo del estallido de '
          + 'la guerra de independencia argelina, en noviembre de 1954, y su planta estaba segregada. La investigación '
          + 'publicada sobre las tres barriadas argelinas recoge que Diar el-Mahçoul combinaba tipos '
          + 'de vivienda europeos y musulmanes argelinos en estructuras separadas —unas 900 viviendas '
          + 'para musulmanes argelinos y 650 para europeos— con los dos sectores divididos entre sí '
          + 'por viales. Sus vecinas estaban segregadas sin matices: Diar es-Saada alojaba solo a '
          + 'europeos y Climat de France a población exclusivamente musulmana. Pouillon trabajaba para '
          + 'un alcalde que llamaba simbiosis a este programa. Argelia fue independiente en 1962; '
          + 'Pouillon, inhabilitado en Francia tras su condena de 1961, volvió a trabajar para el '
          + 'Estado independiente desde 1966.',
        it: 'Diar el-Mahçoul fu costruito dal municipio coloniale di Algeri a cavallo dello scoppio della '
          + 'guerra d’indipendenza algerina, nel novembre 1954, e la sua pianta era segregata. La ricerca pubblicata '
          + 'sui tre quartieri algerini registra che Diar el-Mahçoul combinava tipi abitativi europei '
          + 'e musulmani algerini in strutture separate — circa 900 alloggi per musulmani algerini e '
          + '650 per europei — con i due settori divisi tra loro da strade. I quartieri vicini erano '
          + 'segregati senza sfumature: Diar es-Saada ospitava solo europei, Climat de France una '
          + 'popolazione esclusivamente musulmana. Pouillon lavorava per un sindaco che chiamava '
          + 'simbiosi questo programma. L’Algeria divenne indipendente nel 1962; Pouillon, interdetto '
          + 'in Francia dopo la condanna del 1961, tornò a lavorare per lo Stato indipendente dal 1966.',
      },
      sources: [
        {
          kind: 'publication',
          url: 'https://onlinelibrary.wiley.com/doi/full/10.1002/2475-8876.12279',
          title: 'Matsubara et al., "An examination of the three districts in Algiers by Fernand Pouillon as Moorish architecture", Japan Architectural Review (2022)',
          license: null,
        },
        {
          kind: 'wikipedia',
          url: 'https://en.wikipedia.org/wiki/Fernand_Pouillon',
          title: 'Fernand Pouillon — Wikipedia',
          license: 'CC BY-SA 4.0',
        },
      ],
    },
    sources: [
      {
        kind: 'wikidata',
        url: 'https://www.wikidata.org/wiki/Q3026326',
        title: 'Diar el Mahçoul (Q3026326)',
        license: null,
      },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Diar_el_Mah%C3%A7oul',
        title: 'Diar el Mahçoul — Wikipedia',
        license: 'CC BY-SA 4.0',
      },
      {
        kind: 'publication',
        url: 'https://onlinelibrary.wiley.com/doi/full/10.1002/2475-8876.12279',
        title: 'Matsubara et al., "An examination of the three districts in Algiers by Fernand Pouillon as Moorish architecture", Japan Architectural Review (2022)',
        license: null,
      },
    ],
    tier: 'deep',
  },
  {
    id: 'al-merrikh-stadium',
    wikidataId: 'Q2829383',
    name: {
      en: 'Al-Merrikh Stadium',
      es: 'Estadio Al-Merrikh',
      it: 'Stadio Al-Merrikh',
    },
    architectId: 'abdel-moneim-mustafa',
    location: {
      city: 'Omdurman', countryCode: 'SD', lat: 15.64128, lon: 32.47156,
    },
    inception: 1962,
    completed: 1964,
    demolished: null,
    typology: 'civic',
    materials: ['concrete'],
    structure: {
      en: 'A continuous oval of raked reinforced-concrete terracing set on banked ground, closed on '
        + 'the west by a covered main tribune and ringed at street level by a band of ground-floor units.',
      es: 'Un óvalo continuo de gradas inclinadas de hormigón armado apoyadas en terraplén, cerrado '
        + 'al oeste por una tribuna principal cubierta y rodeado a pie de calle por una franja de '
        + 'locales en planta baja.',
      it: 'Un ovale continuo di gradinate inclinate in cemento armato poggiate su terrapieno, chiuso '
        + 'a ovest da una tribuna principale coperta e cinto a livello strada da una fascia di locali a piano terra.',
    },
    program: {
      en: 'A 43,000-capacity football and athletics ground built for Al-Merrikh SC, which also serves '
        + 'as the home ground of the Sudan national team.',
      es: 'Campo de fútbol y atletismo con capacidad para 43.000 espectadores construido para el '
        + 'Al-Merrikh SC, que sirve además de sede de la selección sudanesa.',
      it: 'Impianto per calcio e atletica da 43.000 posti costruito per l’Al-Merrikh SC, che è anche '
        + 'il campo di casa della nazionale sudanese.',
    },
    heritage: 'none',
    currentUse: {
      en: 'Still the home ground of Al-Merrikh SC and known in Omdurman as the Red Castle; it carries '
        + 'no heritage designation.',
      es: 'Sigue siendo el campo del Al-Merrikh SC y en Omdurmán se lo conoce como el Castillo Rojo; '
        + 'no tiene declaración patrimonial alguna.',
      it: 'È ancora il campo dell’Al-Merrikh SC e a Omdurman lo chiamano il Castello Rosso; non ha '
        + 'alcuna dichiarazione di tutela.',
    },
    detailRect: {
      x: 0.28, y: 0.58, w: 0.30, h: 0.20,
    },
    image: {
      commonsFile: 'Al-Marekh Stadium Omdurman Sudan 1964 Designed by Abdel-Moneim Mustafa 8.jpg',
      photographer: 'Abdel-Moneim Mustafa',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Al-Marekh_Stadium_Omdurman_Sudan_1964_Designed_by_Abdel-Moneim_Mustafa_8.jpg',
      width: 0,
      height: 0,
    },
    dossier: {
      en: 'Sudan became independent in 1956; Abdel-Moneim Mustafa came home from Leicester with an '
        + 'architecture degree in 1958, and by 1962 was building the stadium for Omdurman\'s Al-Merrikh '
        + 'club. It was established in 1962 and opened on 30 November 1964, the same year he became '
        + 'the first Sudanese lecturer in the new architecture department at the University of '
        + 'Khartoum. The ground is a plain, economical piece of civil engineering — an oval of raked '
        + 'concrete terracing banked into the ground, a covered tribune, a ring of small units let '
        + 'into the outer wall at street level — and it holds 43,000. Sudanese fans call it the Red '
        + 'Castle. Mustafa went on to build the Bank of Khartoum and the BADEA headquarters, and '
        + 'he is regarded as one of the pioneers of modernist architecture in Sudan, the subject of a '
        + 'Docomomo Journal study of the post-independence era. The '
        + 'photograph here is his own, released through the Canadian Centre for Architecture.',
      es: 'Sudán fue independiente en 1956; Abdel-Moneim Mustafa volvió de Leicester con el título de '
        + 'arquitecto en 1958 y en 1962 ya estaba construyendo el estadio del club Al-Merrikh de '
        + 'Omdurmán. Se estableció en 1962 y se inauguró el 30 de noviembre de 1964, el mismo año en '
        + 'que él se convirtió en el primer profesor sudanés del nuevo departamento de arquitectura '
        + 'de la Universidad de Jartum. El recinto es una pieza de ingeniería civil escueta y '
        + 'económica —un óvalo de gradas de hormigón apoyadas en terraplén, una tribuna cubierta, una '
        + 'corona de pequeños locales abiertos en el muro exterior a pie de calle— y tiene aforo para '
        + '43.000. La afición sudanesa lo llama el Castillo Rojo. Mustafa levantaría después el Banco '
        + 'de Jartum y la sede del BADEA, y se lo considera uno de los pioneros de la arquitectura '
        + 'moderna en Sudán, objeto de un estudio del Docomomo Journal sobre la era posterior a la '
        + 'independencia. La fotografía es suya, difundida a través '
        + 'del Centro Canadiense de Arquitectura.',
      it: 'Il Sudan divenne indipendente nel 1956; Abdel-Moneim Mustafa tornò da Leicester con la '
        + 'laurea in architettura nel 1958 e già nel 1962 costruiva lo stadio del club Al-Merrikh di '
        + 'Omdurman. Fu istituito nel 1962 e inaugurato il 30 novembre 1964, lo stesso anno in cui '
        + 'divenne il primo docente sudanese del nuovo dipartimento di architettura dell’Università '
        + 'di Khartoum. L’impianto è un pezzo di ingegneria civile asciutto ed economico — un ovale '
        + 'di gradinate in cemento poggiate su terrapieno, una tribuna coperta, una corona di piccoli '
        + 'locali ricavati nel muro esterno a livello strada — e contiene 43.000 spettatori. I tifosi '
        + 'sudanesi lo chiamano il Castello Rosso. Mustafa costruì poi la Bank of Khartoum e la sede '
        + 'della BADEA, ed è considerato uno dei pionieri dell’architettura moderna in Sudan, oggetto '
        + 'di uno studio del Docomomo Journal sull’era postcoloniale. La fotografia è sua, diffusa '
        + 'tramite il Canadian Centre for Architecture.',
    },
    context: null,
    sources: [
      {
        kind: 'wikidata',
        url: 'https://www.wikidata.org/wiki/Q2829383',
        title: 'Al-Merrikh Stadium (Q2829383)',
        license: null,
      },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Al-Merrikh_Stadium',
        title: 'Al-Merrikh Stadium — Wikipedia',
        license: 'CC BY-SA 4.0',
      },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Abdel-Moneim_Mustafa',
        title: 'Abdel-Moneim Mustafa — Wikipedia',
        license: 'CC BY-SA 4.0',
      },
      {
        kind: 'publication',
        url: 'https://doi.org/10.52200/44.A.DQKNX1LV',
        title: 'Omer S. Osman, Amira O. S. Osman and Ibrahim Z. Bahreldin, "Architecture in Sudan: The Post-Independence Era (1956–1970). Focus on the Work of Abdel Moneim Mustafa", Docomomo Journal 44 (2011), 77–80',
        license: null,
      },
    ],
    tier: 'deep',
  },
  {
    id: 'grand-egyptian-museum',
    wikidataId: 'Q2583681',
    name: {
      en: 'Grand Egyptian Museum',
      es: 'Gran Museo Egipcio',
      it: 'Grande Museo Egizio',
    },
    architectId: 'roisin-heneghan',
    location: {
      city: 'Giza', countryCode: 'EG', lat: 29.99361, lon: 31.11972,
    },
    inception: 2005,
    completed: 2023,
    demolished: null,
    typology: 'cultural',
    materials: ['concrete', 'stone', 'steel-and-glass'],
    structure: {
      en: 'A chamfered triangular plan in reinforced concrete, its two long walls aimed at the '
        + 'pyramids of Khufu and Menkaure and clad in a lattice of nested triangles in stone and '
        + 'translucent alabaster.',
      es: 'Planta triangular achaflanada en hormigón armado, con sus dos muros largos dirigidos a las '
        + 'pirámides de Keops y Micerinos y revestidos con una retícula de triángulos anidados de '
        + 'piedra y alabastro translúcido.',
      it: 'Pianta triangolare smussata in cemento armato, con i due muri lunghi puntati sulle piramidi '
        + 'di Cheope e Micerino e rivestiti da un reticolo di triangoli annidati in pietra e '
        + 'alabastro traslucido.',
    },
    program: {
      en: 'A national archaeological museum for the Egyptian Ministry of Antiquities, holding over '
        + '100,000 objects including the complete Tutankhamun collection.',
      es: 'Museo arqueológico nacional para el Ministerio de Antigüedades egipcio, con más de 100.000 '
        + 'piezas, entre ellas la colección completa de Tutankamón.',
      it: 'Museo archeologico nazionale per il Ministero delle antichità egiziano, con oltre 100.000 '
        + 'reperti, fra cui la collezione completa di Tutankhamon.',
    },
    heritage: 'none',
    currentUse: {
      en: 'In use as a museum since its official opening on 1 November 2025; as a new building it '
        + 'carries no heritage designation.',
      es: 'En funcionamiento como museo desde su inauguración oficial el 1 de noviembre de 2025; por '
        + 'ser obra nueva no tiene ninguna figura de protección.',
      it: 'In funzione come museo dall’inaugurazione ufficiale del 1º novembre 2025; trattandosi di '
        + 'un edificio nuovo non ha alcun vincolo di tutela.',
    },
    detailRect: {
      x: 0.62, y: 0.30, w: 0.28, h: 0.28,
    },
    image: {
      commonsFile: 'Grand Egyptian Museum - EGWUG Trip (2).jpg',
      photographer: 'Ibrahim.ID',
      license: 'CC BY 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Grand_Egyptian_Museum_-_EGWUG_Trip_(2).jpg',
      width: 0,
      height: 0,
    },
    dossier: {
      en: 'The competition was announced on 7 January 2002 and drew 1,557 entries from 82 countries, '
        + 'the second largest in the history of the profession. Judging finished on 2 June 2003 and '
        + 'the winners were Róisín Heneghan and Shih-Fu Peng, whose Dublin office was then four years '
        + 'old. Their answer to a site two kilometres from the pyramids was to refuse to compete with '
        + 'them: the museum is a chamfered triangle pressed into the desert escarpment, its two long '
        + 'walls surveyed to point at Khufu and Menkaure, its skin a recursive lattice of triangles '
        + 'in stone and translucent alabaster that lets daylight bleed through the entrance portal. '
        + 'Construction began in 2005, the building was finished in 2023 at a cost of about $1.2 '
        + 'billion, and it opened officially on 1 November 2025 as the largest museum in the world '
        + 'devoted to a single civilisation.',
      es: 'El concurso se convocó el 7 de enero de 2002 y recibió 1.557 propuestas de 82 países, el '
        + 'segundo mayor de la historia de la profesión. El fallo se cerró el 2 de junio de 2003 y '
        + 'los ganadores fueron Róisín Heneghan y Shih-Fu Peng, cuyo estudio de Dublín tenía entonces '
        + 'cuatro años. Su respuesta a un solar a dos kilómetros de las pirámides fue negarse a '
        + 'competir con ellas: el museo es un triángulo achaflanado hincado en el escarpe del '
        + 'desierto, con sus dos muros largos replanteados para apuntar a Keops y a Micerinos, y una '
        + 'piel de retícula recursiva de triángulos de piedra y alabastro translúcido que deja pasar '
        + 'la luz por el portal de entrada. Las obras empezaron en 2005, el edificio se terminó en '
        + '2023 con un coste próximo a los 1.200 millones de dólares y se inauguró oficialmente el 1 '
        + 'de noviembre de 2025 como el mayor museo del mundo dedicado a una sola civilización.',
      it: 'Il concorso fu bandito il 7 gennaio 2002 e raccolse 1.557 proposte da 82 paesi, il secondo '
        + 'più grande nella storia della professione. Il giudizio si chiuse il 2 giugno 2003 e i '
        + 'vincitori furono Róisín Heneghan e Shih-Fu Peng, il cui studio di Dublino aveva allora '
        + 'quattro anni. La loro risposta a un sito a due chilometri dalle piramidi fu rifiutare di '
        + 'competere con esse: il museo è un triangolo smussato conficcato nella scarpata del '
        + 'deserto, con i due muri lunghi tracciati per puntare su Cheope e Micerino e una pelle a '
        + 'reticolo ricorsivo di triangoli in pietra e alabastro traslucido che lascia filtrare la '
        + 'luce dal portale d’ingresso. I lavori iniziarono nel 2005, l’edificio fu completato nel '
        + '2023 con un costo di circa 1,2 miliardi di dollari e ha aperto ufficialmente il 1º '
        + 'novembre 2025 come il più grande museo al mondo dedicato a una sola civiltà.',
    },
    context: null,
    sources: [
      {
        kind: 'wikidata',
        url: 'https://www.wikidata.org/wiki/Q2583681',
        title: 'Grand Egyptian Museum (Q2583681)',
        license: null,
      },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Grand_Egyptian_Museum',
        title: 'Grand Egyptian Museum — Wikipedia',
        license: 'CC BY-SA 4.0',
      },
    ],
    tier: 'canon',
  },
];
