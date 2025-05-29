import CallToAction from "./CallToAction";

const AnteprimaGiochi = ({ title, text, media, img, route }) => {
  if (!route) {
    console.warn(
      "Warning: manca la prop 'route' per il bottone in AnteprimaGiochi"
    );
  }

  return (
    <div
      className="flex flex-col justify-between items-center px-4"
      style={{
        height: "calc(100vh - 64px)", // spazio per l'header
        paddingTop: "76px",
      }}
    >
      <div className="text-center relative md:mt-4">
        <h1 className="text-2xl">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="overflow-hidden rounded-full">{media}</div>
        <p className="ml-2 md:text-xl">{text}</p>
      </div>

      <div className="flex flex-col justify-center items-center w-full">
        <div className="mb-6 md:mb-0 md:pr-6 md:pb-8 ">{img}</div>

        {/* Bottone visibile solo su mobile */}
        <div className="flex justify-center mt-2 md:hidden w-full max-w-xs mx-auto">
          {route && <CallToAction text="Iniziamo!" route={route} showAlways />}
        </div>

        {/* Bottone visibile solo su tablet e desktop */}
        <div className="hidden md:flex justify-center mt-4 w-full max-w-xs mx-auto">
          {route && <CallToAction text="Iniziamo!" route={route} showAlways />}
        </div>
      </div>
    </div>
  );
};

export default AnteprimaGiochi;
