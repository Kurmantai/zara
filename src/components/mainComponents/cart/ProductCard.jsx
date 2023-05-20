import React from "react";
import "./ProductCart.scss";

const ProductCard = () => {
  return (
    <div className="cart">
      <div className="product__cart">
        <div className="cart__liked"></div>
        <div className="cart__bascket">
          <p>+</p>
        </div>
        <div className="cart__footer">
          <p className="cart__title">SHOES</p>
          <p className="cart__price">400.00$</p>
          <p className="cart__details">DETAILS</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
