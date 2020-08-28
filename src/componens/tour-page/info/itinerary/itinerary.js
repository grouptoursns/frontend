import React, {Component, useEffect} from 'react';
import './itinerary.css'
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";

const Itinerary =(props)=>{

    useEffect( () => {
        props.fetchData(`http://161.35.199.172/api/tours/${props.detailsTours}`);
    },[]);

        return (
            <div className="itinerary">
                <div className="itinerary-content">
                    <h3>Accommodation</h3>
                    <p>{props.tourData.residence}</p>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);