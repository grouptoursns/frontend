import React from "react";
import "./block-registr.css"
import Registy from "../registr/registr.js"
import SocSeti from "../soc-seti/soc-seti.js"

const BlockRegistr =({data})=>{
    return(
        <div className="block-registr">
            <Registy/>
            <SocSeti data={data&&data}/>
        </div>
    )
}
export default BlockRegistr;