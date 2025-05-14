import React, { useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const Header = ({ leftIcon, centerIcon }) => {
  // Rimosso isSubscribed dalle props
  const { userData } = useContext(UserContext); // Ottieni userData (non setUserData)
  const location = useLocation();
  const navigate = useNavigate();

  const formPath = "/form";
  // Usa userData per determinare i percorsi
  const profilePath = userData ? "/profile" : formPath;
  const shopPath = userData ? "/shop" : formPath;

  return (
    <div className="fixed top-0 left-0 flex z-50 bg-white justify-between items-center w-full p-2 font-[Arial] font-bold">
      {location.pathname === "/" ? (
        <button>
          <Link to="/sidebar">
            <img
              src="./immagini/icon/hamburger.svg"
              className="w-6 ml-1"
              alt="menu"
            />
          </Link>
        </button>
      ) : (
        <button onClick={() => navigate(-1)}>{leftIcon}</button>
      )}

      <div>{centerIcon}</div>

      <div className="flex">
        <Link to={profilePath} className="pr-2">
          <img
            src="../../immagini/icon/profile.svg"
            className="w-5 mt-1"
            alt="profile"
          />
        </Link>
        <Link to={shopPath}>
          <img
            src="./immagini/icon/usp-delivery-store.svg"
            className="w-8"
            alt="shop"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
