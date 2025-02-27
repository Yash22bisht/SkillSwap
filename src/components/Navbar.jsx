import ProfileIcon from "../assets/profileIcon.png";
import notificationIcon from "../assets/notificationIcon.png";
import ChatIcon from "../assets/ChatIcon.png";

const Navbar = () => {
  return (
    <div>
      <nav className='w-screen h-24 bg-[#00857a] flex items-center px-8 justify-between '>

        <div className="logo flex">
          <a href="/"><img src="src\assets\swapLogo.png" alt="" className='bg-white rounded-full w-16 p-2' /></a>
        </div>
        <div className="navMenu flex text-white text-xl font-semibold gap-6 ">
          <a href="/" className=' ease-in hover:underline-offset-4 hover:text-shadow-md hover:underline'><h3>Home</h3></a>
          <a href="/browseSkills" className=' ease-in hover:underline-offset-4 hover:text-shadow-md hover:underline'><h3>Browse Skills</h3></a>
          <a href="#HowItWork" className=' ease-in hover:underline-offset-4 hover:text-shadow-md hover:underline'><h3>How It Works </h3></a>
          <a href="/" className=' ease-in hover:underline-offset-4 hover:text-shadow-md hover:underline'><h3>About Us </h3></a>
          <a href="/" className=' ease-in hover:underline-offset-4 hover:text-shadow-md hover:underline'><h3>Contact</h3></a>
        </div>

        <div className="myAccount hidden items-center gap-8 mr-5 ">
          <div className="notification relative bottom-2">
            <div className="number relative top-4 left-5 bg-red-600 px-0 py-1 m-0 text-center rounded-[50%] font-bold  text-white text-sm">4</div>
            <img src={notificationIcon} alt="" className="w-8 h-8 cursor-pointer" />
          </div>
          <div className="notification relative bottom-2">
            <div className="number relative top-4 left-5 bg-red-600 px-0 py-1 m-0 text-center rounded-[50%] font-bold  text-white text-sm ">1</div>
            <img src={ChatIcon} alt="" className="w-8 h-8 cursor-pointer" />
          </div>
          <a href="/profile"><img src={ProfileIcon} alt="" className="w-12 cursor-pointer" /></a>

        </div>
        <div className="logs " >
          <a href="/login"><button className='logButton  text-teal-600 hover:text-teal-800 hover:shadow-md hover:shadow-white  text-lg mx-2 bg-white  font-bold rounded-lg px-3 py-2 '>Login</button></a>
          <a href="/register"><button className='logButton  text-teal-600 hover:text-teal-800 hover:shadow-md hover:shadow-white  text-lg mx-2 g-white bg-white font-bold rounded-lg px-3 py-2 '>Get Started</button></a>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
