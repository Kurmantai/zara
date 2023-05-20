import React from "react";
import ProductCard from "../../mainComponents/cart/ProductCard";

const ProductPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "10%",
      }}
    >
      <ProductCard />
    </div>
  );
};

export default ProductPage;
