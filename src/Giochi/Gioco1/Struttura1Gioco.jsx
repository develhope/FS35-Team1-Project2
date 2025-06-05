import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Importa useLocation
import Star from "../../Components/Star";
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
    donna: { default: "top-[60px] left-[60px]", md: "md:top-[100px] md:left-[80px]" },
    maschio: { default: "top-[20px] left-[230px]", md: "md:top-[50px] md:left-[250px]" },
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

      // Aggiorna lo stato di completamento del livello solo se gameId e levelId sono validi
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

      if (isFinalLevel) {
        setIsLeaving(true);
        const timer = setTimeout(() => {
          navigate(prossimoLivelloLink);
        }, 600);
        return () => clearTimeout(timer);
      }
    }
  }, [
    isCorretto,
    isFinalLevel,
    navigate,
    prossimoLivelloLink,
    setPoints,
    currentGameId, // Usa currentGameId
    currentLevelId, // Usa currentLevelId
    setUserData,
  ]);

  return (
    <div
      className={`w-screen h-screen overflow-hidden bggame1 relative ${
        isLeaving ? "fade-out" : ""
      }`}
    >
      {/* Astronauti */}
      <div className="relative w-auto gap-30 mt-22 flex">
        <img
          src="/assets/immagini/Gioco1/astronautagioco1donna.svg"
          alt="astronauta donna"
          className={`w-24 md:w-35 astronauta absolute ${posizioneAstronauti.donna.default} ${posizioneAstronauti.donna.md}`}
        />
        <img
          src="/assets/immagini/Gioco1/astronautagioco1maschio.svg"
          alt="astronauta maschio"
          className={`w-24 md:w-35 astronauta absolute ${posizioneAstronauti.maschio.default} ${posizioneAstronauti.maschio.md}`}
        />
      </div>

      {/* Contenuto */}
      <article className="md:flex md:flex-col md:justify-center md:mt-[380px] md:w-[600px] md:h-[480px] article relative text-center mt-50 h-80 w-[300px] mx-auto border-6 border-yellow-400 bg-white p-6 rounded-xl shadow-md">
        <h4 className="md:text-[30px] text-15px mb-2">{traccia}</h4>
        <h5 className="text-[12px] mb-2 md:text-2xl">{sottotraccia}</h5>

        <div className="flex gap-2 mt-4 flex-wrap justify-center md:gap-6">
          {imgs.map((img, index) =>
            img ? (
              <img
                key={index}
                src={img}
                className="w-[50px] md:w-[100px]"
                alt={`img${index + 1}`}
              />
            ) : null
          )}
        </div>

        <div className="flex gap-5 mt-8 pb-10 justify-center md:gap-8">
          {[opz1, opz2, opz3].map((opzione, i) => (
            <button
              key={i}
              onClick={() => setRisposta(opzione)}
              className={`w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-300 text-xl md:text-2xl font-bold flex items-center justify-center transition-shadow duration-300 ${
                risposta === opzione ? "shadow-[0_0_10px_3px_#00FF00]" : ""
              }`}
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
  <>
    <div className="scale-75 md:scale-90">
      <Star />
    </div>
    <button
      className="absolute right-20 md:right-50 md:text-2xl md:bottom-[-6px] bottom-[-5px] px-2 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 text-sm font-semibold"
      onClick={() => navigate(prossimoLivelloLink)}
    >
      {isFinalLevel ? "Vai alla vittoria" : "Prossimo livello"}
    </button>
  </>
)}


        <p className="absolute top-80 left-3 md:top-122 md:text-2xl text-white">
          Hai raccolto <span className="text-yellow-300">{points}</span> punti
        </p>
      </article>
    </div>
  );
};

export default Struttura1Gioco;