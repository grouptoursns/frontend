import React from "react";
import "./content.css";
import NavPanel from "../navPanel/navPanel";
import BlockBtn from "./block-btn/block-btn";
import Tours from "./tours/tours";
import Groups from "./groups/groups"
import AddTour from "./addTour/addTour"
import AdminSettings from "./settings/settings"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Content = () => {
  return (
    <div className="admin-wrapper">
      <div className="left-navPanel">
        <NavPanel />
      </div>
      <div className="block-content">
        <Switch>
          <Route exact path="/admin-panel" component={Tours} />
          <Route  path="/admin-panel/groups" component={Groups} />
          <Route  path="/admin-panel/add-tour" component={AddTour} />
          <Route  path="/admin-panel/settings" component={AdminSettings} />
        </Switch>
      </div>
    </div>
  );
};
export default Content;
