import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";

const CallToAction = ({ text, disabled = false, route = "/form", showAlways = false }) => {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);

  const handleClick = () => {
    if (!disabled) {
      navigate(route);
    }
  };

  const shouldShowButton = !userData.isLogged || showAlways;

  if (!shouldShowButton) {
    return null;
  }

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleClick}
        disabled={disabled}
        className={`w-60 md:w-80 
                    h-12 md:h-20
                    px-4 md:px-6 
                    py-2 md:py-3 
                    text-base md:text-4xl 
                    rounded-2xl 
                    bg-[#A7D6E0] 
                    transition-colors duration-200
                    ${
                      disabled
                        ? "opacity-30 cursor-not-allowed"
                        : "hover:bg-[#92c6d2] cursor-pointer"
                    }`}
      >
        {text}
      </button>
    </div>
  );
};

export default CallToAction;
