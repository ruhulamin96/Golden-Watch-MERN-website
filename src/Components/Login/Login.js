import React, { useRef } from "react";
import { Link, useHistory,useLocation } from "react-router-dom";
import "./Login.css";
import useAuth from "../hooks/useAuth";

function Login() {
  const emailRef = useRef();
  const passRef = useRef();
  const history= useHistory()
  const location= useLocation()
 
  const {loginUser, error} = useAuth();
  const handleLogin = (e) => {
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const loginData = {
      email,
      password,
    };
   loginUser(loginData.email,loginData.password, history,location)
    e.preventDefault();
  };
  return (
    <div className="container form-design text_color">
      <h3>Email: ruhul@amin.com</h3>
      <h3>Password: 123456789</h3>
       <h1 className="my-3">Login</h1>
      <form action="" className="form-child" onSubmit={handleLogin}>
        
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            ref={emailRef}
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            ref={passRef}
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div>
          {error && <p style={{color:"red"}} className="mt-3">{error} <br />Try Again </p>}
          <button type="submit" className="btn my-3 btn-about w-100">
            Submit
          </button>
     
          <p className="fs-3">
            Are you new user ?<Link to="/register">Register First</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
