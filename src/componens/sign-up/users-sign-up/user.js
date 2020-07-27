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
    console.log("hide-above-xs")
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
                  type="text"
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
                  type="text"
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

/*<Formik
initialValues={{ email: "", password: "" }}
onSubmit={(values, { setSubmitting }) => {
  if (values.password === values.repeatPassword) {
    setTimeout(() => {
      console.log("Logging in", values);
      setSubmitting(false);
    }, 500);
    axios
      .post("http://161.35.199.172/api/users/registration/", {
        email: values.email,
        first_name: values.firstName,
        last_name: values.lastName,
        birthday: values.birthday,
        password: values.password,
        password2: values.repeatPassword,
      })
      .then((res) => {
        console.log(res);
      });
  }
  else{
    console.log ( "sd dsvfbvdf ",values)
  }
}}
//********Handling validation messages yourself*******/
// validate={values => {
//   let errors = {};
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!EmailValidator.validate(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   const passwordRegex = /(?=.*[0-9])/;
//   if (!values.password) {
//     errors.password = "Required";
//   } else if (values.password.length < 8) {
//     errors.password = "Password must be 8 characters long.";
//   } else if (!passwordRegex.test(values.password)) {
//     errors.password = "Invalida password. Must contain one number";
//   }

//   return errors;
// }}
//********Using Yum for validation********/

/*validationSchema={Yup.object().shape({
  email: Yup.string().email().required("Required"),
  firstName: Yup.string()
    .required("Name not provided")
    .min(3, "The name is too short - must be at least 3 characters."),
  lastName: Yup.string()
    .required("Surname not provided.")
    .min(3, "The surname is too short - must be at least 3 characters."),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/(?=.*[0-9])/, "Password must contain a number."),
  repeatPassword: Yup.string()
    .required("No repeat password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/(?=.*[0-9])/, "Password must contain a number."),
})}
>
{(props) => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <div className="sign-user-content ">
      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <div>
            <label htmlFor="email">First name</label>
            <input
              name="firstName"
              type="text"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.firstName && touched.firstName && "error"}
              className="input"
            />
            {errors.firstName && touched.firstName && (
              <div className="input-feedback">{errors.firstName}</div>
            )}
          </div>
          <div>
            <label htmlFor="email">Last name</label>
            <input
              name="lastName"
              type="text"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.lastName && touched.lastName && "error"}
              className="input"
            />
            {errors.lastName && touched.lastName && (
              <div className="input-feedback">{errors.lastName}</div>
            )}
          </div>
        </div>
        <div className="input-row">
          <div>
            <label htmlFor="email">Email</label>

            <input
              name="email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email && "error"}
              className="input"
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
          </div>
          <div>
            <label htmlFor="email">Birthday</label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
              className="input"
            />
          </div>
        </div>
        <div className="line-block">
          <div className="black-line"></div>
        </div>

        <div className="input-row pasw">
          <div>
            <label htmlFor="email">Password</label>

            <input
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password && "error"}
              className="input"
            />
            {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
            )}
          </div>
          <div>
            <label htmlFor="email">Repeat password</label>

            <input
              name="repeatPassword"
              type="password"
              value={values.repeatPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.repeatPassword && touched.repeatPassword && "error"
              }
              className="input"
            />
            {errors.repeatPassword && touched.repeatPassword && (
              <div className="input-feedback">{errors.repeatPassword}</div>
            )}
          </div>
        </div>

        <div className="block-check">
          <p>
            <input
              type="checkbox"
              name="option1"
              value="a1"
              className="checkbox"
            />
            I have read and agree to the privacy policy and terms
          </p>
          <button type="submit" disabled={isSubmitting} className="submit">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}}
</Formik>*/
