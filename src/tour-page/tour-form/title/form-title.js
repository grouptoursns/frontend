import React from "react";
import './title.css'
import stars from './img/stars.png'
import geo from './img/geoloc.png'

const Title = ()=>{
    return(
        <div className="form-title">
            <h2>1 Day Burana-Kegety Gorge-Kol-Tor lake trip</h2>
            <div className='title-info'>
                <img src={stars} alt="star.icon"/>
                <img src={geo} alt="star.icon"/>
            </div>
        </div>
    )
}

export default Title;