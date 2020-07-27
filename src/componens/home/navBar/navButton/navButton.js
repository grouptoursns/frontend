import React from "react";
import "./navButton.css";
import { Link } from "react-router-dom";

const NavButton = () => {
  return (
    <div className="navBtn">
      <Link className="link1" to="/">
        Home
      </Link>

      <Link className="link1" to="/about">
        About
      </Link>

      <span className="link1">Activities</span>
      <span className="link1">Destinations</span>
    </div>
  );
};
export default NavButton;
