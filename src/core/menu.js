import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "black" };
  }
};
const Menu = ({ history }) => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link
        style={currentTab(history, "/")}
        className="navbar-brand normalcase nav-link"
        to="/"
      >
        eCom
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {isAutheticated() && isAutheticated().user.role === 0 && (
            <Link
              style={currentTab(history, "/cart")}
              className="nav-item nav-link"
              to="/cart"
            >
              CART
            </Link>
          )}
          {isAutheticated() && isAutheticated().user.role === 0 && (
            <Link
              style={currentTab(history, "/user/dashboard")}
              className="nav-item nav-link"
              to="/user/dashboard"
            >
              DASHBOARD
            </Link>
          )}
          {isAutheticated() && isAutheticated().user.role === 1 && (
            <Link
              style={currentTab(history, "/admin/dashboard")}
              className="nav-item nav-link"
              to="/admin/dashboard"
            >
              ADMIN DASHBOARD
            </Link>
          )}
          {!isAutheticated() && (
            <Fragment>
              <Link
                style={currentTab(history, "/signup")}
                className="nav-item nav-link"
                to="/signup"
              >
                SIGN UP
              </Link>
              <Link
                style={currentTab(history, "/signin")}
                className="nav-item nav-link"
                to="/signin"
              >
                SIGN IN
              </Link>
            </Fragment>
          )}
          {isAutheticated() && (
            <Link
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
              style={currentTab(history, "/signout")}
              className="nav-item nav-link text-danger"
              to="/"
            >
              SIGN OUT
            </Link>
          )}
        </div>
      </div>
      {/* <button className="btn btn-outline-primary btnborder" type="submit">Log In</button> */}
    </nav>
    <hr></hr>
  </div>
);

export default withRouter(Menu);
