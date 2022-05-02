import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./AddIteam.css";

const AddIteam = (e) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const confirmd = window.confirm("add successfull, go to home");
    if (confirmd) {
      fetch("https://shrouded-headland-19320.herokuapp.com/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        });
        Swal.fire("Successfull Added", "Thank you");
        navigate('/home')
    }
  };

  return (
    <div className="my-5 container-fluid">
      <h1 className="text-center"> Please add your item here</h1>
      <hr />
      <div>
        <div className="text-center my-5">
          <form className="w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="w-100"
              {...register("name", { required: true })}
              placeholder="produc name"
            />
            <br />
            <input
              className="my-3 w-100"
              {...register("email", { required: true })}
              placeholder="email"
            />
            <br />
            <input
              className="w-100"
              {...register("discription")}
              placeholder="discription"
            />
            <br />
            <input
              className="my-3 w-100"
              {...register("img")}
              placeholder="img url"
            />
            <br />
            <input
              className="w-100"
              {...register("quantity")}
              placeholder="quantity"
            />
            <br />
            <input
              className="my-3 w-100"
              {...register("seller")}
              placeholder="seller name"
            />
            <br />
            <input
              className="w-100"
              type="number"
              {...register("price")}
              placeholder="price"
            />
            <br />
            <input className="my-3 w-50" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddIteam;
