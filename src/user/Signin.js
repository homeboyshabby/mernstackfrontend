import React, { useState } from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, isAutheticated } from "../auth/helper";

const Signin = () => {
  const [values, setValues] = useState({
    email: "d@gmail.com",
    password: "123456",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, error, password, loading, didRedirect } = values;
  const { user } = isAutheticated();

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <p>redirect to admin</p>;
      } else {
        return <p>redirect to user</p>;
      }
    }
    if (isAutheticated()) {
      return <Redirect to="/" />;
    }
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const loadingMessage = () => {
    return loading && <div className="alert alert-info">Loading...</div>;
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-dange"
        style={{ display: error ? "" : "none" }}
      >
        <h6 className="alert-danger">Oh No :(</h6>
        <hr></hr>
        {error}
      </div>
    );
  };

  const signInForm = () => {
    return (
      <div
        className="container text-center aligncenter"
        data-gr-c-s-loaded="true"
      >
        <form className="form-signin">
          <h3 className="middlefonts">SIGN IN</h3>
          <label className="sr-only">Email address</label>
          <input
            value={email}
            onChange={handleChange("email")}
            type="email"
            className="form-control"
            placeholder="Email address"
            required=""
            autofocus=""
          />
          <label className="sr-only">Password</label>
          <input
            value={password}
            onChange={handleChange("password")}
            type="password"
            className="form-control"
            placeholder="Password"
            required=""
          />
          <div className="checkbox mb-3"></div>
          <button
            onClick={onSubmit}
            className="btn btn-lg btn-primary btn-block formbtn"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    );
  };
  return (
    <Base>
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
      <p>${JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signin;
