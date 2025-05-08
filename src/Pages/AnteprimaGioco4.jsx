import AnteprimaGiochi from "../Components/AnteprimaGiochi"

const AnteprimaGioco4=()=>{

    return (

< AnteprimaGiochi 
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
      className="w-180 h-35 object-cover"
    />
  }
    
    img={
        <img
          className="w-[150px]"
          src="../../immagini/Gioco4/amicodinebula_1_4.svg"
          alt="Amici di Nebula"
        />
      }

/>

    )
}
export default AnteprimaGioco4