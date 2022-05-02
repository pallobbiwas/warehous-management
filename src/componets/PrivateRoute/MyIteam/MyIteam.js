import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import MyProducts from "../MyProducts/MyProducts";
import "./MyIteam.css";

const MyIteam = () => {
  const [user] = useAuthState(auth);

  const [findProduct, setFindProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      const email = user?.email;
      console.log(email);
      const url = `http://localhost:5000/personaldata?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setFindProduct(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          alert("access forbidden, go to log in");
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getProduct();
  }, [user]);

  return (
    <div
      className="container-fluid my-5"
      data-aos="zoom-in-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <h1 className="text-center">my iteams</h1>
      <hr />
      <div className="container row">
        {findProduct.map((f) => (
          <MyProducts key={f._id} product={f}></MyProducts>
        ))}
      </div>
    </div>
  );
};

export default MyIteam;
