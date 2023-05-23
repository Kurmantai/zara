import React from "react";

const NewAccPage = () => {
  return (
    <div>
      <h5>SIGN IN TO YOUR ACCOUNT</h5>
      <div className="log_in">
        <input className="input_pw" type="text" placeholder="NAME" />
        <input className="input_pw" type="text" placeholder="SURNAME" />
        <input className="input_pw" type="email" placeholder="E-MAIL" />
        <input className="input_pw" type="text" placeholder="PASSWORD" />
        <input className="input_pw" type="text" placeholder="REPEAT PASSWORD" />
        <button className="btn">SIGN IN</button>
      </div>
    </div>
  );
};

export default NewAccPage;
