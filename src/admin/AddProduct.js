import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getCategories, createProduct } from "./helper/adminapicall";
import { isAutheticated } from "../auth/helper";

const AddProduct = () => {

  const { user, authToken } = isAutheticated();
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    photo: "",
    categories: [],
    category: "",
    loading: false,
    error: "",
    createdProduct: "",
    getRedirect: false,
    formData: "",
  });

  const {
    name,
    description,
    price,
    stock,
    categories,
    category,
    loading,
    error,
    createdProduct,
    getRedirect,
    formData,
  } = values;

  const preLoad = () => {
    getCategories().then((data) => {
      // console.log(data)
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, categories: data, formData: new FormData() });
        //console.log(categories);
      }
    });
  };

  useEffect(() => {
    preLoad();
  }, [])

  const goBack = () => (
    <div>
      <Link className="btn btn-sm btn-light formbtn" to="/admin/dashboard">
        Back to Menu
      </Link>
    </div>
  );

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value
    formData.set(name, value);
    setValues({...values, [name]: value})
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({...values, error: "", loading: true})
    createProduct(user._id, authToken, formData).then(data => {
      if(data.error){
        setValues({...values, error: data.error})
      } else {
        setValues({
          ...values,
          name: "",
          description: "",
          price:"",
          photo:"",
          stock:"",
          loading:false,
          createdProduct: data.name
        })
      }
    })
  };

  const successMessage = () => {
    //   console.log(success)
      if(createdProduct){
        return (
          <div className="alert alert-success ">
            <h6 className="alert-heading">Yup!</h6>
            <hr></hr>
            {createdProduct} created successfully!
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
              failed to create product.
            </div>
          );
    }
  };


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
            {categories &&
            categories.map((cate, index)=>(
            <option key={index} value={cate._id}>{cate.name}</option>
            )) 
            }
          </select>
          <label className="sr-only">Quantity</label>
          <input
            onChange={handleChange("stock")}
            type="number"
            className="form-control middleinputs"
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
      {successMessage()}
      {errorMessage()}
      {createProductFrom()}
      {goBack()}
    </Base>
  );
};

export default AddProduct;
