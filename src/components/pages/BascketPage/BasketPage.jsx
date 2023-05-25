import { Title } from "@mui/icons-material";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Input,
  IconButton,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../../contexts/CartContexProvider";
import { motion } from "framer-motion";
import "./BascketPage.scss";

const BascketPage = () => {
  const { cart, getCart, changeProductCount, deleteFromCart } = useCart();

  useEffect(() => {
    getCart();
  }, []);

  return (
    <motion.div
      className="bascket_main__container"
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
      <div style={{ height: "5%" }}></div>
      <div className="bascket_navbar">
        <Link to="/">
          <img src="./images/za.svg" alt="zara" />
        </Link>
        <h1>SHOPPING BASCKET</h1>
      </div>
      <div className="bascket__body">
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white" }}>IMAGE</TableCell>
              <TableCell sx={{ color: "white" }}>TITLE</TableCell>
              <TableCell sx={{ color: "white" }}>PRICE</TableCell>
              <TableCell sx={{ color: "white" }}>CATEGORY</TableCell>

              <TableCell sx={{ color: "white" }} align="center">
                AMOUNT
              </TableCell>
              <TableCell sx={{ color: "white" }}>SUBPRICE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.products.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <img className="bascket__img" src={row.image} width={30} />
                </TableCell>
                <TableCell sx={{ color: "white" }}>{row.title}</TableCell>
                <TableCell sx={{ color: "white" }}>{row.price}</TableCell>
                <TableCell sx={{ color: "white" }}>{row.category}</TableCell>
                <TableCell align="center">
                  <Input
                    className="bascket__inp"
                    sx={{ color: "white" }}
                    type="number"
                    value={row.count}
                    onChange={(e) => changeProductCount(e.target.value, row.id)}
                    min={1}
                    max={100}
                  />
                </TableCell>
                <TableCell sx={{ color: "white" }}>{row.subPrice}</TableCell>
                <TableCell>
                  <IconButton
                    sx={{ color: "white" }}
                    onClick={() => deleteFromCart(row.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography sx={{ marginTop: "15px", color: "white" }} variant="h5">
            TotalPrice: {cart.totalPrice} EURO
          </Typography>

          <Button
            sx={{ color: "white", borderColor: "white", marginTop: "15px" }}
            variant="outlined"
            component={Link}
            to="/pay"
          >
            Buy
          </Button>
        </Box>
      </div>
    </motion.div>
  );
};

export default BascketPage;
