import Struttura4Gioco from "./Struttura4Gioco";

const Livello2Gioco4 = () => {
  return (
    <Struttura4Gioco
      domanda1="11 Oggetti" // Pulsante sopra
      domanda2="15 Oggetti" // Pulsante sotto
      condizione="È maggiore"
      comparazione=">"
      valore1={11} // Pulsante sinistro
      valore2={15} // Pulsante destro
      rispostaCorretta={15} 
      destinazione={"/livello3gioco4"}
    />
  );
};

export default Livello2Gioco4;