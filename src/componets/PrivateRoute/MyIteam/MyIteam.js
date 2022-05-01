import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useProduct from "../../../hooks/useProduct";
import MyProducts from "../MyProducts/MyProducts";
import "./MyIteam.css";

const MyIteam = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [products] = useProduct();
  const findProduct = products.filter((p) => p.email === email);

  console.log(findProduct);

  return (
    <div className="container-fluid my-5">
      <h1 className="text-center">my iteams</h1>
      <hr />
      <div className="container row">
        {
            findProduct.map(f => <MyProducts
            key={f._id}
            product = {f}
            ></MyProducts>)
        }
      </div>
    </div>
  );
};

export default MyIteam;
