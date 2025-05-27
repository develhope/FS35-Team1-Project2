import StrutturaVittoria from "../../Components/StrutturaVittoria";

const VittoriaGioco4 = () => {
  return (
    <StrutturaVittoria
      punti={150} // Replace with actual points for Game 4
      sfondo="/assets/immagini/Gioco4/backgroundgioco4.svg"
      immagine1="/assets/immagini/Gioco4/amicodinebula_1_4.svg"
      immagine2="/assets/immagini/Gioco4/amicodinebula_2_4.svg"
      frase="Grazie a te gli amichetti di Nebula sanno chi di loro ha più oggetti!"
    />
  );
};

export default VittoriaGioco4;
