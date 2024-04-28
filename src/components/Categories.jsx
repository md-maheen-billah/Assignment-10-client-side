import { useEffect, useState } from "react";
import CatCard from "./CatCard";

const Categories = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://server-side-eight-eosin.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 lg:flex-row px-2 mt-6 lg:mt-10 ">
        {items.map((item) => (
          <CatCard item={item} key={item._id}></CatCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
