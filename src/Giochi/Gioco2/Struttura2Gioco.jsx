import { useState, useEffect } from "react";
import { GAME_LEVELS } from "./levelsConfig";
import Star from "../../Components/Star";

function GameStructure() {
  
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0); // 0 = Livello 1
  const [planetsData, setPlanetsData] = useState([]); // Dati di tutti i pianeti nel livello
  const [selectedOrder, setSelectedOrder] = useState([]); // Per i livelli di ordinamento (Livello 1,2,3)
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(null); // null (nessun controllo), true (corretto), false (errato)
  const [score, setScore] = useState(0);
  const [resetFlag, setResetFlag] = useState(false);

  // Stato specifico per la gestione dell'input nei livelli di associazione (Livello 4,5)
  const [activePlanetForInput, setActivePlanetForInput] = useState(null); // ID del pianeta su cui si sta inserendo il numero
  const [numberInput, setNumberInput] = useState(""); // Valore temporaneo dell'input numerico

  // serve per la configurazione del livello corrente
  const currentLevelConfig = GAME_LEVELS[currentLevelIndex];

  //inizializza o resetta il livello quando currentLevelIndex cambia
  useEffect(() => {
    if (!currentLevelConfig) {
      setFeedbackMessage("Congratulazioni! Hai completato tutti i livelli!");
      setPlanetsData([]); // Pulisci i pianeti quando il gioco finisce
      return;
    }

    //resetta tutti gli stati specifici del livello
    setSelectedOrder([]);
    setIsCorrect(null);
    setFeedbackMessage(currentLevelConfig.instructions);
    setActivePlanetForInput(null); 
    setNumberInput("");

    //inserisco 'isSelected' e 'userInput' (per i pianeti vuoti) a ogni oggetto pianeta.
    const initialPlanets = currentLevelConfig.planets.map((p) => ({
      ...p,
      isSelected: false, // indica se sono stati cliccati
      userInput: p.value !== null ? String(p.value) : "", //userInput sarà una stringa per l'input HTML
    }));
    setPlanetsData(initialPlanets);
  }, [currentLevelIndex, currentLevelConfig, resetFlag]); //si riesegue quando l'indice del livello o la configurazione cambiano

  // Gestore del click su un pianeta
  const handlePlanetClick = (clickedPlanetId) => {
    if (!currentLevelConfig) return; //gli diciamo di non fare nulla se il gioco è finito

    if (
      currentLevelConfig.gameMode === "smallToBig" ||
      currentLevelConfig.gameMode === "bigToSmall"
    ) {
      //logica per i livelli di ordinamento (Livello 1, 2, 3)
      setPlanetsData((prevPlanets) => {
        const clickedPlanet = prevPlanets.find((p) => p.id === clickedPlanetId);

        //se il pianeta esiste e non è già stato selezionato
        if (clickedPlanet && !clickedPlanet.isSelected) {
          const updatedPlanets = prevPlanets.map((p) =>
            p.id === clickedPlanetId
              ? { ...p, isSelected: true } // allora devi marcare il pianeta come selezionato
              : p
          );
          const newSelectedOrder = [...selectedOrder, clickedPlanetId]; //aggiungono all'ordine di selezione
          setSelectedOrder(newSelectedOrder);

          //se tutti i pianeti sono stati selezionati, controlla la risposta automaticamente
          if (newSelectedOrder.length === updatedPlanets.length) {
            checkAnswer(newSelectedOrder);
          }
          return updatedPlanets; //aggiorna lo stato dei pianeti
        }
        return prevPlanets; //non deve dare nessun cambiamento se già selezionato o non trovato il pianeta
      });
      //qui gestisco l'ombra nei pianeti nel momento in cui vengono selezionati
    } else if (currentLevelConfig.gameMode.startsWith("associate")) {
      setPlanetsData((prevPlanets) =>
        prevPlanets.map((p) =>
          p.id === clickedPlanetId ? { ...p, isSelected: true } : p
        )
      );

      const clickedPlanet = planetsData.find((p) => p.id === clickedPlanetId);
      if (clickedPlanet && clickedPlanet.value === null) {
        setActivePlanetForInput(clickedPlanetId);
        setNumberInput(String(clickedPlanet.userInput || ""));
      }
    }
  };

  //funzione per controllare la risposta del livello corrente
  const checkAnswer = (orderToCheck = selectedOrder) => {
    if (!currentLevelConfig) return;

    let correct = true;

    if (
      currentLevelConfig.gameMode === "smallToBig" ||
      currentLevelConfig.gameMode === "bigToSmall"
    ) {
      //per i livelli di ordinamento, confronta l'ordine degli ID
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
      //per i livelli di associazione, controlla i valori inseriti nei pianeti vuoti
      for (const planet of planetsData) {
        if (planet.value === null) {
          //considera solo i pianeti che dovevano essere riempiti
          const expectedValue =
            currentLevelConfig.expectedAssociations[planet.id];
          //confronta l'input dell'utente (convertito a numero) con il valore atteso
          if (parseInt(planet.userInput, 10) !== expectedValue) {
            correct = false;
            break;
          }
        }
      }
    }

    setIsCorrect(correct); //aggiorna lo stato di correttezza
    if (correct) {
      setScore((prevScore) => prevScore + 100); //aumenta il punteggio
    } else {
      setFeedbackMessage("Risposta errata! Riprova!");
    }
  };

  //gestore per l'input nel campo numerico (per Livello 4 e 5)
  const handleNumberInputChange = (e) => {
    //permette di inserire solo numeri
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      // Regex per permettere solo cifre
      setNumberInput(value);
    }
  };

  //conferma il numero inserito dall'utente per il pianeta attivo
  const confirmNumberInput = () => {
    setPlanetsData((prevPlanets) =>
      prevPlanets.map((p) =>
        p.id === activePlanetForInput
          ? { ...p, userInput: numberInput } //salva il numero inserito nello stato del pianeta
          : p
      )
    );
    setActivePlanetForInput(null); //nasconde l'input panel
    setNumberInput(""); //pulisce il campo input temporaneo
  };

  //passa al livello successivo
  const goToNextLevel = () => {
    setCurrentLevelIndex((prevIndex) => prevIndex + 1);
  };

  //resetta il livello corrente (ricaricandolo)
  const resetLevel = () => {
    setResetFlag((prev) => !prev); //inverte il flag ogni volta
  };

  //se non ci sono più livelli (ultimissima pagina)
  if (!currentLevelConfig) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bggame2 text-white p-5 relative">
        <img
          src="/assets/immagini/Gioco2/astronauta biondo su pianeta.svg"
          alt="astronauta vincente"
          className=" absolute w-45 top-20"
        />
        <h1 className="z-50 mt-75 text-3xl font-bold text-white mb-4">
          Complimenti!
        </h1>
        <p className="z-50 text-l text-center mb-6">
          Grazie a te Marco ha ritrovato tutti i numeri persi nell’universo!
        </p>
        <p className=" z-50 text-l text-center mb-6 ">
          Hai raccolto {score} punti, corri a comprare la tua nuova skin!
        </p>
        <div className="z-50 text-2xl text-blue-100">Punti Totali: {score}</div>
        <div className="flex gap-10">
          <button
            onClick={() => setCurrentLevelIndex(0)} //bottone che deve portare alla pagina dove ci sono tutti i livelli e giochi
            className="mt-8 px-6 py-3 bg-yellow-400 text-black rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-xl font-semibold"
          >
            Ricomincia
          </button>
          <button
            onClick={() => setCurrentLevelIndex(0)} //bottone che deve portare allo shop
            className="mt-8 px-6 py-3 bg-yellow-400 text-black rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-xl font-semibold"
          >
            Shop
          </button>
        </div>
      </div>
    );
  }

  // Renderizzazione del componente principale
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bggame2 text-white p-5 relative overflow-hidden">
      <div className="bg-white rounded-xl border-amber-400 border-4 h-125 w-80 mt-20">
        {/* Astronauta (posizione fissa in basso a destra) */}
        <img
          src="../../public/assets/immagini/Gioco2/astronauta-gioco-2.svg"
          alt="Astronauta"
          className="absolute bottom-5 right-1 w-35 h-auto md:w-32 lg:w-40"
        />

        <p className="text-black text-sm p-5 md:text-xl text-center mb-3 max-w-2xl">
          {feedbackMessage}
        </p>

        <div className="flex flex-wrap justify-center gap-5 md:gap-8 lg:gap-10 mb-8">
          {planetsData.map((planet) => (
            <div
              key={planet.id}
              className={`
                            relative md:w-36 md:h-36 lg:w-40 lg:h-40
                            bg-contain bg-no-repeat bg-center
                            flex items-center justify-center
                            text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800
                            rounded-full cursor-pointer
                            border-4 border-transparent
                            transition-all duration-300 ease-in-out
                            shadow-xl
                            ${planet.size}
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
              <span className="bg-white/40 px-1  rounded-lg text-gray-800 pointer-events-none">
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
              placeholder="Inserisci"
              className={`ml-2 p-1 w-20 text-sm text-center rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 ${
                activePlanetForInput?.isSelected
                  ? "border-green-500 shadow-green-500/50"
                  : ""
              }`}
            />
            <button
              onClick={confirmNumberInput}
              className=" bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-sm p-2 font-semibold"
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
              className="ml-2 p-2 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300 text-ms font-bold mb-6"
            >
              Controlla Risposta
            </button>
          )}

        {/* Feedback visivo: stella o messaggio di errore */}
        {isCorrect === true && (
          <div className="absolute top-50 left-1/2 transform -translate-x-1/2 -translate-y-[40%] z-50 pointer-events-none">
            <div className="scale-75 md:scale-90">
              <Star />
            </div>
          </div>
        )}
        {isCorrect === false && (
          <p className="pl-2 text-l md:text-2xl font-bold text-red-500 mt-4 animate-pulse">
            Risposta errata! Riprova!
          </p>
        )}

        {/* Bottoni di navigazione: Prossimo livello o Riprova */}
        {isCorrect === true && (
          <button
            onClick={goToNextLevel}
            className="ml-2 mt-8 px-4 py-2 bg-orange-400 text-white rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-300 text-l font-bold"
          >
            Prossimo livello
          </button>
        )}
        {isCorrect === false && (
          <button
            onClick={resetLevel}
            className="m-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-300 text-xl font-bold"
          >
            Riprova
          </button>
        )}

        <div className="text-l md:text-2xl mt-2 pl-2 text-blue-300 font-semibold">
          Punti: {score}
        </div>
      </div>
    </div>
  );
}

export default GameStructure;
