import React from "react";
import "./box-about.css";
import AboutUs from "../about-us/about-us.js"
import Useful from "../useful/useful.js"
import Best from "../best-tours/best"

const BoxAbout =()=>{
    return(
        <div className="box-about">
            <AboutUs/>
            <Useful/>
            <Best/>

        </div>
    )
}
export default BoxAbout;