import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './group-tabs.css'

class GroupTabs extends Component {
    render() {
        return (
            <div>
                <div className="tabs">
                    <NavLink activeClassName="active" className="info-tabs" to="/tour-groups/groups1">Group 1</NavLink>
                    <NavLink activeClassName="active" className="info-tabs" to="/tour-groups/groups2">Group 2</NavLink>
                </div>
            </div>
        );
    }
}

export default GroupTabs;