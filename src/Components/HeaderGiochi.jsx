import {Link} from "react-router-dom"

const HeaderGiochi = ({ titolo }) => {
  return (
    <div className="relative w-full max-w-screen-md mx-auto rounded shadow">
      <div className="flex items-center absolute top-4 mb-5 gap-20 z-[200] p-4 text-white w-full">
        <div>
          <Link to="/restart">
          <img
            src="/immagini/icon/arrow-left.svg"
            alt="instagram"
            className="w-5 invert flex-start"
          />
          </Link>
        </div>
        <div className="flex items-center">
          <h3 className="text-2xl absolute left-1/2 transform -translate-x-1/2">{titolo}</h3>
        </div>
      </div>
    </div>
  );
};

export default HeaderGiochi;
