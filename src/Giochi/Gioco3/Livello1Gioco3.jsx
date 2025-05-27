import React from "react";
import  Struttura3Gioco from "./Struttura3Gioco";

const Livello1Gioco3 = () => {
  const blocchiPerLivello1 = [
    { tipo: 'numero', valore: "2", colore: 'pink' },
    { tipo: 'frutto', valore: "tre banane", colore: 'lilac', immagineSrc: "/assets/immagini/Gioco3/trebanane.png" }, // AGGIUNTO immagineSrc
    { tipo: 'frutto', valore: "due mele", colore: 'blue', immagineSrc: "/assets/immagini/Gioco3/Apple.svg" },     // AGGIUNTO immagineSrc
    { tipo: 'numero', valore: "3", colore: 'yellow' },
  ];

  const gridCalcWidth = 'w-[180px]'; 

  return (
    <Struttura3Gioco
      titoloLivello="Unisci i frutti con la quantità numerica giusta!"
      istruzioniTesto="Trascina il numero giusto sull’immagine giusta o viceversa."
      risposteCorrette={{
        "2": "due mele",
        "3": "tre banane",
      }}
      livelloSuccessivoPath="/livello2gioco3"
      blocchiGioco={blocchiPerLivello1}
      // PROPS PER LA GRIGLIA
      gridCols="grid-cols-2"
      gapX="gap-x-5"        // Gap orizzontale di 20px
      gapY="gap-y-6"        // Gap verticale di 24px (6 unità Tailwind)
      gridWidth={gridCalcWidth} // Larghezza calcolata per 2 colonne e gap-x-5
    />
  );
};

export default Livello1Gioco3;