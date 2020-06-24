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
  const Clickcountry=(event)=>{
      const arr=[...country];
      if(event.target.id==="1"){
          for(var i=0;i<arr.length;i++){
              if(i==1){
                  arr.splice(i,1);
                  arr.unshift(country[1]);
                  setCountry([...arr])
              }
          }
      }
      if(event.target.id==="2"){
        for(var i=0;i<arr.length;i++){
            if(i==2){
                arr.splice(i,1);
                arr.unshift(country[2]);
                setCountry([...arr])
            }
        }
    }
    switch(event.target.innerHTML){
        case "EN":
            setFlag(Usa);
            break;
        case "RU":
            setFlag(Ru);
            break;
        case "KG":
            setFlag(Kg);
            break;
    }
  
   
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
          <a className="dropdown-item" id="1" href="#nogo" onClick={Clickcountry}>
          {country[1]}
          </a>
          <a className="dropdown-item" id="2" href="#nogo" onClick={Clickcountry}>
          {country[2]}
          </a>
        </div>
      </div>
    );
  }


export default Lang;