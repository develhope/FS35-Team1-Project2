// AnteprimaGiochi.jsx
import CallToAction from "./CallToAction";

const AnteprimaGiochi = ({
  title,
  text,
  media,
  img,
  route,
  callToAction1Text = "Iniziamo!", // Testo di default per il primo bottone
  callToAction1Route = "/form", // Route di default per il primo bottone
  callToAction1Classes = "w-60 md:w-80", // DEFAULT: includi la larghezza qui
  callToAction2Text = "Livelli", // Testo di default per il secondo bottone
  callToAction2Route = "/form", // Route di default per il secondo bottone
  callToAction2Classes = "w-60 md:w-80", // DEFAULT: includi la larghezza qui
  showTwoButtons = false, // Per decidere se mostrare due bottoni
}) => {
  if (!route && !callToAction1Route && !callToAction2Route) {
    console.warn(
      "Warning: manca la prop 'route' o le prop 'callToActionXRoute' per i bottoni in AnteprimaGiochi"
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
      <div className="text-center relative md:mt-15">
        <h1 className="text-2xl md:text-4xl">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="overflow-hidden rounded-full">{media}</div>
        <p className="ml-2 md:text-xl">{text}</p>
      </div>

      <div className="flex flex-col justify-center items-center w-full">
        <div className="mb-6 md:mb-0 md:pr-6 md:pb-8 ">{img}</div>
        <div className="flex items-center">
          {/* Bottoni visibili solo su mobile */}
          <div className="mt-2 md:hidden flex justify-center">
            {/* Primo bottone mobile */}
            {(route || callToAction1Route) && (
              <CallToAction
                text={callToAction1Text}
                route={route || callToAction1Route}
                showAlways
                // Qui dovrai passare le classi di larghezza specifiche per il mobile
                className={`w-40 px-2 py-1 text-sm ${callToAction1Classes}`}
              />
            )}
            {/* Secondo bottone mobile (se showTwoButtons è true) */}
            {showTwoButtons && (route || callToAction2Route) && (
              <CallToAction
                text={callToAction2Text}
                route={route || callToAction2Route}
                showAlways
                // Qui dovrai passare le classi di larghezza specifiche per il mobile
                className={`w-40 px-2 py-1 text-sm ml-2 ${callToAction2Classes}`}
              />
            )}
          </div>

          {/* Bottoni visibili solo su tablet e desktop */}
          <div className="hidden md:flex justify-center mt-4 w-full max-w-xs mx-auto">
            {/* Primo bottone desktop */}
            {(route || callToAction1Route) && (
              <CallToAction
                text={callToAction1Text}
                route={route || callToAction1Route}
                showAlways
                className={callToAction1Classes} // Ora userà le classi passate, incluse le larghezze
              />
            )}
            {/* Secondo bottone desktop (se showTwoButtons è true) */}
            {showTwoButtons && (route || callToAction2Route) && (
              <CallToAction
                text={callToAction2Text}
                route={route || callToAction2Route}
                showAlways
                className={`ml-4 ${callToAction2Classes}`} // Ora userà le classi passate, incluse le larghezze
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnteprimaGiochi;
