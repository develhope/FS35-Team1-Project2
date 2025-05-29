import AnteprimaGiochi from "../Components/AnteprimaGiochi";
import CallToAction from "../Components/CallToAction";

const AnteprimaGioco1 = () => {
  return (
    <>
      <AnteprimaGiochi
        gioco="Gioco 1"
        title="Conta con Nebula!"
        text="Aiuta i due astronauti innamorati ad incontrarsi. Risolvi tutti i livelli del gioco!"
        media={
          <video
            src="../../immagini/freepik__creami-lillustrazione-per-bambini-di-un-astronauta__80674.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-170 h-36 object-cover rounded-full"
          />
        }
        img={
          <img
            className="w-[250px]"
            src="/assets/immagini/Gioco1/astronauti.svg"
            alt="astronauti"
          />
        }
      />

      <CallToAction
        route="/livello1gioco1"
        text="Iniziamo!"
        showAlways={true}
      />
    </>
  );
};
export default AnteprimaGioco1;
