import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="header__container">
        <div className="header__right">
          <Link to="/add">
            <p>ADD PRODUCT</p>
          </Link>
          <Link to="/product">
            <p>PRODUCTS</p>
          </Link>
        </div>

        <div className="header__middle">
          <Link to="/">
            <img className="svg" src="/images/zara.svg" alt="zara" />
          </Link>

          <h1 style={{ marginTop: "10%" }} className="h1">
            MAN'S
          </h1>
          <h1>COLLECTION</h1>
        </div>
        <div className="header__left">
          <Link to="/aboutus">
            <p>ABOUT US</p>
          </Link>
          <Link to="/auth">
            <p>LOG IN</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
