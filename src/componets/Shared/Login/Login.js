import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import googleicon from "../../../images/google.png";
import "./Login.css";

const Login = () => {
  let errorElemet;
  const emailRef = useRef("");
  const passRef = useRef("");
  // react firebase hook
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googelUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  // loging handeler
  const emailLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    signInWithEmailAndPassword(email, pass);
  };
  //google log in
  const googleLogin = () => {
    signInWithGoogle();
  };
  const forgetpass = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("Sent email");
  };

  if (emailUser || googelUser) {
    navigate("/home");
  }
  if (emailError || googleError) {
    errorElemet = <p>{emailError?.message}</p>;
  }
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="container"
    >
      <div className=" mx-auto login-box">
        <Form onSubmit={emailLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <div className="parend">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                ref={passRef}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
          </div>
          {errorElemet}
          <div className="text-center">
            <Button className="w-50 " variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
        <div className="row my-4">
          <div className="col-md-6">
            <p>
              forget password? <span className="span" onClick={forgetpass}>reset password</span>
            </p>
          </div>
          <div className="col-md-6">
            <p>
              new to here?{" "}
              <span className="span" onClick={() => navigate("/ragister")}>ragister</span>
            </p>
          </div>
        </div>
        <div className="horizantal-line my-4">
          <div className="left"></div>
          <p>or</p>
          <div className="right"></div>
        </div>
        <div className="social-login w-100 text-center">
          <button className="w-75" onClick={googleLogin}>
            <img
              style={{ width: "30px" }}
              className=" img-fluid"
              src={googleicon}
              alt=""
            />
            Login google
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
