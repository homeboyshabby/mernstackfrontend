import React from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const {
    user: { name, email, role },
  } = isAutheticated();

  const adminLeftSide = () => {
    return (
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <Link
                to="/admin/create/category"
                className="nav-link active"
              >
                CREATE CATEGORIES
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/admin/categories"
                className="nav-link active"
              >
                MANAGE CATEGORIES
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/admin/create/product" class="nav-link">
                CREATE PRODUCTS
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/admin/products" class="nav-link">
                MANAGE PRODUCTS
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/admin/orders" class="nav-link">
                MANAGE ORDERS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="alert alert-success ">
        <h6 className="alert-heading">Hi Admin!</h6>
        <hr></hr>
        Click the links for more actions.
      </div>
    );
  };

  return (
    <Base>
      <div className="row">
        <div className="col-3">{adminLeftSide()}</div>
        <div className="col-9">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashboard;

