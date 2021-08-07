import React from "react";
import moon from "../images/icon-moon.svg";
//import sun from "../images/icon-sun.svg";

const Header = () => {
  return (
    <div className="app-header col-md-6 mx-auto">
      <h1 className="header-title">TODO</h1>

      <img className="toggle-light" src={moon} alt="" />
    </div>
  );
};

export default Header;
