import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./card";
import { getProducts } from "./helper/coreapicalls";

export default function Home() {
  const [product, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  const topCard = () => {
    return (
      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="display-4 font-weight-normal">The eCom Store</h1>
          <p class="lead font-weight-normal">Best cloting linup in the game!</p>
          <a class="btn btn-outline-secondary" href="#">
            Log In Now!
          </a>
        </div>
      </div>
    );
  };
  useEffect(() => {
    loadAllProducts();
  }, []);
  return (
    <Base>
    {topCard()}
      {product.map((product, index) => {
        return (
          <div key={index}>
            <Card product={product}></Card>
          </div>
        );
      })}
    </Base>
  );
}
