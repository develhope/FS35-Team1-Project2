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
  const { userData, setUserData } = useContext(UserContext);
  const { points, setPoints } = useContext(PointsContext);
  const [purchasable, setPurchasable] = useState([]);
  const [owned, setOwned] = useState([defaultAvatar.id]);

  // Sincronizza stato iniziale con userData
  useEffect(() => {
  if (userData) {
    // Assicurati che il default avatar sia sempre presente
    const purchasedAvatars = userData.purchasedAvatars || [];
    setOwned([defaultAvatar.id, ...purchasedAvatars.filter(id => id !== defaultAvatar.id)]);
  }
}, [userData]);

  // Calcola avatar acquistabili
  useEffect(() => {
    const unlockedForPurchase = avatars
      .filter(
        (avatar) =>
          points >= avatar.cost && // Abbastanza punti
          !owned.includes(avatar.id) // Non ancora posseduto
      )
      .map((avatar) => avatar.id);
    setPurchasable(unlockedForPurchase);
  }, [points, owned]);

  // Funzione per acquistare un avatar
  const handlePurchase = (avatarId) => {
    const avatar = avatars.find((a) => a.id === avatarId);
    if (avatar && points >= avatar.cost) {
      setPoints((prev) => prev - avatar.cost);
      setOwned((prev) => [...prev, avatarId]);
      setUserData((prev) => {
        const updatedData = {
          ...prev,
          purchasedAvatars: [...(prev.purchasedAvatars || []), avatarId],
        };
        localStorage.setItem("userData", JSON.stringify(updatedData));
        return updatedData;
      });
    }
  };

  // Funzione per selezionare un avatar
  const handleSelectAvatar = (avatarId) => {
    setUserData((prev) => {
      const updatedData = { ...prev, avatarSelected: avatarId };
      localStorage.setItem("userData", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  return (
    <>
      <div className="p-4 max-w-xs mx-auto mt-18">
        {
  avatars.some(avatar => !owned.includes(avatar.id)) ? (
    <>
      <h2 className="text-xl font-bold text-center mb-2">Sblocca il tuo avatar</h2>
      <p className="text-center mb-6 text-sm font-medium">Punti disponibili: {points}</p>
    </>
  ) : null
}


        {/* Lista avatar acquistabili */}
        <div className="flex flex-col items-center gap-6 mb-4">
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

        {/* Avatar acquistati */}
        <h3 className="text-lg font-semibold text-center mb-4">I tuoi avatar</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {owned.map((id) => {
            const avatar =
              id === defaultAvatar.id
                ? defaultAvatar
                : avatars.find((a) => a.id === id);
            const isSelected = userData?.avatarSelected === id;
            return (
              <div
                key={id}
                onClick={() => handleSelectAvatar(id)} // Seleziona avatar al click
                className={`p-1 rounded-full ${
                  isSelected
                    ? "bg-gradient-to-t from-cyan-600 via-cyan-200 to-cyan-600"
                    : "border-transparent"
                }`}
              >
                <img
                  src={`/immagini/${avatar.image}`}
                  alt={avatar.name}
                  className="w-25 h-25 rounded-full object-cover cursor-pointer hover:opacity-80 transition"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;