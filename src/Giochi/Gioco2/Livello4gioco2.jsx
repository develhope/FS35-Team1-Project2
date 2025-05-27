import { useState, useEffect } from "react";

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
      id: "planet_filled_7",
      value: 7,
      image: "/immagini/Pianeti/pianeta7.svg",
      size: "w-15 h-15",
    },
    {
      id: "planet_empty_D",
      value: null,
      image: "/immagini/Pianeti/pianeta8.svg",
      size: "w-15 h-15",
    },
    {
      id: "planet_empty_E",
      value: null,
      image: "/immagini/Pianeti/pianeta9.svg",
      size: "w-15 h-15",
    },
    {
      id: "planet_filled_10",
      value: 10,
      image: "/immagini/Pianeti/pianeta1.svg",
      size: "w-15 h-15",
    },
  ],
  expectedAssociations: {
    planet_empty_A: 2,
    planet_empty_B: 4,
    planet_empty_C: 5,
    planet_empty_D: 8,
    planet_empty_E: 9,
  },
};

function Livello4Gioco2({
  onLevelComplete,
  onLevelFail,
  setScore,
  isGameFeedbackActive,
}) {
  const [planetsData, setPlanetsData] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState(
    levelConfig.instructions
  );
  const [activePlanetForInput, setActivePlanetForInput] = useState(null); // ID del pianeta su cui si sta inserendo il numero
  const [numberInput, setNumberInput] = useState(""); // Valore temporaneo dell'input numerico
  const [levelStatus, setLevelStatus] = useState(null);

  useEffect(() => {
    const initialPlanets = levelConfig.planets.map((p) => ({
      ...p,
      isSelected: false,
      userInput: p.value !== null ? String(p.value) : "", // userInput sarà una stringa per l'input HTML
    }));
    setPlanetsData(initialPlanets);
    setFeedbackMessage(levelConfig.instructions);
    setActivePlanetForInput(null);
    setNumberInput("");
    setLevelStatus(null);
  }, [isGameFeedbackActive]);

  const handlePlanetClick = (clickedPlanetId) => {
    if (levelStatus !== null) {
      return;
    }

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
  };

  const handleNumberInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setNumberInput(value);
    }
  };

  const confirmNumberInput = () => {
    setPlanetsData((prevPlanets) =>
      prevPlanets.map((p) =>
        p.id === activePlanetForInput ? { ...p, userInput: numberInput } : p
      )
    );
    setActivePlanetForInput(null);
    setNumberInput("");
  };

  const checkAnswer = () => {
    let correct = true;
    for (const planet of planetsData) {
      if (planet.value === null) {
        const expectedValue = levelConfig.expectedAssociations[planet.id];
        if (parseInt(planet.userInput, 10) !== expectedValue) {
          correct = false;
          break;
        }
      }
    }

    if (correct) {
      setFeedbackMessage("Corretto! Ottimo lavoro!");
      setLevelStatus("correct");
      setScore((prevScore) => prevScore + 100);
      onLevelComplete();
    } else {
      setFeedbackMessage("Risposta errata! Riprova!");
      setLevelStatus("incorrect");
      onLevelFail();
    }
  };

  return (
    <>
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
              ${planet.value === null ? "empty-planet" : ""}
            `}
            style={{ backgroundImage: `url(${planet.image})` }}
            onClick={() => handlePlanetClick(planet.id)}
          >
            <span className="bg-white/40 px-1 rounded-lg text-gray-800 pointer-events-none">
              {planet.value !== null ? planet.value : planet.userInput}
            </span>
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
            className="pl-2 px-3 py-2 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300 text-ms font-bold"
          >
            Controlla Risposta
          </button>
        )}
      </div>
    </>
  );
}

export default Livello4Gioco2;
