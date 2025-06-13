import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import StarAnimation from "../../Components/StarAnimation";
import "./Struttura1gioco.css";
import { PointsContext } from "../../PointsContext";
import { UserContext } from "../../UserContext";

const Struttura1Gioco = ({
  imgs = [],
  traccia,
  sottotraccia,
  opz1,
  opz2,
  opz3,
  rispostaCorretta,
  nebula,
  prossimoLivelloLink,
  isFinalLevel = false,
  posizioneAstronauti = {
    donna: {
      default: "top-[60px] left-[60px]",
      md: "md:top-[100px] md:left-[80px]",
    },
    maschio: {
      default: "top-[20px] left-[230px]",
      md: "md:top-[50px] md:left-[250px]",
    },
  },
  nuovaPosizioneAstronauti,
  setPosizioneAstronauti,
}) => {
  const { points, setPoints } = useContext(PointsContext);
  const { userData, setUserData } = useContext(UserContext);
  const [risposta, setRisposta] = useState(null);
  const [isLeaving, setIsLeaving] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Ottieni l'oggetto location

  const _ = userData; // Assegna userData a una variabile temporanea '_' per evitare errori da eslint

  // Estrai gameId e levelId dalla URL
  // Esempio: /livello1gioco1 -> currentLevelId: '1', currentGameId: 'game1'
  const match = location.pathname.match(/\/livello(\d+)gioco(\d+)/);
  const currentLevelId = match ? match[1] : null;
  const currentGameId = match ? `game${match[2]}` : null;

  const isCorretto = risposta === rispostaCorretta;

  useEffect(() => {
    if (isCorretto) {
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
    }
  }, [
    isCorretto,
    isFinalLevel,
    navigate,
    prossimoLivelloLink,
    setPoints,
    currentGameId,
    currentLevelId,
    setUserData,
  ]);

  return (
    <div
      className={`w-screen h-screen overflow-hidden bggame1 relative ${
        isLeaving ? "fade-out" : ""
      }`}
    >
      {/* 🌟 StarAnimation centrata in tutto lo schermo */}
      {isCorretto && (
        <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <StarAnimation />
        </div>
      )}

      {/* 👨‍🚀 Astronauti */}
      <div className="relative w-auto gap-30 mt-30 flex">
        <img
          src="/assets/immagini/Gioco1/astronautagioco1donna.svg"
          alt="astronauta donna"
          className={`w-24 md:w-35 astronauta absolute ${posizioneAstronauti.donna.default} ${posizioneAstronauti.donna.md} ${posizioneAstronauti.donna.lg}`}
        />
        <img
          src="/assets/immagini/Gioco1/astronautagioco1maschio.svg"
          alt="astronauta maschio"
          className={`w-24 md:w-35 astronauta absolute ${posizioneAstronauti.maschio.default} ${posizioneAstronauti.maschio.md} ${posizioneAstronauti.maschio.lg}`}
        />
      </div>

      {/* 🧠 Contenuto principale */}
      <article className="md:flex md:flex-col md:justify-center md:mt-[380px] lg:mt-[130px] md:w-[600px] lg:w-[600px] md:h-[480px] lg:h-[370px]  article relative text-center mt-50 h-80 w-[300px] mx-auto border-6 border-yellow-400 bg-white p-6 lg:p-2 rounded-xl shadow-md">
        <h4 className="md:text-[30px] text-15px mb-2 lg:text-[25px]">
          {traccia}
        </h4>
        <h5 className="text-[12px] mb-2 md:text-2xl lg:text-[20px]">
          {sottotraccia}
        </h5>

        <div className="flex gap-2 mt-4 lg:mt-[10px] flex-wrap justify-center md:gap-6 lg:mb-[-20px]">
          {imgs.map((img, index) =>
            img ? (
              <img
                key={index}
                src={img}
                className="w-[50px] lg:w-20 md:w-[100px]"
                alt={`img${index + 1}`}
              />
            ) : null
          )}
        </div>

        <div className="lg:pb-6 flex gap-5 mt-8 lg:mt-10 pb-10 justify-center md:gap-8">
          {[opz1, opz2, opz3].map((opzione, i) => (
            <button
              key={i}
              onClick={() => setRisposta(opzione)}
              disabled={isCorretto}
              className={`lg:w-10 w-10 h-10 lg:h-10 md:w-14 md:h-14 rounded-full bg-gray-300 text-xl md:text-2xl font-bold flex items-center justify-center transition-shadow duration-300 ${
                risposta === opzione ? "shadow-[0_0_10px_3px_#00FF00]" : ""
              } ${isCorretto ? "opacity-50 cursor-not-allowed" : ""}`}
              style={{
                color:
                  opzione === opz1
                    ? "#21C8C8"
                    : opzione === opz2
                    ? "#F5A42B"
                    : "#EA3C3C",
              }}
            >
              {opzione}
            </button>
          ))}

          <img
            className="absolute bottom-[-20px] w-[70px] left-[230px] md:left-[480px] md:w-[100px]"
            src={nebula}
            alt="nebula"
          />
        </div>

        {risposta && !isCorretto && (
          <p className="text-l md:text-2xl font-bold text-red-500 mt-4 animate-pulse absolute bottom-2.5 md:bottom-[-1px] left-18 md:left-44">
            Risposta errata!
          </p>
        )}

        {isCorretto && (
          <button
            className="absolute z-50 right-20 md:right-50 md:text-2xl md:bottom-[-6px] bottom-[-5px] px-2 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 text-sm font-semibold"
            onClick={() => {
              console.log("navigazione a:", prossimoLivelloLink);
              navigate(prossimoLivelloLink);
            }}
          >
            {isFinalLevel ? "Vai alla vittoria" : "Prossimo livello"}
          </button>
        )}

        <p className="absolute top-79 left-3 md:top-120  lg:top-93 lg:text-xl md:text-2xl text-white">
          Hai raccolto <span className="text-yellow-300">{points}</span> punti
        </p>
      </article>
    </div>
  );
};

export default Struttura1Gioco;
