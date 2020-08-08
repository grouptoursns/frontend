import React,{useEffect} from "react";
import "./user-page.css";
import UserInfo from "./user-info/user-info"
import Booked from "./booked/booked"
import { connect } from "react-redux";
import {custimerCabinet} from "../../actions/custumerCabinet"

const UserPage = (props) => {
useEffect(()=>{

    props.custumerCabinet()
},[])
console.log(props.custimerCabinetData.data)
let custimerData
if(props.custimerCabinetData.data===undefined){
    custimerData={}
}
else{
    custimerData={...props.custimerCabinetData.data}
}
  return (
      <div className="user-page">
          <div className="user-container">
              <UserInfo userInfo={custimerData}/>
           
              <div className="booking">
              <Booked tourList={custimerData}/>
              </div>
          </div>

      </div>
  )
};

const mapStateToProps = (state) => {
    return {
        custimerCabinetData:state.custimerCabinet
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        custumerCabinet:()=>dispatch(custimerCabinet())
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
