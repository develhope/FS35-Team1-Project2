import React, { useState, useRef } from "react";
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
  const [targetHover, setTargetHover] = useState(null);
  const [rispostaEsatta, setRispostaEsatta] = useState(false);
  const [rispostaErrata, setRispostaErrata] = useState(false);
  const [blocchiEvidenziati, setBlocchiEvidenziati] = useState([]);
  const [blocchiErrati, setBlocchiErrati] = useState([]);
  const ghostRef = useRef(null);

  const handleDrop = (trascinato, target) => {
    if (!trascinato || !target) return;

    const nuovo = { ...associazioni, [trascinato]: target };
    setAssociazioni(nuovo);

    const isMatch =
      risposteCorrette[trascinato] === target ||
      risposteCorrette[target] === trascinato;

    if (isMatch) {
      const nuoviEvidenziati = [...blocchiEvidenziati];
      if (!nuoviEvidenziati.includes(trascinato)) {
        nuoviEvidenziati.push(trascinato);
      }
      if (!nuoviEvidenziati.includes(target)) {
        nuoviEvidenziati.push(target);
      }
      setBlocchiEvidenziati(nuoviEvidenziati);
      setRispostaErrata(false);

      const tutteCorrette = Object.entries(risposteCorrette).every(
        ([numero, frutto]) =>
          nuovo[numero] === frutto || nuovo[frutto] === numero
      );

      if (tutteCorrette) {
        setRispostaEsatta(true);
      }
    } else {
      setRispostaErrata(true);
      const nuoviErrati = [...blocchiErrati];
      if (!nuoviErrati.includes(trascinato)) nuoviErrati.push(trascinato);
      if (!nuoviErrati.includes(target)) nuoviErrati.push(target);
      setBlocchiErrati(nuoviErrati);
    }

    setDragData(null);
    setTargetHover(null);
  };

  const handleDragStart = (e, valore) => {
    setDragData(valore);
    const original = e.currentTarget;
    const ghostEle = original.cloneNode(true);

    ghostEle.style.position = "absolute";
    ghostEle.style.top = "0px";
    ghostEle.style.left = "0px";
    ghostEle.style.opacity = "1";
    ghostEle.style.pointerEvents = "none";
    ghostEle.style.transform = "scale(1.2)";
    ghostEle.style.zIndex = "9999";
    ghostEle.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
    document.body.appendChild(ghostEle);
    ghostRef.current = ghostEle;

    e.dataTransfer.setDragImage(
      ghostEle,
      ghostEle.offsetWidth / 2,
      ghostEle.offsetHeight / 2
    );
  };

  const handleDragEnd = () => {
    if (ghostRef.current) {
      document.body.removeChild(ghostRef.current);
      ghostRef.current = null;
    }
  };

  const onTouchStart = (valore) => {
    setDragData(valore);
  };

  const onTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
    const valoreTarget = dropTarget?.closest("[data-valore]")?.dataset?.valore;

    if (valoreTarget) {
      handleDrop(dragData, valoreTarget);
    }

    setDragData(null);
    setTargetHover(null);
  };

  const getBackgroundColorClass = (colore) => {
    switch (colore) {
      case "pink":
        return "#FFD9EC";
      case "lilac":
        return "#E0BBE4";
      case "blue":
        return "#CEF1ED";
      case "yellow":
        return "#FFEB3B";
      default:
        return "#E5E7EB"; // fallback grigio
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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-md mx-auto rounded">
        <div className="border-4 border-yellow-400 bg-white rounded-xl p-4 min-h-[490px] text-center shadow-xl relative pb-30 ml-4 mr-4 mt-8">
          <h1 className="text-base font-bold pt-1 text-black mb-2">
            {titoloLivello}
          </h1>
          <p className="text-sm text-gray-600 mb-4">{istruzioniTesto}</p>

          <div
            className={`grid ${gridCols} ${gapY} ${gapX} justify-items-center mx-auto ${gridWidth}`}
          >
            {blocchiGioco.map((blocco, index) => {
              const valore = blocco.valore;
              const bgColor = getBackgroundColorClass(blocco.colore);
              const isEvidenziato = blocchiEvidenziati.includes(valore);
              const isErrato = blocchiErrati.includes(valore);
              const isHover = targetHover === valore;

              const shadowColor = isEvidenziato
                ? "shadow-[0_0_12px_4px_rgba(34,197,94,0.7)]" // verde
                : isErrato
                ? "shadow-[0_0_12px_4px_rgba(239,68,68,0.7)]" // rosso
                : "shadow-md";

              return (
                <div
                  key={valore || index}
                  draggable
                  onDragStart={(e) => handleDragStart(e, valore)}
                  onDragEnd={handleDragEnd}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setTargetHover(valore);
                  }}
                  onDragLeave={() => setTargetHover(null)}
                  onDrop={() => handleDrop(dragData, valore)}
                  onTouchStart={() => onTouchStart(valore)}
                  onTouchEnd={onTouchEnd}
                  data-valore={valore}
                  className={`rounded p-2 cursor-grab text-center flex items-center justify-center w-20 h-20 ${shadowColor} ${
                    isHover ? "ring-4 ring-blue-400" : ""
                  } ${
                    blocco.tipo === "numero" ? "text-5xl font-extralight" : ""
                  }`}
                  style={{ backgroundColor: bgColor }}
                >
                  {blocco.immagineSrc ? (
                    <img
                      src={blocco.immagineSrc}
                      alt={valore}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <span
                      className={blocco.tipo === "frutto" ? "font-bold" : ""}
                    >
                      {valore}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {!rispostaEsatta ? (
            <img
              src="/assets/immagini/Gioco3/scimmia_gioco_3.svg"
              alt="Scimmia"
              className="absolute top-[70%] right-0 w-30 sm:w-28 md:w-36 object-contain z-10"
            />
          ) : (
            <img
              src="/assets/immagini/Gioco3/scimmietta_felice_3.svg"
              alt="Scimmia Esultante"
              className={`absolute ${
                versioneCompatta
                  ? "bottom-8 right-[-10px] w-40 sm:w-28 md:w-60"
                  : "bottom-8 right-0 w-40 sm:w-34 md:w-60"
              } object-contain z-10 animate-bounce`}
            />
          )}
        </div>

        {rispostaEsatta && (
          <>
            <Star />
            <p
              className={`${
                isLivello4
                  ? "absolute mt-2 bottom-[80px] left-8 text-black"
                  : "absolute left-[15px] text-black"
              }`}
            >
              Hai raccolto <span className="text-yellow-300">100</span> punti
            </p>
            <button
              className="absolute bottom-4 right-28 bg-orange-600 text-white px-4 py-2 text-sm sm:text-base rounded md:right-76"
              onClick={() => navigate(livelloSuccessivoPath)}
            >
              Prossimo livello
            </button>
          </>
        )}

        {rispostaErrata && !rispostaEsatta && (
          <div className="absolute bottom-[15px] left-8 sm:left-6 bg-red-600 text-white text-xs sm:text-sm px-2 py-1 rounded shadow">
            Risposta errata. Ritenta!
          </div>
        )}
      </div>
    </div>
  );
};

export default Struttura3Gioco;
