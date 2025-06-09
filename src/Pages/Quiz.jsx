import { useState, useEffect } from "react";
import CallToAction from "../Components/CallToAction";
import { Link } from "react-router-dom";

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [selezione, setSelezione] = useState("");

  const domande = [
    {
      titolo: "Capire i numeri",
      sottotitolo: "I numeri ti sembrano facili o difficili?",
      opzioni: ["😊 Facili!", "😐 A volte difficili...", "😟 Molto difficili!"],
    },
    {
      titolo: "Contare",
      sottotitolo: "Ti piace contare gli oggetti?",
      opzioni: [
        "😊 Sì, mi piace molto",
        "😐 Solo quando è facile",
        "😟 No, faccio fatica",
      ],
    },
    {
      titolo: "Sommare",
      sottotitolo:
        "Quando devi sommare numeri facili (come 1 + 2 o 3 + 1), com'è per te?",
      opzioni: [
        "😊 Le faccio senza problemi",
        "😐 Devo pensarci un po’",
        "😟 È molto difficile per me",
      ],
    },
    {
      titolo: "Numeri e parole",
      sottotitolo:
        "Quando senti un numero (come “ventitré”), riesci a immaginarlo scritto?",
      opzioni: ["😊 Sì, subito", "😐 Qualche volta", "😟 No, mi confonde"],
    },
    {
      titolo: "I numeri nella vita di tutti i giorni",
      sottotitolo: "Ti capita di confondere i numeri (ad esempio 6 con 9)?",
      opzioni: ["😊 No, li riconosco bene", "😐 A volte sì", "😟 Sì, spesso"],
    },
  ];

  const avanti = () => {
    if (selezione && step < domande.length - 1) {
      setStep(step + 1);
    }
  };

  const indietro = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  useEffect(() => {
    setSelezione("");
  }, [step]);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="p-5 mt-6 md:pt-10 md:mt-12">
        <div className="flex flex-col justify-center items-center py-[50px] space-y-7 text-center md:py-[30px] md:space-y-10">
          <h1 className="text-2xl md:text-[30px] font-semibold">{domande[step].titolo}</h1>
          <h2 className="text-[18px] md:text-[25px] lg:text-[24px]">{domande[step].sottotitolo}</h2>
        </div>

        <div className="flex flex-col justify-center items-center space-y-10 text-center px-4">
          <form className="space-y-5 md:space-y-6">
            {domande[step].opzioni.map((opzione, index) => (
              <label key={index} className="flex items-center space-x-5 md:text-lg">
                <input
                  type="radio"
                  name={`scelta-${step}`}
                  value={opzione}
                  className="w-5 h-5 md:w-6 md:h-6"
                  checked={selezione === opzione}
                  onChange={() => setSelezione(opzione)}
                />
                <span className="text-base md:text-lg lg:text-md">{opzione}</span>
              </label>
            ))}
          </form>

          {step < domande.length - 1 ? (
            <div className="flex items-center space-x-5 md:space-x-10 md:mt-6">
              {step > 0 && (
                <button onClick={indietro}>
                  <img
                    src="./immagini/icon/arrow-left.svg"
                    alt="Freccia sinistra"
                    className="w-6 h-6 md:w-7 md:h-7"
                  />
                </button>
              )}

              <p className="text-base md:text-[25px] ml-[30px]">Domanda successiva</p>

              <button onClick={avanti} disabled={!selezione}>
                <img
                  src="./immagini/icon/arrow-right.svg"
                  alt="Freccia destra"
                  className={`w-6 h-6 md:w-7 md:h-7 ${
                    !selezione ? "opacity-30 cursor-not-allowed" : ""
                  }`}
                />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-4 md:space-y-6">
              <div>
                <Link to="/form-iscriviti">
                  <CallToAction
                    text="TERMINA IL QUIZ"
                    disabled={!selezione}
                    route="/form-iscriviti"
                    className="w-60 h-12 md:w-100 md:h-20"
                  />
                </Link>
              </div>

              <p
                className="text-sm md:text-base flex items-center cursor-pointer"
                onClick={indietro}
              >
                <img
                  src="./immagini/icon/arrow-left.svg"
                  alt="Freccia sinistra"
                  className="w-4 h-4 mr-1 md:w-5 md:h-5"
                />
                Domanda precedente
              </p>
            </div>
          )}

          {/* Pianeti e immagini decorative */}
          <div className="flex flex-col gap-4 pt-20 relative">
            <img
              src="./immagini/perform.png"
              alt="NebulaForm"
              className="w-70 md:w-[340px] lg:w-[320px] md:mt-10"
            />
            <img
              src="/immagini/pianeti/pianeta8.svg"
              className="w-20 md:w-26 absolute left-[-10px] md:left-[-20px] lg:left-[-100px] planet-rotate planet-shadow"
              alt="Pianeta1"
            />
            <img
              src="/immagini/pianeti/pianeta1.svg"
              className="w-10 md:w-18 absolute bottom-56 left-1 md:left-[-15px] lg:left-[-40px] mt-50 planet-rotate planet-shadow"
              alt="Pianeta2"
            />
            <img
              src="/immagini/pianeti/pianeta2.svg"
              className="w-10 md:w-18 absolute bottom-68 md:bottom-[290px] lg:bottom-[275px] left-60 md:left-[300px] lg:left-[300px] mt-30 planet-rotate planet-shadow"
              alt="Pianeta3"
            />
            <img
              src="/immagini/pianeti/pianeta4.svg"
              className="w-15 md:w-24 lg:w-20 absolute left-50 md:left-[300px] lg:left-[250px] mb-50 planet-bounce planet-shadow"
              alt="Pianeta4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
