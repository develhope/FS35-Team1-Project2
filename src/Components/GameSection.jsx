import React from 'react';

const Game = ({ title, image, className }) => {
    return (
        <div className={`flex flex-col items-center rounded-lg transition-transform transform hover:scale-95 ${className}`}>
          <div 
            className="cursor-pointer w-40 h-40 bg-gray-200 text-center overflow-hidden rounded-2xl"
            onClick={() => window.location.href = `/games/${title.replace(/\s+/g, '-').toLowerCase()}`}
          >
            <img className="w-full h-full object-cover" src={image} alt={`Anteprima di ${title}`} />
          </div>
          <div className="text-m font-semibold mt-2 mb-2">{title}</div>
        </div>
    );
};


const GameSection = () => {
    const gameList = [
        { title: "Caccia al tesoro", image: "./immagini/scimmia astronauta.svg" },
        { title: "Gioco 2", image: "./immagini/cane astronauta.svg" },
        { title: "Gioco 3", image: "./immagini/leone astronauta.svg" },
        { title: "Gioco 4", image: "./immagini/orso astronauta.svg" },
        { title: "Gioco 5", image: "./immagini/koala astronauta.svg" }
      ];
    
      return (
        <div className="text-left mt-5 pl-5 mb-3">
          <h3 className="text-2xl font-bold mb-4">I nostri giochi</h3>
          <div className="flex overflow-x-scroll gap-3">
            {gameList.map((game, index) => (
              <Game key={index} title={game.title} image={game.image} className={index === 4 ? "mr-5" : ""}/>
            ))}
          </div>
        </div>
      );
    };

export default GameSection;
export { Game };