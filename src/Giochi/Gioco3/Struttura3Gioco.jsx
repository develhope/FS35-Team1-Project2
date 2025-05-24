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
}) => {
  const navigate = useNavigate();
  const [associazioni, setAssociazioni] = useState({});
  const [dragData, setDragData] = useState(null);
  const [rispostaEsatta, setRispostaEsatta] = useState(false);
  const [rispostaErrata, setRispostaErrata] = useState(false);

  const handleDrop = (trascinato, target) => {
    const nuovo = { ...associazioni, [trascinato]: target };
    setAssociazioni(nuovo);

    const isMatchDirect = risposteCorrette[trascinato] === target;
    const isMatchInverse = Object.entries(risposteCorrette).find(
      ([numero, frutto]) => frutto === trascinato && numero === target
    );

    const corretto = isMatchDirect || isMatchInverse;

    if (corretto) {
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
      case 'pink':
        return 'bg-[#FFD9EC]'; // Rosa chiaro
      case 'lilac':
        return 'bg-[#E0BBE4]'; // Lilla/Lavanda
      case 'blue':
        return 'bg-[#CEF1ED]'; // Azzurro chiaro
      case 'yellow':
        return 'bg-[#FFEB3B]'; // Giallo
      default:
        return 'bg-gray-200'; // Colore di fallback
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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="border-4 border-yellow-400 bg-white rounded-xl p-4 w-[340px] h-[490px] text-center shadow-xl relative pb-32">
          <h1 className="text-lg pt-4 pl-1 font-bold text-black mb-2">
            {titoloLivello}
          </h1>
          <p className="text-sm text-gray-600 mb-4">{istruzioniTesto}</p>

          <div className={`grid ${gridCols} ${gapY} ${gapX} justify-items-center mx-auto ${gridWidth}`}>
            {blocchiGioco.map((blocco, index) => (
              <div
                key={blocco.valore || index}
                draggable
                onDragStart={() => setDragData(blocco.valore)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(dragData, blocco.valore)}
                className={`rounded p-2 cursor-grab text-center flex items-center justify-center w-20 h-20 shadow-lg ${getBackgroundColorClass(blocco.colore)} ${
                  blocco.tipo === 'numero'
                    ? "text-5xl font-extralight"
                    : ""
                }`}
              >
                {blocco.immagineSrc ? (
                  <img
                    src={blocco.immagineSrc}
                    alt={blocco.valore}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <span className={blocco.tipo === 'frutto' ? "font-bold" : ""}>
                    {blocco.valore}
                  </span>
                )}
              </div>
              
            ))}
          </div>
        </div>
      </div>

      {/* NUOVA LOGICA QUI: Mostra una sola scimmia basata su rispostaEsatta */}
      {!rispostaEsatta ? (
        // Mostra la scimmietta normale se la risposta non è ancora esatta
        <img
          src="./immagini/Gioco3/scimmia_gioco_3.svg"
          alt="Scimmia"
          className="w-30 absolute bottom-12 right-2"
        />
      ) : (
        // Mostra la scimmietta esultante se la risposta è esatta
        <img
          src="./immagini/Gioco3/scimmietta_felice_3.svg"
          alt="Scimmia Esultante"
          className="w-50 absolute bottom-10 right-1" // Manteniamo la stessa posizione fixed per il cambio effetto
        />
      )}

      {rispostaEsatta && (
        <>
         <Star/>
          <p className="absolute bottom-3 left-3 text-white">
            Hai raccolto <span className="text-yellow-300">100</span> punti
          </p>
          <button
            className="absolute bottom-3 right-3 bg-orange-600 text-white px-3 py-1 rounded shadow"
            onClick={() => navigate(livelloSuccessivoPath)}
          >
            Prossimo livello
          </button>
        </>
      )}

      {rispostaErrata && !rispostaEsatta && (
        <div className="absolute bottom-3 left-3 bg-red-600 text-white px-2 py-1 rounded shadow">
          Risposta errata. Ritenta!
        </div>
      )}
    </div>
    </>
  );
};

export default Struttura3Gioco;