import React, { useRef } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "../Login.css";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

function Register() {
  const emailRef = useRef();
  const passRef = useRef();
  const nameRef = useRef();
  const history = useHistory();
  const location = useLocation();
  const { createUser, error } = useAuth();
  const handleLogin = (e) => {
    const name = nameRef.current.value;
    nameRef.current.value = "";
    const email = emailRef.current.value;
    emailRef.current.value = "";
    const password = passRef.current.value;
    passRef.current.value = "";
    const loginData = {
      name,
      email,
      password,
    };
    createUser(loginData.email, loginData.password, history, location, name);
    axios
      .post(`https://enigmatic-fjord-26508.herokuapp.com/users`, loginData)
      .then((result) => console.log(result));
    e.preventDefault();
  };
  return (
    <div className="container form-design text_color">
      <h1 className="my-3">Create Account</h1>
      <form action="" className="form-child" onSubmit={handleLogin}>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            ref={nameRef}
            required
          />
          <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            ref={emailRef}
            required
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
            required
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div>
          <button type="submit" className="btn btn-about w-100 my-3">
            Submit
          </button>

          <p className="fs-3">
            Already Registered ?<Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
