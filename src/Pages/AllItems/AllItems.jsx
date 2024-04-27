import { useEffect, useState } from "react";
import AllItemCard from "../../components/AllItemCard";

const AllItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://server-side-eight-eosin.vercel.app/allitems")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <div className="mt-4 mb-8 lg:my-8">
      <h2 className="text-center text-2xl font-bold text-[#f9a06f] animate__animated animate__headShake  animate__slow animate__infinite">
        All Art & Craft Items
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-4 lg:mt-10">
        {items.map((item) => (
          <AllItemCard item={item} key={item._id}></AllItemCard>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
