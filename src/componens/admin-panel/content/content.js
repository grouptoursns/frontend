import React from "react";
import "./content.css";
import NavPanel from "../navPanel/navPanel";
import BlockBtn from "./block-btn/block-btn";
import Tours from "./tours/tours";
import Groups from "./groups/groups"
import AddTour from "./addTour/addTour"
import AdminSettings from "./settings/settings"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import AddImageTour from "./addImageTour/addImageTour"

const Content = (props) => {
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
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    addImage:state.trigerCreateTour.trigerTour
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
