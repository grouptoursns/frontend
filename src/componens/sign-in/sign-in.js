import React from "react";
import Form from "./form/form.js";
import "./sign-in.css";
import NavBar from "../home/navBar/navBar";
import Footer from "../home/footer/footer";
import { connect } from "react-redux";

const SignIn = (props) => {

    if(props.signIntriger){
      props.history.push("/")
    }
  
  return (
    <div className="page-sign-in">
       <NavBar /> 
      <div className="in">
        <Form />
      </div>
      <Footer />
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    signIntriger: state.SuccessSignIn.triger,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
