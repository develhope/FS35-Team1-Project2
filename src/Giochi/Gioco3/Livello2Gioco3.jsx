// src/components/Livello2Gioco3.jsx (o dove preferisci i tuoi file di livello)
import React from "react";
import Struttura3Gioco from "./Struttura3Gioco"; // Assicurati che il percorso sia corretto

const Livello2Gioco3 = () => {
  // 1. Definisci l'array dei blocchi per il Livello 2, con l'ordine e i colori desiderati
  const blocchiPerLivello2 = [
    { tipo: "numero", valore: "2", colore: "pink" },
    {
      tipo: "frutto",
      valore: "tre banane",
      colore: "lilac",
      immagineSrc: "/assets/immagini/Gioco3/trebanane.png",
    },
    {
      tipo: "frutto",
      valore: "una pera",
      colore: "pink",
      immagineSrc: "/assets/immagini/Gioco3/Pera.svg",
    },
    { tipo: "numero", valore: "3", colore: "yellow" },
    {
      tipo: "frutto",
      valore: "due mele",
      colore: "blue",
      immagineSrc: "/assets/immagini/Gioco3/Apple.svg",
    },
    { tipo: "numero", valore: "1", colore: "yellow" },
  ];

  // 2. Definisci le associazioni corrette per il Livello 2
  // Basandoci sui contenuti, le associazioni logiche dovrebbero essere:
  const risposteCorretteLivello2 = {
    1: "una pera",
    2: "due mele",
    3: "tre banane",
  };

  const gridCalcWidth = "w-[288px]";

  return (
    <Struttura3Gioco
      titoloLivello="Unisci i frutti con la quantità numerica giusta!"
      istruzioniTesto="Trascina il numero giusto sull’immagine giusta o viceversa."
      risposteCorrette={risposteCorretteLivello2}
      livelloSuccessivoPath="/livello3gioco3" // Imposta il percorso al prossimo livello
      blocchiGioco={blocchiPerLivello2}
      // NUOVE PROPS PER LA GRIGLIA (3 colonne e gap-x-6)
      gridCols="grid-cols-3" // Ora 3 colonne
      gapX="gap-x-6" // Gap orizzontale come nella foto
      gapY="gap-y-4" // Gap verticale (mantenuto)
      gridWidth={gridCalcWidth} // Nuova larghezza calcolata
    />
  );
};

export default Livello2Gioco3;
