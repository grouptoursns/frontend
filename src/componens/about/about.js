import React from "react";
import "./about.css";
import imgAbout from "./img/44240014405_58ce5bce45_h.png";

const About = () => {
  return (
    <div className="page-about">
      <div className="content-about">
        <span className="about-title">About us</span>
        <img src={imgAbout} />
        <span className="about-descrip">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit ess e cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </div>
    </div>
  );
};
export default About;
