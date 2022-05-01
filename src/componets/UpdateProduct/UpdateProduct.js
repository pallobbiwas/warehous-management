import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import "./UpdateProduct.css";

const UpdateProduct = () => {
  const { id } = useParams();
  console.log(id);

  const [singleProduct, setSingelProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/data/${id}`)
      .then((res) => res.json())
      .then((data) => setSingelProduct(data));
  }, []);
  console.log(singleProduct);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
          <button className="deliver-btn">Deliverd</button>
        </div>
        <div className="col-md-6">
          <h3 className="mb-3">Add quantity</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="number" {...register("quantity")} />
            <input type="submit"value='Add'/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
