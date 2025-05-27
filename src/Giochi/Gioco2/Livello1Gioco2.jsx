import { useEffect, useState } from "react";
import GameStructure from "./Struttura2Gioco"

const levelConfig = {
  level: 1,
  gameMode: "smallToBig",
  instructions: `Metti in ordine dal numero più piccolo al più grande. Clicca sui pianeti per selezionarli.`,
  planets: [
    {
      id: "planet_4",
      value: 4,
      image: "/immagini/Pianeti/pianeta4.svg",
      size: "w-24 h-24",
    },
    {
      id: "planet_1",
      value: 1,
      image: "/immagini/Pianeti/pianeta1.svg",
      size: "w-24 h-24",
    },
    {
      id: "planet_2",
      value: 2,
      image: "/immagini/Pianeti/pianeta6.svg",
      size: "w-24 h-24",
    },
    {
      id: "planet_3",
      value: 3,
      image: "/immagini/Pianeti/pianeta3.svg",
      size: "w-24 h-24",
    },
  ],
  expectedOrder: ["planet_1", "planet_2", "planet_3", "planet_4"],
};

function Livello1Gioco2({
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
  const [levelStatus, setLevelStatus] = useState(null); // null, 'correct', 'incorrect'

  // Inizializza il livello quando il componente viene montato o "resettato"
  useEffect(() => {
    const initialPlanets = levelConfig.planets.map((p) => ({
      ...p,
      isSelected: false,
    }));
    setPlanetsData(initialPlanets);
    setSelectedOrder([]);
    setFeedbackMessage(levelConfig.instructions);
    setLevelStatus(null); // Resetta lo stato del livello
  }, [isGameFeedbackActive]); // Riesegui quando il feedback globale viene attivato/disattivato

  const handlePlanetClick = (clickedPlanetId) => {
    // Impedisci click se il livello è già stato completato/fallito e il feedback è attivo
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
    console.log("Utilizzo di checkAnswer")
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
      setScore((prevScore) => prevScore + 50); // Aggiorna il punteggio globale
      onLevelComplete(); // Notifica il componente padre
    } else {
      setFeedbackMessage("Risposta errata! Riprova!");
      setLevelStatus("incorrect");
      onLevelFail(); // Notifica il componente padre
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

export default Livello1Gioco2;
