import React from "react";
import './booking.css'

const Booking = () =>{
    return(
        <div className='booking'>
            <div className='booking-form'>
                <div className='booking-form__left'>
                    <h4>1 Day Burana-Kegety Gorge-Kol-Tor lake trip</h4>
                    <p>Pickup included</p>
                    <button>8:00 AM</button>
                </div>
                <div className='booking-form__right'>
                    <p className='booking-form__right-cost'>$240.12</p>
                    <p className='booking-form__right-count'>2 Audits x $120.06</p>
                    <button className='booking-form__right-btn'>Reserve Now & Pay Later</button>
                    <button className='booking-form__right-btn'>Book now</button>
                </div>
            </div>
            <div className='booking-info'>
                <p>Reserve Now & Pay Later is an easy way to secure your spot while keeping your plans flexible.
                    Pay at any time up to 2 days before your experience.
                    Canceling is simple too.
                </p>
            </div>
        </div>
    )
}

export default Booking;