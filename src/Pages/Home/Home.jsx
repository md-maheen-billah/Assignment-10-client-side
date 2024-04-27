import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <h2>This is Home</h2>
      <Link to="/oilpaintings">
        <button className="btn bg-red-400">Oil Painting</button>
      </Link>
      <Link to="/landscapepaintings">
        <button className="btn bg-red-400">Landscape Painting</button>
      </Link>
      {limitedItems.map((item) => (
        <div className="mt-4" key={item._id}>
          <p>{item.item_name}</p>
          <p>{item.email}</p>
          <Link to={`/itemdetails/${item._id}`}>
            <button className="btn">Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
