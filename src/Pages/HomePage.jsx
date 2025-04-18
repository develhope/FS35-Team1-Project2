import HeroSection from "../Components/HeroSection";
import CallToAction from "../Components/CallToAction";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

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
