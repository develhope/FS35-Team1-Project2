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
          <div className="w-full bg-[url('../immagini/sfondohome_copia.svg')] bg-no-repeat bg-cover">
            <div>
              <GameSection />
              <CallToAction text="Conosciamoci meglio!" />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
