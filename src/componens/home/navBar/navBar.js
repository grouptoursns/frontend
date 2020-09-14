import React,{useState} from "react";
import "./navBar.css";
import Logo from "./logo/logo.js";
import NavButton from "./navButton/navButton.js";
import Lang from "./langu/lang.js";

const NavBar = () => {
  const [burger,setBurger]=useState(false)
  return (
    <div className="navBar" >
      <Logo />
      <div className={`${burger ? "open" : ''} list`}>
      <NavButton />
      <Lang />
        </div>

      <div
        onClick={() => {
          burger ? setBurger(false) : setBurger(true);
        }}
        className="burger"
      >
        <span
          style={{
            marginBottom: burger ? "0px" : "3px",
            transform: burger ? "rotate( 45deg) translate(0px, 0px)" : "",
          }}
        />
        <span
          style={{
            display: burger ? "none" : "block",
            transition: "all 0.5s ease-in",
          }}
        />
        <span
          style={{
            marginTop: burger ? "0px" : "3px",
            transform: burger ? "rotate( 135deg) translate(-3px, 3px)" : "",
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
