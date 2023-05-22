import React from "react";
import Navbar from "../navbar/Navbar";
import "./MainLayout.scss";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="main__layout_page">
      <Navbar />

      <Outlet />
    </div>
  );
};

export default MainLayout;
