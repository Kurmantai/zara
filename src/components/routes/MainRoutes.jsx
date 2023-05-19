import React from "react";
import MainLayout from "../mainComponents/MainLayout";
import HomePage from "../pages/HomePage";
import AddProductPage from "../pages/AddProductPage";
import ProductDetailsPage from "../pages/ProductDetail";
import EditProductPage from "../pages/EditProductPage";
import AuthPage from "../pages/AuthPage";
import BasketPage from "../pages/BasketPage";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddProductPage />} />
          <Route path="/details/:id" element={<ProductDetailsPage />} />
          <Route path="/edit/:id" element={<EditProductPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/bascket" element={<BasketPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
