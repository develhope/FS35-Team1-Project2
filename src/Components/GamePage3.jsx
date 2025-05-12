import React from "react";
import Header from "./Header";
import GamePageSection from "./GamePageSection";
  
const GamePage3 = () => {
  return (
    <>
      <Header
        leftIcon={<img src="./immagini/icon/hamburger.svg" className="w-[24px] ml-1" />}
        centerIcon={<img src="./immagini/logo.svg" className="w-[80px] ml-6" />}
      />
      <main className="flex flex-col justify-center items-center p-4">
        <GamePageSection title="Trova la coppia" video={<video 
              src="./immagini/freepik__creami-lillustrazione-per-bambini-di-un-astronauta__80674.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-185 h-35 object-cover"/>} description="La scimmietta astronauta ha una lista della spesa e deve raccogliere la quantità di frutti richiesta dalla mamma." instructions= {<p>Guarda bene le immagini con gli oggetti.<br/>Conta quanti oggetti ci sono e trascina il numero giusto accanto all'immagine! ✨<br/><br/>Nei livelli più avanzati... sorpresa!<br/>Dovrai fare un passo in più:<br/>Unisci l’immagine, la quantità scritta<br/>(es. “quattro”) e il numero (es. “4”).<br/><br/>🧠 Usa gli occhi, le mani e la testa!<br/>Se sbagli, puoi riprovare tutte le volte che vuoi.<br/><br/>🎉 Ogni abbinamento corretto aiuta Nebula a sistemare il suo magico archivio delle quantità!</p>}/>
      </main>
    </>
  );
};

export default GamePage3;