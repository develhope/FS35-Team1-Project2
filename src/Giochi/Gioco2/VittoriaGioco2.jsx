import { useEffect, useState } from "react";
import StrutturaVittoria from "../../Components/StrutturaVittoria";
import "../Gioco1/Struttura1gioco.css";

const VittoriaGioco2 = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 20); 
  }, []);

  return (
    <div className={`relative ${show ? "fade-in" : ""}`}>
      <StrutturaVittoria
        sfondo="/assets/immagini/Gioco2/sfondo-gioco-2.svg"
        immagine1="/assets/immagini/Gioco2/astronauta biondo su pianeta.svg"
        frase="Grazie a te Marco ha ritrovato tutti i numeri persi nell’universo!"
        />
    </div>
  );
};

export default VittoriaGioco2;