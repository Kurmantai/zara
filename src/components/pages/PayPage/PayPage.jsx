import React from "react";
import "./PayPage.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { notify } from "../../mainComponents/Toastify";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const PayPage = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        transform: "scale(0.3)",
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
        transform: "scale(0.3)",
        filter: "blur(10px)",
        transition: { duration: 0.2, ease: "easeIn" },
      }}
    >
      <div className="pay__main_container">
        <div style={{ height: "13%" }}></div>
        <Link to="/">
          <img src="/images/zara.svg" alt="image" />
        </Link>

        <form
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Link to="/product">
            <Button
              style={{
                height: "50px",
                width: "100%",
                color: "white",
                backgroundColor: "black",
                marginTop: "10%",
              }}
            >
              GET BACK
            </Button>
          </Link>
          <TextField
            className="text__field"
            sx={{
              marginTop: "7%",
              textAlign: "center",
            }}
            name="card number"
            label="CARD NUMBER"
            variant="outlined"
          />
          <TextField
            className="text__field"
            name="cvc/cvv*"
            label="CVC/CVV*"
            variant="outlined"
          />
          <TextField
            className="text__field"
            name="name"
            label="NAME*"
            variant="outlined"
          />
          <TextField
            className="text__field"
            name="email addres"
            label="EMAIL ADDRES*"
            variant="outlined"
          />

          <Button
            style={{
              height: "50px",
              width: "100%",
              color: "white",
              backgroundColor: "black",
            }}
            onClick={() => notify("THE OPIRATION WAS SUCCESSFUL")}
          >
            PAY
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default PayPage;
