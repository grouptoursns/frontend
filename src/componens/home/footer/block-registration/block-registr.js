import React from "react";
import "./block-registr.css"
import Registy from "../registr/registr.js"
import SocSeti from "../soc-seti/soc-seti.js"

const BlockRegistr =()=>{
    return(
        <div className="block-registr">
            <Registy/>
            <SocSeti/>
        </div>
    )
}
export default BlockRegistr;