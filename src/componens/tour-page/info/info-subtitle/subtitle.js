import React from "react";
import clock from './img/clock.png'
import car from './img/car.png'
import ticket from './img/ticket-alt.png'
import './subtitle.css'

const Sub =()=>{
    return (
        <div className='sub'>
            <div className='sub-cont'>
                <img src={clock} alt="clock.icon"/>
                <span>8 to 10 hours (Approx.)</span>
            </div>
            <div className='sub-cont'>
                <img src={car} alt="clock.icon"/>
                <span>Hotel pickup offered</span>
            </div>
            <div className='sub-cont'>
                <img src={ticket} alt="clock.icon"/>
                <span>Mobile ticket</span>
            </div>
            <div className='sub-cont'>
                <img src={ticket} alt="clock.icon"/>
                <span>Offered in: Russian</span>
            </div>
        </div>

    )
}


export default Sub;