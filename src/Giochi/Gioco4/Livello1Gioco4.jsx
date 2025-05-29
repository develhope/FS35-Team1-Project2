import Struttura4Gioco from "./Struttura4Gioco";

const Livello1Gioco4 = () => {
 return (
    <Struttura4Gioco
      domanda1={<img src="/assets/immagini/Gioco4/cupcake2.jpg" />} // immagine1
      domanda2={<img src="/assets/immagini/Gioco4/cupcake4.jpg" />} // immagine2
      condizione={"È maggiore"}
      comparazione=">"
      rispostaCorretta1={4} 
      rispostaCorretta2={2} 
      destinazione={"/livello2gioco4"}
      avanti="Prossimo Livello"
    />
  );
};
 
export default Livello1Gioco4;