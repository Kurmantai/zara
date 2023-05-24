import React, { useEffect, useState } from "react";
import ProductCard from "../../mainComponents/cart/ProductCard";
import Navbar from "../../mainComponents/navbar/Navbar";
import "./ProductPage.scss";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

import { useProduct } from "../../contexts/ProductContextProvider";
import { LIMIT } from "../../contexts/helpers";

const ProductPage = ({ item }) => {
  const { products, getProducts, pageTotalCount } = useProduct();

  const [page, setPage] = useState(1);

  //!search
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  const [category, setCategory] = useState(
    searchParams.get("category") || "all"
  );

  useEffect(() => {
    if (category === "all") {
      setSearchParams({
        q: search,
        _page: 1,
        _limit: LIMIT,
      });
    } else {
      setSearchParams({
        q: search,
        category: category,
        _page: 1,
        _limit: LIMIT,
      });
    }
  }, [search, category]);

  useEffect(() => {
    if (category === "all") {
      setSearchParams({
        q: search,
        _page: page,
        _limit: LIMIT,
      });
    } else {
      setSearchParams({
        q: search,
        category: category,
        _page: page,
        _limit: LIMIT,
      });
    }
  }, [page]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (pageTotalCount < page) {
      setPage(pageTotalCount);
    }
  }, [pageTotalCount]);
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
      </div>
    </motion.div>
  );
};

export default ProductPage;
