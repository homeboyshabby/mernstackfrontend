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
  </div>
);

export default Base;


{/* <div style={{width:"50%"}} class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div class="my-3 p-3">
          <h2 class="display-5">Another headline</h2>
          <p class="lead">And an even wittier subheading.</p>
        </div>
        <div class="bg-dark box-shadow mx-auto" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
      </div> */}