import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import Home from "../../../home/home";
import "../form.css";
import { connect } from "react-redux";
import { signIn } from "../../../../actions/signIn";
import {useTranslation, withTranslation} from "react-i18next";

const initialState = {
  isAuthenticated: false,
  resData: "",
  email: "",
  password: "",
  emailErr: "",
  passwordErr: "",
  checked: false,
  userErr: "",
  isUser: "",
  isCompany: "",
};

class User extends Component {

  constructor(props) {
    super(props);
    this.state = { initialState };
    this.Login = this.Login.bind(this);
  }

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
    this.props.defaultTextErr()
  };

  validate = () => {
    let emailErr = "";
    let passwordErr = "";
    let userErr = "";

    if (this.state.resData) {
      userErr = "No such user exists";
    }

    if (!this.state.password) {
      passwordErr = "Password cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailErr = "Invalid email";
    }
    if (emailErr || passwordErr || userErr) {
      this.setState({ emailErr, passwordErr, userErr });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //clear form
      // this.setState(initialState)
    }
  };

  Login() {
    const payLoad = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.signIn(payLoad);
  }

  render() {
    console.log(this.props)
    return (
      <div className="form">
        <form className="form-cont" onSubmit={this.handleSubmit}>
          <div>
            <p className="form-cont__title">{this.props.t("sign.email")}</p>
            <input
              className="form-cont__input"
              placeholder={this.props.t("sign.email")}
              type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />

            <div
              style={{ color: "red", marginTop: "-7px", marginBottom: "5px" }}
            >
              {this.state.emailErr}
            </div>
          </div>
          <div>
            <p className="form-cont__title">{this.props.t("sign.password")}</p>
            <input
              className="form-cont__input"
              placeholder={this.props.t("sign.password")}
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <div
              style={{ color: "red", marginTop: "-7px", marginBottom: "5px" }}
            >
              {this.state.passwordErr}
            </div>
          </div>
          <div className="form-cont__check">
            <input
              className="form-cont__check-input"
              type="checkbox"
              name="checkbox"
              onChange={this.handleChange.bind(this)}
              value={this.state.checked}
            />
            <p className="form-cont__check-title">{this.props.t("sign.remember")}</p>
          </div>
          {this.props.textErr &&
           <span className="errText">{this.props.textErr}</span>}
          <button className="form-cont__btn" type="submit" onClick={this.Login}>
            {this.props.t("sign.login")}
          </button>
          {/*<a className="form-cont__link">Forgot your password?</a>*/}
          <div
            style={{
              color: "red",
              fontWeight: "bold",
              marginTop: "-7px",
              marginBottom: "5px",
            }}
          >
            {this.state.userErr}
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    signIntriger: state.SuccessSignIn.triger,
    textErr: state.SuccessSignIn.textErr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (data) => dispatch(signIn(data)),
    defaultTextErr:()=>dispatch({type:"CLEAR_ERR_TEXT"})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(User));
