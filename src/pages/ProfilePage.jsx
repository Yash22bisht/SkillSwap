import Navbar from "../components/navbar";
import profileIcon from "../assets/profileIcon.png"
import LinkedIn from "../assets/linkedinLogo.png"
import twitter from "../assets/twitterLogo.png"
import edit from "../assets/editIcon.png"
import Add from "../assets/AddIcon.png"
import taught from "../assets/taughtIcon.png"
import learn from "../assets/learnIcon.png"
import Swap from "../assets/SwapIcon.png"
import ExpertiseCard from "../components/expertiseCard";
import SkillWantedCard from "../components/WantedCard";
import starIcon from "../assets/starIcon.png";
import emptyStar from "../assets/emptyStar.png";


const ProfilePage = () => {

  const renderStars =  (rating) => {
    let star = [];
    for(let i=0;i<5;i++){
      if(i<rating){
        star.push(<img key={i} src={starIcon} alt="Star" />)
      }
      else{
        star.push(<img key={i} src={emptyStar} alt="" />);
      }
    }
    return star ;
  }

  return (
    <div className="profilePage bg-gray-100 overflow-hidden">
      <Navbar />
      <div className="container w-4/5 h-full rounded-lg bg-white mx-auto mt-10 ">

        {/* header */}

        <div className="Header bg-teal-500 w-full h-44 rounded-t-xl py-3 px-10 flex justify-between">
          <div className="pfp relative top-[49%] w-32 h-32 bg-red-100 rounded-full overflow-hidden">
            <img src={profileIcon} alt="" />
          </div>
          <div className="edits">
          <img src={edit} alt="" className=" w-8 h-8 p-1 relative bg-gray-100  mt-1 hover:bg-gray-200 rounded-full  cursor-pointer " />
          <img src={edit} alt="" className=" w-10 h-10 p-1 relative top-[80%] mt-1 hover:bg-gray-200 rounded-full  cursor-pointer " />
          </div>
        </div>

        {/* info Section */}

        <div className="info w-full mt-16 flex justify-between px-10">
          <div className="aboutSect w-[60%]  px-10">
            <h1 className="name text-3xl  font-semibold ">Yash Bisht <span className="gender text-xl font-normal ml-3 mb-2">(He/Him)</span></h1>
            <div className="rating flex gap-1 mt-2 w-full"> {renderStars(4)} </div>
            <p className="About text-[17px] text-gray-700 font-semibold  mt-3 scrollbar-hide overflow-scroll  ">
              Passionate about web design | Learning photograph Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum delectus consectetur voluptate Lorem ipsum dolor sit amet
            </p>
            <p className="address my-2 text-blue-600 font-semibold">• Delhi, India </p>
            <div className="socialLinks flex gap-3 mt-2">
              <img src={LinkedIn} alt="" />
              <img src={twitter} alt="" />
            </div>

            <div className="PostNeedSection mt-5 ">
              <button className="mx-1 bg-teal-600 px-4 py-2 text-white text-[16px] item font-bold rounded-2xl hover:bg-teal-700">Offer Skill</button>
              <button className="mx-1 bg-white border-2 border-teal-600 px-4 py-2 text-teal-600 text-[16px] item font-bold rounded-2xl hover:outline hover:outline-[1px] hover:bg-teal-100">Request Skill</button>
              <button className="mx-1 bg-gray-500 px-4 py-2 text-white text-[16px] item font-bold rounded-2xl hover:bg-gray-600">Connections</button>
            </div>

            <div className="ContactSection mt-5 hidden">
              <button className="mx-1 bg-teal-600 px-4 py-2 text-white text-[16px] item font-bold rounded-2xl hover:bg-teal-700">Follow</button>
              <button className="mx-1 bg-white border-2 border-teal-500 px-4 py-2 text-teal-500 text-[16px] item font-bold rounded-2xl hover:outline hover:outline-[1px] hover:bg-teal-100">Request Swap</button>
              <button className="mx-1 bg-gray-500 px-4 py-2 text-white text-[16px] item font-bold rounded-2xl hover:bg-gray-600">Message</button>
            </div>

            <div className="partion border-b-2 border-gray-300 h-1 mt-6 "></div>

            <div className="experience my-8">
              <div className="head flex justify-between items-center ">
                <h1 className="text-3xl font-bold mb-3">Expertise</h1>
                <div className="edit flex gap-4 items-center mb-4">
                  <img src={Add} alt="" className="hover:bg-gray-200 rounded-full cursor-pointer  w-10 h-10 p-1" />
                  <img src={edit} alt="" className="hover:bg-gray-200 rounded-full cursor-pointer  w-10 h-10 p-1" />
                </div>
              </div>
              <div className="expertiseContainer space-y-2">
                <ExpertiseCard skill="Web Development" rating={2} />
                <ExpertiseCard skill="Content Writing" rating={3} />
                <ExpertiseCard skill="Data Analysis" rating={2} />
                <ExpertiseCard skill="Public Speaking" rating={3} />
                <ExpertiseCard skill="Mobile App Development" rating={3} />
              </div>
            </div>

            <div className="experience my-10">
              <div className="head flex justify-between items-center ">
                <h1 className="text-3xl font-bold mb-3">Skills Wanted</h1>
                <div className="edit flex gap-4 items-center mb-4">
                <img src={Add} alt="" className="hover:bg-gray-200 rounded-full cursor-pointer  w-10 h-10 p-1" />
                  <img src={edit} alt="" className="hover:bg-gray-200 rounded-full cursor-pointer  w-10 h-10 p-1" />
                </div>
              </div>
              <div className="expertiseContainer space-y-2">
                <SkillWantedCard skill="Web Development" />
                <SkillWantedCard skill="Content Writing" />
                <SkillWantedCard skill="Data Analysis" />

              </div>
            </div>
          </div>

          <div className="partion border-l-2 border-gray-200 w-1 "></div>

          <div className="activity w-[30%] h-[50vh] rounded-xl p-5 bg-amber-50 shadow-xl  ">
            <h1 className="text-3xl font-bold text-gray-700 mb-4  ">Community Statistics</h1>

            <div className="taught flex my-6 items-center gap-8">
              <img src={taught} alt="" className="w-12 h-12" />
              <div className="">
                <p className=" text-lg font-semibold">1,940 mins</p>
                <p>Total time taught</p>
              </div>
            </div>

            <div className="learnt flex items-center my-6 gap-8">
              <img src={learn} alt="" className="w-12 h-12 bg-white rounded-full" />
              <div className="">
                <p className=" text-lg text-black font-semibold">1,940 mins</p>
                <p className="text-gray-600">Total time learnt</p>
              </div>
            </div>

            <div className="swap flex items-center my-6 gap-8">
              <img src={Swap} alt="" className="w-12 h-12 bg-white rounded-full" />
              <div className="">
                <p className=" text-lg text-black font-semibold">12 Swaps</p>
                <p className="text-gray-600">Total Swaps</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    // <div className="min-h-screen bg-gray-100 py-10">
    //   <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     {/* Header Section */}
    //     <div className="bg-teal-500 py-6 px-8 text-white flex items-center gap-6">
    //       <img
    //         src="https://via.placeholder.com/120" 
    //         alt="Profile"
    //         className="w-28 h-28 rounded-full border-4 border-white"
    //       />
    //       <div>
    //         <h1 className="text-3xl font-bold">Jane Doe</h1>
    //         <p className="text-lg">Passionate about web design | Learning photography</p>
    //       </div>
    //     </div>

    //     {/* Skills Section */}
    //     <div className="p-8">
    //       <div className="grid grid-cols-2 gap-8">
    //         {/* Skills Offered */}
    //         <div>
    //           <h2 className="text-2xl font-bold mb-4 text-teal-600">Skills Offered</h2>
    //           <ul className="list-disc list-inside text-gray-700 space-y-2">
    //             <li>Web Development</li>
    //             <li>Graphic Design</li>
    //             <li>Content Writing</li>
    //           </ul>
    //         </div>

    //         {/* Skills Wanted */}
    //         <div>
    //           <h2 className="text-2xl font-bold mb-4 text-orange-500">Skills Wanted</h2>
    //           <ul className="list-disc list-inside text-gray-700 space-y-2">
    //             <li>Photography</li>
    //             <li>Video Editing</li>
    //             <li>Public Speaking</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>

    //     {/* About Section */}
    //     <div className="px-8 pb-8">
    //       <h2 className="text-2xl font-bold mb-4 text-gray-800">About Me</h2>
    //       <p className="text-gray-700 leading-relaxed">
    //         Hi, I'm Jane! I love designing websites and creating content that tells a story. I'm excited to learn photography and video editing to expand my creative skills. Let's connect and help each other grow!
    //       </p>
    //     </div>

    //     {/* Contact Button */}
    //     <div className="bg-gray-100 py-4 px-8 flex justify-center">
    //       <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-lg">
    //         Connect & Swap Skills
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProfilePage;
