import React, { useState } from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper";
import { Link } from "react-router-dom";
import { createCategory } from "./helper/adminapicall";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, authToken } = isAutheticated();

  const goBack = () => (
    <div>
      <Link className="btn btn-sm btn-light formbtn" to="/admin/dashboard">
        Back to Menu
      </Link>
    </div>
  );

  const handleChange = (event) => {
    setError("");
    setName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);
    //backend request fired
    //   console.log(user._id)
    //   console.log(authToken)
    //   console.log({name})
    createCategory(user._id, authToken, { name }).then((data) => {
      if (data.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
        setName("");
      }
    });
  };

  const successMessage = () => {
    //   console.log(success)
    if (success) {
      return (
        <div className="alert alert-success ">
          <h6 className="alert-heading">Yup!</h6>
          <hr></hr>
          Category created successfully!
        </div>
      );
    }
  };

  const errorMessage = () => {
    if(error){
        return (
            <div className="alert alert-danger">
              <h6 className="alert-danger">Nope!</h6>
              <hr></hr>
              failed to create category.
            </div>
          );
    }
  };

  const myCategoryForm = () => {
    return (
      <div
        className="container text-center aligncenter"
        data-gr-c-s-loaded="true"
      >
        <form className="form-signin">
          <h3 className="middlefonts">CREATE CATEGORY</h3>
          <label className="sr-only">Category Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            value={name}
            placeholder="Category Name"
            required
            autofocus
          />
          <div className="checkbox mb-3"></div>
          <button
            className="btn btn-lg btn-success btn-block formbtn"
            type="submit"
            onClick={onSubmit}
          >
            Done!
          </button>
        </form>
      </div>
    );
  };

  return (
    <Base>
      {successMessage()}
      {errorMessage()}
      {myCategoryForm()}
      {goBack()}
    </Base>
  );
};

export default AddCategory;
