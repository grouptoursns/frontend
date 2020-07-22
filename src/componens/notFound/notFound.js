import React from "react";
import "./notFound.css"
import img from "./img/Rectangle 98.png"
import {Link} from "react-router-dom";

const NotFound=()=>{
    return(
        <div className="page-notFound">
            <div className="content-notFound">
                <strong className="notFound-title">Page Not Found!</strong>
                <span className="back">back to <Link to="/" className="not-home">home</Link></span>
                
                <img alt="" src={img}/>
            </div>
        </div>
    )
}
export default NotFound;