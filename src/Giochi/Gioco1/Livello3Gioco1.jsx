import Struttura1Gioco from "./Struttura1Gioco";

const Livello3Gioco1 = () => {
  return (
    <Struttura1Gioco
      traccia="Quanti biscotti ci sono?"
      sottotraccia="Fai attenzione, alcuni potrebbero essere nascosti"
      imgs={[
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxD10t6r7SxxBdKew0st9L31LpV9teawj4A&s",
        "https://media.istockphoto.com/id/1208648146/vector/chocolate-chip-cookie-illustration-in-vector.webp?b=1&s=612x612&w=0&k=20&c=YLqRd-v6QMPQTvhCIi9ypIkqXTfdwzVI7KFfD5fazso=",
        "https://us.123rf.com/450wm/embroiderypatterns/embroiderypatterns1602/embroiderypatterns160200045/51670605-l-odore-di-biscotti-appena-sfornati-%C3%A8-l-aroma-pi%C3%B9-attraente-del-pianeta-ottenere-questo-disegno.jpg",
      ]}
      opz1="10"
      opz2="4"
      opz3="6"
      rispostaCorretta="4"
      nebula="/assets/immagini/Gioco1/nebulagames.png"
      prossimoLivelloLink="/livello4gioco1"
      posizioneAstronauti={{
        donna: { default: "top-[50px] left-[75px]", md: "md:top-[130px] md:left-[250px]",lg: "lg:top-[10px] lg:left-[500px] lg:w-[75px]" },
     maschio: { default: "top-[30px] left-[200px]", md: "md:top-[110px] md:left-[420px]",lg: "lg:top-[2px] lg:left-[600px] lg:w-[75px]"  },
      }}
    />
  );
};

export default Livello3Gioco1;
