import { useEffect, useState } from "react";
import AllItemCard from "../../components/AllItemCard";
import Spinner from "../../components/Spinner.jsx";
import { Bounce } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://server-side-eight-eosin.vercel.app/allitems")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>All Art & Craft Items</title>
      </Helmet>
      {(loading && <Spinner />) || (
        <div className="mt-4 mb-8 lg:mt-8 lg:mb-16 px-2">
          <h2 className="text-center text-2xl lg:text-4xl font-bold text-[#f9a06f] ">
            <Bounce> All Art & Craft Items</Bounce>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-4 lg:mt-10">
            {items.map((item) => (
              <AllItemCard item={item} key={item._id}></AllItemCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllItems;
