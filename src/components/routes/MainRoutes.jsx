import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ProductPage from "../pages/ProductPage/ProductPage";
import EditProductPage from "../pages/EditProductPage/EditProductPage";
import AddProductPage from "../pages/AddProductPage/AddProductPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import BasketPage from "../pages/BascketPage/BasketPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import PayPage from "../pages/PayPage/PayPage";

import FavoritePage from "../pages/Favorite/FavoritePage";

import { AnimatePresence } from "framer-motion";

const MainRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/pay" element={<PayPage />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/edit/:id" element={<EditProductPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/bascket" element={<BasketPage />} />

        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default MainRoutes;
