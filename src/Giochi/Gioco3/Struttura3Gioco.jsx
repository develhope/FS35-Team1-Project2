import { useState, useRef, useMemo, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import StarAnimation from "../../Components/StarAnimation";
import { PointsContext } from "../../PointsContext.jsx";
import { UserContext } from "../../UserContext.jsx";

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
  const { points, setPoints } = useContext(PointsContext);
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const _ = userData; // Assegna userData a una variabile temporanea '_' per evitare errori da eslint

  // Estrai gameId e levelId dalla URL e CONVERTI levelId in numero
  const match = location.pathname.match(/\/livello(\d+)gioco(\d+)/);
  const currentLevelId = match ? parseInt(match[1], 10) : null; // <--- MODIFICA QUI
  const currentGameId = match ? `game${match[2]}` : null;

  const [associazioni, setAssociazioni] = useState({});
  const [dragData, setDragData] = useState(null);
  const [targetHover, setTargetHover] = useState(null);
  const [rispostaEsatta, setRispostaEsatta] = useState(false);
  const [rispostaErrata, setRispostaErrata] = useState(false);
  const [blocchiEvidenziati, setBlocchiEvidenziati] = useState([]);
  const [blocchiErrati, setBlocchiErrati] = useState([]);
  const [blocchiDisabilitati, setBlocchiDisabilitati] = useState(false);
  const ghostRef = useRef(null);

  const handleLevel = () => {
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

    navigate(livelloSuccessivoPath);
  };

  const handleRetry = () => {
    const nuoveAssociazioni = { ...associazioni };
    blocchiErrati.forEach((valore) => {
      Object.keys(nuoveAssociazioni).forEach((chiave) => {
        if (chiave === valore || nuoveAssociazioni[chiave] === valore) {
          delete nuoveAssociazioni[chiave];
        }
      });
    });
    setAssociazioni(nuoveAssociazioni);
    setRispostaErrata(false);
    setBlocchiErrati([]);
    setBlocchiDisabilitati(false);
  };

  const handleDrop = (trascinato, target) => {
    if (!trascinato || !target || blocchiDisabilitati) return;

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

      const tentativiCompletati =
        Object.keys(nuovo).length === blocchiGioco.length;
      if (tentativiCompletati) {
        setBlocchiDisabilitati(true);
      }
    }

    setDragData(null);
    setTargetHover(null);
  };

  const handleDragStart = (e, valore) => {
    if (blocchiDisabilitati) return;
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
    if (blocchiDisabilitati) return;
    setDragData(valore);
  };

  const onTouchEnd = (e) => {
    if (blocchiDisabilitati) return;
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
        return "#E5E7EB";
    }
  };

  const blocchi = useMemo(
    () => blocchiGioco.slice().sort(() => Math.random() - 0.5),
    [blocchiGioco]
  );

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
        <div className="border-4 border-yellow-400 bg-white rounded-xl p-4 min-h-[490px] text-center shadow-xl relative pb-30 ml-4 mr-4 mt-8 ">
          <h1 className="text-base font-bold pt-1 text-black mb-2 md:mt-8 md:text-xl">
            {titoloLivello}
          </h1>
          <p className="text-sm text-gray-600 mb-4 md:mb-10 md:text-xl">
            {istruzioniTesto}
          </p>

          <div
            className={`grid ${gridCols} ${gapY} ${gapX} justify-items-center mx-auto ${gridWidth}`}
          >
            {blocchi.map((blocco, index) => {
              const valore = blocco.valore;
              const bgColor = getBackgroundColorClass(blocco.colore);
              const isEvidenziato = blocchiEvidenziati.includes(valore);
              const isErrato = blocchiErrati.includes(valore);
              const isHover = targetHover === valore;

              const shadowColor = isEvidenziato
                ? "shadow-[0_0_12px_4px_rgba(34,197,94,0.7)]"
                : isErrato
                ? "shadow-[0_0_12px_4px_rgba(239,68,68,0.7)]"
                : "shadow-md";

              return (
                <div
                  key={valore || index}
                  draggable={!blocchiDisabilitati}
                  onDragStart={(e) =>
                    !blocchiDisabilitati && handleDragStart(e, valore)
                  }
                  onDragEnd={() => !blocchiDisabilitati && handleDragEnd()}
                  onDragOver={(e) => {
                    if (!blocchiDisabilitati) {
                      e.preventDefault();
                      setTargetHover(valore);
                    }
                  }}
                  onDragLeave={() =>
                    !blocchiDisabilitati && setTargetHover(null)
                  }
                  onDrop={() =>
                    !blocchiDisabilitati && handleDrop(dragData, valore)
                  }
                  onTouchStart={() =>
                    !blocchiDisabilitati && onTouchStart(valore)
                  }
                  onTouchEnd={(e) => !blocchiDisabilitati && onTouchEnd(e)}
                  data-valore={valore}
                  className={`rounded p-2 text-center flex items-center justify-center w-20 h-20 md:w-28 md:h-28 ${
                    blocchiDisabilitati
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-grab"
                  } ${shadowColor} ${isHover ? "ring-4 ring-blue-400" : ""} ${
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
              className="absolute top-[70%] md:top-[78%] right-0 w-30 sm:w-28 md:w-36 object-contain z-10"
            />
          ) : (
            <img
              src="/assets/immagini/Gioco3/scimmietta_felice_3.svg"
              alt="Scimmia Esultante"
              className={`absolute ${
                versioneCompatta
                  ? "bottom-8 right-[-10px] w-40 sm:w-28 md:w-60"
                  : "bottom-8 right-0 w-40 sm:w-34 md:w-60"
              } object-contain z-60 animate-bounce`}
            />
          )}
        </div>

        {rispostaEsatta && (
          <>
            <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <StarAnimation />
            </div>
            <button
              className="z-50 absolute bottom-4 right-34 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 text-xl py-2 px-4 font-semibold sm:text-base md:right-86 md:text-xl"
              onClick={handleLevel}
            >
              Avanti
            </button>
          </>
        )}

        <p
          className={`${
            isLivello4
              ? "absolute  text-l md:text-2xl pl-2 text-blue-300 font-semibold left-34"
              : "absolute left-[15px] text-black"
          }`}
        >
          Punti: <span className="text-yellow-300">{points}</span>
        </p>

        {rispostaErrata && !rispostaEsatta && (
          <div>
            <div className="text-l md:text-2xl bottom-[90px] left-14 font-bold text-red-500 mt-4 animate-pulse absolute">
              <span>Risposta errata!</span>
            </div>
            <div>
              <button
                onClick={handleRetry}
                className="absolute px-6 py-3 bottom-[40px] left-18 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300 text-s font-semibold"
              >
                Riprova
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Struttura3Gioco;
