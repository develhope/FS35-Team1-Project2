import React from "react";
import Header from "../Components/Header";
import GamePageSection from "../Components/GamePageSection";
  
const GamePage4 = () => {
  return (
    <>
      <Header
        leftIcon={<img src="./immagini/icon/hamburger.svg" className="w-[24px] ml-1" />}
        centerIcon={<img src="./immagini/logo.svg" className="w-[80px] ml-6" />}
      />
      <main className="flex flex-col justify-center items-center p-4">
        <GamePageSection title="Chi ne ha di più?" video={<video 
              src="./immagini/freepik__creami-lillustrazione-per-bambini-di-un-astronauta__80674.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-185 h-35 object-cover"/>} description="Nebula ha due amichetti alieni, aiutali a capire chi dei due amici ha più oggetti!" instructions= {<p>Guarda i due numeri sui blocchi.<br/>Tocca il numero più grande 🐘 o più piccolo 🐭 secondo la richiesta.<br/><br/>I simboli ti aiuteranno:<br/>'&gt;' vuol dire più grande<br/>'&lt;' vuol dire più piccolo<br/><br/>🧠 Nei livelli finali:<br/>Vedrai blocchi con oggetti da contare (come frutti o stelle).<br/><br/>Conta quanti oggetti ci sono ✍<br/>Poi scegli: è maggiore o minore?<br/><br/>💡 Prenditi il tuo tempo.<br/>Conta con le dita o ad alta voce, e usa gli occhi per confrontare!<br/><br/>🌟 Ogni confronto corretto rende Nebula più saggia... e il cielo si illumina di stelle!</p>}/>
      </main>
    </>
  );
};

export default GamePage4;