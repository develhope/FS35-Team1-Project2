import Struttura1Gioco from "./Struttura1Gioco";

const Livello4Gioco1 = () => {
  return (
    <Struttura1Gioco
      imgs={[
        "https://static.vecteezy.com/ti/vettori-gratis/p1/7264022-fragola-isolata-fragole-con-foglia-isolare-intera-e-meta-di-fragola-su-fragole-bianche-isolare-vista-laterale-set-di-fragole-illustrazione-gratuito-vettoriale.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4UwlMaJ43rCKg-W-C_3j-66UCbMOweWgtew&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJqYHuAHNUgmnOaOL2X4X40LlVaep9ezG3A&s"
      ]}
      traccia="Quante fragole ci sono?"
      sottotraccia="Conta bene!"
      opz1="2"
      opz2="8"
      opz3="4"
      rispostaCorretta="8"
      nebula="../../immagini/Gioco1/nebula giochi.png"
      isFinalLevel={true}
    posizioneAstronauti={{
  donna: { left: 100, top: 60 },
  maschio: { left: 193, top: 46 },
}}


    />
  );
};

export default Livello4Gioco1;
