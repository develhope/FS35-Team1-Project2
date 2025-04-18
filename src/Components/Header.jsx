const Header = () => {
  return (
    <div className="flex justify-between w-full mt-2">
      <img src="./immagini/icon/hamburger.svg" className="w-[24px] ml-1" />
      <img src="./immagini/logo.svg" className="w-[80px] ml-4" />
      <div className="flex ">
        <img src="./immagini/icon/profile.svg" className="w-[20px]" />
        <img
          src="./immagini/icon/usp-delivery-store.svg"
          className="w-[30px] ml-2 "
        />
      </div>
    </div>
  );
};

export default Header;
