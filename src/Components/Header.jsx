const Header = ({ leftIcon, centerIcon, profileIcon }) => {
  return (
    <div className="flex justify-between  items-center w-full mt-2 p-2 font-[Arial] font-bold">
      <button>{leftIcon}</button>
      <div>{centerIcon}</div>
      <div className="flex ">
        <button className="pr-2">{profileIcon}</button>
        <button>
          <img
            src="./immagini/icon/usp-delivery-store.svg"
            className="w-[31px]"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
