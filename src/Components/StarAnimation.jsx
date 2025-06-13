import Lottie from "lottie-react";
import star from "../assets/animazioni/star.json";

const StarAnimation = () => {
  return (
    <div className="w-200 md:w-300 lg:w-150">
      <Lottie animationData={star} loop={false} />
    </div>
  );
};

export default StarAnimation;
