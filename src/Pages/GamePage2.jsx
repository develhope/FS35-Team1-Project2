import React from "react";
import Header from "../Components/Header";
import GamePageSection from "../Components/GamePageSection";

const GamePage2 = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center mt-18">
        <GamePageSection
          title="Metti in ordine"
          img={
            <img
              className="w-40 mx-auto md:w-50"
              src="/assets/immagini/Gioco2/astronauta biondo su pianeta.svg"
              alt="Astronauta biondo su pianeta"
            />
          }
          description="L'astronauta Marco ha trovato dei numeri sparsi nello spazio. Aiutalo a rimetterli in ordine!"
          instructions={
            <p>
              Guarda bene i numeri sparsi sullo schermo.
              <br />
              Trascinali o toccali nell'ordine giusto:
              <br />A volte in ordine crescente (dal più piccolo al più grande
              📈),
              <br />
              Altre volte in ordine decrescente (dal più grande al più piccolo
              📉).
              <br />
              <br />
              Nei livelli finali, ci sarà una sorpresa: alcuni numeri saranno
              scomparsi! 😮
              <br />
              Tocca lo spazio vuoto e scegli il numero mancante per completare
              la sequenza.
              <br />
              <br />
              💡 Usa la logica, l'intuizione e se vuoi, anche le dita per
              contare! <br />
              <br />
              🌟 Ogni serie completata ti avvicina a una nuova stella nel cielo
              di Nebula
            </p>
          }
        />
      </main>
    </>
  );
};

export default GamePage2;
