import React from "react";
// import "./auth.css";

const AuthPage = () => {
  return (
    <div>
      <h1>login page</h1>
      <div className="login">
        <input type="text" placeholder="E-MAIL" />
        <input type="text" placeholder="PASSWORD" />
        <button>LOG IN</button>
      </div>
    </div>
  );
};

export default AuthPage;
