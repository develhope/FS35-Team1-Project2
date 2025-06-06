import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";

const CallToAction = ({
  text,
  disabled = false,
  route = "/form",
  showAlways = false,
  className,
}) => {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);

  const handleClick = () => {
    if (!disabled) {
      navigate(route);
    }
  };

  const shouldShowButton = showAlways || !userData || !userData.isLogged;

  if (!shouldShowButton) {
    return null;
  }

  const defaultClasses = `
                          px-4 md:px-6
                          py-2 md:py-3
                          text-base md:text-3xl
                          rounded-2xl
                          bg-[#A7D6E0]
                          transition-colors duration-200`;

  const disabledClasses = `opacity-30 cursor-not-allowed`;
  const activeClasses = `hover:bg-[#92c6d2] cursor-pointer`;

  const finalClasses = `${defaultClasses} ${
    disabled ? disabledClasses : activeClasses
  } ${className}`
    .replace(/\s+/g, " ")
    .trim();

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleClick}
        disabled={disabled}
        className={finalClasses}
      >
        {text}
      </button>
    </div>
  );
};

export default CallToAction;
