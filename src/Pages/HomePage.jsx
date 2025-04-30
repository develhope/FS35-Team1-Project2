import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import Shop from "./Shop";
import CallToAction from "../Components/CallToAction";
import HeroSection from "../Components/HeroSection";

const HomePage = () => {
  return (
    <>
      <Header
        leftIcon={
          <img src="./immagini/icon/hamburger.svg" className="w-[24px] ml-1" />
        }
        centerIcon={<img src="./immagini/logo.svg" className="w-[80px] ml-6" />}
        profileIcon={
          <img src="../../immagini/icon/profile.svg" className="w-[20px]" />
        }
      />
      <HeroSection />
      <Sidebar/>
      <CallToAction text="Conosciamoci meglio!" />
      <Shop/>
      <Footer />
      
    </>
  );
};

export default HomePage;