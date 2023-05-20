import React, { createContext } from "react";
const cartContext = createContext();

const CartContexProvider = ({ children }) => {
  const values = {};
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContexProvider;
