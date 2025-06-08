import Struttura1Gioco from "./Struttura1Gioco";

const Livello1Gioco1 = () => {
  return (
    <Struttura1Gioco
      traccia="Quante mele ci sono?"
      sottotraccia="Aiutati contando con le dita"
      imgs={[
        "https://i.etsystatic.com/15835007/r/il/ffcf81/3319408935/il_570xN.3319408935_5a1a.jpg",
        "https://i.etsystatic.com/15835007/r/il/ffcf81/3319408935/il_570xN.3319408935_5a1a.jpg",
        "https://i.etsystatic.com/15835007/r/il/ffcf81/3319408935/il_570xN.3319408935_5a1a.jpg",
      ]}
      opz1="4"
      opz2="5"
      opz3="3"
      rispostaCorretta="3"
      nebula="/assets/immagini/Gioco1/nebulagames.png"
      prossimoLivelloLink="/livello2gioco1"
      posizioneAstronauti={{
        donna: { default: "top-[60px] left-[60px]", md: "md:top-[150px] md:left-[200px]",lg: "lg:top-[10px] lg:left-[450px] lg:w-[75px]" },
      maschio: { default: "top-[20px] left-[230px]", md: "md:top-[70px] md:left-[450px]",lg: "lg:top-[2px] lg:left-[620px] lg:w-[75px]" },
      }}
    />
  );
};

export default Livello1Gioco1;
