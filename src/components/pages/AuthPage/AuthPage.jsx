import React from "react";
import "./AuthPage.scss";
import { useAuth } from "../../contexts/AuthContextProvider";
import Navbar from "../../mainComponents/navbar/Navbar";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = React.useState(true);

  const { register, login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let user = {
      email: data.get("email"),
      password: data.get("password"),
      displayname: data.get("displayName"),
      photoURL: data.get("photoURL"),
    };
    if (isLogin) {
      login(user);
    } else {
      register(user);
    }
  };

  return (
    <div>
      <div className="auth_top">
        <Navbar />
      </div>

      <div className="auth__container">
        <h5 style={{ marginTop: "5%", marginBottom: "3%" }}>
          LOG IN TO YOUR ACCOUNT
        </h5>
        <div className="log_in">
          <input className="input_email" type="email" placeholder="E-MAIL" />
          <input className="input_pw" type="password" placeholder="PASSWORD" />
          <button className="btn">LOG IN</button>
        </div>
        <div className="newAcc">
          <Link to="/newacc">NEED AN ACCOUNT?</Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
