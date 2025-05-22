import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Star from "../../Components/Star";

const Struttura4Gioco = () => {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleClick = (first, second) => {
    if (first > second) {
      setShowError(false);
      setShowSuccess(true);
    } else {
      setShowError(true);
      setShowSuccess(false);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: "url('/immagini/Gioco4/backgroundgioco4.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          width: "100%",
          position: "relative",
        }}
      >
        <div className="flex justify-center text-center max-w-[280px] m-auto pt-20">
          <p className="text-white">
            Dimmi qual’è il riquadro con il numero più alto di oggetti! Fai
            click prima sul riquadro con il numero più alto, dopo su quello con
            il numero più basso.
          </p>
        </div>

        <div className="flex items-start gap-1 p-4">
          <img
            src="./immagini/Gioco4/amicodinebula_1_4.svg"
            alt=""
            className="w-30 h-auto object-contain transform scale-x-[-1]"
          />
          <div className="bg-gray-300 w-40 h-30 border border-gray-300 rounded text-center m-auto flex items-center justify-center">
            6 Oggetti
          </div>
        </div>

        <div className="flex items-start gap-15 p-4 m-auto">
          <div className="bg-gray-300 w-40 h-30 border border-gray-300 rounded text-center m-auto flex items-center justify-center">
            4 Oggetti
          </div>
          <img
            src="./immagini/Gioco4/amicodinebula_2_4.svg"
            alt=""
            className="w-30 h-auto object-contain transform"
          />
        </div>

        <p className="m-auto justify-center text-white text-center">
          E' Maggiore
        </p>

        <div className="flex items-center justify-center gap-2 mt-1">
          <button
            className="bg-gray-300 w-10 h-10 border border-gray-300 rounded text-center flex items-center justify-center"
            onClick={() => handleClick(4, 6)}
          >
            4
          </button>

          <div className="w-10 h-10 text-white rounded flex items-center justify-center text-4xl font-medium" style={{ fontFamily: "monospace" }}>
            &gt;
          </div>

          <button
            className="bg-gray-300 w-10 h-10 border border-gray-300 rounded text-center flex items-center justify-center"
            onClick={() => handleClick(6, 4)}
          >
            6
          </button>
        </div>

        
        {showError && (
          <div className="absolute bottom-3 left-3 bg-red-600 text-white px-1 py-1 rounded shadow">
            Risposta errata. Ritenta!
          </div>
        )}

        {showSuccess && (
  <>
    
   <Star/>

    <button
      className="absolute bottom-3 right-3 bg-orange-600 text-white px-3 py-1 rounded shadow "
      onClick={() => navigate("/livello2")}
    >
     {/* → */} Prossimo livello
    </button>

    <p className="absolute bottom-3 left-3  text-white">Hai raccolto <span className="text-yellow-300">100</span> punti</p>
  </>
)}

      </div>
    </>
  );
};

export default Struttura4Gioco;
