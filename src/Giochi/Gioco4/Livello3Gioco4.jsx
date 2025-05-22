import Struttura4Gioco from "./Struttura4Gioco";

const Livello3Gioco4 = () => {
  return (
    <Struttura4Gioco
      domanda1="9 Oggetti" // Pulsante sopra
      domanda2="13 Oggetti" // Pulsante sotto
      condizione="È minore"
      comparazione="<"
      valore1={13} // Pulsante sinistro
      valore2={9} // Pulsante destro
      rispostaCorretta={9} 
      destinazione={"/livello4gioco4"}
    />
  );
};

export default Livello3Gioco4;