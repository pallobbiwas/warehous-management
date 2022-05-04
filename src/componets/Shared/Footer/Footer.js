import { faCheck, faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import facebook from "../../../images/fac.jpg";
import github from "../../../images/github.png";
import insta from "../../../images/insta.jpg";
import linkdn from "../../../images/linkdin.jpg";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-5 footrt-bg-collor pb-4">
      <div className="row container-fluid pt-3">
        <div className="col-md-4 px-4 py-3">
          <h5>About us</h5>
          <hr />
          <p>We are the best Camea provider in bangladesh sence 2018</p>
          <p>
            <FontAwesomeIcon
              className="pe-2"
              icon={faHandPointRight}
            ></FontAwesomeIcon>
            24/6 open/ clossed on fri day
          </p>
          <p>
            <FontAwesomeIcon
              className="pe-2"
              icon={faHandPointRight}
            ></FontAwesomeIcon>
            Best price and service
          </p>
          <p>
            <FontAwesomeIcon
              className="pe-2"
              icon={faHandPointRight}
            ></FontAwesomeIcon>
            Every distric homdelivery possible
          </p>
          <div></div>
        </div>
        <div className="col-md-4 px-4 py-3">
          <h5>Our social network</h5>
          <hr />
          <div className="d-flex align-items-center">
            <div className="img-container">
              <img className="footer-img img-fluid " src={facebook} alt="" />
              <img className="footer-img img-fluid my-2" src={insta} alt="" />
              <img className="footer-img img-fluid mb-2" src={linkdn} alt="" />
              <img className="footer-img img-fluid" src={github} alt="" />
            </div>
            <div className="img-container">
              <a className="ps-2" href="f">
                {" "}
                https//Facebook.com
              </a>
              <a className="my-3 ps-2" href="i">
                {" "}
                https//instagram.com
              </a>
              <a className="mb-3 ps-2" href="l">
                {" "}
                https//linkdin.com
              </a>
              <a className="ps-2" href="g">
                {" "}
                https//gidhub.com
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 px-4 py-3">
          <h5>Our goals</h5>
          <hr />
          <p>
            <FontAwesomeIcon className=" pe-2" icon={faCheck}></FontAwesomeIcon>
            Provide best products
          </p>
          <p>
            <FontAwesomeIcon className=" pe-2" icon={faCheck}></FontAwesomeIcon>
            Service guranty
          </p>
          <p>
            <FontAwesomeIcon className=" pe-2" icon={faCheck}></FontAwesomeIcon>
            High quality mantaince
          </p>
          <p>
            <FontAwesomeIcon className=" pe-2" icon={faCheck}></FontAwesomeIcon>
            Trusted and well behalf
          </p>
        </div>
      </div>
      <hr />
      <div className="text-center">
        <small className="py-4">Everything is &copy; copy right by {year}</small>
      </div>
    </div>
  );
};

export default Footer;
