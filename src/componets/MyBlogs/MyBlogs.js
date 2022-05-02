import React from "react";
import { Table } from "react-bootstrap";
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
            <h4 className = "mb-4">Q1. Difference between javascript and nodejs</h4>
            <p>
              <span className="fs-5 fw-bold">Ans: </span>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Javascript</th>
                    <th>Nodejs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      NodeJS is a cross-platform and opensource Javascript
                      runtime environment that allows the javascript to be run
                      on the server-side
                    </td>
                    <td>
                      Javascript is a Scripting language. It is mostly
                      abbreviated as JS. It can be said that Javascript is the
                      updated version of the ECMA script.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box">
            <h4 className = "mb-4">
              Q2. When should you use nodejs and when should you use mongodb
            </h4>
            <p>
              <span className="fs-5 fw-bold">Ans: </span>
              Nodejs: nodejs is a cross-platform and opensource Javascript. It
              use for connect database with claint site.
              <br />
              Mongodb: mongodb is a cloud database. It use for stroge data. and
              create api
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box">
            <h4 className = "mb-4">Q3. Differences between sql and nosql databases</h4>
            <p>
              <span className="fs-5 fw-bold">Ans: </span>
              <thead>
                <tr>
                  <th>Sql</th>
                  <th>Nosql</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                  SQL databases are vertically scalable. It is table based database system. It is better for multi-row transactions
                  </td>
                  <td>
                  NoSQL databases are horizontally scalable. It is document base database system
                  </td>
                </tr>
              </tbody>
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box">
            <h4 className = "mb-4">Q4. What is the purpose of jwt and how does it work</h4>
            <p>
              <span className="fs-5 fw-bold">Ans: </span>
              Jwt mean javascript wev token. It is a secret key. It create encrypted api.Where unauthorized person can not access api in any way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBlogs;
