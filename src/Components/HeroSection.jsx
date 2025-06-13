import AstronautaHome from "./AstronautaHome";
import PianetiHome from "./PianetiHome";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-4 pt-20 relative">
      <div className="absolute flex items-center justify-center">
        <PianetiHome />
      </div>
      <div className="relative z-10">
        <img src="/immagini/nebula home2.svg" className="w-full" alt="Nebula" />
      </div>
      <div className="relative z-10 flex flex-col gap-2 px-6 pt-0 pb-6 w-full">
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

        <div className="flex justify-end">
          <AstronautaHome />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
