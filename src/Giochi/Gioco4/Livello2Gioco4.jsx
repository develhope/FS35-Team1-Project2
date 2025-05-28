import Struttura4Gioco from "./Struttura4Gioco";

const Livello2Gioco4 = () => {
  return (
    <Struttura4Gioco
      domanda1={<img src="/assets/immagini/Gioco4/torte6.png" />} // immagine1
      domanda2={<img src="/assets/immagini/Gioco4/torte4.png" />} // immagine2
      condizione={"È maggiore"}
      comparazione=">"
      rispostaCorretta1={6} 
      rispostaCorretta2={4} 
      destinazione={"/livello3gioco4"}
       avanti="Prossimo Livello"
    />
  );
};

export default Livello2Gioco4;


