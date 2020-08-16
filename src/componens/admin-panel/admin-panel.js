import React,{useEffect} from "react"
import "./admin-panel.css"
import NavBar from "./navBar/navBar"
import Content from "./content/content"
import { connect } from "react-redux";
import {getCompany} from "../../actions/admin-panel/data-company/getCompanyData"

const AdminPanel=(props)=>{
    useEffect(()=>{
        let id = localStorage.getItem('id');

        props.getDataCompany(`http://161.35.199.172/api/users/company/${id}`)
    })
    return(
        <div className="page-admin-panel">
            <NavBar/>
            <Content/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getDataCompany:(url)=>dispatch(getCompany(url))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);