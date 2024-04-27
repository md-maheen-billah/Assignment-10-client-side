import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import AllItemCard from "../../components/AllItemCard";

const Home = () => {
  const [items, setItems] = useState([]);
  const limit = 6; // Number of items to show
  const limitedItems = items.slice(0, limit);
  useEffect(() => {
    fetch("https://server-side-eight-eosin.vercel.app/allitems")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <div>
      <div className="mt-8">
        <Banner></Banner>
      </div>
      <Link to="/oilpaintings">
        <button className="btn bg-red-400">Oil Painting</button>
      </Link>
      <Link to="/landscapepaintings">
        <button className="btn bg-red-400">Landscape Painting</button>
      </Link>
      <div id="items-s">
        <div className="mt-4 mb-8 lg:my-16">
          <h2 className="text-center text-2xl font-bold text-[#f9a06f] animate__animated animate__headShake  animate__slow animate__infinite">
            Craft Items Section
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-4 lg:mt-10">
            {limitedItems.map((item) => (
              <AllItemCard item={item} key={item._id}></AllItemCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
