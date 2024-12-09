import FeatureSections from "../components/featureSections";
import HeroSection from "../components/heroSection";
import HowItWork from "../components/HowItWork";
import ReviewSection from "../components/reviewSection";

const Homepage = () => {
  return (
    <div className="">
        <HeroSection/>
        <HowItWork/>
        {/* <FeatureSections/> */}
        <ReviewSection/>

    </div>
  );
};

export default Homepage;
