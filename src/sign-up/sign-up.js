import React, { useState } from "react";
import "./sign-up.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import User from "./users-sign-up/user.js";
import Company from "./company-users-up/company.js";

const SignUp = () => {
  const [active, setActive] = useState("1");

  const ActiveBtn = (e) => {
    setActive(e.target.id);
  };
  return (
    <Router>
      <div className="sign-up">
        <div className="sign-up_content">
          <div className="sign-block-btn">
            <Link to={"/sign-up"}>
              <button
                id="1"
                onClick={ActiveBtn}
                className={"sign-btn " + ((active == 1) ? "act" : " ")}
              >
                User
              </button>
            </Link>
            <Link to={"/sign-up" + "-company"}>
              <button
                id="2"
                onClick={ActiveBtn}
                className={"sign-btn " + ((active == 2 )? "act" : " ")}
              >
                Company
              </button>
            </Link>
          </div>
          <div className="sign-block-form">
            <Switch>
              <Route path="/sign-up" component={User} />
              <Route path="/sign-up-company" component={Company} />
            </Switch>
          </div>
        </div>
      </div>
      /
    </Router>
  );
};
export default SignUp;
