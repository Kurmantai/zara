import React from "react";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header__right">
        <p>ADD PRODUCT</p>
        <p>PRODUCTS</p>
      </div>
      <div className="header__middle">
        <img src="./././publick/zara" alt="zara" />
        <h3>MAN</h3>
      </div>
      <div className="header__left">
        <p>ABOUT US</p>
        <p>LOG IN</p>
      </div>
    </div>
  );
};

export default Navbar;
