import React from "react";
import "./user-page.css";
import UserInfo from "./user-info/user-info"
import Booked from "./booked/booked"

const UserPage = () => {
  return (
      <div className="user-page">
          <div className="user-container">
              <UserInfo/>
           
              <div className="booking">
              <Booked/>
              </div>
          </div>

      </div>
  )
};
export default UserPage;
