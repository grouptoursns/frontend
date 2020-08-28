
import React from "react";
import "./company.css";

import 'react-phone-number-input/style.css'
import Phone from "./phone"
import "../users-sign-up/user.css"

import { connect } from "react-redux";
import DropdownExampleSearchSelection from "./country"
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import {putCompany} from "../../../actions/company.js"

class Company extends React.Component {
  state = {
    fname: "",
    lname: "",
    cname:"",
    email: "",
    pasword: "",
    pasword2: "",
    country: "",
    avatar: null,
    site:"",
    adress:"",
    tripadvisor:"",
    form1: true,
    isOpen: false,
    phone:"",
  };
  changePhone=(phone1)=>{
    this.setState({phone:phone1})
    console.log(this.state.phone)
  }
  changeCountry=(country1)=>{
    this.setState({country:country1})
    console.log(this.state.country)
  }
  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
    if (
      this.state.pasword === this.state.pasword2 &&
      this.state.pasword != "" &&
      this.state.pasword2 != ""
    ) {
      this.setState({  form: false });
      this.props.postCompany(this.state);
      this.setState({ isOpen: true, form1: false });
      console.log(this.state)
      
    } else {
      console.log(this.state);
    }
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const modal =this.props.spiner;
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
      return(
        <span>{this.props.seccess}</span>
      )
      
    }
    if (this.state.form1 === true) {
      return (
        <div>
          <form
            className="needs-validation form-company-up"
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
                  Company name
                </label>
                <input
                  value={this.state.cname}
                  onChange={this.changeHandler}
                  type="text"
                  id="defaultFormRegisterPasswordEx4"
                  className="form-control input"
                  name="cname"
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
                  Phone
                </label>
                <Phone phone={this.changePhone}/>
                
                <div className="invalid-feedback">
                  Please provide a valid date.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBCol>
              <MDBCol md="6" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterPasswordEx4"
                  className="grey-text"
                >
                  Company site
                </label>
                <input
                  value={this.state.site}
                  onChange={this.changeHandler}
                  type="text"
                  id="defaultFormRegisterPasswordEx4"
                  className="form-control input"
                  name="site"
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
                  Please provide a valid password.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBCol>
              <div className="line-block">
                <div className="black-line"></div>
              </div>

              <MDBCol md="12" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterPasswordEx4"
                  className="grey-text"
                >
                  Address
                </label>
                <input
                  value={this.state.adress}
                  onChange={this.changeHandler}
                  type="text"
                  id="defaultFormRegisterPasswordEx4"
                  className="form-control input"
                  name="adress"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid password.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBCol>
              <MDBCol md="6" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterPasswordEx4"
                  className="grey-text"
                >
                  Choose country
                </label>
                <DropdownExampleSearchSelection country={this.changeCountry}/>
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
                 Tripadvisor
                </label>
                <input
                  value={this.state.tripadvisor}
                  onChange={this.changeHandler}
                  type="text"
                  id="defaultFormRegisterPasswordEx4"
                  className="form-control input"
                  name="tripadvisor"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid password.
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
   seccess:state.SuccessCompany.successCompany,
    spiner:state.Spiner.spiner
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
   postCompany:(data)=>dispatch(putCompany(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Company);


//<Phone/>