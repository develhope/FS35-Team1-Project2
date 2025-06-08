import { useEffect, useState } from "react";
import StrutturaVittoria from "../../Components/StrutturaVittoria";
import "./Struttura1gioco.css";

const VittoriaGioco1 = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 20); 
  }, []);

  return (
    <div className={`relative ${show ? "fade-in" : ""}`}>
      <img
        className="bg-transparent z-30 w-[50px] md:w-[100px] absolute top-[90px] md:top-[220px] lg:top-[120px] lg:left-[555px] lg:w-[60px] left-[180px] md:left-[340px]"
        src="/assets/immagini/Gioco1/cuorepaginafinale.png"
        alt=""
      />
      <StrutturaVittoria
        sfondo="/assets/immagini/Gioco1/sfondo-gioco-1.svg"
        immagine1="/assets/immagini/Gioco1/astronautagioco1donna.svg"
        immagine2="/assets/immagini/Gioco1/astronautagioco1maschio.svg"
        frase="Grazie a te i due astronauti innamorati si sono ritrovati!"
        flipDonna={false}
        donnaClass="translate-y-3 translate-x-3 md:-translate-x-[100px] md:translate-y-[210px] lg:translate-y-[30px]  lg:-translate-x-[2px] lg:w-35"
        maschioClass="-translate-x-3 md:-translate-x-[-80px] md:translate-y-[-90px] lg:translate-y-[20px]  lg:-translate-x-[25px] lg:w-30"
      />
    </div>
  );
};

export default VittoriaGioco1;
