import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext"; 

const Game = ({ title, image, path, className }) => {
  return (
    <Link to={path}
      className={`flex flex-col items-center rounded-lg transition-transform transform hover:scale-95 ${className} cursor-pointer`}
    >
      <div
        className="w-40 h-40 md:w-55 md:h-55 bg-blue-200 text-center overflow-hidden rounded-2xl"
        role="button"
      >
        <img
          className="w-full h-full"
          src={image}
          alt={`Anteprima di ${title}`}
        />
      </div>
      <div className="text-m md:text-xl font-semibold mt-2 mb-2">{title}</div>
    </Link>
  );
};

const GameSection = () => {
  const { userData } = useContext(UserContext);

  const gameListUnregistered = [
    { title: "Conta con Nebula", image: "./assets/immagini/Gioco1/astronauti.svg", path: "/gamepage-1" },
    { title: "Metti in ordine", image:"./assets/immagini/Gioco2/astronauta biondo su pianeta.svg", path: "/gamepage-2" },
    { title: "Trova la coppia", image: "./assets/immagini/Gioco3/scimmia_home_3.svg", path: "/gamepage-3" },
    { title: "Chi ne ha di più?", image: "./assets/immagini/Gioco4/amicidinebulainsieme.svg", path: "/gamepage-4" },
  ];

  const gameListRegistered = [
    { title: "Conta con Nebula", image: "./assets/immagini/Gioco1/astronauti.svg", path: "/anteprimagioco1" },
    { title: "Metti in ordine", image: "./assets/immagini/Gioco2/astronauta biondo su pianeta.svg", path: "/anteprimagioco2" },
    { title: "Trova la coppia", image: "./assets/immagini/Gioco3/scimmia_home_3.svg", path: "/anteprimagioco3" },
    { title: "Chi ne ha di più?", image: "./assets/immagini/Gioco4/amicidinebulainsieme.svg", path: "/anteprimagioco4" },
  ];

  const currentGameList = userData && userData.isLogged ? gameListRegistered : gameListUnregistered;


  const sectionTitle = "I nostri giochi";

  return (
    <div className="text-left w-full">
      <h3 className="text-2xl md:text-4xl font-bold pt-30 md:pt-40 pl-5 mb-4 md:mb-10 text-white lg:text-black">{sectionTitle}</h3>
      <div className="flex overflow-x-scroll gap-4 text-white">
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