import React from 'react';
import { Link } from  'react-router-dom';
import '../form.css'

const User =()=>{

    return(
        <div className="form">
            <div className="form-cont">
                <h2>User</h2>
                <div>
                    <p className="form-cont__title">Login</p>
                    <input className="form-cont__input" placeholder='Login' type="text"/>
                </div>
                <div>
                    <p className="form-cont__title">Password</p>
                    <input className="form-cont__input" placeholder='Password' type="password"/>
                </div>
                <div className="form-cont__check">
                    <input className="form-cont__check-input" type="checkbox"/>
                    <p className="form-cont__check-title">Remember me</p>
                </div>

                <button className="form-cont__btn">Sign In</button>
                <a className="form-cont__link">Forgot your password?</a>
                <Link to="/company">Sign in as Company</Link>
            </div>
        </div>
    )
}

export default User;