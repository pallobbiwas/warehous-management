import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ p }) => {
  const navigate = useNavigate();
  const updateProduct = (id) => {
    console.log(id);
    navigate(`/invemtory/${id}`);
  };
  return (
    <div className="col-md-4 product-box product-boxs">
      <div
        className=""
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="mx-2 bg-white text-dark text-center p-3 rounded-3">
          <img className="img-fluid rounded-3" src={p.img} alt="" />
          <div className="mt-5">
            <h3>{p.name}</h3>
            <p>{p.discription}</p>
            <span>Quantity: {p.quantity} </span>
            <span>Seller: {p.seller} </span> <span>Price: {p.price}</span>$
            <br />
            <button
              onClick={() => updateProduct(p._id)}
              className="invetory-btn"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
