import Footer from "../Components/Footer";
import CallToAction from "../Components/CallToAction";
import HeroSection from "../Components/HeroSection";
import Header from "../Components/Header";
import GameSection from "../Components/GameSection";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>
        <Header
          centerIcon={
            <img src="./immagini/logo.svg" className="w-[80px] ml-6" />
          }
        />
        <div>
          <HeroSection />
          <GameSection />
          <CallToAction text="Conosciamoci meglio!" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
