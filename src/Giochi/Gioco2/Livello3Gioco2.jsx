import { useState, useEffect } from "react";

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
      image: "/immagini/Pianeti/pianeta4.svg",
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

function Livello3Gioco2({
  onLevelComplete,
  onLevelFail,
  setScore,
  isGameFeedbackActive,
}) {
  const [planetsData, setPlanetsData] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState(
    levelConfig.instructions
  );
  const [levelStatus, setLevelStatus] = useState(null);

  useEffect(() => {
    const initialPlanets = levelConfig.planets.map((p) => ({
      ...p,
      isSelected: false,
    }));
    setPlanetsData(initialPlanets);
    setSelectedOrder([]);
    setFeedbackMessage(levelConfig.instructions);
    setLevelStatus(null);
  }, [isGameFeedbackActive]);

  const handlePlanetClick = (clickedPlanetId) => {
    if (levelStatus !== null) {
      return;
    }

    setPlanetsData((prevPlanets) => {
      const clickedPlanet = prevPlanets.find((p) => p.id === clickedPlanetId);

      if (clickedPlanet && !clickedPlanet.isSelected) {
        const updatedPlanets = prevPlanets.map((p) =>
          p.id === clickedPlanetId ? { ...p, isSelected: true } : p
        );
        const newSelectedOrder = [...selectedOrder, clickedPlanetId];
        setSelectedOrder(newSelectedOrder);

        if (newSelectedOrder.length === updatedPlanets.length) {
          checkAnswer(newSelectedOrder);
        }
        return updatedPlanets;
      }
      return prevPlanets;
    });
  };

  const checkAnswer = (orderToCheck) => {
    let correct = true;
    if (orderToCheck.length !== levelConfig.expectedOrder.length) {
      correct = false;
    } else {
      for (let i = 0; i < orderToCheck.length; i++) {
        if (orderToCheck[i] !== levelConfig.expectedOrder[i]) {
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
            `}
            style={{ backgroundImage: `url(${planet.image})` }}
            onClick={() => handlePlanetClick(planet.id)}
          >
            <span className="bg-white/40 px-1 rounded-lg text-gray-800 pointer-events-none">
              {planet.value}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Livello3Gioco2;
