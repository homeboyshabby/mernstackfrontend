import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { getCategories, deleteCategory } from "./helper/adminapicall";

const ManageCategories = () => {
  const [categorries, setCategories] = useState([]);
  const { user, authToken } = isAutheticated();

  const preload = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const goBack = () => (
    <div>
      <Link className="btn btn-sm btn-light formbtn" to="/admin/dashboard">
        Back to Menu
      </Link>
    </div>
  );

  const deleteThisCategory = (categoryId) => {
    deleteCategory(user._id, authToken, categoryId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  const manageCategoriesUI = () => {
    return (
      <div className="container">
        <h3 className="middlefonts">ALL CATEGORIES:</h3>
        <div className="row">
          <div className="col-12">
            <h2 className="text-center text-white my-3">Total 3 products</h2>
            {
                categorries.map((category, index) => {
                    return(
                        <div key={index} className="row text-center mb-2 ">
                  <div className="col-4">
                    <h4 className="middlefonts">{category.name}</h4>
                  </div>
                  <div className="col-4">
                    <Link
                      className="btn btn-md btn-info formbtn"
                      to={`/admin/product/update/${category._id}`}
                    >
                      <span className="">Update</span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <button
                      onClick={() => {
                        deleteThisCategory(category._id)
                      }}
                      className="btn btn-md btn-danger formbtn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                    )
                })
            }
          </div>
        </div>
      </div>
    );
  };
  return (
    <Base>
      {manageCategoriesUI()}
      <hr></hr>
      {goBack()}
    </Base>
  );
};

export default ManageCategories;
