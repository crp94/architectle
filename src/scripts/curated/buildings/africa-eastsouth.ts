import type { Building } from '@/types/building';

// Wave 5 curator agent (East and Southern Africa): real, sourced Building entries for this slice.
//
// Slice countries: ET, ER, KE, TZ, UG, RW, ZA, ZW, MZ, NA, BW, ZM, MW, AO, CD, MG.
// FIX ROUND (see task-9-africa-eastsouth-fix-report.md): the original 12
// buildings included Fiat Tagliero (Asmara, ER) and two Mozambique buildings
// (O Leão Que Ri, Pemba Airport Terminal) whose Commons images could not
// legally be freely licensed once checked properly — Eritrea has no Freedom
// of Panorama at all, and Mozambique's FoP (Law No. 9/2022, Art. 31) is
// non-commercial-use only, which Commons' own policy treats as incompatible
// with a CC BY/CC BY-SA grant. All three architects (Pettazzi, Guedes,
// Quintanilha) died well within the last 70 years, so no other route to a
// clean licence existed; all three buildings and architects are removed
// rather than patched. Two were replaced in-place with buildings that carry
// the same era-bucket weight and an unambiguous South African FoP position:
// Union Buildings, Pretoria (Herbert Baker, 1910–1913) for Fiat Tagliero, and
// the Voortrekker Monument, Pretoria (Gerard Moerdijk, 1937–1949) for O Leão
// Que Ri. Pemba Airport Terminal has no replacement. Net: 11 buildings across
// four countries (KE, ZA, ZW, NA); era distribution 2 / 3 / 4 / 2, matching
// the contract's ceil(11/6) / ceil(11/4) / remainder / ceil(11/6) formula for
// N=11. Nine of the eleven are canon tier. Eritrea and Mozambique are absent
// from this slice as a structural finding, not an oversight — see the report.
//
// Every image licence below was read off the LICENCE BOX of the rendered
// Commons file page, and re-read a second time from the page's own licence
// templates. The API's `extmetadata` licence field is NOT relied on anywhere
// here: it is a derived cache and has been observed to report a licence the
// file page does not state. `image.width` and `image.height` are left at 0
// for the later dimensions pass, as the contract requires.
//
// One pair of buildings sits close together in central Nairobi, ~0.3 km
// apart: a 1963 cathedral and a 1973 conference tower, distinct buildings a
// decade and a different set of architects apart, neighbours on City Square.
// `crossRefs.ts`'s `possible-duplicate-site` check now gates its 1.5 km
// radius on a name-token-similarity threshold, and "Cathedral Basilica of the
// Holy Family" shares no tokens with "Kenyatta International Convention
// Centre", so this pair does not fire; see the task report for the history
// (an earlier, wider 25 km unconditional radius did flag it).
//
// Every architect who died within the last seventy years, or is living, is
// represented by an EXTERIOR photograph with `detailRect` on exterior fabric,
// because Freedom of Panorama covers exteriors only and an interior photograph
// of an in-copyright building is a derivative work of the architecture. South
// Africa has full Freedom of Panorama, so this applies to Union Buildings
// (Baker, d. 1946, long since PD by expiry) and the Voortrekker Monument
// (Moerdijk, d. 1958, still in copyright but FoP-cleared) alike.
export const AFRICA_EASTSOUTH_BUILDINGS: Building[] = [
  // ---------------------------------------------------------------- pre-1800
  {
    id: 'fort-jesus-mombasa',
    wikidataId: 'Q379080',
    name: {
      en: 'Fort Jesus',
      es: 'Fuerte Jesús',
      it: 'Forte Gesù',
    },
    architectId: 'giovanni-battista-cairati',
    location: { city: 'Mombasa', countryCode: 'KE', lat: -4.07117, lon: 39.68206 },
    inception: 1593,
    completed: 1596,
    demolished: null,
    typology: 'civic',
    materials: ['stone'],
    structure: {
      en: 'A roughly square enceinte of coral-rag ramparts about eighteen metres high with four angled bastions at the corners, set out to the Italian trace italienne so that every curtain wall could be swept by fire from another.',
      es: 'Un recinto casi cuadrado de murallas de piedra coralina de unos dieciocho metros de altura con cuatro baluartes angulares en las esquinas, trazado según la traza italiana de modo que cada lienzo pudiera ser batido desde otro.',
      it: "Una cinta quasi quadrata di bastioni in pietra corallina alti circa diciotto metri con quattro baluardi angolari agli spigoli, tracciata secondo la trace italienne perché ogni cortina potesse essere battuta da un'altra.",
    },
    program: {
      en: 'Built for the Portuguese crown to hold the Old Port of Mombasa and the sea route to India; a national museum since 1958.',
      es: 'Construido para la corona portuguesa a fin de dominar el puerto viejo de Mombasa y la ruta marítima a la India; museo nacional desde 1958.',
      it: "Costruito per la corona portoghese per tenere il porto vecchio di Mombasa e la rotta marittima verso l'India; museo nazionale dal 1958.",
    },
    heritage: 'unesco',
    currentUse: {
      en: 'National museum and World Heritage Site, and the most visited monument in Mombasa.',
      es: 'Museo nacional y sitio del Patrimonio Mundial, y el monumento más visitado de Mombasa.',
      it: 'Museo nazionale e sito del Patrimonio Mondiale, e il monumento più visitato di Mombasa.',
    },
    detailRect: { x: 0.34, y: 0.38, w: 0.30, h: 0.34 },
    image: {
      commonsFile: 'File:Fort Jesus Mombasa Old Town 2.jpg',
      photographer: 'Bertina Kanaka',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Fort_Jesus_Mombasa_Old_Town_2.jpg',
      width: 0,
      height: 0,
    },
    dossier: {
      en: "Philip II of Spain, who had ruled Portugal since 1580, sent his chief engineer for the Estado da Índia to the Swahili coast to build a fort that could hold Mombasa's Old Port against artillery. Giovanni Battista Cairati chose the coral outcrop at the harbour mouth and set out a roughly square plan with four angled bastions — the Italian bastioned system transplanted whole to East Africa. Seen from the air the outline reads as a figure lying on its back, which is where the name is said to come from. Work ran from 1593 to 1596. The geometry is Renaissance and Italian, but the coral rag, the lime mortar and the labour were Swahili, so the fort is as much a local building as an imported one. It changed hands at least nine times, was raised three metres by its Omani captors, served the British as a prison from 1895, was excavated by James Kirkman from 1958, and was inscribed by UNESCO in 2011.",
      es: 'Felipe II de España, que gobernaba Portugal desde 1580, envió a su ingeniero jefe del Estado da Índia a la costa suajili para levantar una fortaleza capaz de defender el puerto viejo de Mombasa frente a la artillería. Giovanni Battista Cairati eligió el afloramiento de coral de la bocana y trazó una planta casi cuadrada con cuatro baluartes angulares: el sistema abaluartado italiano trasplantado entero al África oriental. Vista desde el aire, la silueta se lee como una figura tendida de espaldas, de donde vendría el nombre. Las obras corrieron entre 1593 y 1596. La geometría es renacentista e italiana, pero la piedra coralina, la cal y la mano de obra fueron suajilis, de modo que el fuerte es tan local como importado. Cambió de manos al menos nueve veces, fue recrecido tres metros por sus captores omaníes, sirvió de prisión a los británicos desde 1895, fue excavado por James Kirkman a partir de 1958 y la UNESCO lo inscribió en 2011.',
      it: "Filippo II di Spagna, che dal 1580 regnava anche sul Portogallo, mandò il proprio ingegnere capo dell'Estado da Índia sulla costa swahili per costruire una fortezza capace di tenere il porto vecchio di Mombasa contro l'artiglieria. Giovanni Battista Cairati scelse lo sperone corallino all'imboccatura del porto e tracciò una pianta quasi quadrata con quattro baluardi angolari: il sistema bastionato italiano trapiantato di peso in Africa orientale. Vista dall'alto, la sagoma si legge come una figura distesa supina, e di lì verrebbe il nome. I lavori durarono dal 1593 al 1596. La geometria è rinascimentale e italiana, ma la pietra corallina, la calce e la manodopera erano swahili: il forte è tanto un edificio locale quanto uno importato. Passò di mano almeno nove volte, fu innalzato di tre metri dai conquistatori omaniti, servì agli inglesi come carcere dal 1895, fu scavato da James Kirkman dal 1958 e l'UNESCO lo iscrisse nel 2011.",
    },
    context: {
      body: {
        en: 'Fort Jesus was built to enforce a Portuguese monopoly over Indian Ocean trade, and Mombasa resisted it. The fort was won and lost at least nine times between 1631, when Sultan Yusuf ibn al-Hasan took it and killed the Portuguese garrison, and 1895. Omani forces besieged it from 1696 for nearly three years, and their capture of it ended Portuguese power on the coast. Under British rule from 1895 it was used as a prison. It became a national museum in 1958 and a World Heritage Site in 2011.',
        es: 'El fuerte Jesús se construyó para imponer el monopolio portugués del comercio del océano Índico, y Mombasa se resistió. Cambió de manos al menos nueve veces entre 1631, cuando el sultán Yusuf ibn al-Hasan lo tomó y dio muerte a la guarnición portuguesa, y 1895. Las fuerzas omaníes lo sitiaron desde 1696 durante casi tres años, y su conquista puso fin al poder portugués en la costa. Bajo dominio británico, desde 1895, sirvió de prisión. Fue declarado museo nacional en 1958 y sitio del Patrimonio Mundial en 2011.',
        it: "Il Forte Gesù fu costruito per imporre il monopolio portoghese sul commercio dell'oceano Indiano, e Mombasa vi si oppose. Fu preso e perduto almeno nove volte fra il 1631, quando il sultano Yusuf ibn al-Hasan lo conquistò uccidendo la guarnigione portoghese, e il 1895. Le forze omanite lo assediarono dal 1696 per quasi tre anni, e la loro conquista pose fine al potere portoghese sulla costa. Sotto il dominio britannico, dal 1895, fu usato come carcere. Divenne museo nazionale nel 1958 e sito del Patrimonio Mondiale nel 2011.",
      },
      sources: [
        { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Fort_Jesus', title: 'Fort Jesus', license: 'CC BY-SA 4.0' },
        { kind: 'institution', url: 'https://whc.unesco.org/en/list/1295/', title: 'Fort Jesus, Mombasa — UNESCO World Heritage Centre', license: null },
      ],
    },
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q379080', title: 'Fort Jesus (Q379080)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Fort_Jesus', title: 'Fort Jesus', license: 'CC BY-SA 4.0' },
      { kind: 'institution', url: 'https://whc.unesco.org/en/list/1295/', title: 'Fort Jesus, Mombasa — UNESCO World Heritage Centre', license: null },
      { kind: 'publication', url: 'https://search.worldcat.org/title/1067327', title: 'James S. Kirkman, Fort Jesus: A Portuguese Fortress on the East African Coast (Oxford: Clarendon Press, 1974)', license: null },
    ],
    tier: 'canon',
  },
  {
    id: 'groot-constantia-manor-house',
    wikidataId: 'Q134395439',
    name: {
      en: 'Groot Constantia Manor House',
      es: 'Casa solariega de Groot Constantia',
      it: 'Casa padronale di Groot Constantia',
    },
    architectId: 'louis-michel-thibault',
    location: { city: 'Cape Town', countryCode: 'ZA', lat: -34.02935, lon: 18.42022 },
    inception: 1790,
    completed: 1791,
    demolished: null,
    typology: 'domestic',
    materials: ['brick', 'timber'],
    structure: {
      en: "Thibault's neoclassical facade and gables applied to a load-bearing brick homestead under lime plaster and a thatched roof, the whole rebuilt after the 1925 fire to that late-eighteenth-century form.",
      es: 'La fachada y los hastiales neoclásicos de Thibault aplicados sobre una casa de carga de ladrillo revocada de cal bajo cubierta de paja, el conjunto reconstruido tras el incendio de 1925 según esa forma de finales del siglo XVIII.',
      it: "La facciata e i frontoni neoclassici di Thibault applicati su una casa a struttura portante in laterizio intonacata a calce sotto un tetto di paglia, il tutto ricostruito dopo l'incendio del 1925 in quella forma di fine Settecento.",
    },
    program: {
      en: "A remodelling, commissioned by the Cloete family, of the homestead of a wine estate first granted in 1685 to a Dutch East India Company governor; later a government experimental farm and now a house museum.",
      es: 'Una remodelación, encargada por la familia Cloete, de la casa principal de una finca vinícola concedida por primera vez en 1685 a un gobernador de la Compañía Neerlandesa de las Indias Orientales; después granja experimental del gobierno y hoy casa museo.',
      it: "Un rimaneggiamento, commissionato dalla famiglia Cloete, della casa padronale di una tenuta vinicola concessa per la prima volta nel 1685 a un governatore della Compagnia olandese delle Indie orientali; poi azienda sperimentale di Stato e oggi casa museo.",
    },
    heritage: 'regional',
    currentUse: {
      en: 'House museum on a working wine estate, its permanent display given over largely to slavery at the Cape.',
      es: 'Casa museo dentro de una bodega en activo, con una exposición permanente dedicada en buena parte a la esclavitud en el Cabo.',
      it: "Casa museo all'interno di una tenuta vinicola in attività, con un'esposizione permanente dedicata in gran parte alla schiavitù al Capo.",
    },
    detailRect: { x: 0.36, y: 0.30, w: 0.28, h: 0.30 },
    image: {
      commonsFile: 'File:GrootConstantiaHomestead.jpg',
      photographer: 'Martinvl',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:GrootConstantiaHomestead.jpg',
      width: 0,
      height: 0,
    },
    dossier: {
      en: "Simon van der Stel, governor of the Dutch Cape, was granted the land in 1685 and built a homestead on it himself; no individual designer is recorded for that first house, which followed the vernacular Cape Dutch manner of thick lime-plastered brick walls, a thatched roof and a raised stoep. After 1779 the estate passed to the Cloete family, who enlarged the vineyards and, through the late 1780s, commissioned Louis Michel Thibault, the Cape's first academically trained architect, to redesign the manor house's facade and gables; his neoclassical entrance and slender gables, carried out with the sculptor Anton Anreith, date the remodelling to around 1790–91, the same campaign in which Cloete built the new wine cellar behind the house, its pediment carrying Anreith's 1791 relief. It is this late-eighteenth-century design, not van der Stel's original building, that Thibault is credited with. The house burned to the ground in 1925, and the architect Franklin Kendall rebuilt it without Thibault's original drawings, to what he judged Cape Dutch architecture at its best — so what a visitor sees today is a 1920s reconstruction of Thibault's design rather than his actual fabric.",
      es: 'Simon van der Stel, gobernador del Cabo neerlandés, recibió las tierras en 1685 y construyó él mismo una casa; no consta ningún proyectista para esa primera casa, de manera vernácula neerlandesa del Cabo: gruesos muros de ladrillo revocados de cal, cubierta de paja y un stoep elevado. Tras 1779 la finca pasó a la familia Cloete, que amplió los viñedos y, hacia 1790, encargó a Louis Michel Thibault, primer arquitecto académico del Cabo, rediseñar la fachada y los hastiales; su entrada neoclásica, ejecutada con el escultor Anton Anreith, fecha la reforma hacia 1790-91, la misma campaña de la nueva bodega, cuyo frontón lleva el relieve de Anreith de 1791. Es este diseño de finales del XVIII, no el edificio original de van der Stel, el que se atribuye a Thibault. La casa ardió en 1925, y el arquitecto Franklin Kendall la reconstruyó sin los planos de Thibault, según lo que juzgó la mejor arquitectura del Cabo neerlandés: lo que hoy se visita es una reconstrucción de los años veinte de su diseño, no su fábrica real.',
      it: "Simon van der Stel, governatore del Capo olandese, ricevette le terre nel 1685 e vi costruì egli stesso una casa; non è documentato alcun progettista per quella prima casa, di maniera vernacolare olandese del Capo: spesse murature in laterizio intonacate a calce, tetto di paglia e uno stoep rialzato. Dopo il 1779 la tenuta passò alla famiglia Cloete, che ampliò i vigneti e, verso il 1790, incaricò Louis Michel Thibault, primo architetto accademico del Capo, di ridisegnare la facciata e i frontoni; il suo ingresso neoclassico, realizzato con lo scultore Anton Anreith, data il rimaneggiamento al 1790-91 circa, la stessa campagna della nuova cantina, il cui frontone porta il rilievo di Anreith del 1791. È questo disegno di fine Settecento, non l'edificio originale di van der Stel, a essere attribuito a Thibault. La casa bruciò nel 1925, e l'architetto Franklin Kendall la ricostruì senza i disegni di Thibault, secondo quella che giudicò la migliore architettura del Capo olandese: ciò che si visita oggi è una ricostruzione degli anni Venti del suo disegno, non la sua fabbrica reale.",
    },
    context: {
      body: {
        en: 'Groot Constantia was a slave estate. The vineyards granted to Simon van der Stel in 1685 and enlarged by the Cloete family after 1779 were worked by enslaved people held under the slave regime of the Dutch Cape Colony; a slave bell cast in 1716 hung on the estate until it was stolen in September 2024 and has not been recovered. The manor house is now a museum administered by Iziko Museums of South Africa, and its display is focused particularly on rural slavery and the lives of enslaved people in the early Cape colonial period.',
        es: 'Groot Constantia fue una finca esclavista. Los viñedos concedidos a Simon van der Stel en 1685 y ampliados por la familia Cloete después de 1779 fueron trabajados por personas esclavizadas bajo el régimen esclavista de la colonia neerlandesa del Cabo; una campana de esclavos fundida en 1716 estuvo colgada en la finca hasta que fue robada en septiembre de 2024 y no se ha recuperado. La casa solariega es hoy un museo gestionado por Iziko Museums of South Africa, y su exposición se centra de manera particular en la esclavitud rural y en la vida de las personas esclavizadas en los primeros tiempos coloniales del Cabo.',
        it: "Groot Constantia era una tenuta schiavista. I vigneti concessi a Simon van der Stel nel 1685 e ampliati dalla famiglia Cloete dopo il 1779 furono lavorati da persone schiavizzate sotto il regime schiavista della colonia olandese del Capo; una campana degli schiavi fusa nel 1716 rimase appesa nella tenuta finché non fu rubata nel settembre 2024, e non è stata recuperata. La casa padronale è oggi un museo gestito da Iziko Museums of South Africa, e l'esposizione è incentrata in particolare sulla schiavitù rurale e sulla vita delle persone schiavizzate nei primi tempi coloniali del Capo.",
      },
      sources: [
        { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Groot_Constantia', title: 'Groot Constantia', license: 'CC BY-SA 4.0' },
        { kind: 'institution', url: 'https://www.iziko.org.za/museums/groot-constantia-manor-house', title: 'Groot Constantia Manor House — Iziko Museums of South Africa', license: null },
      ],
    },
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q134395439', title: 'Groot Constantia Manor House (Q134395439)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Groot_Constantia', title: 'Groot Constantia', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Louis_Michel_Thibault', title: 'Louis Michel Thibault', license: 'CC BY-SA 4.0' },
      { kind: 'publication', url: 'https://www.theheritageportal.co.za/article/rising-ashes-1926-restoration-groot-constantia', title: 'Rising from the Ashes: The 1926 Restoration of Groot Constantia — The Heritage Portal', license: null },
    ],
    tier: 'canon',
  },
  // ------------------------------------------------------------- 1800–1945
  {
    id: 'union-buildings-pretoria',
    wikidataId: 'Q2264091',
    name: {
      en: 'Union Buildings',
      es: 'Union Buildings',
      it: 'Union Buildings',
    },
    architectId: 'herbert-baker',
    location: { city: 'Pretoria', countryCode: 'ZA', lat: -25.74047, lon: 28.21202 },
    inception: 1910,
    completed: 1913,
    demolished: null,
    typology: 'civic',
    materials: ['stone', 'brick'],
    structure: {
      en: 'Two office wings in local sandstone curving symmetrically around a central amphitheatre of terraced gardens, joined by a colonnade beneath a pair of domed towers, on a steel and concrete frame faced entirely in masonry.',
      es: 'Dos alas de oficinas en piedra arenisca local que se curvan simétricamente alrededor de un anfiteatro central de jardines escalonados, unidas por una columnata bajo dos torres abovedadas, sobre una estructura de acero y hormigón revestida enteramente de fábrica.',
      it: 'Due ali per uffici in arenaria locale che si curvano simmetricamente attorno a un anfiteatro centrale di giardini a terrazze, unite da un colonnato sotto due torri a cupola, su un telaio in acciaio e cemento interamente rivestito in muratura.',
    },
    program: {
      en: "The seat of the newly formed Union of South Africa's civil service, commissioned to house government administration on Meintjieskop above Pretoria.",
      es: 'Sede de la administración pública de la recién formada Unión Sudafricana, encargada para albergar el gobierno en Meintjieskop, sobre Pretoria.',
      it: "Sede dell'amministrazione pubblica della neonata Unione Sudafricana, commissionata per ospitare il governo su Meintjieskop, sopra Pretoria.",
    },
    heritage: 'unesco',
    currentUse: {
      en: "The official seat of South Africa's government and the president's offices, with a public amphitheatre and gardens.",
      es: 'Sede oficial del gobierno de Sudáfrica y de las oficinas presidenciales, con anfiteatro público y jardines.',
      it: 'Sede ufficiale del governo sudafricano e degli uffici presidenziali, con anfiteatro pubblico e giardini.',
    },
    detailRect: { x: 0.32, y: 0.34, w: 0.30, h: 0.30 },
    image: {
      commonsFile: 'File:Union Buildings in Pretoria, ZA.JPG',
      photographer: 'Ossewa',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Union_Buildings_in_Pretoria,_ZA.JPG',
      width: 0,
      height: 0,
    },
    dossier: {
      en: "Herbert Baker set two long office wings on Meintjieskop, curved so that they read from below as a single amphitheatre wrapped around terraced gardens, and joined them with a semicircular colonnade beneath two domed towers meant, in his own description, to speak of the union of a formerly divided people: one wing for English speakers, one for Afrikaans. The cornerstone was laid on 1 November 1910, five months after the Union of South Africa joined the Boer republics to the Cape and Natal colonies; some 1,265 workers raised it in under three years using local sandstone, granite and indigenous timber over a steel-and-concrete frame, finishing in 1913 what was, at 285 metres end to end, the largest building the Southern Hemisphere had yet seen. It has housed the country's executive ever since, an unbroken span across the whole of segregation and apartheid and the government that succeeded them, and in 2024 it was inscribed on the World Heritage list as part of a set of sites recording Nelson Mandela's legacy.",
      es: 'Herbert Baker dispuso dos largas alas de oficinas sobre Meintjieskop, curvadas para leerse desde abajo como un único anfiteatro envolviendo jardines escalonados, y las unió con una columnata semicircular bajo dos torres abovedadas destinadas, según sus propias palabras, a expresar la unión de un pueblo antes dividido: un ala para los angloparlantes, otra para los afrikáners. La primera piedra se colocó el 1 de noviembre de 1910, cinco meses después de que la Unión Sudafricana uniera las repúblicas bóer a las colonias del Cabo y Natal; unos 1.265 obreros la levantaron en menos de tres años con arenisca y granito locales y maderas autóctonas sobre una estructura de acero y hormigón, terminando en 1913 lo que, con 285 metros de un extremo a otro, era el mayor edificio que había visto hasta entonces el hemisferio sur. Ha alojado desde entonces el poder ejecutivo del país, un período ininterrumpido que abarca toda la segregación y el apartheid y el gobierno que les sucedió, y en 2024 fue inscrito en la lista del Patrimonio Mundial como parte de un conjunto de sitios que documentan el legado de Nelson Mandela.',
      it: "Herbert Baker dispose due lunghe ali per uffici su Meintjieskop, curvate in modo da leggersi dal basso come un unico anfiteatro attorno a giardini a terrazze, e le unì con un colonnato semicircolare sotto due torri a cupola destinate, a suo stesso dire, a esprimere l'unione di un popolo prima diviso: un'ala per gli anglofoni, una per gli afrikaner. La prima pietra fu posata il 1° novembre 1910, cinque mesi dopo che l'Unione Sudafricana ebbe riunito le repubbliche boere alle colonie del Capo e del Natal; circa 1.265 operai la costruirono in meno di tre anni con arenaria e granito locali e legni autoctoni su un telaio in acciaio e cemento, completando nel 1913 quello che, con 285 metri da un capo all'altro, era il più grande edificio che l'emisfero australe avesse mai visto. Da allora ha ospitato il potere esecutivo del paese, un arco ininterrotto attraverso tutta la segregazione e l'apartheid e il governo che vi succedette, e nel 2024 è stato iscritto nella lista del Patrimonio Mondiale come parte di un insieme di siti che documentano l'eredità di Nelson Mandela.",
    },
    context: {
      body: {
        en: 'The Union of South Africa that the Union Buildings were built to govern excluded its Black, Coloured and Indian majority from the franchise across most of the country from its founding in 1910, a foreclosure that hardened into apartheid after 1948; the government housed in this building administered both. On 9 August 1956 some 20,000 women marched on the Union Buildings to petition against the extension of pass laws to Black women, a date now marked annually as National Women\'s Day. On 10 May 1994 Nelson Mandela was inaugurated as South Africa\'s first president elected by universal suffrage on the building\'s terraces, and the amphitheatre was renamed for him in 2013, the year of his death, alongside a nine-metre bronze statue of him unveiled there.',
        es: 'La Unión Sudafricana que los Union Buildings se construyeron para gobernar excluyó del voto a su mayoría negra, mestiza e india en la mayor parte del país desde su fundación en 1910, una exclusión que se endureció hasta convertirse en apartheid después de 1948; el gobierno alojado en este edificio administró ambos regímenes. El 9 de agosto de 1956 unas 20.000 mujeres marcharon hasta los Union Buildings para protestar contra la extensión de las leyes de pases a las mujeres negras, fecha que hoy se conmemora cada año como Día Nacional de la Mujer. El 10 de mayo de 1994 Nelson Mandela fue investido como primer presidente de Sudáfrica elegido por sufragio universal en las terrazas del edificio, y el anfiteatro recibió su nombre en 2013, año de su muerte, junto con una estatua de bronce de nueve metros allí descubierta.',
        it: "L'Unione Sudafricana che gli Union Buildings furono costruiti per governare escluse dal voto la sua maggioranza nera, meticcia e indiana nella maggior parte del paese fin dalla fondazione nel 1910, un'esclusione che si irrigidì fino a diventare apartheid dopo il 1948; il governo ospitato in questo edificio amministrò entrambi i regimi. Il 9 agosto 1956 circa 20.000 donne marciarono verso gli Union Buildings per protestare contro l'estensione dei lasciapassare alle donne nere, data oggi commemorata ogni anno come Giornata nazionale della donna. Il 10 maggio 1994 Nelson Mandela fu investito primo presidente sudafricano eletto a suffragio universale sulle terrazze dell'edificio, e l'anfiteatro fu a lui intitolato nel 2013, anno della sua morte, insieme a una statua in bronzo di nove metri lì scoperta.",
      },
      sources: [
        { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Union_Buildings', title: 'Union Buildings', license: 'CC BY-SA 4.0' },
        { kind: 'wikipedia', url: "https://en.wikipedia.org/wiki/Women's_March_(South_Africa)", title: "Women's March (South Africa)", license: 'CC BY-SA 4.0' },
      ],
    },
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q2264091', title: 'Union Buildings (Q2264091)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Union_Buildings', title: 'Union Buildings', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Herbert_Baker', title: 'Herbert Baker', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
  {
    id: 'all-saints-uniondale',
    wikidataId: 'Q30621872',
    name: {
      en: 'All Saints Church, Uniondale',
      es: 'Iglesia de Todos los Santos, Uniondale',
      it: 'Chiesa di Ognissanti, Uniondale',
    },
    architectId: 'sophy-gray',
    location: { city: 'Uniondale', countryCode: 'ZA', lat: -33.65611, lon: 23.12833 },
    inception: 1869,
    completed: 1869,
    demolished: null,
    typology: 'sacral',
    materials: ['stone', 'timber'],
    structure: {
      en: 'Stone walls held at the corners by diagonal buttresses, under a thatched roof pitched at more than fifty-five degrees and carried on twelve scissor trusses, with a nave twice the width of the chancel.',
      es: 'Muros de piedra trabados en las esquinas por contrafuertes diagonales, bajo una cubierta de paja de más de cincuenta y cinco grados de pendiente sostenida por doce cerchas de tijera, con una nave del doble de ancho que el presbiterio.',
      it: 'Murature in pietra irrigidite agli angoli da contrafforti diagonali, sotto un tetto di paglia con pendenza superiore ai cinquantacinque gradi retto da dodici capriate a forbice, con una navata larga il doppio del presbiterio.',
    },
    program: {
      en: "An Anglican parish church for the settler village of Uniondale, built during Robert Gray's Cape episcopate and now a declared national heritage site.",
      es: 'Iglesia parroquial anglicana para la aldea colona de Uniondale, levantada durante el episcopado de Robert Gray en el Cabo y hoy sitio declarado de patrimonio nacional.',
      it: "Chiesa parrocchiale anglicana per il villaggio dei coloni di Uniondale, costruita durante l'episcopato di Robert Gray al Capo e oggi sito dichiarato di patrimonio nazionale.",
    },
    heritage: 'national',
    currentUse: {
      en: 'Anglican parish church, still in use, on Voortrekker Street in Uniondale.',
      es: 'Iglesia parroquial anglicana, todavía en uso, en la calle Voortrekker de Uniondale.',
      it: 'Chiesa parrocchiale anglicana, tuttora in uso, sulla Voortrekker Street di Uniondale.',
    },
    detailRect: { x: 0.34, y: 0.34, w: 0.30, h: 0.32 },
    image: {
      commonsFile: 'File:Uniondale, All Saints Church.JPG',
      photographer: 'Suzi-k',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Uniondale,_All_Saints_Church.JPG',
      width: 0,
      height: 0,
    },
    dossier: {
      en: "All Saints was built in 1869 at Uniondale in the Western Cape, one of at least forty churches attributed to Sophy Gray across the twenty-five years her husband was bishop of Cape Town. It is typical of her manner, and shows how little that manner amounted to simple copying. The plan sets a nave twice the width of the chancel; the corners are held by diagonal buttresses; three narrow lancets light the east wall; and the roof, pitched at more than fifty-five degrees, is thatched and carried on twelve scissor trusses. The steep pitch is English ecclesiological Gothic, out of the pattern books she packed in 1847, but the thatch and the local stone are Cape practice, and the building belongs to neither place exactly. Her authorship of these churches is contested — only eleven of her drawings survive — and the debate is set out in the dossier's sources. All Saints is a declared national heritage site.",
      es: 'La iglesia de Todos los Santos se construyó en 1869 en Uniondale, en el Cabo Occidental, y es una de las al menos cuarenta iglesias atribuidas a Sophy Gray durante los veinticinco años de episcopado de su marido en Ciudad del Cabo. Es característica de su manera de hacer, y demuestra hasta qué punto esa manera no consistía en copiar sin más. La planta da a la nave el doble de anchura que al presbiterio; las esquinas se traban con contrafuertes diagonales; tres lancetas estrechas iluminan el muro oriental; y la cubierta, con más de cincuenta y cinco grados de pendiente, es de paja y descansa sobre doce cerchas de tijera. La pendiente pronunciada es gótico eclesiológico inglés, salido de los repertorios que ella embarcó en 1847, pero la paja y la piedra local son práctica del Cabo, y el edificio no pertenece del todo a ninguno de los dos sitios. Su autoría está discutida —solo se conservan once de sus dibujos— y el debate se recoge en las fuentes de esta ficha.',
      it: "La chiesa di Ognissanti fu costruita nel 1869 a Uniondale, nel Capo Occidentale, ed è una delle almeno quaranta chiese attribuite a Sophy Gray nei venticinque anni di episcopato del marito a Città del Capo. È caratteristica del suo modo di fare e mostra quanto poco quel modo si riducesse a copiare. La pianta dà alla navata il doppio della larghezza del presbiterio; gli angoli sono irrigiditi da contrafforti diagonali; tre strette monofore a lancetta illuminano il muro orientale; e il tetto, con pendenza superiore ai cinquantacinque gradi, è di paglia e poggia su dodici capriate a forbice. La forte pendenza è gotico ecclesiologico inglese, uscito dai repertori che lei imbarcò nel 1847, ma la paglia e la pietra locale sono pratica del Capo, e l'edificio non appartiene del tutto né all'uno né all'altro luogo. La sua attribuzione è controversa — sopravvivono solo undici dei suoi disegni — e il dibattito è riportato nelle fonti di questa scheda.",
    },
    context: {
      body: {
        en: "Robert Gray was sent to Cape Town in 1847 to build a colonial diocese covering the Cape, the Orange Free State, Natal, Tristan da Cunha and St Helena. Ten Anglican churches stood in South Africa when the Grays arrived; sixty-three stood when he died twenty-five years later, and at least forty of the new ones are attributed to Sophy Gray. The building programme followed British settlement across the colony. The couple's own household at Bishopscourt occupied a farm once held by Jan van Riebeeck, and Sophy Gray ran her school in its former slave quarters. All Saints was built in 1869 for the settler congregation of Uniondale.",
        es: 'Robert Gray fue enviado a Ciudad del Cabo en 1847 para levantar una diócesis colonial que abarcaba el Cabo, el Estado Libre de Orange, Natal, Tristán de Acuña y Santa Elena. Cuando los Gray llegaron había diez iglesias anglicanas en Sudáfrica; cuando él murió, veinticinco años después, había sesenta y tres, y al menos cuarenta de las nuevas se atribuyen a Sophy Gray. El programa constructivo siguió el avance del asentamiento británico por la colonia. La casa del propio matrimonio, en Bishopscourt, ocupaba una granja que había pertenecido a Jan van Riebeeck, y Sophy Gray instaló su escuela en las antiguas dependencias de los esclavos. Todos los Santos se construyó en 1869 para la congregación colona de Uniondale.',
        it: "Robert Gray fu inviato a Città del Capo nel 1847 per costruire una diocesi coloniale che comprendeva il Capo, lo Stato Libero d'Orange, il Natal, Tristan da Cunha e Sant'Elena. Quando i Gray arrivarono in Sudafrica c'erano dieci chiese anglicane; alla morte di lui, venticinque anni dopo, erano sessantatré, e almeno quaranta delle nuove sono attribuite a Sophy Gray. Il programma edilizio seguì l'avanzata dell'insediamento britannico nella colonia. La casa della coppia, a Bishopscourt, occupava una fattoria già appartenuta a Jan van Riebeeck, e Sophy Gray teneva la sua scuola negli antichi alloggi degli schiavi. Ognissanti fu costruita nel 1869 per la congregazione dei coloni di Uniondale.",
      },
      sources: [
        { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Sophy_Gray', title: 'Sophy Gray', license: 'CC BY-SA 4.0' },
        { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/All_Saints_Church,_Uniondale', title: 'All Saints Church, Uniondale', license: 'CC BY-SA 4.0' },
        { kind: 'publication', url: 'https://open.uct.ac.za/handle/11427/10637', title: 'Desmond K. Martin, The churches of Bishop Robert Gray & Mrs Sophia Gray: an historical and architectural review (University of Cape Town)', license: null },
      ],
    },
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q30621872', title: 'All Saints Church, Uniondale (Q30621872)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/All_Saints_Church,_Uniondale', title: 'All Saints Church, Uniondale', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Sophy_Gray', title: 'Sophy Gray', license: 'CC BY-SA 4.0' },
      { kind: 'publication', url: 'https://sheffieldgenderhistory.hcommons.org/?p=57', title: 'Discovering Sophia Gray (1814–1871): British Cape Colony "Architect to the Diocese", Sheffield Gender History Journal', license: null },
    ],
    tier: 'deep',
  },
  {
    id: 'christuskirche-windhoek',
    wikidataId: 'Q1087458',
    name: {
      en: 'Christ Church (Christuskirche)',
      es: 'Iglesia de Cristo (Christuskirche)',
      it: 'Chiesa di Cristo (Christuskirche)',
    },
    architectId: 'gottlieb-redecker',
    location: { city: 'Windhoek', countryCode: 'NA', lat: -22.56778, lon: 17.08722 },
    inception: 1907,
    completed: 1910,
    demolished: null,
    typology: 'sacral',
    materials: ['stone'],
    structure: {
      en: 'Load-bearing quartz sandstone walls on a basilican plan carrying a spire twenty-four metres high, with a portico of Carrara marble imported from Italy.',
      es: 'Muros de carga de arenisca cuarcítica sobre planta basilical que sostienen una aguja de veinticuatro metros, con un pórtico de mármol de Carrara importado de Italia.',
      it: "Murature portanti in arenaria quarzosa su pianta basilicale che reggono una guglia alta ventiquattro metri, con un portico in marmo di Carrara importato dall'Italia.",
    },
    program: {
      en: 'Built as the Lutheran parish church of the German settler community in Windhoek and still used by the German-speaking Evangelical Lutheran Church in Namibia.',
      es: 'Construida como iglesia parroquial luterana de la comunidad colona alemana de Windhoek y todavía en uso por la Iglesia Evangélica Luterana de lengua alemana en Namibia.',
      it: "Costruita come chiesa parrocchiale luterana della comunità dei coloni tedeschi di Windhoek e tuttora usata dalla Chiesa evangelica luterana di lingua tedesca in Namibia.",
    },
    heritage: 'national',
    currentUse: {
      en: 'Parish church and national monument, standing on a traffic island opposite the Namibian parliament.',
      es: 'Iglesia parroquial y monumento nacional, en una isleta de tráfico frente al parlamento de Namibia.',
      it: 'Chiesa parrocchiale e monumento nazionale, su uno spartitraffico di fronte al parlamento della Namibia.',
    },
    detailRect: { x: 0.36, y: 0.40, w: 0.28, h: 0.30 },
    image: {
      commonsFile: 'File:Iglesia de Cristo, Windhoek, Namibia, 2018-08-04, DD 02.jpg',
      photographer: 'Diego Delso',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Iglesia_de_Cristo,_Windhoek,_Namibia,_2018-08-04,_DD_02.jpg',
      width: 0,
      height: 0,
    },
    dossier: {
      en: "Gottlieb Redecker drew Christ Church three times before the imperial government approved the third version, then supervised the building himself. It went up between 1907 and 1910 in quartz sandstone quarried near the Avis Dam, on a basilican plan, in a neo-Romanesque idiom loosened by Jugendstil detail and touched here and there by Gothic Revival — a mixture that reads less as indecision than as a colonial architect working from memory and pattern books six thousand kilometres from the sources. The portico is Carrara marble; the clock, part of the roof and three bronze bells cast by Franz Schilling came from Germany, and the stained glass was a gift from Wilhelm II. The spire is twenty-four metres. It was called the Church of Peace from the outset, a name given at the end of the German war against the Herero and Nama, and it stands on an island in the road opposite the Tintenpalast, which is also Redecker's.",
      es: 'Gottlieb Redecker dibujó la iglesia de Cristo tres veces antes de que el gobierno imperial aprobara la tercera versión, y después dirigió él mismo la obra. Se levantó entre 1907 y 1910 en arenisca cuarcítica extraída cerca de la presa de Avis, sobre planta basilical, en un lenguaje neorrománico aflojado por el detalle modernista y tocado aquí y allá por el neogótico: una mezcla que se lee menos como indecisión que como el trabajo de un arquitecto colonial que proyecta de memoria y con repertorios impresos a seis mil kilómetros de las fuentes. El pórtico es de mármol de Carrara; el reloj, parte de la cubierta y tres campanas de bronce fundidas por Franz Schilling llegaron de Alemania, y las vidrieras fueron un regalo de Guillermo II. La aguja mide veinticuatro metros. Se la llamó iglesia de la Paz desde el principio, nombre dado al terminar la guerra alemana contra los herero y los nama, y se alza en una isleta frente al Tintenpalast, también obra de Redecker.',
      it: "Gottlieb Redecker disegnò la chiesa di Cristo tre volte prima che il governo imperiale approvasse la terza versione, e ne diresse poi personalmente il cantiere. Fu costruita fra il 1907 e il 1910 in arenaria quarzosa cavata presso la diga di Avis, su pianta basilicale, in un linguaggio neoromanico allentato dal dettaglio Jugendstil e sfiorato qua e là dal neogotico: una mescolanza che si legge meno come indecisione che come il lavoro di un architetto coloniale che progetta a memoria e su repertori a stampa, a seimila chilometri dalle fonti. Il portico è in marmo di Carrara; l'orologio, parte della copertura e tre campane di bronzo fuse da Franz Schilling vennero dalla Germania, e le vetrate furono un dono di Guglielmo II. La guglia misura ventiquattro metri. Fu detta chiesa della Pace fin dall'inizio, nome dato alla fine della guerra tedesca contro herero e nama, e sorge su uno spartitraffico di fronte al Tintenpalast, anch'esso di Redecker.",
    },
    context: {
      body: {
        en: 'The church was designed and built in the aftermath of the German colonial war against the Herero and Nama of 1904–1908, which the German government formally recognised as a genocide in 2021; tens of thousands died in the fighting, in the Omaheke desert and in the camps. The foundation stone was laid on 11 August 1907, while the war was still being prosecuted, and the building was dedicated on 16 October 1910 under the name Church of Peace. It stands directly opposite the Tintenpalast, built as the headquarters of the German colonial administration and now the seat of the parliament of independent Namibia.',
        es: 'La iglesia se proyectó y se construyó inmediatamente después de la guerra colonial alemana contra los herero y los nama de 1904-1908, que el gobierno alemán reconoció formalmente como genocidio en 2021; decenas de miles de personas murieron en los combates, en el desierto de Omaheke y en los campos. La primera piedra se colocó el 11 de agosto de 1907, cuando la guerra aún se libraba, y el edificio fue consagrado el 16 de octubre de 1910 con el nombre de iglesia de la Paz. Se alza justo enfrente del Tintenpalast, levantado como sede de la administración colonial alemana y hoy sede del parlamento de la Namibia independiente.',
        it: "La chiesa fu progettata e costruita all'indomani della guerra coloniale tedesca contro herero e nama del 1904-1908, che il governo tedesco ha formalmente riconosciuto come genocidio nel 2021; decine di migliaia di persone morirono nei combattimenti, nel deserto dell'Omaheke e nei campi. La prima pietra fu posata l'11 agosto 1907, mentre la guerra era ancora in corso, e l'edificio fu consacrato il 16 ottobre 1910 con il nome di chiesa della Pace. Sorge esattamente di fronte al Tintenpalast, costruito come sede dell'amministrazione coloniale tedesca e oggi sede del parlamento della Namibia indipendente.",
      },
      sources: [
        { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Christ_Church,_Windhoek', title: 'Christ Church, Windhoek', license: 'CC BY-SA 4.0' },
        { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Herero_and_Nama_genocide', title: 'Herero and Nama genocide', license: 'CC BY-SA 4.0' },
      ],
    },
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q1087458', title: 'Christ Church, Windhoek (Q1087458)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Christ_Church,_Windhoek', title: 'Christ Church, Windhoek', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Gottlieb_Redecker', title: 'Gottlieb Redecker', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
  // ------------------------------------------------------------- 1945–2000
  {
    id: 'kicc-nairobi',
    wikidataId: 'Q3272625',
    name: {
      en: 'Kenyatta International Convention Centre',
      es: 'Centro Internacional de Convenciones Kenyatta',
      it: 'Kenyatta International Convention Centre',
    },
    architectId: 'david-mutiso',
    coArchitects: ['karl-henrik-nostvik'],
    location: { city: 'Nairobi', countryCode: 'KE', lat: -1.28861, lon: 36.82306 },
    inception: 1967,
    completed: 1973,
    demolished: null,
    typology: 'tower',
    materials: ['concrete'],
    structure: {
      en: 'A reinforced-concrete tower of thirty-two floors, cylindrical in mass and built up from stacked cuboid bays, faced in pale terracotta and standing about 105 metres, with a conical amphitheatre and a cuboid plenary hall at its foot.',
      es: 'Una torre de hormigón armado de treinta y dos plantas, cilíndrica en su masa y compuesta por tramos cúbicos apilados, revestida de terracota clara y de unos 105 metros, con un anfiteatro cónico y una sala plenaria cúbica a sus pies.',
      it: 'Una torre in cemento armato di trentadue piani, cilindrica nella massa e composta da campate cuboidi sovrapposte, rivestita di terracotta chiara e alta circa 105 metri, con un anfiteatro conico e un’aula plenaria cuboide ai suoi piedi.',
    },
    program: {
      en: 'Commissioned by Jomo Kenyatta as the headquarters of the governing KANU party and built as a conference centre with government offices; a state corporation since 2012.',
      es: 'Encargado por Jomo Kenyatta como sede del partido gobernante, la KANU, y construido como centro de congresos con oficinas del gobierno; corporación estatal desde 2012.',
      it: 'Commissionato da Jomo Kenyatta come sede del partito di governo, la KANU, e costruito come centro congressi con uffici governativi; ente pubblico dal 2012.',
    },
    heritage: 'none',
    currentUse: {
      en: 'Convention centre and government offices, with a revolving restaurant and a rooftop helipad.',
      es: 'Centro de convenciones y oficinas gubernamentales, con restaurante giratorio y helipuerto en cubierta.',
      it: 'Centro congressi e uffici governativi, con ristorante girevole ed eliporto in copertura.',
    },
    detailRect: { x: 0.40, y: 0.20, w: 0.24, h: 0.40 },
    image: {
      commonsFile: 'File:Kenyatta International Convention Centre, Nairobi, by Karl Henrik Nøstvik architect, general.jpg',
      photographer: 'IndicibleEspace',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kenyatta_International_Convention_Centre,_Nairobi,_by_Karl_Henrik_N%C3%B8stvik_architect,_general.jpg',
      width: 0,
      height: 0,
    },
    dossier: {
      en: 'Jomo Kenyatta commissioned the building in 1967, four years after independence, as a headquarters for KANU, and it went up in three phases — podium, tower, plenary hall — finishing in 1973. David Mutiso, Kenya’s first African government Chief Architect, developed the design in weekly meetings with Kenyatta after KANU secretary-general Tom Mboya brought him the brief in 1968, expanding an initial four-storey scheme into the finished tower. Karl Henrik Nøstvik, a Norwegian then serving as Mutiso’s junior in the same ministry, joined the project and continued as a private consultant once his government contract lapsed; international catalogues have long credited Nøstvik alone, a framing Mutiso disputed for the rest of his life. The composition is deliberately elementary: cuboids for the plenary hall, a cylinder of stacked cuboid bays for the thirty-two-storey tower, cones for the amphitheatre and the helipad, faced in pale terracotta chosen to recall earlier African building. At 105 metres it was Kenya’s tallest structure for twenty-six years and remains the image by which Nairobi is recognised.',
      es: 'Jomo Kenyatta encargó el edificio en 1967, cuatro años después de la independencia, como sede de la KANU, y se levantó en tres fases —podio, torre, sala plenaria— hasta terminarse en 1973. David Mutiso, primer africano arquitecto jefe del gobierno keniano, desarrolló el diseño en reuniones semanales con Kenyatta tras recibir el encargo del secretario general de la KANU, Tom Mboya, en 1968, y amplió un esquema inicial de cuatro plantas hasta la torre construida. Karl Henrik Nøstvik, noruego entonces subordinado suyo en el ministerio, se incorporó al proyecto y siguió como consultor privado tras vencer su contrato con el gobierno; los catálogos internacionales atribuyen la obra solo a Nøstvik desde hace tiempo, un relato que Mutiso rebatió toda su vida. La composición es deliberadamente elemental: cuerpos cúbicos para la sala plenaria, un cilindro de tramos cúbicos apilados para la torre de treinta y dos plantas, conos para el anfiteatro y el helipuerto, todo revestido de terracota clara para remitir a la construcción africana anterior. Con 105 metros fue la estructura más alta de Kenia veintiséis años y sigue siendo la imagen de Nairobi.',
      it: 'Jomo Kenyatta commissionò l’edificio nel 1967, quattro anni dopo l’indipendenza, come sede della KANU, e fu costruito in tre fasi — basamento, torre, aula plenaria — fino al completamento nel 1973. David Mutiso, primo africano a ricoprire il ruolo di architetto capo del governo keniano, sviluppò il progetto in incontri settimanali con Kenyatta dopo che il segretario generale della KANU, Tom Mboya, gli affidò l’incarico nel 1968, ampliando uno schema iniziale di quattro piani fino alla torre realizzata. Karl Henrik Nøstvik, un norvegese allora suo subordinato nello stesso ministero, si unì al progetto e vi proseguì come consulente privato una volta scaduto il proprio contratto con il governo; i cataloghi internazionali attribuiscono da tempo l’opera al solo Nøstvik, una versione che Mutiso contestò per il resto della vita. La composizione è volutamente elementare: volumi cuboidi per l’aula plenaria, un cilindro di campate cuboidi sovrapposte per la torre di trentadue piani, coni per l’anfiteatro e per l’eliporto, il tutto rivestito di una terracotta chiara scelta per richiamare la costruzione africana precedente. Con i suoi 105 metri fu la struttura più alta del Kenya per ventisei anni e resta l’immagine per cui Nairobi viene riconosciuta.',
    },
    context: {
      body: {
        en: 'The centre was commissioned as the headquarters of the Kenya African National Union, the party that had governed Kenya since independence in 1963 and that was the country’s sole legal party from 1982 until multi-party politics were restored in 1991; party and state functions were housed together in the building for much of that period. The complex was constituted as a state corporation under the Tourism Act in 2011, taking effect in 2012, and was renamed from Conference Centre to Convention Centre in 2013.',
        es: 'El centro se encargó como sede de la Unión Nacional Africana de Kenia, el partido que gobernaba el país desde la independencia de 1963 y que fue el único partido legal entre 1982 y la restauración del pluripartidismo en 1991; durante buena parte de ese período el edificio albergó juntas las funciones del partido y las del Estado. El complejo fue constituido como corporación estatal por la Ley de Turismo de 2011, con efecto desde 2012, y en 2013 pasó de llamarse Centro de Conferencias a Centro de Convenciones.',
        it: 'Il centro fu commissionato come sede della Kenya African National Union, il partito che governava il paese dall’indipendenza del 1963 e che fu l’unico partito legale dal 1982 fino al ritorno al multipartitismo nel 1991; per buona parte di quel periodo l’edificio ospitò insieme le funzioni di partito e quelle di Stato. Il complesso fu costituito in ente pubblico dalla legge sul turismo del 2011, con effetto dal 2012, e nel 2013 cambiò nome da Conference Centre a Convention Centre.',
      },
      sources: [
        { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Kenyatta_International_Convention_Centre', title: 'Kenyatta International Convention Centre', license: 'CC BY-SA 4.0' },
        { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Kenya_African_National_Union', title: 'Kenya African National Union', license: 'CC BY-SA 4.0' },
      ],
    },
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q3272625', title: 'Kenyatta International Convention Centre (Q3272625)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Kenyatta_International_Convention_Centre', title: 'Kenyatta International Convention Centre', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://no.wikipedia.org/wiki/Karl_Henrik_N%C3%B8stvik', title: 'Karl Henrik Nøstvik (Norwegian Wikipedia)', license: 'CC BY-SA 4.0' },
      { kind: 'publication', url: 'https://buildesign.co.ke/david-mutiso-the-architect-who-designed-kicc/', title: 'David Mutiso, the architect who designed KICC — BUILDesign', license: null },
      { kind: 'publication', url: 'https://www.constructionkenya.com/12954/architect-david-mutiso/', title: 'Legendary Kenyan architect David Mutiso dies at 93 — Construction Kenya', license: null },
    ],
    tier: 'canon',
  },
  {
    id: 'voortrekker-monument',
    wikidataId: 'Q963472',
    name: {
      en: 'Voortrekker Monument',
      es: 'Monumento a los Voortrekkers',
      it: 'Monumento ai Voortrekker',
    },
    architectId: 'gerard-moerdijk',
    location: { city: 'Pretoria', countryCode: 'ZA', lat: -25.77639, lon: 28.17750 },
    inception: 1937,
    completed: 1949,
    demolished: null,
    typology: 'cultural',
    materials: ['stone'],
    structure: {
      en: 'A granite cube sixty-two metres high on a forty-metre-square base, ringed by a laager wall of sculpted ox-wagons, with a domed cenotaph hall lit through a roof aperture aligned to admit a beam of sunlight at solar noon on one day each year.',
      es: 'Un cubo de granito de sesenta y dos metros de altura sobre una base cuadrada de cuarenta metros, rodeado por un muro en forma de laager de carromatos esculpidos, con una sala del cenotafio abovedada iluminada por una abertura en la cubierta alineada para dejar entrar un rayo de sol al mediodía solar un día al año.',
      it: 'Un cubo di granito alto sessantadue metri su una base quadrata di quaranta metri, cinto da un muro a laager di carri esculti, con una sala del cenotafio a cupola illuminata da un\'apertura nel tetto allineata per far entrare un raggio di sole al mezzogiorno solare un giorno all\'anno.',
    },
    program: {
      en: 'A national monument raised by Afrikaner cultural organisations to commemorate the Voortrekkers of the Great Trek, with a hall of heroes, a cenotaph and a museum wing.',
      es: 'Monumento nacional erigido por organizaciones culturales afrikáner para conmemorar a los voortrekkers del Gran Trek, con una sala de los héroes, un cenotafio y un ala de museo.',
      it: 'Monumento nazionale eretto da organizzazioni culturali afrikaner per commemorare i voortrekker del Grande Trek, con una sala degli eroi, un cenotafio e un\'ala museale.',
    },
    heritage: 'national',
    currentUse: {
      en: 'Museum and heritage site within a nature reserve south of Pretoria, still the site of an annual ceremony each 16 December.',
      es: 'Museo y sitio patrimonial dentro de una reserva natural al sur de Pretoria, todavía escenario de una ceremonia anual cada 16 de diciembre.',
      it: 'Museo e sito patrimoniale all\'interno di una riserva naturale a sud di Pretoria, tuttora sede di una cerimonia annuale ogni 16 dicembre.',
    },
    detailRect: { x: 0.36, y: 0.30, w: 0.28, h: 0.34 },
    image: {
      commonsFile: 'File:Voortrekker Monument in Pretoria, South Africa.jpg',
      photographer: 'SonyPro',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Voortrekker_Monument_in_Pretoria,_South_Africa.jpg',
      width: 0,
      height: 0,
    },
    dossier: {
      en: "Gerard Moerdijk gave the Voortrekker Monument the plan of an Egyptian temple and the mass of a mausoleum: a windowless granite cube on a hilltop south of Pretoria, ringed by a laager of sixty-four stone ox-wagons, its walls carrying what is described as the world's largest marble frieze, twenty-seven panels telling the story of the Great Trek of 1835-1852. Building began in 1937 and the cornerstone was laid on 16 December 1938, the centenary of the Voortrekkers' victory at Blood River; the monument opened, on the same date, eleven years later in 1949. At its centre a cenotaph sits beneath a dome cut to let a shaft of sunlight cross the words 'Ons vir jou, Suid-Afrika' — 'We for thee, South Africa' — at noon each 16 December, the anniversary the monument was built to fix in the national calendar.",
      es: 'Gerard Moerdijk dio al Monumento a los Voortrekkers la planta de un templo egipcio y la masa de un mausoleo: un cubo de granito sin ventanas sobre una colina al sur de Pretoria, rodeado por un laager de sesenta y cuatro carromatos de piedra, con muros que sostienen lo que se describe como el friso de mármol más grande del mundo, veintisiete paneles que narran el Gran Trek de 1835-1852. Las obras comenzaron en 1937 y la primera piedra se colocó el 16 de diciembre de 1938, centenario de la victoria de los voortrekkers en Blood River; el monumento se inauguró, en la misma fecha, once años después, en 1949. En su centro un cenotafio se alza bajo una cúpula abierta para dejar pasar un rayo de sol que cruza las palabras «Ons vir jou, Suid-Afrika» —«Nosotros por ti, Sudáfrica»— al mediodía de cada 16 de diciembre, la fecha que el monumento se construyó para fijar en el calendario nacional.',
      it: "Gerard Moerdijk diede al Monumento ai Voortrekker la pianta di un tempio egizio e la massa di un mausoleo: un cubo di granito senza finestre su una collina a sud di Pretoria, cinto da un laager di sessantaquattro carri di pietra, con pareti che reggono quello che viene descritto come il più grande fregio marmoreo al mondo, ventisette pannelli che raccontano il Grande Trek del 1835-1852. I lavori iniziarono nel 1937 e la prima pietra fu posata il 16 dicembre 1938, centenario della vittoria dei voortrekker a Blood River; il monumento fu inaugurato, nella stessa data, undici anni dopo, nel 1949. Al centro un cenotafio sorge sotto una cupola tagliata per lasciar passare un raggio di sole che attraversa le parole «Ons vir jou, Suid-Afrika» — «Noi per te, Sudafrica» — a mezzogiorno di ogni 16 dicembre, la data che il monumento fu costruito per fissare nel calendario nazionale.",
    },
    context: {
      body: {
        en: 'The monument fixes a religious myth at the centre of Afrikaner nationalism: that God granted the Voortrekkers their victory over a Zulu force at Blood River on 16 December 1838 in fulfilment of a vow sworn before the battle, a covenant the monument\'s planners moved to make "the exclusive servant of the Afrikaner and her or his religion" as construction proceeded through the 1930s. E.G. Jansen, chairman of the organising committee, presided over both the 1938 foundation-stone ceremony, held before crowds reported in the hundreds of thousands, and the 1949 opening — one year after the National Party won power and began building apartheid, a policy its leaders and clergy justified in explicitly covenantal, theological terms drawn from the same Vow. The Day of the Vow that the monument\'s architecture exists to mark was a public holiday under apartheid and was renamed the Day of Reconciliation in independent South Africa in 1994, retaining the 16 December date.',
        es: 'El monumento fija en el centro del nacionalismo afrikáner un mito religioso: que Dios concedió a los voortrekkers su victoria sobre una fuerza zulú en Blood River el 16 de diciembre de 1838 en cumplimiento de un voto jurado antes de la batalla, un pacto que los promotores del monumento se propusieron convertir en «servidor exclusivo del afrikáner y de su religión» a medida que avanzaba la construcción en los años treinta. E. G. Jansen, presidente del comité organizador, presidió tanto la ceremonia de colocación de la primera piedra en 1938, ante multitudes que se contaron por cientos de miles, como la inauguración de 1949, un año después de que el Partido Nacional llegara al poder y comenzara a construir el apartheid, política que sus dirigentes y su clero justificaron en términos teológicos explícitamente pactistas extraídos del mismo Voto. El Día del Voto que la arquitectura del monumento existe para señalar fue día festivo bajo el apartheid y pasó a llamarse Día de la Reconciliación en la Sudáfrica independiente en 1994, conservando la fecha del 16 de diciembre.',
        it: 'Il monumento fissa al centro del nazionalismo afrikaner un mito religioso: che Dio concesse ai voortrekker la vittoria su una forza zulu a Blood River il 16 dicembre 1838 in adempimento di un voto pronunciato prima della battaglia, un patto che i promotori del monumento vollero rendere «servitore esclusivo dell\'afrikaner e della sua religione» via via che la costruzione procedeva negli anni Trenta. E. G. Jansen, presidente del comitato organizzatore, presiedette sia la cerimonia della posa della prima pietra nel 1938, davanti a folle contate in centinaia di migliaia, sia l\'inaugurazione del 1949, un anno dopo che il Partito Nazionale conquistò il potere e cominciò a costruire l\'apartheid, politica che i suoi dirigenti e il suo clero giustificarono in termini teologici esplicitamente patrizi tratti dallo stesso Voto. Il Giorno del Voto che l\'architettura del monumento esiste per segnare fu festa pubblica sotto l\'apartheid e fu ribattezzato Giorno della Riconciliazione nel Sudafrica indipendente nel 1994, conservando la data del 16 dicembre.',
      },
      sources: [
        { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Voortrekker_Monument', title: 'Voortrekker Monument', license: 'CC BY-SA 4.0' },
        { kind: 'publication', url: 'https://scielo.org.za/scielo.php?script=sci_arttext&pid=S0259-94222018000300050', title: 'The religious statement of the Voortrekker Monument as a site of Afrikaner memory: Origin, composition and reception', license: null },
      ],
    },
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q963472', title: 'Voortrekker Monument (Q963472)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Voortrekker_Monument', title: 'Voortrekker Monument', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Gerard_Moerdijk', title: 'Gerard Moerdijk', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
  {
    id: 'eastgate-centre-harare',
    wikidataId: 'Q1278256',
    name: {
      en: 'Eastgate Centre',
      es: 'Centro Eastgate',
      it: 'Eastgate Centre',
    },
    architectId: 'mick-pearce',
    location: { city: 'Harare', countryCode: 'ZW', lat: -17.8315, lon: 31.05258 },
    inception: 1991,
    completed: 1996,
    demolished: null,
    typology: 'commercial',
    materials: ['concrete', 'brick'],
    structure: {
      en: 'Two nine-storey concrete ranges facing each other across a glazed atrium crossed by cable-stayed skyways, with forty-eight brick flues drawing air from the basement through hollow floors to the roof.',
      es: 'Dos cuerpos de hormigón de nueve plantas enfrentados a través de un atrio acristalado cruzado por pasarelas atirantadas, con cuarenta y ocho conductos de ladrillo que llevan el aire desde el sótano por los forjados huecos hasta la cubierta.',
      it: 'Due corpi in cemento di nove piani affacciati su un atrio vetrato attraversato da passerelle strallate, con quarantotto canne fumarie in mattoni che portano l’aria dal seminterrato attraverso i solai cavi fino al tetto.',
    },
    program: {
      en: 'Shops on the lower two floors and offices above, built as a speculative commercial development on Robert Mugabe Avenue in central Harare.',
      es: 'Comercios en las dos plantas bajas y oficinas encima, promovido como operación comercial especulativa en la avenida Robert Mugabe del centro de Harare.',
      it: 'Negozi ai due piani inferiori e uffici sopra, realizzato come operazione commerciale speculativa sulla Robert Mugabe Avenue nel centro di Harare.',
    },
    heritage: 'none',
    currentUse: {
      en: 'Shopping centre and offices, still ventilated without mechanical air conditioning.',
      es: 'Centro comercial y oficinas, todavía ventilado sin aire acondicionado mecánico.',
      it: 'Centro commerciale e uffici, ancora ventilato senza aria condizionata meccanica.',
    },
    detailRect: { x: 0.30, y: 0.36, w: 0.36, h: 0.28 },
    image: {
      commonsFile: 'File:Zimbabwe Harare Eastgate Shopping Mall.jpg',
      photographer: 'Gary Bembridge',
      license: 'CC BY 2.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Zimbabwe_Harare_Eastgate_Shopping_Mall.jpg',
      width: 0,
      height: 0,
    },
    dossier: {
      en: 'Mick Pearce and the engineers of Arup set out to build a large office and retail block in Harare with no air conditioning at all, and did. Eastgate is two nine-storey ranges facing each other across a glazed atrium, linked by skyways hung on cables. Between them run forty-eight brick flues. At night, when Harare’s altitude drags the temperature down, fans draw cool air through the hollow floors and charge the concrete with it; through the day that mass takes the heat out of the offices and the flues exhaust it at roof level. The model was the termite mound, used as engineering rather than as metaphor. Arup’s simulations set the rest of the rules: no direct sun on the external walls, glazing under a quarter of the north face, windows sealed and treated as light filters. The building uses about a tenth of the ventilation energy of a comparable conditioned block, and its masonry patterning refers to the stone walling at Great Zimbabwe.',
      es: 'Mick Pearce y los ingenieros de Arup se propusieron construir en Harare un gran bloque de oficinas y comercio sin aire acondicionado alguno, y lo lograron. Eastgate son dos cuerpos de nueve plantas enfrentados a través de un atrio acristalado y unidos por pasarelas colgadas de cables. Entre ambos corren cuarenta y ocho conductos de ladrillo. De noche, cuando la altitud de Harare hace caer la temperatura, unos ventiladores empujan aire fresco por los forjados huecos y cargan con él la masa de hormigón; durante el día esa masa absorbe el calor de las oficinas y los conductos lo expulsan por la cubierta. El modelo fue el termitero, empleado como ingeniería y no como metáfora. Las simulaciones de Arup fijaron el resto de las reglas: nada de sol directo sobre los muros exteriores, acristalamiento por debajo de la cuarta parte de la fachada norte, ventanas selladas y entendidas como filtros de luz. El edificio consume alrededor de la décima parte de la energía de ventilación de un bloque climatizado equivalente, y el despiece de su fábrica remite a los muros de piedra del Gran Zimbabue.',
      it: 'Mick Pearce e gli ingegneri di Arup si proposero di costruire ad Harare un grande blocco di uffici e negozi senza alcuna aria condizionata, e ci riuscirono. Eastgate sono due corpi di nove piani affacciati l’uno sull’altro attraverso un atrio vetrato e collegati da passerelle appese a cavi. Fra di essi corrono quarantotto canne in mattoni. Di notte, quando l’altitudine di Harare fa scendere la temperatura, dei ventilatori spingono aria fresca nei solai cavi e ne caricano la massa di calcestruzzo; di giorno quella massa assorbe il calore degli uffici e le canne lo espellono in copertura. Il modello fu il termitaio, usato come ingegneria e non come metafora. Le simulazioni di Arup fissarono il resto delle regole: nessun sole diretto sulle murature esterne, vetrate sotto un quarto del fronte nord, finestre sigillate e intese come filtri di luce. L’edificio consuma circa un decimo dell’energia di ventilazione di un blocco climatizzato paragonabile, e il disegno della muratura richiama le mura in pietra del Grande Zimbabwe.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q1278256', title: 'Eastgate Centre, Harare (Q1278256)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Eastgate_Centre,_Harare', title: 'Eastgate Centre, Harare', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Mick_Pearce', title: 'Mick Pearce', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
  {
    id: 'holy-family-basilica-nairobi',
    wikidataId: 'Q4451415',
    name: {
      en: 'Cathedral Basilica of the Holy Family',
      es: 'Catedral basílica de la Sagrada Familia',
      it: 'Cattedrale basilica della Sacra Famiglia',
    },
    architectId: 'dorothy-hughes',
    location: { city: 'Nairobi', countryCode: 'KE', lat: -1.28694, lon: 36.82056 },
    inception: 1960,
    completed: 1963,
    demolished: null,
    typology: 'sacral',
    materials: ['concrete'],
    structure: {
      en: 'A reinforced-concrete church about thirty metres high carrying a single wide span over a congregation of three to four thousand, with abstract stained glass set in stainless-steel frames and details in Carrara marble.',
      es: 'Una iglesia de hormigón armado de unos treinta metros de altura que salva una sola luz ancha sobre una asamblea de tres a cuatro mil personas, con vidrieras abstractas montadas en marcos de acero inoxidable y detalles en mármol de Carrara.',
      it: 'Una chiesa in cemento armato alta una trentina di metri che copre un’unica ampia luce su un’assemblea di tre-quattromila persone, con vetrate astratte montate in telai di acciaio inossidabile e dettagli in marmo di Carrara.',
    },
    program: {
      en: 'The cathedral of the Catholic Archdiocese of Nairobi, replacing the stone church of 1904 that was the city’s first stone building; raised to minor basilica in 1982.',
      es: 'Catedral de la archidiócesis católica de Nairobi, en sustitución de la iglesia de piedra de 1904 que fue el primer edificio de piedra de la ciudad; elevada a basílica menor en 1982.',
      it: 'Cattedrale dell’arcidiocesi cattolica di Nairobi, in sostituzione della chiesa in pietra del 1904 che fu il primo edificio in muratura della città; elevata a basilica minore nel 1982.',
    },
    heritage: 'none',
    currentUse: {
      en: 'Seat of the Archbishop of Nairobi and the headquarters of the archdiocese.',
      es: 'Sede del arzobispo de Nairobi y de la administración archidiocesana.',
      it: 'Sede dell’arcivescovo di Nairobi e dell’amministrazione arcidiocesana.',
    },
    detailRect: { x: 0.34, y: 0.34, w: 0.30, h: 0.30 },
    image: {
      commonsFile: 'File:Cathedral Basilica of the Holy Family, Nairobi, 2025 (01).jpg',
      photographer: 'Bahnfrend',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cathedral_Basilica_of_the_Holy_Family,_Nairobi,_2025_(01).jpg',
      width: 0,
      height: 0,
    },
    dossier: {
      en: 'The Catholic congregation in Nairobi began among railway construction workers camped near what became the first station, and its first church, built in 1904, was the earliest stone building in the city. By 1960 it seated three or four hundred and the archdiocese wanted ten times that. Dorothy Hughes, the first woman to practise as an architect in East Africa, drew the replacement that year; the British contractor Mowlem built it between 1960 and 1963, and it opened on 6 July 1963, five months before Kenyan independence. It is a plain modernist box handled with some nerve: one wide span, a height of about thirty metres, a large cross on the front, eight chapels and two side altars off the main volume, abstract stained glass in stainless-steel frames rather than the figurative windows a cathedral of that date would normally have had, and Carrara marble used sparingly. It was made a minor basilica in 1982.',
      es: 'La comunidad católica de Nairobi nació entre los obreros del ferrocarril acampados junto a lo que sería la primera estación, y su primera iglesia, de 1904, fue el edificio de piedra más antiguo de la ciudad. Hacia 1960 tenía trescientas o cuatrocientas plazas y la archidiócesis quería diez veces más. Dorothy Hughes, la primera mujer que ejerció la arquitectura en África oriental, dibujó ese año el edificio sustituto; la contrata británica Mowlem lo construyó entre 1960 y 1963 y se inauguró el 6 de julio de 1963, cinco meses antes de la independencia de Kenia. Es una caja moderna y sobria resuelta con aplomo: una sola luz ancha, unos treinta metros de altura, una gran cruz en el frente, ocho capillas y dos altares laterales desprendidos del volumen principal, vidrieras abstractas en marcos de acero inoxidable en lugar de los ventanales figurativos que habría llevado normalmente una catedral de esa fecha, y mármol de Carrara empleado con parquedad. Fue declarada basílica menor en 1982.',
      it: 'La comunità cattolica di Nairobi nacque fra gli operai della ferrovia accampati vicino a quella che sarebbe stata la prima stazione, e la sua prima chiesa, del 1904, fu il più antico edificio in pietra della città. Verso il 1960 aveva tre o quattrocento posti e l’arcidiocesi ne voleva dieci volte tanti. Dorothy Hughes, la prima donna a esercitare l’architettura in Africa orientale, disegnò quell’anno l’edificio sostitutivo; l’impresa britannica Mowlem lo costruì fra il 1960 e il 1963 e fu inaugurato il 6 luglio 1963, cinque mesi prima dell’indipendenza del Kenya. È una scatola moderna e sobria risolta con una certa audacia: un’unica ampia luce, una trentina di metri d’altezza, una grande croce sul fronte, otto cappelle e due altari laterali staccati dal volume principale, vetrate astratte in telai d’acciaio inossidabile al posto delle finestre figurative che una cattedrale di quella data avrebbe normalmente avuto, e marmo di Carrara usato con parsimonia. Fu elevata a basilica minore nel 1982.',
    },
    context: null,
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q4451415', title: 'Cathedral Basilica of the Holy Family (Q4451415)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Cathedral_Basilica_of_the_Holy_Family,_Nairobi', title: 'Cathedral Basilica of the Holy Family, Nairobi', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Dorothy_Hughes_(architect)', title: 'Dorothy Hughes (architect)', license: 'CC BY-SA 4.0' },
    ],
    tier: 'deep',
  },
  // ------------------------------------------------------------- post-2000
  {
    id: 'constitutional-court-johannesburg',
    wikidataId: 'Q1133886',
    name: {
      en: 'Constitutional Court of South Africa',
      es: 'Tribunal Constitucional de Sudáfrica',
      it: 'Corte costituzionale del Sudafrica',
    },
    architectId: 'janina-masojada',
    coArchitects: ['andrew-makin', 'paul-wygers'],
    location: { city: 'Johannesburg', countryCode: 'ZA', lat: -26.18861, lon: 28.04333 },
    inception: 1998,
    completed: 2004,
    demolished: null,
    typology: 'civic',
    materials: ['brick', 'concrete'],
    structure: {
      en: 'Brick and concrete construction using stock salvaged from the demolished Awaiting Trial Block, with the courtroom roof carried on slender canted columns instead of a colonnade.',
      es: 'Construcción de ladrillo y hormigón que reutiliza material recuperado del demolido pabellón de presos preventivos, con la cubierta de la sala sostenida por pilares esbeltos e inclinados en lugar de una columnata.',
      it: 'Costruzione in laterizio e cemento che reimpiega materiale recuperato dal demolito braccio dei detenuti in attesa di giudizio, con la copertura dell’aula retta da esili pilastri inclinati anziché da un colonnato.',
    },
    program: {
      en: 'The seat of South Africa’s highest court on constitutional matters, built on the site of the Old Fort prison as part of the Constitution Hill precinct.',
      es: 'Sede del más alto tribunal sudafricano en materia constitucional, levantada sobre el solar de la antigua prisión del Old Fort dentro del recinto de Constitution Hill.',
      it: 'Sede del più alto tribunale sudafricano in materia costituzionale, costruita sull’area dell’antico carcere dell’Old Fort nel complesso di Constitution Hill.',
    },
    heritage: 'none',
    currentUse: {
      en: 'Working court, open to the public, with an art collection and a museum in the surviving prison buildings alongside.',
      es: 'Tribunal en activo, abierto al público, con una colección de arte y un museo en los edificios carcelarios que se conservan al lado.',
      it: 'Tribunale in attività, aperto al pubblico, con una collezione d’arte e un museo negli edifici carcerari superstiti accanto.',
    },
    detailRect: { x: 0.34, y: 0.34, w: 0.30, h: 0.32 },
    image: {
      commonsFile: 'File:Constitutional Court (outside) of South Africa.JPG',
      photographer: 'Mihi tr',
      license: 'CC BY 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Constitutional_Court_(outside)_of_South_Africa.JPG',
      width: 0,
      height: 0,
    },
    dossier: {
      en: 'An open international competition was held in 1997 for a court that had been created two years earlier and had nowhere to sit. More than five hundred entries were judged by a panel chaired by Charles Correa, and in 1998 the commission went to Janina Masojada, Andrew Makin and Erik Orts-Hansen of OMM Design Workshop in Durban with Paul Wygers of Urban Solutions in Johannesburg. Their proposition was that justice in an African setting is done under a tree, so the chamber is roofed on slender canted columns rather than ringed by a colonnade, and daylight comes in low at street level so that people outside can see feet and be seen. The site was the Old Fort prison. The Awaiting Trial Block was taken down to clear it and its bricks were built back into the walls and the stair. The court was inaugurated on Human Rights Day, 21 March 2004.',
      es: 'En 1997 se convocó un concurso internacional abierto para un tribunal creado dos años antes que no tenía dónde sentarse. Más de quinientas propuestas fueron juzgadas por un jurado presidido por Charles Correa, y en 1998 el encargo recayó en Janina Masojada, Andrew Makin y Erik Orts-Hansen, de OMM Design Workshop de Durban, con Paul Wygers, de Urban Solutions de Johannesburgo. Su premisa era que en un marco africano la justicia se imparte bajo un árbol: por eso la sala se cubre sobre pilares esbeltos e inclinados en vez de rodearse de columnata, y la luz entra baja, a ras de calle, de modo que quien está fuera vea los pies de quien está dentro y sea visto. El solar era la prisión del Old Fort. El pabellón de presos preventivos se demolió para despejarlo y sus ladrillos se volvieron a levantar en los muros y en la escalera. El tribunal se inauguró el Día de los Derechos Humanos, el 21 de marzo de 2004.',
      it: 'Nel 1997 fu bandito un concorso internazionale aperto per una corte istituita due anni prima che non aveva dove sedere. Più di cinquecento proposte furono giudicate da una giuria presieduta da Charles Correa, e nel 1998 l’incarico andò a Janina Masojada, Andrew Makin ed Erik Orts-Hansen di OMM Design Workshop di Durban con Paul Wygers di Urban Solutions di Johannesburg. La loro premessa era che in un contesto africano la giustizia si amministri sotto un albero: perciò l’aula è coperta su esili pilastri inclinati anziché cinta da un colonnato, e la luce entra bassa, a livello della strada, così che chi sta fuori veda i piedi di chi sta dentro e sia a sua volta visto. L’area era quella del carcere dell’Old Fort. Il braccio dei detenuti in attesa di giudizio fu demolito per liberarla e i suoi mattoni furono rimessi in opera nelle murature e nella scala. La corte fu inaugurata nel Giorno dei diritti umani, il 21 marzo 2004.',
    },
    context: {
      body: {
        en: 'The court stands inside the Old Fort prison complex, where the Number Four section held Black male prisoners, many of them arrested under the pass laws, and the Women’s Gaol held women; Mahatma Gandhi, Albert Luthuli, Winnie Madikizela-Mandela and Nelson Mandela were all detained on the site. Building the court required demolishing the Awaiting Trial Block, and its bricks were reused in the new walls and stair so that the prison would remain physically present in what replaced it. The court was created by the constitutional settlement that ended apartheid, and it opened on Human Rights Day, 21 March 2004 — the anniversary of the Sharpeville massacre of 1960.',
        es: 'El tribunal se levanta dentro del complejo carcelario del Old Fort, donde la sección Number Four encerraba a presos negros varones, muchos detenidos en aplicación de las leyes de pases, y la cárcel de mujeres a las presas; en ese recinto estuvieron detenidos Mahatma Gandhi, Albert Luthuli, Winnie Madikizela-Mandela y Nelson Mandela. Construir el tribunal exigió demoler el pabellón de presos preventivos, y sus ladrillos se reutilizaron en los muros y la escalera nuevos para que la prisión siguiera físicamente presente en lo que la sustituyó. El tribunal nació del pacto constitucional que puso fin al apartheid y se inauguró el Día de los Derechos Humanos, el 21 de marzo de 2004, aniversario de la matanza de Sharpeville de 1960.',
        it: 'La corte sorge dentro il complesso carcerario dell’Old Fort, dove la sezione Number Four rinchiudeva detenuti neri di sesso maschile, molti arrestati in applicazione delle leggi sui lasciapassare, e il carcere femminile le detenute; sul sito furono reclusi Mahatma Gandhi, Albert Luthuli, Winnie Madikizela-Mandela e Nelson Mandela. Costruire la corte impose di demolire il braccio dei detenuti in attesa di giudizio, e i suoi mattoni furono reimpiegati nelle nuove murature e nella scala perché il carcere restasse fisicamente presente in ciò che lo sostituiva. La corte nacque dall’accordo costituzionale che pose fine all’apartheid e fu inaugurata nel Giorno dei diritti umani, il 21 marzo 2004, anniversario del massacro di Sharpeville del 1960.',
      },
      sources: [
        { kind: 'institution', url: 'https://www.constitutionhill.org.za/pages/building-the-constitutional-court', title: 'The story of the Constitutional Court, Constitution Hill', license: null },
        { kind: 'institution', url: 'https://ccac.concourttrust.org.za/uploads/files/Light-on-a-Hill_2006.pdf', title: 'Light on a Hill: Building the Constitutional Court of South Africa (Constitutional Court Trust, 2006)', license: null },
        { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Constitution_Hill,_Johannesburg', title: 'Constitution Hill, Johannesburg', license: 'CC BY-SA 4.0' },
      ],
    },
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q1133886', title: 'Constitutional Court of South Africa (Q1133886)', license: null },
      { kind: 'institution', url: 'https://www.constitutionhill.org.za/pages/building-the-constitutional-court', title: 'The story of the Constitutional Court, Constitution Hill', license: null },
      { kind: 'institution', url: 'https://ccac.concourttrust.org.za/uploads/files/Light-on-a-Hill_2006.pdf', title: 'Light on a Hill: Building the Constitutional Court of South Africa (Constitutional Court Trust, 2006)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Constitutional_Court_of_South_Africa', title: 'Constitutional Court of South Africa', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
  {
    id: 'red-location-museum',
    wikidataId: 'Q7304546',
    name: {
      en: 'Red Location Museum',
      es: 'Museo de Red Location',
      it: 'Red Location Museum',
    },
    architectId: 'jo-noero',
    coArchitects: ['heinrich-wolff'],
    location: { city: 'Gqeberha', countryCode: 'ZA', lat: -33.89813, lon: 25.60571 },
    inception: 1998,
    completed: 2006,
    demolished: null,
    typology: 'cultural',
    materials: ['mixed', 'brick'],
    structure: {
      en: 'A long steel-framed shed of saw-tooth section covering twelve free-standing boxes of rusted steel, each about six by six metres in plan and twelve metres high, with no fixed route between them.',
      es: 'Una nave larga de estructura metálica y sección en diente de sierra que cubre doce cajas exentas de acero oxidado, de unos seis por seis metros en planta y doce de altura, sin recorrido fijo entre ellas.',
      it: 'Un lungo capannone in acciaio a sezione a shed che copre dodici scatole autoportanti in acciaio arrugginito, di circa sei per sei metri in pianta e dodici di altezza, senza percorso obbligato fra l’una e l’altra.',
    },
    program: {
      en: 'A museum of the anti-apartheid struggle, with an auditorium, library, art gallery and memorial space, built in the township whose history it holds.',
      es: 'Museo de la lucha contra el apartheid, con auditorio, biblioteca, sala de exposiciones y espacio conmemorativo, construido en el township cuya historia custodia.',
      it: 'Museo della lotta contro l’apartheid, con auditorio, biblioteca, galleria d’arte e spazio commemorativo, costruito nella township di cui custodisce la storia.',
    },
    heritage: 'none',
    currentUse: {
      en: 'Closed to the public since October 2013 and not reopened; the building stands.',
      es: 'Cerrado al público desde octubre de 2013 y sin reabrir; el edificio sigue en pie.',
      it: 'Chiuso al pubblico dall’ottobre 2013 e mai riaperto; l’edificio è ancora in piedi.',
    },
    detailRect: { x: 0.34, y: 0.34, w: 0.30, h: 0.30 },
    image: {
      commonsFile: 'File:Red Location Museum Exterior.jpg',
      photographer: 'Joziboy',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Red_Location_Museum_Exterior.jpg',
      width: 0,
      height: 0,
    },
    dossier: {
      en: 'Jo Noero and Heinrich Wolff put twelve free-standing boxes of rusted steel inside a saw-tooth shed and called them memory boxes, after the trunks in which migrant workers kept everything they owned while they were away from their families. Each box is about six metres square and twelve high. Nothing about the arrangement prescribes an order: the visitor picks a way between them, which was the point, since the building was meant to refuse the single authorised narrative that a conventional museum imposes. The shed matches the corrugated iron of the settlement around it. It opened on 10 November 2006, won a string of awards including the RIBA Lubetkin Prize in 2010, and in October 2013 was closed by the people of Red Location, who shut the museum, the library and the gallery in protest at the state of their houses. It has not reopened.',
      es: 'Jo Noero y Heinrich Wolff colocaron doce cajas exentas de acero oxidado dentro de una nave en diente de sierra y las llamaron cajas de memoria, por los baúles en los que los trabajadores migrantes guardaban cuanto tenían mientras estaban lejos de sus familias. Cada caja mide unos seis metros de lado y doce de alto. Nada en la disposición impone un orden: el visitante elige por dónde pasar, y ese era el propósito, pues el edificio se pensó para negarse al relato único y autorizado que impone un museo convencional. La nave repite la chapa ondulada del asentamiento que la rodea. Se inauguró el 10 de noviembre de 2006, obtuvo una serie de premios entre ellos el Lubetkin del RIBA en 2010, y en octubre de 2013 lo cerraron los vecinos de Red Location, que clausuraron el museo, la biblioteca y la sala de exposiciones en protesta por el estado de sus viviendas. No ha vuelto a abrir.',
      it: 'Jo Noero e Heinrich Wolff collocarono dodici scatole autoportanti in acciaio arrugginito dentro un capannone a shed e le chiamarono scatole della memoria, dai bauli in cui i lavoratori migranti custodivano tutto ciò che possedevano mentre stavano lontani dalle famiglie. Ogni scatola misura circa sei metri di lato e dodici di altezza. Nulla nella disposizione impone un ordine: il visitatore sceglie da dove passare, ed era proprio questo il punto, perché l’edificio fu pensato per rifiutare il racconto unico e autorizzato che un museo convenzionale impone. Il capannone riprende la lamiera ondulata dell’insediamento che lo circonda. Fu inaugurato il 10 novembre 2006, ottenne una serie di premi fra cui il Lubetkin del RIBA nel 2010, e nell’ottobre 2013 fu chiuso dagli abitanti di Red Location, che serrarono museo, biblioteca e galleria per protesta contro lo stato delle loro case. Non ha più riaperto.',
    },
    context: {
      body: {
        en: 'New Brighton is one of the oldest townships in Port Elizabeth, now Gqeberha, laid out for Black residents after 1900 on ground that had held a Boer War concentration camp, and the museum was built to keep the record of the anti-apartheid struggle waged from it. In October 2013 residents of Red Location closed the museum, the library and the art gallery in protest at the condition of their houses, many of which had been declared structurally unsound. An agreement between the government and the community to demolish and correctly rebuild 288 of those houses was not carried out. The museum has remained shut ever since.',
        es: 'New Brighton es uno de los townships más antiguos de Port Elizabeth, hoy Gqeberha, trazado para residentes negros después de 1900 sobre un terreno que había albergado un campo de concentración de la guerra anglo-bóer, y el museo se construyó para custodiar la memoria de la lucha contra el apartheid librada desde allí. En octubre de 2013 los vecinos de Red Location cerraron el museo, la biblioteca y la sala de exposiciones en protesta por el estado de sus viviendas, muchas declaradas estructuralmente inseguras. El acuerdo entre el gobierno y la comunidad para demoler y reconstruir correctamente 288 de esas casas no se cumplió. El museo sigue cerrado desde entonces.',
        it: 'New Brighton è una delle township più antiche di Port Elizabeth, oggi Gqeberha, tracciata per abitanti neri dopo il 1900 su un terreno che aveva ospitato un campo di concentramento della guerra anglo-boera, e il museo fu costruito per conservare la memoria della lotta contro l’apartheid condotta da lì. Nell’ottobre 2013 gli abitanti di Red Location chiusero museo, biblioteca e galleria d’arte per protesta contro lo stato delle loro case, molte delle quali dichiarate strutturalmente inagibili. L’accordo fra il governo e la comunità per demolire e ricostruire correttamente 288 di quelle case non fu attuato. Il museo è rimasto chiuso da allora.',
      },
      sources: [
        { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Red_Location_Museum', title: 'Red Location Museum', license: 'CC BY-SA 4.0' },
      ],
    },
    sources: [
      { kind: 'wikidata', url: 'https://www.wikidata.org/wiki/Q7304546', title: 'Red Location Museum (Q7304546)', license: null },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Red_Location_Museum', title: 'Red Location Museum', license: 'CC BY-SA 4.0' },
      { kind: 'wikipedia', url: 'https://en.wikipedia.org/wiki/Jo_Noero', title: 'Jo Noero', license: 'CC BY-SA 4.0' },
    ],
    tier: 'canon',
  },
];
