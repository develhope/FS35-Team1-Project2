import { useState } from "react";

const Struttura2Gioco = () => {
  const pianeti = [
    {
      id: 1,
      src: "/immagini/Pianeti/pianeta1.svg",
    },
    {
      id: 2,
      src: "/immagini/Pianeti/pianeta2.svg",
    },
    {
      id: 3,
      src: "/immagini/Pianeti/pianeta3.svg",
    },
    {
      id: 4,
      src: "/immagini/Pianeti/pianeta4.svg",
    },
    {
      id: 5,
      src: "/immagini/Pianeti/pianeta5.svg",
    },
    {
      id: 6,
      src: "/immagini/Pianeti/pianeta6.svg",
    },
    {
      id: 7,
      src: "/immagini/Pianeti/pianeta7.svg",
    },
    {
      id: 8,
      src: "/immagini/Pianeti/pianeta8.svg",
    },
    {
      id: 9,
      src: "/immagini/Pianeti/pianeta9.svg",
    },
  ];

  const pianetiDaMostrare = [
    { pianeta: pianeti[0], numero: 1, col: 2 },
    { pianeta: pianeti[3], numero: 4, col: 4 },
    { pianeta: pianeti[8], numero: 2, col: 1 },
    { pianeta: pianeti[6], numero: 3, col: 3 },
  ];

  useState();

  return (
    <>
      <div className="w-screen h-screen overflow-hidden bggame2">
        <img
          src="../assets/immagini/Gioco2/astronauta-gioco-2.svg"
          alt="astronautabiondino"
          className="w-40 absolute right-5 bottom-5 z-50"
        ></img>
        <div className="flex flex-col justify-around p-5 w-70 h-125 bg-white border-[#E6C42E] border-4 absolute top-30 left-1/2 -translate-x-1/2 rounded-xl">
          <div className="text-center">
            <p>Metti in ordine dal numero più piccolo al più grande</p>
            <p className="text-sm text-gray-400">
              Fai click con il dito sui pianeti per selezionarli
            </p>
          </div>
          <div className="grid grid-cols-4 gap-2 pt-6">
            <div className="relative col-start-1 row-start-1">
              <img src={pianeti[0].src} alt={`Pianeta ${pianeti[0].id}`} />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl">
                4
              </span>
            </div>
            <div className="relative col-start-3 row-start-1">
              <img src={pianeti[3].src} alt={`Pianeta ${pianeti[3].id}`} />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl">
                1
              </span>
            </div>
            <div className="relative col-start-2 row-start-2">
              <img src={pianeti[8].src} alt={`Pianeta ${pianeti[8].id}`} />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl">
                2
              </span>
            </div>
            <div className="relative col-start-4 row-start-2">
              <img src={pianeti[6].src} alt={`Pianeta ${pianeti[6].id}`} />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl">
                3
              </span>
            </div>
          </div>
          <div className="w-50 h-30 bg-gray-300 ml-1/2 mt-15"></div>
          <p></p>
          <button></button>
        </div>
      </div>
    </>
  );
};

export default Struttura2Gioco;
