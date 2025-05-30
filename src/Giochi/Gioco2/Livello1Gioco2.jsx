// Livello1Gioco2.jsx
import Struttura2Gioco from "./Struttura2Gioco"; // Importa il componente di struttura

const levelConfig = {
  level: 1,
  gameMode: "smallToBig",
  instructions: `Metti in ordine dal numero più piccolo al più grande. Clicca sui pianeti per selezionarli.`,
  planets: [
    {
      id: "planet_4",
      value: 4,
      image: "/immagini/Pianeti/pianeta4.svg",
      size: "w-24 h-24",
    },
    {
      id: "planet_1",
      value: 1,
      image: "/immagini/Pianeti/pianeta1.svg",
      size: "w-24 h-24",
    },
    {
      id: "planet_2",
      value: 2,
      image: "/immagini/Pianeti/pianeta6.svg", // Immagine diversa per planet_2
      size: "w-24 h-24",
    },
    {
      id: "planet_3",
      value: 3,
      image: "/immagini/Pianeti/pianeta3.svg",
      size: "w-24 h-24",
    },
  ],
  expectedOrder: ["planet_1", "planet_2", "planet_3", "planet_4"],
};

function Livello1Gioco2() {
  return (
    <Struttura2Gioco
      levelConfig={levelConfig}
      prossimoLivelloLink="/livello2gioco2" // Percorso per il prossimo livello
      isFinalLevel={false}
    />
  );
}

export default Livello1Gioco2;