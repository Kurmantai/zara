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

          <h2 className="h2">MAN'S</h2>
          <h2>COLLECTION</h2>
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
