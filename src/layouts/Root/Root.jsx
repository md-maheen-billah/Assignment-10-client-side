import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
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
