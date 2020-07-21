import React, { useState } from "react";
import "./sign-up.css";
import User from "./users-sign-up/user.js";
import Company from "./company-users-up/company.js"


const SignUp = () => {

  return (
 
      <div className="sign-up">
        <div className="sign-up_content">
          <div className="sign-block-form">
            <Company/>
          </div>
        </div>
      </div>
   
  );
};
export default SignUp;
