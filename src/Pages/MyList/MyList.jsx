import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import MyItemCard from "../../components/MyItemCard";
import Spinner from "../../components/Spinner.jsx";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://server-side-eight-eosin.vercel.app/mylist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, [user]);

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
          {items.map((item) => (
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
