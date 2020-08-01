import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './tabs.css'

class Tabs extends Component {
    render() {
        return (
            <div className="tabs">
                <NavLink activeClassName="active" className="info-tabs" to="/tourspage/general">General information</NavLink>
                <NavLink activeClassName="active" className="info-tabs" to="/tourspage/itinerary">Itinerary</NavLink>
                <NavLink activeClassName="active" className="info-tabs" to="/tourspage/inclusions">Inclusions</NavLink>
                <NavLink activeClassName="active" className="info-tabs" to="/tourspage/guide">Your guide</NavLink>
                <NavLink activeClassName="active" className="info-tabs" to="/tourspage/meet">Meeting point</NavLink>
                <NavLink activeClassName="active" className="info-tabs" to="/tourspage/reviews">Reviews</NavLink>
            </div>
        );
    }
}

export default Tabs;