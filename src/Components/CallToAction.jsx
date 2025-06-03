import { useNavigate } from "react-router-dom";
import { useContext } from "react"; // Importa useContext
import { UserContext } from "../UserContext"; // Importa il tuo UserContext

const CallToAction = ({ text, disabled = false, route = "/form", showAlways=false }) => {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext); // Accedi ai dati dell'utente

  const handleClick = () => {
    if (!disabled) {
      navigate(route);
    }
  };
   // Determina se mostrare il bottone
   const shouldShowButton = !userData || showAlways; //mostra sempre se showAlways è true

   if (!shouldShowButton) {
     return null;
    }

  // // Determina se mostrare il bottone in base all'esistenza di userData
  // if (userData) {
  //   return null; // Se userData esiste (utente iscritto), non mostrare nulla
  // }
  

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleClick}
        disabled={disabled}
        className={`w-60 h-13 rounded-2xl bg-[#A7D6E0] md:w-80 md:text-2xl  ${
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
