import Card from "./card.jsx";
import step1 from "../assets/step1.jpeg";
import step2 from "../assets/step2.jpeg";
import step3 from "../assets/step3.jpeg";
import step4 from "../assets/step4.jpeg";
import step5 from "../assets/step5.jpeg";
import step6 from "../assets/step6.jpeg";


function HowItWork() {
  return (
    <div id="HowItWork" className=" HowItWork  w-full py-14  px-0 mx-0 bg-[#E0F7F5]  ">
      <h1 className="font-Luckiest  text-6xl text-[#da6f00] font-extrabold tracking-wide text-center mb-8 ">
        Join Now For Free{" "}
      </h1>
      <div className="container w-full mx-auto flex space-x-14 justify-center flex-wrap">
        {/* Step1 */}
        <Card src = {step1} title = {"Create a Profile"} desc = {"Showcase your skills and let others know what you offer."} />
        {/* step2 */}
        <Card src = {step2} title = {"Browse or Offer Skills"} desc = {"Find the skills you need or offer your own expertise to help others."} />
        {/* step3 */}
        <Card src = {step3} title = {"Connect & Communicate"} desc = {"Send requests or messages to connect with others."} />
        {/* step4 */}
        <Card src = {step4} title = {"Schedule Sessions"} desc = {"Set up dates and times for skill-sharing sessions."} />
        {/* step5 */}
        <Card src = {step5} title = {"Exchange Skills & Grow"} desc = {"Collaborate and learn from others, leave reviews"} />
        {/* step6 */}
        <Card src = {step6} title = {"Celebrate Achievements"} desc = {"Share your achievements with the community to inspire others."} />
        
      </div>
    </div>
  );
}

export default HowItWork;
