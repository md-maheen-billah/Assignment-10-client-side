import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/mylist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [user]);

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = items.filter((item) => item._id !== _id);
          setItems(remaining);
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
          <Link to={`/itemdetails/${item._id}`}>
            <button className="btn">Details</button>
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
