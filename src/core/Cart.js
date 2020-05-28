import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./card";
import { getProducts } from "./helper/coreapicalls";
import { loadCart, removeItemFromCart } from "./helper/cartHelper";
import ImageHelper from "./helper/ImageHelper";
import { Link } from "react-router-dom";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);
  const loadAllProducts = () => {
    console.log(products);
    return (
      <div>
        {products.map((product, index) => {
          return (
            <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col" class="border-0 bg-light">
                        <div class="p-2 px-3 text-center text-uppercase">
                          Product
                        </div>
                      </th>
                      <th scope="col" class="border-0 bg-light">
                        <div class="py-2 text-uppercase">Price</div>
                      </th>
                      <th scope="col" class="border-0 bg-light">
                        <div class="py-2 text-uppercase">Remove</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="border-0">
                        <div class="p-2">
                          <ImageHelper
                            className="img-fluid rounded shadow-sm"
                            style={{ width: "5" }}
                            product={product}
                          ></ImageHelper>
                          <div class="ml-3 d-inline-block align-middle">
                            <h5 class="mb-0">
                              {" "}
                              <a
                                href="#"
                                class="text-dark text-center middlefonts d-inline-block align-middle"
                              >
                                {product.name}
                              </a>
                            </h5>
                            <span class="text-muted text-center middlefonts font-weight-normal font-italic d-block">
                              {product.description}
                            </span>
                          </div>
                        </div>
                      </th>
                      <td class="border-0 align-middle">
                        <strong>{product.price}</strong>
                      </td>
                      <td class="align-middle">
                        <a
                          onClick={() => {
                            removeItemFromCart(product._id);
                            refreshPage();
                          }}
                          to="/cart"
                          class="text-dark"
                        >
                          <i class="fa fa-trash"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const loadCheckout = () => {
    return (
      <div>
        <h1>checkout product</h1>
      </div>
    );
  };

  return <Base>{loadAllProducts()}</Base>;
}



{/* <div class="row py-5 p-4 bg-white rounded shadow-sm">
        <div class="col-lg-6">
          <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
          <div class="p-4">
            <p class="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
            <div class="input-group mb-4 border rounded-pill p-2">
              <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" class="form-control border-0">
              <div class="input-group-append border-0">
                <button id="button-addon3" type="button" class="btn btn-dark px-4 rounded-pill"><i class="fa fa-gift mr-2"></i>Apply coupon</button>
              </div>
            </div>
          </div>
          <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
          <div class="p-4">
            <p class="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
            <textarea name="" cols="30" rows="2" class="form-control"></textarea>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
          <div class="p-4">
            <p class="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
            <ul class="list-unstyled mb-4">
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Order Subtotal </strong><strong>$390.00</strong></li>
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Tax</strong><strong>$0.00</strong></li>
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                <h5 class="font-weight-bold">$400.00</h5>
              </li>
            </ul><a href="#" class="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
          </div>
        </div>
      </div> */}