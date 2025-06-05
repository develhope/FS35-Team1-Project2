import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";

// Aggiungiamo la prop 'className' ai parametri del componente, con un default vuoto
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

  const shouldShowButton = !userData.isLogged || showAlways;

  if (!shouldShowButton) {
    return null;
  }

  // Definiamo le classi di default in una stringa pulita
  const defaultClasses = `
                          px-4 md:px-6
                          py-2 md:py-3
                          text-base md:text-3xl
                          rounded-2xl
                          bg-[#A7D6E0]
                          transition-colors duration-200`;

  // Le classi condizionali basate sullo stato 'disabled'
  const disabledClasses = `opacity-30 cursor-not-allowed`;
  const activeClasses = `hover:bg-[#92c6d2] cursor-pointer`;

  // Combiniamo tutte le classi: prima quelle di default, poi quelle condizionali, infine quelle passate tramite prop
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
        className={finalClasses} // Applichiamo la stringa finale delle classi
      >
        {text}
      </button>
    </div>
  );
};

export default CallToAction;
