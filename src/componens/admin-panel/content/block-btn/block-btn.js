import React,{useEffect,useState} from "react";
import "./block-btn.css";
import { Link } from "react-router-dom";

const BlockBtn = () => {
    const[url,setUrl]=useState();
    useEffect(()=>{
        setUrl(window.location.pathname);
    })

  return (
    <div className="adminPanel_btn1">
      <div className="wrapper-btn">
        <Link to="/admin-panel">
          <button className={"button-admin" +(url ==="/admin-panel" ? " active-btn-admin":'')}>Tours</button>
        </Link>
        <Link to="/admin-panel/add-tour">
          <button className={"button-admin" +(url ==="/admin-panel/add-tour" ? " active-btn-admin":'')}>Add tour</button>
        </Link>
        <Link to="/admin-panel/groups">
          <button className={"button-admin" +(url ==="/admin-panel/groups" ? " active-btn-admin":'')}>Groups</button>
        </Link>
      </div>
    </div>
  );
};
export default BlockBtn;
