import React from "react";
import './overview.css'

const Over =()=>{
    return(
        <div className='container'>
            <div className='overview'>
                <h4>Overview</h4>
                <p>Escape the capital on this full-day adventure tour,
                    which takes you to two of Kyrgyzstan’s most famed natural and historical attractions.
                    First, head to scenic Tokmok for a look at Burana Tower, a 9th-century minaret.
                    Then, drive along the snow-capped Tian Shan mountain range for a half-day trek to the picturesque,
                    turquoise-colored lake of Kol Tor.
                </p>
            </div>
            <div className='overview'>
                <h4
                >What’s included</h4>
                <span>Professional guide</span>
                <span>Hotel pickup and drop-off</span>
            </div>
            <div className='overview'>
                <h4>Departure & Return</h4>
                <span>Departure Point</span>
                <span>Traveler pickup is offered</span>
                <span>Departure Time</span>
                <span>8:00 AM</span>
            </div>
            <div className='overview'>
                <h4>What to Expect</h4>
            </div>
            <div className='overview'>
                <h4>Additional Info</h4>
            </div>

        </div>
    )
}

export default Over;