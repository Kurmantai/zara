import React from "react";
import "./PayPage.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PayPage = () => {
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
      <div className="pay__overlay"></div>

      <div className="pay__hav_container">
        <div>
          <Link to="/">
            <img src="/images/za.svg" alt="za" />
          </Link>
        </div>
        <div>
          <h1>VISA CLASSIC</h1>
        </div>
      </div>
      <Link to="/product">
        <button className="getBack">GETBACK</button>
      </Link>
      <div className="pay__list">
        <div className="pay__cart">
          <input type="text" placeholder="CARD NUMBER*" />
          <input type="text" placeholder="CVC/CVV*" />
          <input type="text" placeholder="NAME*" />
          <input type="text" placeholder="EMAIL ADDRES*" />
        </div>
      </div>
      <button className="getPay">Pay</button>
    </motion.div>
  );
};

export default PayPage;
