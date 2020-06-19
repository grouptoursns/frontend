import React from "react";
import "./navBar.css";
import Logo from "./logo/logo"
import NavButton from "./navButton/navButton"
import Lang from "./langu/lang"



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