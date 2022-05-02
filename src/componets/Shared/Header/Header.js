import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import CustomLink from "../../CustomLink/CustomLink";
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
              <CustomLink className="iteam" to="/home">
                Home
              </CustomLink>
              <CustomLink className="iteam" to="/blogs">
                My Blogs
              </CustomLink>
              {user ? (
                <CustomLink className="iteam" to="/manageiteam">
                  Manage iteam
                </CustomLink>
              ) : (
                ""
              )}
              {user ? (
                <CustomLink className="iteam" to="/additeam">
                  Add iteam
                </CustomLink>
              ) : (
                ""
              )}
              {user ? (
                <CustomLink className="iteam" to="/myiteam">
                  My iteam
                </CustomLink>
              ) : (
                ""
              )}
              {user ? <p className="userNmae">{user?.displayName}</p> : ""}
              {!user ? (
                <CustomLink className="iteam ms-5 logbtn" to="/login">
                  {" "}
                  LogIn
                </CustomLink>
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
