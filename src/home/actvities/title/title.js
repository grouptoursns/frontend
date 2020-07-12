import React from "react";
import "./title.css";
import next from "./img/Vector(1).png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="title1">
      <span className="span1">Actvities</span>
      <Link to="/activity">
        <span className="span2">
          All activities <img src={next} />
        </span>
      </Link>
    </div>
  );
};
export default Title;
