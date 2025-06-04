import Struttura1Gioco from "./Struttura1Gioco";

const Livello4Gioco1 = () => {
  return (
    <Struttura1Gioco
      imgs={[
        "https://static.vecteezy.com/ti/vettori-gratis/p1/7264022-fragola-isolata-fragole-con-foglia-isolare-intera-e-meta-di-fragola-su-fragole-bianche-isolare-vista-laterale-set-di-fragole-illustrazione-gratuito-vettoriale.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4UwlMaJ43rCKg-W-C_3j-66UCbMOweWgtew&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJqYHuAHNUgmnOaOL2X4X40LlVaep9ezG3A&s",
      ]}
      traccia=""
      sottotraccia="Conta le fragole e poi le banane ed in fine dimmi la somma di questi due frutti"
      opz1="2"
      opz2="8"
      opz3="4"
      rispostaCorretta="8"
      nebula="/assets/immagini/Gioco1/nebulagames.png"
      isFinalLevel={true}
      prossimoLivelloLink="/vittoriagioco1"
      posizioneAstronauti={{
         donna: { default: "top-[50px] left-[90px]", md: "md:top-[130px] md:left-[265px]" },
         maschio: { default: "top-[40px] left-[190px]", md: "md:top-[120px] md:left-[405px]" },
      }}
    />
  );
};

export default Livello4Gioco1;
