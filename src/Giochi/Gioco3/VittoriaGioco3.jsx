import StrutturaVittoria from "../../Components/StrutturaVittoria";

const VittoriaGioco3 = () => {
  return (
    <StrutturaVittoria
      punti={150}
      sfondo="/immagini/sfondoproseguogiochi.svg"
      immagine1="./immagini/Gioco3/scimmia_home_3.svg"
      frase="Grazie a te la scimmietta è riuscita a comprare tutti i frutti richiesti dalla mamma!"
      isVittoriaGioco3={true} // <-- flag attivato per questo gioco
    />
  );
};

export default VittoriaGioco3;
