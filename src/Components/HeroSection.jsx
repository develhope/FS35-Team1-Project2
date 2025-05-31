const HeroSection = () => {
  return (
    <div className="flex flex-col gap-4 pt-20">
      <img src="/immagini/nebula home2.svg" className="w-full" />
      <img
        src="/immagini/pianeti/pianeta2.svg"
        className="w-20 md:w-35 absolute left-10 md:left-20 mt-10 md:mt-20 planet-rotate planet-shadow"
        alt="Pianeta1"
      />
      <img
        src="/immagini/pianeti/pianeta1.svg"
        className="w-10 md:w-25 absolute left-65 md:left-150 mt-50 md:mt-100 planet-rotate planet-shadow"
        alt="Pianeta2"
      />
      <img
        src="/immagini/pianeti/pianeta4.svg"
        className="w-15 md:w-20 absolute left-65 md:left-130 mt-1 md:mt-15 planet-bounce planet-shadow"
        alt="Pianeta3"
      />
      <img
        src="/immagini/pianeti/pianeta6.svg"
        className="w-20 md:w-25 absolute left-20 md:left-40 mt-60 md:mt-120 planet-bounce planet-shadow"
        alt="Pianeta4"
      />
      <img
        src="/immagini/pianeti/pianeta7.svg"
        className="w-30 absolute left-55 md:left-130 mt-125 md:mt-230 planet-bounce planet-shadow"
        alt="Pianeta1"
      />

      <div className="flex flex-col gap-2 px-6 pt-0 pb-6 w-full">
        <p
          className="text-right md:text-3xl text-[#8079FF] w-3/4 ml-auto m-0"
          style={{ fontFamily: "OtomanopeeOne-Regular" }}
        >
          Ciao! Io sono{" "}
          <span
            className="text-[#FF00E5]"
            style={{ fontFamily: "OtomanopeeOne-Regular" }}
          >
            Nebula
          </span>
          , la tua guida spaziale nel mondo dei numeri! Insieme esploreremo
          galassie piene di giochi divertenti!
          <br />
          Pronto a partire?
        </p>

        <p
          className=" text-[#8079FF] md:text-3xl font-bold w-full max-w-md"
          style={{ fontFamily: "OtomanopeeOne-Regular" }}
        >
          3... 2... 1... <span className="text-xl md:text-5xl">Via!</span>
        </p>

        <div className="flex justify-center">
          <button>
            <img src="/immagini/icon/freccia-home.svg" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
