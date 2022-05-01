import React from "react";
import "./MyProducts.css";

const MyProducts = ({ product: { name, img, seller, quantity } }) => {
  return (
    <div className="col-md-3">
      <div>
        <h4>Name: {name}</h4>
        <img className="w-75 img-fluid my-3" src={img} alt="" />
        <p>
          <span>Seller: {seller}</span>
          <span> Quantity: {quantity}</span>
          <button className="buy-btn">Delete</button>
        </p>
      </div>
    </div>
  );
};

export default MyProducts;
