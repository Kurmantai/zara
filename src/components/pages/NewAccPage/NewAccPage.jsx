import React from "react";
import { motion } from "framer-motion";

const NewAccPage = () => {
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
      <h5>SIGN IN TO YOUR ACCOUNT</h5>
      <div className="log_in">
        <input className="input_pw" type="text" placeholder="NAME" />
        <input className="input_pw" type="text" placeholder="SURNAME" />
        <input className="input_pw" type="email" placeholder="E-MAIL" />
        <input className="input_pw" type="text" placeholder="PASSWORD" />
        <input className="input_pw" type="text" placeholder="REPEAT PASSWORD" />
        <button className="btn">SIGN IN</button>
      </div>
    </motion.div>
  );
};

export default NewAccPage;
