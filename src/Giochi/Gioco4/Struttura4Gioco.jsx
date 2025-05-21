const Struttura4Gioco = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/immagini/Gioco4/backgroundgioco4.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <div className="flex justify-center text-center max-w-60 m-auto">
          <p className="text-white">
            Dimmi qual’è il riquadro con il numero più alto di oggetti! Fai
            click prima sul riquadro con il numero più alto, dopo su quello con
            il numero più basso.
          </p>
        </div>

        <div className="flex items-start gap-1 p-4 mb-5">
          <img
            src="./immagini/Gioco4/amicodinebula_1_4.svg"
            alt=""
            className="w-30 h-auto object-contain transform scale-x-[-1]"
          />
          <div className="bg-gray-300 w-40 h-30 border border-gray-300 rounded text-center m-auto">
            6 Oggetti
          </div>
        </div>


<div className="flex items-start gap-15 p-4 m-auto">
         
          <div className="bg-gray-300 w-40 h-30 border border-gray-300 rounded text-center m-auto">
            4 Oggetti
          </div>
           <img
            src="./immagini/Gioco4/amicodinebula_2_4.svg"
            alt=""
            className="w-30 h-auto object-contain transform"
          />
        </div>



      </div>
    </>
  );
};

export default Struttura4Gioco;
