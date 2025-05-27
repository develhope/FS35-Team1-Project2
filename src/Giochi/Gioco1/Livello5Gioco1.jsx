import { useEffect, useState } from "react";
import StrutturaVittoria from "../../Components/StrutturaVittoria";
import "./Struttura1gioco.css";

const Livello5Gioco1 = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 20); // Delay per attivare animazione CSS
  }, []);

  return (
    <div className={`relative ${show ? "fade-in" : ""}`}>
      <img
        className="bg-transparent z-30 w-[50px] absolute top-[130px] left-[164px]"
        src="/assets/immagini/Gioco1/cuorepaginafinale.png"
        alt=""
      />
      <StrutturaVittoria
        sfondo="/assets/immagini/Gioco1/sfondo-gioco-1.svg"
        immagine1="/assets/immagini/Gioco1/astronautagioco1donna.svg"
        immagine2="/assets/immagini/Gioco1/astronautagioco1maschio.svg"
        frase="Grazie a te i due astronauti innamorati si sono ritrovati!"
        flipDonna={false}
        donnaClass="translate-y-3 translate-x-3"
        maschioClass="-translate-x-3"
      />
    </div>
  );
};

export default Livello5Gioco1;
