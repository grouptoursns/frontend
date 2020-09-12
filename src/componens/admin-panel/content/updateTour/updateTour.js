import React from "react"
import "./updateTour.js"
import UpdateTourText from "./updateTourText/updateTourText";

const UpdateTour=(props)=>{
    return(
        <><UpdateTourText idTour={props.idTour}/></>
    )
}
export default UpdateTour;