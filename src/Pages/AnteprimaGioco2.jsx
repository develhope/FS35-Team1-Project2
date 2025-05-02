import AnteprimaGiochi from "../Components/AnteprimaGiochi"

const AnteprimaGioco2=()=>{

    return (

< AnteprimaGiochi 
   gioco="Gioco 2"
   title="Metti in ordine"
  text="L’astronauta Marco ha trovato dei numeri sparsi nello spazio. Aiutalo a rimetterli in ordine!"
  
  media={
      <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/d6LJHk6gdt4?autoplay=1&mute=1&si=hTitx0HY3v3HX2Mk"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      ></iframe>
    }
    
    img={
        <img
          className="w-[200px]"
          src="/immagini/nebula form.png"
          alt="astronauti"
        />
      }

/>

    )
}
export default AnteprimaGioco2