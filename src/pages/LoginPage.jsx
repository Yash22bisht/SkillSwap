import LoginIllust from "../assets/login.jpeg";
import InputSect from "../components/InputSect";
import ProfileIcon from "../assets/profileIcon.png";
import googleIcon from "../assets/googleIcon.png";
import passwordIcon from "../assets/passwordIcon.png";

const LoginPage = () => {
    return (
        <div className=" w-screen h-screen bg-gradient-to-b from-[#E0F7F5] to-teal-500 flex justify-center items-center ">
            <div className="container w-[75vw] h-[80vh] bg-white  p-5 flex gap-10 rounded-3xl ">
                <div className="left w-[45%]  h-[80vh]  ">
                    <img src={LoginIllust} alt="" />
                </div>
                <div className="right w-[50%] h-full px-2 flex flex-col items-center  ">
                    <h1 className="Title text-4xl text-teal-500 font-extrabold text-center my-5 mb-10">

                        Welcome Back !
                    </h1>

                    <button className="w-[75%] px-6 py-3 bg-black text-white rounded-3xl my-5 flex justify-center  items-center gap-3"><img src={googleIcon} className="w-6" alt="" />Sign in with Google</button>

                    <div className="flex items-center gap-4 my-3 w-[65%]">
                        <hr className="flex-grow border-t border-gray-300" />
                        <p className="text-gray-500">or</p>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>
                    <form
                        action="/register"
                        method="post"
                        className="w-full flex items-center flex-col gap-8 mt-5"
                    >
                        {/* username */}
                        <InputSect src={ProfileIcon} type="text" for="Username" placeholder="Username or Email " />
                        {/* password */}
                        <InputSect src={passwordIcon} type="password" for="Password" placeholder=" Password " />
                        <button type="submit" className="submitButton px-10 py-2 text-xl text-white rounded-lg font-bold bg-teal-500  hover:bg-teal-600"  >Sign In </button>
                    </form>

                    <p className="mt-4">Don't have an Account ? <a href="/register" className="text-blue-600 font-semibold">Register</a> </p>

                </div>
            </div>
        </div>
    )
}

export default LoginPage;
