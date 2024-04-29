import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { VscTriangleLeft } from "react-icons/vsc";
import { Bounce } from "react-awesome-reveal";
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const UpdateItems = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://server-side-eight-eosin.vercel.app/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const item_name = form.item_name.value;
    const subcategory_Name = form.subcategory_Name.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stockStatus = form.stockStatus.value;

    const updateItem = {
      image,
      item_name,
      subcategory_Name,
      description,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
    };
    console.log(updateItem);
    fetch(`https://server-side-eight-eosin.vercel.app/updateitems/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount > 0) {
          toast.success("Item Added Successfully");
        }
      });
  };
  return (
    <div
      data-aos="fade-up"
      className="mt-4 mb-8 lg:w-[800px] mx-auto lg:my-6 px-2 lg:px-0"
    >
      <Helmet>
        <title>Update Item</title>
      </Helmet>
      <div className="flex items-center justify-between">
        <Link to="/mylist">
          <button className="font-bold animate__animated animate__pulse animate__infinite mt-4 rounded-md px-4 py-2 bg-[#f9a06f] text-[#1e1b4b] relative overflow-hidden group z-0 hover:text-[#1e1b4b] duration-1000">
            <span className="absolute bg-[#ffede2]  size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
            <span className="absolute bg-[#fac0a1] size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
            <VscTriangleLeft />
          </button>
        </Link>
        <h2 className="text-center mt-2 text-2xl lg:text-4xl font-bold text-[#f9a06f]">
          <Bounce> Update Item</Bounce>
        </h2>
        <div className="w-10"></div>
      </div>
      <form onSubmit={handleUpdate} className="mt-4 space-y-3">
        <div className="flex flex-col lg:flex-row lg:gap-8 gap-3">
          <div className="lg:w-1/2">
            <label
              className="text-[#1e1b4b] dark:text-[#f9a06f] font-semibold"
              htmlFor="item_name"
            >
              Item Name:
            </label>
            <input
              className="mt-2 dark:text-black p-2 rounded-md w-full bg-[#ffede2]"
              type="text"
              id="item_name"
              name="item_name"
              required
              defaultValue={product.item_name}
              placeholder="Enter Item Name"
            />
          </div>
          <div className="lg:w-1/2">
            <label
              className="text-[#1e1b4b] dark:text-[#f9a06f] font-semibold"
              htmlFor="image"
            >
              Image URL:
            </label>
            <input
              className="mt-2 dark:text-black p-2 rounded-md w-full bg-[#ffede2]"
              type="text"
              id="image"
              name="image"
              required
              defaultValue={product.image}
              placeholder="Enter Image URL"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-8 gap-3">
          <div className="lg:w-1/2">
            <label
              className="text-[#1e1b4b] dark:text-[#f9a06f] font-semibold"
              htmlFor="subcategory_Name"
            >
              Subcategory Name:
            </label>
            <select
              className="mt-2 dark:text-black p-2 rounded-md w-full bg-[#ffede2]"
              id="subcategory_Name"
              name="subcategory_Name"
              placeholder="Select Subcategory"
              required
            >
              <option value={product.subcategory_Name}>
                {product.subcategory_Name} (Selected)
              </option>
              <option value="Landscape Painting">Landscape Painting</option>
              <option value="Portrait Drawing">Portrait Drawing</option>
              <option value="Watercolour Painting">
                Watercolour Painting:
              </option>
              <option value="Oil Painting">Oil Painting</option>
              <option value="Charcoal Sketching">Charcoal Sketching</option>
              <option value="Cartoon Drawing">Cartoon Drawing</option>
            </select>
          </div>
          <div className="lg:w-1/2">
            <label
              className="text-[#1e1b4b] dark:text-[#f9a06f] font-semibold"
              htmlFor="stockStatus"
            >
              Stock Status:
            </label>
            <select
              className="mt-2 dark:text-black p-2 rounded-md w-full bg-[#ffede2]"
              id="stockStatus"
              name="stockStatus"
              placeholder="Select Stock"
              required
            >
              <option value={product.stockStatus}>
                {product.stockStatus} (Selected)
              </option>
              <option value="In Stock">In Stock</option>
              <option value="Made to Order">Made to Order</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-8 gap-3">
          <div className="lg:w-1/2">
            <label
              className="text-[#1e1b4b] dark:text-[#f9a06f] font-semibold"
              htmlFor="price"
            >
              Price:
            </label>
            <input
              className="mt-2 dark:text-black p-2 rounded-md w-full bg-[#ffede2]"
              type="text"
              id="price"
              name="price"
              defaultValue={product.price}
              required
              placeholder="Enter Price"
            />
          </div>
          <div className="lg:w-1/2">
            <label
              className="text-[#1e1b4b] dark:text-[#f9a06f] font-semibold"
              htmlFor="rating"
            >
              Rating:
            </label>
            <input
              className="mt-2 dark:text-black p-2 rounded-md w-full bg-[#ffede2]"
              maxLength={5}
              max={5}
              min={0}
              step="0.01"
              type="number"
              defaultValue={product.rating}
              placeholder="Enter Rating"
              id="rating"
              name="rating"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-8 gap-3">
          <div className="lg:w-1/2">
            <label
              className="text-[#1e1b4b] dark:text-[#f9a06f] font-semibold"
              htmlFor="customization"
            >
              Customization:
            </label>
            <select
              className="mt-2 dark:text-black p-2 rounded-md w-full bg-[#ffede2]"
              id="customization"
              name="customization"
              placeholder="Select Customization"
              required
            >
              <option value={product.customization}>
                {product.customization} (Selected)
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="lg:w-1/2">
            <label
              className="text-[#1e1b4b] dark:text-[#f9a06f] font-semibold"
              htmlFor="processing_time"
            >
              Processing Time:
            </label>
            <input
              className="mt-2 dark:text-black p-2 rounded-md w-full bg-[#ffede2]"
              type="text"
              id="processing_time"
              name="processing_time"
              defaultValue={product.processing_time}
              required
              placeholder="(example: 1-2 days)"
            />
          </div>
        </div>
        <div className="">
          <label
            className="text-[#1e1b4b] dark:text-[#f9a06f] font-semibold"
            htmlFor="description"
          >
            Short Description:
          </label>
          <textarea
            className="mt-2 dark:text-black p-2 rounded-md w-full bg-[#ffede2]"
            type="text"
            id="description"
            name="description"
            defaultValue={product.description}
            required
            placeholder="Write a Short Description"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="font-bold animate__animated animate__pulse animate__infinite mt-4 rounded-md px-4 py-2 bg-[#f9a06f] text-[#1e1b4b] relative overflow-hidden group z-0 hover:text-[#1e1b4b] duration-1000"
          >
            <span className="absolute bg-[#ffede2]  size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
            <span className="absolute bg-[#fac0a1] size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateItems;
