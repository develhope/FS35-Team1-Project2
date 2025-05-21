import "./struttura1gioco.css";

const Struttura1Gioco = ({img1,img2,img3,nebula}) => {
  return (
    <>
      <div className=" w-screen h-screen overflow-hidden bggame1">
        <div className="relative w-auto gap-30 mt-22 flex">
          <img
            src="../immagini/Gioco1/astronautagioco1donna.svg"
            alt=""
            className="absolute top-[70px] left-[60px] w-24"
          />
          <img
            src="../immagini/Gioco1/astronautagioco1maschio.svg"
            alt=""
            className="absolute  top-[13px] left-[230px] w-24"
          />
        </div>
        
        <article className="mt-64 h-60 w-64 mx-auto  border-6 border-yellow-400 bg-white p-6 rounded-xl shadow-md">
        <div className="flex gap-4">
        <img
          src={img1}
          className="w-[40px]"
          alt="img1"
        />
          <img
          src={img2}
           className="w-[40px]"
          alt="img2"

        />
          <img
          src={img3}
           className="w-[40px] "
           alt="img2"
        />
        </div>
        


<div className="flex relative gap-3.5 mt-4">
 <button className="w-8 h-8 rounded-full bg-gray-300 text-[#21C8C8] text-lg font-bold flex items-center justify-center">
    1
  </button>
  <button className="w-8 h-8 rounded-full bg-gray-300 text-[#F5A42B] text-lg font-bold flex items-center justify-center">
    2
  </button>
  <button className="w-8 h-8 rounded-full bg-gray-300 text-[#EA3C3C] text-lg font-bold flex items-center justify-center">
    3
  </button>

<img className="absolute top-[10px] left-[148px] w-[75px] " src="../../immagini/Gioco1/nebula giochi.png" />
</div>
        
        
       </article>


      </div>
    </>
  );
};

export default Struttura1Gioco;
