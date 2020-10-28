import React, {Component, useEffect} from 'react';
import './group.css'
import profilePhoto from './img/photo 6.png'
import axios from "axios";
import {tourDataFetch} from "../../../../actions/tourData";
import {groupInfoFetch} from "../../../../actions/groupInfo";
import {groupInfo} from "../../../../reduser/groupInfo";
import {connect} from "react-redux";
import {groupDataFetch} from "../../../../actions/groupDetails";
import {useTranslation} from "react-i18next";


const Group = (props) => {
    const {t} = useTranslation()


    useEffect(() => {
        props.fetchData(`http://admin.tripsaround.me/group/${props.groupId}`)
    }, []);

    let a = []
    let price = 0
    let start = ""
    let finish = ""
    let people = []
    let guide = []
    let tour = ""


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
        tour = guide.name
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
                <p style={{color: "red"}}> + {man.count_of_extra_people} {t("group.extra")}</p>
            </li>
        )
    }

    let token = {}
    let name = ""
    token = localStorage.getItem("token")
    name = localStorage.getItem("name")
    console.log(token)


    const bookNow = () => {
        axios.post(`http://admin.tripsaround.me/group/${props.groupId}/book/`, {
            name: name,
            extra_people: countOfpeople - 1,
            count_of_extra_people: countOfpeople,
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
                    <h3>{tour}</h3>
                </div>
                <div className="group-info">
                    <p>{t("group.price")} {price}$</p>
                    <p>{t("group.start")} {start}</p>
                    <p>{t("group.finish")} {finish}</p>
                    <p>{t("group.count")} {countOfpeople} </p>
                    <p>{t("group.total")} {totalPrice + "$"} </p>
                    <button className="alert" onClick={bookNow}>{t("group.book")}</button>
                </div>
            </div>

            <div className="group-list__people">
                <h3>{t("group.list")}</h3>
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