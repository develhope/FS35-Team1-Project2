import { useNavigate } from "react-router-dom";

const HeaderFineLivelli = (
  
) => {
  const navigate = useNavigate();

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
          src="/immagini/icon/sfondo-home.svg"
          alt="Home"
        />
      </button>

      <div className="flex gap-3">

        <button
          onClick={() => {
            console.log("Click su Profile");
            navigate("/profile");
          }}
          className="focus:outline-none "
          aria-label="Profile"
        >
          <img
            className="w-[20px] md:w-8 filter invert brightness-200"
            src="/immagini/icon/profile.svg"
            alt="Profile"
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
            src="/immagini/icon/usp-delivery-store.svg"
            alt="Shop"
          />
        </button>
      </div>
    </div>
  );
};

export default HeaderFineLivelli;

