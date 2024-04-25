import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <h2>This is Root</h2>
      <div className="max-w-[1280px] mx-auto px-3 md:px-8 lg:px-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
