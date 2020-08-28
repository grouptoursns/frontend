import React from "react";
import "./app.css";
import Company from "./company.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../../home/navBar/navBar";
import Footer from "../../home/footer/footer";

const SignCompany = () => {
  return (
    <>
      <NavBar />
    <Router>
      <div className="sign-up-company">
        <div className="sign-up_content-company">
          <div className="sign-block-form-company">
            <Switch>
              <Route path="/sign-up-company" component={Company} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
    <Footer/>
    </>
  );
};
export default SignCompany;
