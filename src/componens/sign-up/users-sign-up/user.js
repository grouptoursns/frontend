import React from "react";
import "./user.css";
import Calendar from "./calendar";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { putData } from "../../../actions/user.js";
import { connect } from "react-redux";
import galka from "./img/image 1.png";

import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

class User extends React.Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    pasword: "",
    pasword2: "",
    date: "",
    country: "Australia",
    avatar: null,
    isOpen: false,
    form: true,
    checkbox:false,
  };

  

  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
    console.log(event.target);
    if (
      this.state.pasword === this.state.pasword2 &&
      this.state.pasword != "" &&
      this.state.pasword2 != "" &&
      this.state.checkbox ===true
    ) {
      this.props.postUser(this.state);
      this.setState({ isOpen: true, form: false });
    } else {
      console.log(this.state);
    }
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onClickCheckbox = (e)=>{
    if (e.target.checked) {
      this.setState({checkbox:true})
     } else {
      this.setState({checkbox:false})
     }
  }
  render() {
    const modal = this.props.spiner;
    if (modal === true) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    if (modal === false) {
      return (
        <div className="modal1">
          <img className="modal-galka" src={galka} alt=""/>
          <span className="madal-text">{this.props.success}</span>
        </div>
      );
    }
    if (this.state.form === true) {
      return (
        <div>
          <form
            className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate
          >
            <MDBRow>
              <MDBCol md="6" className="mb-3  ">
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
                  First name
                </label>
                <input
                  value={this.state.fname}
                  name="fname"
                  onChange={this.changeHandler}
                  type="text"
                  id="defaultFormRegisterNameEx"
                  className="form-control input"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </MDBCol>
              <MDBCol md="6" className="mb-3  ">
                <label
                  htmlFor="defaultFormRegisterEmailEx2"
                  className="grey-text"
                >
                  Last name
                </label>
                <input
                  value={this.state.lname}
                  name="lname"
                  onChange={this.changeHandler}
                  type="text"
                  id="defaultFormRegisterEmailEx2"
                  className="form-control input"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="6" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterPasswordEx4"
                  className="grey-text"
                >
                  Email
                </label>
                <input
                  value={this.state.email}
                  onChange={this.changeHandler}
                  type="text"
                  id="defaultFormRegisterPasswordEx4"
                  className="form-control input"
                  name="email"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBCol>
              <MDBCol md="6" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterPasswordEx4"
                  className="grey-text"
                >
                  Birthday
                </label>

                <input
                  type="date"
                  id="defaultFormRegisterPasswordEx4"
                  name="date"
                  value={this.state.date}
                  onChange={this.changeHandler}
                  placeholder=""
                  className="form-control input"
                />

                <div className="invalid-feedback">
                  Please provide a valid date.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBCol>
              <div className="line-block">
                <div className="black-line"></div>
              </div>
              <MDBCol md="6" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterPasswordEx4"
                  className="grey-text"
                >
                  Password
                </label>
                <input
                  value={this.state.pasword}
                  onChange={this.changeHandler}
                  type="password"
                  id="defaultFormRegisterPasswordEx4"
                  className="form-control input"
                  name="pasword"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid email.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBCol>
              <MDBCol md="6" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterPasswordEx4"
                  className="grey-text"
                >
                  Repeat password
                </label>
                <input
                  value={this.state.pasword2}
                  onChange={this.changeHandler}
                  type="password"
                  id="defaultFormRegisterPasswordEx4"
                  className="form-control input"
                  name="pasword2"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid password.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBCol>
            </MDBRow>
            <div className="block-check">
              <MDBCol md="10" className="mb-3">
                <div className="custom-control custom-checkbox pl-3">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    onClick={this.onClickCheckbox}
                    required
                    
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="invalidCheck"
                  >
                    I have read and agree to the privacy policy and terms
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </MDBCol>
              <MDBBtn color="primary" type="submit" className="submit">
                Sign up
              </MDBBtn>
            </div>
          </form>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    success: state.Success.success,
    spiner: state.Spiner.spiner,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postUser: (data) => dispatch(putData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);

