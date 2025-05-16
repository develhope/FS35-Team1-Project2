import { useNavigate } from "react-router-dom";
import { useContext } from "react"; // Importa useContext
import { UserContext } from "../UserContext"; // Importa il tuo UserContext

const CallToAction = ({ text, disabled = false, route = "/form" }) => {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext); // Accedi ai dati dell'utente

  const handleClick = () => {
    if (!disabled) {
      navigate(route);
    }
  };

  // Determina se mostrare il bottone in base all'esistenza di userData
  if (userData) {
    return null; // Se userData esiste (utente iscritto), non mostrare nulla
  }

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleClick}
        disabled={disabled}
        className={`w-[240px] h-[52px] rounded-[20px] bg-[#A7D6E0] ${
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
