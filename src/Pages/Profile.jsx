import Header from "../Components/Header";

const GameStatus = ({ title, starsActive, description }) => {
  const totalStars = 4;

  return (
    <section className={starsActive === 1 ? "" : "text-neutral-300"}>
      <div className="flex items-center pb-1">
        <h3 className="pr-7">{title}</h3>
        {[...Array(totalStars)].map((_, i) => (
          <img
            key={i}
            src={`./immagini/icon/${
              i < starsActive ? "stellina-active" : "stellina-inactive"
            }.svg`}
            className={`w-[22px] ${i > 0 ? "ml-2" : ""}`}
            alt="star"
          />
        ))}
      </div>
      <div className="pb-4">
        <p>{description}</p>
      </div>
    </section>
  );
};

function Profile() {
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center mt-20">
        <img
          src="./immagini/nebula icon.png"
          alt="Profilo"
          className="w-[168px] rounded-full"
        />
        <p className="flex items-center justify-center mt-5 w-[103px]">
          Marco B.
        </p>
      </div>

      <div className="ml-8 mt-8">
        <GameStatus
          title="Gioco 1"
          starsActive={1}
          description={
            <>
              Apprendista <br /> dei numeri
            </>
          }
        />
        <GameStatus
          title="Gioco 2"
          starsActive={0}
          description={
            <>
              Maestro <br /> della matematica
            </>
          }
        />
        <GameStatus title="Gioco 3" starsActive={0} description="Frase x" />
        <GameStatus title="Gioco 4" starsActive={0} description="Frase x" />
      </div>
    </div>
  );
}

export default Profile;
