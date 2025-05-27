// src/components/Livello3Gioco3.jsx
import React from "react";
import Struttura3Gioco from "./Struttura3Gioco";

const Livello3Gioco3 = () => {
  const blocchiPerLivello3 = [
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
    },
    {
      tipo: "frutto",
      valore: "cinque pere",
      colore: "blue",
      immagineSrc: "/assets/immagini/Gioco3/cinquepere.png",
    },
    {
      tipo: "numero",
      valore: "tre dita",
      colore: "yellow",
      immagineSrc: "/assets/immagini/Gioco3/mano_3.svg",
    },
    {
      tipo: "frutto",
      valore: "due mele",
      colore: "blue",
      immagineSrc: "/assets/immagini/Gioco3/Apple.svg",
    },
    {
      tipo: "numero",
      valore: "cinque dita",
      colore: "yellow",
      immagineSrc: "/assets/immagini/Gioco3/mano_5.svg",
    },
  ];

  // Le tue associazioni corrette sono già qui!
  const risposteCorretteLivello3 = {
    "due dita": "due mele",
    "tre dita": "tre banane",
    "cinque dita": "cinque pere",
  };

  const gridCalcWidth = "w-[280px]";

  return (
    <Struttura3Gioco
      titoloLivello="Conta quante dita ci sono nella mano e unisci i frutti con la quantità giusta!"
      istruzioniTesto="Trascina il numero giusto sull’immagine giusta o viceversa."
      risposteCorrette={risposteCorretteLivello3} // Questo viene passato alla Struttura3Gioco
      livelloSuccessivoPath="/livello4gioco3"
      blocchiGioco={blocchiPerLivello3}
      gridCols="grid-cols-3"
      gapX="gap-x-5"
      gapY="gap-y-6"
      gridWidth={gridCalcWidth}
    />
  );
};

export default Livello3Gioco3;
