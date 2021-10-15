import React from "react";
import logo from "../images/logo.png";
import Herderbtns from "./Herderbtns";

function Headers(props) {
  return (
    <>
      <div className="app-title-container">
        <div className="app-title-container-wrapper">
          <img className="title-logo" src={logo} alt="logo" />
          <h1 className="app-main-title">Online Notepad...</h1>
        </div>
        <Herderbtns></Herderbtns>
      </div>
    </>
  );
}

export default Headers;
