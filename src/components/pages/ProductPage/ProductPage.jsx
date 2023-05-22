import React from "react";
import ProductCard from "../../mainComponents/cart/ProductCard";
import Navbar from "../../mainComponents/navbar/Navbar";
import "./ProductPage.scss";

const ProductPage = () => {
  return (
    <div className="product__page">
      <div className="product__overlay"></div>
      <Navbar />
      <div className="product__folder">
        <input type="text" placeholder="SEARCH" />
        <img className="bascket" src="./images/bascket.svg" alt="bascket" />
        <p>SHOES</p>
        <p>BAGS</p>
        <p>ACCESSORIES</p>
      </div>

      <img
        className="product__bg"
        src="https://theimpression.com/wp-content/uploads/2020/04/Zara-mens-spring-2020-ad-campaign-the-impression-012-scaled.jpg"
        alt="img"
      />
      <div className="product__list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductPage;
