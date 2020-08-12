import React from "react"
import "./content.css"
import NavPanel from "../navPanel/navPanel"

const Content=()=>{
    return(
        <div className="admin-wrapper">
            <div className="left-navPanel">
                <NavPanel/>

            </div>
            <div className="block-content">

            </div>
            

        </div>
    )
}
export default Content;