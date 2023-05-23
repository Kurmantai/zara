import React from "react";
import "./ProductCart.scss";
import { Link } from "react-router-dom";

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
          <Link to="/edit/:id">
            <p className="cart__btn">EDIT</p>
          </Link>
          <p className="cart__btn">DELETE</p>
        </div>
      </div>
    </div>

    // <div className="cart">
    //   <div className="product__cart">
    //     <div className="cart__liked"></div>
    //     <div className="cart__bascket">
    //       <p>+</p>
    //     </div>
    //     <div className="cart__footer">
    //       <p className="cart__title">SHOES</p>
    //       <p className="btn">Lorem ipsum dolor sit amet consectetur.
    //       </p>
    //       <p className="cart__price">400.00$</p>

    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductCard;
