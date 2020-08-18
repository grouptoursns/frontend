import React, {Component, useEffect} from "react";
import Form from './tour-form/form.js';
import Info from './info/info.js';
import './tour.css'
import { connect } from "react-redux";
import Group from './groups-page/group/group.js'
import {tourDataFetch} from "../../actions/tourData";
import {tourData} from "../../reduser/tourData";


const Tour =(props)=>{


    useEffect( () => {
        props.fetchData(`http://161.35.199.172/api/tours/${props.detailsTours}`);
    },[]);

    // let group = props.tourData;


    let obj ={}
    if(props.tourData===undefined){
        obj = {}
    }

    else{
        obj = props.tourData
    }
            return (
            <div className='tour-page'>
                <Form data={obj}/>
                <Info info={obj}/>
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