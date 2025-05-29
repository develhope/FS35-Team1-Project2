import { useEffect, useState, useContext } from "react";
import { PointsContext } from "../PointsContext";
import { UserContext } from "../UserContext";

const avatars = [
  { id: 1, name: "Cane", cost: 100, image: "cane astronauta.svg" },
  { id: 2, name: "Koala", cost: 150, image: "koala astronauta.svg" },
  { id: 3, name: "Volpe", cost: 200, image: "leone astronauta.svg" },
  { id: 4, name: "Orso", cost: 150, image: "orso astronauta.svg" },
  { id: 5, name: "Gatto", cost: 300, image: "gatto astronauta.svg" },
  { id: 6, name: "Scimmia", cost: 350, image: "scimmia astronauta.svg" },
];

const defaultAvatar = {
  id: 0,
  name: "Astronauta",
  image: "nebula icon.png",
};

const Shop = () => {
  const { setUserData } = useContext(UserContext);
  const { points, setPoints } = useContext(PointsContext);
  const [purchasable, setPurchasable] = useState([]); // Avatar sbloccati per l'acquisto
  const [owned, setOwned] = useState([defaultAvatar.id]); // Avatar posseduti

  // Calcola avatar sbloccabili per l'acquisto
  useEffect(() => {
    const unlockedForPurchase = avatars.filter(
      (avatar) =>
        points >= avatar.cost && !owned.includes(avatar.id) && !purchasable.includes(avatar.id)
    );
    if (unlockedForPurchase.length > 0) {
      setPurchasable((prev) => [...prev, ...unlockedForPurchase.map((a) => a.id)]);
    }
  }, [points, owned, purchasable]);

  // Funzione per acquistare un avatar
  const handlePurchase = (avatarId) => {
    const avatar = avatars.find((a) => a.id === avatarId);
    if (avatar && points >= avatar.cost) {
      setPoints((prev) => prev - avatar.cost); // Aggiorna i punti
      setOwned((prev) => [...prev, avatarId]); // Aggiungi a posseduti
      setPurchasable((prev) => prev.filter((id) => id !== avatarId)); // Rimuovi dai sbloccabili
      setUserData((prev) => {
      const updatedData = { ...prev, avatarId };
      localStorage.setItem("userData", JSON.stringify(updatedData));
      console.log(JSON.stringify(updatedData));
      return updatedData;
});

    }
  };

  return (
    <>
      <div className="p-4 max-w-xs mx-auto mt-18">
        <h2 className="text-xl font-bold text-center mb-2">Sblocca il tuo avatar</h2>
        <p className="text-center mb-6 text-sm font-medium">Punti disponibili: {points}</p>

        {/* Lista avatar acquistabili */}
        <div className="flex flex-col items-center gap-6">
          {avatars
            .filter((avatar) => !owned.includes(avatar.id)) // Filtra quelli posseduti
            .map((avatar) => {
              const isPurchasable = purchasable.includes(avatar.id);
              return (
                <div
                  key={avatar.id}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => isPurchasable && handlePurchase(avatar.id)}
                >
                  <img
                    src={`/immagini/${avatar.image}`}
                    alt={avatar.name}
                    className={`w-35 h-35 rounded-full object-cover transition-opacity duration-300 ${
                      isPurchasable ? "opacity-100" : "opacity-30"
                    }`}
                  />
                  <span className="mt-2 text-sm text-gray-700">{avatar.cost} pt</span>
                </div>
              );
            })}
        </div>

        {/* Avatar posseduti */}
        <h3 className="text-lg font-semibold text-center mt-10 mb-4">I tuoi avatar</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {owned.map((id) => {
            const avatar =
              id === defaultAvatar.id
                ? defaultAvatar
                : avatars.find((a) => a.id === id);
            return (
              <img
                key={id}
                src={`/immagini/${avatar.image}`}
                alt={avatar.name}
                className="w-25 h-25 rounded-full object-cover"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;
