const Header = ({leftIcon, centerIcon}) => {
  return (
    <div className="flex justify-around  items-center w-full mt-2 font-[Arial] font-bold">
      <button >
        {leftIcon}
        {/* <img src="./immagini/icon/hamburger.svg" className="w-[24px] ml-1" /> */}
      </button>
      <div className="pl-10">
      {centerIcon }

      </div>
      {/* <img src="./immagini/logo.svg" className="w-[80px] ml-5" /> */}
      <div className="flex ">
        <button>
          <img src="./immagini/icon/profile.svg" className="w-[20px]" />
        </button>
        <button>
          <img
            src="./immagini/icon/usp-delivery-store.svg"
            className="w-[30px] ml-2"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
