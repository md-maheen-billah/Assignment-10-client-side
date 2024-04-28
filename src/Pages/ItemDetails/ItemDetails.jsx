import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner.jsx";

const ItemDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://server-side-eight-eosin.vercel.app/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);
  return (
    <div>
      {(loading && <Spinner />) || (
        <div className="flex mt-4 mb-8 px-2 lg:px-0 lg:w-9/12 mx-auto lg:my-12 flex-col lg:flex-row">
          <div className="lg:w-6/12 relative">
            <img
              className="rounded-lg lg:h-full w-full"
              src={product.image}
              alt=""
            />
            <div className="animate__animated text-sm  py-2 px-3 rounded-3xl animate__slower animate__swing animate__infinite font-medium bg-[#f9a06f] border-[#f9a06f] text-[#1e1b4b]  absolute top-4 left-4 ">
              {product.stockStatus}
            </div>
          </div>
          <div className=" lg:w-6/12 p-4 lg:p-5">
            <div className="px-4 space-y-4">
              <h2 className="text-[#f9a06f] font-semibold  text-xl lg:text-3xl animate__animated animate__headShake  animate__slow animate__infinite">
                {product.item_name}
              </h2>
              <p className="text-[#1e1b4b] dark:text-white xl:text-base text-sm">
                {product.description}
              </p>
              <p className="text-[#f9a06f] font-semibold xl:text-base text-sm ">
                Property Type:{" "}
                <span className="text-[#1e1b4b] dark:text-white font-normal">
                  {product.subcategory_Name}
                </span>
              </p>
              <p className="text-[#f9a06f] font-semibold xl:text-base text-sm">
                Location:{" "}
                <span className="text-[#1e1b4b] dark:text-white font-normal">
                  {product.customization}
                </span>
              </p>
              <p className="text-[#f9a06f] font-semibold xl:text-base text-sm">
                Area:{" "}
                <span className="text-[#1e1b4b] dark:text-white font-normal">
                  {product.rating} acres
                </span>
              </p>
              <p className="text-[#f9a06f] font-semibold xl:text-base text-sm">
                Area:{" "}
                <span className="text-[#1e1b4b] dark:text-white font-normal">
                  {product.processing_time} acres
                </span>
              </p>
              <div className="flex justify-between items-center">
                <p className="text-[#f9a06f]  text-3xl font-semibold">
                  ${product.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
