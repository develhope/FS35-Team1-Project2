import Footer from "../Components/Footer";
import CallToAction from "../Components/CallToAction";
import HeroSection from "../Components/HeroSection";
import Header from "../Components/Header";
import GameSection from "../Components/GameSection";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Header
        /* leftIcon={
          <Link to="/sidebar"><img src="./immagini/icon/hamburger.svg" className="w-[24px] ml-1"/></Link>
        } */
        centerIcon={<img src="./immagini/logo.svg" className="w-[80px] ml-6" />}
      />
      <div>
        <div>
          <HeroSection />
          <GameSection />
          <CallToAction text="Conosciamoci meglio!" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
