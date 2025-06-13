import Lottie from "lottie-react";
import pianeti from "../assets/animazioni/pianetihome.json";

const PianetiHome = () => {
  return (
    <div className="w-90">
      <div className="w-90 md:w-190 lg:w-150">
        <Lottie animationData={pianeti} loop={true} />
      </div>
    </div>
  );
};

export default PianetiHome;
