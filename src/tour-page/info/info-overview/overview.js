import React from "react";
import './overview.css'

const Over =()=>{
    return(
        <div className='cont'>
            <div className='overview'>
                <div className='overview-cont'>
                    <h4>Overview</h4>
                    <p>Escape the capital on this full-day adventure tour,
                        which takes you to two of Kyrgyzstan’s most famed natural and historical attractions.
                        First, head to scenic Tokmok for a look at Burana Tower, a 9th-century minaret.
                        Then, drive along the snow-capped Tian Shan mountain range for a half-day trek to the picturesque,
                        turquoise-colored lake of Kol Tor.
                    </p>
                </div>
            </div>
            <div className='overview'>
                <div className='overview-cont'>
                    <h4>What’s included</h4>
                    <span>Professional guide</span>
                    <span>Hotel pickup and drop-off</span>
                </div>
            </div>
            <div className='overview'>
                <div className='overview-cont'>
                    <h4>Departure & Return</h4>
                    <span className='overview-bold'>Departure Point</span>
                    <span>Traveler pickup is offered</span>
                    <span className='overview-bold'>Departure Time</span>
                    <span>8:00 AM</span>
                </div>
            </div>
            <div className='overview'>
                <div className='overview-cont'>
                    <h4>What to Expect</h4>
                    <span className='overview-bold'>Itinerary</span>
                    <p><span className='overview-bold'>Stop at:</span> Burana tower</p>
                    <p>You will visit a UNESCO heritage site build in 11th century.
                        Famous Burana tower, a stop on the Great Silk Road</p>

                    <p className="duration">Duration: 40 minutes</p>
                    <p>Admission: Ticket included</p>

                    <p><span className='overview-bold'>Stop at:</span> Koltor lake</p>
                    <p className="duration">Duration: 40 minutes</p>
                    <p>Admission: Ticket included</p>
                </div>

            </div>
            <div className='overview'>
                <div className='overview-cont'>
                    <h4>Additional Info</h4>
                    <ul className='overview-list'>
                        <li>Confirmation will be received at time of booking </li>
                        <li>Not wheelchair accessible</li>
                        <li>Children must be accompanied by an adult</li>
                        <li>Minimum age 10</li>
                        <li>This is a private tour/activity. Only your group will participate</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Over;