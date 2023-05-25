import React from "react";
import Navbar from "../../mainComponents/navbar/Navbar";
import "./HomePage.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
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
      <div className="container__page">
        <div className="container__page_overlay"></div>
        <Navbar />
        <img src="/images/bg6.jpg" alt="img" />

        <div className="page__body">
          <h2 className="home__page_text">
            A minimal collection of limited edition tailoring captured amongst
            the elements. The silhouettes are drawn from a mix of tailored
            workwear styles, soft textured shirting, stretch cotton jersey
            high-tech nylon and leather all fabricated in lightweight finishes
            with an emphasis on a hybrid mix of materials and layering in a
            minimal two-tone colour palette
          </h2>
          <div className="page__btn_container">
            <Link to="/product">
              <button style={{ marginTop: "30%" }}>
                CHOOSE YOUR COLLECTION RIGHT NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
