import React from "react";
import "./actvities.css"
import Title from "./title/title.js"
import BlockCardActv from "./block-card/block-card.js"

const Actvities =()=>{
    return(
        <div className="actvities container">
            <Title/>
            <BlockCardActv/>
        </div>
    )
}
export default Actvities;