import React,{useEffect} from "react"
import "./admin-panel.css"
import NavBar from "./navBar/navBar"
import Content from "./content/content"
import { connect } from "react-redux";
import {getCompany} from "../../actions/admin-panel/data-company/getCompanyData";
import {destinationsData} from "../../actions/destinations"

const AdminPanel=(props)=>{
    useEffect(()=>{
        let id = localStorage.getItem('id');

        props.getDataCompany(`http://admin.tripsaround.me/api/users/company/${id}`);
        props.destinationsData('http://admin.tripsaround.me/api/test/')
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
        getDataCompany:(url)=>dispatch(getCompany(url)),
        destinationsData: (url) => dispatch(destinationsData(url)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);