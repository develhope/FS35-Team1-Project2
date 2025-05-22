import Struttura1Gioco from "./Struttura1Gioco";

const Livello1Gioco1 = () => {
  return (
    <Struttura1Gioco
      traccia="Quante mele ci sono?"
      sottotraccia="Aiutati contando con le dita"
      imgs={[
        "https://i.etsystatic.com/15835007/r/il/ffcf81/3319408935/il_570xN.3319408935_5a1a.jpg",
        "https://i.etsystatic.com/15835007/r/il/ffcf81/3319408935/il_570xN.3319408935_5a1a.jpg",
        "https://i.etsystatic.com/15835007/r/il/ffcf81/3319408935/il_570xN.3319408935_5a1a.jpg"
      ]}
      opz1="4"
      opz2="5"
      opz3="3"
      rispostaCorretta="3"
      nebula="../../immagini/Gioco1/nebula giochi.png"
      prossimoLivelloLink="/livello2"
     posizioneAstronauti={{
  donna: { left: 60, top: 60 },
  maschio: { left: 230, top: 20 },
}}
    />
  );
};

export default Livello1Gioco1;
