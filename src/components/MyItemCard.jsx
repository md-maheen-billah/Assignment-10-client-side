import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";

const MyItemCard = ({ item, handleDelete }) => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <div data-aos="fade-up">
      <div className="flex my-6 lg:w-11/12 mx-auto rounded-lg lg:h-56 lg:my-12 flex-col lg:flex-row shadow-xl lg:hover:scale-105  transition ">
        <div className="lg:w-4/12 relative">
          <img
            className="lg:rounded-l-lg lg:h-full w-full"
            src={item.image}
            alt=""
          />
          <div className="animate__animated text-sm  py-2 px-3  rounded-3xl animate__slower animate__swing animate__infinite font-medium bg-[#f9a06f] border-[#f9a06f] text-[#1e1b4b] absolute top-4 left-4 ">
            {item.stockStatus}
          </div>
        </div>
        <div className="bg-[#f9a06f] lg:w-8/12 px-2 py-4 lg:p-5 lg:rounded-r-lg">
          <div className="px-4 space-y-4">
            <h2 className="text-[#1e1b4b] text-xl font-semibold lg:text-3xl ">
              {item.item_name}
            </h2>
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8">
              <p className="text-[#1e1b4b] font-semibold xl:text-base lg:text-sm  ">
                Subcategory:{" "}
                <span className="text-[#fff4ed] font-normal">
                  {item.subcategory_Name}
                </span>
              </p>
              <p className="text-[#1e1b4b] font-semibold xl:text-base lg:text-sm ">
                Customizable:{" "}
                <span className="text-[#fff4ed] font-normal">
                  {item.customization}
                </span>
              </p>
              <div className="text-[#1e1b4b] flex items-center gap-1 font-semibold xl:text-base lg:text-sm ">
                Rating:{" "}
                <div className="flex items-center gap-1">
                  <FaStar className="text-[#fff4ed] " />
                  <span className="text-[#fff4ed] font-normal">
                    {item.rating}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#1e1b4b]  text-4xl md:text-3xl font-semibold">
                ${item.price}
              </p>
            </div>
            <div className="flex gap-4">
              <Link to={`/updateitems/${item._id}`}>
                <button className="font-bold animate__animated animate__pulse animate__infinite rounded-md px-4 py-2 bg-[#1e1b4b] text-[#f9a06f] relative overflow-hidden group z-0 hover:text-[#1e1b4b] duration-1000">
                  <span className="absolute bg-[#ffede2]  size-80 rounded-full group-hover:scale-150 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                  <span className="absolute bg-[#fac0a1] size-80 -left-2 -top-10 rounded-full group-hover:scale-150 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                  Update
                </button>
              </Link>
              <button
                onClick={() => handleDelete(item._id)}
                className="font-bold animate__animated animate__pulse animate__infinite rounded-md px-4 py-2 bg-[#1e1b4b] text-[#f9a06f] relative overflow-hidden group z-0 hover:text-[#1e1b4b] duration-1000"
              >
                <span className="absolute bg-[#ffede2]  size-80 rounded-full group-hover:scale-150 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                <span className="absolute bg-[#fac0a1] size-80 -left-2 -top-10 rounded-full group-hover:scale-150 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MyItemCard.propTypes = {
  item: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default MyItemCard;
