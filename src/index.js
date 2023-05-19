import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./components/contexts/AuthContextProvider";
import ProductContextProvider from "./components/contexts/ProductContextProvider";
import CartContexProvider from "./components/contexts/CartContexProvider";
import Toastify from "./components/mainComponents/Toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ProductContextProvider>
          <CartContexProvider>
            <Toastify />
            <App />
          </CartContexProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
