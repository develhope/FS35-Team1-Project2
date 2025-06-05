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
            className="w-170 h-38 object-cover rounded-full md:h-68 md:w-130"
          />
        }
        img={
          <div className="flex gap-6">
            <img
              className="w-35 transform scale-x-[-1] md:w-80 md:mt-3"
              src="/assets/immagini/Gioco4/amicodinebula_1_4.svg"
              alt="Amici di Nebula"
            />

            <img
              className="w-35 md:w-70 md:mt-3"
              src="/assets/immagini/Gioco4/amicodinebula_2_4.svg"
              alt="Amici di Nebula"
            />
          </div>
        }
        route="/livello1gioco4"
        callToAction1Text="Iniziamo!"
        callToAction1Classes="w-30 text-xl md:w-50"
        showTwoButtons={true}
        callToAction2Text="Livelli"
        callToAction2Route="/restart"
        callToAction2Classes="w-30 text-xl md:w-50"
      />
    </>
  );
};
export default AnteprimaGioco4;
