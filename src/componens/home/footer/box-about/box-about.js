import React from "react";
import "./box-about.css";
import AboutUs from "../about-us/about-us.js"
import Useful from "../useful/useful.js"


const BoxAbout =()=>{
    return(
        <div className="box-about">
            <AboutUs/>
            <Useful/>

        </div>
    )
}
export default BoxAbout;