import React, { useState, useEffect } from "react";
import "./lang.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";

const Lang = () => {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(false);
  const [company, setCompany] = useState(false);
  const [email, setEmail] = useState(1);

  const toggleOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUser(localStorage.getItem("user"));
    setCompany(localStorage.getItem("company"));
    setEmail(localStorage.getItem("email"));
  },[]);
  console.log(user);
  const menuClass = `dropdown-menu${open ? " show" : ""}`;

  if (localStorage.length !== 0) {
    if (user === 'true') {
      return (
        <div className="dropdown" onClick={toggleOpen}>
          <span
            className="btn  dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
          >
            {email}
          </span>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to="/user-page">
              Personal Area
            </Link>
            <Link className="dropdown-item" to="/sign-up">
              logout
            </Link>
          </div>
        </div>
      );
    }
    if (company === 'true') {
      return (
        <div className="dropdown" onClick={toggleOpen}>
          <span
            className="btn  dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
          >
          {email}
          </span>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to="/sign-in">
              Admin panel
            </Link>
            <Link className="dropdown-item" to="/sign-up">
              logout
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="dropdown" onClick={toggleOpen}>
          <span
            className="btn  dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
          >
            Sign in
          </span>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to="/sign-in">
              Sign in
            </Link>
            <Link className="dropdown-item" to="/sign-up">
              Sign up
            </Link>
          </div>
        </div>
      );
    }
  }
  if (localStorage.length === 0) {
    return (
      <div className="dropdown" onClick={toggleOpen}>
        <span
          className="btn  dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
        >
          Sign in
        </span>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          <Link className="dropdown-item" to="/sign-in">
            Sign in
          </Link>
          <Link className="dropdown-item" to="/sign-up">
            Sign up
          </Link>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    signIn: state.SuccessSignIn.signIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Lang);
