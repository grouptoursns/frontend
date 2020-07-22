import React from "react";
import Sub from './info-subtitle/subtitle.js'
import Over from './info-overview/overview.js'
import './info.css'

const Info = () =>{
    return(
        <div className='info'>
            <Sub />
            <Over />
        </div>
    )
}

export default Info;