import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import User from './user/user.js'
import Home from "../../home/home";


const Form =()=>{

    return(
        <div className="tabs">
            <Router>
                <Switch>
                    <Route path="/sign-in" component={User} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </div>
    )



}
export default Form;