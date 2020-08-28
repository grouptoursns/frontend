import React, {Component, useEffect} from 'react';
import './meet.css'
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";

const Meet =(props)=>{

    useEffect( () => {
        props.fetchData(`http://161.35.199.172/api/tours/${props.detailsTours}`);
    },[]);
        return (
            <div className="meet">
                <div className="meet-content">
                    <h3>Meeting point</h3>
                    <p>
                        {props.tourData.gathering_place}
                    </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Meet);