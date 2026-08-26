import type { Building } from '@/types/building';

// Wave 5, agent 9d — Northern Africa (UN M49 "Northern Africa": DZ, EG, LY, MA,
// SD, TN). Six buildings: one pre-1800, two 1800–1945, two 1945–2000, one
// post-2000.
//
// Every image licence below was read from the live Commons file page, not
// inferred from the file being hosted on Commons. image.width/height are left
// at 0 for Task 10 to record.
//
// Freedom of panorama governs which countries can carry an in-copyright
// building here. Per Commons COM:CRT, Algeria and Tunisia have usable FoP;
// Egypt, Morocco, Libya and Sudan do not. The two Egyptian entries below are
// therefore by architects who are themselves out of copyright in Egypt
// (life + 50): Antonio Lasciac died 1946, Ernesto Verrucci 1945, so their work
// has been public domain there since 1997 and 1996 respectively and freedom of
// panorama does not arise. Al-Merrikh Stadium in Sudan is cleared differently:
// the photographer is the architect. See the task 9d report for the full trail.
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
    completed: null,
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
        + 'resupplied. He gave the work to an Andalusi architect from Seville, Mohamed Ben Ali. '
        + 'Arabic sources put the gate at 658 AH — a Hijri year that ran from December 1259 to '
        + 'December 1260, not 1261 as it is usually glossed — while the arsenal as a whole is dated '
        + 'between 1260 and 1270. Bab Dar Assinaa — the Gate of the '
        + 'Arsenal, known locally also as Bab al-Farran and Bab Antar — opened onto the yard where '
        + 'ships and weapons were made and stored, which is what its name says. Its companion, the '
        + 'far larger Bab el-Mrissa, was vaulted over a canal so that galleys could be brought inside '
        + 'the walls. The pair are among the very few buildings anywhere in the medieval Maghreb '
        + 'whose architect is named rather than absorbed into an anonymous masons\' guild.',
      es: 'En 1260 una flota castellana tomó Salé y la saqueó. El sultán meriní Abu Yusuf Yaqub ibn '
        + 'Abd al-Haqq recuperó la ciudad y decidió rehacerla como principal astillero y puerto '
        + 'comercial del reino de Fez, desde el que podría abastecerse la guerra en al-Ándalus. '
        + 'Encargó la obra a un arquitecto andalusí de Sevilla, Mohamed Ben Ali. Las fuentes árabes '
        + 'sitúan la puerta en 658 de la Hégira, año que corrió de diciembre de 1259 a diciembre de '
        + '1260 y no 1261, como suele traducirse; las atarazanas en conjunto se fechan entre 1260 y '
        + '1270. Bab Dar Assinaa —la puerta de las '
        + 'atarazanas, conocida también como Bab al-Farran y Bab Antar— se abría al recinto donde se '
        + 'fabricaban y guardaban naves y armas, que es exactamente lo que dice su nombre. Su '
        + 'compañera, la mucho mayor Bab el-Mrissa, se abovedó sobre un canal para que las galeras '
        + 'entraran dentro de la muralla. Ambas figuran entre los poquísimos edificios del Magreb '
        + 'medieval cuyo arquitecto tiene nombre en vez de disolverse en un gremio anónimo de albañiles.',
      it: 'Nel 1260 una flotta castigliana prese Salé e la saccheggiò. Il sultano merinide Abu Yusuf '
        + 'Yaqub ibn Abd al-Haqq riconquistò la città e decise di rifarla come principale cantiere '
        + 'navale e porto commerciale del regno di Fes, da cui rifornire la guerra in al-Andalus. '
        + 'Affidò l’opera a un architetto andaluso di Siviglia, Mohamed Ben Ali. Le fonti arabe '
        + 'collocano la porta nel 658 dell’Egira, anno corso dal dicembre 1259 al dicembre 1260 e '
        + 'non nel 1261, come di solito si traduce; l’arsenale nel suo insieme è datato fra il 1260 '
        + 'e il 1270. Bab Dar Assinaa — la porta '
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
      {
        kind: 'publication',
        url: 'https://gallica.bnf.fr/ark:/12148/cb34349223d/date',
        title: 'Henri Terrasse, "Les portes de l\'Arsenal de Salé", Hespéris IV (1922), 357-371',
        license: null,
      },
      {
        kind: 'institution',
        url: 'https://www.qantara-med.org/public/show_document.php?do_id=1010',
        title: 'Qantara — Mediterranean Heritage, dossier on the Dar Sina\'a (arsenal) of Salé',
        license: null,
      },
    ],
    tier: 'canon',
  },
  {
    id: 'institute-for-arabic-music',
    wikidataId: 'Q126918163',
    name: {
      en: 'Institute for Arabic Music',
      es: 'Instituto de Música Árabe',
      it: 'Istituto di Musica Araba',
    },
    architectId: 'ernesto-verrucci',
    location: {
      city: 'Cairo', countryCode: 'EG', lat: 30.0545, lon: 31.2394,
    },
    inception: 1923,
    completed: 1929,
    demolished: null,
    typology: 'cultural',
    materials: ['stone'],
    structure: {
      en: 'A masonry block fronted by a deep pointed iwan recess set in a rectangular frame, its '
        + 'parapet stepped in crenellations and a ribbed stone dome raised on a drum over the hall behind.',
      es: 'Un volumen de fábrica presidido por un profundo nicho apuntado a modo de iwán inscrito en '
        + 'un marco rectangular, con el pretil escalonado en almenas y una cúpula gallonada de piedra '
        + 'sobre tambor cubriendo la sala trasera.',
      it: 'Un volume in muratura dominato da una profonda nicchia acuta a iwan inscritta in una '
        + 'cornice rettangolare, con il parapetto scalettato in merli e una cupola costolonata in '
        + 'pietra su tamburo a coprire la sala retrostante.',
    },
    program: {
      en: 'A conservatory and concert hall for Arab music, built for King Fuad I on Malika Nazli '
        + 'Street — now Ramses Street — in the Azbakeya district.',
      es: 'Conservatorio y sala de conciertos de música árabe, construido para el rey Fuad I en la '
        + 'calle Malika Nazli —hoy calle Ramsés— del barrio de Azbakeya.',
      it: 'Conservatorio e sala da concerto per la musica araba, costruito per re Fuad I nella via '
        + 'Malika Nazli — oggi via Ramses — nel quartiere di Azbakeya.',
    },
    heritage: null,
    currentUse: {
      en: 'Still a teaching institute and concert hall, run under the Cairo Opera House; no heritage '
        + 'designation is on record here.',
      es: 'Sigue siendo instituto docente y sala de conciertos, dependiente de la Ópera de El Cairo; '
        + 'no consta ninguna figura de protección patrimonial.',
      it: 'È ancora istituto di insegnamento e sala da concerto, gestito dall’Opera del Cairo; non '
        + 'risulta alcun vincolo di tutela.',
    },
    detailRect: {
      x: 0.32, y: 0.14, w: 0.34, h: 0.34,
    },
    image: {
      commonsFile: 'Arab Music Institute-Cairo.JPG',
      photographer: 'Faris El-Gwely (Faris knight)',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Arab_Music_Institute-Cairo.JPG',
      width: 0,
      height: 0,
    },
    dossier: {
      en: 'King Fuad I replaced the old Oriental Music Club with an institute of his own in 1929, on '
        + 'Malika Nazli Street in Azbakeya, and the building was drawn by Ernesto Verrucci, the '
        + 'architect from the Marches who had been chief architect to the royal household since 1917 '
        + 'and carried the Ottoman title Bey. Wikidata puts the start of work at 1923; the Italian '
        + 'record of Verrucci’s practice dates the finished Oriental Music Institute to 1928, and '
        + 'the facade itself carries the Hijri year 1346, which ran from June 1927 to June 1928. '
        + 'Verrucci built it neo-Mamluk: a deep pointed iwan recess in a rectangular frame, an '
        + 'inscription band across the head, stepped crenellations along the parapet, a hanging lamp '
        + 'in the shadow of the arch and a ribbed stone dome behind. In 1932 the building housed the '
        + 'Cairo Congress of Arab Music, where European composers and Arab musicians spent a fortnight '
        + 'disagreeing about what Arab music was. It teaches music still.',
      es: 'El rey Fuad I sustituyó en 1929 el viejo Club de Música Oriental por un instituto propio, '
        + 'en la calle Malika Nazli de Azbakeya, y el edificio lo dibujó Ernesto Verrucci, el '
        + 'arquitecto marquesano que desde 1917 era arquitecto jefe de la casa real y llevaba el '
        + 'título otomano de bey. Wikidata sitúa el inicio de las obras en 1923; el registro italiano '
        + 'de la obra de Verrucci fecha el Instituto de Música Oriental terminado en 1928, y la propia '
        + 'fachada lleva el año 1346 de la Hégira, que corrió de junio de 1927 a junio de 1928. '
        + 'Verrucci lo construyó a la manera mameluca: un profundo nicho apuntado a modo de iwán '
        + 'inscrito en un marco rectangular, una banda epigráfica en la cabecera, almenas escalonadas '
        + 'en el pretil, una lámpara colgada en la sombra del arco y una cúpula gallonada de piedra '
        + 'detrás. En 1932 el edificio acogió el Congreso de Música Árabe de El Cairo, donde '
        + 'compositores europeos y músicos árabes discutieron dos semanas qué era la música árabe. '
        + 'Sigue enseñando música.',
      it: 'Nel 1929 re Fuad I sostituì il vecchio Circolo di Musica Orientale con un istituto suo, in '
        + 'via Malika Nazli ad Azbakeya, e l’edificio fu disegnato da Ernesto Verrucci, '
        + 'l’architetto marchigiano che dal 1917 era architetto capo della casa reale e portava il '
        + 'titolo ottomano di bey. Wikidata colloca l’inizio dei lavori nel 1923; il repertorio '
        + 'italiano delle opere di Verrucci data al 1928 l’Istituto di musica orientale finito, e '
        + 'la facciata stessa reca l’anno 1346 dell’Egira, corso dal giugno 1927 al giugno '
        + '1928. Verrucci lo costruì alla maniera mamelucca: una profonda nicchia acuta a iwan '
        + 'inscritta in una cornice rettangolare, una fascia epigrafica in testa, merli scalettati sul '
        + 'parapetto, una lampada sospesa nell’ombra dell’arco e una cupola costolonata in '
        + 'pietra dietro. Nel 1932 l’edificio ospitò il Congresso di musica araba del Cairo, dove '
        + 'compositori europei e musicisti arabi litigarono per due settimane su che cosa fosse la '
        + 'musica araba. Vi si insegna musica ancora oggi.',
    },
    context: null,
    sources: [
      {
        kind: 'wikidata',
        url: 'https://www.wikidata.org/wiki/Q126918163',
        title: 'Institute for Arabic Music building (Q126918163)',
        license: null,
      },
      {
        kind: 'wikipedia',
        url: 'https://it.wikipedia.org/wiki/Ernesto_Verrucci',
        title: 'Ernesto Verrucci — Wikipedia',
        license: 'CC BY-SA 4.0',
      },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Cairo_Congress_of_Arab_Music',
        title: 'Cairo Congress of Arab Music — Wikipedia',
        license: 'CC BY-SA 4.0',
      },
    ],
    tier: 'deep',
  },
  {
    id: 'banque-misr-building',
    wikidataId: 'Q126913803',
    name: {
      en: 'Banque Misr Headquarters',
      es: 'Sede del Banque Misr',
      it: 'Sede della Banque Misr',
    },
    architectId: 'antonio-lasciac',
    location: {
      city: 'Cairo', countryCode: 'EG', lat: 30.048, lon: 31.2444,
    },
    inception: 1927,
    completed: 1927,
    demolished: null,
    typology: 'commercial',
    materials: ['brick', 'stone'],
    structure: {
      en: 'Load-bearing walls of banded brick and pale limestone rising through a tier of pointed '
        + 'arches on stone colonnettes, with timber mashrabiya oriels bracketed out over the street '
        + 'and a clock turret at the corner.',
      es: 'Muros de carga de ladrillo y caliza clara alternados, que suben a través de un cuerpo de '
        + 'arcos apuntados sobre columnillas de piedra, con miradores de celosía de madera volados '
        + 'sobre la calle y una torrecilla de reloj en la esquina.',
      it: 'Murature portanti a fasce di mattoni e calcare chiaro che salgono attraverso un ordine di '
        + 'archi acuti su colonnine di pietra, con bovindi in moucharabieh lignea aggettanti sulla '
        + 'strada e una torretta dell’orologio all’angolo.',
    },
    program: {
      en: 'The head office of Banque Misr, the first bank in Egypt founded on Egyptian capital, built '
        + 'on Mohamed Farid Street in the new commercial quarter of Cairo.',
      es: 'Sede central del Banque Misr, el primer banco de Egipto fundado con capital egipcio, '
        + 'levantada en la calle Mohamed Farid del nuevo barrio comercial de El Cairo.',
      it: 'Sede centrale della Banque Misr, la prima banca egiziana fondata con capitale egiziano, '
        + 'costruita in via Mohamed Farid nel nuovo quartiere commerciale del Cairo.',
    },
    heritage: null,
    currentUse: {
      en: 'Still in use as bank offices in downtown Cairo; no heritage designation is on record here.',
      es: 'Sigue en uso como oficinas bancarias en el centro de El Cairo; no consta ninguna figura de '
        + 'protección patrimonial.',
      it: 'Ancora in uso come uffici bancari nel centro del Cairo; non risulta alcun vincolo di tutela.',
    },
    detailRect: {
      x: 0.30, y: 0.36, w: 0.42, h: 0.26,
    },
    image: {
      commonsFile: 'Banque Misr building Cairo.jpg',
      photographer: 'Boubloub',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Banque_Misr_building_Cairo.jpg',
      width: 0,
      height: 0,
    },
    dossier: {
      en: 'Banque Misr was founded on 13 April 1920 by Talaat Harb with Joseph Cattaui and Joseph '
        + 'Cicurel, on the rule that its capital, its management and its shareholders would all be '
        + 'Egyptian and that it would keep its books in Arabic. Every other bank in the country was '
        + 'foreign-owned; the National Bank of Egypt was British. When the bank built itself a head '
        + 'office on Mohamed Farid Street, finished in 1927, it went to Antonio Lasciac, an '
        + 'Austro-Italian from Gorizia who had by then spent four decades in Egypt and had served as '
        + 'court architect to the Khedive. He gave it a front in the Mamluk manner: banded brick and '
        + 'pale stone, a tier of pointed arches on colonnettes, carved medallions and inscription '
        + 'panels, timber mashrabiya oriels hung out over the pavement, a clock turret on the corner. '
        + 'The bank of Egyptian economic nationalism announced itself in the architectural language of '
        + 'medieval Cairo, drawn by a European. It holds bank offices still.',
      es: 'El Banque Misr se fundó el 13 de abril de 1920 por Talaat Harb junto a Joseph Cattaui y '
        + 'Joseph Cicurel, con la regla de que su capital, su dirección y su accionariado fueran '
        + 'enteramente egipcios y de que llevara sus libros en árabe. Todos los demás bancos del país '
        + 'eran extranjeros; el National Bank of Egypt, británico. Cuando el banco se construyó una '
        + 'sede en la calle Mohamed Farid, terminada en 1927, recurrió a Antonio Lasciac, un '
        + 'austroitaliano de Gorizia que llevaba ya cuatro décadas en Egipto y había sido arquitecto '
        + 'de la corte jedival. Le dio una fachada a la manera mameluca: fajas de ladrillo y piedra '
        + 'clara, un cuerpo de arcos apuntados sobre columnillas, medallones tallados y tableros '
        + 'epigráficos, miradores de celosía de madera volados sobre la acera, una torrecilla de reloj '
        + 'en la esquina. El banco del nacionalismo económico egipcio se anunció en el lenguaje del '
        + 'Cairo medieval, dibujado por un europeo. Sigue albergando oficinas bancarias.',
      it: 'La Banque Misr fu fondata il 13 aprile 1920 da Talaat Harb con Joseph Cattaui e Joseph '
        + 'Cicurel, con la regola che il capitale, la direzione e gli azionisti fossero tutti egiziani '
        + 'e che i libri contabili fossero tenuti in arabo. Ogni altra banca del paese era in mani '
        + 'straniere; la National Bank of Egypt era britannica. Quando la banca si costruì una sede in '
        + 'via Mohamed Farid, finita nel 1927, si rivolse ad Antonio Lasciac, un austro-italiano di '
        + 'Gorizia che aveva ormai passato quarant’anni in Egitto ed era stato architetto di corte del '
        + 'chedivè. Le diede un fronte alla maniera mamelucca: fasce di mattoni e pietra chiara, un '
        + 'ordine di archi acuti su colonnine, medaglioni scolpiti e tavole epigrafiche, bovindi in '
        + 'moucharabieh lignea sporgenti sul marciapiede, una torretta dell’orologio all’angolo. La '
        + 'banca del nazionalismo economico egiziano si annunciò nella lingua architettonica del Cairo '
        + 'medievale, disegnata da un europeo. Ospita ancora uffici bancari.',
    },
    context: null,
    sources: [
      {
        kind: 'wikidata',
        url: 'https://www.wikidata.org/wiki/Q126913803',
        title: 'Banque Misr building (Q126913803)',
        license: null,
      },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Antonio_Lasciac',
        title: 'Antonio Lasciac — Wikipedia',
        license: 'CC BY-SA 4.0',
      },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Banque_Misr',
        title: 'Banque Misr — Wikipedia',
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
    heritage: null,
    currentUse: {
      en: 'Occupied housing and a district of Algiers, split between the quarters of Belouizdad and '
        + 'El Madania; no heritage designation is on record here.',
      es: 'Viviendas ocupadas y barrio de Argel, repartido entre Belouizdad y El Madania; no consta '
        + 'ninguna figura de protección patrimonial.',
      it: 'Alloggi abitati e quartiere di Algeri, diviso fra Belouizdad ed El Madania; non risulta '
        + 'alcun vincolo di tutela.',
    },
    detailRect: {
      x: 0.62, y: 0.22, w: 0.28, h: 0.28,
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
          + 'this programme as symbiosis. Algeria became independent in 1962; Pouillon, expelled from '
          + 'the French Order of Architects in September 1961 for a breach of professional ethics and '
          + 'so barred from practice there, returned to work for the independent state from 1966.',
        es: 'Diar el-Mahçoul lo construyó el municipio colonial de Argel a caballo del estallido de '
          + 'la guerra de independencia argelina, en noviembre de 1954, y su planta estaba segregada. La investigación '
          + 'publicada sobre las tres barriadas argelinas recoge que Diar el-Mahçoul combinaba tipos '
          + 'de vivienda europeos y musulmanes argelinos en estructuras separadas —unas 900 viviendas '
          + 'para musulmanes argelinos y 650 para europeos— con los dos sectores divididos entre sí '
          + 'por viales. Sus vecinas estaban segregadas sin matices: Diar es-Saada alojaba solo a '
          + 'europeos y Climat de France a población exclusivamente musulmana. Pouillon trabajaba para '
          + 'un alcalde que llamaba simbiosis a este programa. Argelia fue independiente en 1962; '
          + 'Pouillon, expulsado en septiembre de 1961 del Colegio de Arquitectos francés por una '
          + 'falta deontológica y por ello inhabilitado allí, volvió a trabajar para el Estado '
          + 'independiente desde 1966.',
        it: 'Diar el-Mahçoul fu costruito dal municipio coloniale di Algeri a cavallo dello scoppio della '
          + 'guerra d’indipendenza algerina, nel novembre 1954, e la sua pianta era segregata. La ricerca pubblicata '
          + 'sui tre quartieri algerini registra che Diar el-Mahçoul combinava tipi abitativi europei '
          + 'e musulmani algerini in strutture separate — circa 900 alloggi per musulmani algerini e '
          + '650 per europei — con i due settori divisi tra loro da strade. I quartieri vicini erano '
          + 'segregati senza sfumature: Diar es-Saada ospitava solo europei, Climat de France una '
          + 'popolazione esclusivamente musulmana. Pouillon lavorava per un sindaco che chiamava '
          + 'simbiosi questo programma. L’Algeria divenne indipendente nel 1962; Pouillon, espulso '
          + 'dall’Ordine degli architetti francese nel settembre 1961 per una violazione deontologica '
          + 'e perciò interdetto in Francia, tornò a lavorare per lo Stato indipendente dal 1966.',
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
    tier: 'canon',
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
    heritage: null,
    currentUse: {
      en: 'Still the home ground of Al-Merrikh SC and known in Omdurman as the Red Castle; no '
        + 'heritage designation is on record here.',
      es: 'Sigue siendo el campo del Al-Merrikh SC y en Omdurmán se lo conoce como el Castillo Rojo; '
        + 'no consta ninguna declaración patrimonial.',
      it: 'È ancora il campo dell’Al-Merrikh SC e a Omdurman lo chiamano il Castello Rosso; non '
        + 'risulta alcuna dichiarazione di tutela.',
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
        + 'club. Work on the ground began in 1962 and it opened on 30 November 1964, the same year '
        + 'he became '
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
        + 'Omdurmán. Las obras del recinto empezaron en 1962 y se inauguró el 30 de noviembre de '
        + '1964, el mismo año en '
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
        + 'Omdurman. I lavori dell’impianto iniziarono nel 1962 e fu inaugurato il 30 novembre 1964, '
        + 'lo stesso anno in cui '
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
    id: 'djamaa-el-djazair',
    wikidataId: 'Q23012984',
    name: {
      en: 'Djamaa el Djazaïr',
      es: 'Gran Mezquita de Argel',
      it: 'Grande Moschea di Algeri',
    },
    architectId: 'ksp-juergen-engel-architekten',
    location: {
      city: 'Algiers', countryCode: 'DZ', lat: 36.7358, lon: 3.1381,
    },
    inception: 2012,
    completed: 2019,
    demolished: null,
    typology: 'sacral',
    materials: ['concrete', 'stone'],
    structure: {
      en: 'A reinforced-concrete prayer hall on 618 octagonal columns under a dome fifty metres '
        + 'across, wrapped by a stone-faced courtyard arcade of pointed arches and flanked by a '
        + 'square 265-metre minaret, the whole detailed to resist a magnitude-nine earthquake.',
      es: 'Sala de oración de hormigón armado sobre 618 columnas octogonales bajo una cúpula de '
        + 'cincuenta metros de luz, envuelta por una arcada de patio de arcos apuntados chapada en '
        + 'piedra y flanqueada por un alminar cuadrado de 265 metros, todo ello calculado para '
        + 'resistir un terremoto de magnitud nueve.',
      it: 'Sala di preghiera in cemento armato su 618 colonne ottagonali sotto una cupola di '
        + 'cinquanta metri di luce, avvolta da un’arcata di corte ad archi acuti rivestita in '
        + 'pietra e affiancata da un minareto quadrato di 265 metri, il tutto calcolato per resistere '
        + 'a un terremoto di magnitudo nove.',
    },
    program: {
      en: 'A state mosque and religious complex for the Algerian Ministry of Religious Affairs, with '
        + 'room for 120,000 people on a site of 27.75 hectares.',
      es: 'Mezquita de Estado y complejo religioso para el Ministerio de Asuntos Religiosos argelino, '
        + 'con capacidad para 120.000 personas en un recinto de 27,75 hectáreas.',
      it: 'Moschea di Stato e complesso religioso per il Ministero degli Affari religiosi algerino, '
        + 'con capienza di 120.000 persone su un’area di 27,75 ettari.',
    },
    heritage: null,
    currentUse: {
      en: 'In use as a mosque since 2020 and officially inaugurated in February 2024; as a new '
        + 'building it carries no heritage designation.',
      es: 'En uso como mezquita desde 2020 e inaugurada oficialmente en febrero de 2024; por ser obra '
        + 'nueva no tiene ninguna figura de protección.',
      it: 'In uso come moschea dal 2020 e inaugurata ufficialmente nel febbraio 2024; trattandosi di '
        + 'un edificio nuovo non ha alcun vincolo di tutela.',
    },
    detailRect: {
      x: 0.30, y: 0.45, w: 0.36, h: 0.25,
    },
    image: {
      commonsFile: "Grande Mosquée d'Alger.jpg",
      photographer: 'Askelaadden',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Grande_Mosqu%C3%A9e_d%27Alger.jpg',
      width: 0,
      height: 0,
    },
    dossier: {
      en: 'In January 2008 a German consortium — KSP Jürgen Engel Architekten with the engineers Krebs '
        + 'und Kiefer — won the international competition for a state mosque on the bay east of '
        + 'Algiers. Ground was broken on 16 August 2012, China State Construction Engineering built '
        + 'it, and the works were finished in 2019 at an official cost of about $898 million against '
        + 'an early budget nearer $1.5 billion. It is the third-largest mosque in the world after '
        + 'Mecca and Medina: 27.75 hectares, room for 120,000 people, a prayer hall for 37,000 on 618 '
        + 'octagonal columns under a dome fifty metres across and seventy high, and a square minaret '
        + 'of 265 metres, the tallest on earth, which also holds a museum and offices. The structure '
        + 'is engineered for a magnitude-nine earthquake, on a coast that lost much of Boumerdès in '
        + '2003. The project was criticised for its monumentality and its cost before it opened, and '
        + 'drew enormous crowds once it had.',
      es: 'En enero de 2008 un consorcio alemán —KSP Jürgen Engel Architekten con los ingenieros Krebs '
        + 'und Kiefer— ganó el concurso internacional para una mezquita de Estado en la bahía al este '
        + 'de Argel. La primera piedra se puso el 16 de agosto de 2012, la construyó la China State '
        + 'Construction Engineering y las obras acabaron en 2019 con un coste oficial de unos 898 '
        + 'millones de dólares frente a un presupuesto inicial cercano a los 1.500 millones. Es la '
        + 'tercera mezquita del mundo tras las de La Meca y Medina: 27,75 hectáreas, aforo para '
        + '120.000 personas, una sala de oración para 37.000 sobre 618 columnas octogonales bajo una '
        + 'cúpula de cincuenta metros de luz y setenta de altura, y un alminar cuadrado de 265 metros, '
        + 'el más alto del mundo, que aloja además un museo y oficinas. La estructura está calculada '
        + 'para un seísmo de magnitud nueve, en una costa que perdió buena parte de Boumerdés en 2003. '
        + 'Se criticó su monumentalidad y su coste antes de abrir, y al abrir atrajo multitudes.',
      it: 'Nel gennaio 2008 un consorzio tedesco — KSP Jürgen Engel Architekten con gli ingegneri '
        + 'Krebs und Kiefer — vinse il concorso internazionale per una moschea di Stato sulla baia a '
        + 'est di Algeri. La prima pietra fu posata il 16 agosto 2012, la costruì la China State '
        + 'Construction Engineering e i lavori finirono nel 2019 con un costo ufficiale di circa 898 '
        + 'milioni di dollari a fronte di un preventivo iniziale vicino a 1,5 miliardi. È la terza '
        + 'moschea del mondo dopo quelle della Mecca e di Medina: 27,75 ettari, capienza di 120.000 '
        + 'persone, una sala di preghiera per 37.000 su 618 colonne ottagonali sotto una cupola di '
        + 'cinquanta metri di luce e settanta di altezza, e un minareto quadrato di 265 metri, il più '
        + 'alto al mondo, che ospita anche un museo e uffici. La struttura è calcolata per un sisma di '
        + 'magnitudo nove, su una costa che nel 2003 perse buona parte di Boumerdès. Il progetto fu '
        + 'criticato per la monumentalità e per il costo prima di aprire, e attirò folle enormi una '
        + 'volta aperto.',
    },
    context: null,
    sources: [
      {
        kind: 'wikidata',
        url: 'https://www.wikidata.org/wiki/Q23012984',
        title: 'Djamaa El Djazaïr (Q23012984)',
        license: null,
      },
      {
        kind: 'wikipedia',
        url: 'https://en.wikipedia.org/wiki/Djamaa_el_Djaza%C3%AFr',
        title: 'Djamaa el Djazaïr — Wikipedia',
        license: 'CC BY-SA 4.0',
      },
      {
        kind: 'wikipedia',
        url: 'https://de.wikipedia.org/wiki/KSP_J%C3%BCrgen_Engel_Architekten',
        title: 'KSP Jürgen Engel Architekten — Wikipedia',
        license: 'CC BY-SA 4.0',
      },
    ],
    tier: 'canon',
  },
];
