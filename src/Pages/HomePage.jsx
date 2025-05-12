import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import CallToAction from "../Components/CallToAction";
import HeroSection from "../Components/HeroSection";
import Header from "../Components/Header";
import GameSection from "../Components/GameSection";
import GamePage1 from "../Components/GamePage1";

const HomePage = () => {
  return (
    <>
      <Header
        leftIcon={
          <img src="./immagini/icon/hamburger.svg" className="w-[24px] ml-1" />
        }
        centerIcon={<img src="./immagini/logo.svg" className="w-[80px] ml-6" />}
      />
      <div>
        <div>
          <HeroSection />

          <Sidebar />
          <GameSection />
          <CallToAction text="Conosciamoci meglio!" />

          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
