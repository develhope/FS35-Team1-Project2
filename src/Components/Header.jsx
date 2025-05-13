import { useLocation, useNavigate, Link } from "react-router-dom";

const Header = ({ leftIcon, centerIcon, isSubscribed }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const formPath = "/form";
  const profilePath = isSubscribed ? "/profile" : formPath;
  const shopPath = isSubscribed ? "/shop" : formPath;

  return (
    <div className="flex justify-between items-center w-full mt-2 p-2 font-[Arial] font-bold">
      {location.pathname === "/" ? (
        <button>
          <Link to="/sidebar">
            <img
              src="./immagini/icon/hamburger.svg"
              className="w-[24px] ml-1"
              alt="menu"
            />
          </Link>
        </button>
      ) : (
        <button onClick={() => navigate(-1)}>{leftIcon}</button>
      )}

      <div>{centerIcon}</div>

      <div className="flex">
        <Link to={profilePath} className="pr-2">
          <img
            src="../../immagini/icon/profile.svg"
            className="w-[20px] mt-1"
            alt="profile"
          />
        </Link>
        <Link to={shopPath}>
          <img
            src="./immagini/icon/usp-delivery-store.svg"
            className="w-[31px]"
            alt="shop"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
