import React from "react";
import Navbar from "../../mainComponents/navbar/Navbar";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div>
      <div className="container__page">
        <div className="container__page_overlay"></div>
        <Navbar />
        <img
          src="https://i.pinimg.com/originals/0e/59/06/0e59067ebd156bc27abb35e7e6cf56c1.jpg"
          alt="img"
        />
        <div className="page__body">
          <h2>
            A minimal collection of limited edition tailoring captured amongst
            the elements. The silhouettes are drawn from a mix of tailored
            workwear styles, soft textured shirting, stretch cotton jersey
            high-tech nylon and leather all fabricated in lightweight finishes
            with an emphasis on a hybrid mix of materials and layering in a
            minimal two-tone colour palette
          </h2>
          <div className="page__btn_container">
            <button>CHOOSE YOUR COLLECTION RIGHT NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
