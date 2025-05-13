import { useNavigate } from "react-router-dom";

const CallToAction = ({ text, disabled = false, route = "/form" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled) {
      navigate(route); 
    }
  };

  return (
    <div className="w-screen flex items-center justify-center">
      <button
        onClick={handleClick}
        disabled={disabled}
        className={`w-[240px] h-[52px] rounded-[20px] bg-[#A7D6E0] ${
          disabled ? "opacity-30 cursor-not-allowed" : "hover:bg-[#92c6d2] cursor-pointer"
        }`}
      >
        {text}
      </button>
    </div>
  );
};

export default CallToAction;
