// Livello3Gioco2.jsx
import Struttura2Gioco from "./Struttura2Gioco";

const levelConfig = {
  level: 3,
  gameMode: "bigToSmall",
  instructions:
    "Metti in ordine decrescente. Clicca sui pianeti per selezionarli.",
  planets: [
    {
      id: "planet_5",
      value: 5,
      image: "/immagini/Pianeti/pianeta8.svg",
      size: "w-20 h-20",
    },
    {
      id: "planet_1",
      value: 1,
      image: "/immagini/Pianeti/pianeta1.svg",
      size: "w-20 h-20",
    },
    {
      id: "planet_6",
      value: 6,
      image: "/immagini/Pianeti/pianeta6.svg",
      size: "w-20 h-20",
    },
    {
      id: "planet_2",
      value: 2,
      image: "/immagini/Pianeti/pianeta9.svg",
      size: "w-20 h-20",
    },
    {
      id: "planet_3",
      value: 3,
      image: "/immagini/Pianeti/pianeta3.svg",
      size: "w-20 h-20",
    },
    {
      id: "planet_4",
      value: 4,
      image: "/immagini/Pianeti/pianeta7.svg",
      size: "w-20 h-20",
    },
  ],
  expectedOrder: [
    "planet_6",
    "planet_5",
    "planet_4",
    "planet_3",
    "planet_2",
    "planet_1",
  ],
};

function Livello3Gioco2() {
  return (
    <Struttura2Gioco
      levelConfig={levelConfig}
      prossimoLivelloLink="/livello4gioco2"
      isFinalLevel={false}
    />
  );
}

export default Livello3Gioco2;