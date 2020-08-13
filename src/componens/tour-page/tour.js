import React, {Component, useEffect} from "react";
import Form from './tour-form/form.js';
import Booking from './booking/booking.js';
import Info from './info/info.js';
import './tour.css'
import { connect } from "react-redux";
import {homeAxiosData} from "../../actions/dataHome";
import {allTour} from "../../actions/allTour";
import {trigerFilterOff} from "../../actions/trigerFilter";

import {tourDataFetch} from "../../actions/tourData";
import {tourData} from "../../reduser/tourData";


const Tour =(props)=>{


    useEffect( () => {
        props.fetchData(`http://161.35.199.172/api/tours/${props.detailsTours}`);
    },[]);

            return (
            <div className='tour-page'>
                <Form data={props.tourData}/>
                <Info info={props.tourData}/>
            </div>
        );
    }
    const mapStateToProps = (state) => {
        return {
            tourData:state.tourData,
            detailsTours: state.detailsTour.detailsTour
        };
    };


    const mapDispatchToProps = (dispatch) => {
        return {
            fetchData: url => {dispatch(tourDataFetch(url))}
        };
    };

    export default connect(mapStateToProps, mapDispatchToProps)(Tour);