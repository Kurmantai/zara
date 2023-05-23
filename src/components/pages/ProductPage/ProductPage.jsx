import React from "react";
import ProductCard from "../../mainComponents/cart/ProductCard";
import Navbar from "../../mainComponents/navbar/Navbar";
import "./ProductPage.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductPage = () => {
  return (
    <motion.div
      className="product__page"
      initial={{
        opacity: 0,
        transform: "scale(0.5)",
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        transform: "scale(1)",
        filter: "blur(0px)",
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      exit={{
        opacity: 0,
        transform: "scale(0.5)",
        filter: "blur(10px)",
        transition: { duration: 0.2, ease: "easeIn" },
      }}
    >
      <div className="product__overlay"></div>
      <Navbar />

      <img
        className="product__bg"
        src="https://theimpression.com/wp-content/uploads/2020/04/Zara-mens-spring-2020-ad-campaign-the-impression-012-scaled.jpg"
        alt="img"
      />
      <div className="product__folder">
        <input className="product__search" type="text" placeholder="SEARCH" />

        <div className="product__p">
          <p>SHOES</p>
          <p>BAGS</p>
          <p>ACCESSORIES</p>
        </div>
        <Link to="/bascket">
          <img className="bascket" src="./images/bascket.svg" alt="bascket" />
        </Link>
      </div>
      <div className="product__list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </motion.div>
  );
};

export default ProductPage;
