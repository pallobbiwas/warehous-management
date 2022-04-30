import React, { useEffect, useState } from "react";
import "./Inventory.css";
import Product from "./Product/Product";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="mt-5">
      <h2>Inventory</h2>
      <hr />
      <div className="mt-3 py-3">
        <div className="row g-2">
          {products.slice(0,6).map((pro) => (
            <Product key={pro._id} p={pro}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
