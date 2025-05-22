const HeaderGiochi = ({ titolo }) => {
  return (
    <div className="relative">
      <div className="flex items-center absolute top-2 gap-22 z-[200] m-4 text-white">
        <img
          src="../immagini/icon/sfondo-home.svg"
          alt="instagram"
          className="w-8 invert"
        />
        <h3 className="text-2xl">{titolo}</h3>
      </div>
    </div>
  );
};

export default HeaderGiochi;