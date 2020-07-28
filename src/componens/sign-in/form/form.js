import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import User from './user/user.js'


const Form =()=>{

    return(
        <div className="tabs">
            <Router>
                <Switch>
                    <Route path="/user" component={User} />
                    <Redirect from="/" to="/user" />
                </Switch>
            </Router>
        </div>
    )



}
export default Form;