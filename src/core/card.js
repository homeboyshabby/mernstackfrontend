import React from "react";
import ImageHelper from "./helper/ImageHelper";

const Card = ({ product, addToCart = true, removeFromCart = false }) => {


    const cardTitle = product ? product.name : "A Demo Photo"
    const cardDesc = product ? product.description : "Default Description"
    const cardPrice = product ? product.price : "None"
  const showAddToCart = (addToCart) => {
    return (
      addToCart && (
        <a class="btn text-white btn-outline-secondary" href="#">
          Add to cart
        </a>
      )
    );
  };

  const showAddToCartBlack = (addToCart) => {
    return (
      addToCart && (
        <a class="btn btn-outline-secondary" href="#">
          Add to cart
        </a>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <a class="btn text-white btn-outline-secondary" href="#">
          Remove from cart
        </a>
      )
    );
  };

  const showRemoveFromCartBlack = (removeFromCart) => {
    return (
      removeFromCart && (
        <a class="btn btn-outline-secondary" href="#">
          Remove from cart
        </a>
      )
    );
  };

  return (
    <div class="card text-center m-3">
      <div class="card-header text-uppercase">{cardTitle}</div>
      <div class="card-body">
        <p class="card-text middlefonts text-uppercase">
          {cardDesc}
        </p>
        <ImageHelper product={product}></ImageHelper>
        <p class="card-text middlefonts text-uppercase">
            &#x20b9; {cardPrice}
        </p>
      </div>
      <div class="card-footer text-muted">
        {showAddToCartBlack(addToCart)}
        {showRemoveFromCartBlack(removeFromCart)}
      </div>
    </div>
  );
};

export default Card;

{
  /* <div>
      <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div class="bg-dark mr-md-3 w-50 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5">Another headline</h2>
            <p class="lead">And an even wittier subheading.</p>
            {showAddToCart(addToCart)}
            {showRemoveFromCart(removeFromCart)}
          </div>
          <ImageHelper product={product}></ImageHelper>
        </div>
        <div class="bg-light w-50 mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 p-3">
            <h2 class="display-5">Another headline</h2>
            <p class="lead">And an even wittier subheading.</p>
            {showAddToCartBlack(addToCart)}
            {showRemoveFromCartBlack(removeFromCart)}
          </div>
          <ImageHelper product={product}></ImageHelper>
        </div>
      </div>
    </div> */
}
