import React, {Component} from "react";
import Form from './tour-form/form.js';
import Booking from './booking/booking.js';
import Info from './info/info.js';
import './tour.css'
import { connect } from "react-redux";
import {homeAxiosData} from "../../actions/dataHome";
import {allTour} from "../../actions/allTour";
import {trigerFilterOff} from "../../actions/trigerFilter";

import {tourDataFetch} from "../../actions/tourData";


class Tour extends Component{
    componentDidMount() {
        this.props.fetchData("http://161.35.199.172/api/tours/8")
    }

    render() {
        return (
            <div className='tour-page'>
                <Form/>
                <Info/>
            </div>
        );
    }
}
    const mapStateToProps = (state) => {
        return {
            tourData:state.tourData

        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            fetchData: url => {dispatch(tourDataFetch(url))}
        };
    };

    export default connect(mapStateToProps, mapDispatchToProps)(Tour);