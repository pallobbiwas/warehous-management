import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import MyProducts from "../MyProducts/MyProducts";
import "./MyIteam.css";

const MyIteam = () => {
  const [user] = useAuthState(auth);
 
  const [findProduct, setFindProduct] = useState([]);

  useEffect(()=>{
    const getProduct = async () => {
      const email = user?.email;
      console.log(email);
      const url = `http://localhost:5000/personaldata?email=${email}`
      const {data} = await axios.get(url);
      setFindProduct(data)

    }
    getProduct()
  },[user])


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
