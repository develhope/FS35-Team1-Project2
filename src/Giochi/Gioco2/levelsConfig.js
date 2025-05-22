export const GAME_LEVELS = [
  // Livello 1
  {
    level: 1,
    gameMode: "smallToBig",
    instructions:
      `Metti in ordine dal numero più piccolo al più grande. Clicca sui pianeti per selezionarli.`,
    planets: [
      { id: "planet_4", value: 4, image: "/immagini/Pianeti/pianeta4.svg" }, // Nota: percorsi immagini spesso da /public o simili in React
      { id: "planet_1", value: 1, image: "/immagini/Pianeti/pianeta1.svg" },
      { id: "planet_2", value: 2, image: "/immagini/Pianeti/pianeta2.svg" },
      { id: "planet_3", value: 3, image: "/immagini/Pianeti/pianeta3.svg" },
    ],
    expectedOrder: ["planet_1", "planet_2", "planet_3", "planet_4"],
  },
  // Livello 2
  {
    level: 2,
    gameMode: "smallToBig",
    instructions:
      "Metti in ordine crescente. Clicca sui pianeti per selezionarli.",
    planets: [
      { id: "planet_5", value: 5, image: "/immagini/Pianeti/pianeta5.svg" },
      { id: "planet_1", value: 1, image: "/immagini/Pianeti/pianeta1.svg" },
      { id: "planet_6", value: 6, image: "/immagini/Pianeti/pianeta6.svg" },
      { id: "planet_2", value: 2, image: "/immagini/Pianeti/pianeta2.svg" },
      { id: "planet_3", value: 3, image: "/immagini/Pianeti/pianeta3.svg" },
      { id: "planet_4", value: 4, image: "/immagini/Pianeti/pianeta4.svg" },
    ],
    expectedOrder: [
      "planet_1",
      "planet_2",
      "planet_3",
      "planet_4",
      "planet_5",
      "planet_6",
    ],
  },
  // Livello 3
  {
    level: 3,
    gameMode: "bigToSmall",
    instructions:
      "Metti in ordine decrescente. Clicca sui pianeti per selezionarli.",
    planets: [
      { id: "planet_5", value: 5, image: "/immagini/Pianeti/pianeta5.svg" },
      { id: "planet_1", value: 1, image: "/immagini/Pianeti/pianeta1.svg" },
      { id: "planet_6", value: 6, image: "/immagini/Pianeti/pianeta6.svg" },
      { id: "planet_2", value: 2, image: "/immagini/Pianeti/pianeta2.svg" },
      { id: "planet_3", value: 3, image: "/immagini/Pianeti/pianeta3.svg" },
      { id: "planet_4", value: 4, image: "/immagini/Pianeti/pianeta4.svg" },
    ],
    expectedOrder: [
      "planet_6",
      "planet_5",
      "planet_4",
      "planet_3",
      "planet_2",
      "planet_1",
    ],
  },
  // Livello 4
  {
    level: 4,
    gameMode: "associateNumbersAsc",
    instructions:
      "Alcuni pianeti non hanno i loro numeri! In ordine crescente, quali numeri appartengono al pianeta?",
    planets: [
      {
        id: "planet_filled_1",
        value: 1,
        image: "/immagini/Pianeti/pianeta1.svg",
      },
      {
        id: "planet_empty_A",
        value: null,
        image: "/immagini/Pianeti/pianeta2.svg",
      },
      {
        id: "planet_filled_3",
        value: 3,
        image: "/immagini/Pianeti/pianeta3.svg",
      },
      {
        id: "planet_empty_B",
        value: null,
        image: "/immagini/Pianeti/pianeta4.svg",
      },
      {
        id: "planet_empty_C",
        value: null,
        image: "/immagini/Pianeti/pianeta5.svg",
      },
      {
        id: "planet_filled_6",
        value: 6,
        image: "/immagini/Pianeti/pianeta6.svg",
      },
      {
        id: "planet_filled_7",
        value: 7,
        image: "/immagini/Pianeti/pianeta7.svg",
      },
      {
        id: "planet_empty_D",
        value: null,
        image: "/immagini/Pianeti/pianeta8.svg",
      },
      {
        id: "planet_empty_E",
        value: null,
        image: "/immagini/Pianeti/pianeta9.svg",
      },
      {
        id: "planet_filled_10",
        value: 10,
        image: "/immagini/Pianeti/pianeta1.svg",
      },
    ],
    expectedAssociations: {
      planet_empty_A: 2,
      planet_empty_B: 4,
      planet_empty_C: 5,
      planet_empty_D: 8,
      planet_empty_E: 9,
    },
  },
  // Livello 5
  {
    level: 5,
    gameMode: "associateNumbersDesc",
    instructions:
      "Alcuni pianeti non hanno i loro numeri! In ordine decrescente, quali numeri appartengono al pianeta?",
    planets: [
      {
        id: "planet_filled_10",
        value: 10,
        image: "/immagini/Pianeti/pianeta1.svg",
      },
      {
        id: "planet_empty_A",
        value: null,
        image: "/immagini/Pianeti/pianeta2.svg",
      },
      {
        id: "planet_filled_8",
        value: 8,
        image: "/immagini/Pianeti/pianeta3.svg",
      },
      {
        id: "planet_empty_B",
        value: null,
        image: "/immagini/Pianeti/pianeta4.svg",
      },
      {
        id: "planet_empty_C",
        value: null,
        image: "/immagini/Pianeti/pianeta5.svg",
      },
      {
        id: "planet_filled_5",
        value: 5,
        image: "/immagini/Pianeti/pianeta6.svg",
      },
      {
        id: "planet_filled_4",
        value: 4,
        image: "/immagini/Pianeti/pianeta7.svg",
      },
      {
        id: "planet_empty_D",
        value: null,
        image: "/immagini/Pianeti/pianeta8.svg",
      },
      {
        id: "planet_empty_E",
        value: null,
        image: "/immagini/Pianeti/pianeta9.svg",
      },
      {
        id: "planet_filled_1",
        value: 1,
        image: "/immagini/Pianeti/pianeta1.svg",
      },
    ],
    expectedAssociations: {
      planet_empty_A: 9,
      planet_empty_B: 7,
      planet_empty_C: 6,
      planet_empty_D: 3,
      planet_empty_E: 2,
    },
  },
];
