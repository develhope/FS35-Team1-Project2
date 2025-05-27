const HeaderGioco2 = ({ titolo }) => {
  const leftElementsWidth = "w-20"; 

  return (
    <div className="w-full flex items-center justify-between font-bold">
      {/* Contenitore per l'icona home. */}
      <div className={`flex items-center ${leftElementsWidth}`}>
        <img
          src="../immagini/icon/sfondo-home.svg"
          alt="icona home"
          className="w-8 invert"
        />
      </div>
      
      {/* Contenitore per il titolo, che prenderà lo spazio rimanente e centrerà il testo */}
      <div className="flex text-center">
        <h3 className="text-2xl text-white font-otomanopee">{titolo}</h3>
      </div>
      
      {/* Div vuoto con la stessa larghezza degli elementi a sinistra per garantire il perfetto centraggio */}
      <div className={leftElementsWidth}></div> 
    </div>
  );
};

export default HeaderGioco2;