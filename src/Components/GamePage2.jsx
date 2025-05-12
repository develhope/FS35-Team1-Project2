import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CallToAction from "./CallToAction";
import GamePageSection from "./GamePageSection";
  
const GamePage2 = () => {
  return (
    <>
      <Header
        leftIcon={<img src="./immagini/icon/hamburger.svg" className="w-[24px] ml-1" />}
        centerIcon={<img src="./immagini/logo.svg" className="w-[80px] ml-6" />}
      />
      <main className="flex flex-col justify-center items-center p-4">
        <GamePageSection title="Metti in ordine" />
        <GamePageSection title="Descrizione" content="L'astronauta Marco ha trovato dei numeri sparsi nello spazio. Aiutalo a rimetterli in ordine!" />
        <GamePageSection title="Istruzioni" content="Conta gli oggetti che vedi sullo schermo. Tocca il numero giusto tra le opzioni per rispondere. Quando arrivi agli ultimi livelli, dovrai fare delle somme semplici! Non preoccuparti: saranno facili e potrai usare le dita o aiutarti con le immagini. Se sbagli, puoi riprovare quante volte vuoi! 🏆 Ogni risposta giusta ti farà guadagnare un sorriso di Nebula... e magari qualche sorpresa!" />
        <GamePageSection title="Anteprima video" video="example.mp4" alt="Anteprima Video"  />
        <CallToAction text="Iscriviti e gioca!" />
      </main>
      <Footer />
    </>
  );
};

export default GamePage2;