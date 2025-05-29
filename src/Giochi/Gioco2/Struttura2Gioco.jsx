// Struttura2Gioco.jsx
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Star from "../../Components/Star";
import HeaderGioco2 from "./HeaderGioco2.jsx";
import { PointsContext } from "../../PointsContext.jsx";
import HeaderFineLivelli from "../../Components/HeaderFineLivelli.jsx"; // Assicurati di avere questo componente

const Struttura2Gioco = ({
  levelConfig,
  prossimoLivelloLink,
  isFinalLevel = false,
}) => {
  const { points, setPoints } = useContext(PointsContext);
  const navigate = useNavigate();

  const [planetsData, setPlanetsData] = useState(levelConfig.planets.map(p => ({ ...p, isSelected: false, userInput: '' })));
  const [selectedOrder, setSelectedOrder] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState(levelConfig.instructions);
  const [levelStatus, setLevelStatus] = useState(null); // 'correct', 'incorrect', null
  const [activePlanetForInput, setActivePlanetForInput] = useState(null); // Per i livelli di associazione
  const [numberInput, setNumberInput] = useState(""); // Per i livelli di associazione

  // Reset del livello
  const resetLevel = () => {
    setPlanetsData(levelConfig.planets.map(p => ({ ...p, isSelected: false, userInput: '' })));
    setSelectedOrder([]);
    setFeedbackMessage(levelConfig.instructions);
    setLevelStatus(null);
    setActivePlanetForInput(null);
    setNumberInput("");
  };

  useEffect(() => {
    resetLevel(); // Resetta lo stato quando il componente viene montato o levelConfig cambia (per garantire un reset completo ad ogni cambio livello)
  }, [levelConfig]); // Dipendenza da levelConfig per resettare il gioco ad ogni nuovo livello

  const handlePlanetClick = (planetId) => {
    if (levelStatus !== null) return; // Non permette interazioni se il livello è già completato o fallito

    if (levelConfig.gameMode === "smallToBig" || levelConfig.gameMode === "bigToSmall") {
      setPlanetsData((prevPlanets) =>
        prevPlanets.map((planet) =>
          planet.id === planetId ? { ...planet, isSelected: !planet.isSelected } : planet
        )
      );

      setSelectedOrder((prevOrder) => {
        if (prevOrder.includes(planetId)) {
          return prevOrder.filter((id) => id !== planetId);
        } else {
          return [...prevOrder, planetId];
        }
      });
    } else if (levelConfig.gameMode === "associateNumbersAsc" || levelConfig.gameMode === "associateNumbersDesc") {
        const planetToSelect = planetsData.find(p => p.id === planetId);

        if (planetToSelect.value !== null) {
            setFeedbackMessage("Questo pianeta ha già un numero!");
            setTimeout(() => setFeedbackMessage(levelConfig.instructions), 1500);
            return;
        }

        // Deseleziona il pianeta precedentemente attivo
        setPlanetsData((prevPlanets) =>
            prevPlanets.map((p) =>
                p.isSelected ? { ...p, isSelected: false } : p
            )
        );

        // Seleziona il nuovo pianeta e abilita l'input
        setPlanetsData((prevPlanets) =>
            prevPlanets.map((p) =>
                p.id === planetId ? { ...p, isSelected: true } : p
            )
        );
        setActivePlanetForInput(planetId);
        setNumberInput("");
        setFeedbackMessage("Inserisci il numero per il pianeta selezionato.");
    }
  };

  const handleNumberInputChange = (e) => {
    setNumberInput(e.target.value);
  };

  const confirmNumberInput = () => {
    if (!activePlanetForInput || numberInput === "") {
        setFeedbackMessage("Seleziona un pianeta vuoto e inserisci un numero.");
        setTimeout(() => setFeedbackMessage(levelConfig.instructions), 1500);
        return;
    }

    const value = parseInt(numberInput, 10);
    if (isNaN(value)) {
        setFeedbackMessage("Per favore, inserisci un numero valido.");
        setTimeout(() => setFeedbackMessage(levelConfig.instructions), 1500);
        return;
    }

    setPlanetsData((prevPlanets) =>
        prevPlanets.map((planet) =>
            planet.id === activePlanetForInput
                ? { ...planet, userInput: value, isSelected: false }
                : { ...planet, isSelected: false } // Deseleziona tutti gli altri
        )
    );
    setActivePlanetForInput(null);
    setNumberInput("");
    setFeedbackMessage(levelConfig.instructions); // Ripristina l'istruzione

    // Aggiungi il pianeta con il numero inserito all'ordine selezionato per il check finale
    setSelectedOrder((prevOrder) => {
        const existingIndex = prevOrder.findIndex(item => typeof item === 'object' && item.id === activePlanetForInput);
        const newPlanetInfo = { id: activePlanetForInput, value: value };

        if (existingIndex > -1) {
            const newOrder = [...prevOrder];
            newOrder[existingIndex] = newPlanetInfo;
            return newOrder;
        } else {
            return [...prevOrder, newPlanetInfo];
        }
    });
  };

  const checkAnswer = () => {
    let isCorrect = false;

    if (levelConfig.gameMode === "smallToBig" || levelConfig.gameMode === "bigToSmall") {
      isCorrect =
        selectedOrder.length === levelConfig.expectedOrder.length &&
        selectedOrder.every((id, index) => id === levelConfig.expectedOrder[index]);
    } else if (levelConfig.gameMode === "associateNumbersAsc" || levelConfig.gameMode === "associateNumbersDesc") {
        // Mappa i pianeti attuali per ottenere i loro ID e i valori finali (iniziale o inserito dall'utente)
        // Non riordinarli qui, li confronteremo direttamente con l'ordine atteso.
        const currentPlanetStates = planetsData.map(p => ({
            id: p.id,
            value: p.value !== null ? p.value : p.userInput
        }));

        // Verifica che ogni elemento in expectedOrder sia presente e corretto in currentPlanetStates
        isCorrect = levelConfig.expectedOrder.every(expectedPlanet => {
            const foundPlanet = currentPlanetStates.find(p => p.id === expectedPlanet.id);
            // Controlla se il pianeta è stato trovato e se il suo valore corrisponde a quello atteso
            return foundPlanet && foundPlanet.value === expectedPlanet.value;
        });

        // Aggiungi un controllo per assicurarti che non ci siano valori 'null' o 'undefined' dove non dovrebbero
        // E che tutti i campi vuoti che dovevano essere riempiti siano stati riempiti
        const allUserInputsProvided = levelConfig.planets
            .filter(p => p.value === null) // Solo i pianeti che erano inizialmente vuoti
            .every(emptyPlanet => {
                const filledPlanet = currentPlanetStates.find(p => p.id === emptyPlanet.id);
                return filledPlanet && filledPlanet.value !== null && filledPlanet.value !== '';
            });

        isCorrect = isCorrect && allUserInputsProvided;

        // Opzionale: puoi anche controllare che l'utente non abbia inserito numeri in pianeti già riempiti
        // Anche se la UI dovrebbe prevenire questo.
    }

    if (isCorrect) {
      setFeedbackMessage("Corretto! Ottimo lavoro!");
      setLevelStatus("correct");
      setPoints((prevPoints) => prevPoints + 50); // Aggiunge punti
    } else {
      setFeedbackMessage("Risposta errata! Riprova!");
      setLevelStatus("incorrect");
    }
  };

  const goToNextLevel = () => {
    if (isFinalLevel) {
      navigate("/vittoriagioco2"); // O il percorso desiderato per la schermata finale del gioco 2
    } else {
      navigate(prossimoLivelloLink);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bggame2 text-white p-5 relative overflow-hidden">
      
      <img
        src="/assets/immagini/Gioco2/astronauta-gioco-2.svg"
        alt="Astronauta"
        className="absolute z-50 right-1 bottom-5 w-35 h-auto md:w-32 lg:w-40"
      />

        <div className="bg-white rounded-xl border-amber-400 border-4 h-125 w-80 mt-10 flex flex-col items-center relative">
        {levelStatus === "correct" && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
            <div className="scale-75 md:scale-90">
              <Star />
            </div>
          </div>
        )}

        {/* Header per la fine dei livelli, se è il livello finale e la risposta è corretta */}
        {isFinalLevel && levelStatus === "correct" && (
          <HeaderFineLivelli
            title="Complimenti, hai completato tutti i livelli!"
            buttonText="Torna alla Home"
            buttonLink="/"
            currentScore={points}
          />
        )}

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
                ${planet.isSelected ? "border-green-500 shadow-green-500/50" : ""}
              `}
              style={{ backgroundImage: `url(${planet.image})` }}
              onClick={() => handlePlanetClick(planet.id)}
            >
              <p>{planet.value}</p>
              {(levelConfig.gameMode === "associateNumbersAsc" || levelConfig.gameMode === "associateNumbersDesc") && (
                  <span className="absolute">
                      {planet.value !== null ? planet.value : (planet.userInput !== '' ? planet.userInput : '')}
                  </span>
              )}
            </div>
          ))}
        </div>

        {activePlanetForInput && levelStatus === null && (
          <div className="flex gap-2 w-full pl-2">
            <input
              type="number"
              value={numberInput}
              onChange={handleNumberInputChange}
              placeholder="Inserisci"
              className={`p-2 w-24 text-sm text-center rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 ${
                planetsData.find((p) => p.id === activePlanetForInput)?.isSelected
                  ? "border-green-500 shadow-green-500/50"
                  : ""
              }`}
            />
            <button
              onClick={confirmNumberInput}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-sm font-semibold"
            >
              Conferma
            </button>
          </div>
        )}

        <div className="flex w-full pl-2">
          {!activePlanetForInput && levelStatus === null && (
            <button
              onClick={checkAnswer}
              className="pl-2 px-3 py-2 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300 text-xl font-semibold mt-4"
            >
              Controlla Risposta
            </button>
          )}

          {levelStatus === "correct" && !isFinalLevel && (
            <button
              onClick={goToNextLevel}
              className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 text-xl font-semibold mt-4"
            >
              Prossimo livello
            </button>
          )}

          {levelStatus === "correct" && isFinalLevel && (
            <button
              onClick={goToNextLevel}
              className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 text-xl font-semibold mt-4"
            >
              Hai vinto!
            </button>
          )}

          {levelStatus === "incorrect" && (
            <button
              onClick={resetLevel}
              className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300 text-xl font-semibold mt-4"
            >
              Riprova
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Struttura2Gioco;