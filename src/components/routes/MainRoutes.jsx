import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ProductPage from "../pages/ProductPage/ProductPage";
import ProductDetailsPage from "../pages/ProductDetail/ProductDetail";
import EditProductPage from "../pages/EditProductPage/EditProductPage";

import AddProductPage from "../pages/AddProductPage/AddProductPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import BasketPage from "../pages/BascketPage/BasketPage";
import AboutUs from "../pages/AboutUs/AboutUs";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/details/:id" element={<ProductDetailsPage />} />
        <Route path="/edit/:id" element={<EditProductPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/bascket" element={<BasketPage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
