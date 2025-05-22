// Struttura1Gioco.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Struttura1gioco.css";

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
  posizioneAstronauti = { donna: 60, maschio: 230, },
}) => {
  const [risposta, setRisposta] = useState(null);
  const navigate = useNavigate();

  const isCorretto = risposta === rispostaCorretta;

  return (
    <div className="w-screen h-screen overflow-hidden bggame1">
      {/* astronauti */}
      <div className="relative w-auto gap-30 mt-22 flex">
        <img
  src="../immagini/Gioco1/astronautagioco1donna.svg"
  alt="astronauta donna"
  className="absolute w-24 astronauta"
  style={{
    left: `${posizioneAstronauti.donna.left}px`,
    top: `${posizioneAstronauti.donna.top}px`,
  }}
/>
<img
  src="../immagini/Gioco1/astronautagioco1maschio.svg"
  alt="astronauta maschio"
  className="absolute w-24 astronauta"
  style={{
    left: `${posizioneAstronauti.maschio.left}px`,
    top: `${posizioneAstronauti.maschio.top}px`,
  }}
/>
      </div>

      {/* contenuto */}
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
              className="w-8 h-8 rounded-full bg-gray-300 text-lg font-bold flex items-center justify-center"
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

        {/* ERRORE */}
        {risposta && !isCorretto && (
          <p className="text-red-500 mt-4">Risposta errata</p>
        )}

        {/* RISPOSTA CORRETTA */}
        {isCorretto && (
          <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="p-2 mt-22 relative w-60 h-60 bg-yellow-400 rounded-full shadow-xl flex flex-col items-center justify-center text-white">
              <svg className="w-16 h-16 mb-2" fill="white" viewBox="0 0 24 24">
                <path d="M12 2l2.4 6.9H22l-5.6 4.2 2.4 6.9L12 16.2 5.2 20l2.4-6.9L2 8.9h7.6z" />
              </svg>
              <p className="text-lg font-bold text-white">Livello completato!</p>
              {!isFinalLevel ? (
                <>
                  <button
                    onClick={() => navigate(prossimoLivelloLink)}
                    className="mt-3 px-4 py-1 bg-white text-yellow-600 rounded-full shadow-md font-semibold text-sm"
                  >
                    Prossimo livello
                  </button>
                  <p className="text-sm mt-2">Hai raccolto 50 punti</p>
                </>
              ) : (
                <p className="text-sm mt-3 px-3 text-center">
                  Hai totalizzato <strong>200 punti!</strong>
                </p>
              )}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default Struttura1Gioco;