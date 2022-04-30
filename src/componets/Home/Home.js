import React from "react";
import why from "../../images/why.jpg";
import Banner from "../Banner/Banner";
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
    </div>
  );
};

export default Home;
