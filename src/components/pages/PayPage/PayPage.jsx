import React from "react";
import "./PayPage.scss";

const PayPage = () => {
  return (
    <div>
      <div className="pay__hav_container">
        <div>
          <img src="/images/za.svg" alt="za" />
        </div>
        <div>
          <h1>BASCKET</h1>
        </div>
      </div>
      <button className="getBack">GETBACK</button>
      <div className="pay__list">
        <div className="pay__cart">
          <input type="text" placeholder="CARD NUMBER*" />
          <input type="text" placeholder="CVC/CVV*" />
          <input type="text" placeholder="NAME*" />
          <input type="text" placeholder="EMAIL ADDRES*" />
        </div>
      </div>
      <button className="getPay">Pay</button>
    </div>
  );
};

export default PayPage;
