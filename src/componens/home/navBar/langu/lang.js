import React, { useState, useEffect } from "react";
import "./lang.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";

const Lang = (props) => {
  const [open, setOpen] = useState(false);
  const [token,setToken] = useState();
  const [user,setUser]=useState();
  const [company,setCompany]=useState();

  const toggleOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {
    setToken(localStorage.getItem("login"));
    setUser(localStorage.getItem("user"));
    setCompany(localStorage.getItem("company"))
  }, []);
  console.log(token);
  const menuClass = `dropdown-menu${open ? " show" : ""}`;
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
};


const mapStateToProps = (state) => {
  return {
  signIn:state.SuccessSignIn.signIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lang);
