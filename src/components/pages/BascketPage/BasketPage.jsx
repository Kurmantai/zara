import React from "react";
import "./BascketPage.scss";

const BasketPage = () => {
  return (
    <div>
      <div className="bascket__hav_container">
        <div>
          <img src="/images/za.svg" alt="za" />
        </div>
        <div>
          <h1>BASCKET</h1>
        </div>
      </div>
      <button className="getBack">GETBACK</button>
      <div className="bascket__list"></div>
      <button className="getOrder">ORDER</button>
    </div>
  );
};

export default BasketPage;
