import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useProduct from "../../../hooks/useProduct";
import "./MyProducts.css";

const MyProducts = ({ product: { _id, name, img, seller, quantity } }) => {
  const [products, setProducts] = useProduct();
  const navigate = useNavigate();
  const deleteItem = (id) => {
    console.log(id);
    const confirmd = window.confirm("are you sure");
    if (confirmd) {
      const url = `http://localhost:5000/data/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remainData = products.filter((c) => c._id !== id);
          setProducts(remainData);
          console.log(remainData);
        });
        Swal.fire("Successfull delete", "Thank you");
      navigate("/home");
    }
  };
  return (
    <div className="col-md-3">
      <div>
        <h4>Name: {name}</h4>
        <img className="w-75 img-fluid my-3" src={img} alt="" />
        <p>
          <span>Seller: {seller}</span>
          <span> Quantity: {quantity}</span>
          <button onClick={() => deleteItem(_id)} className="buy-btn">
            Delete
          </button>
        </p>
      </div>
    </div>
  );
};

export default MyProducts;
