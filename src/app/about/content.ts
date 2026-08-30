// Trilingual content for /about, owned exclusively by this route.
//
// Deliberately NOT routed through src/lib/i18n.ts: that file holds short,
// parametrized UI strings shared across the whole app; this is page-owned
// prose, structured the way the curated pool structures a dossier — one
// `LocalizedString`-shaped block per unit of content.
//
// v2.1: reduced at the curator's request to exactly two sections — what the
// game is, and how to play it. The project's full data/methodology
// disclosures live in the repo (README, AGENTS.md, docs/) rather than in
// player-facing copy.

import type { LocalizedString } from '@/types/common';

export type AboutSection = {
  id: string;
  heading: LocalizedString;
  paragraphs: LocalizedString[];
};

export const ABOUT_SECTIONS: AboutSection[] = [
  {
    id: 'what-this-is',
    heading: { en: 'What this is', es: 'Qué es esto', it: "Cos'è questo" },
    paragraphs: [
      {
        en: 'Architectle is a free daily game about looking at buildings. Each day you get a photograph of a notable building by a world-famous architect, cropped down to a telling detail, and six chances to name who designed it. Every photograph is openly licensed and comes from Wikimedia Commons, with the photographer credited under the frame.',
        es: 'Architectle es un juego diario y gratuito sobre mirar edificios. Cada día recibes la fotografía de un edificio notable de un arquitecto de fama mundial, recortada hasta un detalle revelador, y seis oportunidades para nombrar a quien lo diseñó. Todas las fotografías tienen licencia abierta y proceden de Wikimedia Commons, con el fotógrafo acreditado bajo el marco.',
        it: 'Architectle è un gioco quotidiano e gratuito che parla di guardare gli edifici. Ogni giorno ricevi la fotografia di un edificio notevole di un architetto di fama mondiale, ritagliata su un dettaglio rivelatore, e sei possibilità per nominare chi lo ha progettato. Tutte le fotografie hanno licenza aperta e provengono da Wikimedia Commons, con il fotografo accreditato sotto la cornice.',
      },
    ],
  },
  {
    id: 'how-to-play',
    heading: { en: 'How to play', es: 'Cómo jugar', it: 'Come si gioca' },
    paragraphs: [
      {
        en: 'Type an architect’s name and guess. Every wrong guess widens the crop, shows how your guess compares to the answer across four axes — era, movement, region, and typology plus material — and unlocks a new clue: the year it was completed, the country, what kind of building it is, a second photograph, and finally another famous work by the same architect.',
        es: 'Escribe el nombre de un arquitecto y arriesga. Cada fallo amplía el encuadre, muestra cómo se compara tu respuesta con la correcta en cuatro ejes — época, movimiento, región y tipología más material — y desbloquea una nueva pista: el año de finalización, el país, qué tipo de edificio es, una segunda fotografía y, por último, otra obra famosa del mismo arquitecto.',
        it: 'Scrivi il nome di un architetto e prova. Ogni errore allarga l’inquadratura, mostra come la tua risposta si confronta con quella giusta lungo quattro assi — epoca, movimento, regione e tipologia più materiale — e sblocca un nuovo indizio: l’anno di completamento, il paese, che tipo di edificio è, una seconda fotografia e infine un’altra opera famosa dello stesso architetto.',
      },
      {
        en: 'Solve it — or run out of guesses — and the full photograph is revealed with the building’s story and the architect’s portrait. Share your result as a spoiler-free grid, and come back tomorrow for a new building. You can also browse every building and architect in the archive.',
        es: 'Resuélvelo — o agota los intentos — y se revela la fotografía completa con la historia del edificio y el retrato del arquitecto. Comparte tu resultado como una cuadrícula sin spoilers y vuelve mañana a por un edificio nuevo. También puedes explorar todos los edificios y arquitectos en el archivo.',
        it: 'Risolvilo — o esaurisci i tentativi — e la fotografia completa viene rivelata con la storia dell’edificio e il ritratto dell’architetto. Condividi il tuo risultato come griglia senza spoiler e torna domani per un nuovo edificio. Puoi anche sfogliare tutti gli edifici e gli architetti nell’archivio.',
      },
    ],
  },
];
