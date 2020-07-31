import React from "react";
import "./about-us.css";
import paint from "./img/Subtract.png";
import phone from "./img/Vector (4).png";
import mail from "./img/mail.png";

const AboutUs = () => {
  return (
    <div className="about">
      <span className="title-contact">Contacts</span>
      <div className="content-block">
        <div className="block-text-footer">
          <img className="paint-footer" alt="img" src={paint} />
          <span>Baytik Baatyr st., 70 Kyrgyz Republic, Bishkek</span>
        </div>
        <div className="block-text-footer">
          <img alt="img" src={phone} />
          <span>+996 999 99 99 99</span>
        </div>
        <div className="block-text-footer">
          <img alt="img" src={mail} />
          <span>ivanivanov@gmail.com</span>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
