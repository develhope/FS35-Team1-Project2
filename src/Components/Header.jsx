import { useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import HeaderCenter from "./HeaderCenter";

const avatars = [
  { id: 0, name: "Astronauta", image: "nebula icon.png" }, // Avatar predefinito
  { id: 1, name: "Cane", cost: 100, image: "cane astronauta.svg" },
  { id: 2, name: "Koala", cost: 150, image: "koala astronauta.svg" },
  { id: 3, name: "Volpe", cost: 200, image: "leone astronauta.svg" },
  { id: 4, name: "Orso", cost: 150, image: "orso astronauta.svg" },
  { id: 5, name: "Gatto", cost: 300, image: "gatto astronauta.svg" },
  { id: 6, name: "Scimmia", cost: 350, image: "scimmia astronauta.svg" },
];

const Header = () => {
  const { userData } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  const formPath = "/form";

  const profilePath = userData && userData.isLogged ? "/profile" : formPath;
  const shopPath = userData && userData.isLogged ? "/shop" : formPath;

  const selectedAvatar =
    userData && userData.avatarSelected !== null
      ? avatars.find((avatar) => avatar.id === userData.avatarSelected)
      : avatars.find((avatar) => avatar.id === 0);

  const finalAvatar =
    selectedAvatar || avatars.find((avatar) => avatar.id === 0);

  return (
    <div className="fixed top-0 left-0 flex z-50 bg-white justify-between items-center w-full p-2 font-[Arial] font-bold h-20 md:h-30">
      <div className="w-20">
        {location.pathname === "/" ? (
          <button>
            <Link to="/sidebar">
              <img
                src="./immagini/icon/hamburger.svg"
                className="w-6 ml-1 md:w-9"
                alt="menu"
              />
            </Link>
          </button>
        ) : (
          <button>
            <Link onClick={() => navigate(-1)}>
              <img
                src="./immagini/icon/arrow-left.svg"
                className="w-3 ml-1 md:w-6"
                alt="menu"
              />
            </Link>
          </button>
        )}
      </div>
      <HeaderCenter />
      <div className="flex w-20 justify-end">
        {userData && userData.isLogged ? (
          <>
            <Link to={profilePath} className="pr-2">
              <img
                src={`./immagini/${finalAvatar.image}`}
                className="w-8 md:w-15 rounded-full"
                alt={finalAvatar.name}
              />
            </Link>
            <Link to={shopPath}>
              <img
                src="./immagini/icon/usp-delivery-store.svg"
                className="w-8 md:w-16"
                alt="shop"
              />
            </Link>
          </>
        ) : (
          <>
            <Link to={formPath} className="pr-2">
              <img
                src="../immagini/icon/profile.svg"
                className="w-5 mt-1 md:w-7"
                alt="profile icon"
              />
            </Link>
            <Link to={formPath}>
              <img
                src="./immagini/icon/usp-delivery-store.svg"
                className="w-8 md:w-10"
                alt="shop icon"
              />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
