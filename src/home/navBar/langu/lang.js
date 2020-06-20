import React,{useState} from "react";
import "./lang.css";
 import Usa from "../img/Group(1).png"
 import Ru from "../img/Group(3).png"
 import Kg from "../img/Group(2).png"
import 'bootstrap/dist/css/bootstrap.min.css';



const Lang =()=> {

  const [open,setOpen]= useState(false);
  const [flag,setFlag]=useState(Usa);
  const [country,setCountry]= useState(["EN","RU","KG"]);
const flagRu=()=>{
  setFlag(Ru)
}
const flagKg=()=>{
  setFlag(Kg)
}
const toggleOpen=()=>{
  setOpen(!open);
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
          {country[0]}
        </sran>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#nogo" onClick={flagRu}>
            {country[1]}
          </a>
          <a className="dropdown-item" href="#nogo" onClick={flagKg}>
          {country[2]}
          </a>
        </div>
      </div>
    );
  }

export default Lang;