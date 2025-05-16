import Footer from "../Components/Footer";
import CallToAction from "../Components/CallToAction";
import HeroSection from "../Components/HeroSection";
import GameSection from "../Components/GameSection";

const HomePage = () => {
  return (
    <>
      <div>
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
