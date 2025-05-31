import React from "react";
import Header from "../Components/Header";
import GamePageSection from "../Components/GamePageSection";

const GamePage1 = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center mt-18">
        <GamePageSection
          title="Conta con Nebula"
          img={
            <img
              className="w-60 mx-auto md:w-100 md:mt-3"
              src="/assets/immagini/Gioco1/astronauti.svg"
              alt="astronauti"
            />
          }
          description="Aiuta i due astronauti innamorati ad incontrarsi. Risolvi tutti i livelli del gioco!"
          instructions={
            <p>
              Conta gli oggetti che vedi sullo schermo. <br />
              Tocca il numero giusto tra le opzioni per rispondere. <br />
              <br />
              Quando arrivi agli ultimi livelli, dovrai fare delle somme
              semplici! <br />
              Non preoccuparti: saranno facili e potrai usare le dita o aiutarti
              con le immagini. <br />
              Se sbagli, puoi riprovare quante volte vuoi! <br />
              <br />
              <br />
              🏆 Ogni risposta giusta ti farà guadagnare un sorriso di Nebula...
              e magari qualche sorpresa!
            </p>
          }
        />
      </main>
    </>
  );
};

export default GamePage1;
