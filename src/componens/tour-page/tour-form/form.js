import React from "react";
import Title from './title/form-title.js'
import Pic from './pic-change/pic.js'
import Book from './form-book/book.js'
import './form.css'

const Form = (props) =>{
    return(
        <div className="contain">
            <div className="form">
                <Title info={props.data}/>
                <div className="form-content">
                    <Pic pic={props.data} />
                    <Book info={props.data} setTourBookInfo={props.setTourBookInfo} tourBookInfo={props.tourBookInfo}/>
                </div>
            </div>
        </div>
    )
}

export default Form;