import React from "react";
import lance1 from "../../images/lance/lance1.png";
import lance2 from "../../images/lance/lance2.png";
import lance3 from "../../images/lance/lance3.png";
import lance4 from "../../images/lance/lance4.png";
import why from "../../images/why.jpg";
import Banner from "../Banner/Banner";
import Inventory from "../Inventory/Inventory";
import "./Home.css";

const Home = () => {
  return (
    <div className="my-5 container-fluid">
      <Banner />
      <div className="my-5">
        <h2>Why you using canon camera..?</h2>
        <hr />
        <div className="row py-4 d-flex align-items-center">
          <div className="col-md-7">
            <p>
              Use a canon DSLR camera to capture decisive moments with fast
              frame rates. The optical viewfinder means you can take advantage
              of the camera’s high-speed autofocus to capture dramatic movements
              and action. A DSLR camera is great for never missing a second,
              whether you’re shooting wildlife, sports or everyday scenes like
              your child or pet on the move.
            </p>
            <br />
            <p>
              Composing your images through an optical viewfinder is a
              traditional method which helps you really connect with your
              subject. It’s also great when bright sunlight makes it difficult
              to effectively use the LCD screen. An optical viewfinder allows
              you to see your subject as it moves in real time and capture it
              with virtually no lag time between pressing the shutter button and
              getting the shot.
            </p>
          </div>
          <div className="col-md-5">
            <img className="w-100 img-fluid rounded-3" src={why} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h3>Our best product</h3>
        <hr />
        <div className="row g-4 my-4">
          <div className="col-md-3">
            <div className="lance-box">
              <img className="img-width img-fluid" src={lance1} alt="" />
              <h3 className="mt-2">Price: 23000$</h3>
              <button className="buy-btn">Buy now</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="lance-box">
              <img className="img-width img-fluid" src={lance2} alt="" />
              <h3 className="mt-2">Price: 12000$</h3>
              <button className="buy-btn">Buy now</button>
            </div>{" "}
          </div>
          <div className="col-md-3">
            <div className="lance-box">
              <img className="img-width img-fluid" src={lance3} alt="" />
              <h3 className="mt-2">Price: 5400$</h3>
              <button className="buy-btn">Buy now</button>
            </div>{" "}
          </div>
          <div className="col-md-3">
            <div className="lance-box">
              <img className="img-width img-fluid" src={lance4} alt="" />
              <h3 className="mt-2">Price: 5000$</h3>
              <button className="buy-btn">Buy now</button>
            </div>{" "}
          </div>
        </div>
        <hr />
      </div>
      <Inventory />
    </div>
  );
};

export default Home;
