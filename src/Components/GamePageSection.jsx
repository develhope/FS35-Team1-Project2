import React from "react";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

const GamePageSection = ({ title, description, instructions, img }) => {
  return (
    <>
      <h2 className="text-[24px] font-bold  m-4 md:mt-15 md:text-4xl">{title}</h2>
      <h3 className="text-[16px] font-bold m-4 md:text-2xl">Descrizione</h3>
      <p className="text-[13px] m-4 md:text-xl md:ml-30 md:mr-30">{description}</p>
      <h3 className="text-[16px] font-bold m-4 md:text-2xl">Istruzioni</h3>
      <div className="text-[13px] m-4 md:text-xl md:ml-30 md:mr-30">{instructions}</div>
      <div className={`w-80 text-center p-4 rounded-lg md:w-`}>
        <div>
          <div>{img}</div>
        </div>
      </div>
      <div>
        <CallToAction text="Iscriviti e gioca!" className="w-60 h-12 md:w-100 md:h-20" />
      </div>
      <Footer />
    </>
  );
};

export default GamePageSection;
