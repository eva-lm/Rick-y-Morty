import React from "react";
import logo from "../images/logo.png";
import "../stylesheets/Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <img className="image__logo" src={logo} alt="header logo" />
      </div>
    </header>
  );
};
export default Header;
