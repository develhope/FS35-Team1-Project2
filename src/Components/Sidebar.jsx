import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import Feedback from "./Feedback";
import SoundToggle from "./SoundToggle";

const Sidebar = () => {
  const { userData, setUserData } = useContext(UserContext);

  const [isVisible, setIsVisible] = useState(true);

  const navigate = useNavigate();

  if (!isVisible) return null;

  const handleLogout = () => {
    if (userData) {
      const updatedUserData = { ...userData, isLogged: false };
      setUserData(updatedUserData);

      alert(
        "Disconnessione avvenuta con successo. I tuoi dati sono al sicuro!"
      );
      navigate("/");
    } else {
      alert("Nessun utente loggato.");
      navigate("/quiz");
    }
  };
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="flex z-50 flex-col w-full h-screen relative bg-white shadow-md lg:h-full lg:pb-10">
      {/* X in alto a destra */}
      <Link to="/">
        <img
          src="immagini/icon/cross-small.svg"
          alt="Chiudi"
          className="w-5 md:w-7 absolute top-10 right-8 cursor-pointer hover:opacity-70 transition-opacity"
          onClick={() => setIsVisible(false)}
        />
      </Link>

      {/* Logo centrato */}
      <div className="flex justify-center mt-6 mb-10">
        <img className="w-25 md:w-35" src="immagini/logo.svg" alt="Logo" />
      </div>

      {/* Link */}
      <div className="space-y-8 pl-4 md:text-3xl md:space-y-14 md:pt-10">
        {" "}
        {/* spaziatura tra i link */}
        <div>
          <Link to="/la-discalculia">Cos'è la discalculia</Link>
        </div>
        {!(userData && userData.isLogged) && ( // Mostra solo se l'utente NON è loggato
          <div>
            <Link to="/form">Quiz</Link>
          </div>
        )}
        <div>
          {userData && userData.isLogged ? (
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            // Quando l'utente clicca su "Login", naviga alla pagina di login.
            <Link to="/login" onClick={handleLoginClick}>
              Login
            </Link>
          )}
        </div>
        <div>
          <Link to="/chiSiamo">Chi Siamo</Link>
        </div>
        <div>
          <Feedback>Feedback</Feedback>
        </div>
        <div>
          <SoundToggle />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
