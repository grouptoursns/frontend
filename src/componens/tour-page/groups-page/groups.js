import React, {Component} from 'react';
import './groups.css'
import { Switch, Route} from "react-router-dom";
import Group from "./group/group";
import NavBar from "../../home/navBar/navBar";
import Footer from "../../home/footer/footer";

const Groups = (props) => {
    return (
        <div className="groups">
            <NavBar />
            <div>
                <Switch>
                    <Route exact path="/tour-groups/groups"><Group tourBookInfo={props.tourBookInfo}/> </Route>
                </Switch>
            </div>
            <Footer />
        </div>
    );
}

export default Groups;