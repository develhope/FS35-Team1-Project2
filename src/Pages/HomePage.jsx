import HeroSection from "../Components/HeroSection";
import CallToAction from "../Components/CallToAction";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import Shop from "./Shop";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Sidebar/>
      <CallToAction text="Conosciamoci meglio!" />
      <Shop/>
      <Footer />
      
    </>
  );
};

export default HomePage;
