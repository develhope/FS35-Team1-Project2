import Struttura4Gioco from "./Struttura4Gioco";

const Livello3Gioco4 = () => {
  return (
    <Struttura4Gioco
    domanda1={<img src="/assets/immagini/Gioco4/Lollipops6.jpg" />} // immagine1
    domanda2={<img src="/assets/immagini/Gioco4/Lollipops7.png" />} // immagine2
      condizione="È minore"
      comparazione="<"
      rispostaCorretta1={6} 
      rispostaCorretta2={7} 
      destinazione={"/livello4gioco4"}
      avanti="Prossimo Livello"
    />
  );
};

export default Livello3Gioco4;

