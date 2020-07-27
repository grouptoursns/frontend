import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Tabs extends Component {
    render() {
        return (
            <div>
                <NavLink to="/tourspage/general">General information</NavLink>
                <NavLink to="/tourspage/itinerary">Itinerary</NavLink>
                <NavLink to="/tourspage/inclusions">Inclusions</NavLink>
                <NavLink to="/tourspage/guide">Your guide</NavLink>
                <NavLink to="/tourspage/meet">Meeting point</NavLink>
                <NavLink to="/tourspage/reviews">Reviews</NavLink>
            </div>
        );
    }
}

export default Tabs;