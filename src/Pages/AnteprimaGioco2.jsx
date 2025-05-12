import AnteprimaGiochi from "../Components/AnteprimaGiochi"

const AnteprimaGioco2=()=>{

    return (

< AnteprimaGiochi 
   gioco="Gioco 2"
   title="Metti in ordine"
  text="Il nostro amico astronauta ha trovato dei numeri sparsi nello spazio. Aiutalo a rimetterli in ordine!"
  
  media={
    <video 
      src="../../immagini/freepik__creami-lillustrazione-per-bambini-di-un-astronauta__80674.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="w-185 h-35 object-cover"
    />
  }
    
    img={
        <img
          className="w-[150px]"
          src="../../immagini/Gioco2/astronauta biondo su pianeta.svg"
          alt="Astronauta biondo su pianeta"
        />
      }

/>

    )
}
export default AnteprimaGioco2