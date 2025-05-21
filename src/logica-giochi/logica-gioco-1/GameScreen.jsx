import { useState } from "react";
import Level from "./Level";
import Astronauts from "./Astronauts";
import { UserContext } from "../../UserContext";
import "../../game.css";

const levelsData = [
  { number: 1, question: "Quante mele ci sono?", answer: "3" },
  { number: 2, question: "Quanti fiori ci sono?", answer: "5" },
  { number: 3, question: "Quanti libri ci sono?", answer: "2" },
];

function GameScreen() {
  const [currentLevel, setCurrentLevel] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCurrentLevel((prevLevel) => prevLevel + 1);
    } else {
      alert("Risposta errata! Riprova.");
    }
  };

  const currentLevelData = levelsData[currentLevel];

  return (
    <>
      {/*  <div className="bg-blue-100 min-h-screen flex flex-col items-center justify-center">
      <Astronauts level={currentLevel} totalLevels={levelsData.length} />
      {currentLevel < levelsData.length ? (
        <Level
          levelNumber={currentLevelData.number}
          question={currentLevelData.question}
          answer={currentLevelData.answer}
          onAnswer={handleAnswer}
        />
      ) : (
        <div className="bg-green-200 p-4 rounded shadow-md max-w-md">
          <h2 className="text-2xl font-bold mb-2">Hai vinto!</h2>
          <p>Gli astronauti si sono incontrati!</p>
        </div>
      )}
    </div> */}

      <div className="w-screen h-screen overflow-hidden bggame1">
        
      </div>
    </>
  );
}

export default GameScreen;
