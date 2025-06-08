import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import games from "../Pages/games"
import CallToAction from "./CallToAction";

const AnteprimaGiochi = ({
  title,
  text,
  media,
  img,
  route,
  callToAction1Text = "Iniziamo!",
  callToAction1Route = "/form",
  callToAction1Classes = "w-60 md:w-80",
  callToAction2Text = "Livelli",
  callToAction2Route = "/form",
  callToAction2Classes = "w-60 md:w-80",
  showTwoButtons = false,
  gameId, // Aggiungi questa prop per identificare il gioco corrente
}) => {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);

  if (!route && !callToAction1Route && !callToAction2Route) {
    console.warn(
      "Warning: manca la prop 'route' o le prop 'callToActionXRoute' per i bottoni in AnteprimaGiochi"
    );
  }

  // Funzione per controllare se tutti i livelli di un gioco sono stati completati
  // Copiata da RestartPage.jsx
  const areAllLevelsCompleted = (gameIdToCheck) => {
    const game = games.find((g) => g.id === gameIdToCheck);
    if (!game) {
      return false;
    }

    if (!userData.completedLevels || !userData.completedLevels[gameIdToCheck]) {
      return false;
    }

    const allLevelsCompleted = game.levels.every(
      (level) => userData.completedLevels[gameIdToCheck][level.id]
    );
    return allLevelsCompleted;
  };

  // Funzione per controllare se un gioco è sbloccato
  // Copiata da RestartPage.jsx
  const isGameUnlocked = (gameIdToCheck) => {
    const game = games.find((g) => g.id === gameIdToCheck);
    if (!game) return false;

    if (!game.unlockDependency) {
      return true; // Nessuna dipendenza significa che è sempre sbloccato (es. Gioco 1)
    }

    const unlocked = areAllLevelsCompleted(game.unlockDependency);
    return unlocked;
  };

  // Determina se il bottone "Iniziamo!" deve essere disabilitato
  // Se gameId è presente, controlla se il gioco è sbloccato. Altrimenti, non disabilitare.
  const disableStartButton = gameId ? !isGameUnlocked(gameId) : false;

  return (
    <div
      className="flex flex-col justify-between items-center px-4"
      style={{
        height: "calc(100vh - 64px)", // spazio per l'header
        paddingTop: "76px",
      }}
    >
      <div className="text-center relative md:mt-15">
        <h1 className="text-2xl md:text-4xl">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="overflow-hidden rounded-full">{media}</div>
        <p className="ml-2 md:text-xl">{text}</p>
      </div>

      <div className="flex flex-col justify-center items-center w-full">
        <div className="mb-6 md:mb-0 md:pr-6 md:pb-8 ">{img}</div>
        <div className="flex items-center">
          {/* Bottoni visibili solo su mobile */}
          <div className="mt-2 md:hidden flex justify-center">
            {/* Primo bottone mobile */}
            {(route || callToAction1Route) && (
              <CallToAction
                text={callToAction1Text}
                route={route || callToAction1Route}
                showAlways
                disabled={disableStartButton} // Applica la prop disabled qui
                className={`w-40 px-2 py-1 text-sm ${callToAction1Classes}`}
              />
            )}
            {/* Secondo bottone mobile (se showTwoButtons è true) */}
            {showTwoButtons && (route || callToAction2Route) && (
              <CallToAction
                text={callToAction2Text}
                route={route || callToAction2Route}
                showAlways
                className={`w-40 px-2 py-1 text-sm ml-2 ${callToAction2Classes}`}
              />
            )}
          </div>

          {/* Bottoni visibili solo su tablet e desktop */}
          <div className="hidden md:flex justify-center mt-4 w-full max-w-xs mx-auto">
            {/* Primo bottone desktop */}
            {(route || callToAction1Route) && (
              <CallToAction
                text={callToAction1Text}
                route={route || callToAction1Route}
                showAlways
                disabled={disableStartButton} // Applica la prop disabled qui
                className={callToAction1Classes}
              />
            )}
            {/* Secondo bottone desktop (se showTwoButtons è true) */}
            {showTwoButtons && (route || callToAction2Route) && (
              <CallToAction
                text={callToAction2Text}
                route={route || callToAction2Route}
                showAlways
                className={`ml-4 ${callToAction2Classes}`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnteprimaGiochi;