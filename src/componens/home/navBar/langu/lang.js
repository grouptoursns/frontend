import React, { useState, useEffect } from "react";
import "./lang.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import {SignInOff} from "../../../../actions/signIn"
import {useTranslation} from "react-i18next";


const Lang = (props) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);
  const [company, setCompany] = useState(false);
  const [email, setEmail] = useState(1);
    const {t} = useTranslation()

    useEffect(() => {
   
    setUser(localStorage.getItem("user"));
    setCompany(localStorage.getItem("company"));
    setEmail(localStorage.getItem("email"));
  },[]);
  const toggleOpen = () => {
    setOpen(!open);
  };
  
  console.log(user);
  const menuClass = `dropdown-menu${open ? " show" : ""}`;
const logout=()=>{
  localStorage.clear();
  props.siginOff()
}
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
                {t("langu.profile")}
            </Link>
            <Link  className="dropdown-item" to="/">
              <div onClick={logout}>
                  {t("langu.out")}
                </div>
             
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
            <Link className="dropdown-item" to="/admin-panel">
                {t("langu.admin")}
            </Link>
            <Link  className="dropdown-item" to="/">
            <div onClick={logout}>
                {t("langu.out")}
                </div>
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
            {t("langu.login")}
          </span>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to="/sign-in">
                {t("langu.login")}
            </Link>
            <Link className="dropdown-item" to="/sign-up">
                {t("langu.signUp")}
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
          {t("langu.login")}
        </span>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          <Link className="dropdown-item" to="/sign-in">
              {t("langu.login")}
          </Link>
          <Link className="dropdown-item" to="/sign-up">
              {t("langu.signUp")}
          </Link>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    siginOff:()=>dispatch(SignInOff())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lang);
