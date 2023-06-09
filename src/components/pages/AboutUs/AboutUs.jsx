import React from "react";
import "./AboutUs.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      className="Container__about_us"
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
      <img
        src="https://wallpapers.com/images/hd/zara-fashion-chain-store-m4g0gru4j3a7ixvs.jpg"
        alt="img"
      />
      <Link to="/">
        <button>GET BACK</button>
      </Link>
      <h2>
        Zara is the leading trading network of the Inditex Group of companies,
        owned by Spanish tycoon Amancio Ortega, who is also the owner of such
        brands as Massimo Dutti, Pull and Bear, Oysho, Zara Home, Uterqüe,
        Stradivarius, Lefties and Bershka. The main office is located in La
        Coruna, Spain, where the first store was opened in 1975. It is claimed
        that Zara takes only 2 weeks[2] from design development before the new
        line goes on sale, compared to the average the indicator in the industry
        is 6 months. Moreover, during the year more than 10,000 new designs are
        being developed. Zara was able to resist a common trend in the clothing
        industry is placement production points in countries with low production
        costs. Perhaps they have chosen the most unusual strategy — advertising
        costs the company preferred investing part of the profits in opening new
        ones retail outlets. Fashion director of Louis Vuitton fashion house
        Daniel Piet described Zara as "perhaps the most innovative and crushing
        retail network in the world". Zara was also described by CNN as "Spanish
        Success Story"
      </h2>
    </motion.div>
  );
};

export default AboutUs;
