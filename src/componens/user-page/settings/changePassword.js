import "./settings.css";
import { browserHistory } from 'react-router';
import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { changePassword } from "../../../actions/changePassword";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

class ChangePassword extends React.Component {
  state = {
    password: "",
    password1: "",
    password2: "",
  };

  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";

    if (
      this.state.password1 === this.state.password2 &&
      this.state.password != "" &&
      this.state.password2 != ""
    ) {
      this.props.changePassword(this.state);
    } else {
    }
    
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    if(this.props.seccess) return <Redirect to="/sign-in"/>
    return (
      <div>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="8" className="mb-3  mr-auto ml-auto">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Old Password
              </label>
              <input
                value={this.state.pasword}
                onChange={this.changeHandler}
                type="password"
                id="defaultFormRegisterPasswordEx4"
                className="form-control input"
                name="password"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid email.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="8" className="mb-3  mr-auto ml-auto">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                New password
              </label>
              <input
                value={this.state.pasword2}
                onChange={this.changeHandler}
                type="password"
                id="defaultFormRegisterPasswordEx4"
                className="form-control input"
                name="password1"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid password.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="8" className="mb-3 mr-auto ml-auto">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Repeat new password
              </label>
              <input
                value={this.state.pasword2}
                onChange={this.changeHandler}
                type="password"
                id="defaultFormRegisterPasswordEx4"
                className="form-control input"
                name="password2"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid password.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
          </MDBRow>
          <div className="block-check">
            <MDBBtn color="primary" type="submit" className="submit">
              Change Password
            </MDBBtn>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seccess: state.changePassword.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePassword: (data) => dispatch(changePassword(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
