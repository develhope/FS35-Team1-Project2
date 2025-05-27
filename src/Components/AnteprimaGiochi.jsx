import CallToAction from "./CallToAction";
import Header from "./Header";

const AnteprimaGiochi = ({ gioco, title, text, media, img }) => {
  return (
    <>
      <div>
        <div className="text-center mt-20">
          <h1 className="text-2xl mt-3">{title}</h1>
        </div>

        <div className=" flex items-center mt-8 px-11 gap-4">
          <div className="overflow-hidden rounded-full">{media}</div>

          <p className="ml-4 a">{text}</p>
        </div>

        <div className="relative flex flex-col items-center mt-4 gap-8 p-6">
          {img}
        </div>

        <CallToAction text="Iniziamo!" />
      </div>
    </>
  );
};

export default AnteprimaGiochi;
