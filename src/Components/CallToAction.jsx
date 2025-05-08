const CallToAction = ({ text, onClick, disabled = false }) => {
  return (
    <div className="w-screen flex items-center justify-center">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-[240px] h-[52px] rounded-[20px] bg-[#A7D6E0]  ${
          disabled ? "opacity-30 cursor-not-allowed" : "hover:bg-[#92c6d2] cursor-pointer"
        }`}
      >
        {text}
      </button>
    </div>
  );
};

export default CallToAction;
