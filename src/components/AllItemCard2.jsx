import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AllItemCard2 = ({ item }) => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <div data-aos="fade-up">
      <div className="flex mx-auto flex-col lg:hover:scale-105 rounded-lg transition shadow-xl ">
        <div className="relative">
          <img
            className="lg:h-64 md:h-64 rounded-t-lg w-full"
            src={item.image}
            alt=""
          />
          <div className="animate__animated badge  rounded-3xl animate__slower animate__swing animate__infinite font-medium bg-[#f9a06f] border-[#f9a06f] text-[#1e1b4b] absolute top-4 left-4 ">
            {item.stockStatus}
          </div>
        </div>
        <div className="bg-[#f9a06f] rounded-b-lg px-2 py-4 lg:p-4">
          <div className="px-4 space-y-4">
            <h2 className="text-[#1e1b4b] truncate max-w-[250px] text-xl font-semibold animate__animated animate__headShake  animate__slow animate__infinite">
              {item.item_name}
            </h2>
            <div className="flex flex-col gap-2 ">
              <p className="text-[#fff4ed] font-semibold h-14  text-sm ">
                {item.description}
              </p>
              <p className="text-[#1e1b4b] font-semibold truncate max-w-[250px] text-sm ">
                Subcategory:{" "}
                <span className="text-[#fff4ed] font-normal">
                  {item.subcategory_Name}
                </span>
              </p>
              <p className="text-[#1e1b4b] font-semibold truncate max-w-[250px] text-sm">
                Processing Time:{" "}
                <span className="text-[#fff4ed] font-normal">
                  {item.processing_time}
                </span>
              </p>
              <p className="text-[#1e1b4b] font-semibold truncate max-w-[250px] text-sm">
                Rating:{" "}
                <span className="text-[#fff4ed] font-normal">
                  {item.rating}
                </span>
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#1e1b4b]  2xl:text-4xl lg:text-xl text-3xl font-semibold">
                ${item.price}
              </p>
            </div>
            <div className="flex justify-center">
              <Link to={`/itemdetails/${item._id}`}>
                <button className="font-bold rounded-md px-4 py-2 bg-[#1e1b4b] text-[#f9a06f] relative overflow-hidden group z-0 hover:text-[#1e1b4b] duration-1000">
                  <span className="absolute bg-[#ffede2]  size-80 rounded-full group-hover:scale-150 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                  <span className="absolute bg-[#fac0a1] size-80 -left-2 -top-10 rounded-full group-hover:scale-150 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
AllItemCard2.propTypes = {
  item: PropTypes.object,
};

export default AllItemCard2;
