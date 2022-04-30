import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar className="nav-container container px-4" expand="lg">
        <Container>
          <p><span className="fs-1"><span className="text-warning">C</span>anon</span> <span className="text-warning">C</span>amera</p>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 nav-iteam"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="iteam" to="/home">
                Home
              </Link>
              <Link className="iteam" to="/inventory">
              Inventory
              </Link>
              <Link className="iteam" to="/manageiteam">
              Manage iteam
              </Link>
              <Link className="iteam" to="/additeam">
                Add iteam
              </Link>
              <Link className="iteam" to="/myiteam">
              My iteam
              </Link>
              <Link className="iteam ms-5 logbtn" to="/login">
              LogIn
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
