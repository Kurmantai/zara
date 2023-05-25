import React, { useEffect, useState } from "react";
import ProductCard from "../../mainComponents/cart/ProductCard";
import Navbar from "../../mainComponents/navbar/Navbar";
import "./ProductPage.scss";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
} from "@mui/material";

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
  }, [products]);

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
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="product__search"
          type="text"
          placeholder="SEARCH"
        />
        <Link to="/favorite">
          <div className="favorite">f</div>
        </Link>

        <div className="product__p">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Age"
            onChange={(e) => setCategory(e.target.value)}
            sx={{
              color: "darkgray",
              width: "80%",
              height: "33px",
              backgroundColor: "white",
              fontFamily: "Roboto",
              fontSize: "16px",
            }}
          >
            <MenuItem value={"all"}>CATEGORY</MenuItem>
            <MenuItem value={"shoues"}>SHOES</MenuItem>
            <MenuItem value={"bags"}>BAGS</MenuItem>
            <MenuItem value={"accessories"}>ACCESSORIES</MenuItem>
          </Select>
        </div>
        <Link to="/bascket">
          <img className="bascket" src="./images/bascket.svg" alt="bascket" />
        </Link>
      </div>
      <div className="product__list">
        <ProductCard />
      </div>
      <Box
        sx={{
          maxWidth: "max-content",
          margin: "30px auto",
          position: "absolute",
          top: "91%",
          left: "44%",
          backgroundColor: "white",
          borderRadius: "15px",
        }}
      >
        <Pagination
          count={pageTotalCount}
          page={page}
          onChange={(e, p) => setPage(p)}
        />
      </Box>
    </motion.div>
  );
};

export default ProductPage;
