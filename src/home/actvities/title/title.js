import React from "react";
import "./title.css";
import next from "./img/Vector(1).png"

const Title=()=>{
    return(
        <div className="title1">
            <span className="span1">Actvities</span>
            <span className="span2">All activities <img src={next}/></span>
        </div>
    )
}
export default Title;