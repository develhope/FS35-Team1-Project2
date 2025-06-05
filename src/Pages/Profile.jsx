import { useContext } from "react";
import Header from "../Components/Header";
import { UserContext } from "../UserContext";

const avatars = [
  { id: 0, name: "Astronauta", image: "nebula icon.png" }, // Default avatar
  { id: 1, name: "Cane", cost: 100, image: "cane astronauta.svg" },
  { id: 2, name: "Koala", cost: 150, image: "koala astronauta.svg" },
  { id: 3, name: "Volpe", cost: 200, image: "leone astronauta.svg" },
  { id: 4, name: "Orso", cost: 150, image: "orso astronauta.svg" },
  { id: 5, name: "Gatto", cost: 300, image: "gatto astronauta.svg" },
  { id: 6, name: "Scimmia", cost: 350, image: "scimmia astronauta.svg" },
];

const GameStatus = ({
  title,
  description,
  completedLevelsCount,
  totalLevelsInGame,
  isGameFullyCompleted,
}) => {
  return (
    // Il colore del testo dipende dal completamento di TUTTI i livelli del gioco
    <section
      className={isGameFullyCompleted ? "text-black" : "text-neutral-300"}
    >
      <div className="flex items-center pb-1 ">
        <h3 className="md:mr-15 pr-3 text-xl md:text-2xl lg:text-3xl font-semibold">
          {title}
        </h3>
        {/* Le stelle si colorano in base al numero di livelli completati */}
        {[...Array(totalLevelsInGame)].map((_, i) => (
          <img
            key={i}
            src={`./immagini/icon/${
              i < completedLevelsCount ? "stellina-active" : "stellina-inactive"
            }.svg`}
            className={`w-[22px] md:w-12 ${i > 0 ? "ml-2" : ""}`}
            alt="star"
          />
        ))}
      </div>
      <div className="pb-4">
        <p className="text-sm md:text-xl pb-4 md:pb-10">{description}</p>
      </div>
    </section>
  );
};

function Profile() {
  const { userData } = useContext(UserContext);

  // Trova l'avatar selezionato. Se non ce n'è uno, usa l'astronauta di default (id: 0).
  const selectedAvatar =
    avatars.find((avatar) => avatar.id === userData?.avatarSelected) ||
    avatars.find((avatar) => avatar.id === 0);

  const countCompletedLevelsForGame = (gameId) => {
    const gameLevels = userData?.completedLevels?.[gameId];
    if (!gameLevels) return 0;
    // Conta quante voci nell'oggetto gameLevels sono true
    return Object.values(gameLevels).filter((status) => status === true).length;
  };

  const gameConfigurations = [
    {
      id: "game1",
      title: "Conta con Nebula",
      description: <>Apprendista dei numeri</>,
      totalLevels: 4,
    },
    {
      id: "game2",
      title: "Metti in ordine",
      description: <>Maestro della matematica</>,
      totalLevels: 5,
    },
    {
      id: "game3",
      title: "Trova la coppia",
      description: <>Genio della galassia matematica</>,
      totalLevels: 4,
    },
    {
      id: "game4",
      title: "Chi ne ha di più?",
      description: <>Comandante della Galassia dei Calcoli</>,
      totalLevels: 4,
    },
  ];

  return (
    <div className="h-screen overflow-hidden">
      <Header />

      <div className="flex flex-col items-center mt-20 md:mt-30 ">
        <img
          src={`./immagini/${selectedAvatar.image}`} // Usa l'immagine dell'avatar selezionato
          alt="Profilo"
          className="w-[168px] rounded-full md:w-60"
        />

        <p className="flex items-center justify-center mt-5 w-[103px] text-base md:text-2xl lg:text-2xl font-medium">
          {userData?.name || "Bambino"}{" "}
          {/* Mostra il nome dell'utente o un nome di default */}
        </p>
      </div>

      <div className="ml-8 mt-8">
        {gameConfigurations.map((game) => {
          const completedCount = countCompletedLevelsForGame(game.id);
          const isFullyCompleted = completedCount === game.totalLevels;
          return (
            <GameStatus
              key={game.id}
              title={game.title}
              description={game.description}
              completedLevelsCount={completedCount}
              totalLevelsInGame={game.totalLevels}
              isGameFullyCompleted={isFullyCompleted}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
