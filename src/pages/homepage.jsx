import FeatureSections from "../components/featureSections";
import Footer from "../components/Footer";
import HeroSection from "../components/heroSection";
import HowItWork from "../components/HowItWork";
import ReviewSection from "../components/reviewSection";

const Homepage = () => {
  return (
    <div >
      <HeroSection />
      <HowItWork />
      {/* <FeatureSections/> */}
      <ReviewSection />
      <Footer />

    </div>
  );
};

export default Homepage;
