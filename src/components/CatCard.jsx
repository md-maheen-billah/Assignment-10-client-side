import { Link } from "react-router-dom";

const CatCard = ({ item }) => {
  const { image } = item;
  const bgIm = image;
  return (
    <div className="">
      <Link to={`/${item.url}`}>
        <div
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url(${bgIm})`,
          }}
          className="rounded-md hover:scale-105 transition font-semibold bg-cover bg-no-repeat text-sm md:text-2xl text-center flex items-center justify-center h-28 lg:h-40"
        >
          <div>
            <p className="text-gray-200">{item.subcategory_Name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CatCard;
