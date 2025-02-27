import Card from "../components/card";
import Navbar from "../components/navbar";
import step1 from "../assets/step1.jpeg";


const BrowseSkills = () => {
    return (
        <div className="bg-teal-50 w-screen h-full ">
            <Navbar />
            <h1 className="font-sans text-4xl text-[#e27300] font-extrabold text-left m-8 ">
                Popular Skills
            </h1>
            <div className="filter"></div>
            <div className="skillsContainer  w-full mx-auto flex justify-center flex-wrap space-x-6">
                <Card src={step1} title={"Create a Profile"} desc={"Showcase your skills and let others know what you offer."} />
                <Card src={step1} title={"Create a Profile"} desc={"Showcase your skills and let others know what you offer."} />
                <Card src={step1} title={"Create a Profile"} desc={"Showcase your skills and let others know what you offer."} />
                <Card src={step1} title={"Create a Profile"} desc={"Showcase your skills and let others know what you offer."} />
                <Card src={step1} title={"Create a Profile"} desc={"Showcase your skills and let others know what you offer."} />

            </div>
        </div>
    )
}

export default BrowseSkills
