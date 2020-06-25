import React from "react"
import "./soc-seti.css"
import instagram from "./img/Vector(1).png";
import facebook from "./img/Vector(2).png";
import stripe from "./img/Vector(3).png";
import twiter from "./img/Vector(4).png";
import youtube from "./img/Vector(5).png";


const SocSeti =()=>{
    return(
        <div className="block-soc-seti">
            <span>We are in social media</span>
            <img src={instagram}/>
            <img src={facebook}/>
            <img src={stripe}/>
            <img src={twiter}/>
            <img src={youtube}/>

        </div>
    )
}
export default SocSeti;