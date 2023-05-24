import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./EditProductPage.scss";
import { motion } from "framer-motion";

const EditProductPage = () => {
  const { oneProduct, getOneProduct, editProduct } = useProduct();

  const params = useParams();

  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setFormValue(oneProduct);
    }
  }, [oneProduct]);

  function handleChange(e) {
    let obj = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(obj);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !formValue.title ||
      !formValue.description ||
      !formValue.price ||
      !formValue.image ||
      !formValue.category
    ) {
      alert("fill the fields");
      return;
    }

    editProduct(formValue, params.id);
    navigate("/");
  }

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
      className="edit__main_container"
    >
      <div style={{ height: "10%" }}></div>
      <Link to="/">
        <img src="/images/zara.svg" alt="image" />
      </Link>

      <h1 style={{ textAlign: "center", marginTop: "1.5%" }}>Edit Product</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <TextField
          sx={{ marginTop: "5%" }}
          value={formValue.title}
          onChange={(e) => handleChange(e)}
          name="title"
          label="Title"
          variant="outlined"
        />
        <TextField
          value={formValue.descrption}
          onChange={(e) => handleChange(e)}
          name="description"
          label="Description"
          variant="outlined"
        />
        <TextField
          value={formValue.price}
          onChange={(e) => handleChange(e)}
          name="price"
          label="Price"
          variant="outlined"
        />
        <TextField
          value={formValue.image}
          onChange={(e) => handleChange(e)}
          name="image"
          label="Image"
          variant="outlined"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            name="category"
            value={formValue.category}
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"electronics"}>Electronics</MenuItem>
            <MenuItem value={"jewelry"}>Jewelry</MenuItem>
            <MenuItem value={"books"}>Books</MenuItem>
          </Select>
        </FormControl>
        <Button
          style={{
            height: "50px",
            width: "100%",
            color: "white",
            backgroundColor: "black",
          }}
          type="submit"
        >
          EDIT PRODUCT
        </Button>
      </form>
    </motion.div>
  );
};

export default EditProductPage;
