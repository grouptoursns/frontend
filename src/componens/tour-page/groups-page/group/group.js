import React, {Component, useEffect} from 'react';
import './group.css'
import profilePhoto from './img/photo 6.png'
import Booking from "../../booking/booking";
import axios from "axios";
import {tourDataFetch} from "../../../../actions/tourData";
import {groupDataFetch} from "../../../../actions/groupDetails";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const Group =(props)=> {


    useEffect( () => {
        // props.fetchData(`http://161.35.199.172/api/tours/${props.detailsTours}`);
        props.fetchData(`http://161.35.199.172/group/${props.detailsTours.group_tour}`)
    },[]);

    let a = []
    let price = 0
    let start = ""
    let finish = ""
    let people = []
    let guide = []

    if(props.groupData){
        a = props.groupData
        price = a.price
        start = a.start_time
        finish = a.finish_time
        people = a.book_group
        guide = a.tour
    }

    let guideName = ""
    if(guide){
        guideName = guide.about_guide
    }

    let tourName = ""
    if(guide){
        tourName = guide.name
    }


    let men = []
    if(people){
        const b = [...people]
        men = b.map((man) =>
            <li style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <img src={profilePhoto} alt="profile.icon"/>{man.name}
                <p style={{color: "red"}}>  + {man.count_of_extra_people} extra people</p>
            </li>
        )
    }

        return (
            <div className="group">
                <div className="group-list">
                    <div className="group-list__guide">
                        <img src={profilePhoto} alt="photo.icon"/>
                        <p>Hello!<br/>
                            My name is {guideName}.
                            I will be your guide for the {tourName}.
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
        groupData: state.groupData
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: url => {dispatch(groupDataFetch(url))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);