import React from "react";
import Struttura3Gioco from "./Struttura3Gioco";

const Livello1Gioco3 = () => {
  const blocchiPerLivello1 = [
    { tipo: 'numero', valore: "2", colore: 'pink' },
    { tipo: 'frutto', valore: "tre banane", colore: 'lilac' },
    { tipo: 'frutto', valore: "due mele", colore: 'blue' },
    { tipo: 'numero', valore: "3", colore: 'yellow' },
  ];

  // Calcola la larghezza della griglia basandoti sul numero di colonne e il gap
  // Larghezza di un blocco: w-20 = 80px
  // gap-x-0 = 0px
  // 2 colonne * 80px/colonna + 0px di gap = 160px
  const gridCalcWidth = 'w-[160px]'; // Per 2 colonne w-20 e gap-x-0

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
      // NUOVE PROPS PER LA GRIGLIA
      gridCols="grid-cols-2" // 2 colonne
      gapX="gap-x-5"        // Nessun gap orizzontale
      gapY="gap-y-6"        // Gap verticale di 16px (4 unità Tailwind)
      gridWidth={gridCalcWidth} // Larghezza calcolata per 2 colonne e 0 gap
    />
  );
};

export default Livello1Gioco3;