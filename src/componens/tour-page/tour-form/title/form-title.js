import React from "react";
import ReactStars from 'react-stars'
import './title.css'
import geo from './img/map-pin.png'
// import {detailsTour} from "../../../../actions/detailsTour";
// import {allTour} from "../../../../actions/allTour";

const Title = (props)=>{

    console.log(props.info)

    return(
        <div className="form-title">
            <h2>{props.info.name}</h2>
            <div className='title-info'>
                <div className='title-info__cont'>
                    <ReactStars
                    size={20}
                    count={5}
                    value={3}
                    edit={false}
                    half={true}
                    color1="lightgrey"
                    color2="black"
                />
                </div>
                <div className='title-info__cont' style={{marginLeft: "80px"}}>
                    <img src={geo} alt="star.icon"/>
                    <span>{props.info.location}</span>
                </div>
            </div>
        </div>
    )
}

export default Title;