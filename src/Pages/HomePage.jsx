import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import CallToAction from "../Components/CallToAction";

const HomePage = () => {
  return (
    <>
      <Header leftIcon={<img src="./immagini/icon/hamburger.svg" className="w-[24px] ml-1" />} centerIcon={<img src="./immagini/logo.svg" className="w-[80px] ml-5" />}/>
      <HeroSection />
      <CallToAction text="Conosciamoci meglio!" />
      <Footer />
    </>
  );
};

export default HomePage;
