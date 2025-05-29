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
            className="w-200 h-34 object-cover rounded-full md:h-70 md:w-180"
          />
        }
        img={
          <img
            className="w-40 md:w-70"
            src="/assets/immagini/Gioco3/scimmia_home_3.svg"
            alt="Scimmietta Astronauta"
          />
        }
      />
      <div>
      <CallToAction
        route="/livello1gioco3"
        text="Iniziamo!"
        showAlways={true}
      />
      </div>
    </>
  );
};
export default AnteprimaGioco3;
