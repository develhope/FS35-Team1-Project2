// Livello5Gioco2.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import Struttura2Gioco from "./Struttura2Gioco";


const levelConfig = {
  level: 5,
  gameMode: "associateNumbersDesc",
  instructions:
    "Alcuni pianeti non hanno i loro numeri! In ordine decrescente, quali numeri appartengono al pianeta?",
  planets: [
    {
      id: "planet_filled_9",
      value: 9,
      image: "./assets/immagini/Pianeti/pianeta1.svg",
      size: "w-15 h-15",
    },
    {
      id: "planet_empty_A",
      value: null,
      image: "./assets/immagini/Pianeti/pianeta2.svg",
      size: "w-15 h-15",
    },
    {
      id: "planet_filled_7",
      value: 7,
      image: "./assets/immagini/Pianeti/pianeta3.svg",
      size: "w-15 h-15",
    },
    {
      id: "planet_empty_B",
      value: null,
      image: "./assets/immagini/Pianeti/pianeta4.svg",
      size: "w-15 h-15",
    },
    {
      id: "planet_empty_C",
      value: null,
      image: "./assets/immagini/Pianeti/pianeta7.svg",
      size: "w-15 h-15",
    },
    {
      id: "planet_filled_4",
      value: 4,
      image: "./assets/immagini/Pianeti/pianeta6.svg",
      size: "w-15 h-15",
    },
    {
      id: "planet_empty_D",
      value: null,
      image: "./assets/immagini/Pianeti/pianeta8.svg",
      size: "w-15 h-15",
    },
    {
      id: "planet_empty_2",
      value: 2,
      image: "./assets/immagini/Pianeti/pianeta9.svg",
      size: "w-15 h-15",
    },
    {
      id: "planet_empty_E",
      value: null,
      image: "./assets/immagini/Pianeti/pianeta1.svg",
      size: "w-15 h-15",
    },
  ],
  expectedOrder: [
    { id: "planet_filled_9", value: 9 },
    { id: "planet_empty_A", value: 8 },
    { id: "planet_filled_7", value: 7 },
    { id: "planet_empty_B", value: 6 },
    { id: "planet_empty_C", value: 5 },
    { id: "planet_filled_4", value: 4 },
    { id: "planet_empty_D", value: 3 },
    { id: "planet_empty_2", value: 2 },
    { id: "planet_empty_E", value: 1 },
  ],
};

function Livello5Gioco2() {
  const [levelCompleted, setLevelCompleted] = useState(false);

  return (
    <>
      <Struttura2Gioco
        levelConfig={levelConfig}
        prossimoLivelloLink="/vittoriagioco2" // Questo sarà l'ultimo livello
        isFinalLevel={true}
        onLevelComplete={() => setLevelCompleted(true)} // Passa una funzione callback
      />
      {levelCompleted && (
        <button className="z-50 mt-5 px-4 py-2 bg-green-600 text-white rounded-lg">
          <Link to="/vittoriagioco2">Hai vinto!</Link>
        </button>
      )}
    </>
  );
}


export default Livello5Gioco2;