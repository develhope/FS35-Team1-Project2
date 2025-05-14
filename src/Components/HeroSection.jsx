const HeroSection = () => {
  return (
    <div className="flex flex-col gap-4 pt-20">
      <img src="/immagini/nebula home2.svg" className="w-full" />

      <div
        className="flex flex-col gap-2 px-6 pt-0 pb-6 w-full"
      >
        <p
          className="text-right text-[#8079FF] w-3/4 ml-auto m-0"
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
          className=" text-[#8079FF] font-bold w-full max-w-md"
          style={{ fontFamily: "OtomanopeeOne-Regular" }}
        >
          3... 2... 1... <span className="text-xl">Via!</span>
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
