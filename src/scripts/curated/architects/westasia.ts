import type { Architect } from '@/types/architect';

// Western Asia — Turkey, the Levant and the Caucasus.
// workRegions/workCentroid are deliberately left empty here: buildCuratedPool
// derives both from each architect's buildings and overwrites whatever is typed.
export const WESTASIA_ARCHITECTS: Architect[] = [
  {
    id: 'mimar-sinan',
    wikidataId: 'Q5600',
    name: 'Mimar Sinan',
    alternativeNames: ['Koca Mimar Sinan Ağa', 'Sinan ibn Abd al-Mannan', 'Koca Sinan'],
    gender: 'man',
    born: 1490,
    died: 1588,
    // Span of completed works, not of office: the Hüsrev Pasha Mosque and its
    // double madrasa in Aleppo were built in the winter of 1536-37, before his
    // appointment as chief court architect; he was still building at his death.
    floruit: { start: 1537, end: 1588, override: false },
    movements: [{ id: 'ottoman-classical', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'sacral',
    signatureMaterial: 'stone',
    portrait: {
      en: 'Sinan entered Ottoman service as a conscripted Christian levy, trained as a military engineer, and built bridges and siege works on campaign before Süleyman I appointed him chief court architect in 1538. He held the post for half a century, running a state architectural office that produced hundreds of mosques, madrasas, bridges, aqueducts and baths across the empire. The argument of his life was structural: how to carry a single great dome on the fewest possible supports, and how to open the walls that remain to daylight. He worked the problem in public, calling the Şehzade Mosque in Istanbul his apprentice work, the Süleymaniye his journeyman work, and the Selimiye at Edirne, finished in his eighties, his masterpiece. Ottoman mosque design after him is largely a set of variations on solutions he had already tested.',
      es: 'Sinan entró al servicio otomano como recluta cristiano del devşirme, se formó como ingeniero militar y levantó puentes y obras de asedio en campaña antes de que Solimán I lo nombrara arquitecto jefe de la corte en 1538. Ocupó el cargo durante medio siglo al frente de una oficina estatal de arquitectura que produjo centenares de mezquitas, madrazas, puentes, acueductos y baños por todo el imperio. El argumento de su vida fue estructural: cómo sostener una sola gran cúpula sobre los menos apoyos posibles y cómo abrir a la luz los muros que quedan. Trabajó el problema en público: llamó a la mezquita de Şehzade de Estambul su obra de aprendiz, a la Süleymaniye su obra de oficial y a la Selimiye de Edirne, terminada ya octogenario, su obra maestra. La mezquita otomana posterior es, en buena medida, un conjunto de variaciones sobre soluciones que él ya había ensayado.',
      it: "Sinan entrò al servizio ottomano come recluta cristiana del devşirme, si formò come ingegnere militare e costruì ponti e opere d'assedio in campagna prima che Solimano I lo nominasse architetto capo di corte nel 1538. Tenne l'incarico per mezzo secolo, dirigendo un ufficio statale di architettura che produsse centinaia di moschee, madrase, ponti, acquedotti e bagni in tutto l'impero. L'argomento della sua vita fu strutturale: come reggere un'unica grande cupola sul minor numero possibile di appoggi e come aprire alla luce i muri che restano. Affrontò il problema in pubblico: chiamò la moschea Şehzade di Istanbul la sua opera di apprendista, la Süleymaniye quella di artigiano e la Selimiye di Edirne, finita ormai ottantenne, il suo capolavoro. La moschea ottomana successiva è in gran parte un insieme di variazioni su soluzioni che lui aveva già collaudato.",
    },
    awards: [],
    tier: 'canon',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q5600', title: 'Mimar Sinan (Q5600)', license: null },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Mimar_Sinan',
        title: 'Mimar Sinan',
        license: 'CC BY-SA 4.0',
      },
    ],
  },
  {
    id: 'youssef-aftimus',
    wikidataId: 'Q8059063',
    name: 'Youssef Aftimus',
    alternativeNames: ['Yusuf Aftimus', 'يوسف أفتيموس'],
    gender: 'man',
    born: 1866,
    died: 1952,
    // Documented completions run from the Persian Palace, Turkish Village and
    // Cairo Street pavilions at the 1893 Chicago exposition to the Barakat
    // Building in its final, extended form (1932).
    floruit: { start: 1893, end: 1932, override: false },
    // No movement label fits: his idiom is an Ottoman and Moorish revivalism
    // that the closed MOVEMENTS vocabulary does not carry, and inventing one
    // would misdescribe him.
    movements: 'unaffiliated',
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'civic',
    signatureMaterial: 'stone',
    portrait: {
      en: "Aftimus was born at Deir el Qamar in Mount Lebanon, took a Bachelor of Arts at the Syrian Protestant College in Beirut, sailed for New York in 1885 and graduated in civil engineering from Union College in 1891. He worked for the Pennsylvania Railroad and for General Electric before being chosen in 1893 to design the Persian Palace, Turkish Village and Cairo Street pavilions at Chicago's World's Columbian Exposition. Recruited home as Beirut's municipal engineer in 1898, he spent three decades giving the city its public face: the Grand Serail clock tower, the Hamidiyyeh Fountain of 1900, the Beirut Municipality building he won in competition in 1923, the Barakat house of 1924 and the Grand Théâtre of 1929. He served as minister of public works in 1926–27 and published on Arab architecture.",
      es: 'Aftimus nació en Deir el Qamar, en el Monte Líbano, se licenció en el Colegio Protestante Sirio de Beirut, embarcó hacia Nueva York en 1885 y se graduó en ingeniería civil por el Union College en 1891. Trabajó para el ferrocarril de Pensilvania y para General Electric antes de ser elegido en 1893 para proyectar los pabellones del Palacio Persa, la Aldea Turca y la Calle del Cairo en la Exposición Universal de Chicago. Reclutado como ingeniero municipal de Beirut en 1898, dedicó tres décadas a dar rostro público a la ciudad: la torre del reloj del Grand Serail, la fuente Hamidiyyeh de 1900, el ayuntamiento que ganó por concurso en 1923, la casa Barakat de 1924 y el Grand Théâtre de 1929. Fue ministro de obras públicas en 1926-27 y publicó sobre arquitectura árabe.',
      it: 'Aftimus nacque a Deir el Qamar, nel Monte Libano, si laureò al Syrian Protestant College di Beirut, partì per New York nel 1885 e ottenne la laurea in ingegneria civile allo Union College nel 1891. Lavorò per la Pennsylvania Railroad e per la General Electric prima di essere scelto nel 1893 per progettare i padiglioni del Palazzo Persiano, del Villaggio Turco e della Via del Cairo alla Esposizione universale di Chicago. Richiamato in patria come ingegnere municipale di Beirut nel 1898, dedicò tre decenni a dare alla città il suo volto pubblico: la torre dell’orologio del Grand Serail, la fontana Hamidiyyeh del 1900, il municipio vinto per concorso nel 1923, la casa Barakat del 1924 e il Grand Théâtre del 1929. Fu ministro dei lavori pubblici nel 1926-27 e pubblicò studi sull’architettura araba.',
    },
    awards: [],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q8059063', title: 'Youssef Aftimus (Q8059063)', license: null },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Youssef_Aftimus',
        title: 'Youssef Aftimus',
        license: 'CC BY-SA 4.0',
      },
    ],
  },
  {
    id: 'emin-onat',
    wikidataId: 'Q5372464',
    name: 'Emin Onat',
    alternativeNames: ['Emin Halid Onat'],
    gender: 'man',
    born: 1908,
    died: 1961,
    // From the start of work on Anıtkabir and the Istanbul University faculty
    // building to his death in 1961.
    floruit: { start: 1944, end: 1961, override: false },
    // The Second National Architectural Movement, to which his work belongs,
    // has no entry in the closed MOVEMENTS vocabulary.
    movements: 'unaffiliated',
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'civic',
    signatureMaterial: 'stone',
    portrait: {
      en: "Onat entered Istanbul Technical University in 1926 and was sent on to the technical university in Zurich, where he studied under Otto Rudolf Salvisberg and absorbed a disciplined Swiss modernism. He returned to Turkey in 1934 to teach, became the first dean of Istanbul Technical University's new Faculty of Architecture in 1944, and served as its rector from 1951 to 1953. With Orhan Arda he won the 1942 international competition for Atatürk's mausoleum, and that building occupied him for the rest of his working life. His architecture belongs to what Turkish historians call the Second National Architectural Movement: symmetrical, monumental, faced in cut stone, drawing on Seljuk and Ottoman precedent without copying it. He also built the Istanbul Justice Palace and the presidential secretariat at Çankaya. In October 1960 he was among the 147 academics dismissed from Turkey's universities; he died the following year.",
      es: 'Onat ingresó en la Universidad Técnica de Estambul en 1926 y fue enviado después a la universidad técnica de Zúrich, donde estudió con Otto Rudolf Salvisberg y asimiló un modernismo suizo disciplinado. Volvió a Turquía en 1934 para enseñar, fue el primer decano de la nueva Facultad de Arquitectura de la Universidad Técnica de Estambul en 1944 y su rector entre 1951 y 1953. Con Orhan Arda ganó en 1942 el concurso internacional para el mausoleo de Atatürk, obra que le ocupó el resto de su vida profesional. Su arquitectura pertenece a lo que la historiografía turca llama el Segundo Movimiento Arquitectónico Nacional: simétrica, monumental, revestida de piedra labrada, apoyada en el precedente selyúcida y otomano sin copiarlo. Construyó también el Palacio de Justicia de Estambul y la secretaría presidencial de Çankaya. En octubre de 1960 figuró entre los 147 académicos expulsados de las universidades turcas; murió al año siguiente.',
      it: "Onat entrò all'Università tecnica di Istanbul nel 1926 e fu poi inviato al politecnico di Zurigo, dove studiò con Otto Rudolf Salvisberg e assimilò un modernismo svizzero rigoroso. Tornò in Turchia nel 1934 per insegnare, fu il primo preside della nuova Facoltà di Architettura dell'Università tecnica di Istanbul nel 1944 e ne fu rettore dal 1951 al 1953. Con Orhan Arda vinse nel 1942 il concorso internazionale per il mausoleo di Atatürk, opera che lo impegnò per tutto il resto della carriera. La sua architettura appartiene a quello che gli storici turchi chiamano Secondo Movimento Architettonico Nazionale: simmetrica, monumentale, rivestita in pietra da taglio, fondata sul precedente selgiuchide e ottomano senza copiarlo. Costruì anche il Palazzo di Giustizia di Istanbul e la segreteria presidenziale di Çankaya. Nell'ottobre 1960 fu tra i 147 accademici espulsi dalle università turche; morì l'anno seguente.",
    },
    awards: [
      'First prize, Anıtkabir international competition (1942, with Orhan Arda)',
      'Honorary membership, Royal Institute of British Architects (1946)',
      'Honorary doctorate, Technische Hochschule Hannover (1956)',
    ],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q5372464', title: 'Emin Onat (Q5372464)', license: null },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Emin_Halid_Onat',
        title: 'Emin Halid Onat',
        license: 'CC BY-SA 4.0',
      },
    ],
  },
  {
    id: 'george-chakhava',
    wikidataId: 'Q13425862',
    name: 'George Chakhava',
    alternativeNames: ['Giorgi Chakhava', 'გიორგი ჩახავა'],
    gender: 'man',
    born: 1923,
    died: 2007,
    // Documented completions: the Tbilisi ministry building and the Batumi
    // Café Fantasy (both 1975), and the Russia–Georgia Friendship Monument (1983).
    floruit: { start: 1975, end: 1983, override: false },
    movements: [{ id: 'brutalism', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'civic',
    signatureMaterial: 'concrete',
    portrait: {
      en: 'Chakhava graduated in architecture from Georgian Technical University in 1949 and made his career inside the Soviet Georgian state apparatus, rising to deputy minister of highway construction in the 1970s. That post made him, unusually, both the client and the lead architect of his ministry’s own headquarters in Tbilisi, designed with Zurab Jalaghania and finished in 1975. The building states his central idea, the "Space City" method: hang the accommodation in horizontal two-storey slabs stacked and crossed over a few vertical cores, and let the hillside run on underneath, unbuilt. He used the same logic at the Café Fantasy in Batumi, also 1975, and worked on the Russia–Georgia Friendship Monument in 1983. He received the USSR State Prize that year.',
      es: 'Chakhava se licenció en arquitectura por la Universidad Técnica de Georgia en 1949 e hizo carrera dentro del aparato estatal de la Georgia soviética, hasta llegar a viceministro de construcción de carreteras en los años setenta. Ese cargo lo convirtió, insólitamente, en cliente y arquitecto jefe a la vez de la sede de su propio ministerio en Tiflis, proyectada con Zurab Jalaghania y terminada en 1975. El edificio enuncia su idea central, el método de la «ciudad espacial»: colgar los locales en bandas horizontales de dos plantas, apiladas y cruzadas sobre unos pocos núcleos verticales, y dejar que la ladera siga corriendo por debajo sin edificar. Aplicó la misma lógica en el Café Fantasy de Batumi, también de 1975, y participó en el Monumento a la Amistad ruso-georgiana en 1983. Ese año recibió el Premio Estatal de la URSS.',
      it: 'Chakhava si laureò in architettura alla Università tecnica georgiana nel 1949 e fece carriera dentro l’apparato statale della Georgia sovietica, fino a diventare viceministro della costruzione stradale negli anni settanta. Quell’incarico lo rese, cosa insolita, insieme committente e architetto capo della sede del suo stesso ministero a Tbilisi, progettata con Zurab Jalaghania e conclusa nel 1975. L’edificio enuncia la sua idea centrale, il metodo della «città spaziale»: sospendere gli ambienti in fasce orizzontali di due piani, impilate e incrociate su pochi nuclei verticali, lasciando che il pendio prosegua sotto, non costruito. Applicò la stessa logica al Café Fantasy di Batumi, anch’esso del 1975, e lavorò al Monumento all’amicizia russo-georgiana nel 1983. In quell’anno ricevette il Premio di Stato dell’URSS.',
    },
    awards: ['USSR State Prize (1983)'],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q13425862', title: 'George Chakhava (Q13425862)', license: null },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/George_Chakhava',
        title: 'George Chakhava',
        license: 'CC BY-SA 4.0',
      },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Bank_of_Georgia_headquarters',
        title: 'Bank of Georgia headquarters',
        license: 'CC BY-SA 4.0',
      },
    ],
  },
  {
    id: 'melike-altinisik',
    wikidataId: 'Q116856797',
    name: 'Melike Altınışık',
    alternativeNames: ['Melike Altinisik', 'Мелике Алтынышик'],
    gender: 'woman',
    born: 1980,
    died: null,
    // Span of completed works: Melike Altınışık Architects was founded in 2013,
    // its first building finished in 2020, and the practice is still active.
    floruit: { start: 2020, end: 2025, override: false },
    // Trained at the AA Design Research Laboratory and formed at Zaha Hadid
    // Architects, the practice she left to found her own; the label is a
    // curatorial judgement about lineage and method, not a self-description.
    movements: [{ id: 'parametricism', primary: true }],
    workRegions: [],
    workCentroid: { lat: 0, lon: 0 },
    primaryTypology: 'tower',
    signatureMaterial: 'concrete',
    portrait: {
      en: "Altınışık was born in Sakarya in 1980 and finished top of her class at the Faculty of Architecture of Istanbul Technical University in 2003, then took a master's at the Architectural Association's Design Research Laboratory in London, completing it in 2006. Her thesis, Urban Lobby, won the FEIDAD award that year and a Swiss Arts Award in 2007. Zaha Hadid and Patrik Schumacher, who sat on her final jury, offered her a job on the spot; she spent 2006 to 2013 at Zaha Hadid Architects as a project leader, working on the Kartal-Pendik masterplan for Istanbul and on schemes in twelve countries. She returned to Turkey in 2012 to teach on the architecture master's at Istanbul Bilgi University and founded Melike Altınışık Architects in Istanbul in 2013. The Çamlıca Tower is the practice's first building; in 2019 it won the competition for the Robot Science Museum in Seoul.",
      es: 'Altınışık nació en Sakarya en 1980 y terminó la carrera como número uno de su promoción en la Facultad de Arquitectura de la Universidad Técnica de Estambul, en 2003. Cursó después un máster en el Design Research Laboratory de la Architectural Association de Londres, concluido en 2006; su tesis, Urban Lobby, obtuvo ese año el premio FEIDAD y en 2007 un Swiss Arts Award. Zaha Hadid y Patrik Schumacher, que formaban su tribunal final, la contrataron: entre 2006 y 2013 fue jefa de proyecto en Zaha Hadid Architects, donde trabajó en el plan de Kartal-Pendik para Estambul y en encargos de doce países. Volvió a Turquía en 2012 para enseñar en el máster de arquitectura de la Universidad Bilgi de Estambul y fundó Melike Altınışık Architects en 2013. La torre de Çamlıca es su primer edificio; en 2019 ganó el concurso del Museo de la Ciencia Robótica de Seúl.',
      it: "Altınışık nacque a Sakarya nel 1980 e si laureò prima del suo corso alla Facoltà di Architettura dell'Università tecnica di Istanbul nel 2003; proseguì con un master al Design Research Laboratory della Architectural Association di Londra, concluso nel 2006. La sua tesi, Urban Lobby, vinse quell'anno il premio FEIDAD e nel 2007 uno Swiss Arts Award. Zaha Hadid e Patrik Schumacher, che sedevano nella commissione finale, le offrirono subito un impiego: dal 2006 al 2013 fu capoprogetto da Zaha Hadid Architects, dove lavorò al piano di Kartal-Pendik per Istanbul e a incarichi in dodici paesi. Tornò in Turchia nel 2012 per insegnare nel master di architettura dell'Università Bilgi di Istanbul e fondò Melike Altınışık Architects a Istanbul nel 2013. La torre di Çamlıca è il primo edificio dello studio; nel 2019 ha vinto il concorso per il Museo della scienza robotica di Seul.",
    },
    awards: [
      'FEIDAD Award (2006, for the thesis Urban Lobby)',
      'Swiss Arts Award (2007)',
      'DOM-ACXT International Award for Architecture Diploma (2008)',
      'Europe 40 under 40 (2018)',
      'First prize, Robot Science Museum competition, Seoul (2019)',
    ],
    tier: 'deep',
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q116856797', title: 'Melike Altınışık (Q116856797)', license: null },
      {
        kind: 'wikipedia',
        url: 'https://tr.wikipedia.org/wiki/Melike_Alt%C4%B1n%C4%B1%C5%9F%C4%B1k',
        title: 'Melike Altınışık',
        license: 'CC BY-SA 4.0',
      },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/%C3%87aml%C4%B1ca_Tower',
        title: 'Çamlıca Tower',
        license: 'CC BY-SA 4.0',
      },
      {
        kind: 'institution',
        url: 'https://www.melikealtinisik.com/',
        title: 'Melike Altınışık Architects — studio site',
        license: null,
      },
    ],
  },
];
