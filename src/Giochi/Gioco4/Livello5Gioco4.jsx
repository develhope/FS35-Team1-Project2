import Struttura4Gioco from "./Struttura4Gioco";

const Livello4Gioco4 = () => {
  return (
    <Struttura4Gioco
      domanda1="" // Pulsante sopra
      domanda2="" // Pulsante sotto
      condizione=""
      comparazione=""
      valore1={4} // Pulsante sinistro
      valore2={6} // Pulsante destro
      rispostaCorretta={6} 
      destinazione={"/"}
    />
  );
};

export default Livello4Gioco4;