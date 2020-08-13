import React, {Component, useEffect} from 'react';
import './guide.css'
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";

const Guide =(props)=>{

    useEffect( () => {
        props.fetchData(`http://161.35.199.172/api/tours/${props.detailsTours}`);
    },[]);
        return (
            <div className="guide">
                <div className="guide-content">
                    <h3>Your guide</h3>
                    <p>{props.tourData.about_guide}
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

export default connect(mapStateToProps, mapDispatchToProps)(Guide);