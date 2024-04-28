import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Bounce } from "react-awesome-reveal";
import Aos from "aos";
import "aos/dist/aos.css";

const Login = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  const { signInUser, googleSignIn, gitSignIn } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Logged In");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
        console.error(error);
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Logged In");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  const handleGit = () => {
    gitSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Logged In");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  return (
    <div
      data-aos="fade-up"
      className="flex justify-center items-center px-2 mt-8 mb-8 lg:my-16 animate__animated animate__fadeInDownBig"
    >
      <div>
        <div className="bg-[#f9a06f] shadow-xl py-5 px-8 rounded-xl">
          <Bounce>
            {" "}
            <h2 className="text-center text-2xl font-bold text-[#ffede2] animate__animated animate__headShake  animate__slow animate__infinite">
              Login Your Account
            </h2>
          </Bounce>
          <form onSubmit={handleLogin} className="mt-4 space-y-4">
            <div className="">
              <label className="text-[#1e1b4b] font-semibold" htmlFor="email">
                Email Address:
              </label>
              <input
                className="mt-2  p-2 rounded-md w-full bg-[#ffede2]"
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="">
              <label
                className="text-[#1e1b4b] font-semibold"
                htmlFor="password"
              >
                Password:
              </label>
              <div className="relative">
                <input
                  className="mt-2 mb-2 p-2 rounded-md w-full bg-[#ffede2]"
                  type={showPass ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  placeholder="Enter Your Password"
                />
                <span
                  className="absolute top-5 right-2 hover:cursor-pointer"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? (
                    <IoEyeOff className="text-[#f9a06f] transition hover:scale-110" />
                  ) : (
                    <IoEye className="text-[#05386B] transition hover:scale-110" />
                  )}
                </span>
              </div>
            </div>
            <div className="mt-5 animate__animated animate__pulse animate__infinite">
              {/* <input
                className="font-bold rounded-md px-4 py-2 bg-[#1e1b4b] text-white relative overflow-hidden group z-10 hover:text-[#1e1b4b] duration-1000"
                type="submit"
                name="submit"
                value="Login"
              /> */}
              <button className="font-bold w-full rounded-md px-4 py-2 bg-[#1e1b4b] text-[#f9a06f] relative overflow-hidden group z-0 hover:text-[#1e1b4b] duration-1000">
                <span className="absolute bg-[#ffede2]  size-80 rounded-full group-hover:scale-150 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                <span className="absolute bg-[#fac0a1] size-80 -left-2 -top-10 rounded-full group-hover:scale-150 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center my-4">
            <div className="h-px bg-[#EDF5E1] w-full"></div>
            <div className="mx-4 text-[#EDF5E1]">or</div>
            <div className="h-px bg-[#EDF5E1] w-full"></div>
          </div>
          <div>
            <button
              onClick={handleGoogle}
              className="font-bold flex items-center justify-center gap-2 w-full rounded-md px-4 py-2 bg-[#1e1b4b] text-[#f9a06f] relative overflow-hidden group z-0 hover:text-[#1e1b4b] duration-1000"
            >
              <span className="absolute bg-[#ffede2]  size-80 rounded-full group-hover:scale-150 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
              <span className="absolute bg-[#fac0a1] size-80 -left-2 -top-10 rounded-full group-hover:scale-150 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
              <FaGoogle /> Login using Google
            </button>
          </div>
          <div className="mt-5">
            <button
              onClick={handleGit}
              className="font-bold flex items-center justify-center gap-2 w-full rounded-md px-4 py-2 bg-[#1e1b4b] text-[#f9a06f] relative overflow-hidden group z-0 hover:text-[#1e1b4b] duration-1000"
            >
              <span className="absolute bg-[#ffede2]  size-80 rounded-full group-hover:scale-150 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
              <span className="absolute bg-[#fac0a1] size-80 -left-2 -top-10 rounded-full group-hover:scale-150 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
              <FaGithub /> Login using Github
            </button>
          </div>
        </div>
        <div className="text-center">
          <p className="mt-6 font-semibold dark:text-white text-[#1e1b4b]">
            Don&#39;t Have An Account? {""}
            <Link to="/register" className="text-[#f9a06f] underline">
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
