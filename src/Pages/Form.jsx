import Header from "../Components/Header";
import { useState } from "react";

const Form = () => {

    const [scelta, setScelta] = useState("");

  return (
    <>
      <Header
        leftIcon={
          <img
            src=".\immagini\icon\arrow-left.svg"
            className="w-[15px] ml-1:"
          />
        }
        centerIcon={<p className="px-[20px]">Quiz conoscitivo</p>}
      />
      <div className="flex flex-col justify-center items-center py-[50px] space-y-7 text-center">
        <h1 className="text-2xl">Parliamo un pò</h1>
        <h2 className="text-[18px]">Prima di partire... facciamo squadra!</h2>
        <h3 className="text-[14px] px-[56px]">
          Il quiz serve a conoscerti meglio e ci piace sapere chi ci sta
          aiutando. <br/> Sei con un genitore?
        </h3>
      </div>

      <div className="flex flex-row justify-between items-start p-5 space-x-10">
        <div className="flex flex-col justify-start items-start space-y-7 text-left w-fit">
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
        </div>
        

        <div className="w-fit">
          <img
            src="./immagini/nebula_primaForm.png"
            alt="NebulaForm"
            className="h-70 object-contain"
          />
        </div>

        {scelta === "bambino" && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#292929]/90 text-white  rounded-2xl px-6 py-4 text-sm shadow-lg max-w-3xl z-50 backdrop-blur-sm">
              Il quiz è pensato per essere fatto con l’aiuto di un adulto. 💡
              <br />
              Corri a dirlo a mamma e papà!
            </div>
          )}
        
      </div>
    </>
  );
};

export default Form;
