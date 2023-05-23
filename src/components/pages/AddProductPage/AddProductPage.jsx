import React from "react";
import "./AddProductPage.scss";
import { motion } from "framer-motion";
import Navbar from "../../mainComponents/navbar/Navbar";
import { Link } from "react-router-dom";

const AddProductPage = () => {
  return (
    <motion.div
      className="AddPro"
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
      <img className="add__bg" src="./images/bg6.jpg" alt="bg" />
      <div className="container__add_overlay"></div>

      <div className="AddBody">
        <Link to="/">
          <img src="./images/zara.svg" alt="img" />
        </Link>
        <Link to="/">
          <button className="get__back">GET BACK</button>
        </Link>

        <h3>ADD PRODUCT</h3>
        <input placeholder="Title"></input>

        <input placeholder="Price"></input>
        <input placeholder="Image"></input>
        <input placeholder="Category"></input>
        <button className="add__btn">aDD PRODUCT</button>
        <div></div>
      </div>
    </motion.div>
  );
};

export default AddProductPage;
