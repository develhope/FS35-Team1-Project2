function NavbarProfile() {
  return (
    <div className="flex justify-between w-full mt-2">
      <button>
        <img src="./immagini/icon/arrow-left.svg" className="w-[20px] ml-1" />
      </button>
      <p className="flex items-center justify-end w-[151px]">Il mio profilo</p>
      <div className="flex">
        <button>
          <img
            src="./immagini/nebula icon.png"
            className="w-[34px] rounded-2xl"
          />
        </button>
        <button>
          <img
            src="./immagini/icon/usp-delivery-store.svg"
            className="w-[30px] ml-2 "
          />
        </button>
      </div>
    </div>
  );
}

export default NavbarProfile;
