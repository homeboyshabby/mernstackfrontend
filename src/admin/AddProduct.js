import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
  });

  const { name, description, price, stock } = values;
  const goBack = () => (
    <div>
      <Link className="btn btn-sm btn-light formbtn" to="/admin/dashboard">
        Back to Menu
      </Link>
    </div>
  );

  const handleChange = (name) => (event) => {};

  const onSubmit = (event) => {};

  const createProductFrom = () => {
    return (
      <div
        className="container text-center aligncenter"
        data-gr-c-s-loaded="true"
      >
        <form className="form-signin">
          <h3 className="middlefonts">CREATE PRODUCT</h3>
          <hr></hr>
          <label className="sr-only">Choose File</label>
          <div class="form-group">
            <input
              onChange={handleChange("photo")}
              type="file"
              class="form-control-file"
            />
          </div>
          <label className="sr-only">Name</label>
          <input
            onChange={handleChange("name")}
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
          />
          <label className="sr-only">Description</label>
          <textarea
            onChange={handleChange("description")}
            type="number"
            className="form-control"
            placeholder="Description"
            value={description}
            rows="3"
          ></textarea>
          <label className="sr-only">Price</label>
          <input
            onChange={handleChange("price")}
            type="number"
            className="form-control"
            placeholder="Price"
            value={price}
          />
          <label className="sr-only">Category</label>
          <select onChange={handleChange("category")} class="form-control">
            <option>select</option>
            <option value="a">a</option>
            <option value="b">b</option>
          </select>
          <label className="sr-only">Quantity</label>
          <input
            onChange={handleChange("quantity")}
            type="number"
            className="form-control"
            placeholder="Quantity"
            value={stock}
          />
          <div className="checkbox mb-3"></div>
          <button
            onClick={onSubmit}
            className="btn btn-lg btn-success btn-block formbtn"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    );
  };
  return (
    <Base>
      {createProductFrom()}
      {goBack()}
    </Base>
  );
};

export default AddProduct;
