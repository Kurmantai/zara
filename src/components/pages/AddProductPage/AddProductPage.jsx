import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
import { Link } from "react-router-dom";

import "./AddProductPage.scss";
import { notify_r } from "../../mainComponents/Toastify";

const AddProductPage = () => {
  const { addProduct } = useProduct();

  const [formValue, setFormValue] = useState({
    title: "",

    price: "",
    category: "",
    image: "",
  });

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
      !formValue.title.trim() ||
      !formValue.price.trim() ||
      !formValue.image.trim() ||
      !formValue.category.trim()
    ) {
      notify_r("FILL ALL FIELDS !");
      return;
    }

    addProduct(formValue);
  }

  return (
    <div className="add__main_container">
      <div style={{ height: "13%" }}></div>
      <Link to="/">
        <img src="/images/zara.svg" alt="image" />
      </Link>
      <h1
        style={{
          textAlign: "center",
          marginTop: "3%",
        }}
      >
        ADD PRODUCT
      </h1>

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
          sx={{ marginTop: "7%" }}
          value={formValue.title}
          onChange={(e) => handleChange(e)}
          name="title"
          label="Title"
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
            <MenuItem value={"shoes"}>SHOUES</MenuItem>
            <MenuItem value={"bags"}>BAGS</MenuItem>
            <MenuItem value={"accessories"}>ACCESSORIES</MenuItem>
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
          Send Product
        </Button>
      </form>
    </div>
  );
};

export default AddProductPage;
