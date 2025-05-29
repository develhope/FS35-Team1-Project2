import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Star from "../../Components/Star";
import { PointsContext } from "../../PointsContext";

const Struttura4Gioco = (props) => {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [inputValore1, setInputValore1] = useState("");
  const [inputValore2, setInputValore2] = useState("");
  const navigate = useNavigate();
  const { points, setPoints } = useContext(PointsContext);

  const handleCheckAnswer = () => {
    const val1 = parseInt(inputValore1);
    const val2 = parseInt(inputValore2);

    if (val1 === props.rispostaCorretta1 && val2 === props.rispostaCorretta2) {
      setShowSuccess(true);
      setShowError(false);
      setPoints((prevPoints) => prevPoints + 50);
    } else {
      setShowError(true);
      setShowSuccess(false);
    }
  };

  return (
<<<<<<< HEAD
    <>
      <div className="bggame4">
        <div className="bg-white/85 rounded-xl border-amber-400 border-4 h-140 w-85  mt-20 absolute top-70 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-center text-center mt-3 m-auto p-5">
            <p className="text-black">
              Dimmi qual’è il riquadro con il numero più alto di oggetti! <br />
              <span className="text-sm text-gray-500">
                Inizia col numero più alto, fai poi lo stesso con il numero più
                basso.
              </span>
            </p>
          </div>

          <div className="flex items-start ">
            <img
              src="/assets/immagini/Gioco4/amicodinebula_1_4.svg"
              alt=""
              className="w-30 h-auto ml-4 object-contain transform scale-x-[-1]"
            />
            <div className="bg-white w-40 h-30 border border-gray-300 rounded text-center m-auto flex items-center justify-center">
              {props.domanda1}
            </div>
          </div>

          <div className="flex items-start gap-8 p-4 m-auto">
            <div className="bg-white w-40 h-30 border border-gray-300 rounded text-center m-auto flex items-center justify-center">
              {props.domanda2}
            </div>
            <img
              src="/assets/immagini/Gioco4/amicodinebula_2_4.svg"
              alt=""
              className="w-25 object-contain transform"
            />
          </div>

          <p className=" justify-center text-black text-center">
            {props.condizione}
=======
    <div className="bggame4">
      <div className="bg-white/85 rounded-xl  border-amber-400 border-4 h-138 w-85 mt-20 absolute top-70 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center text-center  m-auto p-5">
          <p className="text-black">
            Dimmi qual’è il riquadro con il numero più alto di oggetti! <br />
            <span className="text-sm text-gray-500">
              Inizia col numero più alto, fai poi lo stesso con il numero più basso.
            </span>
>>>>>>> main
          </p>
        </div>

<<<<<<< HEAD
          <div className="flex items-center justify-center gap-2 ">
            <button
              className="bg-white w-10 h-10 border border-gray-300 rounded text-center flex items-center justify-center"
              onClick={() =>
                props.valore1 === props.rispostaCorretta
                  ? (setShowSuccess(true),
                    setShowError(false),
                    setPoints((prevPoints) => prevPoints + 50))
                  : (setShowError(true), setShowSuccess(false))
              }
            >
              {props.valore1}
            </button>
=======
        <div className="flex items-center justify-center gap-10">
          <img
            src="/assets/immagini/Gioco4/amicodinebula_1_4.svg"
            alt=""
            className="w-30 h-auto object-contain transform scale-x-[-1]"
          />
          <div className="bg-white/50 p-5 h-30 w-30 border border-gray-300 rounded-2xl text-center flex items-center justify-center">
            {props.domanda1}
          </div>
        </div>
>>>>>>> main

    <div className="flex items-center justify-center pt-5 pb-3 gap-10">
  <div className="bg-white/50 p-5 h-30 w-30 border border-gray-300 rounded-2xl text-center flex items-center justify-center">
    {props.domanda2}
  </div>
  <img
    src="/assets/immagini/Gioco4/amicodinebula_2_4.svg"
    alt=""
    className="w-25 object-contain transform"
  />
</div>

<<<<<<< HEAD
            <button
              className="bg-white w-10 h-10 border border-gray-300 rounded text-center flex items-center justify-center"
              onClick={() =>
                props.valore2 === props.rispostaCorretta
                  ? (setShowSuccess(true),
                    setShowError(false),
                    setPoints((prevPoints) => prevPoints + 50))
                  : (setShowError(true), setShowSuccess(false))
              }
            >
              {props.valore2}
            </button>
          </div>

          {showError && (
            <div className="ml-4 text-sm md:text-2xl font-bold text-red-500 mt-4 animate-pulse">
              Risposta errata. Ritenta!
            </div>
          )}

          {showSuccess && (
            <>
              <div className="scale-75 md:scale-90">
                <Star />
              </div>
              <div className="flex justify-center -mt-8">
                <button
                  className="left-18 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 font-semibold"
                  onClick={() => navigate(props.destinazione)}
                >
                  {/* → */} Prossimo livello
                </button>
              </div>
            </>
          )}
          <p className="absolute top-139 left-14  text-white">
            Hai raccolto <span className="text-yellow-300">{points}</span> punti
          </p>
=======
        <p className="justify-center text-black text-center">{props.condizione}</p>

        <div className="flex items-center justify-center gap-2">
          <input
            type="number"
            className="bg-white w-10 h-10 border border-gray-300 rounded text-center"
            value={inputValore1}
            onChange={(e) => setInputValore1(e.target.value)}
          />

          <div
            className="w-10 h-10 text-black rounded flex items-center justify-center text-4xl font-medium"
            style={{ fontFamily: "monospace" }}
          >
            {props.comparazione}
          </div>

          <input
            type="number"
            className="bg-white w-10 h-10 border border-gray-300 rounded text-center"
            value={inputValore2}
            onChange={(e) => setInputValore2(e.target.value)}
          />
>>>>>>> main
        </div>

        <div className="flex justify-center mt-3">
          <button
            className="bg-orange-600 text-white px-4 py-1 rounded shadow"
            onClick={handleCheckAnswer}
          >
            Controlla Risposta
          </button>
        </div>

        {showError && (
          <div className="absolute top-135 bg-red-600 text-white px-1 py-1 rounded shadow right-15">
            Risposta errata. Ritenta!
          </div>
        )}

        {showSuccess && (
          <>
            <div className="scale-75 md:scale-90">
              <Star />
            </div>

            <button
              className="absolute top-103 left-6.5 w-70 h-10 bg-orange-600 text-white px-3 py-1 rounded shadow"
              onClick={() => navigate(props.destinazione)}
            >
              {props.avanti}
            </button>

            <p className="absolute top-138 left-18.5 text-white">
              Hai raccolto <span className="text-yellow-300">{points}</span> punti
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Struttura4Gioco;
