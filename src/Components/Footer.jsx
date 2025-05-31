const Footer = () => {
  return (
    <footer className=" w-full bg-[#A7D6E0] rounded-t-4xl mt-5 font-[Arial] font-bold">
      <img
        src="immagini/logo.svg"
        alt="logo space math"
        className="w-full h-24 p-2 border-b-1 border-white"
      />

      <section className="flex items-center justify-center gap-10 mt-3  ">
        <img src="immagini/icon/facebook.svg" alt="Facebook" className="w-7 md:w-12" />
        <img src="immagini/icon/twitter.svg" alt="Twitter" className="w-7 md:w-12" />
        <img src="immagini/icon/tiktok.svg" alt="Tiktok" className="w-7 md:w-12" />
        <img
          src="immagini/icon/instagram.svg"
          alt="Instagram"
          className="w-7 md:w-12"
        />
      </section>
      <div className="flex flex-col font-medium items-center justify-around mt-4 text-lg md:text-xl">
        <p>Contatti | NewsLetter |</p>
        <p> Privacy & terms</p>
        <p className="mt-7 pb-2 text-base">
          @2025 All rights reserved. <u>Privacy Policy</u>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
