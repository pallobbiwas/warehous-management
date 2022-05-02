import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import banner4 from "../../images/banner4.jpg";
import banner5 from "../../images/banner5.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel className="rounded-3">
        <Carousel.Item>
          <img className="d-block w-100 h-50" src={banner1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner4} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner5} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
