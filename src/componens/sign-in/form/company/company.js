import React from 'react';
import { Link, NavLink } from  'react-router-dom';
import '../form.css'

const Company =()=>{
        return(
            <div className="form">
                <div className="form-tabs">
                    <NavLink to="/user" className="form-tabs__link" activeClassName="selected">User</NavLink>
                    <NavLink to="/company" className="form-tabs__link" activeClassName="selected">Company</NavLink>
                </div>
                <div className="form-cont">
                    <h2>Company</h2>
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
                        <p>Remember me</p>
                    </div>

                    <button className="form-cont__btn">Sign In</button>
                    <a className="form-cont__link">Forgot your password?</a>
                </div>
            </div>
        )
}

export default Company;