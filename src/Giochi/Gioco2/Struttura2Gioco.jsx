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

  return (
    <>
      <div className="w-screen h-screen scale-120 overflow-hidden bggame2">
        <img
          src="../assets/immagini/Gioco2/astronauta-gioco-2.svg"
          alt="astronautabiondino"
          className="w-30 absolute right-12 bottom-22 z-50"
        ></img>
        <div className="w-58 h-100 bg-white border-[#E6C42E] border-4 absolute top-40 left-1/2 -translate-x-1/2 rounded-xl">
          <div className="text-center p-5">
            <p className="text-[13px]">Metti in ordine dal numero più piccolo al più grande</p>
            <p className="text-[11px] text-gray-400">Fai click con il dito sui pianeti per selezionarli</p>
          </div>
          <div className="grid grid-cols-4 gap-2 p-4 ">
            <img src={pianeti[0].src} alt={`Pianeta ${pianeti[0].id}`} className="col-start-2"></img>
            <img src={pianeti[3].src} alt={`Pianeta ${pianeti[3].id}`} className="col-start-4"/>
            <img src={pianeti[8].src} alt={`Pianeta ${pianeti[8].id}`} className="col-start-1"/>
            <img src={pianeti[6].src} alt={`Pianeta ${pianeti[6].id}`} className="col-start-3"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Struttura2Gioco;
