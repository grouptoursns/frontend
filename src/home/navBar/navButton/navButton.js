import React from "react";
import "./navButton.css"
import ToursBtn from "../toursBtn/toursBtn.js"


const NavButton = ()=>{
    return(
        <div className="navBtn">
            <span className="link">Home</span>

            
           <ToursBtn/>

            <span className="link">Group tours</span>
            <span className="link">Blog</span>
            <span className="link">About</span>

        </div>
    );
};
export default NavButton;