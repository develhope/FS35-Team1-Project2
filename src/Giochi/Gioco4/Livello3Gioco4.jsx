import Struttura4Gioco from "./Struttura4Gioco";

const Livello3Gioco4 = () => {
  return (
    <Struttura4Gioco
    domanda1={<img src="/assets/immagini/Gioco4/cupcake2.jpg" />} // immagine1
    domanda2={<img src="/assets/immagini/Gioco4/cupcake4.jpg" />} // immagine2
      condizione="È minore"
      comparazione="<"
      rispostaCorretta1={6} 
      rispostaCorretta2={8} 
      destinazione={"/livello4gioco4"}
    />
  );
};

export default Livello3Gioco4;

