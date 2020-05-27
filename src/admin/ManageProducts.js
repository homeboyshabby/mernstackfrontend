import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper";
import { getProducts, deleteProduct } from "./helper/adminapicall";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const { user, authToken } = isAutheticated();

  const preload = () => {
    getProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisProduct = (productId) => {
    deleteProduct(user._id, authToken, productId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  const goBack = () => (
    <div>
      <Link className="btn btn-sm btn-light formbtn" to="/admin/dashboard">
        Back to Menu
      </Link>
    </div>
  );
  const manageProductUI = () => {
    return (
      <div className="container">
        <h3 className="middlefonts">ALL PRODUCTS:</h3>
        <div className="row">
          <div className="col-12">
            <h2 className="text-center text-white my-3">Total 3 products</h2>

            {products.map((product, index) => {
              return (
                <div key={index} className="row text-center mb-2 ">
                  <div className="col-4">
                    <h4 className="middlefonts">{product.name}</h4>
                  </div>
                  <div className="col-4">
                    <Link
                      className="btn btn-md btn-info formbtn"
                      to={`/admin/product/update/${product._id}`}
                    >
                      <span className="">Update</span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <button
                      onClick={() => {
                          deleteThisProduct(product._id)
                      }}
                      className="btn btn-md btn-danger formbtn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  return (
    <Base>
      {manageProductUI()}
      <hr></hr>
      {goBack()}
    </Base>
  );
};

export default ManageProducts;
