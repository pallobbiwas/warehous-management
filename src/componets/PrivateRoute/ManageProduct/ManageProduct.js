import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useProduct from "../../../hooks/useProduct";
import "./ManageProduct.css";

const ManageProduct = ({ p: { _id, img, name } }) => {
  const [products, setProducts] = useProduct();
  const navigate = useNavigate();

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
        Swal.fire("Successfull delete", "Thank you");
        navigate('/home')
    }
  };

  return (
    <div className=" d-flex justify-content-around align-items-center row mx-auto mt-4 bg-info px-5 py-2 rounded-3">
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
