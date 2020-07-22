import React from "react";
import "./navButton.css"
import ToursBtn from "../toursBtn/toursBtn.js"
import {Link} from "react-router-dom";

const NavButton = ()=>{
    return(
        <div className="navBtn">
            <Link className="link1" to="/">Home</Link>
           

            
           <ToursBtn/>

            <span className="link1">Group tours</span>
            <span className="link1">Blog</span>
            <span className="link1">About</span>

        </div>
    );
};
export default NavButton;