import Struttura4Gioco from "./Struttura4Gioco";

const Livello4Gioco4 = () => {
  return (
    <Struttura4Gioco
      domanda1="17 Oggetti" // Pulsante sopra
      domanda2="13 Oggetti" // Pulsante sotto
      condizione="È minore"
      comparazione="<"
      valore1={17} // Pulsante sinistro
      valore2={13} // Pulsante destro
      rispostaCorretta={13} 
      destinazione={"/vittoriagioco4"}
    />
  );
};

export default Livello4Gioco4;