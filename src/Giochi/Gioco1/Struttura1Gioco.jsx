import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Star from "../../Components/Star";
import "./Struttura1gioco.css";
import { PointsContext } from "../../PointsContext";

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
    donna: { left: 60, top: 0 },
    maschio: { left: 230, top: 0 },
  },
}) => {
  const { points, setPoints } = useContext(PointsContext);
  const [risposta, setRisposta] = useState(null);
  const [isLeaving, setIsLeaving] = useState(false);
  const navigate = useNavigate();

  const isCorretto = risposta === rispostaCorretta;

  useEffect(() => {
    if (isCorretto && isFinalLevel) {
      setIsLeaving(true);
      const timer = setTimeout(() => {
        navigate(prossimoLivelloLink);
      }, 600); // Match con la durata CSS
      return () => clearTimeout(timer);
    }
  }, [isCorretto, isFinalLevel, navigate, prossimoLivelloLink]);

  useEffect(() => {
    if (isCorretto) {
      setPoints((prevPoints) => prevPoints + 50);
    }
  }, [isCorretto, setPoints]);

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
          className="absolute w-24 astronauta"
          style={{
            left: `${posizioneAstronauti.donna.left}px`,
            top: `${posizioneAstronauti.donna.top}px`,
          }}
        />
        <img
          src="/assets/immagini/Gioco1/astronautagioco1maschio.svg"
          alt="astronauta maschio"
          className="absolute w-24 astronauta"
          style={{
            left: `${posizioneAstronauti.maschio.left}px`,
            top: `${posizioneAstronauti.maschio.top}px`,
          }}
        />
      </div>

      {/* Contenuto */}
      <article className="relative text-center mt-50 h-80 w-64 mx-auto border-6 border-yellow-400 bg-white p-6 rounded-xl shadow-md">
        <h4 className="text-15px mb-2">{traccia}</h4>
        <h5 className="text-[12px] mb-2">{sottotraccia}</h5>

        <div className="flex gap-2 mt-4 flex-wrap justify-center">
          {imgs.map((img, index) =>
            img ? (
              <img
                key={index}
                src={img}
                className="w-[50px]"
                alt={`img${index + 1}`}
              />
            ) : null
          )}
        </div>

        <div className="flex gap-3.5 mt-8 justify-center">
          {[opz1, opz2, opz3].map((opzione, i) => (
            <button
              key={i}
              onClick={() => setRisposta(opzione)}
              className={`w-8 h-8 rounded-full bg-gray-300 text-lg font-bold flex items-center justify-center transition-shadow duration-300 ${
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
            className="absolute bottom-[-20px] left-[190px] w-[70px]"
            src={nebula}
            alt="nebula"
          />
        </div>

        {/* Risposta errata */}
        {risposta && !isCorretto && (
          <div className="text-sm md:text-2xl font-bold text-red-500 mt-4 animate-pulse">
            Risposta errata. Ritenta!
          </div>
        )}

        {/* Risposta corretta - solo se NON è il livello finale */}

        {isCorretto && !isFinalLevel && (
          <>
            <div className="scale-75 md:scale-90">
              <Star />
            </div>
            <button
              className="mt-5 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 font-semibold"
              onClick={() => navigate(prossimoLivelloLink)}
            >
              Prossimo livello
            </button>
          </>
        )}

        <p className="absolute top-80 left-3 text-white">
          Hai raccolto <span className="text-yellow-300">{points}</span> punti
        </p>
      </article>
    </div>
  );
};

export default Struttura1Gioco;
