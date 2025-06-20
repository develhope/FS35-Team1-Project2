import { useNavigate } from "react-router-dom";
import { useContext } from "react"; 
import { UserContext } from "../UserContext";

const avatars = [
  { id: 0, name: "Astronauta", image: "nebula icon.png" }, // Avatar predefinito
  { id: 1, name: "Cane", cost: 100, image: "cane astronauta.svg" },
  { id: 2, name: "Koala", cost: 150, image: "koala astronauta.svg" },
  { id: 3, name: "Volpe", cost: 200, image: "leone astronauta.svg" },
  { id: 4, name: "Orso", cost: 150, image: "orso astronauta.svg" },
  { id: 5, name: "Gatto", cost: 300, image: "gatto astronauta.svg" },
  { id: 6, name: "Scimmia", cost: 350, image: "scimmia astronauta.svg" },
];

const HeaderFineLivelli = () => {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext); 

  const selectedAvatar =
    avatars.find((avatar) => avatar.id === userData?.avatarSelected) || 
    avatars.find((avatar) => avatar.id === 0); 

  return (
    <div className="bg-transparent p-4 gap-16 flex justify-between z-50 relative">
      <button
        onClick={() => {
          console.log("Click su Home");
          navigate("/");
        }}
        className="focus:outline-none"
        aria-label="Home"
      >
        <img
          className="w-[25px] md:w-12 filter invert brightness-200"
          src="./assets/immagini/icon/sfondo-home.svg"
          alt="Home"
        />
      </button>

      <div className="flex gap-3">
        <button
          onClick={() => {
            console.log("Click su Profile");
            navigate("/profile");
          }}
          className="focus:outline-none"
          aria-label="Profile"
        >
          {/* Usa l'immagine dell'avatar selezionato dinamicamente */}
          <img
            className="w-7 md:w-12 rounded-full"
            src={`./assets/immagini/${selectedAvatar.image}`} // Modificato per usare l'avatar selezionato
            alt={selectedAvatar.name} // Usa il nome dell'avatar selezionato come alt text
          />
        </button>

        <button
          onClick={() => {
            console.log("Click su Shop");
            navigate("/shop");
          }}
          className="focus:outline-none"
          aria-label="Shop"
        >
          <img
            className="w-[30px] md:w-12 filter invert brightness-200"
            src="./assets/immagini/icon/usp-delivery-store.svg"
            alt="Shop"
          />
        </button>
      </div>
    </div>
  );
};

export default HeaderFineLivelli;
