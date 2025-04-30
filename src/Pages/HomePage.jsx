import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import Shop from "./Shop";
import CallToAction from "../Components/CallToAction";
import HeroSection from "../Components/HeroSection";

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