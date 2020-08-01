import React from "react";
import ReactStars from 'react-stars'
import './title.css'
import geo from './img/map-pin.png'
// import {detailsTour} from "../../../../actions/detailsTour";
// import {allTour} from "../../../../actions/allTour";

const Title = ()=>{
    return(
        <div className="form-title">
            <h2>1 Day Burana-Kegety Gorge-Kol-Tor lake trip</h2>
            <div className='title-info'>
                <div className='title-info__cont'>
                    <ReactStars
                    size={20}
                    count={5}
                    value={3.5}
                    edit={false}
                    half={true}
                    color1="lightgrey"
                    color2="black"
                />
                </div>
                <div className='title-info__cont' style={{marginLeft: "80px"}}>
                    <img src={geo} alt="star.icon"/>
                    <span>Kyrgyzstan, Bishkek</span>
                </div>
            </div>
        </div>
    )
}

export default Title;