import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CatCard = ({ item }) => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  const { image } = item;
  const bgIm = image;
  return (
    <div data-aos="fade-up" className="">
      <Link to={`/${item.url}`}>
        <div
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url(${bgIm})`,
          }}
          className="rounded-md hover:scale-105 transition font-semibold bg-cover bg-no-repeat text-sm md:text-2xl text-center flex items-center justify-center h-28 lg:h-40"
        >
          <div>
            <p className="text-gray-200">{item.subcategory_Name}</p>
            <p className="text-gray-300 hidden md:flex justify-center mt-2 text-xs font-light ">
              {item.details}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

CatCard.propTypes = {
  item: PropTypes.object,
};

export default CatCard;
