import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="flex z-50 flex-col space-y-4 p-4 w-full max-w-xs h-screen relative bg-white shadow-md">
      {/* X in alto a destra */}
      <Link to="/">
        <img
          src="immagini/icon/cross-small.svg"
          alt="Chiudi"
          className="w-[15px] absolute top-4 right-4 cursor-pointer hover:opacity-70 transition-opacity"
          onClick={() => setIsVisible(false)}
        />
      </Link>

      {/* Logo centrato */}
      <div className="flex justify-center mt-6 mb-10">
        <img className="w-[111px]" src="immagini/logo.svg" alt="Logo" />
      </div>

      {/* Link */}
      <div className="space-y-15">
        {" "}
        {/* spaziatura tra i link */}
        <div>
          <Link to="/la-discalculia">Cos'è la discalculia</Link>
        </div>
        <div>
          <Link to="/form">Quiz</Link>
        </div>
         <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/feedback">Feedback</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
