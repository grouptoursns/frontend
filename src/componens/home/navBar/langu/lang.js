import React,{useState} from "react";
import "./lang.css";
import Usa from "../img/Group(1).png";
import Kg from "../img/Group(2).png";
import Ru from "../img/Group(3).png";
import 'bootstrap/dist/css/bootstrap.min.css';



const Lang =()=>{

  const [open,setOpen]=useState(false);
  const [flag,setFlag]=useState(Usa);
  const [country,setCountry]= useState(['EN','RU','KG']);

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
          <a className="dropdown-item" id="1" href="#nogo" >
          Login in
          </a>
          <a className="dropdown-item" id="2" href="#nogo" >
          Login up
          </a>
        </div>
      </div>
    );
  }


export default Lang;