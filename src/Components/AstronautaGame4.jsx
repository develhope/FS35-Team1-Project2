import Lottie from "lottie-react";
import astronauta4 from "../assets/animazioni/astronautagame4.json";

const AstronautaGame4 = () => {
  return (
    <div className="flex justify-center w-38 h-25 items-center mb-3">
      <div className="w-40 md:w-300 lg:w-150">
        <Lottie animationData={astronauta4} loop={true} />
      </div>
    </div>
  );
};

export default AstronautaGame4;
