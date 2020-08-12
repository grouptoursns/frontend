import React from "react"
import "./admin-panel.css"
import NavBar from "./navBar/navBar"
import Content from "./content/content"

const AdminPanel=()=>{
    return(
        <div className="page-admin-panel">
            <NavBar/>
            <Content/>
        </div>
    )
}
export default AdminPanel;