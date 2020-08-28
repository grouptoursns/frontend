import React from "react";
import "./useful.css";
import { Link } from "react-router-dom";

const Useful = () => {
  return (
    <div className="useful">
      <span className="title-contact">Useful links</span>
      <div className="content-block">
        <Link to="/">
          <span className="link-footer">Home</span>
        </Link>
        <Link to="/about">
          <span className="link-footer">About</span>
        </Link>
        <Link to="/activity">
          <span className="link-footer">Activities</span>
        </Link>
        <Link to="/destinations">
          <span className="link-footer">Destinations</span>
        </Link>
      </div>
    </div>
  );
};
export default Useful;
