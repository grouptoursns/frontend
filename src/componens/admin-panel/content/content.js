import React,{useState} from "react";
import "./content.css";
import NavPanel from "../navPanel/navPanel";
import BlockBtn from "./block-btn/block-btn";
import Tours from "./tours/tours";
import Groups from "./groups/groups"
import AddTour from "./addTour/addTour"
import AdminSettings from "./settings/settings"
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import { connect } from "react-redux";
import AddImageTour from "./addImageTour/addImageTour"
import UpdateTour from "./updateTour/updateTour"
import UpdateTourImage from "./updateTour-image/updatetour-image"

const Content = (props) => {
  const [id,setId] = useState()
  const idTour =(e)=>{
    setId(e)
  }

  return (
    <div className="admin-wrapper">
      <div className="left-navPanel">
        <NavPanel />
      </div>
      <div className="block-content">
        <Switch>
       
          <Route exact path="/admin-panel" component={Tours} />
          <Route  path="/admin-panel/groups" component={Groups} />
          <Route  path="/admin-panel/add-tour" component={props.addImage===false ?AddTour :AddImageTour} />
          <Route  path="/admin-panel/settings" component={AdminSettings} />
          <Route  path="/admin-panel/ubdate-tour" component={UpdateTour} />
          <Route  path="/admin-panel/ubdate-tour-image/:id" component={UpdateTourImage}/>
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    addImage:state.trigerCreateTour.trigerTour,
    isOpenUpdateTour:state.detailTourAdmin.isOpenPortal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
