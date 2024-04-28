import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import MyItemCard from "../../components/MyItemCard";
import Spinner from "../../components/Spinner.jsx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [itemsf, setItemsf] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://server-side-eight-eosin.vercel.app/mylist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setItemsf(data);
        setLoading(false);
      });
  }, [user]);

  const handleLandscape = () => {
    const newSortWish = items.filter(
      (sor) => sor.subcategory_Name === "Landscape Painting"
    );
    setItemsf(newSortWish);
  };

  const handlePortrait = () => {
    const newSortWish = items.filter(
      (sor) => sor.subcategory_Name === "Portrait Drawing"
    );
    setItemsf(newSortWish);
  };

  const handleWatercolour = () => {
    const newSortWish = items.filter(
      (sor) => sor.subcategory_Name === "Watercolour Painting"
    );
    setItemsf(newSortWish);
  };

  const handleOil = () => {
    const newSortWish = items.filter(
      (sor) => sor.subcategory_Name === "Oil Painting"
    );
    setItemsf(newSortWish);
  };

  const handleCharcoal = () => {
    const newSortWish = items.filter(
      (sor) => sor.subcategory_Name === "Charcoal Sketching"
    );
    setItemsf(newSortWish);
  };

  const handleAll = () => {
    const newSortWish = items;
    setItemsf(newSortWish);
  };

  const handleCartoon = () => {
    const newSortWish = items.filter(
      (sor) => sor.subcategory_Name === "Cartoon Drawing"
    );
    setItemsf(newSortWish);
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-side-eight-eosin.vercel.app/delete/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Removed!",
                text: "Your Item has been removed.",
                icon: "success",
              });
              const remaining = items.filter((item) => item._id !== _id);
              setItems(remaining);
              setItemsf(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      {(loading && <Spinner />) || (
        <div className="mt-4 mb-8 lg:my-8 px-2 lg:px-0">
          <h2 className="text-center text-2xl lg:text-4xl font-bold text-[#f9a06f] animate__animated animate__headShake  animate__slow animate__infinite">
            My Art & Craft List
          </h2>
          <div className="flex justify-center lg:mt-8 mt-6 mx-2 lg:mx-0 ">
            <details className="dropdown">
              <summary className="btn font-semibold w-[178px] text-xl bg-[#f9a06f] hover:bg-[#fac0a1] text-[#1e1b4b] border-none hover:text-[#1e1b4b]">
                Sort By <RiArrowDropDownLine />
              </summary>
              <ul className="p-2  shadow menu dropdown-content z-10 rounded-box w-[178px] bg-[#1e1b4b]">
                <li>
                  <a
                    className="text-[#f9a06f] hover:bg-[#f9a06f] hover:text-[#1e1b4b]"
                    onClick={handleAll}
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#f9a06f] hover:bg-[#f9a06f] hover:text-[#1e1b4b]"
                    onClick={handleLandscape}
                  >
                    Landscape Painting
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#f9a06f] hover:bg-[#f9a06f] hover:text-[#1e1b4b]"
                    onClick={handlePortrait}
                  >
                    Portrait Drawing
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#f9a06f] hover:bg-[#f9a06f] hover:text-[#1e1b4b]"
                    onClick={handleWatercolour}
                  >
                    Watercolour Painting
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#f9a06f] hover:bg-[#f9a06f] hover:text-[#1e1b4b]"
                    onClick={handleOil}
                  >
                    Oil Painting
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#f9a06f] hover:bg-[#f9a06f] hover:text-[#1e1b4b]"
                    onClick={handleCharcoal}
                  >
                    Charcoal Sketching
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#f9a06f] hover:bg-[#f9a06f] hover:text-[#1e1b4b]"
                    onClick={handleCartoon}
                  >
                    Cartoon Drawing
                  </a>
                </li>
              </ul>
            </details>
          </div>
          {itemsf.length < 1 && (
            <div className="lg:mt-36 lg:mb-48 mt-4 mb-8">
              <h1 className="text-4xl text-[#05386B] text-center">
                No Art & Craft Found!
              </h1>
              <div className="flex justify-center mt-6">
                <Link to="/allitems">
                  <button className="font-bold mt-6 rounded-md px-4 py-2 bg-[#f9a06f] text-[#1e1b4b] relative overflow-hidden group z-0 hover:text-[#1e1b4b] duration-1000">
                    <span className="absolute bg-[#ffede2]  size-80 rounded-full group-hover:scale-150 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                    <span className="absolute bg-[#fac0a1] size-80 -left-2 -top-10 rounded-full group-hover:scale-150 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                    View All Art & Crafts
                  </button>
                </Link>
              </div>
            </div>
          )}
          {itemsf.map((item) => (
            <MyItemCard
              handleDelete={handleDelete}
              item={item}
              key={item._id}
            ></MyItemCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyList;
