import React from "react"
import "./navBar.css"
import logo from "./img/pawtects_logo_big.png"

const NavBar=()=>{
    return(
        <div className="admin-navBar">
            <div className="adminText">
                <img  alt="img" className="logo-site" src={logo}/>

            </div>
        </div>
    )
}
export default NavBar;