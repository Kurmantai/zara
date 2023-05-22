import React from "react";
import "./EditProductPage.scss";

const EditProductPage = () => {
  return (
    <div className="AddPro">
      <div className="AddBody">
        <h3>Edit product</h3>
        <input placeholder="Title"></input>
        <input placeholder="Description"></input>
        <input placeholder="Price"></input>
        <input placeholder="Image"></input>
        <input placeholder="Category"></input>
        <button>SEND PRODUCT</button>
      </div>
    </div>
  );
};

export default EditProductPage;
