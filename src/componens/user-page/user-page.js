import React from "react";
import "./user-page.css";
import UserInfo from "./user-info/user-info"

const UserPage = () => {
  return (
      <div className="user-page">
          <div className="user-container">
              <UserInfo/>
          </div>

      </div>
  )
};
export default UserPage;
