import { useEffect, useState } from "react";

const AllItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allitems")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <div>
      <h2>This is All Items</h2>
      {items.map((item) => (
        <div className="mt-4" key={item._id}>
          <p>{item.item_name}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default AllItems;
