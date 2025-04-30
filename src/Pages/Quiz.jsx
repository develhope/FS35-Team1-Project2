import { useState, useEffect } from "react";
import Header from "../Components/Header";

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [selezione, setSelezione] = useState("");

  const domande = [
    {
      titolo: "Capire i numeri",
      sottotitolo: "I numeri ti sembrano facili o difficili?",
      opzioni: [
        "😊 Facili!",
        "😐 A volte difficili...",
        "😟 Molto difficili!",
      ],
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
      sottotitolo: "Quando devi sommare numeri facili (come 1 + 2 o 3 + 1), com'è per te?",
      opzioni: [
        "😊 Le faccio senza problemi",
        "😐 Devo pensarci un po’",
        "😟 È molto difficile per me",
      ],
    },
    {
      titolo: "Numeri e parole",
      sottotitolo: "Quando senti un numero (come “ventitré”), riesci a immaginarlo scritto?",
      opzioni: [
        "😊 Sì, subito",
        "😐 Qualche volta",
        "😟 No, mi confonde",
      ],
    },
    {
      titolo: "I numeri nella vita di tutti i giorni",
      sottotitolo: "Ti capita di confondere i numeri (ad esempio 6 con 9)?",
      opzioni: [
        "😊 No, li riconosco bene",
        "😐 A volte sì",
        "😟 Sì, spesso",
      ],
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
    <>
      <Header
        leftIcon={
          <img
            src="./immagini/icon/arrow-left.svg"
            className="w-[15px] ml-1"
          />
        }
        centerIcon={<p className="pl-[20px]">Quiz conoscitivo</p>}
      />

      <div className="flex flex-col justify-center items-center py-[50px] space-y-7 text-center">
        <h1 className="text-2xl font-semibold">{domande[step].titolo}</h1>
        <h2 className="text-[18px]">{domande[step].sottotitolo}</h2>
      </div>

      <div className="flex flex-col justify-center items-center space-y-10 text-center px-4">
        <form className="space-y-5">
          {domande[step].opzioni.map((opzione, index) => (
            <label key={index} className="flex items-center space-x-5">
              <input
                type="radio"
                name={`scelta-${step}`}
                value={opzione}
                className="w-5 h-5"
                checked={selezione === opzione}
                onChange={() => setSelezione(opzione)}
              />
              <span>{opzione}</span>
            </label>
          ))}
        </form>

        {step < domande.length - 1 ? (
          <div className="flex items-center space-x-5">
            {step > 0 && (
              <button onClick={indietro}>
                <img
                  src="./immagini/icon/arrow-left.svg"
                  alt="Freccia sinistra"
                  className="w-6 h-6"
                />
              </button>
            )}

            <p>Domanda successiva</p>

            <button onClick={avanti} disabled={!selezione}>
              <img
                src="./immagini/icon/arrow-right.svg"
                alt="Freccia destra"
                className={`w-6 h-6 ${!selezione ? "opacity-30 cursor-not-allowed" : ""}`}
              />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-2">
            <button
              type="submit"
              disabled={!selezione}
              className={`text-[23px] px-12 py-4 rounded-4xl bg-[#A7D6E0] ${
                !selezione ? "opacity-30 cursor-not-allowed" : ""
              }`}
            >
              Termina il quiz
            </button>

            <p
              className="text-sm flex items-center cursor-pointer"
              onClick={indietro}
            >
              <img
                src="./immagini/icon/arrow-left.svg"
                alt="Freccia sinistra"
                className="w-4 h-4 mr-1 "
              />
              Domanda precedente
            </p>
          </div>
        )}

        <img
          src="./immagini/nebula form.png"
          alt="NebulaForm"
          className="h-[350px] w-[250px]"
        />
      </div>
    </>
  );
};

export default Quiz;
