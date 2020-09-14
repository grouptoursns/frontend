import React from "react";
import "./about.css";
import imgAbout from "./img/44240014405_58ce5bce45_h.png";
import History from "../about/history/history";
// import Features from "../about/features/features";
import NavBar from "../home/navBar/navBar";
import Footer from "../home/footer/footer"
const About = () => {
  return (
    <div>
      <NavBar />
      <div className="page-about">
        <div className="content-about">
          <span className="about-title">About us</span>
          <History />
          {/*<Features />*/}
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default About;
