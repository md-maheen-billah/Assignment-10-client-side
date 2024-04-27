import { useEffect, useState } from "react";

const OilPainting = () => {
  const [items, setItems] = useState([]);
  const category = "Oil Painting";
  useEffect(() => {
    fetch(
      `https://server-side-eight-eosin.vercel.app/itemscategory/${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <div>
      <h2>This is Oil Painting</h2>
      {items.map((item) => (
        <div className="mt-4" key={item._id}>
          <p>{item.item_name}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default OilPainting;
