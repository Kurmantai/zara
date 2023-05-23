import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div>
      <div className="header__container">
        <div className="header__right">
          <p>ADD PRODUCT</p>
          <p>PRODUCTS</p>
        </div>

        <div className="header__middle">
          <img className="svg" src="/images/zara.svg" alt="zara" />

          <h4 className="h4">MAN'S</h4>
          <h4>COLLECTION</h4>
        </div>
        <div className="header__left">
          <p>ABOUT US</p>
          <p>LOG IN</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
