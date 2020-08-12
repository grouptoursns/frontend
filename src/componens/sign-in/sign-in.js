import React from "react";
import Form from "./form/form.js";
import "./sign-in.css";
import NavBar from "../home/navBar/navBar";
import Footer from "../home/footer/footer";

const SignIn = () => {
  return (
    <div>
      <NavBar />
      <div className="in">
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
