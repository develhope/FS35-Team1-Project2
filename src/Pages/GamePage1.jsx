import React from "react";
import Header from "../Components/Header";
import GamePageSection from "../Components/GamePageSection";
  
const GamePage1 = () => {
  return (
    <>
      <Header
        leftIcon={<img src="./immagini/icon/hamburger.svg" className="w-[24px] ml-1" />}
        centerIcon={<img src="./immagini/logo.svg" className="w-[80px] ml-6" />}
      />
      <main className="flex flex-col justify-center items-center p-4">
        <GamePageSection title="Conta con Nebula" video={<video 
              src="./immagini/freepik__creami-lillustrazione-per-bambini-di-un-astronauta__80674.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-185 h-35 object-cover"/>} description="Aiuta i due astronauti innamorati ad incontrarsi. Risolvi tutti i livelli del gioco!" instructions= {<p>Conta gli oggetti che vedi sullo schermo. <br/>Tocca il numero giusto tra le opzioni per rispondere. <br/><br/>Quando arrivi agli ultimi livelli, dovrai fare delle somme semplici! <br/>Non preoccuparti: saranno facili e potrai usare le dita o aiutarti con le immagini. <br/>Se sbagli, puoi riprovare quante volte vuoi! <br/><br/><br/>🏆 Ogni risposta giusta ti farà guadagnare un sorriso di Nebula... e magari qualche sorpresa!</p>}/>
      </main>
    </>
  );
};

export default GamePage1;