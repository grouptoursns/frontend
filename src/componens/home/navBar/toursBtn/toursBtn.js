import React,{useState} from "react";
import "./toursBtn.css";

import 'bootstrap/dist/css/bootstrap.min.css';



const ToursBtn =()=>{

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
          Tours
        </sran>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#nogo">
            RU
          </a>
          <a className="dropdown-item" href="#nogo">
          KG
          </a>
        </div>
      </div>
    );
  }


export default ToursBtn;