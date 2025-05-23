// src/components/Livello5Gioco3.jsx
import React from "react";
import Struttura3Gioco from "./Struttura3Gioco";

const Livello5Gioco3 = () => {
  // 1. Definisci l'array dei blocchi per il Livello 5 (3 righe x 3 colonne = 9 blocchi)
  const blocchiPerLivello5 = [
    // Prima riga
    { tipo: 'numero', valore: "due dita", colore: 'yellow', immagineSrc: "/immagini/Gioco3/mano_2.svg" },
    { tipo: 'frutto', valore: "tre banane", colore: 'blue', immagineSrc: "/immagini/Gioco3/Banane.svg" }, // Esempio: "una fragola"
    { tipo: 'numero', valore: "cinque dita", colore: 'yellow', immagineSrc: "/immagini/Gioco3/mano_3.svg" },

    // Seconda riga
    { tipo: 'frutto', valore: "cinque pere", colore: 'blue', immagineSrc: "/immagini/Gioco3/" },
    { tipo: 'frutto', valore: "due mele", colore: 'yellow', immagineSrc: "/immagini/Gioco3/Apple.svg" }, // Esempio: "un dito"
    { tipo: 'numero', valore: "quattro dita", colore: 'yellow', immagineSrc: "/immagini/Gioco3/mano_4.svg"}, // Esempio: "quattro arance"

    // Terza riga
    { tipo: 'numero', valore: "tre dita", colore: 'yellow', immagineSrc: "/immagini/Gioco3/mano_5.svg" },
    { tipo: 'frutto', valore: "quattro fragole", colore: 'blue', immagineSrc: "/immagini/Gioco3/" },
    {  }, // Esempio: "quattro dita"
  ];

  // 2. Definisci le associazioni corrette per il Livello 5
  // Adatta queste associazioni in base ai frutti/numeri che deciderai di usare
  const risposteCorretteLivello5 = {
    "quattro dita": "quattro fragole",
    "due dita": "due mele",
    "tre dita": "tre banane",
    "cinque pere" :"cinque pere"
    
  };

  
  const gridCalcWidth = 'w-[288px]'; // <--- AGGIORNATO PER 3 COLONNE e gap-x-6

  return (
    <Struttura3Gioco
      titoloLivello="Conta quante dita ci sono nella mano e unisci i frutti con la quantità giusta!"
      istruzioniTesto="Trascina il numero giusto sull'immagine o viceversa." // Istruzioni generiche
      risposteCorrette={risposteCorretteLivello5}
      livelloSuccessivoPath="/livello5gioco3" // Imposta il percorso al prossimo livello
      blocchiGioco={blocchiPerLivello5}
      // PROPS PER LA GRIGLIA
      gridCols="grid-cols-3" // <--- CAMBIATO QUI per 3 colonne
      gapX="gap-x-6"         // <--- SUGGERISCO QUESTO gap per migliore estetica/spazio
      gapY="gap-y-2"         // Gap verticale (come Livello 1, 2, 3)
      gridWidth={gridCalcWidth} // Larghezza calcolata
    />
  );
};

export default Livello5Gioco3;