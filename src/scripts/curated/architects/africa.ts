import type { Architect } from '@/types/architect';

// Wave 5, agent 9d — Northern Africa (UN M49 "Northern Africa": DZ, EG, LY, MA,
// SD, TN). Seven architects, one per building in buildings/africa.ts.
//
// Two of these seven have their practice base outside the slice and are defined
// here because no other slice owns them: Fernand Pouillon (French) and KSP
// Jürgen Engel Architekten (German). If agent 9a or 9d-germanic also defines
// them, keep one definition and repoint the architectId. Both ids are plain
// kebab-case slugs.
//
// Georgette Cottin-Euziol (added in the wikidataId-nullable fix round): her
// own Wikidata item (Q62032779) exists and is used, but her Tizi-Ouzou
// prefecture building has no Wikidata item of its own — see the matching
// entry in buildings/africa.ts, which carries wikidataId: null plus 2+
// non-Wikidata/Wikipedia sources as the new `wikidata-null-needs-sources`
// rule requires.
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
        + 'Abdallah ibn al-Hajj al-Ishbili — was born in Seville and died at Fes in 1314. He is one '
        + 'of the very few pre-modern Maghrebi builders named in the record at all, rather than '
        + 'dissolved into the guild that raised the work. After a Castilian fleet sacked Salé in '
        + '1260, the Marinid sultan Abu Yusuf Yaqub ibn Abd al-Haqq set out to rebuild the town as '
        + 'the chief shipyard of the kingdom of Fes, and called on Ben Ali. French and Arabic '
        + 'accounts credit him with the arsenal and both of its monumental ashlar gates, citing '
        + 'Henri Terrasse’s 1922 study of them; the attestation is firmest at Bab el-Mrissa, vaulted '
        + 'over a canal so that galleys could pass inside the walls. Nothing else of his life is '
        + 'documented.',
      es: 'Mohamed Ben Ali —en las fuentes árabes Abu Abdallah Muhammad ibn Ali ibn Muhammad ibn '
        + 'Abdallah ibn al-Hajj al-Ishbili— nació en Sevilla y murió en Fez en 1314. Es uno de los '
        + 'poquísimos constructores premodernos del Magreb cuyo nombre consta, en vez de disolverse '
        + 'en el gremio que levantó la obra. Después de que una flota castellana saqueara Salé en '
        + '1260, el sultán meriní Abu Yusuf Yaqub ibn Abd al-Haqq decidió rehacer la ciudad como '
        + 'principal astillero del reino de Fez y recurrió a Ben Ali. Las fuentes francesas y árabes '
        + 'le atribuyen las atarazanas y sus dos puertas monumentales de sillería, remitiéndose al '
        + 'estudio que Henri Terrasse les dedicó en 1922; la atribución es más firme en Bab '
        + 'el-Mrissa, abovedada sobre un canal para que las galeras entraran dentro de la muralla. '
        + 'De su vida no se documenta nada más.',
      it: 'Mohamed Ben Ali — nelle fonti arabe Abu Abdallah Muhammad ibn Ali ibn Muhammad ibn '
        + 'Abdallah ibn al-Hajj al-Ishbili — nacque a Siviglia e morì a Fes nel 1314. È uno dei '
        + 'pochissimi costruttori premoderni del Maghreb di cui resti il nome, invece di dissolversi '
        + 'nella corporazione che innalzò l’opera. Dopo il saccheggio castigliano di Salé nel 1260, '
        + 'il sultano merinide Abu Yusuf Yaqub ibn Abd al-Haqq decise di rifondare la città come '
        + 'principale cantiere navale del regno di Fes e ne affidò l’incarico a Ben Ali. Le fonti '
        + 'francesi e arabe gli attribuiscono l’arsenale e le sue due monumentali porte in conci, '
        + 'rimandando allo studio che Henri Terrasse dedicò loro nel 1922; l’attestazione è più '
        + 'solida per Bab el-Mrissa, voltata su un canale perché le galee entrassero dentro le mura. '
        + 'Della sua vita non si documenta altro.',
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
      {
        kind: 'publication',
        url: 'https://gallica.bnf.fr/ark:/12148/cb34349223d/date',
        title: 'Henri Terrasse, "Les portes de l\'Arsenal de Salé", Hespéris IV (1922), 357-371',
        license: null,
      },
    ],
  },
  {
    id: 'ernesto-verrucci',
    wikidataId: 'Q3732342',
    name: 'Ernesto Verrucci',
    alternativeNames: [
      'Ernesto Verrucci-Bey',
      'Ernesto Verrucci Bey',
      'Verrucci Bey',
      'إرنستو فيروتشي',
    ],
    gender: 'man',
    born: 1874,
    died: 1945,
    floruit: { start: 1910, end: 1936, override: false },
    movements: 'unaffiliated',
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'domestic',
    signatureMaterial: 'stone',
    portrait: {
      en: 'Ernesto Verrucci (1874–1945) was born and died at Force in the Marches, and spent the '
        + 'working life between those two dates in Egypt. Sultan — later King — Fuad I appointed him '
        + 'chief architect of the royal charitable works in 1917 and granted him the Ottoman title '
        + 'Bey in 1919, and for the next two decades he was the architect of the Egyptian crown: '
        + 'palaces at Cairo and Alexandria, the mausoleums of the sultan and of the queen mother, the '
        + 'long remodelling of Abdeen Palace between 1919 and 1936, the Haramlik at Montaza, a '
        + 'theatre, a library and a civic museum at Damanhur, the Oriental Music Institute in Cairo. '
        + 'He worked mostly in a heavy revivalist manner that quoted Mamluk and Ottoman Cairo, and '
        + 'his Egyptian corpus is far larger than his Italian reputation.',
      es: 'Ernesto Verrucci (1874-1945) nació y murió en Force, en las Marcas, y pasó en Egipto toda '
        + 'la vida profesional que media entre ambas fechas. El sultán —luego rey— Fuad I lo nombró '
        + 'en 1917 arquitecto jefe de las obras pías reales y le concedió en 1919 el título otomano '
        + 'de bey, y durante las dos décadas siguientes fue el arquitecto de la corona egipcia: '
        + 'palacios en El Cairo y Alejandría, los mausoleos del sultán y de la reina madre, la larga '
        + 'reforma del palacio de Abdín entre 1919 y 1936, el haramlik de Montaza, un teatro, una '
        + 'biblioteca y un museo cívico en Damanhur, el Instituto de Música Oriental de El Cairo. '
        + 'Trabajó sobre todo en un historicismo pesado que citaba el Cairo mameluco y otomano, y su '
        + 'obra egipcia es mucho mayor que su fama italiana.',
      it: 'Ernesto Verrucci (1874-1945) nacque e morì a Force, nelle Marche, e passò in Egitto tutta '
        + 'la vita professionale che sta fra le due date. Il sultano — poi re — Fuad I lo nominò nel '
        + '1917 architetto capo delle opere pie sultanali e gli concesse nel 1919 il titolo ottomano '
        + 'di bey, e per i due decenni successivi fu l’architetto della corona egiziana: palazzi al '
        + 'Cairo e ad Alessandria, i mausolei del sultano e della regina madre, la lunga '
        + 'ristrutturazione del palazzo di Abdin fra il 1919 e il 1936, l’haramlik di Montaza, un '
        + 'teatro, una biblioteca e un museo civico a Damanhur, l’Istituto di musica orientale del '
        + 'Cairo. Lavorò soprattutto in un revival pesante che citava il Cairo mamelucco e ottomano, '
        + 'e il suo corpus egiziano è assai più vasto della sua fama italiana.',
    },
    awards: [],
    tier: 'deep',
    context: null,
    sources: [
      {
        kind: 'wikidata',
        url: 'https://www.wikidata.org/wiki/Q3732342',
        title: 'Ernesto Verrucci (Q3732342)',
        license: null,
      },
      {
        kind: 'wikipedia',
        url: 'https://it.wikipedia.org/wiki/Ernesto_Verrucci',
        title: 'Ernesto Verrucci — Wikipedia',
        license: 'CC BY-SA 4.0',
      },
    ],
  },
  {
    id: 'antonio-lasciac',
    wikidataId: 'Q602794',
    name: 'Antonio Lasciac',
    alternativeNames: [
      'Anton Lasciac',
      'Antonio Lasciac Bey',
      'Anton Laščak',
      'أنطونيو لاشياك',
    ],
    gender: 'man',
    born: 1856,
    died: 1946,
    floruit: { start: 1883, end: 1930, override: false },
    movements: 'unaffiliated',
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'domestic',
    signatureMaterial: 'stone',
    portrait: {
      en: 'Antonio Lasciac (1856–1946) was born in Gorizia, then Austria-Hungary, trained as '
        + 'architect and engineer at the Vienna Polytechnic, and sailed for Egypt to help rebuild '
        + 'Alexandria after the British bombardment of 1882. He stayed sixty years and died in Cairo. '
        + 'Khedive Abbas II made him court architect in 1907; he lost the post in the First World War '
        + 'because of his Austro-Hungarian passport, then came back and worked on, wintering in Egypt '
        + 'and summering in Gorizia. His Alexandrian work is European and eclectic — the Menasce '
        + 'okelle, the Ramleh station, villas for the merchant families. His Cairo work turns '
        + 'increasingly to the Mamluk and Ottoman vocabularies of the old city: the Said Halim Pasha '
        + 'and Tahra palaces, the Aisha Fahmy palace, and the Banque Misr headquarters of 1927.',
      es: 'Antonio Lasciac (1856-1946) nació en Gorizia, entonces Austria-Hungría, se formó como '
        + 'arquitecto e ingeniero en el Politécnico de Viena y embarcó hacia Egipto para ayudar a '
        + 'reconstruir Alejandría tras el bombardeo británico de 1882. Se quedó sesenta años y murió '
        + 'en El Cairo. El jedive Abbas II lo nombró arquitecto de la corte en 1907; perdió el puesto '
        + 'en la Primera Guerra Mundial por su pasaporte austrohúngaro, y luego volvió y siguió '
        + 'trabajando, invernando en Egipto y veraneando en Gorizia. Su obra alejandrina es europea y '
        + 'ecléctica: la okelle Menasce, la estación de Ramleh, villas para las familias de '
        + 'comerciantes. La cairota se vuelca cada vez más en el vocabulario mameluco y otomano de la '
        + 'ciudad vieja: los palacios de Said Halim Pachá y Tahra, el de Aisha Fahmy y la sede del '
        + 'Banque Misr de 1927.',
      it: 'Antonio Lasciac (1856-1946) nacque a Gorizia, allora Austria-Ungheria, si formò come '
        + 'architetto e ingegnere al Politecnico di Vienna e partì per l’Egitto per contribuire alla '
        + 'ricostruzione di Alessandria dopo il bombardamento britannico del 1882. Vi rimase '
        + 'sessant’anni e morì al Cairo. Il chedivè Abbas II lo nominò architetto di corte nel 1907; '
        + 'perse l’incarico durante la Prima guerra mondiale per il suo passaporto austro-ungarico, '
        + 'poi tornò e continuò a lavorare, svernando in Egitto ed estivando a Gorizia. L’opera '
        + 'alessandrina è europea ed eclettica: l’okelle Menasce, la stazione di Ramleh, ville per le '
        + 'famiglie mercantili. Quella cairota si rivolge sempre più al lessico mamelucco e ottomano '
        + 'della città vecchia: i palazzi di Said Halim Pascià e Tahra, quello di Aisha Fahmy e la '
        + 'sede della Banque Misr del 1927.',
    },
    awards: [],
    tier: 'deep',
    context: null,
    sources: [
      {
        kind: 'wikidata',
        url: 'https://www.wikidata.org/wiki/Q602794',
        title: 'Antonio Lasciac (Q602794)',
        license: null,
      },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Antonio_Lasciac',
        title: 'Antonio Lasciac — Wikipedia',
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
    id: 'georgette-cottin-euziol',
    wikidataId: 'Q62032779',
    name: 'Georgette Cottin-Euziol',
    alternativeNames: ['Georgette Cottin'],
    gender: 'woman',
    born: 1926,
    died: 2004,
    floruit: { start: 1956, end: 1994, override: false },
    movements: 'unaffiliated',
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'civic',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Georgette Cottin-Euziol (1926-2004) was born at El Affroun, in French Algeria, and '
        + 'trained at the École des Beaux-Arts in Paris under Georges Gromort, Louis Arretche and '
        + 'Pierre Vivien, graduating in 1956. She returned to Algeria as an architect that year, left '
        + 'in 1961 under threat from the OAS for her support of independence, and came back in 1963; '
        + 'she took Algerian nationality in 1964 and joined the Algerian Communist Party. Between '
        + '1968 and 1975 she ran a major construction programme for the new wilaya of Tizi-Ouzou in '
        + 'Kabylia: the provincial prefecture, schools, lycées, a theatre, a cinema and a '
        + 'teacher-training college. She later practised in southern France and, in the 1990s, worked '
        + 'on unbuilt reconstruction projects in Russia and Chechnya.',
      es: 'Georgette Cottin-Euziol (1926-2004) nació en El Affroun, en la Argelia francesa, y se '
        + 'formó en la École des Beaux-Arts de París con Georges Gromort, Louis Arretche y Pierre '
        + 'Vivien, licenciándose en 1956. Ese mismo año regresó a Argelia como arquitecta, salió en '
        + '1961 amenazada por la OAS por su apoyo a la independencia y volvió en 1963; obtuvo la '
        + 'nacionalidad argelina en 1964 y se afilió al Partido Comunista Argelino. Entre 1968 y 1975 '
        + 'dirigió un amplio programa de construcción para la nueva wilaya de Tizi-Ouzou, en Cabilia: '
        + 'la prefectura provincial, escuelas, institutos, un teatro, un cine y una escuela normal de '
        + 'magisterio. Más tarde ejerció en el sur de Francia y, en los años noventa, trabajó en '
        + 'proyectos de reconstrucción no realizados en Rusia y Chechenia.',
      it: 'Georgette Cottin-Euziol (1926-2004) nacque a El Affroun, nell\'Algeria francese, e si '
        + 'formò all\'École des Beaux-Arts di Parigi con Georges Gromort, Louis Arretche e Pierre '
        + 'Vivien, laureandosi nel 1956. Quello stesso anno tornò in Algeria come architetta, ne uscì '
        + 'nel 1961 minacciata dall\'OAS per il suo sostegno all\'indipendenza e vi rientrò nel 1963; '
        + 'ottenne la cittadinanza algerina nel 1964 e aderì al Partito Comunista Algerino. Tra il '
        + '1968 e il 1975 diresse un vasto programma edilizio per la nuova wilaya di Tizi-Ouzou, in '
        + 'Cabilia: la prefettura provinciale, scuole, licei, un teatro, un cinema e una scuola '
        + 'normale per maestri. Lavorò poi nel sud della Francia e, negli anni Novanta, a progetti di '
        + 'ricostruzione mai realizzati in Russia e in Cecenia.',
    },
    awards: [],
    tier: 'deep',
    context: {
      body: {
        en: 'As a student at the École des Beaux-Arts in Algiers during the Second World War, '
          + 'Cottin-Euziol took part in Resistance actions against the Vichy government. Practising '
          + 'in Algeria through the war of independence, she left the country in 1961 under threat '
          + 'from the OAS for her support of Algerian independence and returned in 1963; she took '
          + 'Algerian nationality in 1964 and joined the Algerian Communist Party. The prefecture she '
          + 'built for Tizi-Ouzou between 1968 and 1975 was a commission of the state whose '
          + 'independence she had backed against her own colonial community.',
        es: 'Cuando era alumna de la École des Beaux-Arts de Argel durante la Segunda Guerra '
          + 'Mundial, Cottin-Euziol participó en acciones de resistencia contra el gobierno de Vichy. '
          + 'Ejerció en Argelia durante la guerra de independencia, salió del país en 1961 amenazada '
          + 'por la OAS por su apoyo a la independencia argelina y volvió en 1963; obtuvo la '
          + 'nacionalidad argelina en 1964 y se afilió al Partido Comunista Argelino. La prefectura '
          + 'que construyó para Tizi-Ouzou entre 1968 y 1975 fue un encargo del Estado cuya '
          + 'independencia ella había respaldado en contra de su propia comunidad colonial.',
        it: 'Quando era allieva dell\'École des Beaux-Arts di Algeri durante la Seconda guerra '
          + 'mondiale, Cottin-Euziol prese parte ad azioni di Resistenza contro il governo di Vichy. '
          + 'Esercitò in Algeria durante la guerra d\'indipendenza, lasciò il paese nel 1961 '
          + 'minacciata dall\'OAS per il suo sostegno all\'indipendenza algerina e vi tornò nel 1963; '
          + 'ottenne la cittadinanza algerina nel 1964 e aderì al Partito Comunista Algerino. La '
          + 'prefettura che costruì per Tizi-Ouzou tra il 1968 e il 1975 fu una commissione dello '
          + 'Stato la cui indipendenza lei aveva sostenuto contro la propria comunità coloniale.',
      },
      sources: [
        {
          kind: 'wikipedia',
          url: 'https://en.wikipedia.org/wiki/Georgette_Cottin-Euziol',
          title: 'Georgette Cottin-Euziol — Wikipedia',
          license: 'CC BY-SA 4.0',
        },
        {
          kind: 'wikipedia',
          url: 'https://fr.wikipedia.org/wiki/Georgette_Cottin-Euziol',
          title: 'Georgette Cottin-Euziol — Wikipédia',
          license: 'CC BY-SA 4.0',
        },
      ],
    },
    sources: [
      {
        kind: 'wikidata',
        url: 'https://www.wikidata.org/wiki/Q62032779',
        title: 'Georgette Cottin-Euziol (Q62032779)',
        license: null,
      },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Georgette_Cottin-Euziol',
        title: 'Georgette Cottin-Euziol — Wikipedia',
        license: 'CC BY-SA 4.0',
      },
      {
        kind: 'wikipedia',
        url: 'https://fr.wikipedia.org/wiki/Georgette_Cottin-Euziol',
        title: 'Georgette Cottin-Euziol — Wikipédia',
        license: 'CC BY-SA 4.0',
      },
      {
        kind: 'publication',
        url: 'https://journals.openedition.org/abe/6979',
        title: 'Assia Samaï-Bouadjadja, "Le fonds d\'archives Georgette Cottin-Euziol : archive de '
          + 'toute une vie", ABE Journal 16 (2019), DOI 10.4000/abe.6979',
        license: null,
      },
      {
        kind: 'institution',
        url: 'https://www.dictionnaire-creatrices.com/fiche-georgette-cottin-euziol',
        title: 'AWARE (Archives of Women Artists, Research and Exhibitions) — "Georgette Cottin-Euziol"',
        license: null,
      },
    ],
  },
  {
    id: 'ksp-juergen-engel-architekten',
    wikidataId: 'Q1718995',
    name: 'KSP Jürgen Engel Architekten',
    alternativeNames: [
      'KSP Engel',
      'KSP Jürgen Engel',
      'Jürgen Engel',
      'KSP Engel und Zimmermann',
      'Kraemer Sieverts & Partner',
      'KSP Architekten',
    ],
    gender: 'unknown',
    born: null,
    died: null,
    floruit: { start: 1998, end: 2024, override: false },
    movements: 'unaffiliated',
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'civic',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'KSP is a German practice with a long institutional memory: the office was opened at '
        + 'Braunschweig in 1935 by Friedrich Wilhelm Kraemer, became Prof. Kraemer Sieverts & Partner '
        + '— which is where the initials come from — and was renamed KSP Engel und Zimmermann in '
        + '1998 and KSP Engel in 2021. Jürgen Engel, an architect from Düsseldorf, joined as a '
        + 'partner in 1990, opened the Frankfurt office and has led the firm since 2009. The practice '
        + 'works at the scale of the public institution and increasingly outside Germany: the '
        + 'documentation centre at Bergen-Belsen, the National Library of China in Beijing, corporate '
        + 'headquarters, museums, and the state mosque of Algeria, won in competition with the '
        + 'engineers Krebs und Kiefer in 2008. It is a firm rather than an individual, and this pool '
        + 'records it as one.',
      es: 'KSP es un estudio alemán con una memoria institucional larga: la oficina la abrió en '
        + 'Brunswick en 1935 Friedrich Wilhelm Kraemer, pasó a llamarse Prof. Kraemer Sieverts & '
        + 'Partner —de ahí las siglas— y se renombró KSP Engel und Zimmermann en 1998 y KSP Engel en '
        + '2021. Jürgen Engel, arquitecto de Düsseldorf, entró como socio en 1990, abrió la oficina '
        + 'de Fráncfort y dirige la casa desde 2009. El estudio trabaja a la escala de la institución '
        + 'pública y cada vez más fuera de Alemania: el centro de documentación de Bergen-Belsen, la '
        + 'Biblioteca Nacional de China en Pekín, sedes corporativas, museos y la mezquita de Estado '
        + 'de Argelia, ganada en concurso junto a los ingenieros Krebs und Kiefer en 2008. Es un '
        + 'estudio y no una persona, y así consta aquí.',
      it: 'KSP è uno studio tedesco con una lunga memoria istituzionale: l’ufficio fu aperto a '
        + 'Braunschweig nel 1935 da Friedrich Wilhelm Kraemer, divenne Prof. Kraemer Sieverts & '
        + 'Partner — da cui la sigla — e fu rinominato KSP Engel und Zimmermann nel 1998 e KSP Engel '
        + 'nel 2021. Jürgen Engel, architetto di Düsseldorf, entrò come socio nel 1990, aprì la sede '
        + 'di Francoforte e guida lo studio dal 2009. La pratica lavora alla scala dell’istituzione '
        + 'pubblica e sempre più fuori dalla Germania: il centro di documentazione di Bergen-Belsen, '
        + 'la Biblioteca nazionale cinese a Pechino, sedi aziendali, musei e la moschea di Stato '
        + 'algerina, vinta in concorso con gli ingegneri Krebs und Kiefer nel 2008. È uno studio e '
        + 'non una persona, e qui è registrato come tale.',
    },
    awards: [],
    tier: 'deep',
    context: null,
    sources: [
      {
        kind: 'wikidata',
        url: 'https://www.wikidata.org/wiki/Q1718995',
        title: 'KSP Jürgen Engel Architekten (Q1718995)',
        license: null,
      },
      {
        kind: 'wikipedia',
        url: 'https://de.wikipedia.org/wiki/KSP_J%C3%BCrgen_Engel_Architekten',
        title: 'KSP Jürgen Engel Architekten — Wikipedia',
        license: 'CC BY-SA 4.0',
      },
    ],
  },
];
