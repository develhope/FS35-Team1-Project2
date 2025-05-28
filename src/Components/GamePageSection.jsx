import React from "react";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

const GamePageSection = ({ title, description, instructions, video}) => {
    return (
        <>
      <div className={`w-80 text-center p-4 rounded-lg mb-8`}>
        <h2 className="text-[24px] font-bold mb-8">{title}</h2>
        <h3 className="text-[16px] font-bold mb-4">Descrizione</h3>
        <p className="text-[13px] mb-8">{description}</p>
        <h3 className="text-[16px] font-bold mb-4">Istruzioni</h3>
        <div className="text-[13px] mb-8">{instructions}</div>
        <div>{video}</div>
      </div>
      <div>
        <CallToAction text="Iscriviti e gioca!" />
          
      </div>
      <Footer />   
      </>
    );
  };

  export default GamePageSection;