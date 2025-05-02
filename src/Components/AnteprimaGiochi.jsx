import CallToAction from "./CallToAction";
import Header from "./Header";

const AnteprimaGiochi = ({ gioco, title, text, media, img }) => {
  return (
    <>
      <Header
        leftIcon={
          <img
            src=".\immagini\icon\arrow-left.svg"
            className="w-[15px] ml-1:"
          />
        }
        centerIcon={<p className="pl-[20px]">{gioco}</p>}
      />

      <div>
        <div className="text-center">
          <h1 className="text-2xl mt-3">{title}</h1>
        </div>

        <div className="flex items-center mt-14 px-12 gap-3.5">
          <div className="w-150 h-30 overflow-hidden rounded-full">{media}</div>

          <p className="ml-4">{text}</p>
        </div>

        <div className="flex flex-col items-center mt-14 gap-8">
          {img}

          <CallToAction text="Iniziamo!" />
        </div>
      </div>
    </>
  );
};

export default AnteprimaGiochi;
