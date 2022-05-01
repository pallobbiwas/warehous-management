import React from "react";
import useProduct from "../../../hooks/useProduct";
import "./ManageProduct.css";

const ManageProduct = ({ p: { _id, img, name } }) => {
  const [products, setProducts] = useProduct();

  //delte btn
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
    }
  };

  return (
    <div className="d-flex justify-content-around align-items-center w-50 row mx-auto mt-4">
      <div className="col-md-3">
        <img className="img img-fluid" src={img} alt="" />
      </div>
      <div className="col-md-7">
        <h3>{name}</h3>
      </div>
      <div className="col-md-2">
        <button onClick={() => deleteItem(_id)} className="delte-btn">
          X
        </button>
      </div>
    </div>
  );
};

export default ManageProduct;
