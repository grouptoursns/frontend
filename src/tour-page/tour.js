import React from "react";
import Form from './tour-form/form.js';
import Booking from './booking/booking.js';
import Info from './info/info.js';
import './tour.css'

const Tour = () =>{
    return(
        <div className='tour-page'>
            <Form />
            <Booking />
            <Info />
        </div>
    )
}

export default Tour;