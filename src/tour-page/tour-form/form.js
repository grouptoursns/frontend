import React from "react";
import Title from './title/form-title.js'
import Pic from './pic-change/pic.js'
import Book from './form-book/book.js'
import './form.css'

const Form = () =>{
    return(
        <div className="contain">
            <div className="form">
                <Title />
                <div className="form-content">
                    <Pic />
                    <Book />
                </div>
            </div>
        </div>
    )
}

export default Form;