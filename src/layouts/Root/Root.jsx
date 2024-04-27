import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="flex flex-col justify-between h-svh">
      <div className="h-16">
        <Navbar></Navbar>
      </div>
      <div className="max-w-[1280px] mx-auto">
        <Outlet></Outlet>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
