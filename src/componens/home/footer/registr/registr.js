import React from "react";
import "./registr.css";
import next from "./img/Vector(1).png";
import {Link}  from "react-router-dom";

const Registy = () => {
  return (
    <div className="registr">
      <Link to="/sign-up-company">
        
        <span className="regist">Register as operator</span>
        <img src={next} alt="img" />
      </Link>
    </div>
  );
};
export default Registy;
