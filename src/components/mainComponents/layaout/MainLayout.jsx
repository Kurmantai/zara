import React from "react";
import Navbar from "../navbar/Navbar";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="div__page">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
