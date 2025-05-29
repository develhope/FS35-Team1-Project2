import { useNavigate } from "react-router-dom";
import HeaderFineLivelli from "./HeaderFineLivelli";
import { useEffect, useState, useContext } from "react";
import { PointsContext } from "../PointsContext";

const StrutturaVittoria = ({
  sfondo,
  immagine1,
  immagine2,
  isVittoriaGioco3 = false,
  frase,
  flipDonna = true,
  donnaClass = "",
  maschioClass = "",
}) => {
  const navigate = useNavigate();
  const [isIpadMini, setIsIpadMini] = useState(false);

  useEffect(() => {
    const checkIpadMini = () => {
      const width = window.innerWidth;
      setIsIpadMini(width >= 600 && width <= 768);
    };
    checkIpadMini();
    window.addEventListener("resize", checkIpadMini);
    return () => window.removeEventListener("resize", checkIpadMini);
  }, []);

  const { points } = useContext(PointsContext);

  return (
    <div
      style={{
        backgroundImage: `url('${sfondo}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <HeaderFineLivelli />

      <div className="absolute inset-0 flex justify-center items-center">
        <div
          className={`flex flex-col text-center items-center ${
            isIpadMini ? "px-8" : ""
          }`}
          style={{
            maxWidth: isIpadMini ? "90%" : "auto",
          }}
        >
          <div
            className={`flex gap-3 mt-20 justify-center ${
              isIpadMini ? "flex-col items-center" : ""
            }`}
          >
            <img
              src={immagine1}
              className={`h-auto object-contain ${
                isIpadMini ? "w-50 mb-6" : "w-50"
              } ${
                isVittoriaGioco3
                  ? "mx-auto transform-none"
                  : flipDonna
                  ? "transform scale-x-[-1]"
                  : ""
              } ${donnaClass}`}
              alt="Immagine Vittoria"
            />
            {!isVittoriaGioco3 && immagine2 && (
              <img
                src={immagine2}
                alt=""
                className={`h-auto object-contain ${
                  isIpadMini ? "w-48" : "w-40"
                } ${maschioClass}`}
              />
            )}
          </div>

          <div className="mb-[100px]">
            <div
              className={`mt-10 ${
                isIpadMini ? "w-full max-w-md" : "w-80"
              } px-4`}
            >
              <h1
                className={`p-1.5 text-black font-bold pb-2 ${
                  isIpadMini ? "text-5xl" : "text-4xl"
                }`}
              >
                Complimenti!
              </h1>
              <p
                className={`text-black p-3.5 mt-2 ${
                  isIpadMini ? "text-3xl" : ""
                }`}
              >
                {frase}
              </p>
              <p
                className={`text-white p-3.5 mt-2 ${
                  isIpadMini ? "text-3xl" : ""
                }`}
              >
                Hai raccolto {points} punti, corri a comprare la tua nuova skin!
              </p>

              <div className="flex gap-10 justify-center pt-5">
                <button
                  className={`bg-yellow-300 hover:bg-yellow-200 w-20 h-10 rounded flex items-center justify-center ${
                    isIpadMini ? "px-14 py-8 text-3xl" : ""
                  }`}
                  onClick={() => navigate("/shop")}
                >
                  Shop
                </button>
                <button
                  className={`bg-yellow-300 hover:bg-yellow-200 w-20 h-10 rounded flex items-center justify-center ${
                    isIpadMini ? "px-14 py-8 text-3xl" : ""
                  }`}
                  onClick={() => navigate("/")}
                >
                  Livelli
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StrutturaVittoria;
