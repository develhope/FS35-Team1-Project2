import Struttura4Gioco from "./Struttura4Gioco";

const Livello4Gioco4 = () => {
  return (
    <Struttura4Gioco
     domanda1={<img src="/assets/immagini/Gioco4/cookies9.png" />} // immagine1
     domanda2={<img src="/assets/immagini/Gioco4/cookies8.png" />} // immagine2
      condizione="È minore"
      comparazione="<"
      rispostaCorretta1={8} 
      rispostaCorretta2={9} 
      destinazione={"/vittoriagioco4"}
    />
  );
};

export default Livello4Gioco4;