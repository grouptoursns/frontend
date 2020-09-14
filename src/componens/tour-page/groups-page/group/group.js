import React, {Component, useEffect} from 'react';
import './group.css'
import profilePhoto from './img/photo 6.png'
import axios from "axios";
import {tourDataFetch} from "../../../../actions/tourData";
import {groupInfoFetch} from "../../../../actions/groupInfo";
import {groupInfo} from "../../../../reduser/groupInfo";
import {connect} from "react-redux";
import {groupDataFetch} from "../../../../actions/groupDetails";


const Group = (props) => {
    console.log(props)


    useEffect(() => {
        props.fetchData(`http://161.35.199.172/group/${props.groupId}`)
    }, []);

    let a = []
    let price = 0
    let start = ""
    let finish = ""
    let people = []
    let guide = []


    if (props.groupData) {
        a = props.groupData
        price = a.price
        start = a.start_time
        finish = a.finish_time
        people = a.book_group
        guide = a.tour
    }


    let countOfpeople = props.tourBookInfo.count
    let totalPrice = countOfpeople * price

    let guideName = ""
    if (guide) {
        guideName = guide.about_guide
    }

    let tourName = ""
    if (guide) {
        tourName = guide.name
    }


    let men = []
    if (people) {
        const b = [...people]
        men = b.map((man) =>
            <li className="img-li" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <img src={profilePhoto} alt="profile.icon"/>{man.name}
                <p style={{color: "red"}}> + {man.count_of_extra_people} extra people</p>
            </li>
        )
    }

    let token = {}
    let email = {}
    token = localStorage.getItem("token")
    email = localStorage.getItem("email")
    console.log(token)


    const bookNow = () => {
        axios.post(`http://161.35.199.172/group/${props.groupId}/book/`, {
            name: "Tologon",
            extra_people: countOfpeople,
            count_of_extra_people: countOfpeople - 1,
        }, {
            headers: {
                "Authorization": 'Token ' + token
            }

        })
            .then(response => {
                    if (response.status === 201) {
                        window.open(response.data.payment_url)
                        console.log(response.data.payment_url);
                    }
                }
            )



    }


    return (
        <div className="group">
            <div className="group-list">
                <div className="group-list__guide">
                    <h3>1 Day Burana-Kegety Gorge-Kol-Tor lake trip</h3>
                </div>
                <div className="group-info">
                    <p>Price: {price}$</p>
                    <p>Start day: {start}</p>
                    <p>Finish day: {finish}</p>
                    <p>Count of people: {countOfpeople} </p>
                    <p>Total price: {totalPrice + "$"} </p>
                    <button className="alert" onClick={bookNow}>Book now</button>
                </div>
            </div>

            <div className="group-list__people">
                <h3>List of participants:</h3>
                <ul>
                    {men}
                </ul>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        groupData: state.groupData,
        groupId: state.groupInfo.groupInfo
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: url => {
            dispatch(groupDataFetch(url))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);