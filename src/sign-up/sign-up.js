import React, { useState } from "react";
import "./sign-up.css";
import User from "./users-sign-up/user.js";


const SignUp = () => {

  return (
 
      <div className="sign-up">
        <div className="sign-up_content">
          <div className="sign-block-form">
            <User/>
          </div>
        </div>
      </div>
   
  );
};
export default SignUp;
