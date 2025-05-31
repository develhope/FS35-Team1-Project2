import React from "react";
import Header from "../Components/Header";
import GamePageSection from "../Components/GamePageSection";

const GamePage3 = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center mt-18">
        <GamePageSection
          title="Trova la coppia"
          img={
            <img
              className="w-40 mx-auto md:w-60 md:mt-3"
              src="/assets/immagini/Gioco3/scimmia_home_3.svg"
              alt="Scimmietta Astronauta"
            />
          }
          description="La scimmietta astronauta ha una lista della spesa e deve raccogliere la quantità di frutti richiesta dalla mamma."
          instructions={
            <p>
              Guarda bene le immagini con gli oggetti.
              <br />
              Conta quanti oggetti ci sono e trascina il numero giusto accanto
              all'immagine! ✨<br />
              <br />
              Nei livelli più avanzati... sorpresa!
              <br />
              Dovrai fare un passo in più:
              <br />
              Unisci l’immagine, la quantità scritta
              <br />
              (es. “quattro”) e il numero (es. “4”).
              <br />
              <br />
              🧠 Usa gli occhi, le mani e la testa!
              <br />
              Se sbagli, puoi riprovare tutte le volte che vuoi.
              <br />
              <br />
              🎉 Ogni abbinamento corretto aiuta Nebula a sistemare il suo
              magico archivio delle quantità!
            </p>
          }
        />
      </main>
    </>
  );
};

export default GamePage3;
