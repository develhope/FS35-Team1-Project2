import Lottie from "lottie-react";
import astronauta2 from "../assets/animazioni/astronautagame2.json";

const AstronautaGame2 = () => {
  return (
    <div className="flex justify-center w-30 h-25 items-center mb-3 mr-4">
      <div className="w-30 md:w-300 lg:w-150">
        <Lottie animationData={astronauta2} loop={true} />
      </div>
    </div>
  );
};

export default AstronautaGame2;
