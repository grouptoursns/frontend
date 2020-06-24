import React,{useState} from "react";
import "./lang.css";
import Usa from "../img/Group(1).png";
import Kg from "../img/Group(2).png";
import Ru from "../img/Group(3).png";
import 'bootstrap/dist/css/bootstrap.min.css';



const Lang =()=>{

  const [open,setOpen]=useState(false);
  const [flag,setFlag]=useState(Usa);

  const toggleOpen = () => {
    setOpen(!open)
  }


    const menuClass = `dropdown-menu${open ? " show" : ""}`;
    return (
      <div className="dropdown" onClick={toggleOpen}>
          <img src={flag}/>
        <sran
          className="btn  dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
        >
          EN
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


export default Lang;