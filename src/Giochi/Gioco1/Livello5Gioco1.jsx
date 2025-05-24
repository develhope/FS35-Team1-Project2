import StrutturaVittoria from "../../Components/StrutturaVittoria";

const Livello5Gioco1 = () => {
  return (
    <div className="relative">
      <StrutturaVittoria
        punti={200}
        sfondo="/immagini/Gioco1/sfondo-gioco-1.svg"
        immagine1="./immagini/Gioco1/astronautagioco1donna.svg"
        immagine2="./immagini/Gioco1/astronautagioco1maschio.svg"
        frase="Grazie a te i due astronauti innamorati si sono ritrovati!"
        flipDonna={false} // <-- non ribalta la donna
        donnaClass="translate-y-3 translate-x-3"
        maschioClass="-translate-x-3"
      />
    </div>
  );
};

export default Livello5Gioco1;
