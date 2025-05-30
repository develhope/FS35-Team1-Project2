import React from "react";
import Struttura3Gioco from "./Struttura3Gioco";

const Livello4Gioco3 = () => {
  // 1. Definisci l'array dei blocchi per il Livello 5 (3 righe x 3 colonne = 9 blocchi)
  const blocchiPerLivello4 = [
    // Prima riga
    {
      tipo: "numero",
      valore: "due dita",
      colore: "yellow",
      immagineSrc: "/assets/immagini/Gioco3/mano_2.svg",
    },
    {
      tipo: "frutto",
      valore: "tre banane",
      colore: "blue",
      immagineSrc: "/assets/immagini/Gioco3/trebanane.png",
    }, // Esempio: "una fragola"
    {
      tipo: "numero",
      valore: "tre dita",
      colore: "yellow",
      immagineSrc: "/assets/immagini/Gioco3/mano_3.svg",
    },

    // Seconda riga
    {
      tipo: "frutto",
      valore: "cinque pere",
      colore: "blue",
      immagineSrc: "/assets/immagini/Gioco3/cinquepere.png",
    },
    {
      tipo: "frutto",
      valore: "due mele",
      colore: "blue",
      immagineSrc: "/assets/immagini/Gioco3/Apple.svg",
    }, // Esempio: "un dito"
    {
      tipo: "numero",
      valore: "quattro dita",
      colore: "yellow",
      immagineSrc: "/assets/immagini/Gioco3/mano_4.svg",
    }, // Esempio: "quattro arance"

    // Terza riga
    {
      tipo: "numero",
      valore: "cinque dita",
      colore: "yellow",
      immagineSrc: "/assets/immagini/Gioco3/mano_5.svg",
    },
    {
      tipo: "frutto",
      valore: "quattro fragole",
      colore: "blue",
      immagineSrc: "/assets/immagini/Gioco3/fragole.png",
    },
  ];

  // 2. Definisci le associazioni corrette per il Livello 5
  // Adatta queste associazioni in base ai frutti/numeri che deciderai di usare
  const risposteCorretteLivello4 = {
    "due dita": "due mele",
    "tre dita": "tre banane",
    "quattro dita": "quattro fragole",
    "cinque dita": "cinque pere",
  };

  const gridCalcWidth = "w-[280px]"; // <--- AGGIORNATO PER 3 COLONNE e gap-x-6

  return (
    <Struttura3Gioco
      titoloLivello="Conta quante dita ci sono nella mano e unisci i frutti con la quantità giusta!"
      istruzioniTesto="Trascina il numero giusto sull'immagine o viceversa." // Istruzioni generiche
      risposteCorrette={risposteCorretteLivello4}
      livelloSuccessivoPath="/vittoriagioco3" // Imposta il percorso al prossimo livello
      blocchiGioco={blocchiPerLivello4}
      // PROPS PER LA GRIGLIA
      gridCols="grid-cols-3" // <--- CAMBIATO QUI per 3 colonne
      gapX="gap-x-6 md:gap-x-34" // <--- SUGGERISCO QUESTO gap per migliore estetica/spazio
      gapY="gap-y-2 md:gap-y-6" // Gap verticale (come Livello 1, 2, 3)
      gridWidth={gridCalcWidth} // Larghezza calcolata
      versioneCompatta
    />
  );
};

export default Livello4Gioco3;
