import React, { useState } from "react";

import Company from "./company.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const SignCompany = () => {
  return (
    <Router>
      <div className="sign-up">
        <div className="sign-up_content">
          <div className="sign-block-form">
            <Switch>
              <Route path="/sign-up-company" component={Company} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};
export default SignCompany;
