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
        <sran
          className="btn  dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
        >
          Login in
        </sran>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          
          <Link className="dropdown-item" to="/sign-in">Login in</Link>
          <Link className="dropdown-item" to="/sign-up">Login up</Link>
        </div>
      </div>
    );
  }


export default Lang;