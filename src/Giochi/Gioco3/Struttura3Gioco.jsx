import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Star from "../../Components/Star";

const Struttura3Gioco = ({
  titoloLivello,
  istruzioniTesto,
  risposteCorrette,
  livelloSuccessivoPath,
  blocchiGioco,
  gridCols,
  gapX,
  gapY,
  gridWidth,
  versioneCompatta,
  isLivello4 = true,
}) => {
  const navigate = useNavigate();
  const [associazioni, setAssociazioni] = useState({});
  const [dragData, setDragData] = useState(null);
  const [rispostaEsatta, setRispostaEsatta] = useState(false);
  const [rispostaErrata, setRispostaErrata] = useState(false);

  const handleDrop = (trascinato, target) => {
    const nuovo = { ...associazioni, [trascinato]: target };
    setAssociazioni(nuovo);

    const isMatch =
      risposteCorrette[trascinato] === target ||
      risposteCorrette[target] === trascinato;

    if (isMatch) {
      const tutteCorrette = Object.entries(risposteCorrette).every(
        ([numero, frutto]) =>
          nuovo[numero] === frutto || nuovo[frutto] === numero
      );

      if (tutteCorrette) {
        setRispostaEsatta(true);
        setRispostaErrata(false);
      } else {
        setRispostaErrata(false);
      }
    } else {
      setRispostaErrata(true);
    }
  };

  const getBackgroundColorClass = (colore) => {
    switch (colore) {
      case "pink":
        return "bg-[#FFD9EC]"; // Rosa chiaro
      case "lilac":
        return "bg-[#E0BBE4]"; // Lilla/Lavanda
      case "blue":
        return "bg-[#CEF1ED]"; // Azzurro chiaro
      case "yellow":
        return "bg-[#FFEB3B]"; // Giallo
      default:
        return "bg-gray-200"; // Colore di fallback
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: "url('/immagini/sfondoproseguogiochi.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          width: "100%",
          position: "relative",
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-md mx-auto rounded">
          <div className="border-4 border-yellow-400 bg-white rounded-xl p-4 min-h-[490px] text-center shadow-xl relative pb-30 ml-4 mr-4 mt-8">
            <h1 className="text-base font-bold pt-1 text-black mb-2 sm:w-24 md:w-176 md:pt-4 md:mt-0">
              {titoloLivello}
            </h1>
            <p className="text-sm text-gray-600 mb-4">{istruzioniTesto}</p>

            <div
              className={`grid ${gridCols} ${gapY} ${gapX} justify-items-center mx-auto ${gridWidth}`}
            >
              {blocchiGioco.map((blocco, index) => (
                <div
                  key={blocco.valore || index}
                  draggable
                  onDragStart={() => setDragData(blocco.valore)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => handleDrop(dragData, blocco.valore)}
                  className={`rounded p-2 cursor-grab text-center flex items-center justify-center w-20 h-20 shadow-lg ${getBackgroundColorClass(
                    blocco.colore
                  )} ${
                    blocco.tipo === "numero" ? "text-5xl font-extralight" : ""
                  }`}
                >
                  {blocco.immagineSrc ? (
                    <img
                      src={blocco.immagineSrc}
                      alt={blocco.valore}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <span
                      className={blocco.tipo === "frutto" ? "font-bold" : ""}
                    >
                      {blocco.valore}
                    </span>
                  )}
                </div>
              ))}
            </div>
            {/* NUOVA LOGICA QUI: Mostra una sola scimmia basata su rispostaEsatta */}
            {!rispostaEsatta ? (
              <img
                src="/assets/immagini/Gioco3/scimmia_gioco_3.svg"
                alt="Scimmia"
                className={`absolute ${
                  versioneCompatta
                    ? "top-82 right-1 w-30 sm:w-24 md:w-38"
                    : "right-1 w-30 sm:w-24 md:w-38"
                } object-contain z-10`}
              />
            ) : (
              <img
                src="/assets/immagini/Gioco3/scimmietta_felice_3.svg"
                alt="Scimmia Esultante"
                className={`absolute ${
                  versioneCompatta
                    ? "bottom-8 right-[-10px] w-36 sm:w-28 md:w-60"
                    : "bottom-8 right-0 w-40 sm:w-34 md:w-60"
                } object-contain z-10 animate-bounce`}
              />
            )}
          </div>
          {rispostaEsatta && (
            <>
              <Star />
              <div>
                <p
                  className={`${
                    isLivello4
                      ? "absolute mt-2 bottom-[80px] left-8 text-black" // <-- Soluzione compatta per Livello 4
                      : "absolute left-[15px] text-black"
                  }`}
                >
                  Hai raccolto <span className="text-yellow-300">100</span>{" "}
                  punti
                </p>
              </div>

              <button
                className="absolute bottom-4 right-28 bg-orange-600 text-white px-4 py-2 text-sm sm:text-base rounded md:right-76"
                onClick={() => navigate(livelloSuccessivoPath)}
              >
                Prossimo livello
              </button>
            </>
          )}

          {rispostaErrata && !rispostaEsatta && (
            <div className="absolute bottom-[100px] left-4 sm:left-6 bg-red-600 text-white text-xs sm:text-sm px-2 py-1 rounded shadow">
              Risposta errata. Ritenta!
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Struttura3Gioco;
