import CallToAction from "./CallToAction";

const AnteprimaGiochi = ({ title, text, media, img }) => {
  return (
    <div
      className="flex flex-col justify-between items-center px-4"
      style={{
        height: "calc(100vh - 64px)", // lascia spazio per l'header
        
        paddingTop: "80px",
      }}
    >
      <div className="text-center relative">
        <h1 className="text-2xl mt-3">{title}</h1>
      </div>

      <div className="flex items-center">
        <div className="overflow-hidden rounded-full">
          {media}
        </div>
        <p className="ml-2">{text}</p>
      </div>

      <div>{img}</div>

      <div>
        <CallToAction text="Iniziamo!" />
      </div>
    </div>
  );
};

export default AnteprimaGiochi;
