import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext"; 

const Game = ({ title, image, path, className }) => {
  return (
    <Link to={path}
      className={`flex flex-col items-center rounded-lg transition-transform transform hover:scale-95 ${className} cursor-pointer`}
    >
      <div
        className="w-40 h-40 bg-gray-200 text-center overflow-hidden rounded-2xl"
        role="button"
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
  const { userData } = useContext(UserContext);

  const gameListUnregistered = [
    { title: "Conta con Nebula", image: "./immagini/scimmia astronauta.svg", path: "/gamepage-1" },
    { title: "Metti in ordine", image: "./immagini/cane astronauta.svg", path: "/gamepage-2" },
    { title: "Trova la coppia", image: "./immagini/leone astronauta.svg", path: "/gamepage-3" },
    { title: "Chi ne ha di più?", image: "./immagini/orso astronauta.svg", path: "/gamepage-4" },
  ];

  const gameListRegistered = [
    { title: "Conta con Nebula", image: "./immagini/scimmia astronauta.svg", path: "/anteprimagioco1" },
    { title: "Metti in ordine", image: "./immagini/cane astronauta.svg", path: "/anteprimagioco2" },
    { title: "Trova la coppia", image: "./immagini/leone astronauta.svg", path: "/anteprimagioco3" },
    { title: "Chi ne ha di più?", image: "./immagini/orso astronauta.svg", path: "/anteprimagioco4" },
  ];

  const currentGameList = userData ? gameListRegistered : gameListUnregistered; 

  const sectionTitle = "I nostri giochi";

  return (
    <div className="text-left w-full mt-5 mb-3">
      <h3 className="text-2xl font-bold pl-5 mb-4 text-black">{sectionTitle}</h3>
      <div className="flex overflow-x-scroll gap-3 text-black">
        {currentGameList.map((game, index) => (
          <Game
            key={index}
            title={game.title}
            image={game.image}
            path={game.path}
            className={index === 3 ? "pr-5" : index === 0 ? "pl-5" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default GameSection;
export { Game };