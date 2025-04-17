const HeroSection = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <img
        src="/immagini/nebula home2.svg"
        className="w-full h-1/2"
      />

     
      <div className="flex flex-col gap-2 px-6 pt-0 pb-6 w-full" style={{height:"50px"}}>
       
        <p className="text-right text-[#8079FF] font-bold w-3/4 ml-auto" style={{ fontFamily: 'OtomanopeeOne' }}>
          Ciao! Io sono <span className="text-[#FF00E5]" style={{ fontFamily: 'OtomanopeeOne-Regular' }}>Nebula</span>, la tua guida spaziale nel mondo dei
          numeri! Insieme esploreremo galassie piene di giochi divertenti!<br />
          Pronto a partire?
        </p>

       
        <p className=" text-[#8079FF] font-bold w-full max-w-md" style={{ fontFamily: 'OtomanopeeOne-Regular' }}>
          3... 2... 1... <span className="text-xl">Via!</span>
        </p>

      
        <div className="flex justify-center">
          <button><img src="/immagini/icon/freccia-home.svg" className="w-6 h-6" /></button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
