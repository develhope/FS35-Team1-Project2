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
          className="absolute top-[60px] left-[60px] md:left-[205px] md:top-[150px] w-24 md:w-35 astronauta"
        />
        <img
          src="/assets/immagini/Gioco1/astronautagioco1maschio.svg"
          alt="astronauta maschio"
          className="absolute top-[20px] left-[230px] md:left-[465px] md:top-[80px] w-24 md:w-35 astronauta"
        />
      </div>

      {/* Contenuto */}
      <article className="md:flex md:flex-col md:justify-center md:mt-[380px] md:w-[600px] md:h-[480px] article relative text-center mt-50 h-80 w-[300px] mx-auto border-6 border-yellow-400 bg-white p-6 rounded-xl shadow-md">
        <h4 className="md:text-[30px] text-15px mb-2">{traccia}</h4>
        <h5 className="text-[12px] mb-2  md:text-2xl">{sottotraccia}</h5>

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

        {/* Risposta errata */}
        {risposta && !isCorretto && (
          <div className="absolute bottom-[6px] md:bottom-[-60px] text-[10px] left-[6px] md:left-[140px]  md:text-[23px] bg-red-600 text-white px-1 py-1 rounded shadow">
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
              className="absolute top-[330px] md:top-[490px] right-11 md:left-[180px] md:right-auto bg-orange-600 text-white px-3 py-1 rounded shadow md:text-[25px]"
              onClick={() => navigate(prossimoLivelloLink)}
            >
              Prossimo livello
            </button>

            <p className="absolute bottom-3 left-3 text-black md:bottom-[-5px] md:text-[25px]">
              Hai raccolto <span className="text-yellow-300">{points}</span> punti
            </p>
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
