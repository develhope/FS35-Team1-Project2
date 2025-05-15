import { useEffect, useState } from "react";
import Header from "../Components/Header";

// Avatar disponibili
const avatars = [
  { id: 1, name: "Cane", cost: 100, image: "cane astronauta.svg" },
  { id: 2, name: "Koala", cost: 150, image: "koala astronauta.svg" },
  { id: 3, name: "Volpe", cost: 200, image: "leone astronauta.svg" },
  { id: 4, name: "Orso", cost: 150, image: "orso astronauta.svg" },
  { id: 5, name: "Gatto", cost: 300, image: "gatto astronauta.svg" },
  { id: 6, name: "Scimmia", cost: 350, image: "scimmia astronauta.svg" },
];

// Avatar iniziale, sempre sbloccato
const defaultAvatar = {
  id: 0,
  name: "Astronauta",
  image: "nebula icon.png",
};

const Shop = () => {
  const [points /*setPoints*/] = useState(); // Cambia questo valore dinamicamente quando vuoi
  const [unlocked, setUnlocked] = useState([defaultAvatar.id]); // Solo avatar realmente sbloccati

  // Sblocca un avatar se non è già sbloccato e i punti sono sufficienti
  useEffect(() => {
    avatars.forEach((avatar) => {
      if (points >= avatar.cost && !unlocked.includes(avatar.id)) {
        setUnlocked((prev) => [...prev, avatar.id]);
      }
    });
  }, [points]);

  return (
    <>
      
      <div className="p-4 max-w-xs mx-auto mt-18">
        {/* Titolo principale */}
        <h2 className="text-xl font-bold text-center mb-2">
          Sblocca il tuo avatar
        </h2>
        <p className="text-center mb-6 text-sm font-medium">
          Punti disponibili: {points}
        </p>

        {/* Lista avatar disponibili */}
        <div className="flex flex-col items-center gap-6">
          {avatars.map((avatar) => {
            const isUnlocked = unlocked.includes(avatar.id);
            return (
              <div key={avatar.id} className="flex flex-col items-center">
                <img
                  src={`/immagini/${avatar.image}`}
                  alt={avatar.name}
                  className={`w-35 h-35 rounded-full object-cover transition-opacity duration-300 ${
                    isUnlocked ? "opacity-100" : "opacity-30"
                  }`}
                />
                <span className="mt-2 text-sm text-gray-700">
                  {avatar.cost} pt
                </span>
              </div>
            );
          })}
        </div>

        {/* Avatar sbloccati visibili solo se presenti */}
        <h3 className="text-lg font-semibold text-center mt-10 mb-4">
          I tuoi avatar
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {unlocked.map((id) => {
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
