import React, {Component} from 'react';
import './groups.css'
import { Switch, Route} from "react-router-dom";
import GroupTabs from "./groups-tabs/group-tabs";
import Group from "./group/group";
import NavBar from "../../home/navBar/navBar";


class Groups extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (


            <div className="groups">
                <NavBar />
                <div>
                    <GroupTabs tourBookInfo={this.props.tourBookInfo}/>
                    <Switch>
                        <Route exact path="/tour-groups/groups"><Group tourBookInfo={this.props.tourBookInfo}/> </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Groups;