import type { Building } from '@/types/building';

// Western Asia — Turkey, the Levant and the Caucasus.
// Every countryCode below resolves to subregion "Western Asia" in src/lib/m49.ts
// (TR, LB, GE), which the coverage validator folds into the africa-west-asia bucket.
// image.width/height are left at 0: Task 10 records the real pixel dimensions.
export const WESTASIA_BUILDINGS: Building[] = [
  {
    id: 'selimiye-mosque-edirne',
    wikidataId: 'Q184534',
    name: {
      en: 'Selimiye Mosque',
      es: 'Mezquita de Selim',
      it: 'Moschea Selimiye',
    },
    architectId: 'mimar-sinan',
    location: { city: 'Edirne', countryCode: 'TR', lat: 41.678056, lon: 26.559444 },
    inception: 1568,
    completed: 1575,
    demolished: null,
    typology: 'sacral',
    materials: ['stone'],
    structure: {
      en: 'Eight piers standing in an octagon inside a square hall carry the 31.3-metre hemispherical dome directly on arches, while the buttresses that absorb its outward thrust are folded into the thickness of the outer walls so those walls can be opened with windows at every level.',
      es: 'Ocho pilares dispuestos en octógono dentro de una sala cuadrada reciben directamente sobre arcos la cúpula hemisférica de 31,3 metros, mientras que los contrafuertes que absorben su empuje se pliegan en el espesor de los muros exteriores para que estos puedan abrirse en ventanas a todos los niveles.',
      it: 'Otto pilastri disposti in ottagono dentro una sala quadrata reggono direttamente su archi la cupola emisferica di 31,3 metri, mentre i contrafforti che ne assorbono la spinta sono ripiegati nello spessore dei muri esterni, liberi così di aprirsi in finestre a ogni livello.',
    },
    program: {
      en: 'Sultan Selim II endowed the mosque as the centre of a charitable complex that also held two madrasas, a primary school and a covered market whose rents funded the foundation.',
      es: 'El sultán Selim II dotó la mezquita como núcleo de un complejo asistencial que incluía además dos madrazas, una escuela primaria y un mercado cubierto cuyas rentas financiaban la fundación.',
      it: 'Il sultano Selim II dotò la moschea come nucleo di un complesso assistenziale che comprendeva anche due madrase, una scuola primaria e un mercato coperto le cui rendite finanziavano la fondazione.',
    },
    heritage: 'unesco',
    currentUse: {
      en: 'Active congregational mosque; the former madrasas of the complex house museums.',
      es: 'Mezquita congregacional en uso; las antiguas madrazas del complejo albergan museos.',
      it: 'Moschea congregazionale in uso; le antiche madrase del complesso ospitano musei.',
    },
    detailRect: { x: 0.34, y: 0.26, w: 0.30, h: 0.32 },
    image: {
      commonsFile: 'Selimiye Mosque 026.jpg',
      photographer: 'Dosseman',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Selimiye_Mosque_026.jpg',
      width: 1600,
      height: 1036,
    },
    extraImages: [
      {
        commonsFile: 'File:Selimiye Mosque 025.jpg',
        photographer: 'Dosseman',
        license: 'CC BY-SA 4.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Selimiye_Mosque_025.jpg',
        width: 0,
        height: 0,
      },
    ],
    dossier: {
      en: 'Sinan was approaching eighty when Selim II gave him Edirne, the old Ottoman capital, and a hilltop above it. He answered with the building he had been working towards for forty years. Eight piers set in an octagon inside a square hall take the whole 31.3-metre dome directly, on arches, rather than through the cascade of half-domes that steadies the Süleymaniye; the buttresses that resist the outward thrust are folded into the thickness of the outer walls, which are therefore free to be cut through with windows at every level. The result is a single undivided room, lit all round, with the muezzin’s platform standing free at its centre and İznik tilework concentrated at the mihrab. Four minarets, each nearly seventy-one metres, hold the mass down at the corners. Sinan called it his masterpiece; his biography claims for it a dome higher and wider than Hagia Sophia’s. UNESCO inscribed the mosque and its social complex in 2011.',
      es: 'Sinan rondaba los ochenta años cuando Selim II le entregó Edirne, la vieja capital otomana, y una colina sobre ella. Respondió con el edificio hacia el que llevaba cuarenta años trabajando. Ocho pilares dispuestos en octógono dentro de una sala cuadrada reciben directamente sobre arcos toda la cúpula de 31,3 metros, sin la cascada de semicúpulas que estabiliza la Süleymaniye; los contrafuertes que resisten el empuje se pliegan en el espesor de los muros exteriores, que quedan así libres para abrirse en ventanas a todos los niveles. El resultado es una sala única y sin divisiones, iluminada por todo su perímetro, con la tribuna del almuédano exenta en el centro y la loza de İznik concentrada en el mihrab. Cuatro alminares de casi setenta y un metros sujetan la masa en las esquinas. Sinan la llamó su obra maestra; su biografía le atribuye una cúpula más alta y más ancha que la de Santa Sofía. La UNESCO la inscribió con su complejo asistencial en 2011.',
      it: 'Sinan era vicino agli ottant’anni quando Selim II gli affidò Edirne, la vecchia capitale ottomana, e una collina sopra la città. Rispose con l’edificio verso cui lavorava da quarant’anni. Otto pilastri disposti in ottagono dentro una sala quadrata reggono direttamente su archi l’intera cupola di 31,3 metri, senza la cascata di semicupole che sostiene la Süleymaniye; i contrafforti che assorbono la spinta sono ripiegati nello spessore dei muri esterni, liberi così di aprirsi in finestre a ogni livello. Ne risulta una sala unica e indivisa, illuminata su tutto il perimetro, con la tribuna del muezzin isolata al centro e le ceramiche di İznik concentrate attorno al mihrab. Quattro minareti di quasi settantun metri trattengono la massa agli angoli. Sinan la definì il suo capolavoro; la sua biografia le attribuisce una cupola più alta e più larga di quella di Santa Sofia. L’UNESCO l’ha iscritta con il suo complesso assistenziale nel 2011.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q184534', title: 'Selimiye Mosque (Q184534)', license: null },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Selimiye_Mosque,_Edirne',
        title: 'Selimiye Mosque, Edirne',
        license: 'CC BY-SA 4.0',
      },
      {
        kind: 'institution',
        url: 'https://whc.unesco.org/en/list/1366/',
        title: 'Selimiye Mosque and its Social Complex — UNESCO World Heritage Centre',
        license: null,
      },
    ],
    tier: 'canon',
  },
  {
    id: 'barakat-building-beirut',
    wikidataId: 'Q132174477',
    name: {
      en: 'Barakat Building (Beit Beirut)',
      es: 'Edificio Barakat (Beit Beirut)',
      it: 'Palazzo Barakat (Beit Beirut)',
    },
    architectId: 'youssef-aftimus',
    location: { city: 'Beirut', countryCode: 'LB', lat: 33.8869, lon: 35.5083 },
    inception: 1924,
    completed: 1932,
    demolished: null,
    typology: 'housing',
    materials: ['stone'],
    structure: {
      en: 'Two four-storey blocks of load-bearing ochre Deir el Qamar limestone stand either side of an atrium open to the sky, their facades tied together by a colonnade of slender shafts carrying stacked, curving loggias.',
      es: 'Dos bloques de cuatro plantas en piedra caliza ocre de Deir el Qamar, de muros portantes, flanquean un atrio abierto al cielo, y sus fachadas quedan cosidas por una columnata de fustes esbeltos que sostiene logias curvas superpuestas.',
      it: 'Due blocchi di quattro piani in calcare ocra di Deir el Qamar, a muratura portante, fiancheggiano un atrio aperto sul cielo, e le loro facciate sono cucite da un colonnato di fusti sottili che regge logge curve sovrapposte.',
    },
    program: {
      en: 'Nicholas and Victoria Barakat commissioned it as eight high-end apartments in two blocks on the Damascus road, reached from a front courtyard on a central axis that is open to the sky for its whole length.',
      es: 'Nicholas y Victoria Barakat lo encargaron como ocho viviendas de lujo repartidas en dos bloques sobre la carretera de Damasco, a las que se accede desde un patio delantero situado en un eje central abierto al cielo en toda su longitud.',
      it: 'Nicholas e Victoria Barakat lo commissionarono come otto appartamenti signorili distribuiti in due blocchi sulla strada di Damasco, raggiunti da una corte anteriore posta su un asse centrale aperto sul cielo per tutta la sua lunghezza.',
    },
    heritage: 'regional',
    currentUse: {
      en: 'Beit Beirut, a municipal museum and urban cultural centre on the history of the city.',
      es: 'Beit Beirut, museo municipal y centro cultural urbano dedicado a la historia de la ciudad.',
      it: 'Beit Beirut, museo municipale e centro culturale urbano dedicato alla storia della città.',
    },
    detailRect: { x: 0.15, y: 0.24, w: 0.32, h: 0.34 },
    image: {
      commonsFile: 'Beit Beirut 2019.jpg',
      photographer: 'Onceinawhile',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Beit_Beirut_2019.jpg',
      width: 1600,
      height: 1200,
    },
    dossier: {
      en: 'Nicholas and Victoria Barakat commissioned an apartment house on the Damascus road in 1924 from Youssef Aftimus, by then the most established architect in Beirut. Fouad Kozah added two more storeys in 1932 and gave the building the form it has now: two four-storey blocks of ochre Deir el Qamar limestone — the stone that earned it the name of the Yellow House — set either side of an atrium open to the sky, their facades joined by a colonnade of thin shafts carrying stacked, curving loggias, with a passage running beneath to a garden behind. The central axis stays open to the sky for its whole length, from the front courtyard through to the garden. Fifty years later that openness made the house a weapon. It stood on the demarcation line at the Sodeco crossroad, and the militiamen who occupied it could shoot through the depth of the building from cover. It was left a shell, and is now Beirut’s museum of itself.',
      es: 'Nicholas y Victoria Barakat encargaron en 1924 una casa de vecinos en la carretera de Damasco a Youssef Aftimus, entonces el arquitecto más consolidado de Beirut. Fouad Kozah añadió dos plantas en 1932 y le dio la forma que hoy tiene: dos bloques de cuatro alturas en caliza ocre de Deir el Qamar —la piedra que le valió el nombre de Casa Amarilla— a ambos lados de un atrio abierto al cielo, con las fachadas cosidas por una columnata de fustes finos que sostiene logias curvas superpuestas y un pasaje que atraviesa el edificio hacia un jardín trasero. El eje central permanece abierto al cielo en toda su longitud, desde el patio delantero hasta el jardín. Cincuenta años después esa misma apertura convirtió la casa en un arma. Estaba sobre la línea de demarcación, en el cruce de Sodeco, y los milicianos que la ocuparon podían disparar a través de todo el edificio a cubierto. Quedó en esqueleto; hoy es el museo que Beirut dedica a sí misma.',
      it: 'Nicholas e Victoria Barakat commissionarono nel 1924 una casa da reddito sulla strada di Damasco a Youssef Aftimus, allora l’architetto più affermato di Beirut. Fouad Kozah aggiunse due piani nel 1932 e diede all’edificio la forma attuale: due blocchi di quattro livelli in calcare ocra di Deir el Qamar — la pietra che gli valse il nome di Casa Gialla — ai lati di un atrio aperto sul cielo, con le facciate cucite da un colonnato di fusti sottili che regge logge curve sovrapposte e un passaggio che attraversa l’edificio verso un giardino sul retro. L’asse centrale resta aperto sul cielo per tutta la sua lunghezza, dalla corte anteriore fino al giardino. Cinquant’anni dopo quella stessa apertura rese la casa un’arma. Sorgeva sulla linea di demarcazione, all’incrocio di Sodeco, e i miliziani che la occuparono potevano sparare attraverso l’intero edificio restando al riparo. Ne rimase un guscio; oggi è il museo che Beirut dedica a se stessa.',
    },
    context: {
      body: {
        en: 'During the Lebanese Civil War the Barakat Building stood on the demarcation line that divided Beirut, at the Sodeco crossroad. Christian militiamen occupied it and used it as a sniper position; its open plan let a gunman fire through the depth of the building while staying under cover. When the owners moved to sell, the house was sentenced to demolition in 1997, and was saved by a public campaign led by the architect Mona Hallak, who had first examined it in 1994. In 2003 the municipality of Beirut issued a decree of expropriation for public interest. Youssef Haider was commissioned in 2009 to lead the restoration; planning and works cost eighteen million US dollars, and the building opened as Beit Beirut on 28 April 2016. It reopened temporarily in August 2017, still lacking staff, services and direction.',
        es: 'Durante la guerra civil libanesa el edificio Barakat se encontraba sobre la línea de demarcación que partía Beirut, en el cruce de Sodeco. Milicianos cristianos lo ocuparon y lo usaron como puesto de francotiradores: su planta abierta permitía disparar a través de todo el edificio desde una posición cubierta. Cuando los propietarios decidieron vender, la casa fue condenada a demolición en 1997 y la salvó una campaña pública encabezada por la arquitecta Mona Hallak, que la había examinado por primera vez en 1994. En 2003 el ayuntamiento de Beirut dictó un decreto de expropiación por interés público. Youssef Haider recibió en 2009 el encargo de dirigir la restauración; el proyecto y las obras costaron dieciocho millones de dólares y el edificio abrió como Beit Beirut el 28 de abril de 2016. Volvió a abrir de forma provisional en agosto de 2017, todavía sin personal, servicios ni dirección.',
        it: 'Durante la guerra civile libanese il palazzo Barakat sorgeva sulla linea di demarcazione che divideva Beirut, all’incrocio di Sodeco. Miliziani cristiani lo occuparono e lo usarono come postazione di cecchini: la pianta aperta consentiva di sparare attraverso l’intera profondità dell’edificio restando al riparo. Quando i proprietari decisero di vendere, nel 1997 la casa fu condannata alla demolizione e venne salvata da una campagna pubblica guidata dall’architetta Mona Hallak, che l’aveva esaminata per la prima volta nel 1994. Nel 2003 il comune di Beirut emise un decreto di esproprio per pubblico interesse. Nel 2009 Youssef Haider ricevette l’incarico di dirigere il restauro; progetto e lavori costarono diciotto milioni di dollari e l’edificio aprì come Beit Beirut il 28 aprile 2016. Riaprì provvisoriamente nell’agosto 2017, ancora privo di personale, servizi e direzione.',
      },
      sources: [
        {
          kind: 'wikipedia',
          url: 'https://en.wikipedia.org/wiki/Beit_Beirut',
          title: 'Beit Beirut',
          license: 'CC BY-SA 4.0',
        },
      ],
    },
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q132174477', title: 'Barakat Building (Q132174477)', license: null },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Beit_Beirut',
        title: 'Beit Beirut',
        license: 'CC BY-SA 4.0',
      },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Youssef_Aftimus',
        title: 'Youssef Aftimus',
        license: 'CC BY-SA 4.0',
      },
    ],
    tier: 'deep',
  },
  {
    id: 'anitkabir',
    wikidataId: 'Q615404',
    name: {
      en: 'Anıtkabir',
      es: 'Anıtkabir',
      it: 'Anıtkabir',
    },
    architectId: 'emin-onat',
    location: { city: 'Ankara', countryCode: 'TR', lat: 39.925, lon: 32.836944 },
    inception: 1944,
    completed: 1953,
    demolished: null,
    typology: 'civic',
    materials: ['stone', 'concrete'],
    structure: {
      en: 'The Hall of Honour is a reinforced-concrete frame faced in travertine, its peristyle of square unfluted piers carrying an entablature beneath a concrete roof slab that replaced the stone vault of the winning design in a 1951 revision.',
      es: 'La Sala de Honor es una estructura de hormigón armado revestida de travertino, con un peristilo de pilares cuadrados sin estrías que sostiene un entablamento bajo una losa de hormigón que sustituyó en la revisión de 1951 a la bóveda pétrea del proyecto ganador.',
      it: 'La Sala d’Onore è un telaio in cemento armato rivestito di travertino, con un peristilio di pilastri quadrati non scanalati che regge una trabeazione sotto una soletta in calcestruzzo, subentrata nella revisione del 1951 alla volta in pietra del progetto vincitore.',
    },
    program: {
      en: 'The Turkish state’s mausoleum for Mustafa Kemal Atatürk, reached along a 262-metre avenue lined with stone lions and across a ceremonial plaza sized for fifteen thousand people.',
      es: 'Mausoleo del Estado turco para Mustafa Kemal Atatürk, al que se llega por una avenida de 262 metros flanqueada por leones de piedra y a través de una explanada ceremonial dimensionada para quince mil personas.',
      it: 'Mausoleo dello Stato turco per Mustafa Kemal Atatürk, raggiunto lungo un viale di 262 metri fiancheggiato da leoni di pietra e attraverso una piazza cerimoniale dimensionata per quindicimila persone.',
    },
    heritage: 'national',
    currentUse: {
      en: 'Atatürk’s tomb, a museum of the Turkish War of Independence, and the site of state ceremonies.',
      es: 'Tumba de Atatürk, museo de la guerra de independencia turca y escenario de las ceremonias de Estado.',
      it: 'Tomba di Atatürk, museo della guerra d’indipendenza turca e sede delle cerimonie di Stato.',
    },
    detailRect: { x: 0.30, y: 0.13, w: 0.30, h: 0.34 },
    image: {
      commonsFile: 'Anıtkabir, Ankara, Turquía, 2024-10-03, DD 02.jpg',
      photographer: 'Diego Delso',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:An%C4%B1tkabir,_Ankara,_Turqu%C3%ADa,_2024-10-03,_DD_02.jpg',
      width: 1600,
      height: 1067,
    },
    dossier: {
      en: 'Turkey announced an international competition for Atatürk’s tomb on 1 March 1941 and received forty-nine entries. Emin Onat and Orhan Arda, both teaching at Istanbul Technical University, won it, and construction opened with a ceremony on 9 October 1944. The work ran in four stages over nine years — foundations, then the mausoleum itself, then the approach roads and interiors, then finishing — and ended on 1 September 1953. Atatürk’s remains were moved there on 10 November 1953, fifteen years to the day after his death. A visitor arrives along a 262-metre avenue lined with twenty-four stone lions, crosses a plaza sized for fifteen thousand people and climbs to a colonnaded hall 41.65 by 57.35 metres and 17 metres high. Beneath the travertine from Kayseri, Polatlı and Malıköy and the marble from Hatay, Adana, Afyonkarahisar and Bilecik, the structure is reinforced concrete. The stripped symmetrical monumentality is the Second National Architectural Movement at full stretch.',
      es: 'Turquía convocó el 1 de marzo de 1941 un concurso internacional para la tumba de Atatürk y recibió cuarenta y nueve propuestas. Lo ganaron Emin Onat y Orhan Arda, ambos docentes en la Universidad Técnica de Estambul, y las obras se inauguraron con una ceremonia el 9 de octubre de 1944. Se desarrollaron en cuatro fases a lo largo de nueve años —cimentación, mausoleo, viales de acceso e interiores, y acabados— y concluyeron el 1 de septiembre de 1953. Los restos de Atatürk se trasladaron allí el 10 de noviembre de 1953, quince años exactos después de su muerte. El visitante llega por una avenida de 262 metros flanqueada por veinticuatro leones de piedra, cruza una explanada para quince mil personas y sube a una sala columnada de 41,65 por 57,35 metros y 17 de altura. Bajo el travertino de Kayseri, Polatlı y Malıköy y los mármoles de Hatay, Adana, Afyonkarahisar y Bilecik, la estructura es de hormigón armado. Esa monumentalidad simétrica y despojada es el Segundo Movimiento Arquitectónico Nacional en su punto máximo.',
      it: 'La Turchia bandì il 1º marzo 1941 un concorso internazionale per la tomba di Atatürk e ricevette quarantanove progetti. Vinsero Emin Onat e Orhan Arda, entrambi docenti all’Università tecnica di Istanbul, e i lavori si aprirono con una cerimonia il 9 ottobre 1944. Procedettero in quattro fasi lungo nove anni — fondazioni, poi il mausoleo, poi le strade di accesso e gli interni, infine le finiture — e si conclusero il 1º settembre 1953. Le spoglie di Atatürk vi furono traslate il 10 novembre 1953, quindici anni esatti dopo la sua morte. Il visitatore arriva lungo un viale di 262 metri fiancheggiato da ventiquattro leoni di pietra, attraversa una piazza per quindicimila persone e sale a una sala colonnata di 41,65 per 57,35 metri e 17 di altezza. Sotto il travertino di Kayseri, Polatlı e Malıköy e i marmi di Hatay, Adana, Afyonkarahisar e Bilecik la struttura è in cemento armato. Quella monumentalità simmetrica e spogliata è il Secondo Movimento Architettonico Nazionale al suo culmine.',
    },
    context: {
      body: {
        en: 'Anıtkabir was commissioned by a one-party state. The site on Rasattepe in Ankara was fixed on 17 January 1939 at a meeting of the parliamentary group of the Republican People’s Party, then the only legal party in Turkey, and the land was expropriated; responsibility for every service and task on the site still belongs to the General Staff of the Turkish Armed Forces, events held there are regulated by law, and official ceremonies take place on national holidays, on the anniversary of Atatürk’s death and during the state visits of foreign governments. The competition for Atatürk’s mausoleum was judged in the middle of the Second World War. On 21 March 1942 the commission shortlisted three of the forty-nine entries: those of the Italian Arnaldo Foschini, the German Johannes Krüger, and the Turkish pair Emin Onat and Orhan Arda. Foschini was a professor at Rome and worked extensively for the Fascist state building programme, including the University City of 1932–35 and the church of Santi Pietro e Paolo at EUR of 1937–41. Krüger, with his brother Walter, had built the Tannenberg Memorial, completed in 1927; after Hindenburg’s death in 1934 Hitler ordered the monument redesigned and renamed the Reichsehrenmal Tannenberg, and the Krüger office was called back to carry out that work. The Turkish government announced its choice of Onat and Arda on 9 June 1942, and theirs is the design that was built.',
        es: 'Anıtkabir fue un encargo de un Estado de partido único. El emplazamiento de Rasattepe, en Ankara, se fijó el 17 de enero de 1939 en una reunión del grupo parlamentario del Partido Republicano del Pueblo, entonces el único partido legal de Turquía, y el terreno se expropió; la responsabilidad de todos los servicios y funciones del recinto sigue correspondiendo al Estado Mayor de las Fuerzas Armadas turcas, los actos que allí se celebran están regulados por ley y las ceremonias oficiales tienen lugar en las fiestas nacionales, en el aniversario de la muerte de Atatürk y durante las visitas de Estado de gobiernos extranjeros. El concurso para el mausoleo de Atatürk se falló en plena Segunda Guerra Mundial. El 21 de marzo de 1942 la comisión seleccionó tres de las cuarenta y nueve propuestas: la del italiano Arnaldo Foschini, la del alemán Johannes Krüger y la de los turcos Emin Onat y Orhan Arda. Foschini era catedrático en Roma y trabajó ampliamente para el programa constructivo del Estado fascista, con obras como la Ciudad Universitaria de 1932-35 y la iglesia de los Santos Pedro y Pablo del EUR, de 1937-41. Krüger, junto a su hermano Walter, había levantado el Monumento de Tannenberg, terminado en 1927; tras la muerte de Hindenburg en 1934 Hitler ordenó rediseñarlo y rebautizarlo Reichsehrenmal Tannenberg, y el estudio de los Krüger fue llamado de nuevo para ejecutar esa reforma. El Gobierno turco anunció el 9 de junio de 1942 su elección de Onat y Arda, y es su proyecto el que se construyó.',
        it: 'Anıtkabir fu commissionato da uno Stato a partito unico. Il sito di Rasattepe, ad Ankara, fu fissato il 17 gennaio 1939 in una riunione del gruppo parlamentare del Partito Repubblicano del Popolo, allora l’unico partito legale in Turchia, e il terreno fu espropriato; la responsabilità di ogni servizio e funzione dell’area spetta tuttora allo Stato maggiore delle Forze armate turche, gli eventi che vi si tengono sono regolati per legge e le cerimonie ufficiali si svolgono nelle feste nazionali, nell’anniversario della morte di Atatürk e durante le visite di Stato dei governi stranieri. Il concorso per il mausoleo di Atatürk fu giudicato in piena Seconda guerra mondiale. Il 21 marzo 1942 la commissione selezionò tre dei quarantanove progetti: quello dell’italiano Arnaldo Foschini, quello del tedesco Johannes Krüger e quello dei turchi Emin Onat e Orhan Arda. Foschini era professore a Roma e lavorò a lungo per il programma edilizio dello Stato fascista, dalla Città universitaria del 1932-35 alla chiesa dei Santi Pietro e Paolo all’EUR del 1937-41. Krüger, con il fratello Walter, aveva costruito il Monumento di Tannenberg, completato nel 1927; dopo la morte di Hindenburg nel 1934 Hitler ordinò di ridisegnarlo e di rinominarlo Reichsehrenmal Tannenberg, e lo studio dei Krüger fu richiamato per eseguire quell’intervento. Il governo turco annunciò il 9 giugno 1942 la scelta di Onat e Arda, ed è il loro progetto quello che fu costruito.',
      },
      sources: [
        {
          kind: 'wikipedia',
          url: 'https://en.wikipedia.org/wiki/An%C4%B1tkabir',
          title: 'Anıtkabir',
          license: 'CC BY-SA 4.0',
        },
        {
          kind: 'wikipedia',
          url: 'https://en.wikipedia.org/wiki/Arnaldo_Foschini',
          title: 'Arnaldo Foschini',
          license: 'CC BY-SA 4.0',
        },
        {
          kind: 'wikipedia',
          url: 'https://en.wikipedia.org/wiki/Tannenberg_Memorial',
          title: 'Tannenberg Memorial',
          license: 'CC BY-SA 4.0',
        },
        {
          kind: 'wikipedia',
          url: 'https://en.wikipedia.org/wiki/One-party_period_of_the_Republic_of_Turkey',
          title: 'One-party period of the Republic of Turkey',
          license: 'CC BY-SA 4.0',
        },
      ],
    },
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q615404', title: 'Anıtkabir (Q615404)', license: null },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/An%C4%B1tkabir',
        title: 'Anıtkabir',
        license: 'CC BY-SA 4.0',
      },
    ],
    tier: 'canon',
  },
  {
    id: 'bank-of-georgia-headquarters',
    wikidataId: 'Q1544120',
    name: {
      en: 'Bank of Georgia Headquarters (Ministry of Highway Construction Building)',
      es: 'Sede del Bank of Georgia (edificio del Ministerio de Construcción de Carreteras)',
      it: 'Sede della Bank of Georgia (edificio del Ministero della Costruzione Stradale)',
    },
    architectId: 'george-chakhava',
    location: { city: 'Tbilisi', countryCode: 'GE', lat: 41.735778, lon: 44.770784 },
    inception: 1972,
    completed: 1975,
    demolished: null,
    typology: 'civic',
    materials: ['concrete'],
    structure: {
      en: 'Five horizontal two-storey slabs cantilever out from three reinforced-concrete cores that carry every stair and lift — the tallest core rising eighteen storeys — so the whole block meets the sloping ground at only a handful of points.',
      es: 'Cinco bandas horizontales de dos plantas vuelan desde tres núcleos de hormigón armado que concentran todas las escaleras y ascensores —el más alto se eleva dieciocho plantas—, de modo que el conjunto toca la ladera en apenas unos pocos puntos.',
      it: 'Cinque fasce orizzontali di due piani sbalzano da tre nuclei in cemento armato che raccolgono tutte le scale e gli ascensori — il più alto sale diciotto piani — così che l’intero blocco tocca il pendio in pochissimi punti.',
    },
    program: {
      en: 'Built as the headquarters of the Ministry of Highway Construction of the Georgian SSR at a cost of six million roubles, and bought by the Bank of Georgia in 2007.',
      es: 'Construido como sede del Ministerio de Construcción de Carreteras de la RSS de Georgia por seis millones de rublos, y comprado por el Bank of Georgia en 2007.',
      it: 'Costruito come sede del Ministero della Costruzione Stradale della RSS Georgiana al costo di sei milioni di rubli, e acquistato dalla Bank of Georgia nel 2007.',
    },
    heritage: 'national',
    currentUse: {
      en: 'Head office of the Bank of Georgia.',
      es: 'Sede central del Bank of Georgia.',
      it: 'Sede centrale della Bank of Georgia.',
    },
    detailRect: { x: 0.44, y: 0.26, w: 0.32, h: 0.30 },
    image: {
      commonsFile: 'Bank-of-georgia-hq.jpg',
      photographer: 'TheadoreTwombly',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bank-of-georgia-hq.jpg',
      width: 1600,
      height: 1361,
    },
    dossier: {
      en: 'George Chakhava was deputy minister of highway construction for the Georgian SSR when his ministry needed a headquarters, so he wrote the brief and then designed the answer to it, working with Zurab Jalaghania. Built between 1972 and 1975 on a wooded slope in Tbilisi, the building is five horizontal two-storey slabs, each cantilevering far past the one below, crossed over three reinforced-concrete cores that carry every stair and lift; the tallest core is eighteen storeys. Chakhava called the principle the Space City method and held a Georgian patent for it. Its point is that the ground is barely touched: the trees and the hillside run on underneath the offices, which is why the building reads from the road as a stack of boxes floating in a wood. It cost six million roubles and brought him the USSR State Prize in 1983. The Bank of Georgia bought it in 2007, the year it was listed as a monument.',
      es: 'George Chakhava era viceministro de construcción de carreteras de la RSS de Georgia cuando su ministerio necesitó una sede, de modo que redactó el encargo y después proyectó la respuesta, junto a Zurab Jalaghania. Construido entre 1972 y 1975 en una ladera arbolada de Tiflis, el edificio son cinco bandas horizontales de dos plantas, cada una en voladizo mucho más allá de la anterior, cruzadas sobre tres núcleos de hormigón armado que concentran todas las escaleras y ascensores; el más alto tiene dieciocho plantas. Chakhava llamó al principio método de la «ciudad espacial» y lo tenía patentado en Georgia. La idea es no tocar el suelo: los árboles y la ladera siguen corriendo bajo las oficinas, y por eso desde la carretera el edificio se lee como una pila de cajas flotando en un bosque. Costó seis millones de rublos y le valió el Premio Estatal de la URSS en 1983. El Bank of Georgia lo compró en 2007, el año en que fue declarado monumento.',
      it: 'George Chakhava era viceministro della costruzione stradale della RSS Georgiana quando il suo ministero ebbe bisogno di una sede: scrisse il programma e poi ne progettò la risposta, insieme a Zurab Jalaghania. Costruito fra il 1972 e il 1975 su un pendio boscoso di Tbilisi, l’edificio è fatto di cinque fasce orizzontali di due piani, ciascuna a sbalzo ben oltre quella sottostante, incrociate su tre nuclei in cemento armato che raccolgono tutte le scale e gli ascensori; il più alto conta diciotto piani. Chakhava chiamò il principio metodo della «città spaziale» e ne deteneva un brevetto georgiano. Il punto è non toccare il suolo: gli alberi e il pendio proseguono sotto gli uffici, ed è per questo che dalla strada l’edificio si legge come una pila di scatole sospese in un bosco. Costò sei milioni di rubli e gli valse il Premio di Stato dell’URSS nel 1983. La Bank of Georgia lo acquistò nel 2007, l’anno in cui fu dichiarato monumento.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q1544120', title: 'Bank of Georgia headquarters (Q1544120)', license: null },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Bank_of_Georgia_headquarters',
        title: 'Bank of Georgia headquarters',
        license: 'CC BY-SA 4.0',
      },
    ],
    tier: 'canon',
  },
  {
    id: 'camlica-tower',
    wikidataId: 'Q28657490',
    name: {
      en: 'Çamlıca Tower',
      es: 'Torre de Çamlıca',
      it: 'Torre di Çamlıca',
    },
    architectId: 'melike-altinisik',
    location: { city: 'Istanbul', countryCode: 'TR', lat: 41.016444, lon: 29.065472 },
    inception: 2016,
    completed: 2020,
    demolished: null,
    typology: 'tower',
    materials: ['concrete', 'steel-and-glass'],
    structure: {
      en: 'A reinforced-concrete shaft of elliptical section, sixteen by thirteen metres on its main axes and narrowing as it rises from a foundation eighteen metres below ground, carries a 168-metre steel broadcasting mast, with panoramic lifts running up its outer faces.',
      es: 'Un fuste de hormigón armado de sección elíptica, de dieciséis por trece metros en sus ejes principales y estrechándose a medida que sube desde una cimentación situada dieciocho metros bajo tierra, sostiene un mástil de emisión de acero de 168 metros, con ascensores panorámicos que recorren sus caras exteriores.',
      it: 'Un fusto in cemento armato a sezione ellittica, sedici per tredici metri sugli assi principali e via via più stretto salendo da una fondazione a diciotto metri di profondità, regge un pennone d’antenna in acciaio di 168 metri, con ascensori panoramici che ne percorrono le facce esterne.',
    },
    program: {
      en: 'Commissioned by the Turkish state under a Ministry of Transport and Infrastructure contract as a single broadcasting tower to replace the masts scattered across Çamlıca Hill, combining transmission plant with public observation decks, a restaurant, exhibition halls and a library.',
      es: 'Encargada por el Estado turco mediante un contrato del Ministerio de Transporte e Infraestructuras como torre de emisión única que sustituyera a los mástiles dispersos por la colina de Çamlıca, y que reúne instalaciones de transmisión con miradores públicos, restaurante, salas de exposición y biblioteca.',
      it: 'Commissionata dallo Stato turco con un contratto del Ministero dei Trasporti e delle Infrastrutture come unica torre di trasmissione in sostituzione dei tralicci sparsi sulla collina di Çamlıca, riunisce gli impianti di emissione con terrazze panoramiche pubbliche, un ristorante, sale espositive e una biblioteca.',
    },
    heritage: 'none',
    currentUse: {
      en: 'Television and radio broadcasting tower with public observation decks and a restaurant.',
      es: 'Torre de emisión de televisión y radio con miradores públicos y restaurante.',
      it: 'Torre di trasmissione televisiva e radiofonica con terrazze panoramiche pubbliche e ristorante.',
    },
    detailRect: { x: 0.40, y: 0.36, w: 0.24, h: 0.24 },
    image: {
      commonsFile: 'Camlica Tower.jpg',
      photographer: 'Korybiko',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Camlica_Tower.jpg',
      width: 1200,
      height: 1600,
    },
    dossier: {
      en: 'Istanbul Metropolitan Municipality opened an ideas competition for a broadcasting tower on Little Çamlıca Hill in 2011. The scheme that was eventually built took third prize, and in 2013 the then prime minister, Recep Tayyip Erdoğan, decided it would be the one to go up. Its author, Melike Altınışık, had spent seven years at Zaha Hadid Architects before returning to Istanbul and opening her own office in 2013; this is that office’s first building. Construction began in late 2016 under a contract let by the Ministry of Transport and Infrastructure, the structure was topped out in September 2020 and the tower opened on 29 May 2021. It stands 369 metres tall, a reinforced-concrete shaft carrying a 168-metre steel mast, and its tip is 587 metres above sea level — the highest structure in Istanbul. The shaft is elliptical in plan and tapers as it climbs; the swelling near the top, which the architect describes as an unopened tulip bud, holds observation decks on the thirty-third and thirty-fourth floors and a restaurant on the thirty-ninth and fortieth. The contract was finally settled at US$121.7 million.',
      es: 'El Ayuntamiento Metropolitano de Estambul convocó en 2011 un concurso de ideas para una torre de emisión en la colina de Küçük Çamlıca. La propuesta que acabó construyéndose quedó tercera, y en 2013 el entonces primer ministro, Recep Tayyip Erdoğan, decidió que fuera esa la que se levantara. Su autora, Melike Altınışık, había pasado siete años en Zaha Hadid Architects antes de abrir estudio propio en Estambul en 2013; este es su primer edificio. Las obras empezaron a finales de 2016 con un contrato del Ministerio de Transporte e Infraestructuras; la estructura se remató en septiembre de 2020 y la torre se inauguró el 29 de mayo de 2021. Mide 369 metros —un fuste de hormigón armado que sostiene un mástil de acero de 168— y su punta queda a 587 metros sobre el nivel del mar: la construcción más alta de Estambul. El fuste es elíptico en planta y se afila al subir; el ensanchamiento superior, que la arquitecta describe como un capullo de tulipán sin abrir, aloja los miradores en las plantas 33 y 34 y el restaurante en la 39 y la 40. El contrato se cerró finalmente en 121,7 millones de dólares.',
      it: 'Nel 2011 il Comune metropolitano di Istanbul bandì un concorso di idee per una torre di trasmissione sulla collina di Küçük Çamlıca. Il progetto poi costruito arrivò terzo, e nel 2013 l’allora primo ministro Recep Tayyip Erdoğan decise che sarebbe stato quello a essere realizzato. La sua autrice, Melike Altınışık, aveva passato sette anni da Zaha Hadid Architects prima di rientrare a Istanbul e aprire uno studio proprio nel 2013; questo è il primo edificio di quello studio. I lavori cominciarono alla fine del 2016 con un contratto del Ministero dei Trasporti e delle Infrastrutture, la struttura fu completata nel settembre 2020 e la torre inaugurata il 29 maggio 2021. È alta 369 metri — un fusto in cemento armato che regge un pennone d’acciaio di 168 — e la sua punta si trova a 587 metri sul livello del mare: la costruzione più alta di Istanbul. Il fusto è ellittico in pianta e si assottiglia salendo; il rigonfiamento superiore, che l’architetta descrive come un bocciolo di tulipano non ancora schiuso, ospita le terrazze panoramiche al trentatreesimo e trentaquattresimo piano e il ristorante al trentanovesimo e quarantesimo. Il contratto fu chiuso a 121,7 milioni di dollari.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q28657490', title: 'Çamlıca Tower (Q28657490)', license: null },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/%C3%87aml%C4%B1ca_Tower',
        title: 'Çamlıca Tower',
        license: 'CC BY-SA 4.0',
      },
      {
        kind: 'wikipedia',
        url: 'https://tr.wikipedia.org/wiki/Melike_Alt%C4%B1n%C4%B1%C5%9F%C4%B1k',
        title: 'Melike Altınışık',
        license: 'CC BY-SA 4.0',
      },
    ],
    tier: 'deep',
  },
  // --- Wave V2-3 batch B7 top-up: Mimar Sinan (existing) ---
  {
    id: 'suleymaniye-mosque',
    wikidataId: 'Q178643',
    name: {
      en: 'Süleymaniye Mosque',
      es: 'Mezquita de Solimán',
      it: 'Moschea di Solimano',
    },
    architectId: 'mimar-sinan',
    location: { city: 'Istanbul', countryCode: 'TR', lat: 41.016111, lon: 28.963889 },
    inception: 1550,
    completed: 1557,
    demolished: null,
    typology: 'sacral',
    materials: ['stone'],
    structure: {
      en: "A central dome 26 metres in diameter and 53 metres high is carried on four massive piers and stabilised by a cascade of semi-domes and buttresses to the east and west, a system Sinan himself later called his 'journeyman' work on the way to Selimiye.",
      es: 'Una cúpula central de 26 metros de diámetro y 53 de altura se sostiene sobre cuatro pilares macizos y se estabiliza con una cascada de semicúpulas y contrafuertes al este y al oeste, un sistema que el propio Sinan llamaría después su obra «de oficial» camino de la Selimiye.',
      it: "Una cupola centrale di 26 metri di diametro e 53 di altezza è retta da quattro pilastri massicci e stabilizzata da una cascata di semicupole e contrafforti a est e a ovest, un sistema che lo stesso Sinan avrebbe poi chiamato la sua opera «da artigiano» sulla via della Selimiye.",
    },
    program: {
      en: 'Commissioned by Sultan Süleyman the Magnificent as the centre of a vast charitable complex including madrasas, a hospital, a soup kitchen, a caravanserai and Sinan\'s own tomb.',
      es: 'Encargada por el sultán Solimán el Magnífico como centro de un vasto complejo asistencial con madrazas, un hospital, un comedor de beneficencia, una caravanserai y la propia tumba de Sinan.',
      it: 'Commissionata dal sultano Solimano il Magnifico come nucleo di un vasto complesso assistenziale con madrase, un ospedale, una mensa per i poveri, un caravanserraglio e la tomba dello stesso Sinan.',
    },
    heritage: 'unesco',
    currentUse: {
      en: "An active congregational mosque; several of the complex's former madrasas now house a library, a hospital and Sinan's own tomb garden.",
      es: 'Mezquita congregacional en uso; varias de las antiguas madrazas del complejo albergan hoy una biblioteca, un hospital y el jardín-tumba del propio Sinan.',
      it: 'Moschea congregazionale in uso; diverse delle antiche madrase del complesso ospitano oggi una biblioteca, un ospedale e il giardino-tomba dello stesso Sinan.',
    },
    // NOT pixel-verified this session: Commons upload-host rate limiting
    // (shared across all 8 parallel wave-3 batches) blocked every download
    // attempt for this file. Licence/photographer WERE verified on the live
    // rendered file page (Dursun Sülük, CC BY-SA 4.0). Rect reasoned to sit
    // over the dome/pier junction at the building's centre; re-crop and
    // confirm before this ships.
    detailRect: { x: 0.32, y: 0.28, w: 0.32, h: 0.32 },
    image: {
      commonsFile: 'File:Süleymaniye Camii 2022.jpg',
      photographer: 'Dursun Sülük',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:S%C3%BCleymaniye_Camii_2022.jpg',
      width: 0,
      height: 0,
    },
    extraImages: [
      {
        commonsFile: 'File:Süleymaniye Mosque February 2013 01.jpg',
        photographer: 'Arild Vågen',
        license: 'CC BY-SA 3.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:S%C3%BCleymaniye_Mosque_February_2013_01.jpg',
        width: 0,
        height: 0,
      },
    ],
    dossier: {
      en: "Süleyman the Magnificent gave Sinan a hill above the Golden Horn and a budget to match an empire at its widest extent, and the result is less a single mosque than a small planned city: madrasas ranged around the courtyard for four schools of Islamic law, a hospital, a soup kitchen feeding the poor daily, a caravanserai, baths and shops whose rents endowed the whole foundation. The mosque itself carries a central dome 26 metres across on four monumental piers, propped by cascading semi-domes to east and west in a system directly descended from Hagia Sophia, which stands across the city and which Sinan studied for decades. Sinan called it his journeyman work, the middle term between the Şehzade Mosque's apprentice-level solution and the Selimiye's mastery three decades later. He is buried, along with his patron, in the mosque's own precinct. UNESCO inscribed the complex within the Historic Areas of Istanbul in 1985.",
      es: 'Solimán el Magnífico le dio a Sinan una colina sobre el Cuerno de Oro y un presupuesto a la altura de un imperio en su máxima extensión, y el resultado es menos una sola mezquita que una pequeña ciudad planificada: madrazas dispuestas en torno al patio para las cuatro escuelas jurídicas islámicas, un hospital, un comedor de beneficencia que alimentaba a diario a los pobres, una caravanserai, baños y tiendas cuyas rentas sostenían toda la fundación. La mezquita en sí sostiene una cúpula central de 26 metros de diámetro sobre cuatro pilares monumentales, apuntalada por semicúpulas en cascada al este y al oeste en un sistema que desciende directamente de Santa Sofía, situada al otro lado de la ciudad y que Sinan estudió durante décadas. Él mismo la llamó su obra de oficial, el término medio entre la solución de aprendiz de la mezquita de Şehzade y la maestría de la Selimiye tres décadas después. Está enterrado, junto a su mecenas, en el propio recinto de la mezquita. La UNESCO inscribió el conjunto dentro de las Áreas Históricas de Estambul en 1985.',
      it: "Solimano il Magnifico diede a Sinan una collina sopra il Corno d'Oro e un budget all'altezza di un impero alla sua massima estensione, e il risultato è meno una singola moschea che una piccola città pianificata: madrase disposte attorno al cortile per le quattro scuole giuridiche islamiche, un ospedale, una mensa che sfamava ogni giorno i poveri, un caravanserraglio, bagni e botteghe le cui rendite sostenevano l'intera fondazione. La moschea vera e propria regge una cupola centrale di 26 metri di diametro su quattro pilastri monumentali, puntellata da semicupole a cascata a est e a ovest in un sistema che discende direttamente da Santa Sofia, che sorge dall'altra parte della città e che Sinan studiò per decenni. Egli stesso la definì la sua opera di artigiano, il termine medio tra la soluzione da apprendista della moschea di Şehzade e la maestria della Selimiye tre decenni dopo. È sepolto, accanto al suo mecenate, nel recinto stesso della moschea. L'UNESCO ha iscritto il complesso nelle Aree Storiche di Istanbul nel 1985.",
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q178643', title: 'Süleymaniye Mosque (Q178643)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/S%C3%BCleymaniye_Mosque', title: 'Süleymaniye Mosque', license: 'CC BY-SA 4.0' },
      { kind: 'institution', url: 'https://whc.unesco.org/en/list/356/', title: 'Historic Areas of Istanbul — UNESCO World Heritage Centre', license: null },
    ],
    tier: 'canon',
  },
  {
    id: 'mihrimah-sultan-mosque-uskudar',
    wikidataId: 'Q2537376',
    name: {
      en: 'Mihrimah Sultan Mosque, Üsküdar',
      es: 'Mezquita de Mihrimah Sultan de Üsküdar',
      it: 'Moschea di Mihrimah Sultan a Üsküdar',
    },
    architectId: 'mimar-sinan',
    location: { city: 'Istanbul', countryCode: 'TR', lat: 41.026792, lon: 29.01598 },
    inception: 1546,
    completed: 1548,
    demolished: null,
    typology: 'sacral',
    materials: ['stone'],
    structure: {
      en: 'A square prayer hall carries a single dome, roughly 11 metres across, on an arrangement of piers engaged within the perimeter walls, lit by rows of windows stacked in tiers up to the drum, with a single slender minaret at one corner.',
      es: 'Una sala de oración cuadrada sostiene una sola cúpula, de unos 11 metros de diámetro, sobre pilares embebidos en los muros perimetrales, iluminada por hileras de ventanas superpuestas hasta el tambor, con un único alminar esbelto en una esquina.',
      it: 'Una sala di preghiera quadrata regge un\'unica cupola, di circa 11 metri di diametro, su pilastri inglobati nei muri perimetrali, illuminata da file di finestre sovrapposte fino al tamburo, con un unico minareto snello su un angolo.',
    },
    program: {
      en: 'Commissioned by Mihrimah Sultan, daughter of Süleyman the Magnificent and wife of grand vizier Rüstem Pasha, as the centrepiece of a charitable complex on the Bosphorus shore at Üsküdar.',
      es: 'Encargada por Mihrimah Sultan, hija de Solimán el Magnífico y esposa del gran visir Rüstem Pasha, como núcleo de un complejo asistencial en la orilla del Bósforo en Üsküdar.',
      it: 'Commissionata da Mihrimah Sultan, figlia di Solimano il Magnifico e moglie del gran visir Rüstem Pasha, come fulcro di un complesso assistenziale sulla riva del Bosforo a Üsküdar.',
    },
    heritage: 'none',
    currentUse: {
      en: 'An active congregational mosque overlooking the Bosphorus ferry terminal at Üsküdar.',
      es: 'Mezquita congregacional en uso, con vistas a la terminal de transbordadores del Bósforo en Üsküdar.',
      it: 'Moschea congregazionale in uso, affacciata sul terminal dei traghetti del Bosforo a Üsküdar.',
    },
    // NOT pixel-verified this session (Commons rate limiting — see
    // Süleymaniye Mosque above for the full note). Licence/photographer
    // verified. Rect reasoned to sit over the dome/window-tier junction at
    // the building's centre; re-crop and confirm before this ships.
    detailRect: { x: 0.34, y: 0.30, w: 0.32, h: 0.35 },
    image: {
      commonsFile: 'File:Mihrimah Sultan Mosque Uskudar 9528.jpg',
      photographer: 'Dosseman',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mihrimah_Sultan_Mosque_Uskudar_9528.jpg',
      width: 0,
      height: 0,
    },
    extraImages: [
      {
        commonsFile: 'File:Mihrimah Sultan Mosque (Üsküdar) (26).jpg',
        photographer: 'Yahia.Mokhtar',
        license: 'CC BY-SA 4.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mihrimah_Sultan_Mosque_(%C3%9Csk%C3%BCdar)_(26).jpg',
        width: 0,
        height: 0,
      },
    ],
    dossier: {
      en: "Mihrimah Sultan, Süleyman the Magnificent's only daughter, commissioned two mosques from Sinan under her own name — one at Edirnekapı, on the city's western land walls, and this one at Üsküdar, on the Bosphorus shore where the Asian side's ferries still dock. Built in the late 1540s, early in the period Sinan later called his apprenticeship, the mosque is markedly smaller and simpler than his later imperial commissions: a square prayer hall under a single dome about eleven metres across, its drum lit by rings of stacked windows rather than the cascading semi-domes he would use at Süleymaniye a decade later. A single slender minaret stands at one corner rather than the paired or quadruple minarets of the sultans' own mosques, a scale appropriate to a princess's rather than a sultan's foundation. It remains in daily use, overlooking Üsküdar's ferry terminal and one of the busiest crossing points on the Bosphorus.",
      es: 'Mihrimah Sultan, la única hija de Solimán el Magnífico, encargó a Sinan dos mezquitas bajo su propio nombre —una en Edirnekapı, en las murallas terrestres occidentales de la ciudad, y esta en Üsküdar, en la orilla del Bósforo donde aún atracan los transbordadores del lado asiático—. Construida a finales de la década de 1540, al principio del periodo que Sinan llamaría después su aprendizaje, la mezquita es notablemente más pequeña y sencilla que sus encargos imperiales posteriores: una sala de oración cuadrada bajo una sola cúpula de unos once metros de diámetro, cuyo tambor se ilumina con anillos de ventanas superpuestas y no con las semicúpulas en cascada que emplearía en la Süleymaniye una década después. Un único alminar esbelto se alza en una esquina, en vez de los alminares dobles o cuádruples de las mezquitas de los propios sultanes, una escala adecuada a una fundación de princesa y no de sultán. Sigue en uso diario, con vistas a la terminal de transbordadores de Üsküdar, uno de los cruces más transitados del Bósforo.',
      it: "Mihrimah Sultan, unica figlia di Solimano il Magnifico, commissionò a Sinan due moschee a proprio nome — una a Edirnekapı, sulle mura terrestri occidentali della città, e questa a Üsküdar, sulla riva del Bosforo dove ancora attraccano i traghetti del lato asiatico. Costruita alla fine degli anni 1540, agli inizi del periodo che Sinan avrebbe poi chiamato il suo apprendistato, la moschea è nettamente più piccola e semplice dei suoi incarichi imperiali successivi: una sala di preghiera quadrata sotto un'unica cupola di circa undici metri di diametro, il cui tamburo è illuminato da anelli di finestre sovrapposte e non dalle semicupole a cascata che avrebbe usato alla Süleymaniye un decennio dopo. Un unico minareto snello si erge su un angolo, anziché i minareti doppi o quadrupli delle moschee dei sultani stessi, una scala adeguata a una fondazione principesca più che sultanale. Resta in uso quotidiano, affacciata sul terminal dei traghetti di Üsküdar, uno dei punti di attraversamento più trafficati del Bosforo.",
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q2537376', title: 'Mihrimah Sultan Mosque, Üsküdar (Q2537376)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Mihrimah_Sultan_Mosque,_%C3%9Csk%C3%BCdar', title: 'Mihrimah Sultan Mosque, Üsküdar', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
];
