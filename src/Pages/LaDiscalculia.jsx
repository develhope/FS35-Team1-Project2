import SezioniLaDiscalculia from "../Components/SezioniLaDiscalculia";
import Footer from "../Components/Footer";

const LaDiscalculia = () => {
  const sezioni = [
    {
      srcImg: "immagini/bambino dubbioso.svg",
      bg: "00AD68",
      title: "Cos'è la discalculia?",
      text: "La discalculia è un disturbo specifico dell’apprendimento che riguarda la matematica. Chi ne soffre può avere difficoltà a comprendere i numeri, fare calcoli o riconoscere quantità e simboli matematici, anche se ha intelligenza nella norma.",
    },
    {
      srcImg: "immagini/bambina libri.svg",
      bg: "FB8F20",
      title: "Cause della discalculia",
      text: "Le cause non sono ancora del tutto chiare, ma si pensa che siano legate al modo in cui il cervello elabora le informazioni numeriche. La discalculia non dipende da pigrizia o mancanza di impegno, ed è spesso ereditaria.",
      reverseColumns: true,
    },
    {
      srcImg: "immagini/bambina dubbiosa.svg",
      bg: "EFD45A",
      title: "Segnali della discalculia",
      text: "I segnali possono variare, ma tra i più comuni ci sono: difficoltà nel contare, confusione tra numeri simili, problemi con le tabelline, o nel capire il concetto di tempo e misura. Spesso si notano già nei primi anni di scuola.",
      reverse: true,
    },
    {
      srcImg: "immagini/bambino.svg",
      bg: "5C9BFF",
      title: "Soluzioni pratiche",
      text: "Con il giusto supporto, si può imparare la matematica in modo diverso! Strumenti visivi, attività tattili, giochi interattivi e strategie su misura possono fare una grande differenza nell’apprendimento.",
      lastReverse: true,
    },
  ];

  return (
    <>
      <nav className="flex justify-center bg-amber-950 p-4 mb-10">
        <img src="immagini/logo.svg" alt="" className="w-20" />
      </nav>

      {sezioni.map((sezione, index) => (
        <SezioniLaDiscalculia key={index} {...sezione} />
      ))}

      <Footer />
    </>
  );
};

export default LaDiscalculia;
