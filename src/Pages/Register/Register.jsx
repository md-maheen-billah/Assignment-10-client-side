import { Link, useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, updateUser, setUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters of more");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Your password should have at least 1 Upper Case character");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Your password should have at least 1 Lower Case character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUser(name, image)
          .then(() => {
            setUser({ displayName: name, photoURL: image, email: email });
            navigate("/");
          })
          .catch();
        toast.success("Registered Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center mt-4 mb-8 lg:my-16 animate__animated animate__fadeInDownBig">
      <div>
        <div className="bg-[#f9a06f] shadow-xl py-5 px-8 rounded-xl">
          <h2 className="text-center text-2xl font-bold text-[#ffede2] animate__animated animate__headShake  animate__slow animate__infinite">
            Register An Account
          </h2>
          <form onSubmit={handleRegister} className="mt-4 space-y-4">
            <div className="">
              <label className="text-[#1e1b4b] font-semibold" htmlFor="name">
                Name:
              </label>
              <input
                className="mt-2  p-2 rounded-md w-full bg-[#ffede2]"
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter Your Name"
              />
            </div>
            <div className="">
              <label className="text-[#1e1b4b] font-semibold" htmlFor="image">
                Image URL:
              </label>
              <input
                className="mt-2  p-2 rounded-md w-full bg-[#ffede2]"
                type="text"
                id="image"
                name="image"
                required
                placeholder="Enter An Image URL"
              />
            </div>
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
                placeholder="Enter An Email Address"
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
                  placeholder="Enter A New Password"
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
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="text-center">
          <p className="mt-6 font-semibold dark:text-white text-[#1e1b4b]">
            Already Have An Account? {""}
            <Link to="/login" className="text-[#f9a06f] underline">
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
