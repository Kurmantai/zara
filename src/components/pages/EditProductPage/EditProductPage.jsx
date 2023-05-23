import React from "react";
import "./EditProductPage.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EditProductPage = () => {
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
      <div className="edit__main_container">
        <div className="edit__navbar">
          <Link to="/">
            <img className="edit__logo" src="/images/za.svg" alt="img" />
          </Link>
          <h1>EDIT YOUR PRODUCT</h1>
        </div>
        <div className="edit__body">
          <div>
            <input type="text" placeholder="TITLE" />
            <input type="text" placeholder="PRICE" />
            <input type="text" placeholder="IMAGE URL" />
            <input type="text" placeholder="CATEGORY" />
          </div>

          <button>EDIT PRODUCT</button>
        </div>
      </div>
    </motion.div>
  );
};

export default EditProductPage;
