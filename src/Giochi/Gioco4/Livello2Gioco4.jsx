import Struttura4Gioco from "./Struttura4Gioco";

const Livello2Gioco4 = () => {
  return (
    <Struttura4Gioco
      domanda1={<img src="/assets/immagini/Gioco4/torta6.jpg" />} // immagine1
      domanda2={<img src="/assets/immagini/Gioco4/torta4.jpg" />} // immagine2
      condizione={"È maggiore"}
      comparazione=">"
      rispostaCorretta1={4} 
      rispostaCorretta2={6} 
      destinazione={"/livello3gioco4"}
    />
  );
};

export default Livello2Gioco4;


