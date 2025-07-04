import { Link } from "react-router-dom";

const Footer = () => {
const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Guarda questa app!',
          text: 'Scopri questa app fantastica!',
          url: window.location.href,
        })
        .then(() => console.log('Condiviso con successo!'))
        .catch((error) => console.error('Errore condivisione:', error));
    } else {
      alert('Condivisione non supportata dal browser');
    }
  };


    return (
     <footer className=" w-full bg-[#A7D6E0] rounded-t-4xl mt-5 font-[Arial] font-bold">
 
       
  <img src="./assets/immagini/logo.svg" alt="logo space math" className="w-full h-20 md:h-24 p-2 border-b-1 border-white" />
      

<div className="flex flex-col font-medium items-center justify-around mt-4 text-lg md:text-3xl lg:text-3xl space-y-4">
  <p 
    onClick={handleShare} 
    className="cursor-pointer hover:underline active:text-white"
  >
    Condividi
  </p>  

  <Link to="/newsLetter">
    <p className="cursor-pointer hover:underline active:text-white">
      NewsLetter
    </p>
  </Link>

  <Link to="/faq">
    <p className="cursor-pointer hover:underline active:text-white">
      FAQ
    </p>
  </Link>

  <Link to="/privacy">
    <p className="pb-2 text-base md:text-xl lg:text-2xl text-center">
      @2025 All rights reserved. 
      <span className="cursor-pointer hover:underline active:text-white ml-1">
        Privacy Policy
      </span>
    </p>
  </Link>
</div>

    </footer>
  );
};

export default Footer;
