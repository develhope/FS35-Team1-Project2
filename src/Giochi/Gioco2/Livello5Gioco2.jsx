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
      id: "planet_filled_10",
      value: 10,
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
      id: "planet_filled_8",
      value: 8,
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
      id: "planet_filled_5",
      value: 5,
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
  expectedOrder: [
    { id: "planet_filled_10", value: 10 },
    { id: "planet_empty_A", value: 9 },
    { id: "planet_filled_8", value: 8 },
    { id: "planet_empty_B", value: 7 },
    { id: "planet_empty_C", value: 6 },
    { id: "planet_filled_5", value: 5 },
    { id: "planet_empty_D", value: 4 },
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