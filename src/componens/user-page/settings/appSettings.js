import React from "react"
import "./settings.css"
import Settings from "./settings"
import ChangePassword from "./changePassword"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AppSettings=()=>{
    return(
        <div>
             <Switch>
             <Route exact path="/user-page/settings" component={Settings}/>
             <Route  path="/user-page/settings/password" component={ChangePassword}/>
             </Switch>
        </div>
    )
}
export default AppSettings;