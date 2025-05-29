import AnteprimaGiochi from "../Components/AnteprimaGiochi";
import CallToAction from "../Components/CallToAction";
const AnteprimaGioco3 = () => {
  return (
    <>
      <AnteprimaGiochi
        title="Trova la coppia"
        text="La scimmietta astronauta ha una lista della spesa e deve raccogliere la quantità di frutti richiesta dalla mamma. "
        media={
          <video
            src="../../immagini/freepik__creami-lillustrazione-per-bambini-di-un-astronauta__80674.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-200 h-36 object-cover rounded-full md:h-68 md:w-190"
          />
        }
        img={
          <img
            className="w-40 md:w-70 md:mt-3"
            src="/assets/immagini/Gioco3/scimmia_home_3.svg"
            alt="Scimmietta Astronauta"
          />
        }
        route="/livello1gioco3"
      />
    </>
  );
};
export default AnteprimaGioco3;
