import Navbar from "./navbar";
import heroImg from "../assets/hero3.png";
import arrowImg from "../assets/downArrow.png"

const HeroSection = () => {
  return (
    <div className="heroSection w-full h-screen overflow-y-visible overflow-x-hidden box-border px-0 mx-0 bg-teal-400 ">
      <Navbar />
      <div className="content w-screen h-[87vh] flex justify-center items-center">
        <div className="left w-[40vw] space-y-10 ml-6 ">
          <h1 className="text-5xl font-extrabold text-white tracking-wide leading-snug">
            Swap Skills,
            <br /> Share <span className="text-orange-600">Knowledge,</span>
            <br /> Grow Together!
          </h1>
          <div className="find space-y-7">
            <input
              type="text"
              name="search"
              placeholder="What skill are you looking for ?"
              className="w-[70%] h-12 text-teal-600 font-semibold text-2xl rounded-lg px-4 py-4"
            />
            <br />
            <button className="logButton  text-white hover:text-orange-600 hover:bg-white transition-all ease-linear  text-2xl mr-6 bg-orange-500  font-bold rounded-lg px-5 py-2 ">
              Offer Skill
            </button>
            <button className="logButton  text-white hover:text-orange-600 hover:bg-white transition-all ease-linear   text-2xl mr-2 bg-orange-500  font-bold rounded-lg px-5 py-2 ">
              Find Skill
            </button>
          </div>
        </div>
        <div className="right  flex flex-col items-center justify-center">
          <img src={heroImg} className="w-[50vw] " alt="People colaborating" />
        </div>
        <div className="downArrow absolute left-1/2 bottom-10 animate-bounce">
            <img src={arrowImg} className=" w-12 border-4 border-white rounded-full" alt="down arrow" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
