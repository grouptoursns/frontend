import React from "react"
import "./navPanel.css"
import logo from "./img/123 1.png"
import map from "./img/map.png"
import settings from "./img/settings.png"
import logOut from "./img/log-out.png"

const NavPanel=()=>{
    return(
<div className="admin-navPanel">
    <div className="logo-navPanel">
        <img alt="img" src={logo}/>
        <span className="logo-navPanel-text">NETFLIX CORPORATION</span>
    </div>
    <div className="block-btn-navPanel">
        <button className="navPanel-btn"><img alt="img" src={map}/>Manage Tours</button>
        <button className="navPanel-btn"><img alt="img" src={settings}/>Settings</button>
        <button className="navPanel-btn"><img alt="img" src={logOut}/>View site</button>
        <button className="navPanel-btn"><img alt="img" src={logOut}/>Logout</button>
    </div>


</div>
    )
}
export default NavPanel;