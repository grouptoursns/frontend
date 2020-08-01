import React from "react";
import "./about.css";
import imgAbout from "./img/44240014405_58ce5bce45_h.png";
import History from "../about/history/history"
import Features from "../about/features/features";

const About = () => {
  return (
    <div className="page-about">
      <div className="content-about">
        <span className="about-title">About us</span>
<History/>
<Features/>
      </div>
    </div>
  );
};
export default About;
