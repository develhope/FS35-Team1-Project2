import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import StarAnimation from "../../Components/StarAnimation";
import { PointsContext } from "../../PointsContext.jsx";
import { UserContext } from "../../UserContext.jsx";

const Struttura2Gioco = ({
  levelConfig,
  prossimoLivelloLink,
  isFinalLevel = false,
}) => {
  const { points, setPoints } = useContext(PointsContext);
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const _ = userData; // Assegna userData a una variabile temporanea '_' per evitare errori da eslint

  // Estrai gameId e levelId dalla URL e CONVERTI levelId in numero
  const match = location.pathname.match(/\/livello(\d+)gioco(\d+)/);
  const currentLevelId = match ? parseInt(match[1], 10) : null; // <--- MODIFICA QUI
  const currentGameId = match ? `game${match[2]}` : null;

  const [planetsData, setPlanetsData] = useState(
    levelConfig.planets.map((p) => ({ ...p, isSelected: false, userInput: "" }))
  );
  const [selectedOrder, setSelectedOrder] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState(
    levelConfig.instructions
  );
  const [levelStatus, setLevelStatus] = useState(null); // 'correct', 'incorrect', null
  const [activePlanetForInput, setActivePlanetForInput] = useState(null);
  const [numberInput, setNumberInput] = useState("");

  const resetLevel = () => {
    setPlanetsData(
      levelConfig.planets.map((p) => ({
        ...p,
        isSelected: false,
        userInput: "",
      }))
    );
    setSelectedOrder([]);
    setFeedbackMessage(levelConfig.instructions);
    setLevelStatus(null);
    setActivePlanetForInput(null);
    setNumberInput("");
    setFeedbackMessage(levelConfig.instructions);
  };

  useEffect(() => {
    resetLevel();
  }, [levelConfig]);

  const handlePlanetClick = (planetId) => {
    if (levelStatus !== null) return;

    if (
      levelConfig.gameMode === "smallToBig" ||
      levelConfig.gameMode === "bigToSmall"
    ) {
      setPlanetsData((prevPlanets) =>
        prevPlanets.map((planet) =>
          planet.id === planetId
            ? { ...planet, isSelected: !planet.isSelected }
            : planet
        )
      );

      setSelectedOrder((prevOrder) => {
        if (prevOrder.includes(planetId)) {
          return prevOrder.filter((id) => id !== planetId);
        } else {
          return [...prevOrder, planetId];
        }
      });
    } else if (
      levelConfig.gameMode === "associateNumbersAsc" ||
      levelConfig.gameMode === "associateNumbersDesc"
    ) {
      const planetToSelect = planetsData.find((p) => p.id === planetId);

      if (planetToSelect.value !== null) {
        setTimeout(() => setFeedbackMessage(levelConfig.instructions), 1500);
        return;
      }

      setPlanetsData((prevPlanets) =>
        prevPlanets.map((p) => (p.isSelected ? { ...p, isSelected: false } : p))
      );

      setPlanetsData((prevPlanets) =>
        prevPlanets.map((p) =>
          p.id === planetId ? { ...p, isSelected: true } : p
        )
      );
      setActivePlanetForInput(planetId);
      setNumberInput("");
    }
  };

  const handleNumberInputChange = (e) => {
    setNumberInput(e.target.value);
  };

  const confirmNumberInput = () => {
    if (!activePlanetForInput || numberInput === "") {
      setTimeout(() => setFeedbackMessage(levelConfig.instructions), 1500);
      return;
    }

    const value = parseInt(numberInput, 10);
    if (isNaN(value)) {
      setTimeout(() => setFeedbackMessage(levelConfig.instructions), 1500);
      return;
    }

    setPlanetsData((prevPlanets) =>
      prevPlanets.map((planet) =>
        planet.id === activePlanetForInput
          ? { ...planet, userInput: value, isSelected: false }
          : { ...planet, isSelected: false }
      )
    );
    setActivePlanetForInput(null);
    setNumberInput("");
    setFeedbackMessage(levelConfig.instructions);

    setSelectedOrder((prevOrder) => {
      const existingIndex = prevOrder.findIndex(
        (item) => typeof item === "object" && item.id === activePlanetForInput
      );
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

    if (
      levelConfig.gameMode === "smallToBig" ||
      levelConfig.gameMode === "bigToSmall"
    ) {
      isCorrect =
        selectedOrder.length === levelConfig.expectedOrder.length &&
        selectedOrder.every(
          (id, index) => id === levelConfig.expectedOrder[index]
        );
    } else if (
      levelConfig.gameMode === "associateNumbersAsc" ||
      levelConfig.gameMode === "associateNumbersDesc"
    ) {
      const currentPlanetStates = planetsData.map((p) => ({
        id: p.id,
        value: p.value !== null ? p.value : p.userInput,
      }));

      isCorrect = levelConfig.expectedOrder.every((expectedPlanet) => {
        const foundPlanet = currentPlanetStates.find(
          (p) => p.id === expectedPlanet.id
        );
        return foundPlanet && foundPlanet.value === expectedPlanet.value;
      });

      const allUserInputsProvided = levelConfig.planets
        .filter((p) => p.value === null)
        .every((emptyPlanet) => {
          const filledPlanet = currentPlanetStates.find(
            (p) => p.id === emptyPlanet.id
          );
          return (
            filledPlanet &&
            filledPlanet.value !== null &&
            filledPlanet.value !== ""
          );
        });

      isCorrect = isCorrect && allUserInputsProvided;
    }

    if (isCorrect) {
      setLevelStatus("correct");
      setPoints((prevPoints) => prevPoints + 50);

      if (currentGameId && currentLevelId) {
        setUserData((prevUserData) => {
          const newCompletedLevels = { ...prevUserData.completedLevels };
          if (!newCompletedLevels[currentGameId]) {
            newCompletedLevels[currentGameId] = {};
          }
          newCompletedLevels[currentGameId][currentLevelId] = true;
          return {
            ...prevUserData,
            completedLevels: newCompletedLevels,
          };
        });
      }
    } else {
      setLevelStatus("incorrect");
    }
  };

  const goToNextLevel = () => {
    if (isFinalLevel) {
      navigate("/vittoriagioco2");
    } else {
      navigate(prossimoLivelloLink);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bggame2 text-white p-5 relative overflow-hidden">
      <img
        src="/assets/immagini/Gioco2/astronauta-gioco-2.svg"
        alt="Astronauta"
        className="absolute z-50 right-1 bottom-4 w-30 h-auto md:w-55 md:bottom-20 md:right-2 lg:w-55"
      />

      <div className="bg-white rounded-xl border-amber-400 border-4 h-125 w-80 md:h-190 md:w-130 mt-3 flex flex-col items-center relative">
        {levelStatus === "correct" && (
          <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <StarAnimation />
          </div>
        )}

        <p className="text-black text-sm p-5 md:text-xl text-center mb-3 max-w-2xl">
          {feedbackMessage}
        </p>

        <div className="flex flex-wrap justify-center gap-5 md:gap-10 lg:gap-10 mb-8">
          {planetsData.map((planet) => (
            <div
              key={planet.id}
              className={`
                relative w-20 h-20 md:w-30 md:h-30 lg:w-25 lg:h-25
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
                    ? "border-green-900 shadow-green-500/80"
                    : ""
                }
              `}
              style={{ backgroundImage: `url(${planet.image})` }}
              onClick={() => handlePlanetClick(planet.id)}
            >
              {(planet.value !== null || planet.userInput !== "") && (
                <p className="bg-gray-300/70 w-10 h-13 md:w-10 md:h-15 rounded-2xl flex items-center justify-center">
                  {planet.value !== null ? planet.value : planet.userInput}
                </p>
              )}
            </div>
          ))}
        </div>

        {activePlanetForInput && levelStatus === null && (
          <div className="flex md:justify-center gap-2 w-full pl-2 md:mt-8">
            <input
              type="number"
              value={numberInput}
              onChange={handleNumberInputChange}
              placeholder="Inserisci"
              className={`p-2 w-24 text-sm md:w-35 text-center rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 ${
                planetsData.find((p) => p.id === activePlanetForInput)
                  ?.isSelected
                  ? "border-green-700 shadow-green-900/80"
                  : ""
              }`}
            />
            <button
              onClick={confirmNumberInput}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-sm md:text-2xl font-semibold"
            >
              Conferma
            </button>
          </div>
        )}

        <div className="flex w-full justify-center">
          {!activePlanetForInput && levelStatus === null && (
            <button
              onClick={checkAnswer}
              className="absolute bottom-5 px-1 py-2 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300 text-ms md:text-2xl md:bottom-5 md:px-3 md:py-3 font-semibold mt-4"
            >
              Controlla Risposta
            </button>
          )}

          {levelStatus === "correct" && !isFinalLevel && (
            <button
              onClick={goToNextLevel}
              className="absolute z-50 bottom-5 px-1 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 text-ms md:text-2xl md:bottom-5 md:px-3 md:py-3 font-semibold mt-4"
            >
              Prossimo livello
            </button>
          )}

          {levelStatus === "correct" && isFinalLevel && (
            <button
              onClick={goToNextLevel}
              className="z-50 px-4 py-2 bottom-5 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 text-xl font-semibold mt-4"
            >
              Hai vinto!
            </button>
          )}

          {levelStatus === "incorrect" && (
            <>
              <div className="w-45 md:w-64 text-l md:text-2xl font-bold text-red-500 mt-1 animate-pulse absolute top-100 md:top-158 left-22 md:left-38">
                <span className="">Risposta errata!</span>
              </div>
              <button
                onClick={resetLevel}
                className="absolute px-6 py-3 bottom-5 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300 text-sm md:text-2xl font-semibold mt-1"
              >
                Riprova
              </button>
            </>
          )}
        </div>
      </div>
      <p className="absolute top-150 left-8 text-white md:text-2xl md:top-235 md:left-32">
        Hai raccolto <span className="text-yellow-300">{points}</span> punti
      </p>
    </div>
  );
};

export default Struttura2Gioco;
