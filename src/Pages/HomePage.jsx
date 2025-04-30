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