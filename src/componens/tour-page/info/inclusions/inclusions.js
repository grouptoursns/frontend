import React, {Component, useEffect} from 'react';
import './inclusions.css'
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";

const Inclusions =(props)=>{

    useEffect( () => {
        props.fetchData(`http://161.35.199.172/api/tours/${props.detailsTours}`);
    },[]);
        return (
            <div className="inclusions">
                <div className="inclusions-content">
                    <h3>What include</h3>
                    <p>{props.tourData.what_is_included}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Inclusions);