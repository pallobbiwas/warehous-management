import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "./UpdateProduct.css";

const UpdateProduct = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const [singleProduct, setSingelProduct] = useState({});
  useEffect(() => {
    fetch(`https://shrouded-headland-19320.herokuapp.com/data/${id}`)
      .then((res) => res.json())
      .then((data) => setSingelProduct(data));
  }, []);
  console.log(singleProduct);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch(
      `https://shrouded-headland-19320.herokuapp.com/data/${id}?oldQuantity=${singleProduct.quantity}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        Swal.fire("Successfull", "Thank you");
        window.location.reload();
      });
  };

  // decrise one

  const decriseOne = () => {
    fetch(
      `https://shrouded-headland-19320.herokuapp.com/datas/${id}?oldQuantity=${singleProduct.quantity}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        Swal.fire("Successfull", "Thank you");
        window.location.reload();
      });
  };

  return (
    <div className="mt-5 container text-center">
      <h2>Welcome to Infentory of : {singleProduct.name}</h2>
      <hr />
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <img
            className="img-fluid w-75 rounded-3"
            src={singleProduct.img}
            alt=""
          />
          <h5>Name: {singleProduct.name}</h5>
          <h5>Discription: {singleProduct.discription}</h5>
          <h5>Seller: {singleProduct.seller}</h5>
          <h5>Quantity: {singleProduct.quantity}</h5>
          <button onClick={decriseOne} className="deliver-btn">
            Deliverd
          </button>
        </div>
        <div className="col-md-6">
          <h3 className="mb-3">Add quantity</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="number" {...register("quantity", {required: true})} />
            <input type="submit" value="Add" />
          </form>
        </div>
        <div className="mt-5 ">
          <button onClick={()=>navigate('/home')} className="buy-btn py-2">All inventory</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
