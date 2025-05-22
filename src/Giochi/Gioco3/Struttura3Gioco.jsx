import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Struttura3Gioco = ({
  titoloLivello,
  istruzioniTesto,
  risposteCorrette,
  livelloSuccessivoPath,
  blocchiGioco, // L'array dei blocchi già ordinati e con i colori
  gridCols,      // NUOVA PROP: es. 'grid-cols-2', 'grid-cols-3'
  gapX,          // NUOVA PROP: es. 'gap-x-0', 'gap-x-6'
  gapY,          // NUOVA PROP: es. 'gap-y-4', 'gap-y-6'
  gridWidth,     // NUOVA PROP: es. 'w-[160px]', 'w-[250px]'
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
      {/* Cornice centrale con bordo giallo + contenuto */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="border-4 border-yellow-400 bg-white rounded-xl p-4 w-[340px] h-[490px] text-center shadow-xl relative pb-32">
          {/* Testo */}
          <h1 className="text-lg pt-4 pl-1 font-bold text-black mb-2">
            {titoloLivello}
          </h1>
          <p className="text-sm text-gray-600 mb-4">{istruzioniTesto}</p>

          {/* Blocchi - Ora usiamo le props per la griglia */}
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
                    ? "text-6xl font-medium"
                    : "font-bold"
                }`}
              >
                {blocco.valore}
              </div>
            ))}
          </div>

          {/* CODICE DELLA SCIMMIA LASCIATO INALTERATO */}
          <img
            src="./immagini/Gioco3/scimmia_gioco_3.svg"
            alt="Scimmia"
            className="w-35 absolute bottom-0 left-45"
          />
        </div>
      </div>

      {/* Risposta esatta */}
      {rispostaEsatta && (
        <>
          {/* Stella gialla */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div
              style={{
                position: "relative",
                fontSize: "400px",
                color: "yellow",
                userSelect: "none",
                lineHeight: 1,
                width: "320px",
                height: "320px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              ★
              <span
                style={{
                  position: "absolute",
                  top: "60%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontWeight: "700",
                  fontSize: "20px",
                  textAlign: "center",
                  width: "80%",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                Risposta <br /> esatta!
              </span>
            </div>
          </div>

          {/* Punteggio */}
          <p className="absolute bottom-3 left-3 text-white">
            Hai raccolto <span className="text-yellow-300">100</span> punti
          </p>

          {/* Bottone livello successivo */}
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
  );
};

export default Struttura3Gioco;