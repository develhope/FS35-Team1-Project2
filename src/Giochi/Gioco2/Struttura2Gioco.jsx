import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Star from "../../Components/Star";
import HeaderGioco2 from "./HeaderGioco2.jsx";

import Livello1Gioco2 from "./Livello1Gioco2.jsx";
import Livello2Gioco2 from "./Livello2Gioco2.jsx";
import Livello3Gioco2 from "./Livello3Gioco2.jsx";
import Livello4Gioco2 from "./Livello4gioco2.jsx";
import Livello5Gioco2 from "./Livello5Gioco2.jsx";

const LEVEL_COMPONENTS = [
  Livello1Gioco2,
  Livello2Gioco2,
  Livello3Gioco2,
  Livello4Gioco2,
  Livello5Gioco2,
];

function GameStructure() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0); // 0 = Livello 1
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false); // Per mostrare la stella/messaggio di errore
  const [isLevelCorrect, setIsLevelCorrect] = useState(null); // true/false per il feedback visivo
  const [showNextLevelButton, setShowNextLevelButton] = useState(false); // Nuovo stato per il bottone "Avanti"
  const [showRetryLevelButton, setShowRetryLevelButton] = useState(false); // Nuovo stato per il bottone "Riprova"

  const navigate = useNavigate();

  const handleLevelComplete = () => {
    setIsLevelCorrect(true);
    setShowFeedback(true);
    setShowNextLevelButton(true); // Mostra il bottone "Avanti"
    setShowRetryLevelButton(false); // Nascondi il bottone "Riprova"
  };

  const handleLevelFail = () => {
    setIsLevelCorrect(false);
    setShowFeedback(true);
    setShowNextLevelButton(false); // Nascondi il bottone "Avanti"
    setShowRetryLevelButton(true); // Mostra il bottone "Riprova"
  };

  const goToNextLevel = () => {
    setIsLevelCorrect(null);
    setShowFeedback(false);
    setShowNextLevelButton(false);
    setShowRetryLevelButton(false);
    setCurrentLevelIndex((prevIndex) => prevIndex + 1);
  };

  const resetCurrentLevel = () => {
    setIsLevelCorrect(null);
    setShowFeedback(false);
    setShowNextLevelButton(false);
    setShowRetryLevelButton(false);
    // Forzare un re-render del componente attuale per resettarlo
    setCurrentLevelIndex(currentLevelIndex);
  };

  // Determina quale componente livello mostrare
  const CurrentLevelComponent = LEVEL_COMPONENTS[currentLevelIndex];

  // Calcola il titolo dell'header in base al livello corrente
  const headerTitle = `Livello ${currentLevelIndex + 1}`;

  // Se non ci sono più livelli
  if (!CurrentLevelComponent) {
    return (
      <>
        <div className="flex flex-col items-center justify-center min-h-screen bggame2 text-white p-5 relative">
          <img
            src="/assets/immagini/Gioco2/astronauta biondo su pianeta.svg"
            alt="astronauta vincente"
            className="absolute w-45 top-15"
          />
          <h1 className="z-50 mt-75 text-3xl font-bold text-white mb-4">
            Complimenti!
          </h1>
          <p className="z-50 text-l text-center mb-6">
            Grazie a te Marco ha ritrovato tutti i numeri persi nell’universo!
          </p>
          <p className="z-50 text-l text-center mb-6 ">
            Hai raccolto {score} punti, corri a comprare la tua nuova skin!
          </p>
          <div className="z-50 text-2xl text-blue-100">
            Punti Totali: {score}
          </div>
          <div className="flex gap-10">
            <button
              onClick={() => navigate("/shop")}
              className="mt-8 px-4 py-3 bg-yellow-400 text-black rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-xl font-semibold"
            >
              Shop
            </button>
            <button
              onClick={() => currentLevelIndex()}
              className="mt-8 px-6 py-3 bg-yellow-400 text-black rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-xl font-semibold"
            >
              Prosegui
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bggame2 text-white p-5 relative overflow-hidden">
      <HeaderGioco2 titolo={headerTitle} />

      <img
        src="/assets/immagini/Gioco2/astronauta-gioco-2.svg"
        alt="Astronauta"
        className="absolute z-50 right-1 bottom-5 w-35 h-auto md:w-32 lg:w-40"
      />
      <div className="bg-white rounded-xl border-amber-400 border-4 h-125 w-80 mt-10 flex flex-col items-center relative">
        <CurrentLevelComponent
          onLevelComplete={handleLevelComplete}
          onLevelFail={handleLevelFail}
          score={score} // Passa il punteggio attuale
          setScore={setScore} // Passa la funzione per aggiornare il punteggio
          isGameFeedbackActive={showFeedback} // Passa anche lo stato di showFeedback
        />
        {/* Feedback visivo: stella o messaggio di errore, gestito centralmente */}
        {showFeedback && isLevelCorrect === true && (
          <div className="absolute top-100 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
            <div className="scale-75 md:scale-90">
              <Star />
            </div>
          </div>
        )}

        {showFeedback && isLevelCorrect === false && (
          <p className="text-l md:text-2xl font-bold text-red-500 mt-4 animate-pulse">
            Risposta errata!
          </p>
        )}

        {/* Bottoni "Avanti" o "Riprova" con padding ripristinato */}
        <div className="mt-4 flex gap-4">
          {showNextLevelButton && (
            <button
              onClick={goToNextLevel}
              className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 text-xl font-semibold"
            >
              Avanti
            </button>
          )}
          {showRetryLevelButton && (
            <button
              onClick={resetCurrentLevel}
              className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300 text-xl font-semibold"
            >
              Riprova
            </button>
          )}
        </div>
        {/* Punti totali sempre visibili */}
      </div>
      <div className="text-l md:text-2xl pl-2 text-blue-300 font-semibold">
        Punti: {score}
      </div>
    </div>
  );
}

export default GameStructure;
