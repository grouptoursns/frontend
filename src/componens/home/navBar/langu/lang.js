import React,{useState} from "react";
import "./lang.css";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



const Lang =()=>{

  const [open,setOpen]=useState(false);


  const toggleOpen = () => {
    setOpen(!open)
  }


    const menuClass = `dropdown-menu${open ? " show" : ""}`;
    return (
      <div className="dropdown" onClick={toggleOpen}>
        <span
          className="btn  dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
        >
          Sign in
        </span>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          
          <Link className="dropdown-item" to="/sign-in">Sign in</Link>
          <Link className="dropdown-item" to="/sign-up">Sign up</Link>
        </div>
      </div>
    );
  }


export default Lang;