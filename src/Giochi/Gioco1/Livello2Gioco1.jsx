import Struttura1Gioco from "./Struttura1Gioco";

const Livello2Gioco1 = () => {
  return (
    <Struttura1Gioco
      traccia="Quanti pesci ci sono?"
      sottotraccia="Aiutati contando con le dita"
      imgs={[
        "https://img.freepik.com/vettori-premium/illustrazione-vettoriale-piatta-isolata-di-pesci-rossi-su-sfondo-bianco_674398-11478.jpg?semt=ais_hybrid&w=740",
        "https://us.123rf.com/450wm/rdesign0209/rdesign02091906/rdesign0209190600652/151390580-illustrazione-di-un-pesce-visto-di-lato.jpg?ver=6",
        "https://image.shutterstock.com/image-vector/cute-ruff-fish-on-white-260nw-1806218740.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHne979k6i4J3DsiNjq-9HE1QPbCfanAYRYQ&s",
        "https://i.etsystatic.com/12769670/r/il/294b18/1036016067/il_1588xN.1036016067_8fvw.jpg",
        "https://img.freepik.com/vettori-premium/un-disegno-di-un-pesce-colorato-con-una-coda-color-arcobaleno_1298961-30.jpg?semt=ais_hybrid&w=740",
      ]}
      opz1="10"
      opz2="8"
      opz3="6"
      rispostaCorretta="6"
      nebula="/assets/immagini/Gioco1/nebulagames.png"
      prossimoLivelloLink="/livello3gioco1"
      posizioneAstronauti={{
        donna: { default: "top-[60px] left-[65px]", md: "md:top-[130px] md:left-[225px]",lg: "lg:top-[10px] lg:left-[470px] lg:w-[75px]" },
      maschio: { default: "top-[20px] left-[215px]", md: "md:top-[90px] md:left-[430px]",lg: "lg:top-[2px] lg:left-[610px] lg:w-[75px]"  },
      }}
    />
  );
};

export default Livello2Gioco1;
