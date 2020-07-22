import React from "react";
import "./title.css";
import next from "../img/Vector(1).png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="block-title container">
      <span className="title">Best destinations</span>
      <Link to="/destinations">
        <span className="all">
          All destinations <img src={next} />
        </span>
      </Link>
    </div>
  );
};
export default Title;
