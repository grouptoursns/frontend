import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Company from './company/company.js'
import User from './user/user.js'


const Form =()=>{

    return(
        <div className="tabs">
            <Router>
                <Switch>
                    <Route path="/user" component={User} />
                    <Route path="/company" component={Company} />
                    <Redirect from="/" to="/user" />
                </Switch>
            </Router>
        </div>
    )



}
export default Form;