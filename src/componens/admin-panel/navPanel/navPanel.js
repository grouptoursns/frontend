import React,{useEffect,useState} from "react"
import "./navPanel.css"
import logo from "./img/123 1.png"
import map from "./img/map.png"
import settings from "./img/settings.png"
import logOut from "./img/log-out.png"
import site from "./img/Group 11.png"
import {Link} from "react-router-dom"
import { connect } from "react-redux";


const NavPanel=(props)=>{
    const[url,setUrl]=useState();
    useEffect(()=>{
  
        setUrl(window.location.pathname);
        console.log(url)
    })
    let data={}
    if(props.dataCompany===undefined){
        data={}
      }
      else{
        data =props.dataCompany
      }
    return(
<div className="admin-navPanel">
    <div className="logo-navPanel">
        <img alt="img" src={logo}/>
    <span className="logo-navPanel-text">{data.name}</span>
    </div>
    <div className="block-btn-navPanel">
        <Link to="/admin-panel"><button className={"navPanel-btn" +(url ==="/admin-panel"  ? " active-btn-navPanel":'')}><img alt="img" src={map}/>Manage Tours</button></Link>
        <Link to="/admin-panel/settings"> <button className={"navPanel-btn" +(url ==="/admin-panel/settings" ? " active-btn-navPanel":'')}><img alt="img" src={settings}/>Settings</button></Link>
       <Link to="/"> <button className="navPanel-btn"><img alt="img" src={site}/>View site</button></Link>
       
        <button className="navPanel-btn"><img alt="img" src={logOut}/>Logout</button>
    </div>
    
    
</div>
    )
}

const mapStateToProps = (state) => {
    return {
      dataCompany:state.dataCompany.state
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(NavPanel);