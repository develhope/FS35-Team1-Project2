import StrutturaVittoria from "../../Components/StrutturaVittoria";

const VittoriaGioco3 = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('./assets/immagini/sfondoproseguogiochi.svg')" }}
    >
      <div className="w-full max-w-md md:max-w-4xl">
        <StrutturaVittoria
          punti={150}
          immagine1="/assets/immagini/Gioco3/scimmia_home_3.svg"
          frase="Grazie a te la scimmietta è riuscita a comprare tutti i frutti richiesti dalla mamma!"
          isVittoriaGioco3={true} // flag attivo per questo gioco
          sfondo="/immagini/sfondoproseguogiochi.svg"
          testoNero={true}
          pbianco={false}
        />
      </div>
    </div>
  );
};

export default VittoriaGioco3;
