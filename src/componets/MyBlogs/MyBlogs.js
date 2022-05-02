import React from "react";
import "./MyBlogs.css";

const MyBlogs = () => {
  return (
    <div className="container pt-5">
      <h2>My blogs here</h2>
      <hr />
      <div
        className="row"
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="col-md-6">
          <div className="box">
            <h4>Difference between javascript and nodejs</h4>
            <p>
              <span className="fs-5 fw-bold">Ans: </span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis pariatur animi magnam. Harum deleniti animi, cupiditate
              delectus similique dolore sint!
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box">
            <h4>When should you use nodejs and when should you use mongodb</h4>
            <p>
              <span className="fs-5 fw-bold">Ans: </span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis pariatur animi magnam. Harum deleniti animi, cupiditate
              delectus similique dolore sint!
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box">
            <h4>Differences between sql and nosql databases</h4>
            <p>
              <span className="fs-5 fw-bold">Ans: </span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis pariatur animi magnam. Harum deleniti animi, cupiditate
              delectus similique dolore sint!
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box">
            <h4>What is the purpose of jwt and how does it work</h4>
            <p>
              <span className="fs-5 fw-bold">Ans: </span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis pariatur animi magnam. Harum deleniti animi, cupiditate
              delectus similique dolore sint!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBlogs;
