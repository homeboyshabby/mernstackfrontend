import React from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";

export default function Routes() {
  console.log("API IS", API);
  return (
    <Base>
      <h1 className="middlefonts">Hello frontend</h1>
    </Base>
  );
}


{/* <div className="row">
<div className="col-md-4">
  <div className="column">
    <div className="card cardborder">
      <h3>Card 2</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
</div>
<div className="col-md-4">
  <div className="column">
    <div className="card cardborder">
      <h3>Card 2</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
</div>
<div className="col-md-4">
  <div className="column">
    <div className="card cardborder">
      <h3>Card 2</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
</div>
</div> */}