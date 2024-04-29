import { useEffect, useState } from "react";
import AllItemCard2 from "../../components/AllItemCard2";
import Spinner from "../../components/Spinner.jsx";
import { Bounce } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const LandscapePainting = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const category = "Landscape Painting";
  useEffect(() => {
    fetch(
      `https://server-side-eight-eosin.vercel.app/itemscategory/${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Landscape Paintings</title>
      </Helmet>
      {(loading && <Spinner />) || (
        <div className="mt-4 mb-8 lg:mt-8 lg:mb-16 px-2">
          <h2 className="text-center text-2xl lg:text-4xl font-bold text-[#f9a06f] ">
            <Bounce>Landscape Paintings</Bounce>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-4 lg:mt-10">
            {items.map((item) => (
              <AllItemCard2 item={item} key={item._id}></AllItemCard2>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LandscapePainting;
