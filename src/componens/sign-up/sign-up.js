import React from "react";
import "./sign-up.css";
import User from "./users-sign-up/user.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const SignUp = () => {
  return (
    <Router>
      <div className="sign-up">
        <div className="sign-up_content">
          <div className="sign-block-form">
            <Switch>
              <Route path="/sign-up" component={User} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};
export default SignUp;
