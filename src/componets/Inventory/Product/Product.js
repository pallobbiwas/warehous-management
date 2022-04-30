import React from "react";
import "./Product.css";

const Product = ({ p }) => {
  return (
    <div className="col-md-4 product-box product-boxs">
      <div className="">
        <div className="mx-2 bg-white text-dark text-center p-3 rounded-3">
          <img className="img-fluid rounded-3" src={p.img} alt="" />
          <div className="mt-5">
            <h3>{p.name}</h3>
            <p>{p.discription}</p>
            <span>Seller: {p.seller}</span> <span>Price: {p.price}</span>$
            <br />
            <button className="invetory-btn">Inventory</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
