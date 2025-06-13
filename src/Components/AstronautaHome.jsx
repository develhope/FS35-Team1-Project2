import Lottie from "lottie-react";
import astronautahome from "../assets/animazioni/astronautahome.json";

const AstronautaHome = () => {
  return (
    <div className="flex justify-center w-50 h-24 md:w-80 md:h-40 items-center">
      <div className="w-50 md:w-300 lg:w-150">
        <Lottie animationData={astronautahome} loop={true} />
      </div>
    </div>
  );
};

export default AstronautaHome;
