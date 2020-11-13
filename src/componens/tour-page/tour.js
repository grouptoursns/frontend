import React, {Component, useEffect,useState} from "react";
import Form from './tour-form/form.js';
import Info from './info/info.js';
import './tour.css'
import { connect } from "react-redux";
import Group from './groups-page/group/group.js'
import {tourDataFetch} from "../../actions/tourData";
import {tourData} from "../../reduser/tourData";
import NavBar from "../home/navBar/navBar";
import { Link, Route, Switch, useParams } from "react-router-dom";



const Tour =(props)=>{
    const params = useParams();
    console.log(params)
    useEffect( () => {
        props.fetchData(`http://admin.tripsaround.me/api/tours/${params.id}`);
    },[props]);

    let obj ={}
    if(props.tourData===undefined){
        obj = {}
    }

    else{
        obj = props.tourData

    }
            return (
            <div className='tour-page'>
                <NavBar />
                <Form data={obj} setTourBookInfo={props.setTourBookInfo} tourBookInfo={props.tourBookInfo}/>
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
