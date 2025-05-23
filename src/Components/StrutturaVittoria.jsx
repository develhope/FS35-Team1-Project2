import { useNavigate } from "react-router-dom";

const StrutturaVittoria = ({ sfondo, immagine1, immagine2, frase, punti }) => {
const navigate = useNavigate();

  return (
    <>
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
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="flex flex-col items-center text-center">
            <div className="flex gap-3 mt-20">
              <img
                src={immagine1}
                alt=""
                className="w-40 h-auto object-contain transform scale-x-[-1]"
              />
              <img
                src={immagine2}
                alt=""
                className="w-40 h-auto object-contain"
              />
            </div>

            <div className="w-80 px-4 mt-10">
              <h1 className="text-black text-4xl font-bold pb-2">Complimenti!</h1>
              <p className="text-black mt-2">
                {frase}
                <br />
                <p className="text-white mt-2">Hai raccolto {punti} punti, corri a comprare la tua nuova skin!</p>
              </p>
              <div className="flex gap-10 justify-center pt-5">
                <button className="bg-yellow-300 hover:bg-yellow-200 w-20 h-10  rounded text-center flex items-center justify-center"   onClick={() => navigate("/shop")}>Shop</button>
                <button className="bg-yellow-300 hover:bg-yellow-200 w-20 h-10  rounded text-center flex items-center justify-center"  onClick={() => navigate("/")}>Livelli</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default StrutturaVittoria;
