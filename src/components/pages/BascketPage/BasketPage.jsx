import React from "react";
import "./BascketPage.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BasketPage = () => {
  return (
    <motion.div
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
      <div className="bascket__hav_container">
        <div>
          <Link to="/">
            <img src="/images/za.svg" alt="za" />
          </Link>
        </div>

        <div>
          <h1>BASCKET</h1>
        </div>
      </div>
      <div className="bascket__body">
        <Link to="/product">
          <button className="getBack">GETBACK</button>
        </Link>
        <div className="bascket__list"></div>
        <button className="getOrder">ORDER</button>
      </div>
      <h3></h3>
    </motion.div>
  );
};

export default BasketPage;
