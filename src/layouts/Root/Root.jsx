import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <h2>This is Root</h2>
      <Navbar></Navbar>
      <div className="max-w-[1280px] mx-auto px-3 md:px-8 lg:px-10">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
