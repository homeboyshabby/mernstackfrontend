import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("error in signup"));
  };

  const signUpForm = () => {
    return (
      <div
        className="container text-center aligncenter"
        data-gr-c-s-loaded="true"
      >
        <form className="form-signin">
          {/* <img src="E:\MERN Stack App\mernbootcamp\projfrontend\iconmonstr-sign-in-thin.svg" /> */}
          <h3 className="middlefonts">SIGN UP</h3>
          <label className="sr-only">Email address</label>
          <input
            onChange={handleChange("email")}
            type="email"
            className="form-control"
            placeholder="Email address"
            required=""
            autofocus=""
            value={email}
          />

          <label className="sr-only">Name</label>
          <input
            onChange={handleChange("name")}
            type="text"
            className="form-control"
            placeholder="Name"
            required=""
            autofocus=""
            value={name}
          />
          <label className="sr-only">Password</label>
          <input
            onChange={handleChange("password")}
            type="password"
            className="form-control"
            placeholder="Password"
            required=""
            value={password}
          />
          <div className="checkbox mb-3"></div>
          <button
            onClick={onSubmit}
            className="btn btn-lg btn-primary btn-block formbtn"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success "
        style={{ display: success ? "" : "none" }}
      >
        <h6 className="alert-heading">Well done!</h6>
        <hr></hr>
        Aww yeah, you have successfully created account, 
        <Link to="/signin">Login here</Link>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger "
        style={{ display: error ? "" : "none" }}
      >
        <h6 className="alert-danger">Oh No :(</h6>
        <hr></hr>
        {error}
      </div>
    );
  };
  return (
    <Base>
      {/* <h1 className="middlefonts">Sign up works</h1> */}
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      {/* <p>${JSON.stringify(values)}</p> */}
    </Base>
  );
};

export default Signup;
