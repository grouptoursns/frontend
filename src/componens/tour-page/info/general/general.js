import React, {Component, useEffect} from 'react';
import './general.css'
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";

const General =(props)=>{

    useEffect( () => {
        props.fetchData(`http://161.35.199.172/api/tours/${props.detailsTours}`);
    },[]);


    let type = ""
    let typeOfTour = ""
    if (props.tourData.category){
        type = [...props.tourData.category]
        typeOfTour = type.name
    }

        return (
            <div className="general">
                <div className="general-content">
                    <h3>Description</h3>
                    <p>{props.tourData.description}</p>
                </div>
                {/*<div className="general-content">*/}
                {/*    <h3>Type of tour</h3>*/}
                {/*    <p>{typeOfTour}</p>*/}
                {/*</div>*/}
                <div className="general-content">
                    <h3>Travelers</h3>
                    <h4>Minimum numbers of travelers: {props.tourData.min_people}</h4>
                    <h4>Maximum numbers of travelers: {props.tourData.max_people}</h4>
                </div>
                <div className="general-content">
                    <h3>Required to bring</h3>
                    <p>{props.tourData.need_to_take}</p>
                </div>
                <div className="general-content">
                    <h3>Fitness level</h3>
                    <p>{props.tourData.difficult}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(General);