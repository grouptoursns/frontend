import React from "react";
import "./title.css";
import next from "../img/Vector(1).png"

const Title=()=>{
    return(
        <div className="block-title container">
              <span className="title">Best destinations</span>
              <span className="all">All destinations <img src={next}/></span>
        </div>
      
    )
}
export default Title;