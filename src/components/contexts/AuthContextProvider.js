import React, { createContext } from "react";

const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const values = {};
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
