import type { Architect } from '@/types/architect';

// Wave 5, agent 9d — Northern Africa (UN M49 "Northern Africa": DZ, EG, LY, MA,
// SD, TN). Six architects, one per building in buildings/africa.ts.
//
// workRegions / workCentroid are deliberately left empty here: buildCuratedPool
// derives both from each architect's buildings and discards whatever this file
// supplies. See src/scripts/buildCuratedPool.ts.
export const AFRICA_ARCHITECTS: Architect[] = [
  {
    id: 'mohamed-ben-ali',
    wikidataId: 'Q3318402',
    name: 'Mohamed Ben Ali',
    alternativeNames: [
      'Abu Abdallah Muhammad ibn Ali ibn Muhammad ibn Abdallah ibn al-Hajj al-Ishbili',
      "Muhammad ibn 'Ali al-Ishbili",
      'محمد بن الحاج الإشبيلي',
    ],
    gender: 'man',
    born: null,
    died: 1314,
    floruit: { start: 1260, end: 1280, override: false },
    movements: [{ id: 'moorish', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'infrastructure',
    signatureMaterial: 'stone',
    portrait: {
      en: 'Mohamed Ben Ali — in the Arabic sources Abu Abdallah Muhammad ibn Ali ibn Muhammad ibn '
        + 'Abdallah ibn al-Hajj al-Ishbili — was born in Seville and died at Fes in 1314. He belongs '
        + 'to the small number of pre-modern Maghrebi builders whose name survived attached to '
        + 'specific works rather than dissolving into the guild that raised them. After a Castilian '
        + 'raiding fleet sacked Salé in 1260, the Marinid sultan Abu Yusuf Yaqub ibn Abd al-Haqq set '
        + 'out to rebuild the town as the chief shipyard and commercial port of the kingdom of Fes, '
        + 'and called on Ben Ali to do it. He built the arsenal and its two monumental gates, Bab Dar '
        + 'Assinaa and Bab el-Mrissa, cut in ashlar; the second of them was vaulted over a canal so '
        + 'that galleys could pass inside the walls. Almost nothing else of his life is documented; '
        + 'the gates are the record.',
      es: 'Mohamed Ben Ali —en las fuentes árabes Abu Abdallah Muhammad ibn Ali ibn Muhammad ibn '
        + 'Abdallah ibn al-Hajj al-Ishbili— nació en Sevilla y murió en Fez en 1314. Pertenece al '
        + 'reducido grupo de constructores premodernos del Magreb cuyo nombre ha llegado hasta '
        + 'nosotros unido a obras concretas, en vez de disolverse en el gremio que las levantó. '
        + 'Después de que una flota castellana saqueara Salé en 1260, el sultán meriní Abu Yusuf '
        + 'Yaqub ibn Abd al-Haqq decidió rehacer la ciudad como principal astillero y puerto '
        + 'comercial del reino de Fez, y encargó la obra a Ben Ali. Levantó las atarazanas y sus dos '
        + 'puertas monumentales, Bab Dar Assinaa y Bab el-Mrissa, labradas en sillería; la segunda se '
        + 'abovedó sobre un canal que permitía a las galeras entrar dentro de la muralla. De su vida '
        + 'apenas se documenta nada más: las puertas son el testimonio.',
      it: 'Mohamed Ben Ali — nelle fonti arabe Abu Abdallah Muhammad ibn Ali ibn Muhammad ibn '
        + "Abdallah ibn al-Hajj al-Ishbili — nacque a Siviglia e morì a Fes nel 1314. Appartiene al "
        + 'ristretto numero di costruttori premoderni del Maghreb il cui nome è sopravvissuto legato '
        + 'a opere precise, invece di dissolversi nella corporazione che le innalzò. Dopo il '
        + 'saccheggio castigliano di Salé nel 1260, il sultano merinide Abu Yusuf Yaqub ibn Abd '
        + "al-Haqq decise di rifondare la città come principale cantiere navale e porto commerciale "
        + 'del regno di Fes, e ne affidò l’incarico a Ben Ali. Questi costruì l’arsenale e le sue due '
        + 'monumentali porte, Bab Dar Assinaa e Bab el-Mrissa, tagliate in conci; la seconda fu '
        + 'voltata su un canale che permetteva alle galee di entrare dentro le mura. Della sua vita '
        + 'non si documenta quasi altro: le porte sono la testimonianza.',
    },
    awards: [],
    tier: 'deep',
    context: null,
    sources: [
      {
        kind: 'wikidata',
        url: 'https://www.wikidata.org/wiki/Q3318402',
        title: 'Mohamed Ben Ali (Q3318402)',
        license: null,
      },
      {
        kind: 'wikipedia',
        url: 'https://fr.wikipedia.org/wiki/Mohamed_Ben_Ali_(architecte)',
        title: 'Mohamed Ben Ali (architecte) — Wikipédia',
        license: 'CC BY-SA 4.0',
      },
      {
        kind: 'wikipedia',
        url: 'https://ar.wikipedia.org/wiki/%D8%A8%D8%A7%D8%A8_%D8%AF%D8%A7%D8%B1_%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D8%A9',
        title: 'باب دار الصناعة — ويكيبيديا',
        license: 'CC BY-SA 4.0',
      },
    ],
  },
  {
    id: 'florestano-di-fausto',
    wikidataId: 'Q472250',
    name: 'Florestano Di Fausto',
    alternativeNames: ['Florestano di Fausto'],
    gender: 'man',
    born: 1890,
    died: 1965,
    floruit: { start: 1923, end: 1940, override: false },
    movements: [{ id: 'mediterranean-vernacular', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'commercial',
    signatureMaterial: 'mixed',
    portrait: {
      en: 'Florestano Di Fausto (1890–1965) built almost nothing in Italy and almost everything for '
        + 'Italy abroad. Trained as both architect and engineer, he became the dominant designer '
        + 'first in the Italian Dodecanese, from 1923, and then in Italian Libya, where he worked for '
        + 'the colonial administration through the 1930s. He was fluent to the point of promiscuity '
        + 'in style — neo-Moorish, neo-Renaissance, stripped classicism, rationalism — and chose '
        + 'between them according to site and audience, which earned him the label "architect of the '
        + 'Mediterranean" and, for decades afterwards, critical neglect. His Libyan corpus is '
        + 'dominated by hotels: the Uaddan in Tripoli, the desert alberghi at Nalut and Ghadames, the '
        + 'Grand Hotel. Serious reassessment of that work began only in the 1990s.',
      es: 'Florestano Di Fausto (1890-1965) construyó casi nada en Italia y casi todo para Italia '
        + 'fuera de ella. Arquitecto e ingeniero de formación, fue el proyectista dominante primero '
        + 'en el Dodecaneso italiano, desde 1923, y después en la Libia italiana, donde trabajó para '
        + 'la administración colonial a lo largo de los años treinta. Manejaba los estilos con una '
        + 'soltura casi promiscua —neomorisco, neorrenacentista, clasicismo despojado, racionalismo— '
        + 'y elegía entre ellos según el lugar y el destinatario, lo que le valió la etiqueta de '
        + '«arquitecto del Mediterráneo» y, durante décadas, el olvido de la crítica. Su corpus libio '
        + 'está dominado por los hoteles: el Uaddan de Trípoli, los albergues del desierto en Nalut y '
        + 'Gadamés, el Grand Hotel. La revisión seria de esa obra no empezó hasta los años noventa.',
      it: 'Florestano Di Fausto (1890-1965) costruì quasi nulla in Italia e quasi tutto per l’Italia '
        + 'fuori dall’Italia. Architetto e ingegnere di formazione, fu il progettista dominante prima '
        + 'nel Dodecaneso italiano, dal 1923, e poi nella Libia italiana, dove lavorò per '
        + 'l’amministrazione coloniale per tutti gli anni Trenta. Padroneggiava gli stili con '
        + 'disinvoltura quasi promiscua — neomoresco, neorinascimentale, classicismo semplificato, '
        + 'razionalismo — e sceglieva fra essi secondo il luogo e il destinatario, il che gli valse '
        + 'l’etichetta di «architetto del Mediterraneo» e, per decenni, l’oblio della critica. Il suo '
        + 'corpus libico è dominato dagli alberghi: l’Uaddan di Tripoli, gli alberghi sahariani di '
        + 'Nalut e Ghadames, il Grand Hotel. La revisione seria di quell’opera è cominciata soltanto '
        + 'negli anni Novanta.',
    },
    awards: [],
    tier: 'deep',
    context: {
      body: {
        en: 'Di Fausto was an architect, engineer and politician whose practice was almost entirely '
          + 'a commission of the Italian state in its overseas territories: the Dodecanese from 1923, '
          + 'Albania, and Italian Libya, where his patron was the Fascist governor Italo Balbo. '
          + 'English Wikipedia describes him as "the most important colonial architect of the Fascist '
          + 'age in Italy". Brian L. McLaren\'s study of the period reads his Libyan hotels as '
          + 'instruments of a tourist system built to represent the colony to Italian visitors. His '
          + 'work was largely ignored after 1943 and has been reassessed since the 1990s.',
        es: 'Di Fausto fue arquitecto, ingeniero y político, y su práctica fue casi enteramente un '
          + 'encargo del Estado italiano en sus territorios de ultramar: el Dodecaneso desde 1923, '
          + 'Albania y la Libia italiana, donde su patrón fue el gobernador fascista Italo Balbo. La '
          + 'Wikipedia en inglés lo describe como «el arquitecto colonial más importante de la época '
          + 'fascista en Italia». El estudio de Brian L. McLaren sobre el periodo lee sus hoteles '
          + 'libios como instrumentos de un sistema turístico construido para representar la colonia '
          + 'ante el visitante italiano. Su obra fue ignorada después de 1943 y se ha revisado desde '
          + 'los años noventa.',
        it: 'Di Fausto fu architetto, ingegnere e politico, e la sua attività fu quasi interamente '
          + 'una commessa dello Stato italiano nei territori d’oltremare: il Dodecaneso dal 1923, '
          + 'l’Albania e la Libia italiana, dove il suo committente fu il governatore fascista Italo '
          + 'Balbo. La Wikipedia in inglese lo definisce «il più importante architetto coloniale '
          + 'dell’età fascista in Italia». Lo studio di Brian L. McLaren su quel periodo legge i suoi '
          + 'alberghi libici come strumenti di un sistema turistico costruito per rappresentare la '
          + 'colonia al visitatore italiano. La sua opera fu ignorata dopo il 1943 ed è stata '
          + 'riesaminata a partire dagli anni Novanta.',
      },
      sources: [
        {
          kind: 'wikipedia',
          url: 'https://en.wikipedia.org/wiki/Florestano_Di_Fausto',
          title: 'Florestano Di Fausto — Wikipedia',
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
        url: 'https://www.wikidata.org/wiki/Q472250',
        title: 'Florestano Di Fausto (Q472250)',
        license: null,
      },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Florestano_Di_Fausto',
        title: 'Florestano Di Fausto — Wikipedia',
        license: 'CC BY-SA 4.0',
      },
    ],
  },
  {
    id: 'hassan-fathy',
    wikidataId: 'Q560101',
    name: 'Hassan Fathy',
    alternativeNames: ['Hassan Fathi', 'حسن فتحي'],
    gender: 'man',
    born: 1900,
    died: 1989,
    floruit: { start: 1937, end: 1984, override: false },
    movements: [{ id: 'earthen-vernacular', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'housing',
    signatureMaterial: 'earth',
    portrait: {
      en: 'Hassan Fathy (1900–1989) trained at what is now Cairo University and spent sixty years '
        + 'arguing that Egypt could not afford to build the way Europe built. From a 1941 journey '
        + 'into Nubia he brought back the mud-brick vault laid without centring — a roof a village '
        + 'could raise for itself out of the ground it stood on — and made it the basis of some 160 '
        + 'projects, from single houses to fully serviced settlements with markets, schools and '
        + 'theatres. New Gourna, begun in 1946, made his name internationally and, by his own account '
        + 'in Architecture for the Poor, failed. He worked with Constantinos Doxiadis in Athens from '
        + '1957, returned to Cairo in 1963, and in 1980 received the Aga Khan Chairman\'s Award for '
        + 'Architecture and the Balzan Prize.',
      es: 'Hassan Fathy (1900-1989) se formó en la actual Universidad de El Cairo y dedicó sesenta '
        + 'años a sostener que Egipto no podía permitirse construir como construía Europa. De un '
        + 'viaje a Nubia en 1941 trajo la bóveda de adobe levantada sin cimbra —una cubierta que una '
        + 'aldea podía alzar por sí misma con la tierra que pisaba— y la convirtió en la base de unos '
        + '160 proyectos, desde casas aisladas hasta poblados completos con mercado, escuela y '
        + 'teatro. Nueva Gurna, iniciada en 1946, le dio renombre internacional y, según su propio '
        + 'relato en Arquitectura para los pobres, fracasó. Trabajó con Constantinos Doxiadis en '
        + 'Atenas desde 1957, regresó a El Cairo en 1963 y en 1980 recibió el Premio del Presidente '
        + 'del Aga Khan y el Premio Balzan.',
      it: 'Hassan Fathy (1900-1989) si formò nell’attuale Università del Cairo e passò sessant’anni '
        + 'a sostenere che l’Egitto non poteva permettersi di costruire come costruiva l’Europa. Da '
        + 'un viaggio in Nubia nel 1941 riportò la volta in mattoni crudi eretta senza centine — una '
        + 'copertura che un villaggio poteva alzare da sé con la terra che calpestava — e ne fece la '
        + 'base di circa 160 progetti, dalle case isolate agli insediamenti completi di mercato, '
        + 'scuola e teatro. Nuova Gurna, avviata nel 1946, gli diede fama internazionale e, per sua '
        + 'stessa ammissione in Architettura per i poveri, fallì. Lavorò con Constantinos Doxiadis ad '
        + 'Atene dal 1957, tornò al Cairo nel 1963 e nel 1980 ricevette il Chairman’s Award dell’Aga '
        + 'Khan e il Premio Balzan.',
    },
    awards: [
      "Aga Khan Chairman's Award for Architecture (1980)",
      'Balzan Prize for Architecture and Urban Planning (1980)',
      'Right Livelihood Award',
      'UIA Sir Robert Matthew Prize',
    ],
    tier: 'canon',
    context: null,
    sources: [
      {
        kind: 'wikidata',
        url: 'https://www.wikidata.org/wiki/Q560101',
        title: 'Hassan Fathi (Q560101)',
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
  {
    id: 'fernand-pouillon',
    wikidataId: 'Q742608',
    name: 'Fernand Pouillon',
    alternativeNames: [],
    gender: 'man',
    born: 1912,
    died: 1986,
    floruit: { start: 1945, end: 1984, override: false },
    movements: 'unaffiliated',
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'housing',
    signatureMaterial: 'stone',
    portrait: {
      en: 'Fernand Pouillon (1912–1986) built mass housing out of load-bearing cut stone at a moment '
        + 'when everyone else was building it out of concrete panels, and he did so because stone was '
        + 'cheaper if you quarried and cut it yourself. An admirer of Auguste Perret, he made his '
        + 'name in the reconstruction of the Vieux-Port at Marseille, then took on the Algiers '
        + 'estates — Diar es-Saada, Diar el-Mahçoul and Climat de France — that remain his largest '
        + 'and most argued-over work. His buildings are organised around courts and stairs rather '
        + 'than slabs, use rigorous harmonic proportions, and were built with sculptors, ceramicists '
        + 'and landscape designers on the team. He also wrote: Les Pierres sauvages won the Prix des '
        + 'Deux Magots in 1965.',
      es: 'Fernand Pouillon (1912-1986) construyó vivienda masiva en piedra de sillería portante en '
        + 'el momento en que todos los demás la construían con paneles de hormigón, y lo hizo porque '
        + 'la piedra salía más barata si uno mismo la extraía y la labraba. Admirador de Auguste '
        + 'Perret, se dio a conocer en la reconstrucción del Vieux-Port de Marsella y después asumió '
        + 'las barriadas argelinas —Diar es-Saada, Diar el-Mahçoul y Climat de France— que siguen '
        + 'siendo su obra mayor y más discutida. Sus edificios se organizan en torno a patios y '
        + 'escaleras más que en bloques lineales, emplean proporciones armónicas rigurosas y se '
        + 'levantaron con escultores, ceramistas y paisajistas en el equipo. También escribió: Las '
        + 'piedras salvajes obtuvo el Prix des Deux Magots en 1965.',
      it: 'Fernand Pouillon (1912-1986) costruì edilizia residenziale di massa in pietra da taglio '
        + 'portante nel momento in cui tutti gli altri la costruivano con pannelli di cemento, e lo '
        + 'fece perché la pietra costava meno se la si cavava e squadrava in proprio. Ammiratore di '
        + 'Auguste Perret, si fece un nome nella ricostruzione del Vieux-Port di Marsiglia e poi '
        + 'affrontò i quartieri di Algeri — Diar es-Saada, Diar el-Mahçoul e Climat de France — che '
        + 'restano la sua opera più vasta e più discussa. I suoi edifici si organizzano intorno a '
        + 'corti e scale più che a stecche, adottano proporzioni armoniche rigorose e furono '
        + 'realizzati con scultori, ceramisti e paesaggisti in squadra. Scrisse anche: Le pietre '
        + 'selvagge vinse il Prix des Deux Magots nel 1965.',
    },
    awards: ['Prix des Deux Magots (1965)', 'Officer of the Legion of Honour (1984)'],
    tier: 'deep',
    context: {
      body: {
        en: 'In March 1961 Pouillon was arrested over the collapse of the Comptoir National du '
          + 'Logement, a company he had helped set up, on charges of fraud and misuse of corporate '
          + 'assets. In September 1961 he was expelled from the French Order of Architects for breach '
          + 'of professional ethics. He escaped from prison in September 1962, returned voluntarily '
          + 'for trial, and was released in September 1964. Barred from practising in France, he '
          + 'worked in independent Algeria from 1966 to 1984 on tourism and housing projects. He was '
          + 'pardoned by President Georges Pompidou in 1971, readmitted to the Order in 1978, and '
          + 'made an Officer of the Legion of Honour in April 1984.',
        es: 'En marzo de 1961 Pouillon fue detenido por la quiebra del Comptoir National du '
          + 'Logement, sociedad que había contribuido a fundar, acusado de estafa y de abuso de '
          + 'bienes sociales. En septiembre de 1961 fue expulsado del Colegio de Arquitectos francés '
          + 'por falta deontológica. Se fugó de prisión en septiembre de 1962, se entregó '
          + 'voluntariamente para ser juzgado y salió en libertad en septiembre de 1964. Impedido de '
          + 'ejercer en Francia, trabajó en la Argelia independiente entre 1966 y 1984 en proyectos '
          + 'turísticos y de vivienda. Fue indultado por el presidente Georges Pompidou en 1971, '
          + 'readmitido en el Colegio en 1978 y nombrado oficial de la Legión de Honor en abril de 1984.',
        it: 'Nel marzo 1961 Pouillon fu arrestato per il fallimento del Comptoir National du '
          + 'Logement, società che aveva contribuito a fondare, con l’accusa di truffa e appropriazione '
          + 'indebita di beni sociali. Nel settembre 1961 fu radiato dall’Ordine degli architetti '
          + 'francese per violazione della deontologia professionale. Evase dal carcere nel settembre '
          + '1962, si consegnò volontariamente per il processo e fu scarcerato nel settembre 1964. '
          + 'Interdetto dall’esercizio in Francia, lavorò nell’Algeria indipendente dal 1966 al 1984 a '
          + 'progetti turistici e residenziali. Fu graziato dal presidente Georges Pompidou nel 1971, '
          + 'riammesso all’Ordine nel 1978 e nominato ufficiale della Legion d’onore nell’aprile 1984.',
      },
      sources: [
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
        url: 'https://www.wikidata.org/wiki/Q742608',
        title: 'Fernand Pouillon (Q742608)',
        license: null,
      },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Fernand_Pouillon',
        title: 'Fernand Pouillon — Wikipedia',
        license: 'CC BY-SA 4.0',
      },
      {
        kind: 'wikipedia',
        url: 'https://fr.wikipedia.org/wiki/Fernand_Pouillon',
        title: 'Fernand Pouillon — Wikipédia',
        license: 'CC BY-SA 4.0',
      },
    ],
  },
  {
    id: 'abdel-moneim-mustafa',
    wikidataId: 'Q111603095',
    name: 'Abdel-Moneim Mustafa',
    alternativeNames: ['Abdel Moneim Mustafa', 'عبدالمنعم مصطفى'],
    gender: 'man',
    born: 1930,
    died: null,
    floruit: { start: 1962, end: 1990, override: false },
    movements: [{ id: 'international-style', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'civic',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Abdel-Moneim Mustafa was born in Omdurman in 1930, under the Anglo-Egyptian Condominium. '
        + 'He began in engineering at the University of Khartoum, which had no architecture '
        + 'department yet, won a fellowship to the University of Leicester and graduated as an '
        + 'architect there in 1958. In 1964 he joined the new architecture department at Khartoum as '
        + 'its first Sudanese lecturer after independence, and headed it from 1972 to 1974. He '
        + 'entered the Ministry of Public Works in 1963 and founded his own practice, Technocon, the '
        + 'same year, building administrative, educational, industrial, recreational and residential '
        + 'work — the Bank of Khartoum headquarters, the BADEA headquarters of 1980, laboratories for '
        + 'his own university. English Wikipedia calls him one of the pioneers of modernist '
        + 'architecture in Sudan and one of its most admired architects.',
      es: 'Abdel-Moneim Mustafa nació en Omdurmán en 1930, bajo el condominio anglo-egipcio. Empezó '
        + 'ingeniería en la Universidad de Jartum, que aún no tenía departamento de arquitectura, '
        + 'obtuvo una beca para la Universidad de Leicester y se tituló allí como arquitecto en 1958. '
        + 'En 1964 se incorporó al nuevo departamento de arquitectura de Jartum como su primer '
        + 'profesor sudanés tras la independencia, y lo dirigió entre 1972 y 1974. Entró en el '
        + 'Ministerio de Obras Públicas en 1963 y ese mismo año fundó su estudio, Technocon, con obra '
        + 'administrativa, docente, industrial, recreativa y residencial: la sede del Banco de '
        + 'Jartum, la sede del BADEA de 1980, laboratorios para su propia universidad. La Wikipedia en '
        + 'inglés lo llama uno de los pioneros de la arquitectura moderna en Sudán y uno de sus '
        + 'arquitectos más admirados.',
      it: 'Abdel-Moneim Mustafa nacque a Omdurman nel 1930, sotto il condominio anglo-egiziano. '
        + 'Iniziò ingegneria all’Università di Khartoum, che non aveva ancora un dipartimento di '
        + 'architettura, ottenne una borsa per l’Università di Leicester e vi si laureò architetto '
        + 'nel 1958. Nel 1964 entrò nel nuovo dipartimento di architettura di Khartoum come primo '
        + 'docente sudanese dopo l’indipendenza, e lo diresse dal 1972 al 1974. Entrò al Ministero '
        + 'dei Lavori Pubblici nel 1963 e nello stesso anno fondò il proprio studio, Technocon, con '
        + 'opere amministrative, scolastiche, industriali, ricreative e residenziali: la sede della '
        + 'Bank of Khartoum, la sede della BADEA del 1980, laboratori per la sua stessa università. La '
        + 'Wikipedia in inglese lo definisce uno dei pionieri dell’architettura moderna in Sudan e '
        + 'uno dei suoi architetti più ammirati.',
    },
    awards: [],
    tier: 'deep',
    context: null,
    sources: [
      {
        kind: 'wikidata',
        url: 'https://www.wikidata.org/wiki/Q111603095',
        title: 'Abdel-Moneim Mustafa (Q111603095)',
        license: null,
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
      {
        kind: 'publication',
        url: 'https://www.architectural-review.com/essays/reputations/abdel-moneim-mustafa-1930',
        title: 'Ezra Akcan, "Abdel Moneim Mustafa (1930–)", The Architectural Review, 28 May 2024',
        license: null,
      },
    ],
  },
  {
    id: 'roisin-heneghan',
    wikidataId: 'Q21689250',
    name: 'Róisín Heneghan',
    alternativeNames: ['Roisin Heneghan'],
    gender: 'woman',
    born: null,
    died: null,
    floruit: { start: 2005, end: 2025, override: false },
    movements: 'unaffiliated',
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'cultural',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Róisín Heneghan is an Irish architect who founded heneghan peng architects in New York in '
        + '1999 with Shih-Fu Peng and moved the office to Dublin in 2001. Two years later, and with a '
        + 'practice barely four years old, they won the competition for the Grand Egyptian Museum '
        + 'against 1,556 other entries — a result that still stands as one of the largest open '
        + 'competition upsets on record. The office\'s buildings tend to begin as a reading of '
        + 'topography: the Giant\'s Causeway visitor centre folded into its basalt headland in Northern '
        + 'Ireland, the Palestinian Museum at Birzeit terraced down a hillside, the Giza museum '
        + 'pressed into the desert escarpment. She was '
        + 'shortlisted for the AJ Woman Architect of the Year in 2014 and elected to Aosdána in 2024.',
      es: 'Róisín Heneghan es una arquitecta irlandesa que fundó heneghan peng architects en Nueva '
        + 'York en 1999 junto a Shih-Fu Peng y trasladó el estudio a Dublín en 2001. Dos años '
        + 'después, con un despacho que apenas tenía cuatro años de vida, ganaron el concurso del '
        + 'Gran Museo Egipcio frente a otras 1.556 propuestas, uno de los vuelcos más sonados que se '
        + 'recuerdan en un concurso abierto. Sus edificios suelen partir de una lectura del terreno: '
        + 'el centro de visitantes de la Calzada del Gigante, en Irlanda del Norte, plegado en su '
        + 'promontorio de basalto; el Museo Palestino de Birzeit aterrazado en la ladera; el museo de '
        + 'Guiza hincado en el escarpe del desierto. Fue '
        + 'finalista del AJ Woman Architect of the Year en 2014 y entró en Aosdána en 2024.',
      it: 'Róisín Heneghan è un’architetta irlandese che nel 1999 fondò a New York, con Shih-Fu '
        + 'Peng, lo studio heneghan peng architects, trasferito a Dublino nel 2001. Due anni dopo, '
        + 'con uno studio nato da appena quattro anni, i due vinsero il concorso per il Grande museo '
        + 'egizio battendo altre 1.556 proposte: resta uno dei ribaltamenti più clamorosi mai '
        + 'registrati in un concorso aperto. I loro edifici nascono di solito da una lettura del '
        + 'terreno: il centro visitatori del Giant’s Causeway piegato dentro il promontorio '
        + 'basaltico, in Irlanda del Nord; il Museo palestinese di Birzeit terrazzato sul pendio; il '
        + 'museo di Giza conficcato nella scarpata del deserto. È '
        + 'stata finalista dell’AJ Woman Architect of the Year nel 2014 ed è entrata in Aosdána nel 2024.',
    },
    awards: [
      'First prize, Grand Egyptian Museum international competition (2003)',
      'Elected to Aosdána (2024)',
    ],
    tier: 'canon',
    context: null,
    sources: [
      {
        kind: 'wikidata',
        url: 'https://www.wikidata.org/wiki/Q21689250',
        title: 'Roisin Heneghan (Q21689250)',
        license: null,
      },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/R%C3%B3is%C3%ADn_Heneghan',
        title: 'Róisín Heneghan — Wikipedia',
        license: 'CC BY-SA 4.0',
      },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Grand_Egyptian_Museum',
        title: 'Grand Egyptian Museum — Wikipedia',
        license: 'CC BY-SA 4.0',
      },
    ],
  },
];
