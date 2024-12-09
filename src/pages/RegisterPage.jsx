import CreateAccount from "../assets/Create_Account.Mp4";
import InputSect from "../components/InputSect";
import ProfileIcon from "../assets/profileIcon.png";
import emailIcon from "../assets/emailIcon.png";
import passwordIcon from "../assets/passwordIcon.png";



const RegisterPage = () => {
  return (
    <div className=" w-screen h-screen bg-gradient-to-b from-[#E0F7F5] to-teal-500 flex justify-center items-center ">
      <div className="container w-[75vw] h-[80vh] bg-white  p-5 flex gap-10 rounded-3xl ">
        <div className="left w-[45%]  h-[80vh]  ">
          <video
            src={CreateAccount}
            autoPlay
            muted
            loop
            className="createAccVideo h-[80vh] w-[80vh] "
          ></video>
        </div>
        <div className="right w-[50%] h-full px-2 flex flex-col items-center  ">
          <h1 className="Title text-4xl text-orange-500 font-extrabold text-center my-5 mb-10">

            Create Account
          </h1>
          <form
            action="/register"
            method="post"
            className="w-full flex items-center flex-col gap-8"
          >
            {/* username */}
            <InputSect src = {ProfileIcon} type="text" for = "Username" placeholder = "Enter Username " />
            {/* email */}
            <InputSect src = {emailIcon} type="email" for = "Email" placeholder = "Enter Email "/>
            {/* password */}
            <InputSect src = {passwordIcon} type="password" for = "Password" placeholder = "Enter Password "/>
            {/* confirm Password */}
            <InputSect src = {passwordIcon} type="password" for = "Password" placeholder = "Confirm Password  "/>

            <button type="submit" className="submitButton px-6 py-2 text-xl text-white rounded-lg font-bold bg-orange-500 hover:bg-orange-600"  >Create Account</button>
          </form>

          <p className="mt-4">Already have an Account ? <a href="/login" className="text-blue-600 font-semibold">Login</a> </p>
          <p className="text-sm mt-4">By creating an account you agree with our <a href="/terms&services" className="text-blue-600 ">Terms of Service, Privacy Policy</a></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
