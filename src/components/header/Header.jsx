import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/profile.jpg";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header id='header'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Susan Dangol</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="my pic" />
        </div>  
             
      </div>
    </header>
  );
};

export default Header;
