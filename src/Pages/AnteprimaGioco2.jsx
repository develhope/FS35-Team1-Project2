import AnteprimaGiochi from "../Components/AnteprimaGiochi";
import CallToAction from "../Components/CallToAction";

const AnteprimaGioco2 = () => {
  return (
    <>
      <AnteprimaGiochi
        gioco="Gioco 2"
        title="Metti in ordine"
        text="L'astronauta ha trovato dei numeri sparsi nello spazio. Aiutalo a rimetterli in ordine!"
        media={
          <video
            src="../../immagini/freepik__creami-lillustrazione-per-bambini-di-un-astronauta__80674.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-170 h-38 object-cover rounded-full md:h-68 md:w-145 md:mt-10"
          />
        }
        img={
          <img
            className="w-40 md:w-70"
            src="/assets/immagini/Gioco2/astronauta biondo su pianeta.svg"
            alt="Astronauta biondo su pianeta"
          />
        }
      />
      <CallToAction
        route="/livello1gioco2"
        text="Iniziamo!"
        showAlways={true}
      />
    </>
  );
};
export default AnteprimaGioco2;
