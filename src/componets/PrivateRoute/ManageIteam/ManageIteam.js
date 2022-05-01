import React from "react";
import useProduct from "../../../hooks/useProduct";
import ManageProduct from "../ManageProduct/ManageProduct";
import "./ManageIteam.css";

const ManageIteam = () => {
    const [products, setProducts] = useProduct();
  console.log(products);
  return (
    <div className="container-fluid my-5">
      <h1 className="text-center">Welcome to manageiteam</h1>
      <hr />
      <div className="container">
          {
              products.map(product => <ManageProduct
              key={product._id}
              p={product}
              ></ManageProduct>)
          }
      </div>
    </div>
  );
};

export default ManageIteam;
