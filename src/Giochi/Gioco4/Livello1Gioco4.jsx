import Struttura4Gioco from "./Struttura4Gioco";

const Livello1Gioco4 = () => {
  return (
    <Struttura4Gioco
      domanda1="6 Oggetti" // Pulsante sopra
      domanda2="4 Oggetti" // Pulsante sotto
      condizione="È maggiore"
      comparazione=">"
      valore1={4} // Pulsante sinistro
      valore2={6} // Pulsante destro
      rispostaCorretta={6} 
      destinazione={"/livello2gioco4"}
    />
  );
};

export default Livello1Gioco4;