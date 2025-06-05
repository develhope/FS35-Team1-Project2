import { useState } from "react";
import CallToAction from "../Components/CallToAction";
import { Link } from "react-router-dom";

const Form = () => {
  const [scelta, setScelta] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center py-[50px] space-y-7 text-center mt-10 md:mt-[100px]">
        <h1 className="text-2xl md:text-[36px]" >Parliamo un pò</h1>
        <h2 className="text-[18px] md:text-[24px]">Prima di partire... facciamo squadra!</h2>
        <h3 className="text-[14px] px-[56px] md:text-[24px]">
          Il quiz serve a conoscerti meglio e ci piace sapere chi ci sta
          aiutando. <br /> Sei il genitore?
        </h3>
      </div>

      <div className="flex flex-row justify-between items-start p-5 space-x-10 md:text-[34px]">
        <div className="flex flex-col justify-start items-start space-y-7 text-left w-fit relative">
          <form className="space-y-5">
            <label className="flex items-center space-x-5">
              <input
                type="radio"
                name="scelta"
                value="bambino"
                className="w-5 h-5"
                onChange={(e) => setScelta(e.target.value)}
              />
              <span>Sono il bambino</span>
            </label>

            <label className="flex items-center space-x-5">
              <input
                type="radio"
                name="scelta"
                value="genitore"
                className="w-5 h-5"
                onChange={(e) => setScelta(e.target.value)}
              />
              <span>Sono il genitore</span>
            </label>

            <label className="flex items-center space-x-5">
              <input
                type="radio"
                name="scelta"
                value="insieme"
                className="w-5 h-5"
                onChange={(e) => setScelta(e.target.value)}
              />
              <span>Siamo insieme</span>
            </label>
          </form>

          {scelta === "bambino" && (
            <div className="absolute top-full mt-2 left-0 bg-[#292929]/90 text-white rounded-2xl px-6 py-4 text-sm md:text-2xl shadow-lg max-w-md z-50 backdrop-blur-sm">
              Il quiz è pensato per essere fatto con l’aiuto di un adulto. 💡
              <br />
              Corri a dirlo a mamma e papà!
            </div>
          )}
          <div>
            <Link to="/quiz">
              <CallToAction
                route="/quiz"
                text="Continua"
                showAlways={true}
                disabled={!scelta || scelta === "bambino"}
                className="w-60 h-12 md:w-100 md:h-20"
              />
            </Link>
          </div>
        </div>
<div className="fixed bottom-20 right-20 translate-x-1/2 md:bottom-10 md:right-14 md:translate-x-0 z-10">
  <img
    src="./immagini/nebula_primaForm.png"
    alt="NebulaForm"
    className="w-[120px] md:w-[230px] object-contain"
  />
</div>


      </div>
    </>
  );
};

export default Form;
