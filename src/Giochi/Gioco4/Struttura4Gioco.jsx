import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Star from "../../Components/Star";
import { PointsContext } from "../../PointsContext";
import { UserContext } from "../../UserContext";

const Struttura4Gioco = (props) => {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [inputValore1, setInputValore1] = useState("");
  const [inputValore2, setInputValore2] = useState("");
  const [retry, setRetry] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { points, setPoints } = useContext(PointsContext);
  const { userData, setUserData } = useContext(UserContext);

  const _ = userData;

  const match = location.pathname.match(/\/livello(\d+)gioco(\d+)/);
  const currentLevelId = match ? parseInt(match[1], 10) : null;
  const currentGameId = match ? `game${match[2]}` : null;

  const handleCheckAnswer = () => {
    const val1 = parseInt(inputValore1);
    const val2 = parseInt(inputValore2);

    if (val1 === props.rispostaCorretta1 && val2 === props.rispostaCorretta2) {
      setShowSuccess(true);
      setShowError(false);
      setRetry(false);
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
      setShowError(true);
      setShowSuccess(false);
      setRetry(true);
    }
  };

  return (
    <div className="bggame4">
      <div className="bg-white/85 rounded-xl border-amber-400 border-4 h-138 w-85 mt-20 absolute top-70 left-1/2 -translate-x-1/2 -translate-y-1/2 md:mt-60 md:h-180 md:w-180">
        <div className="flex justify-center text-center m-auto p-5 md:text-xl md:mt-2">
          <p className="text-black">
            Dimmi qual’è il riquadro con il numero più alto di oggetti! <br />
            <span className="text-sm text-gray-500 md:text-xl">
              Inizia col numero più alto, fai poi lo stesso con il numero più
              basso.
            </span>
          </p>
        </div>

        <div className="flex items-center justify-center gap-10">
          <img
            src="/assets/immagini/Gioco4/amicodinebula_1_4.svg"
            alt=""
            className="w-30 h-auto object-contain transform scale-x-[-1] md:w-44"
          />
          <div className="bg-white/50 p-5 h-30 w-30 md:h-36 md:w-36 border border-gray-300 rounded-2xl text-center flex items-center justify-center">
            {props.domanda1}
          </div>
        </div>

        <div className="flex items-center justify-center pt-5 pb-3 gap-10">
          <div className="bg-white/50 p-5 h-30 w-30 md:h-36 md:w-36 border border-gray-300 rounded-2xl text-center flex items-center justify-center">
            {props.domanda2}
          </div>
          <img
            src="/assets/immagini/Gioco4/amicodinebula_2_4.svg"
            alt=""
            className="w-25 object-contain transform md:w-36"
          />
        </div>

        <p className="justify-center text-black text-center md:text-xl md:mb-4">
          {props.condizione}
        </p>

        <div className="flex items-center justify-center gap-2">
          <input
            type="number"
            className="bg-white w-10 h-10 md:w-14 md:h-14 border border-gray-300 rounded text-center"
            value={inputValore1}
            onChange={(e) => setInputValore1(e.target.value)}
          />

          <div
            className="w-10 h-10 text-black rounded flex items-center justify-center text-4xl font-medium"
            style={{ fontFamily: "monospace" }}
          >
            {props.comparazione}
          </div>

          <input
            type="number"
            className="bg-white w-10 h-10 md:w-14 md:h-14 border border-gray-300 rounded text-center"
            value={inputValore2}
            onChange={(e) => setInputValore2(e.target.value)}
          />
        </div>

        {/* Bottone condizionato */}
        <div className="flex justify-center mt-3 md:mt-4">
          {showSuccess ? (
            <button
              className="bg-orange-600 text-white px-4 py-1 md:px-6 md:py-2 md:text-2xl rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300 text-ms"
              onClick={() => navigate(props.destinazione)}
            >
              {props.avanti || "Prossimo Livello"}
            </button>
          ) : retry ? (
            <button
              className="bg-red-500 text-white ml-20 md:ml-0 px-4 py-1 md:px-6 md:py-2 md:text-2xl rounded-lg shadow-lg hover:bg-red-600 transition-colors duration-300 text-ms"
              onClick={() => {
                setShowError(false);
                setRetry(false);
                setInputValore1("");
                setInputValore2("");
              }}
            >
              Riprova
            </button>
          ) : (
            <button
              className="bg-purple-600 text-white px-4 py-1 md:px-6 md:py-2 rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300 text-ms"
              onClick={handleCheckAnswer}
            >
              Controlla Risposta
            </button>
          )}
        </div>

        {/* Messaggi di feedback */}
        {showError && (
          <div className="flex flex-col items-center justify-center mt-4">
            <div className="text-l md:text-2xl bottom-[20px] left-2 font-bold text-red-500 mt-4 animate-pulse absolute">
              Risposta errata!
            </div>
          </div>
        )}

        {showSuccess && (
          <>
            <div className="scale-75 md:scale-150 md:top-200">
              <Star />
            </div>

            <p className="absolute top-138 left-18.5 text-white md:top-180 md:left-0 md:text-xl">
              Hai raccolto <span className="text-yellow-300">{points}</span>{" "}
              punti
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Struttura4Gioco;
