import React from "react";
import Menu from "./menu";
const Base = ({
  title = "My title",
  desc = "my Description",
  className = "",
  children,
}) => (
  <div className="container">
    <Menu/>
    <div className="container">
      <div className={className}>{children}</div>
    </div>
    <div className="container">
        {/* <hr></hr> */}
      <footer className="footer mt-auto py-3 bg-black divborder">
        <div className="text-white text-center py-3">
          <h6>IF YOU HAVE ANY QUESTIONS?</h6>
          <button
            className="btn btn-outline-success btn-lg btnborder"
            type="submit"
          >
            Contact Us
          </button>
        </div>
      </footer>
    </div>
  </div>
);

export default Base;
