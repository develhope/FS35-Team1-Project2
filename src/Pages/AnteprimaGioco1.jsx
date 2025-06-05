import AnteprimaGiochi from "../Components/AnteprimaGiochi";

const AnteprimaGioco1 = () => {
  return (
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
          className="w-160 h-40 object-cover rounded-full md:h-68 md:w-130"
        />
      }
      img={
        <img
          className="w-60 md:w-110 md:mt-3"
          src="/assets/immagini/Gioco1/astronauti.svg"
          alt="astronauti"
        />
      }
      callToAction1Route="/livello1gioco1" // La route principale per il bottone "Iniziamo!"
      callToAction1Classes="w-30 text-xl md:w-50" // Esempio: personalizzazione del primo bottone
      showTwoButtons={true} // Per mostrare il secondo bottone
      callToAction2Text="Livelli"
      callToAction2Route="/restart"
      callToAction2Classes="w-30 text-xl md:w-50" // Esempio: personalizzazione del secondo bottone
    />
  );
};
export default AnteprimaGioco1;
