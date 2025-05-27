import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Star from "../../Components/Star";

const Struttura4Gioco = (props) => {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="bggame4">
        <div className="bg-white rounded-xl border-amber-400 border-4 h-140 w-85  mt-20 absolute top-70 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-center text-center mt-3 m-auto p-5">
            <p className="text-black">
              Dimmi qual’è il riquadro con il numero più alto di oggetti! <br/>
              <span className="text-sm text-gray-500">Inizia col numero più alto, fai poi lo stesso con il numero più basso.</span>
            </p>
          </div>

          <div className="flex items-start ">
            <img
              src="./immagini/Gioco4/amicodinebula_1_4.svg"
              alt=""
              className="w-30 h-auto ml-4 object-contain transform scale-x-[-1]"
            />
            <div className="bg-gray-300 w-40 h-30 border border-gray-300 rounded text-center m-auto flex items-center justify-center">
              {props.domanda1}
            </div>
          </div>

          <div className="flex items-start gap-8 p-4 m-auto">
            <div className="bg-gray-300 w-40 h-30 border border-gray-300 rounded text-center m-auto flex items-center justify-center">
              {props.domanda2}
            </div>
            <img
              src="./immagini/Gioco4/amicodinebula_2_4.svg"
              alt=""
              className="w-25 object-contain transform"
            />
          </div>

          <p className=" justify-center text-black text-center">
            {props.condizione}
          </p>

          <div className="flex items-center justify-center gap-2 ">
            <button
              className="bg-gray-300 w-10 h-10 border border-gray-300 rounded text-center flex items-center justify-center"
              onClick={() =>
                props.valore1 === props.rispostaCorretta
                  ? (setShowSuccess(true), setShowError(false))
                  : (setShowError(true), setShowSuccess(false))
              }
            >
              {props.valore1}
            </button>

            <div
              className="w-10 h-10 text-black rounded flex items-center justify-center text-4xl font-medium"
              style={{ fontFamily: "monospace" }}
            >
              {props.comparazione}
            </div>

            <button
              className="bg-gray-300 w-10 h-10 border border-gray-300 rounded text-center flex items-center justify-center"
              onClick={() =>
                props.valore2 === props.rispostaCorretta
                  ? (setShowSuccess(true), setShowError(false))
                  : (setShowError(true), setShowSuccess(false))
              }
            >
              {props.valore2}
            </button>
          </div>

          {showError && (
            <div className="absolute top-135 bg-red-600 text-white px-1 py-1 rounded shadow">
              Risposta errata. Ritenta!
            </div>
          )}

          {showSuccess && (
            <>
              <div className="scale-75 md:scale-90">
                <Star />
              </div>

              <button
                className="absolute top-120 left-5 w-70 h-10 bg-orange-600 text-white px-3 py-1 rounded shadow "
                onClick={() => navigate(props.destinazione)}
              >
                {/* → */} Prossimo livello
              </button>

              <p className="absolute top-139 left-0  text-white">
                Hai raccolto <span className="text-yellow-300">100</span> punti
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Struttura4Gioco;
