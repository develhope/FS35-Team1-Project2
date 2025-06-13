import Lottie from "lottie-react";
import coriandoli from "../assets/animazioni/coriandoli.json";

const Coriandoli = () => {
  return (
    <div className="z-50">
      <Lottie animationData={coriandoli} loop={false} />
    </div>
  );
};

export default Coriandoli;
