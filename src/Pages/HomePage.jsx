import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import CallToAction from "../Components/CallToAction";

const HomePage = () => {
  return (
    <>

      <Header />
      <HeroSection />
      <CallToAction text="Conosciamoci meglio!" />
      <Footer />
    </>
  );
};

export default HomePage;