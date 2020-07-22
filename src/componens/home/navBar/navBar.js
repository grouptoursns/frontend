import React from "react";
import "./navBar.css";
import Logo from "./logo/logo.js"
import NavButton from "./navButton/navButton.js"
import Lang from "./langu/lang.js"



const NavBar = () => {
  return (
    <div className="navBar">
        <Logo/>
        <NavButton/>
        <Lang/>
    </div>
  );
};

export default NavBar;