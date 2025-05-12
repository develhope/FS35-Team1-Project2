import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CallToAction from "./CallToAction";
import GamePageSection from "./GamePageSection";
  
const GamePage4 = () => {
  return (
    <>
      <Header
        leftIcon={<img src="./immagini/icon/hamburger.svg" className="w-[24px] ml-1" />}
        centerIcon={<img src="./immagini/logo.svg" className="w-[80px] ml-6" />}
      />
      <main className="flex flex-col justify-center items-center p-4">
        <GamePageSection title="Conta con Nebula" />
        <GamePageSection title="Descrizione" content="Aiuta i due astronauti innamorati ad incontrarsi. Risolvi tutti i livelli del gioco!" />
        <GamePageSection title="Istruzioni" content="Conta gli oggetti che vedi sullo schermo. Tocca il numero giusto tra le opzioni per rispondere. Quando arrivi agli ultimi livelli, dovrai fare delle somme semplici! Non preoccuparti: saranno facili e potrai usare le dita o aiutarti con le immagini. Se sbagli, puoi riprovare quante volte vuoi! 🏆 Ogni risposta giusta ti farà guadagnare un sorriso di Nebula... e magari qualche sorpresa!" />
        <GamePageSection title="Anteprima video" video="example.mp4" alt="Anteprima Video"  />
        <CallToAction text="Iscriviti e gioca!" />
      </main>
      <Footer />
    </>
  );
};

export default GamePage4;