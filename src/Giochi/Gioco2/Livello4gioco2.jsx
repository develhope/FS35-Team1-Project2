// Livello4gioco2.jsx
import Struttura2Gioco from "./Struttura2Gioco";

const levelConfig = {
  level: 4,
  gameMode: "associateNumbersAsc",
  instructions:
    "Alcuni pianeti non hanno i loro numeri! In ordine crescente, seleziona il pianeta e inserisci il numero",
  planets: [
    {
      id: "planet_filled_1",
      value: 1,
      image: "/immagini/Pianeti/pianeta1.svg",
      size: "w-15 h-15",
    },
    {
      id: "planet_empty_A",
      value: null,
      image: "/immagini/Pianeti/pianeta2.svg",
      size: "w-15 h-15",
    },
    {
      id: "planet_filled_3",
      value: 3,
      image: "/immagini/Pianeti/pianeta3.svg",
      size: "w-15 h-15",
    },
    {
      id: "planet_empty_B",
      value: null,
      image: "/immagini/Pianeti/pianeta4.svg",
      size: "w-15 h-15",
    },
    {
      id: "planet_empty_C",
      value: null,
      image: "/immagini/Pianeti/pianeta7.svg",
      size: "w-15 h-15",
    },
    {
      id: "planet_filled_6",
      value: 6,
      image: "/immagini/Pianeti/pianeta6.svg",
      size: "w-15 h-15",
    },
    {
      id: "planet_empty_D",
      value: null,
      image: "/immagini/Pianeti/pianeta8.svg",
      size: "w-15 h-15",
    },
  ],
  // Per i giochi di associazione, expectedOrder conterrà gli ID e i valori attesi per i pianeti
  // Questo include sia i pianeti già "riempiti" che quelli da riempire
  expectedOrder: [
    { id: "planet_filled_1", value: 1 },
    { id: "planet_empty_A", value: 2 },
    { id: "planet_filled_3", value: 3 },
    { id: "planet_empty_B", value: 4 },
    { id: "planet_empty_C", value: 5 },
    { id: "planet_filled_6", value: 6 },
    { id: "planet_empty_D", value: 7 },
  ],
};

function Livello4gioco2() {
  return (
    <Struttura2Gioco
      levelConfig={levelConfig}
      prossimoLivelloLink="/livello5gioco2"
      isFinalLevel={false}
    />
  );
}

export default Livello4gioco2;