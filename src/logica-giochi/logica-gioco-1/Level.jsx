import { useState } from 'react';

const Level = ({ levelNumber, question, answer, onAnswer }) => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleAnswerChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleSubmit = () => {
    if (userAnswer === answer) {
      onAnswer(true); // Risposta corretta
    } else {
      onAnswer(false); // Risposta errata
    }
  };

  return (
    <div className="bg-yellow-200 p-4 rounded shadow-md max-w-md">
      <h2 className="text-xl font-bold mb-2">Livello {levelNumber}</h2>
      <p className="mb-4">{question}</p>
      <input
        type="text"
        value={userAnswer}
        onChange={handleAnswerChange}
        placeholder="Inserisci la tua risposta"
        className="border border-gray-300 p-2 w-full mb-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Invia
      </button>
    </div>
  );
};

export default Level;

