import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // Usa Link e useNavigate
import { UserContext } from "../UserContext"; // Importa il contesto, se necessario

const Game = ({ title, image, path, className }) => {
  //const navigate = useNavigate(); // Usa useNavigate per la navigazione

  // const handleClick = () => {
  //   navigate(path); // Naviga usando navigate
  // };

  return (
    <Link to={path}  // Usa Link per la navigazione
      className={`flex flex-col items-center rounded-lg transition-transform transform hover:scale-95 ${className} cursor-pointer`}
    >
      <div
        className="w-40 h-40 bg-gray-200 text-center overflow-hidden rounded-2xl"
        //onClick={handleClick}
        role="button" // Migliora l'accessibilità
      >
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={`Anteprima di ${title}`}
        />
      </div>
      <div className="text-m font-semibold mt-2 mb-2">{title}</div>
    </Link>
  );
};

const GameSection = () => {
  const gameList = [
    { title: "Conta con Nebula", image: "./immagini/scimmia astronauta.svg", path: "/gamepage-1" },
    { title: "Metti in ordine", image: "./immagini/cane astronauta.svg", path: "/gamepage-2" },
    { title: "Trova la coppia", image: "./immagini/leone astronauta.svg", path: "/gamepage-3" },
    { title: "Chi ne ha di più?", image: "./immagini/orso astronauta.svg", path: "/gamepage-4" },
  ];

  //const { userData } = useContext(UserContext); // Accedi al contesto, se necessario

  // Esempio: Mostra un messaggio diverso se l'utente è loggato
  // const sectionTitle = userData ? "Bentornato! Continua a giocare:" : "I nostri giochi:";
  const sectionTitle = "I nostri giochi";

  return (
    <div className="text-left w-full mt-5 mb-3">
      <h3 className="text-2xl font-bold pl-5 mb-4 text-black">{sectionTitle}</h3>
      <div className="flex overflow-x-scroll gap-3 text-black">
        {gameList.map((game, index) => (
          <Game
            key={index}
            title={game.title}
            image={game.image}
            path={game.path} // Passa il path al componente Game
            className={index === 3 ? "pr-5" : index === 0 ? "pl-5" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default GameSection;
export { Game };