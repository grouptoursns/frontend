import React, {Component, useEffect} from 'react';
import './group.css'
import profilePhoto from './img/photo 6.png'
import Booking from "../../booking/booking";
import axios from "axios";
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const Group =(props)=> {


    useEffect( () => {
        props.fetchData(`http://161.35.199.172/api/tours/${props.detailsTours}`);
    },[]);

    let a = []
    let price = 0
    let start = ""
    let finish = ""
    let people = []

    if(props.tourData.group_tour){
        a = [...props?.tourData?.group_tour]
        price = a[0].price
        start = a[0].start_time
        finish = a[0].finish_time
        people = a[0].book_group
    }

    let men = []
    // let extraPeoples = ""
    if(people){
        const b = [...people]
        men = b.map((man) =>
            <li style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <img src={profilePhoto} alt="profile.icon"/>{man.name}
                <p> + {man.count_of_extra_people} extra people</p>
            </li>
        )
        // extraPeoples = b.map((extraPeople) =>
        //
        // )
    }

        return (
            <div className="group">
                <div className="group-list">
                    <div className="group-list__guide">
                        <img src={profilePhoto} alt="photo.icon"/>
                        <p>Hello!<br/>
                            My name is {props.tourData.about_guide}.
                            I will be your guide for the {props.tourData.name}.
                            Nice to meet you!</p>
                    </div>
                    <div className="group-list__people">
                        <h3>List of participants:</h3>
                        <ul>
                            {men}
                        </ul>
                    </div>
                </div>
                <div className="group-info">
                    <p>Price: {price}$</p>
                    <p>Start day: {start}</p>
                    <p>Finish day: {finish}</p>
                    <button className="alert">Book now</button>
                </div>
            </div>
        );
    }




const mapStateToProps = (state) => {
    return {
        tourData:state.tourData,
        detailsTours: state.detailsTour.detailsTour,
        groupId: state.tourData
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: url => {dispatch(tourDataFetch(url))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);