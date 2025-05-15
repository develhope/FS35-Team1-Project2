import { useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import HeaderCenter from "./HeaderCenter";

const Header = () => {
  const { userData } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  const formPath = "/form";
  const profilePath = userData ? "/profile" : formPath;
  const shopPath = userData ? "/shop" : formPath;

  return (
    <div className="fixed top-0 left-0 flex z-50 bg-white justify-between items-center w-full p-2 font-[Arial] font-bold h-20">
      <div className="w-20">
        {location.pathname === "/" ? (
          <button>
            <Link to="/sidebar">
              <img
                src="./immagini/icon/hamburger.svg"
                className="w-6 ml-1"
                alt="menu"
              />
            </Link>
          </button>
        ) : (
          <button>
            <Link onClick={() => navigate(-1)}>
              <img
                src="./immagini/icon/arrow-left.svg"
                className="w-3 ml-1"
                alt="menu"
              />
            </Link>
          </button>
        )}
      </div>
      <HeaderCenter />
      <div className="flex w-20 justify-end">
        <Link to={profilePath} className="pr-2">
          <img
            src="../immagini/icon/profile.svg"
            className="w-5 mt-1"
            alt="profile"
          />
        </Link>
        <Link to={shopPath}>
          <img
            src="./immagini/icon/usp-delivery-store.svg"
            className="w-8"
            alt="shop"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
