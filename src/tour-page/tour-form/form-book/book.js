import React, {useState} from "react";
import Counter from "./counter/counter.js";
import DatePicker from "react-datepicker/dist/es";
import 'react-datepicker/dist/react-datepicker.css'
import './book.css'



const Book =()=>{
    const [selectedDate, setSelectedDate] = useState(null)

    return(
        <div className="book">
            <div className="book-price">
                <h2>from 120$</h2>
                <p className="book-price__size">Price varies by group size</p>
                <p className="book-price__guarantee">Lowest Price Guarantee</p>
            </div>
            <div className="book-picker">
                <p className="book-picker__select">Select Date and Travelers</p>
                <DatePicker
                    selected={selectedDate}
                    onChange={date=> setSelectedDate(date)}
                    dateFormat='dd/MM/yyyy'
                    minDate = {new Date()}
                />
                    <Counter />
                <button className="book-picker__btn">Update search</button>

                <div className="book-picker__text">
                    <p className="book-picker__text-title">
                        Reserve Now & Pay Later
                    </p>
                    <p className="book-picker__text-subtitle">
                        Secure your spot while staying flexible
                    </p>
                </div>

                <div className="book-picker__text">
                    <p className="book-picker__text-title">
                        Free Cancellation
                    </p>
                    <p className="book-picker__text-subtitle">
                        Up to 24 hours in advance
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Book;