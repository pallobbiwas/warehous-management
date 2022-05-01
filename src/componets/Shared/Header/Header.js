import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div>
      <Navbar className="nav-container container px-4" expand="lg">
        <Container>
          <p>
            <span className="fs-1">
              <span className="text-warning">C</span>anon
            </span>{" "}
            <span className="text-warning">C</span>amera
          </p>
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
              <Link className="iteam" to="/blogs">
                My Blogs
              </Link>
              {user ? (
                <Link className="iteam" to="/manageiteam">
                  Manage iteam
                </Link>
              ) : (
                ""
              )}
              {user ? (
                <Link className="iteam" to="/additeam">
                  Add iteam
                </Link>
              ) : (
                ""
              )}
              {user ? (
                <Link className="iteam" to="/myiteam">
                  My iteam
                </Link>
              ) : (
                ""
              )}
              {user ? <p className="userNmae">{user?.displayName}</p> : ""}
              {!user ? (
                <Link className="iteam ms-5 logbtn" to="/login">
                  {" "}
                  LogIn
                </Link>
              ) : (
                <button onClick={() => signOut(auth)} className="logbtn">
                  Sign out
                </button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
