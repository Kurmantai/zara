import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import { useFavorite } from "../../contexts/FavoriteContexProvider";
import { motion } from "framer-motion";
import "./FavoritePage.scss";

const FavoritePage = () => {
  const { favorite, getFavorite, changeProductCount, deleteFromFavorite } =
    useFavorite();

  useEffect(() => {
    getFavorite();
  }, []);

  return (
    <motion.div
      className="favorite_main__container"
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
      <div className="favorite_navbar">
        <Link to="/">
          <img src="./images/za.svg" alt="zara" />
        </Link>
        <h1>FAVORITES</h1>
        <div></div>
      </div>
      <div className="favorite__body">
        <Table size="small">
          <TableHead>
            <TableRow></TableRow>
          </TableHead>
          <div
            className="favorite__list"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <TableBody
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {favorite.products.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <img className="favorite__img" src={row.image} width={30} />
                  </TableCell>

                  <TableCell align="center"></TableCell>

                  <TableCell>
                    <IconButton
                      sx={{ color: "black", backgroundColor: "white" }}
                      onClick={() => deleteFromFavorite(row.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </div>
        </Table>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button
            sx={{
              color: "black",
              borderColor: "black",
              marginTop: "15px",
              marginLeft: "2%",
            }}
            variant="outlined"
            component={Link}
            to="/product"
          >
            BACK TO PRODUCTS
          </Button>
        </Box>
      </div>
    </motion.div>
  );
};

export default FavoritePage;
