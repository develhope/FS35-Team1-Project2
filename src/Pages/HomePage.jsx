import Footer from "../Components/Footer";
import CallToAction from "../Components/CallToAction";
import HeroSection from "../Components/HeroSection";
import GameSection from "../Components/GameSection";

const HomePage = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto ">
        <HeroSection />
      </div>
      <div className="w-full bg-[url('../immagini/sfondohome_copia.svg')] bg-no-repeat bg-cover">
        <div className="max-w-4xl mx-auto">
          <GameSection />
          <CallToAction
            text="Conosciamoci meglio!"
            className="w-60 h-12 md:w-100 md:h-20 md:mt-15 md:mb-10 mt-5 mb-5"
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
