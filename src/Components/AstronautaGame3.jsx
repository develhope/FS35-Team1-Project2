import Lottie from "lottie-react";
import astronauta3 from "../assets/animazioni/astronautagame3.json";

const AstronautaGame3 = () => {
  return (
    <div className="flex justify-center w-40 h-30 items-center mb-3">
      <div className="w-40 md:w-300 lg:w-150">
        <Lottie animationData={astronauta3} loop={true} />
      </div>
    </div>
  );
};

export default AstronautaGame3;
