import NavbarProfile from "../Components/NavbarProfile";

function Profile() {
  return (
    <>
      <NavbarProfile />
      <div className="flex flex-col items-center mt-4">
        <img
          src="./immagini/nebula icon.png"
          className="w-[168px] rounded-full"
        />
        <p className="flex items-center justify-center mt-5 w-[103px]">
          Marco B.
        </p>
      </div>

      <div className="ml-8 mt-8">
        <section>
          <div className="flex">
            <h3 className="pr-7">Gioco 1</h3>
            <img
              src="./immagini/icon/stellina-active.svg"
              className="w-[22px]"
            />
          </div>
          <div className="pb-4">
            <p className="">
              Apprendista <br /> dei numeri
            </p>
          </div>
          <div></div>
        </section>

        <section className="text-neutral-300">
          <div className="flex pb-1">
            <h3 className="pr-7">Gioco 2</h3>
            <img
              src="./immagini/icon/stellina-inactive.svg"
              className="w-[22px]"
            />
            <img
              src="./immagini/icon/stellina-inactive.svg"
              className="w-[22px] ml-2"
            />
          </div>
          <div className="pb-4">
            <p>
              Maestro <br /> della matematica
            </p>
          </div>
          <div></div>
        </section>
        <section className="text-neutral-300">
          <div className="flex">
            <h3 className="pr-7">Gioco 3</h3>
            <img
              src="./immagini/icon/stellina-inactive.svg"
              className="w-[22px]"
            />
            <img
              src="./immagini/icon/stellina-inactive.svg"
              className="w-[22px] ml-2"
            />
            <img
              src="./immagini/icon/stellina-inactive.svg"
              className="w-[22px] ml-2"
            />
          </div>
          <div className="pb-4">
            <p>Frase x</p>
          </div>
          <div></div>
        </section>
        <section className="text-neutral-300">
          <div className="flex">
            <h3 className="pr-7">Gioco 4</h3>
            <img
              src="./immagini/icon/stellina-inactive.svg"
              className="w-[22px]"
            />
            <img
              src="./immagini/icon/stellina-inactive.svg"
              className="w-[22px] ml-2"
            />
            <img
              src="./immagini/icon/stellina-inactive.svg"
              className="w-[22px] ml-2"
            />
            <img
              src="./immagini/icon/stellina-inactive.svg"
              className="w-[22px] ml-2"
            />
          </div>
          <div className="pb-4">
            <p>Frase x </p>
          </div>
          <div></div>
        </section>
      </div>
    </>
  );
}

export default Profile;
