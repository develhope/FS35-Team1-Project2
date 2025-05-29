import AnteprimaGiochi from "../Components/AnteprimaGiochi";
import CallToAction from "../Components/CallToAction";
const AnteprimaGioco4 = () => {
  return (
    <>
      <AnteprimaGiochi
        gioco="Gioco 4"
        title="Chi ne ha di più?"
        text="Nebula ha due amichetti alieni, aiutali a capire chi dei due amici ha più oggetti!"
        media={
          <video
            src="../../immagini/freepik__creami-lillustrazione-per-bambini-di-un-astronauta__80674.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-170 h-38 object-cover rounded-full"
          />
        }
        img={
          <div className="flex gap-6">
            <img
              className="w-35 transform scale-x-[-1] "
              src="/assets/immagini/Gioco4/amicodinebula_1_4.svg"
              alt="Amici di Nebula"
            />

            <img
              className="w-35"
              src="/assets/immagini/Gioco4/amicodinebula_2_4.svg"
              alt="Amici di Nebula"
            />
          </div>
        }
      />
      <CallToAction
        route="/livello1gioco4"
        text="Iniziamo!"
        showAlways={true}
      />
    </>
  );
};
export default AnteprimaGioco4;
