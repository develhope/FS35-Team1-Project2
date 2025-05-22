// src/GameStructure.jsx
import React, { useState, useEffect } from "react";
import { GAME_LEVELS } from "./levelsConfig";

function GameStructure() {
  // Stato del gioco
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0); // 0 = Livello 1
  const [planetsData, setPlanetsData] = useState([]); // Dati di tutti i pianeti nel livello
  const [selectedOrder, setSelectedOrder] = useState([]); // Per i livelli di ordinamento (Livello 1,2,3)
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(null); // null (nessun controllo), true (corretto), false (errato)
  const [score, setScore] = useState(0);

  // Stato specifico per la gestione dell'input nei livelli di associazione (Livello 4,5)
  const [activePlanetForInput, setActivePlanetForInput] = useState(null); // ID del pianeta su cui si sta inserendo il numero
  const [numberInput, setNumberInput] = useState(""); // Valore temporaneo dell'input numerico

  // Ottiene la configurazione del livello corrente
  const currentLevelConfig = GAME_LEVELS[currentLevelIndex];

  // Effetto per inizializzare o resettare il livello quando currentLevelIndex cambia
  useEffect(() => {
    if (!currentLevelConfig) {
      setFeedbackMessage("Congratulazioni! Hai completato tutti i livelli!");
      setPlanetsData([]); // Pulisci i pianeti quando il gioco finisce
      return;
    }

    // Resetta tutti gli stati specifici del livello
    setSelectedOrder([]);
    setIsCorrect(null);
    setFeedbackMessage(currentLevelConfig.instructions);
    setActivePlanetForInput(null); // Assicurati che l'input non sia attivo all'inizio del livello
    setNumberInput(""); // Pulisci l'input temporaneo

    // Inizializza i dati dei pianeti per il livello corrente.
    // Aggiungiamo 'isSelected' e 'userInput' (per i pianeti vuoti) a ogni oggetto pianeta.
    const initialPlanets = currentLevelConfig.planets.map((p) => ({
      ...p,
      isSelected: false, // Per i livelli di ordinamento, indica se è stato cliccato
      userInput: p.value !== null ? String(p.value) : "", // userInput sarà una stringa per l'input HTML. Prepopola con value se non è null.
    }));
    setPlanetsData(initialPlanets);
  }, [currentLevelIndex, currentLevelConfig]); // Si riesegue quando l'indice del livello o la configurazione cambiano

  // Gestore del click su un pianeta
  const handlePlanetClick = (clickedPlanetId) => {
    if (!currentLevelConfig) return; // Non fare nulla se il gioco è finito

    if (
      currentLevelConfig.gameMode === "smallToBig" ||
      currentLevelConfig.gameMode === "bigToSmall"
    ) {
      // Logica per i livelli di ordinamento (Livello 1, 2, 3)
      setPlanetsData((prevPlanets) => {
        const clickedPlanet = prevPlanets.find((p) => p.id === clickedPlanetId);

        // Se il pianeta esiste e non è già stato selezionato
        if (clickedPlanet && !clickedPlanet.isSelected) {
          const updatedPlanets = prevPlanets.map((p) =>
            p.id === clickedPlanetId
              ? { ...p, isSelected: true } // Marca il pianeta come selezionato
              : p
          );
          const newSelectedOrder = [...selectedOrder, clickedPlanetId]; // Aggiungi all'ordine di selezione
          setSelectedOrder(newSelectedOrder);

          // Se tutti i pianeti sono stati selezionati, controlla la risposta automaticamente
          if (newSelectedOrder.length === updatedPlanets.length) {
            checkAnswer(newSelectedOrder);
          }
          return updatedPlanets; // Aggiorna lo stato dei pianeti
        }
        return prevPlanets; // Nessun cambiamento se già selezionato o non trovato
      });
    } else if (currentLevelConfig.gameMode.startsWith("associate")) {
      // Logica per i livelli di associazione (Livello 4, 5)
      const clickedPlanet = planetsData.find((p) => p.id === clickedPlanetId);

      // Se il pianeta esiste ed è uno di quelli "vuoti" (value === null)
      if (clickedPlanet && clickedPlanet.value === null) {
        setActivePlanetForInput(clickedPlanetId); // Imposta quale pianeta sta ricevendo l'input
        setNumberInput(String(clickedPlanet.userInput || "")); // Prepopola l'input con il valore già inserito o una stringa vuota
      }
    }
  };

  // Funzione per controllare la risposta del livello corrente
  const checkAnswer = (orderToCheck = selectedOrder) => {
    if (!currentLevelConfig) return;

    let correct = true;

    if (
      currentLevelConfig.gameMode === "smallToBig" ||
      currentLevelConfig.gameMode === "bigToSmall"
    ) {
      // Per i livelli di ordinamento, confronta l'ordine degli ID
      if (orderToCheck.length !== currentLevelConfig.expectedOrder.length) {
        correct = false;
      } else {
        for (let i = 0; i < orderToCheck.length; i++) {
          if (orderToCheck[i] !== currentLevelConfig.expectedOrder[i]) {
            correct = false;
            break;
          }
        }
      }
    } else if (currentLevelConfig.gameMode.startsWith("associate")) {
      // Per i livelli di associazione, controlla i valori inseriti nei pianeti vuoti
      for (const planet of planetsData) {
        if (planet.value === null) {
          // Considera solo i pianeti che dovevano essere riempiti
          const expectedValue =
            currentLevelConfig.expectedAssociations[planet.id];
          // Confronta l'input dell'utente (convertito a numero) con il valore atteso
          if (parseInt(planet.userInput, 10) !== expectedValue) {
            correct = false;
            break;
          }
        }
      }
    }

    setIsCorrect(correct); // Aggiorna lo stato di correttezza
    if (correct) {
      setFeedbackMessage("Risposta esatta!");
      setScore((prevScore) => prevScore + 100); // Aumenta il punteggio
    } else {
      setFeedbackMessage("Risposta errata! Riprova!");
    }
  };

  // Gestore per l'input nel campo numerico (per Livello 4 e 5)
  const handleNumberInputChange = (e) => {
    // Permetti solo numeri (opzionale, ma buona pratica)
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      // Regex per permettere solo cifre
      setNumberInput(value);
    }
  };

  // Conferma il numero inserito dall'utente per il pianeta attivo
  const confirmNumberInput = () => {
    setPlanetsData((prevPlanets) =>
      prevPlanets.map((p) =>
        p.id === activePlanetForInput
          ? { ...p, userInput: numberInput } // Salva il numero inserito nello stato del pianeta
          : p
      )
    );
    setActivePlanetForInput(null); // Nasconde l'input panel
    setNumberInput(""); // Pulisce il campo input temporaneo
  };

  // Passa al livello successivo
  const goToNextLevel = () => {
    setCurrentLevelIndex((prevIndex) => prevIndex + 1);
  };

  // Resetta il livello corrente (ricaricandolo)
  const resetLevel = () => {
    // Resetta l'indice del livello per riattivare l'useEffect e ricaricare il livello
    setCurrentLevelIndex(currentLevelIndex);
  };

  // Se non ci sono più livelli (fine del gioco)
  if (!currentLevelConfig) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bggame2 text-white p-5 relative">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          Fine del Gioco!
        </h1>
        <p className="text-xl text-center mb-6">{feedbackMessage}</p>
        <div className="text-2xl text-blue-300">Punti Totali: {score}</div>
        <button
          onClick={() => setCurrentLevelIndex(0)} // Bottone per ricominciare dall'inizio
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-xl font-semibold"
        >
          Ricomincia
        </button>
      </div>
    );
  }

  // Renderizzazione del componente principale
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bggame2 text-white p-5 relative overflow-hidden">
      {/* Astronauta (posizione fissa in alto a destra) */}
      <img
        src="../../public/assets/immagini/Gioco2/astronauta-gioco-2.svg"
        alt="Astronauta"
        className="absolute bottom-10 right-3 w-30 h-auto md:w-32 lg:w-40"
      />

      <p className="text-lg md:text-xl text-center mb-6 max-w-2xl">
        {feedbackMessage}
      </p>

      <div className="flex flex-wrap justify-center gap-5 md:gap-8 lg:gap-10 mb-8">
        {planetsData.map((planet) => (
          <div
            key={planet.id}
            className={`
                            relative w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40
                            bg-contain bg-no-repeat bg-center
                            flex items-center justify-center
                            text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800
                            rounded-full cursor-pointer
                            border-4 border-transparent
                            transition-all duration-300 ease-in-out
                            shadow-xl
                            ${
                              planet.isSelected
                                ? "border-green-500 shadow-green-500/50"
                                : ""
                            }
                            ${planet.value === null ? "empty-planet" : ""}
                        `}
            // `style` è necessario per le immagini di sfondo dinamiche
            style={{ backgroundImage: `url(${planet.image})` }}
            onClick={() => handlePlanetClick(planet.id)}
          >
            {/* Questo span mostra il numero. Se planet.value è null, mostra planet.userInput. */}
            <span className="bg-white/70 px-3 py-1 rounded-lg text-gray-800 pointer-events-none">
              {planet.value !== null ? planet.value : planet.userInput}
            </span>
          </div>
        ))}
      </div>

      {/* UI per l'input numerico (mostrato solo se activePlanetForInput è settato) */}
      {activePlanetForInput && (
        <div className="flex gap-4 mb-8">
          <input
            type="number" // Assicura che la tastiera numerica appaia su mobile
            value={numberInput}
            onChange={handleNumberInputChange}
            placeholder="Inserisci numero"
            className="p-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
          <button
            onClick={confirmNumberInput}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold"
          >
            Conferma
          </button>
        </div>
      )}

      {/* Bottone "Controlla Risposta" per i livelli di associazione.
                Mostrato solo se siamo in modalità associazione, nessun input attivo, e la risposta non è ancora stata controllata. */}
      {currentLevelConfig.gameMode.startsWith("associate") &&
        !activePlanetForInput &&
        isCorrect === null && (
          <button
            onClick={() => checkAnswer()}
            className="px-8 py-4 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300 text-xl font-bold mb-6"
          >
            Controlla Risposta
          </button>
        )}

      {/* Feedback visivo: stella o messaggio di errore */}
      {isCorrect === true && (
        <img
          src="../../immagini/icon/stellina-active.svg"
          alt="Risposta Esatta!"
          className=" absolute w-70 h-70 md:w-24 md:h-24 lg:w-28 lg:h-28 mt-4 animate-bounce"
        />
      )}
      {isCorrect === false && (
        <p className="text-xl md:text-2xl font-bold text-red-500 mt-4 animate-pulse">
          Risposta errata! Riprova!
        </p>
      )}

      {/* Bottoni di navigazione: Prossimo livello o Riprova */}
      {isCorrect === true && (
        <button
          onClick={goToNextLevel}
          className="mt-8 px-8 py-4 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-300 text-xl font-bold"
        >
          Prossimo livello
        </button>
      )}
      {isCorrect === false && (
        <button
          onClick={resetLevel}
          className="mt-8 px-8 py-4 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-300 text-xl font-bold"
        >
          Riprova
        </button>
      )}

      <div className="text-xl md:text-2xl mt-8 text-blue-300 font-semibold">
        Punti: {score}
      </div>
    </div>
  );
}

export default GameStructure;
