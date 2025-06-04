import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import games from "./games";
import HeaderFineLivelli from "../Components/HeaderFineLivelli";

const RestartPage = () => {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("Utente");
  const [feedbackMessage, setFeedbackMessage] = useState(null);

  useEffect(() => {
    if (userData && userData.name) {
      setUserName(userData.name);
    }
  }, [userData]);

  // Funzione per controllare se tutti i livelli di un gioco sono stati completati
  const areAllLevelsCompleted = (gameId) => {
    const game = games.find((g) => g.id === gameId);
    if (!game) {
      return false;
    }

    if (!userData.completedLevels || !userData.completedLevels[gameId]) {
      return false;
    }

    const allLevelsCompleted = game.levels.every(
      (level) => userData.completedLevels[gameId][level.id]
    );
    return allLevelsCompleted;
  };

  // Funzione per controllare se un gioco è sbloccato
  const isGameUnlocked = (gameId) => {
    const game = games.find((g) => g.id === gameId);
    if (!game) return false;

    if (!game.unlockDependency) {
      return true;
    }

    const unlocked = areAllLevelsCompleted(game.unlockDependency);
    return unlocked;
  };

  // Funzione per controllare se un livello specifico è sbloccato
  const isLevelUnlocked = (gameId, levelId) => {
    const gameUnlocked = isGameUnlocked(gameId);
    if (!gameUnlocked) {
      return false;
    }

    if (levelId === 1) {
      return true;
    }

    const prevLevelId = levelId - 1;
    const prevLevelCompleted =
      userData.completedLevels &&
      userData.completedLevels[gameId] &&
      userData.completedLevels[gameId][prevLevelId];

    return prevLevelCompleted;
  };

  const handleLevelClick = (path, gameId, levelId) => {
    const unlocked = isLevelUnlocked(gameId, levelId);

    if (unlocked) {
      setFeedbackMessage(null); // Rimuovi qualsiasi messaggio precedente
      navigate(path);
    } else {
      // Imposta il messaggio di feedback
      const game = games.find((g) => g.id === gameId);
      let message = "";
      if (!isGameUnlocked(gameId)) {
        // Se il gioco è bloccato
        const prevGame = games.find((g) => g.id === game.unlockDependency);
        message = `Completa tutti i livelli di "${prevGame.name}" per sbloccare questo gioco!`;
      } else {
        // Se è un livello bloccato all'interno di un gioco sbloccato
        message = `Completa il livello ${levelId - 1} per sbloccare questo!`;
      }
      setFeedbackMessage(message);

      // Rimuovi il messaggio dopo 3 secondi
      setTimeout(() => {
        setFeedbackMessage(null);
      }, 3000);
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/immagini/sfondoproseguogiochi.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
      className="text-white relative"
    >
      {/* Header */}
      <HeaderFineLivelli />

      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold text-white mb-2 md:text-4xl">
          Bentornato!
        </h1>
        <h2 className="text-2xl font-semibold text-white mb-8 md:text-4xl">
          Continuiamo a giocare!
        </h2>

        <div className="flex flex-row flex-nowrap items-center justify-start gap-2 mb-10 w-full px-2">
          <img
            src="/assets/immagini/Gioco1/nebulagames.png"
            alt="Nebula"
            className="w-24 md:w-40 h-auto flex-shrink-0"
            style={{ zIndex: 10 }}
          />

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg flex-grow min-w-0 text-left">
            <p className="text-lg md:text-2xl text-white mb-2">
              Ciao{" "}
              <span className="font-bold text-yellow-300">{userName}</span>!
            </p>
            <p className="text-md text-white mb-0 md:text-xl">
              Hai fatto grandi progressi! Pronto per la prossima sfida?
            </p>
          </div>
        </div>
      </div>

      {/* Messaggio di feedback */}
      {feedbackMessage && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-center p-4 rounded-lg"
             style={{
               backgroundColor: 'rgba(240, 240, 240, 0.95)',
               color: '#333',
               boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
               maxWidth: '80%',
               border: 'none',
             }}
        >
          <p className="font-bold text-lg">{feedbackMessage}</p>
        </div>
      )}

      {/* Sezione Giochi e Livelli */}
      <div className="w-full max-w-2xl px-4 mx-auto">
        {games.map((game) => {
          const gameUnlocked = isGameUnlocked(game.id);
          return (
            <div key={game.id} className="mb-8 flex flex-col items-center">
              {/* Immagine rappresentativa del gioco (non cliccabile) */}
              <div
                className={`relative w-48 h-48 md:w-60 md:h-60 mb-4 rounded-full overflow-hidden border-4 border-white-400 shadow-xl flex items-center justify-center ${
                  gameUnlocked ? "bg-white/20" : "bg-gray-700/50" // Colore diverso per i giochi bloccati
                }`}
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className={`max-w-full max-h-full object-contain ${
                    !gameUnlocked && "grayscale opacity-50" // Effetto per giochi bloccati
                  }`}
                />
                {!gameUnlocked && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-5xl">🔒</span> {/* Lucchetto */}
                  </div>
                )}
              </div>
              <h3
                className={`text-xl font-bold mb-4 ${
                  gameUnlocked ? "text-white" : "text-gray-400"
                }`}
                style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)" }}
              >
                {game.name}
              </h3>

              {/* Livelli cliccabili */}
              <div className="flex flex-wrap justify-center gap-4">
                {game.levels.map((level) => {
                  const unlocked = isLevelUnlocked(game.id, level.id);
                  const isCompleted =
                    userData.completedLevels &&
                    userData.completedLevels[game.id] &&
                    userData.completedLevels[game.id][level.id];

                  return (
                    <button
                      key={level.id}
                      onClick={() =>
                        handleLevelClick(level.path, game.id, level.id)
                      }
                      className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center
                                               text-2xl font-bold transition-colors duration-200
                                               ${
                                                 unlocked
                                                   ? game.levelButtonClass
                                                   : "bg-gray-400 text-gray-700 cursor-not-allowed opacity-50" // Stile per livelli bloccati con opacità
                                               }
                                               ${isCompleted ? '' : 'shadow-lg'} ` // Rimuovi shadow-lg se completato
                      }
                      style={{
                        // Applica un box-shadow personalizzato per i livelli completati (effetto neon)
                        ...(isCompleted ? {
                          boxShadow: '0 0 6px 2px rgba(144, 200, 144, 0.8), 0 0 10px 4px rgba(144, 238, 144, 0.6)', // Bagliore VERDE pastello meno intenso
                          border: '2px solid rgba(144, 238, 144, 0.9)' // Bordo verde pastello che si fonde
                        } : {}) // Nessuna ombra personalizzata per non completati/bloccati
                      }}
                    >
                      {level.id}
                      {isCompleted && (
                        <img
                        src="/immagini/stellina.svg"
                        alt="Coroncina"
                        className="absolute top-0 right-0 w-6 h-6" // Regola w- e h- per la dimensione desiderata
                        style={{ transform: 'translate(25%, -25%)' }} // Sposta leggermente per posizionamento ottimale
                      />
                      )}
                      {!unlocked && (
                        <span className="absolute text-3xl">🔒</span> 
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestartPage;
