import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://server-side-eight-eosin.vercel.app/mylist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
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
      {items.map((item) => (
        <div className="mt-4" key={item._id}>
          <p>{item.item_name}</p>
          <p>{item.email}</p>
          <Link to={`/updateitems/${item._id}`}>
            <button className="btn">Update</button>
          </Link>

          <button onClick={() => handleDelete(item._id)} className="btn">
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyList;
