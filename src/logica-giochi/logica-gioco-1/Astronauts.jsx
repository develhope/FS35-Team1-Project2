const Astronauts = ({ level, totalLevels }) => {
    // Calcola la posizione degli astronauti in base al livello
    const astronautPosition = (level / totalLevels) * 100;
  
    return (
      <div className="relative w-full h-64 mt-8">
        <div
          className="absolute top-0 left-0"
          style={{ transform: `translateX(-${astronautPosition}%)` }}
        >
          <img
            src="https://example.com/astronaut-left.png" // Immagine dell'astronauta sinistro
            alt="Astronauta Sinistro"
            className="w-32"
          />
        </div>
        <div
          className="absolute top-0 right-0"
          style={{ transform: `translateX(${astronautPosition}%)` }}
        >
          <img
            src="https://example.com/astronaut-right.png" // Immagine dell'astronauta destro
            alt="Astronauta Destro"
            className="w-32"
          />
        </div>
      </div>
    );
  };
  
  export default Astronauts;
  
  