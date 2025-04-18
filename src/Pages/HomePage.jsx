import HeroSection from "../Components/HeroSection";
import CallToAction from "../Components/CallToAction";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CallToAction text="Conosciamoci meglio!" />
      <Footer />
    </>
  );
};

export default HomePage;
