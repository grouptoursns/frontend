import React from "react";
import Form from './tour-form/form.js';
import Booking from './booking/booking.js';
import Info from './info/info.js';
import './tour.css'
import { connect } from "react-redux";
import {homeAxiosData} from "../../actions/dataHome";
import {allTour} from "../../actions/allTour";
import {trigerFilterOff} from "../../actions/trigerFilter";


const Tour = (props) => {
    let tour =[]

    if(props.title===undefined){
        tour=[]
    }
    else{
        tour=[...props.title]
    }
    console.log(tour)
    return (
        <div className='tour-page'>
            <Form/>
            <Booking/>
            <Info/>
        </div>
    );
}
    const mapStateToProps = (state) => {
        return {
            title: state.allTour.allTour.filter(
            (item) => item.id.includes(state.detailsTour.detailsTour)),
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {

        };
    };

    export default Tour;