import Lottie from "lottie-react";
import astronauta from "../assets/animazioni/astronautaGame1.json";

const AstronautaGame1 = () => {
  return (
    <div className="flex justify-center w-35 h-25 items-center mb-3">
      <div className="w-40 md:w-300 lg:w-150">
        <Lottie animationData={astronauta} loop={true} />
      </div>
    </div>
  );
};

export default AstronautaGame1;
