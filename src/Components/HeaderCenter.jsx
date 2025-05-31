import React from "react";
import { useLocation } from "react-router-dom";

const HeaderCenter = () => {
  const location = useLocation();

  let centerContent = null;
  const commonClassname = "text-center font-[Arial] font-bold md:text-xl"

  switch (location.pathname) {
    case "/":
      centerContent = (
        <img src="./immagini/logo.svg" className="w-20 md:w-30 " alt="Logo" />
      );
      break;
    case "/form":
    case "/quiz":
      centerContent = <p className={commonClassname}>Quiz conoscitivo</p>;
      break;
    case "/form-iscriviti":
      centerContent = <p>Iscriviti</p>;
      break;
    case "/profile":
      centerContent = (
        <p className={commonClassname}>
          Il mio profilo
        </p>
      );
      break;
    case "/shop":
      centerContent = (
        <p className={commonClassname}>
          Shop
        </p>
      );
      break;
    case "/gamepage-1":
      centerContent = (
        <p className={commonClassname}>
          Conta con Nebula
        </p>
      );
      break;
    case "/gamepage-2":
      centerContent = (
        <p className={commonClassname}>
          Metti in ordine
        </p>
      );
      break;
      
    case "/gamepage-3":
      centerContent = (
        <p className={commonClassname}>
          Trova la coppia
        </p>
      );
      break;
    case "/gamepage-4":
      centerContent = (
        <p className={commonClassname}>
          Chi ne ha di più?
        </p>
      );
      break;
    case "/anteprimagioco1":
      centerContent = (
        <p className={commonClassname}>
          Gioco 1
        </p>
      );
      break;
      
    case "/anteprimagioco2":
      centerContent = (
        <p className={commonClassname}>
          Gioco 2
        </p>
      );
      break;
    case "/anteprimagioco3":
      centerContent = (
        <p className={commonClassname}>
          Gioco 3
        </p>
      );
      break;
    case "/anteprimagioco4":
      centerContent = (
        <p className={commonClassname}>
          Gioco 4
        </p>
      );
      break;
    case "/la-discalculia":
      centerContent = <p className={commonClassname}>La Discalculia</p>;
      break;
    case "/sidebar":
      centerContent = null;
      break;
    default:
      centerContent = (
        <img src="./immagini/logo.svg" className="w-20" alt="Logo" />
      ); 
  }

  return <div>{centerContent}</div>;
};

export default HeaderCenter;
