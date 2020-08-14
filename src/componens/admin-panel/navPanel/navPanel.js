import React,{useEffect,useState} from "react"
import "./navPanel.css"
import logo from "./img/123 1.png"
import map from "./img/map.png"
import settings from "./img/settings.png"
import logOut from "./img/log-out.png"
import {Link} from "react-router-dom"

const NavPanel=()=>{
    const[url,setUrl]=useState();
    useEffect(()=>{
        setUrl(window.location.pathname);
    })
    const path="/admin-panel"&&"/admin-panel/add-tour"&&"/admin-panel/groups"
    return(
<div className="admin-navPanel">
    <div className="logo-navPanel">
        <img alt="img" src={logo}/>
        <span className="logo-navPanel-text">NETFLIX CORPORATION</span>
    </div>
    <div className="block-btn-navPanel">
        <Link to="/admin-panel"><button className={"navPanel-btn" +(url ==="/admin-panel"? " active-btn-navPanel":'')}><img alt="img" src={map}/>Manage Tours</button></Link>
        <Link to="/admin-panel/settings"> <button className={"navPanel-btn" +(url ==="/admin-panel/settings" ? " active-btn-navPanel":'')}><img alt="img" src={settings}/>Settings</button></Link>
       
        <button className="navPanel-btn"><img alt="img" src={logOut}/>View site</button>
        <button className="navPanel-btn"><img alt="img" src={logOut}/>Logout</button>
    </div>
    
    
</div>
    )
}
export default NavPanel;