
import React,{useState} from "react";
import "./company.css";
import { Formik } from "formik";
import * as Yup from "yup";
import 'react-phone-number-input/style.css'
import Phone from "./phone"

const Company = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
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

    validationSchema={Yup.object().shape({
      email: Yup.string().email().required("Required"),
      firstName:Yup.string().required("Name not provided")
      .min(3,"The name is too short - must be at least 3 characters."),
      lastName:Yup.string().required("Surname not provided.")
      .min(3,"The surname is too short - must be at least 3 characters."),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
        repeatPassword:Yup.string()
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
                <label htmlFor="email">Company name</label>

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
                <label htmlFor="email">Phone</label>
               <Phone/>
              </div>
            </div>
            <div className="input-row">
              <div>
                <label htmlFor="email">Company name</label>

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
                <label htmlFor="email">Phone</label>

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
            </div>
            <div className="line-block">
              <div className="black-line"></div>
            </div>
            <div className="input-width">
            <label htmlFor="email">Phone</label>
                <input
                  name="email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email && "error"}
                  className="input input-w"
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
            </div>
            <div className="input-row">
              <div>
                <label htmlFor="email">Company name</label>

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
                <label htmlFor="email">Phone</label>
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
                  className={errors.repeatPassword && touched.repeatPassword && "error"}
                  className="input"
                />
                {errors.repeatPassword && touched.repeatPassword && (
                  <div className="input-feedback">{errors.repeatPassword}</div>
                )}
              </div>
            </div>

            <div className="block-check">
              <p>
                <input type="checkbox" name="option1" value="a1" className="checkbox" />I
                have read and agree to the privacy policy and terms
              </p>
              <button type="submit" disabled={isSubmitting} className="submit">
                Sign up
              </button>
            </div>
          </form>
        </div>
      );
    }}
  </Formik>
);

export default Company;
