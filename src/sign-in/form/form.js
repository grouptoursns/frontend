import React from "react";
import './form.css'

const Form =()=>{
    return(
        <div className="form">
            <div className="form-cont">
                <div>
                    <p className="form-cont__title">Login</p>
                    <input className="form-cont__input" placeholder='Login' type="text"/>
                </div>
                <div>
                    <p className="form-cont__title">Password</p>
                    <input className="form-cont__input" placeholder='Password' type="text"/>
                </div>
                <a className="form-cont__link">Forgot your password?</a>
                <button className="form-cont__btn">Sign In</button>
            </div>
        </div>
    )
}
export default Form;