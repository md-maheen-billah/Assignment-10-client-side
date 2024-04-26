import { Link, NavLink } from "react-router-dom";
import { FaPaintBrush } from "react-icons/fa";

const Navbar = () => {
  const navLinks2 = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " border-2 border-[#05386B] text-[#5CDB95] px-4 bg-[#05386B] hover:text-[#5CDB95] focus:text-[#5CDB95] py-2font-bold"
              : "text-[#05386B] font-semibold  px-4 py-2  rounded-xl hover:bg-[#379683] hover:text-[#EDF5E1] hover:duration-200"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/update"
          className={({ isActive }) =>
            isActive
              ? " border-2 border-[#05386B] text-[#5CDB95] px-4 bg-[#05386B] hover:bg-[#5CDB95] focus:text-[#5CDB95] focus:bg-[#05386B] py-2 rounded-xl font-bold"
              : "text-[#05386B] font-semibold   px-4 py-2  rounded-xl hover:bg-[#379683] hover:text-[#EDF5E1] hover:duration-200"
          }
        >
          Update Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            isActive
              ? "  border-2 border-[#05386B] text-[#5CDB95] px-4 bg-[#05386B] hover:bg-[#5CDB95] focus:text-[#5CDB95] focus:bg-[#05386B] py-2 rounded-xl font-bold"
              : "text-[#05386B] font-semibold   px-4 py-2  rounded-xl hover:bg-[#379683] hover:text-[#EDF5E1] hover:duration-200"
          }
        >
          Wishlist
        </NavLink>
      </li>
    </>
  );
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " rounded-none focus:outline-none active:bg-[#fff4ed] border-b-2 border-b-[#f9a06f] hover:bg-[#fff4ed] focus:hover:bg-[#fff4ed] focus:hover:text-[#f9a06f] focus:hover:border-b-4-[#f9a06f]  hover:text-[#f9a06f]  focus:text-[#f9a06f] focus:bg-[#fff4ed] text-[#f9a06f] font-bold pb-1 px-1"
              : "rounded-none border-b-2 border-b-[#fff4ed]  hover:bg-[#fff4ed] focus:hover:bg-[#fff4ed] focus:hover:text-[#f9a06f] focus:hover:border-[#fff4ed]  hover:text-[#f9a06f]  focus:text-[#f9a06f] focus:bg-[#fff4ed] text-[#1e1b4b] font-bold hover:duration-200 pb-1 px-1"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allitems"
          className={({ isActive }) =>
            isActive
              ? " rounded-none border-b-2 border-b-[#f9a06f] hover:bg-[#fff4ed] focus:hover:bg-[#fff4ed] focus:hover:text-[#f9a06f] focus:hover:border-b-4-[#f9a06f]  hover:text-[#f9a06f]  focus:text-[#f9a06f] focus:bg-[#fff4ed] text-[#f9a06f] font-bold pb-1 px-1"
              : "rounded-none border-b-2 border-b-[#fff4ed]  hover:bg-[#fff4ed] focus:hover:bg-[#fff4ed] focus:hover:text-[#f9a06f] focus:hover:border-[#fff4ed]  hover:text-[#f9a06f]  focus:text-[#f9a06f] focus:bg-[#fff4ed] text-[#1e1b4b] font-bold hover:duration-200 pb-1 px-1"
          }
        >
          All Art & Craft Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/additems"
          className={({ isActive }) =>
            isActive
              ? " rounded-none border-b-2 border-b-[#f9a06f] hover:bg-[#fff4ed] focus:hover:bg-[#fff4ed] focus:hover:text-[#f9a06f] focus:hover:border-b-4-[#f9a06f]  hover:text-[#f9a06f]  focus:text-[#f9a06f] focus:bg-[#fff4ed] text-[#f9a06f] font-bold pb-1 px-1"
              : "rounded-none border-b-2 border-b-[#fff4ed]  hover:bg-[#fff4ed] focus:hover:bg-[#fff4ed] focus:hover:text-[#f9a06f] focus:hover:border-[#fff4ed]  hover:text-[#f9a06f]  focus:text-[#f9a06f] focus:bg-[#fff4ed] text-[#1e1b4b] font-bold hover:duration-200 pb-1 px-1"
          }
        >
          Add Craft Item
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/mylist"
          className={({ isActive }) =>
            isActive
              ? " rounded-none border-b-2 border-b-[#f9a06f] hover:bg-[#fff4ed] focus:hover:bg-[#fff4ed] focus:hover:text-[#f9a06f] focus:hover:border-b-4-[#f9a06f]  hover:text-[#f9a06f]  focus:text-[#f9a06f] focus:bg-[#fff4ed] text-[#f9a06f] font-bold pb-1 px-1"
              : "rounded-none border-b-2 border-b-[#fff4ed]  hover:bg-[#fff4ed] focus:hover:bg-[#fff4ed] focus:hover:text-[#f9a06f] focus:hover:border-[#fff4ed]  hover:text-[#f9a06f]  focus:text-[#f9a06f] focus:bg-[#fff4ed] text-[#1e1b4b] font-bold hover:duration-200 pb-1 px-1"
          }
        >
          My Art & Craft List
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#05386B"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-[#379683] rounded-box w-52"
          >
            {navLinks2}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-2xl font-extrabold text-[#1e1b4b] p-0 "
        >
          Canvas <span className="text-[#f9a06f]">Isle</span>{" "}
          <FaPaintBrush className="text-[#f9a06f]" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex gap-6">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {/* {user && user.photoURL ? (
          <>
            <div className="dropdown dropdown-hover mr-2">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full border-[#05386B] border-2">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[20] p-2 shadow menu menu-sm dropdown-content bg-[#379683] font-semibold  text-[#05386B]  w-40 right-2 lg:right-[-55px] rounded-box "
              >
                <li>
                  <a className="justify-between">{user.displayName}</a>
                </li>
                <li className="lg:hidden">
                  <div className="flex justify-center">
                    <a className="btn font-semibold bg-[#05386B] hover:bg-[#379683] text-[#5CDB95] border-none hover:text-[#EDF5E1]">
                      Sign Out
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <a className="btn hidden lg:flex font-semibold bg-[#05386B] hover:bg-[#379683] text-[#5CDB95] border-none hover:text-[#EDF5E1]">
              Sign Out
            </a>
          </>
        ) : ( */}
        <Link to="/login">
          <button className="font-bold rounded-md px-4 py-2 bg-[#f9a06f] text-[#1e1b4b] relative overflow-hidden group z-10 hover:text-[#1e1b4b] duration-1000">
            <span className="absolute bg-[#ffede2]  size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
            <span className="absolute bg-[#fac0a1] size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
            Login
          </button>
        </Link>

        {/* )} */}
      </div>
    </div>
  );
};

export default Navbar;
