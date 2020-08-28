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

      <Link className="link1" to="/activity">Activities</Link>
      <Link className="link1" to="/destinations">Destinations</Link>
    </div>
  );
};
export default NavButton;
