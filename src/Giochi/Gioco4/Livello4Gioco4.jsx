import Struttura4Gioco from "./Struttura4Gioco";

const Livello4Gioco4 = () => {
  return (
    <Struttura4Gioco
     domanda1={<img src="/assets/immagini/Gioco4/cupcake2.jpg" />} // immagine1
     domanda2={<img src="/assets/immagini/Gioco4/cupcake4.jpg" />} // immagine2
      condizione="È minore"
      comparazione="<"
      rispostaCorretta1={10} 
      rispostaCorretta2={8} 
      destinazione={"/vittoriagioco4"}
    />
  );
};

export default Livello4Gioco4;