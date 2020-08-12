import React from "react";
import "./sign-up.css";
import User from "./users-sign-up/user.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../home/navBar/navBar";
import Footer from "../home/footer/footer";

const SignUp = () => {
  return (
    <div>
      <NavBar />
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
      <Footer />
    </div>
  );
};
export default SignUp;
