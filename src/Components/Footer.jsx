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
 
       
  <img src="immagini/logo.svg" alt="logo space math" className="w-full h-24 p-2 border-b-1 border-white" />
      

   <div className="flex flex-col font-medium items-center justify-around mt-4 text-lg">
    <p onClick={handleShare} className="cursor-pointer hover:underline active:text-white"> Condividi</p>  
    <Link to={"/newsLetter"}><p className="cursor-pointer hover:underline active:text-white"> NewsLetter  </p></Link>
    <Link to={"/faq"}><p className="cursor-pointer hover:underline active:text-white"> FAQ</p></Link>
    <Link to={"/privacy"}><p className="mt-7 pb-2 text-base">@2025 All rights reserved. <span className="cursor-pointer hover:underline active:text-white">Privacy Policy</span></p></Link>
   </div>
    </footer>
    );
  };
 
  export default Footer;