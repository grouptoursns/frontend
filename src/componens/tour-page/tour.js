import React from "react";
import Form from './tour-form/form.js';
import Booking from './booking/booking.js';
import Info from './info/info.js';
import './tour.css'
import { connect } from "react-redux";
import {homeAxiosData} from "../../actions/dataHome";
import {allTour} from "../../actions/allTour";
import {trigerFilterOff} from "../../actions/trigerFilter";

import {tourDataFetch} from "../../actions/tourData";


const Tour = (props) => {
    // let tour =[]
    //
    // if(props.title===undefined){
    //     tour=[]
    // }
    // else{
    //     tour=[...props.title]
    // }
    // console.log(tour)
    // const fetchFunc=()=>{
    //     this.props.fetchData("http://161.35.199.172/api/tour-images");
    // }
    // fetchFunc();


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
            tourData:state.tourData
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            fetchData: url => {dispatch(tourDataFetch(url))}
        };
    };

    export default connect(mapStateToProps, mapDispatchToProps)(Tour);