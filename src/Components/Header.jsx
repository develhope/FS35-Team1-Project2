import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = ({ leftIcon, centerIcon }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex justify-between  items-center w-full mt-2 p-2 font-[Arial] font-bold">
      {location.pathname === "/" ? (
        <button>
          <Link to="/sidebar">
            <img
              src="./immagini/icon/hamburger.svg"
              className="w-[24px] ml-1"
            />
          </Link>
        </button>
      ) : (
        <button onClick={() => navigate(-1)}>{leftIcon}</button>
      )}
      <div>{centerIcon}</div>
      <div className="flex ">
        <button className="pr-2">
          <img src="../../immagini/icon/profile.svg" className="w-[20px]" />
        </button>
        <button>
          <img
            src="./immagini/icon/usp-delivery-store.svg"
            className="w-[31px]"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
