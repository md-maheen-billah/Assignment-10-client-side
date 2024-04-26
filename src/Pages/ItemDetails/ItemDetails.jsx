import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, [id]);
  return (
    <div>
      <h2>{product.item_name}</h2>
    </div>
  );
};

export default ItemDetails;
