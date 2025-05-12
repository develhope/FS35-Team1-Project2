import React from "react";
import Header from "./Header";
import GamePageSection from "./GamePageSection";
  
const GamePage2 = () => {
  return (
    <>
      <Header
        leftIcon={<img src="./immagini/icon/hamburger.svg" className="w-[24px] ml-1" />}
        centerIcon={<img src="./immagini/logo.svg" className="w-[80px] ml-6" />}
      />
      <main className="flex flex-col justify-center items-center p-4">
        <GamePageSection title="Metti in ordine" video={<video 
              src="./immagini/freepik__creami-lillustrazione-per-bambini-di-un-astronauta__80674.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-185 h-35 object-cover"/>} description="L'astronauta Marco ha trovato dei numeri sparsi nello spazio. Aiutalo a rimetterli in ordine!" instructions= {<p>Guarda bene i numeri sparsi sullo schermo.<br/>Trascinali o toccali nell'ordine giusto:<br/>A volte in ordine crescente (dal più piccolo al più grande 📈),<br/>Altre volte in ordine decrescente (dal più grande al più piccolo 📉).<br/><br/>Nei livelli finali, ci sarà una sorpresa: alcuni numeri saranno scomparsi! 😮<br/>Tocca lo spazio vuoto e scegli il numero mancante per completare la sequenza.<br/><br/>💡 Usa la logica, l'intuizione… e se vuoi, anche le dita per contare! <br/><br/>🌟 Ogni serie completata ti avvicina a una nuova stella nel cielo di Nebula</p>}/>
      </main>
    </>
  );
};

export default GamePage2;