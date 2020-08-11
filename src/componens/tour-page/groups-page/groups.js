import React, {Component} from 'react';
import './groups.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GroupTabs from "./groups-tabs/group-tabs";
import Group from "./group/group";


class Groups extends Component {
    render() {
        return (
            <div className="groups">
                <div>
                    <GroupTabs />
                    <Switch>
                        <Route exact path="/tour-groups/groups1" component={Group}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Groups;