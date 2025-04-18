import HeroSection from "../Components/HeroSection";
import CallToAction from "../Components/CallToAction";
import Footer from "../Components/Footer";
import Header from "../Components/Header";


const HomePage = () => {
  return (
        <div>
        <Header/>
    <>
      <HeroSection />
      <CallToAction text="Conosciamoci meglio!" />
      <Footer />
        </div>
    </>
  );
};

export default HomePage;
